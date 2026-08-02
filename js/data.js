/* ============================================================
   Delivery Excellence Workshop — shared data
   Source: BJIT Delivery Excellence Workshop Plan (1 Aug 2026, v1.0)
   Rosters: 'DM summary, list, customer list - new.xlsx'
   ============================================================ */

const WORKSHOP = {
  title: "Delivery Excellence Workshop",
  tagline: "Live-Fire Workshop: Bid, Contract & Finance Governance with Live RfPs",
  date: "1 August 2026",
  eventISO: "2026-08-01T08:30:00+06:00",
  venue: "BJIT Auditorium & Development Floors",
  version: "Version 1.0"
};

/* ---------------- Agenda ---------------- */
const AGENDA = [
  {
    time: "08:30 – 08:45",
    title: "Opening & Rules Briefing",
    place: "Auditorium",
    icon: "🎬",
    tone: "lav",
    detail: "Group & customer assignments confirmed; ground rules; RfP packs handed to customers; groups disperse to chosen floor space / meeting rooms."
  },
  {
    time: "08:45 – 10:15",
    title: "Phase 1 — Requirement Finalization",
    place: "1.5 h · all groups in parallel",
    icon: "📋",
    tone: "sky",
    detail: "Consolidate RfP into Requirement Package; Open Questions Register; RML classification; remote clarification with customer; Reverse Validation Workshop (RVW); UCM classification; Risk/Assumption Register started."
  },
  {
    time: "10:15 – 11:15",
    title: "Phase 2 — Solution Identification & Approval",
    place: "1 h",
    icon: "🧩",
    tone: "mint",
    detail: "Solution architecture & tech-stack rationale; Technology Risk Assessment; AI Leverage Plan drafted; Solution Validation Gate sign-off with customer (BrSE role)."
  },
  {
    time: "11:15 – 12:45",
    title: "Phase 3 — Estimation, Proposal & BRC",
    place: "1.5 h",
    icon: "🧮",
    tone: "peach",
    detail: "Deliverable-based WBS; risk buffer vs UCM; Estimation Assumptions Log; margin baseline on Workshop Rate Card; Scope Baseline (Contract Gov); ~11:30 live scope-change injection from customer (CR discipline test); Bid Review Committee & Go / No-Go."
  },
  {
    time: "12:45 – 13:00",
    title: "Proposal Freeze & Submission",
    place: "Hard deadline",
    icon: "🧊",
    tone: "lav",
    detail: "Final Technical Proposal + all 12 artifacts uploaded to the designated folder. Late = flagged to judges."
  },
  {
    time: "13:00 – 14:00",
    title: "Lunch & Prayer Break",
    place: "Fixed break",
    icon: "🍽️",
    tone: "gold",
    detail: "Fixed break. Tea / snacks / smoking breaks are on-demand throughout the day — no other scheduled stops."
  },
  {
    time: "14:00 – 17:30",
    title: "Presentations",
    place: "Auditorium · plenary",
    icon: "🎤",
    tone: "sky",
    detail: "20 groups × 10 minutes HARD STOP (recommended 8 min pitch + 2 min Q&A/changeover). Judges score live via Microsoft Form. Running order announced at freeze."
  },
  {
    time: "17:30 – 18:00",
    title: "Results, Recognition & Closing Message",
    place: "Auditorium",
    icon: "🏆",
    tone: "gold",
    detail: "Scores consolidated; Top 3 winners recognized; leadership closing."
  }
];

