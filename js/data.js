/* ============================================================
   Delivery Excellence Workshop — shared data
   Source: BJIT Delivery Excellence Workshop Plan (1 Aug 2026, v1.0)
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
    detail: "21 groups × 10 minutes HARD STOP (recommended 8 min pitch + 2 min Q&A/changeover). Judges score live via Microsoft Form. Running order announced at freeze."
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

/* ---------------- RfP Catalog (21 engagements) ---------------- */
const RFPS = [
  { id: "RFP-01", category: "Web application",  filter: "web",        stack: "Java + React, MySQL, AWS",  scope: "Build + manual & automation testing + AWS hosting", domain: "Financial",                          keeps: "UX design" },
  { id: "RFP-02", category: "Web application",  filter: "web",        stack: "PHP + React, MySQL, AWS",   scope: "Build + manual & automation testing + AWS hosting", domain: "E-commerce",                         keeps: "UX design" },
  { id: "RFP-03", category: "Web application",  filter: "web",        stack: "Node + React, MySQL, AWS",  scope: "Build + manual & automation testing + AWS hosting", domain: "Real estate",                        keeps: "UX design" },
  { id: "RFP-04", category: "Mobile application", filter: "mobile",   stack: "Native Android",            scope: "Build + testing + market release",                  domain: "E-commerce",                         keeps: "Backend" },
  { id: "RFP-05", category: "Mobile application", filter: "mobile",   stack: "Swift (iOS)",               scope: "Build + testing + market release",                  domain: "Financial",                          keeps: "Backend" },
  { id: "RFP-06", category: "Mobile application", filter: "mobile",   stack: "Flutter",                   scope: "Build + testing + market release",                  domain: "Real estate",                        keeps: "Backend" },
  { id: "RFP-07", category: "PC application",   filter: "pc",         stack: "C#.NET desktop",            scope: "Build + manual & automation testing + release",     domain: "Manufacturing (equipment control)",  keeps: "Backend / data systems" },
  { id: "RFP-08", category: "Embedded",         filter: "embedded",   stack: "C/C++ automotive embedded", scope: "Build + testing + release",                         domain: "Automotive (ECU/ADAS supplier)",     keeps: "Hardware & specs" },
  { id: "RFP-09", category: "Maintenance",      filter: "maintenance",stack: "Java + React legacy, AWS",  scope: "User support, infra monitoring, FE/BE bug fixes, CR handling", domain: "Financial",              keeps: "Product roadmap" },
  { id: "RFP-10", category: "Maintenance",      filter: "maintenance",stack: "PHP + React legacy, AWS",   scope: "User support, infra monitoring, FE/BE bug fixes, CR handling", domain: "E-commerce",             keeps: "Product roadmap" },
  { id: "RFP-11", category: "Maintenance",      filter: "maintenance",stack: "Node + React legacy, AWS",  scope: "User support, infra monitoring, FE/BE bug fixes, CR handling", domain: "Real estate",            keeps: "Product roadmap" },
  { id: "RFP-12", category: "Legacy migration", filter: "migration",  stack: "COBOL → React + Spring",    scope: "Desktop-to-web migration",                          domain: "Pharmaceutical inventory",           keeps: "Domain SMEs, data" },
  { id: "RFP-13", category: "QA partner",       filter: "qa",         stack: "UI, API, manual & automation", scope: "Independent QA for operator systems",            domain: "Telecom",                            keeps: "All development" },
  { id: "RFP-14", category: "Migration QA",     filter: "qa",         stack: "PowerBuilder → React + Spring", scope: "ST, SIT, Scenario, Regression, UAT",            domain: "Insurance (policy admin)",           keeps: "All development" },
  { id: "RFP-15", category: "Mechanical design",filter: "mechanical", stack: "SolidWorks",                scope: "Design services",                                   domain: "Consumer appliances",                keeps: "Mfg. & validation" },
  { id: "RFP-16", category: "Mechanical design",filter: "mechanical", stack: "CATIA",                     scope: "Design services",                                   domain: "Automotive body parts",              keeps: "Mfg. & validation" },
  { id: "RFP-17", category: "Cloud infra & SecOps", filter: "cloud",  stack: "HA, multi-zone, dynamic scaling, SIEM + SOAR, DevSecOps", scope: "Infra design, automation, monitoring & operation", domain: "Financial services platform", keeps: "Application development" },
  { id: "RFP-18", category: "Low-code",         filter: "lowcode",    stack: "OutSystems",                scope: "New platform build",                                domain: "Warehouse management",               keeps: "Business process owners" },
  { id: "RFP-19", category: "LABO refactoring", filter: "labo",       stack: "Existing stack (web)",      scope: "Massive refactoring under long-running LABO (ODC) model", domain: "E-commerce web service",       keeps: "Product ownership" },
  { id: "RFP-20", category: "SAP ERP",          filter: "erp",        stack: "SAP",                       scope: "Setup, customization, integration, testing & maintenance", domain: "Warehouse management",       keeps: "Business sign-off" },
  { id: "RFP-21", category: "Engineering data", filter: "engdata",    stack: "TeamCenter, CATIA V6",      scope: "Data migration, validation, correction, item creation", domain: "Industrial engineering data",   keeps: "PLM ownership" }
];

