#!/usr/bin/env python3
"""Regenerate the Upload Artifacts submission index.

Usage:
    python3 tools/build_upload_index.py                    # read the Nextcloud share (default)
    python3 tools/build_upload_index.py <local-folder>     # read a local folder instead

Nextcloud mode lists the public share over WebDAV (no password needed),
classifies every file into one of the 12 mandatory artifacts, keeps only
the latest copy per team+artifact (highest V-x.y.z in the name, ties
broken by upload time), and rewrites js/uploads-index.js with download
links that point straight at the share. Then commit + push to publish.

NOTE: the share must allow reading. A "File drop" share answers
"Only PUT is allowed" — switch it to "Allow upload and editing"
in Nextcloud sharing settings and rerun.

Local-folder mode copies the winning files into assets/uploads/ and
links to those copies instead.
"""

import os, re, sys, json, shutil, urllib.request, urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime

SHARE_URL = "https://nextcloud.bjitgroup.com/index.php/s/qSywfyXqQgxreRj"
BDT = timezone(timedelta(hours=6))

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEST = os.path.join(SITE, "assets", "uploads")
OUT = os.path.join(SITE, "js", "uploads-index.js")

# keyword rules checked IN ORDER — first match wins (specific before generic)
RULES = [
    (9,  ["risk buffer", "estimation assumption", "assumptions log", "buffer"]),
    (1,  ["requirement package", "requirements package", "req package", "requirement pack"]),
    (2,  ["open question", "questions register", "oqr"]),
    (3,  ["rml"]),
    (4,  ["ucm"]),
    (5,  ["rvw", "reverse validation"]),
    (7,  ["solution approval", "solution validation", "technology risk", "solution note"]),
    (8,  ["wbs", "work breakdown"]),
    (10, ["scope baseline", "margin baseline", "baseline", "margin"]),
    (11, ["brc", "go-no-go", "go no go", "go/no-go", "bid review"]),
    (6,  ["risk", "assumption"]),
    (9,  ["estimation", "estimate"]),
    (12, ["proposal", "presentation", "pitch", "deck"]),
]

VER = re.compile(r"v[\s\-_]?(\d+)[._](\d+)[._](\d+)", re.I)
RFP = re.compile(r"\[?\s*RFP[\s\-_]?(\d{1,2})\s*\]?", re.I)


def classify(name):
    # Artifact 0 — the issued RfP pack itself, checked FIRST because pack
    # names embed team names ("The Baseline Defenders") that would otherwise
    # trip the keyword rules. Original packs carry three bracketed groups
    # ([RFP-xx][Customer][Team] Project - v1.0.0); team uploads use two
    # ([RFP XX][Project] Artifact V-x.y.z).
    if len(re.findall(r"\[[^\]]+\]", name)) >= 3:
        return 0
    low = name.lower()
    for art, keys in RULES:
        if any(k in low for k in keys):
            return art
    # a stripped name containing "rfp" outside the tag also counts as the pack
    if "rfp" in RFP.sub("", name, count=1).lower():
        return 0
    return None


def version_of(name):
    m = VER.search(name)
    return tuple(int(g) for g in m.groups()) if m else (0, 0, 0)