/* ---------------- RfP Catalog (20 engagements, from 'RFP Owning Customer' sheet) ---------------- */
const RFPS = [
  { id: "RFP-01", icon: "🏦", category: "Web application", filter: "web", stack: "Java + React, MySQL, AWS", scope: "Build + manual & automation testing + AWS hosting", domain: "Financial", keeps: "UX design", customer: "Sajidul Huq" },
  { id: "RFP-02", icon: "🛒", category: "Web application", filter: "web", stack: "PHP + React, MySQL, AWS", scope: "Build + manual & automation testing + AWS hosting", domain: "E-commerce", keeps: "UX design", customer: "Shahjalal Hossain" },
  { id: "RFP-03", icon: "🏠", category: "Web application", filter: "web", stack: "Node + React, MySQL, AWS", scope: "Build + manual & automation testing + AWS hosting", domain: "Real estate", keeps: "UX design", customer: "Abdul Halim" },
  { id: "RFP-04", icon: "🤖", category: "Mobile application", filter: "mobile", stack: "Native Android", scope: "Build + testing + market release", domain: "E-commerce", keeps: "Backend", customer: "Dewan Shamsul Alam" },
  { id: "RFP-05", icon: "🍏", category: "Mobile application", filter: "mobile", stack: "Swift (iOS)", scope: "Build + testing + market release", domain: "Financial", keeps: "Backend", customer: "Mostafizur Rahman" },
  { id: "RFP-06", icon: "🦋", category: "Mobile application", filter: "mobile", stack: "Flutter", scope: "Build + testing + market release", domain: "Real estate", keeps: "Backend", customer: "Mamun Ahmed Khan" },
  { id: "RFP-07", icon: "🏭", category: "PC application", filter: "pc", stack: "C#.NET desktop", scope: "Build + manual & automation testing + release", domain: "Manufacturing (equipment control)", keeps: "Backend/data systems", customer: "Dipankar Das Shovon" },
  { id: "RFP-08", icon: "🚘", category: "Embedded", filter: "embedded", stack: "C/C++ automotive embedded", scope: "Build + testing + release", domain: "Automotive (ECU/ADAS supplier)", keeps: "Hardware & specs", customer: "Iftekhar Uddin Ahmed" },
  { id: "RFP-09", icon: "🛠️", category: "Maintenance", filter: "maintenance", stack: "Java + React legacy, AWS", scope: "User support, infra monitoring, FE/BE bug fixes, CR handling", domain: "Financial", keeps: "Product roadmap", customer: "Shaiful Islam" },
  { id: "RFP-10", icon: "🧰", category: "Maintenance", filter: "maintenance", stack: "PHP + React legacy, AWS", scope: "User support, infra monitoring, FE/BE bug fixes, CR handling", domain: "E-commerce", keeps: "Product roadmap", customer: "Partha Pratim Sarkar" },
  { id: "RFP-11", icon: "💊", category: "Legacy migration", filter: "migration", stack: "COBOL → React + Spring", scope: "Desktop-to-web migration", domain: "Pharmaceutical inventory", keeps: "Domain SMEs, data", customer: "ABM Mahbubur Rahman" },
  { id: "RFP-12", icon: "📡", category: "QA partner", filter: "qa", stack: "UI, API, manual & automation", scope: "Independent QA for operator systems", domain: "Telecom", keeps: "All development", customer: "Himadri Mondol" },
  { id: "RFP-13", icon: "☂️", category: "Migration QA", filter: "qa", stack: "PowerBuilder → React + Spring", scope: "ST, SIT, Scenario, Regression, UAT", domain: "Insurance (policy admin)", keeps: "All development", customer: "Nadim Hossain" },
  { id: "RFP-14", icon: "🔌", category: "Mechanical design", filter: "mechanical", stack: "SolidWorks", scope: "Design services", domain: "Consumer appliances", keeps: "Mfg. & validation", customer: "Azizul Islam" },
  { id: "RFP-15", icon: "🚙", category: "Mechanical design", filter: "mechanical", stack: "CATIA", scope: "Design services", domain: "Automotive body parts", keeps: "Mfg. & validation", customer: "Sayeedul Islam" },
  { id: "RFP-16", icon: "🔐", category: "Cloud infra & SecOps", filter: "cloud", stack: "HA, multi-zone, dynamic scaling, SIEM + SOAR, DevSecOps", scope: "Infra design, automation, monitoring & operation", domain: "Financial services platform", keeps: "Application development", customer: "Amir Hossain" },
  { id: "RFP-17", icon: "📦", category: "Low-code", filter: "lowcode", stack: "OutSystems", scope: "New platform build", domain: "Warehouse management", keeps: "Business process owners", customer: "Homayun Kabir" },
  { id: "RFP-18", icon: "♻️", category: "LABO refactoring", filter: "labo", stack: "Existing stack (web)", scope: "Massive refactoring under long-running LABO (ODC) model", domain: "E-commerce web service", keeps: "Product ownership", customer: "Minhajur Rahman" },
  { id: "RFP-19", icon: "🗄️", category: "SAP ERP", filter: "erp", stack: "SAP", scope: "Setup, customization, integration, testing & maintenance", domain: "Warehouse management", keeps: "Business sign-off", customer: "Tareque Arefin" },
  { id: "RFP-20", icon: "🗂️", category: "Engineering data", filter: "engdata", stack: "TeamCenter, CATIA V6", scope: "Data migration, validation, correction, item creation", domain: "Industrial engineering data", keeps: "PLM ownership", customer: "Susanta Kumar Saha" }
];

const RFP_FILTERS = [
  { key: "all",         label: "All (20)" },
  { key: "web",         label: "Web" },
  { key: "mobile",      label: "Mobile" },
  { key: "pc",          label: "PC" },
  { key: "embedded",    label: "Embedded" },
  { key: "maintenance", label: "Maintenance" },
  { key: "migration",   label: "Legacy migration" },
  { key: "qa",          label: "QA" },
  { key: "mechanical",  label: "Mechanical" },
  { key: "cloud",       label: "Cloud & SecOps" },
  { key: "lowcode",     label: "Low-code" },
  { key: "labo",        label: "LABO" },
  { key: "erp",         label: "SAP ERP" },
  { key: "engdata",     label: "Engineering data" }
];