const RFP_FILTERS = [
  { key: "all",         label: "All (21)" },
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

/* ---------------- DM summary (speciality distribution) ---------------- */
const DM_SUMMARY = [
  { speciality: "Web",        count: 37 },
  { speciality: "Mobile",     count: 15 },
  { speciality: "SQA",        count: 12 },
  { speciality: "Mechanical", count: 11 },
  { speciality: "PC + Embedded", count: 10 },
  { speciality: "ERP",        count: 6 },
  { speciality: "Cloud",      count: 6 },
  { speciality: "Other",      count: 4 }
];

/* ---------------- Delivery Managers ---------------- */
const DMS = [
  ["Ikramul Hoque","Web"],["Jishnu Sardar","Mobile"],["Minhaz Karim","Web"],["Rezaur Rahman","Web"],
  ["Ridoan Anik","Web"],["Ahmed Asif","Web"],["Arup Das","Web"],["Barkat Ullah","Mechanical"],
  ["Giles Cornelius","Other"],["Jahirul Rajib","Web"],["Mushfiqur Rahman","SQA"],["Sam Dsilva","Other"],
  ["Shahariar Newaj","Other"],["Abdul Quadir","SQA"],["Illius Jamil","SQA"],["Jafrul Sadek","PC+Embed"],
  ["Mahmudul Khan","PC+Embed"],["Monowarul Islam","PC+Embed"],["Rafiqul Hasan","PC+Embed"],["Sumon Faruq","Web"],
  ["Sumon Mohtasin","SQA"],["Al Maruf","Mobile"],["Anisur Rahman","Mobile"],["Borhan Uddin","PC+Embed"],
  ["Gobinda Sadhu","Mobile"],["Helal Uddin","Mobile"],["Khairuzzaman Shipon","Mobile"],["Manjurul Hoque","Mobile"],
  ["Samad Mizi","Mobile"],["Ali Mollah","Mechanical"],["Mdmahadi Hasan","Mechanical"],["Muktadir Hossain","Mechanical"],
  ["Omar Faruq","Mechanical"],["Rakibul Islam","Mechanical"],["Samirul Islam","Mechanical"],["Shahrukh Khan","Mechanical"],
  ["Shibashish Saha","Mechanical"],["Amit Mondol","Mobile"],["Arefin Newaz","Mobile"],["Ekramul Hoque","Mobile"],
  ["Islam Mominul","Mobile"],["Mohabul Hossain","Mobile"],["Rasel Rana","Mobile"],["Rejaul Hasan","PC+Embed"],
  ["Saidul Ziku","Web"],["Shajal Chandra","ERP"],["Shamim Hossen","ERP"],["Fazla Rabbi","Web"],
  ["Monir Zzaman","Web"],["Rashedul Alam","Mobile"],["Abdullah Hasan","ERP"],["Ahmed Shahriar","ERP"],
  ["Shakib Jahan","ERP"],["Shaker Ahmed","ERP"],["A Habib","SQA"],["Alman Hossain","SQA"],
  ["Foysal Ahmed","SQA"],["Himadri Mondal","SQA"],["Sharmin Manjur","SQA"],["Sultan Rabbani","SQA"],
  ["Sumon Shahriar","SQA"],["Ahasan Khan","Cloud"],["Hassan Razib","Cloud"],["Islam Monjurul","Cloud"],
  ["Md Tanvir","Cloud"],["Sudip Proshad","Cloud"],["A Masud","Web"],["Abu Rizvi","Web"],
  ["Abu Saleh","Web"],["Benzir Hasan","Web"],["Fahim Faysal","Web"],["Firoz Ahmed","Web"],
  ["Golam Rabbi","Web"],["Hafizur Rahman","Web"],["Ibrahim Khalil","Web"],["Md Touhid","Web"],
  ["Monir Bhuiyan","Web"],["Shamim Khan","Web"],["Thanvir Ahmed","Web"],["Kamal Uddin","Cloud"],
  ["Abu Hossain","PC+Embed"],["Pritom Routh","PC+Embed"],["Ruhul Amin","PC+Embed"],["Shakhawat Hossin","PC+Embed"],
  ["Abdullah Qayum","Web"],["Enamul Hasan","Web"],["Liton Miah","Web"],["Mahabub Mollah","Web"],
  ["Md Asif","Web"],["Md Moniruzzaman","Web"],["Pavel Parvej","Web"],["Sudeepta Biswas","Web"],
  ["Hossain Delwar","Web"],["Mdshifatul Islam","Web"],["Nazmul Islam","Web"],["Uddin Helal","Web"],
  ["Subrata Banik","SQA"],["Debashis Bhattacharjee","Other"],["Md Anamul Hasan","Mechanical"],["Md Kamrul Hasan","Mechanical"],
  ["MD. JOSIM UDDIN RONI","Web"]
];

/* ---------------- Customers (ED senior management — also the judges) ---------------- */
const CUSTOMERS = [
  "Nadim Hossain","Islam Shaiful","Sayeedul Islam","Mostafizur Rahman","Azizul Islam",
  "Mamun Khan","Shahjalal Hossain","Tareque Arefin","Sajidul Huq","Susanta Kumar",
  "Homayun Kabir","Iftekhar Ahmed","Amir Shohag","Dewan Shamsul","Minhajur Rahman",
  "Dipankar Shovon","Abul Kalam Milon","ABM Mahbub Rahman","Partha Sarker","Abdul Halim","TBC"
];