def list_nextcloud(share_url):
    """Yield (filename, upload_epoch, download_url) for every file on the share.

    Uses Nextcloud's nc:upload_time (when the file actually arrived on the
    server); getlastmodified is only a fallback, since Nextcloud preserves
    the uploader's original file-modification time there.
    """
    token = share_url.rstrip("/").split("/")[-1]
    base = share_url.split("/index.php/")[0]
    body = (b'<?xml version="1.0"?>'
            b'<d:propfind xmlns:d="DAV:" xmlns:nc="http://nextcloud.org/ns">'
            b'<d:prop><d:resourcetype/><d:getlastmodified/><nc:upload_time/></d:prop>'
            b'</d:propfind>')
    req = urllib.request.Request(
        base + "/public.php/webdav/", method="PROPFIND", data=body,
        headers={"Depth": "1", "Content-Type": "application/xml",
                 "Authorization": "Basic " + __import__("base64").b64encode(
                     (token + ":").encode()).decode()})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            xml = r.read()
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        if "files drop" in body.lower() or e.code == 405:
            sys.exit("The share is still in 'File drop' mode (upload-only), so its "
                     "contents can't be listed or downloaded.\nIn Nextcloud, change the "
                     "share to 'Allow upload and editing' and rerun this script.")
        sys.exit(f"Nextcloud listing failed: HTTP {e.code}\n{body[:500]}")

    ns = {"d": "DAV:", "nc": "http://nextcloud.org/ns"}
    for resp in ET.fromstring(xml).findall("d:response", ns):
        href = resp.find("d:href", ns).text
        name = urllib.parse.unquote(href.rstrip("/").split("/")[-1])
        ok = resp.find("d:propstat[d:status='HTTP/1.1 200 OK']/d:prop", ns)
        if ok is None or ok.find("d:resourcetype/d:collection", ns) is not None:
            continue  # the folder itself / subfolders
        up = ok.find("nc:upload_time", ns)
        lm = ok.find("d:getlastmodified", ns)
        if up is not None and up.text and up.text.isdigit() and int(up.text) > 0:
            mtime = int(up.text)
        elif lm is not None and lm.text:
            mtime = parsedate_to_datetime(lm.text).timestamp()
        else:
            mtime = 0
        dl = f"{share_url}/download?path=%2F&files={urllib.parse.quote(name)}"
        yield name, mtime, dl


def list_local(folder):
    for f in sorted(os.listdir(folder)):
        p = os.path.join(folder, f)
        if os.path.isfile(p) and not f.startswith((".", "~$")):
            yield f, os.path.getmtime(p), p


def main():
    local = len(sys.argv) > 1
    if local and not os.path.isdir(sys.argv[1]):
        sys.exit(__doc__)

    files = list_local(sys.argv[1]) if local else list_nextcloud(SHARE_URL)

    best, skipped = {}, []
    for name, mtime, loc in files:
        m = RFP.search(name)
        if not m:
            skipped.append(name + "  (no RFP tag)")
            continue
        art = classify(name)
        if art is None:
            skipped.append(name + "  (artifact type not recognized)")
            continue
        key = (f"RFP-{int(m.group(1)):02d}", art)
        cand = (version_of(name), mtime, loc, name)
        if key not in best or cand[:2] > best[key][:2]:
            best[key] = cand

    if local:
        if os.path.isdir(DEST):
            shutil.rmtree(DEST)
        os.makedirs(DEST)

    index = {}
    for (rfp, art), (_v, mtime, loc, name) in sorted(best.items()):
        if local:
            safe = re.sub(r"[^A-Za-z0-9.-]+", "_", name).strip("_")
            shutil.copy2(loc, os.path.join(DEST, safe))
            url = "assets/uploads/" + safe
        else:
            url = loc
        t = datetime.fromtimestamp(mtime, BDT).strftime("%H:%M")
        index.setdefault(rfp, {})[str(art)] = {"name": name, "url": url, "time": t}

    entries = [{"rfp": r, "artifacts": a} for r, a in sorted(index.items())]
    built = datetime.now(BDT).strftime("%-d %b %Y · %H:%M")
    with open(OUT, "w", encoding="utf-8") as fp:
        fp.write("/* GENERATED by tools/build_upload_index.py — do not edit by hand. */\n\n"
                 f'const UPLOAD_INDEX_BUILT = "{built}";\n'
                 f"const UPLOAD_INDEX = {json.dumps(entries, indent=2, ensure_ascii=False)};\n")

    print(f"{sum(len(a) for a in index.values())} files indexed "
          f"across {len(index)} teams -> {os.path.relpath(OUT, SITE)}")
    if skipped:
        print("\nSkipped (fix the file name and rerun):")
        for s in skipped:
            print("  -", s)


if __name__ == "__main__":
    main()