/* ---------------- Mandatory artifacts (submission pack) ---------------- */
const ARTIFACTS = [
  { n: 1,  name: "Requirement Package (consolidated from RfP)",            anchor: "Bid / Requirement Clarification" },
  { n: 2,  name: "Open Questions Register",                                anchor: "Bid / Requirement Clarification" },
  { n: 3,  name: "RML status per requirement (≥ 2 to estimate)",           anchor: "Estimation Entry Gate" },
  { n: 4,  name: "UCM classification (Stable / Partially Defined / High Uncertainty / R&D)", anchor: "Bid / Estimation" },
  { n: 5,  name: "Reverse Validation Workshop record",                     anchor: "Critical control — before proposal" },
  { n: 6,  name: "Risk / Assumption Register (client-visible)",            anchor: "Bid + Contract" },
  { n: 7,  name: "Solution Approval note (+ Technology Risk Assessment)",  anchor: "Solution Validation Gate" },
  { n: 8,  name: "Deliverable-based WBS (100% traceable)",                 anchor: "Bid / Estimation" },
  { n: 9,  name: "Risk Buffer calculation + Estimation Assumptions Log",   anchor: "Estimation Validation Gate" },
  { n: 10, name: "Scope Baseline + Margin Baseline (Workshop Rate Card)",  anchor: "Contract + Financial Gov" },
  { n: 11, name: "BRC decision record (Go / No-Go)",                       anchor: "Bid Approval" },
  { n: 12, name: "Complete Technical Proposal (the presented output)",     anchor: "Final deliverable" }
];

/* ---------------- Governance gates (must pass in order) ---------------- */
const GATES = [
  { name: "Estimation Entry Gate",      hint: "RML ≥ 2 per requirement before estimation starts" },
  { name: "Solution Validation Gate",   hint: "Solution approval with customer (BrSE role) + Technology Risk Assessment" },
  { name: "Estimation Validation Gate", hint: "Risk buffer vs UCM + Estimation Assumptions Log" },
  { name: "BRC — Go / No-Go",           hint: "Bid Review Committee decision record" },
  { name: "Scope Baseline Confirmation",hint: "Scope + margin baseline on the Workshop Rate Card" }
];

/* ---------------- Evaluation rubric ---------------- */
const RUBRIC = [
  { criterion: "Governance compliance", weight: 40, judged: "Submitted artifact pack", detail: "Gates, artifacts, RVW, CR discipline on the live injection" },
  { criterion: "Estimation & margin logic", weight: 30, judged: "Proposal + artifacts", detail: "WBS traceability, buffer vs UCM, assumptions, margin baseline" },
  { criterion: "AI leverage", weight: 15, judged: "Proposal section + Q&A", detail: "Credible plan, tools named, claimed savings challengeable" },
  { criterion: "Presentation quality", weight: 15, judged: "The 10-minute pitch", detail: "Clarity, structure, timekeeping" }
];

/* ---------------- Rules of engagement ---------------- */
const RULES = [
  { icon: "🔓", title: "Open everything", text: "Open book, open AI, open internet, open laptop." },
  { icon: "🤖", title: "AI is mandatory, not optional", text: "Consider Claude Code (agentic) for coding-related analysis, and Anthropic / OpenAI agentic tools for non-coding tasks. Every proposal carries an AI Leverage Plan showing how AI reduced cost and improved quality; claims are challengeable by judges." },
  { icon: "💬", title: "Remote-only customer communication", text: "The customer answers only questions asked properly (drives Open Questions Register discipline). Verbal promises don't exist — if it is not written, it was not agreed." },
  { icon: "🔁", title: "No CR, No Execution", text: "The ~11:30 scope-change injection must be handled through Change Impact Analysis and a costed CR — absorbing it silently scores against you." },
  { icon: "🤫", title: "No cross-group sharing", text: "Each engagement is confidential between a group and its customer." },
  { icon: "💳", title: "Workshop Rate Card", text: "Issued with the RfP pack; all margin baselines use this card so results are comparable." },
  { icon: "🇬🇧", title: "English only", text: "For all artifacts, communication and presentations." },
  { icon: "⏱️", title: "10-minute hard stop", text: "At presentations — the moderator cuts the microphone." }
];

/* ---------------- Proposal must contain ---------------- */
const PROPOSAL_ITEMS = [
  "Executive summary", "Scope", "Out of scope",
  "Solution with tech stack", "Estimation", "Schedule with key milestones",
  "Meeting cadence", "Reporting", "Risk / Issue / Dependency",
  "Approval & version history", "Team structure", "Resource allocation plan"
];

/* ---------------- DM summary (speciality distribution, from 'DM Summary' sheet) ---------------- */
const DM_SUMMARY = [
  { speciality: "Web",         count: 35, groups: 7 },
  { speciality: "Mobile",      count: 15, groups: 3 },
  { speciality: "PC+Embed",    count: 10, groups: 2 },
  { speciality: "SQA",         count: 10, groups: 2 },
  { speciality: "ERP",         count:  5, groups: 1 },
  { speciality: "Cloud",       count:  5, groups: 1 },
  { speciality: "Mechanical",  count:  9, groups: 2 },
  { speciality: "Data",        count:  5, groups: 1 },
  { speciality: "Hybrid",      count:  5, groups: 1 }
];

/* ---------------- Delivery Managers (99, from 'DMs' sheet) ---------------- */
const DMS = [
  ["Ikramul Hoque","Web"],["Jishnu Sardar","Mobile"],["Minhaz Karim","Web"],["Rezaur Rahman","Web"],
  ["Ridoan Anik","Hybrid"],["Ahmed Asif","Web"],["Arup Das","Hybrid"],["Barkat Ullah","Data"],
  ["Giles Cornelius","Data"],["Jahirul Rajib","Web"],["Mushfiqur Rahman","SQA"],["Sam Dsilva","Data"],
  ["Shahariar Newaj","Data"],["Abdul Quadir","SQA"],["Illius Jamil","Hybrid"],["Jafrul Sadek","PC+Embed"],
  ["Mahmudul Khan","PC+Embed"],["Monowarul Islam","PC+Embed"],["Rafiqul Hasan","PC+Embed"],["Sumon Faruq","Web"],
  ["Sumon Mohtasin","SQA"],["Al Maruf","Mobile"],["Anisur Rahman","Mobile"],["Borhan Uddin","PC+Embed"],
  ["Gobinda Sadhu","Mobile"],["Helal Uddin","Mobile"],["Khairuzzaman Shipon","Mobile"],["Manjurul Hoque","Mobile"],
  ["Samad Mizi","Mobile"],["Ali Mollah","Mechanical"],["Mdmahadi Hasan","Mechanical"],["Muktadir Hossain","Mechanical"],
  ["Omar Faruq","Mechanical"],["Rakibul Islam","Mechanical"],["Samirul Islam","Mechanical"],["Shibashish Saha","Mechanical"],
  ["Amit Mondol","Mobile"],["Arefin Newaz","Mobile"],["Ekramul Hoque","Mobile"],["Islam Mominul","Mobile"],
  ["Mohabul Hossain","Mobile"],["Rasel Rana","Mobile"],["Rejaul Hasan","PC+Embed"],["Saidul Ziku","Web"],
  ["Shajal Chandra","SAP"],["Shamim Hossen","Hybrid"],["Fazla Rabbi","Web"],["Monir Zzaman","Web"],
  ["Rashedul Alam","Mobile"],["Abdullah Hasan","SAP"],["Ahmed Shahriar","SAP"],["Shakib Jahan","SAP"],
  ["Shaker Ahmed","SAP"],["A Habib","SQA"],["Alman Hossain","SQA"],["Foysal Ahmed","SQA"],
  ["Sharmin Manjur","SQA"],["Sultan Rabbani","SQA"],["Sumon Shahriar","SQA"],["Ahasan Khan","Cloud"],
  ["Hassan Razib","Cloud"],["Islam Monjurul","Cloud"],["Md Tanvir","Cloud"],["Sudip Proshad","Hybrid"],
  ["A Masud","Web"],["Abu Rizvi","Web"],["Abu Saleh","Web"],["Benzir Hasan","Web"],
  ["Fahim Faysal","Web"],["Firoz Ahmed","Web"],["Golam Rabbi","Web"],["Hafizur Rahman","Web"],
  ["Ibrahim Khalil","Web"],["Md Touhid","Web"],["Monir Bhuiyan","Web"],["Shamim Khan","Web"],
  ["Thanvir Ahmed","Web"],["Kamal Uddin","Cloud"],["Abu Hossain","PC+Embed"],["Pritom Routh","PC+Embed"],
  ["Ruhul Amin","PC+Embed"],["Shakhawat Hossin","PC+Embed"],["Abdullah Qayum","Web"],["Enamul Hasan","Web"],
  ["Liton Miah","Web"],["Mahabub Mollah","Web"],["Md Asif","Web"],["Md Moniruzzaman","Web"],
  ["Pavel Parvej","Web"],["Sudeepta Biswas","Web"],["Hossain Delwar","Web"],["Mdshifatul Islam","Web"],
  ["Nazmul Islam","Web"],["Uddin Helal","Web"],["Subrata Banik","SQA"],["Debashis Bhattacharjee","Data"],
  ["Md Anamul Hasan","Mechanical"],["Md Kamrul Hasan","Mechanical"],["MD. JOSIM UDDIN RONI","Web"]
];

/* ---------------- Customers (20, ED senior management — also the judges) ---------------- */
const CUSTOMERS = [
  "Nadim Hossain","Islam Shaiful","Sayeedul Islam","Mostafizur Rahman","Azizul Islam",
  "Mamun Khan","Shahjalal Hossain","Tareque Arefin","Sajidul Huq","Susanta Kumar",
  "Homayun Kabir","Iftekhar Ahmed","Amir Shohag","Dewan Shamsul","Minhajur Rahman",
  "Dipankar Shovon","ABM Mahbub Rahman","Partha Sarker","Abdul Halim","Himadri"
];

/* ---------------- Customer Evaluation (rules update, from 'Customer Evaluation.xlsx') ---------------- */
const CUSTOMER_EVAL_CRITERIA = [
  { n: 1, icon: "🗂️", title: "RfP Organization & Clarity", detail: "How well-organized was the RfP document itself? Structure, completeness and professional quality — the deliberate ambiguities don't count against it; rate whether it felt like a real, well-prepared client RfP." },
  { n: 2, icon: "🎓", title: "Requirement Mastery (Consultant/BSE role)", detail: "Knew their RfP deeply; answers stayed consistent, no self-contradictions." },
  { n: 3, icon: "⚖️", title: "Answer Quality & Fairness", detail: "Precise questions earned precise answers; vague questions got realistic vague ones — played the ambiguity game fairly without leaking or misleading." },
  { n: 4, icon: "🤝", title: "Scope-Change & Negotiation (Customer role)", detail: "Injected the change request realistically and negotiated like a real client — firm but reasonable." },
  { n: 5, icon: "🌱", title: "Learning Value", detail: "Interacting with this customer genuinely improved your real-world customer-handling skills." }
];

/* Team name → Microsoft Forms survey URL (access restricted to that team's members) */
const CUSTOMER_EVAL_FORMS = {
  "The Scope Creepers":              "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRURTdNTVpNMkxVNVI2MFZTMzlJVE5IMFpMUi4u",
  "404: Free Work Not Found":        "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUOE9ITjdCSTg5MExLRVdQN1FBVzRZRVc3Mi4u",
  "Ctrl+Alt+Deliver":                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUOVk0N1NYUDVYRVBQVkdOU1ZRNTFMRFJZOS4u",
  "Swipe Right to Sign Off":         "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUREhJUUZNMzJCRUhPRVNJTkNaU0UzRzlHNi4u",
  "Push Notification Nation":        "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRURU1VTjE3SElWRFAyWjcyNUlKVUpFT0FYNS4u",
  "The App-solute Owners":           "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUREFUSzYzV01LUVhBOVY1S1c5RFRZT0UyQS4u",
  "Bare Metal Bidders":              "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUOTFISVVKUzhXSjdYTEtSQlkzN1E0NkdLVi4u",
  "The Ctrl Freaks":                 "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUNzExWExRVEc2VUs3SUZJUUxVQjVRREtNTS4u",
  "React & Sign-Off":                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUNDAySUtGRlJSMEtZM1pMRFJGTTNEU1VTNC4u",
  "The Baseline Defenders":          "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUM002REdRUkFYR0k0OFg2NURLNDVRMlBBQS4u",
  "Sixty-Seven Shades of Ownership": "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUMUZINUFKN1BJS0UwMUtWMUVBMk5DVVcwUS4u",
  "Not My Bug Anymore":              "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRURDhKRUtaSUg1SDlFQk43TE5SSDE4R0NJWC4u",
  "Test Case Closed":                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUN0o0N1JNSDNIN0ZDSVZJUFJNRlc4SEZQMS4u",
  "The Tolerance Negotiators":       "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUQldHVzNETzY5S080NU1CQjFSQ1NRQk1XSC4u",
  "Torque of the Town":              "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUNEpIQVYxVE8xVU5CUVhTS0s2VUVZTDJXUC4u",
  "Reign, No Rain":                  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUQk9LTExESTJORExaQVZDNjFPMDdIWUY1Ny4u",
  "Full-Stack, Full Margin":         "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUNEVPODNaQVdLT0JLSENZMEhWU0RUTkNQOC4u",
  "Jack of All Stacks":              "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUQ0VSTkpaVVowUUo2MDdHTFMwRTZNSzVZMS4u",
  "ERP-solutely Governed":           "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUNEpLU0VUNlpPWkZUM0pBNzRDNzJJQ1pTRi4u",
  "Query Everything":                "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=_SAtMH8AiUysxCra3WVQjqTVZS2StlZDs5TP-TDmrwRUQzRBVUhFT045VTY3U0RWUjJNQVhKMVZGVi4u"
};

/* ---------------- Artifact uploads (submission desk) ---------------- */
const UPLOAD = {
  /* Public Nextcloud share — used for uploads AND as the base for the
     download links in the submission index. */
  url: "https://nextcloud.bjitgroup.com/index.php/s/qSywfyXqQgxreRj",
  deadlineISO: "2026-08-01T17:30:00+06:00",
  deadlineLabel: "1 August 2026 · 5:30 PM (Bangladesh Standard Time)"
};

/* Short column labels for the upload index — one per mandatory artifact (same order as ARTIFACTS) */
const ARTIFACT_COLUMNS = [
  "Requirement Package", "Open Questions Register", "RML Status", "UCM Classification",
  "RVW Record", "Risk / Assumption Register", "Solution Approval", "Deliverable WBS",
  "Risk Buffer + Assumptions", "Scope + Margin Baseline", "BRC Decision", "Technical Proposal"
];

/* ---------------- Winners (announced at closing, 1 Aug 2026) ---------------- */
const TEAM_WINNERS = [
  { place: 1, rfp: "RFP-09" },   // React & Sign-Off
  { place: 2, rfp: "RFP-16" },   // Reign, No Rain
  { place: 3, rfp: "RFP-20" }    // Query Everything
];
const CUSTOMER_WINNERS = [
  { place: 1, rfp: "RFP-09" },   // customer of React & Sign-Off
  { place: 2, rfp: "RFP-16" },   // customer of Reign, No Rain
  { place: 3, rfp: "RFP-17" }    // customer of Full-Stack, Full Margin
];

/* ---------------- Team Formation (20 teams, from 'Team Formation' + 'RFP Handling Team' sheets) ---------------- */
const TEAMS = [
  {
    rfp: "RFP-01", logo: "🔭", category: "Web", platform: "Web application",
    name: "The Scope Creepers",
    slogan: "they smell uncontrolled scope from a mile away",
    customer: "Sajidul Huq",
    members: ["A Masud", "Benzir Hasan", "Sumon Faruq", "Shamim Khan", "Mdshifatul Islam"]
  },
  {
    rfp: "RFP-02", logo: "⛔", category: "Web", platform: "Web application",
    name: "404: Free Work Not Found",
    slogan: "no CR, no execution!",
    customer: "Shahjalal Hossain",
    members: ["Abdullah Qayum", "Sudeepta Biswas", "Hafizur Rahman", "Md Asif", "Liton Miah"]
  },
  {
    rfp: "RFP-03", logo: "🔄", category: "Web", platform: "Web application",
    name: "Ctrl+Alt+Deliver",
    slogan: "one reboot, every outcome",
    customer: "Abdul Halim",
    members: ["Firoz Ahmed", "Abu Rizvi", "Abu Saleh", "Md Moniruzzaman", "Monir Zzaman"]
  },
  {
    rfp: "RFP-04", logo: "💘", category: "Mobile", platform: "Mobile application",
    name: "Swipe Right to Sign Off",
    slogan: "it's a match only with BRC approval",
    customer: "Dewan Shamsul Alam",
    members: ["Islam Mominul", "Amit Mondol", "Samad Mizi", "Rasel Rana", "Ekramul Hoque"]
  },
  {
    rfp: "RFP-05", logo: "🔔", category: "Mobile", platform: "Mobile application",
    name: "Push Notification Nation",
    slogan: "escalate early, escalate loud",
    customer: "Mostafizur Rahman",
    members: ["Mohabul Hossain", "Jishnu Sardar", "Manjurul Hoque", "Arefin Newaz", "Al Maruf"]
  },
  {
    rfp: "RFP-06", logo: "📲", category: "Mobile", platform: "Mobile application",
    name: "The App-solute Owners",
    slogan: "one owner, every release",
    customer: "Mamun Ahmed Khan",
    members: ["Rashedul Alam", "Gobinda Sadhu", "Anisur Rahman", "Helal Uddin", "Khairuzzaman Shipon"]
  },
  {
    rfp: "RFP-07", logo: "🔩", category: "PC+Embed", platform: "PC application",
    name: "Bare Metal Bidders",
    slogan: "estimating down to the last register",
    customer: "Dipankar Das Shovon",
    members: ["Abu Hossain", "Jafrul Sadek", "Borhan Uddin", "Ruhul Amin", "Rejaul Hasan"]
  },
  {
    rfp: "RFP-08", logo: "🚗", category: "PC+Embed", platform: "Embedded",
    name: "The Ctrl Freaks",
    slogan: "firmware-level governance discipline",
    customer: "Iftekhar Uddin Ahmed",
    members: ["Pritom Routh", "Shakhawat Hossin", "Rafiqul Hasan", "Monowarul Islam", "Mahmudul Khan"]
  },
  {
    rfp: "RFP-09", logo: "✍️", category: "Web", platform: "Maintenance",
    name: "React & Sign-Off",
    slogan: "nothing renders without approval",
    customer: "Shaiful Islam",
    members: ["Monir Bhuiyan", "Hossain Delwar", "Saidul Ziku", "Mahabub Mollah", "Ikramul Hoque"]
  },
  {
    rfp: "RFP-10", logo: "🛡️", category: "Web", platform: "Maintenance",
    name: "The Baseline Defenders",
    slogan: "guardians of the frozen scope",
    customer: "Partha Pratim Sarkar",
    members: ["Uddin Helal", "Fahim Faysal", "Md Touhid", "Rezaur Rahman", "Nazmul Islam"]
  },
  {
    rfp: "RFP-11", logo: "💊", category: "Web", platform: "Legacy migration",
    name: "Sixty-Seven Shades of Ownership",
    slogan: "living all 67 responsibilities",
    customer: "ABM Mahbubur Rahman",
    members: ["Pavel Parvej", "Thanvir Ahmed", "Ahmed Asif", "Enamul Hasan", "Jahirul Rajib"]
  },
  {
    rfp: "RFP-12", logo: "🐛", category: "SQA", platform: "QA partner",
    name: "Not My Bug Anymore",
    slogan: "in loving memory of the 8 removed QA tasks",
    customer: "Himadri Mondol",
    members: ["Mushfiqur Rahman", "A Habib", "Subrata Banik", "Sharmin Manjur", "Sumon Shahriar"]
  },
  {
    rfp: "RFP-13", logo: "🕵️", category: "SQA", platform: "Migration QA",
    name: "Test Case Closed",
    slogan: "evidence or it didn't happen",
    customer: "Nadim Hossain",
    members: ["Sumon Mohtasin", "Abdul Quadir", "Foysal Ahmed", "Sultan Rabbani", "Alman Hossain"]
  },
  {
    rfp: "RFP-14", logo: "📐", category: "Mechanical", platform: "Mechanical design",
    name: "The Tolerance Negotiators",
    slogan: "precise to ±0.01, flexible on nothing else",
    customer: "Azizul Islam",
    members: ["Mdmahadi Hasan", "Md Anamul Hasan", "Ali Mollah", "Samirul Islam"]
  },
  {
    rfp: "RFP-15", logo: "🔧", category: "Mechanical", platform: "Mechanical design",
    name: "Torque of the Town",
    slogan: "applying exactly the right pressure on scope",
    customer: "Sayeedul Islam",
    members: ["Md Kamrul Hasan", "Muktadir Hossain", "Omar Faruq", "Shibashish Saha"]
  },
  {
    rfp: "RFP-16", logo: "🌤️", category: "Cloud", platform: "Cloud infra & SecOps",
    name: "Reign, No Rain",
    slogan: "99.9% uptime, 100% margin",
    customer: "Amir Hossain",
    members: ["Kamal Uddin", "Ahasan Khan", "Hassan Razib", "Md Tanvir", "Islam Monjurul"]
  },
  {
    rfp: "RFP-17", logo: "🥞", category: "Web", platform: "Low-code",
    name: "Full-Stack, Full Margin",
    slogan: "end to end, profit included",
    customer: "Homayun Kabir",
    members: ["MD. JOSIM UDDIN RONI", "Golam Rabbi", "Ibrahim Khalil", "Minhaz Karim", "Fazla Rabbi"]
  },
  {
    rfp: "RFP-18", logo: "🃏", category: "Hybrid", platform: "LABO refactoring",
    name: "Jack of All Stacks",
    slogan: "master of One Purpose",
    customer: "Minhajur Rahman",
    members: ["Illius Jamil", "Shamim Hossen", "Arup Das", "Ridoan Anik", "Sudip Proshad"]
  },
  {
    rfp: "RFP-19", logo: "🚦", category: "SAP", platform: "SAP ERP",
    name: "ERP-solutely Governed",
    slogan: "modules change, gates don't",
    customer: "Tareque Arefin",
    members: ["Abdullah Hasan", "Shaker Ahmed", "Shakib Jahan", "Shajal Chandra", "Ahmed Shahriar"]
  },
  {
    rfp: "RFP-20", logo: "🧐", category: "Data", platform: "Engineering data",
    name: "Query Everything",
    slogan: "the ambiguity hunters (judges beware)",
    customer: "Susanta Kumar Saha",
    members: ["Shahariar Newaj", "Debashis Bhattacharjee", "Giles Cornelius", "Sam Dsilva", "Barkat Ullah"]
  }
];
/* ---------------- RfP files (published packs, from 'RfP' folder) ---------------- */
const RFP_FILES = [
  { id: "RFP-01", project: "Mizuho SalaryDirect", file: "assets/rfp/RFP-01_Mizuho_SalaryDirect_v1.0.0.docx", download: "[RFP-01][Sajidul Huq][The Scope Creepers] Mizuho SalaryDirect - v1.0.0.docx", format: "DOCX", size: "36 KB" },
  { id: "RFP-02", project: "BidHub Auction Marketplace", file: "assets/rfp/RFP-02_BidHub_Auction_Marketplace_v1.0.0.docx", download: "[RFP-02][Shahjalal Hossain][404 - Free Work Not Found] BidHub Auction Marketplace - v1.0.0.docx", format: "DOCX", size: "25 KB" },
  { id: "RFP-03", project: "Midori-Home", file: "assets/rfp/RFP-03_Midori-Home_v1.0.0.docx", download: "[RFP-03][Abdul Halim][Ctrl+Alt+Deliver] Midori-Home - v1.0.0.docx", format: "DOCX", size: "56 KB" },
  { id: "RFP-04", project: "NovaCart Mobile", file: "assets/rfp/RFP-04_NovaCart_Mobile_v1.0.0.docx", download: "[RFP-04][Dewan Shamsul Alam][Swipe Right to Sign Off] NovaCart Mobile - v1.0.0.docx", format: "DOCX", size: "48 KB" },
  { id: "RFP-05", project: "Astra Mobile Pack", file: "assets/rfp/RFP-05_Astra_Mobile_Pack_v1.0.0.docx", download: "[RFP-05][Mostafizur Rahman][Push Notification Nation] Astra Mobile Pack - v1.0.0.docx", format: "DOCX", size: "42 KB" },
  { id: "RFP-06", project: "SolaraLife", file: "assets/rfp/RFP-06_SolaraLife_v1.0.0.docx", download: "[RFP-06][Mamun Ahmed Khan][The App-solute Owners] SolaraLife - v1.0.0.docx", format: "DOCX", size: "43 KB" },
  { id: "RFP-07", project: "Kitagawa Battery", file: "assets/rfp/RFP-07_Kitagawa_Battery_v1.0.0.docx", download: "[RFP-07][Dipankar Das Shovon][Bare Metal Bidders] Kitagawa Battery - v1.0.0.docx", format: "DOCX", size: "25 KB" },
  { id: "RFP-08", project: "Hoshino Sight 8", file: "assets/rfp/RFP-08_Hoshino_Sight_8_v1.0.0.docx", download: "[RFP-08][Iftekhar Uddin Ahmed][The Ctrl Freaks] Hoshino Sight 8 - v1.0.0.docx", format: "DOCX", size: "42 KB" },
  { id: "RFP-09", project: "FlyerBank Direct AMS", file: "assets/rfp/RFP-09_FlyerBank_Direct_AMS_v1.0.0.docx", download: "[RFP-09][Shaiful Islam][React & Sign-Off] FlyerBank Direct AMS - v1.0.0.docx", format: "DOCX", size: "1.1 MB" },
  { id: "RFP-10", project: "Wakaba", file: "assets/rfp/RFP-10_Wakaba_v1.0.0.docx", download: "[RFP-10][Partha Pratim Sarkar][The Baseline Defenders] Wakaba - v1.0.0.docx", format: "DOCX", size: "65 KB" },
  { id: "RFP-11", project: "Legacy-Migration Suzuran SPL StockOne", file: "assets/rfp/RFP-11_Legacy-Migration_Suzuran_SPL_StockOne_v1.0.0.docx", download: "[RFP-11][ABM Mahbubur Rahman][Sixty-Seven Shades of Ownership] Legacy-Migration Suzuran SPL StockOne - v1.0.0.docx", format: "DOCX", size: "45 KB" },
  { id: "RFP-12", project: "Nexus-Telecom QA-PartneR", file: "assets/rfp/RFP-12_Nexus-Telecom_QA-PartneR_v1.0.0.docx", download: "[RFP-12][Himadri Mondol][Not My Bug Anymore] Nexus-Telecom QA-PartneR - v1.0.0.docx", format: "DOCX", size: "28 KB" },
  { id: "RFP-13", project: "Migration-QA", file: "assets/rfp/RFP-13_Migration-QA_v1.0.0.pdf", download: "[RFP-13][Nadim Hossain][Test Case Closed] Migration-QA - v1.0.0.pdf", format: "PDF", size: "428 KB" },
  { id: "RFP-14", project: "NORDTEK OY NT-2026-KOSKI2-BD", file: "assets/rfp/RFP-14_NORDTEK_OY_NT-2026-KOSKI2-BD_v1.0.0.docx", download: "[RFP-14][Azizul Islam][The Tolerance Negotiators] NORDTEK OY NT-2026-KOSKI2-BD - v1.0.0.docx", format: "DOCX", size: "417 KB" },
  { id: "RFP-15", project: "Nordkaross VIKEN", file: "assets/rfp/RFP-15_Nordkaross_VIKEN_v1.0.0.pdf", download: "[RFP-15][Sayeedul Islam][Torque of the Town] Nordkaross VIKEN - v1.0.0.pdf", format: "PDF", size: "1.3 MB" },
  { id: "RFP-16", project: "Infrastructure SecOps", file: "assets/rfp/RFP-16_Infrastructure_SecOps_v1.0.0.docx", download: "[RFP-16][Amir Hossain][Reign, No Rain] Infrastructure SecOps - v1.0.0.docx", format: "DOCX", size: "39 KB" },
  { id: "RFP-17", project: "ABC Corporation Warehouse Management Platform", file: "assets/rfp/RFP-17_ABC_Corporation_Warehouse_Management_Platform_v1.0.0.docx", download: "[RFP-17][Homayun Kabir][Full-Stack, Full Margin] ABC Corporation Warehouse Management Platform - v1.0.0.docx", format: "DOCX", size: "46 KB" },
  { id: "RFP-18", project: "JNGC", file: "assets/rfp/RFP-18_JNGC_v1.0.0.docx", download: "[RFP-18][Minhajur Rahman][Jack of All Stacks] JNGC - v1.0.0.docx", format: "DOCX", size: "52 KB" },
  { id: "RFP-19", project: "TMart OneStock WMS", file: "assets/rfp/RFP-19_TMart_OneStock_WMS_v1.0.0.docx", download: "[RFP-19][Tareque Arefin][ERP-solutely Governed] TMart OneStock WMS - v1.0.0.docx", format: "DOCX", size: "44 KB" },
  { id: "RFP-20", project: "TC Data Migration", file: "assets/rfp/RFP-20_TC_Data_Migration_v1.0.0.docx", download: "[RFP-20][Susanta Kumar Saha][Query Everything] TC Data Migration - v1.0.0.docx", format: "DOCX", size: "320 KB" }
];
