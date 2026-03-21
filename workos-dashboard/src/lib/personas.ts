import type { Persona, PersonaId, Skill, Leader } from "@/types";

export const PERSONA_META: Record<
  PersonaId,
  Omit<Persona, "skills" | "leaders" | "feedItems">
> = {
  ceo: {
    id: "ceo",
    title: "CEO",
    fullTitle: "Chief Executive Officer",
    prefix: "exec",
    description: "Founder strategy, capital allocation, stakeholder management, board dynamics",
    color: "#FFB000",
  },
  cro: {
    id: "cro",
    title: "CRO",
    fullTitle: "Chief Revenue Officer",
    prefix: "rev",
    description: "Revenue operations, sales engineering, pipeline management, GTM execution",
    color: "#FF6B00",
  },
  cmo: {
    id: "cmo",
    title: "CMO",
    fullTitle: "Chief Marketing Officer",
    prefix: "mktg",
    description: "GTM strategy, growth frameworks, demand generation, content & brand",
    color: "#00BFFF",
  },
  cfo: {
    id: "cfo",
    title: "CFO",
    fullTitle: "Chief Financial Officer",
    prefix: "fin",
    description: "Strategic finance, valuation narrative, VC readiness, forecasting",
    color: "#00FF88",
  },
  cto: {
    id: "cto",
    title: "CTO",
    fullTitle: "Chief Technology Officer",
    prefix: "eng",
    description: "Architecture decisions, infrastructure optimization, engineering leadership",
    color: "#B388FF",
  },
  cpo: {
    id: "cpo",
    title: "CPO",
    fullTitle: "Chief Product Officer",
    prefix: "prod",
    description: "Product strategy, roadmap prioritization, competitive positioning, PMF",
    color: "#FF4081",
  },
  ciso: {
    id: "ciso",
    title: "CISO",
    fullTitle: "Chief Information Security Officer",
    prefix: "sec",
    description: "Security program, compliance readiness, risk management, vendor assessment",
    color: "#FF1744",
  },
  general: {
    id: "general",
    title: "GEN",
    fullTitle: "General Operations",
    prefix: "ops",
    description: "Cross-functional skills, productivity, personal development, utilities",
    color: "#888888",
  },
};

// Skills mapped to personas from the repository audit
export const SKILL_REGISTRY: Skill[] = [
  // ===== CEO =====
  { id: "ceo", name: "CEO Co-Pilot", description: "Founder strategy, capital allocation, stakeholder management", persona: "ceo", source: "custom", path: "ceo" },
  { id: "board-deck", name: "Board Deck", description: "Quarterly board presentations with metrics and strategic asks", persona: "ceo", source: "custom", path: "board-deck" },
  { id: "investor-update", name: "Investor Update", description: "Monthly investor updates with metrics and narrative", persona: "ceo", source: "custom", path: "investor-update" },
  { id: "leadership-sync", name: "Leadership Sync", description: "Cross-functional alignment across CMO, CFO, CPO, CTO", persona: "ceo", source: "custom", path: "leadership-sync" },
  { id: "advisor-outreach", name: "Advisor Outreach", description: "Network scanning, ICP matching, intro request generation", persona: "ceo", source: "custom", path: "advisor-outreach" },
  { id: "fundraise-prep", name: "Fundraise Prep", description: "Data room, VC Q&A prep, due diligence readiness", persona: "ceo", source: "custom", path: "fundraise-prep" },
  { id: "cap-table", name: "Cap Table", description: "Equity tracking, dilution analysis, option pool modeling", persona: "ceo", source: "custom", path: "cap-table" },
  { id: "coach", name: "Stoic Coach", description: "Perspective, resilience, and wisdom for leadership challenges", persona: "ceo", source: "custom", path: "coach" },
  { id: "morning-standup", name: "Morning Standup", description: "Start-of-day briefing, task review, priority setting", persona: "ceo", source: "custom", path: "morning-standup" },
  { id: "cs-ceo-advisor", name: "CEO Advisor Agent", description: "Strategic leadership advisor covering vision, board, investors", persona: "ceo", source: "community", path: "community-skills/agents/c-level/cs-ceo-advisor.md" },

  // ===== CRO =====
  { id: "business-growth", name: "Business Growth", description: "Customer success, sales engineering, revenue operations", persona: "cro", source: "community", path: "community-skills/business-growth" },
  { id: "revenue-operations", name: "Revenue Operations", description: "Pipeline analysis, GTM efficiency, forecast accuracy", persona: "cro", source: "community", path: "community-skills/business-growth/revenue-operations" },
  { id: "sales-engineer", name: "Sales Engineer", description: "RFP response, competitive positioning, POC planning", persona: "cro", source: "community", path: "community-skills/business-growth/sales-engineer" },
  { id: "customer-success", name: "Customer Success Manager", description: "Health scoring, churn prevention, expansion opportunities", persona: "cro", source: "community", path: "community-skills/business-growth/customer-success-manager" },
  { id: "contract-writer", name: "Contract & Proposal Writer", description: "Contract drafting and proposal generation", persona: "cro", source: "community", path: "community-skills/business-growth/contract-and-proposal-writer" },
  { id: "lead-research", name: "Lead Research Assistant", description: "Identify and qualify high-quality leads", persona: "cro", source: "community", path: "community-skills/lead-research-assistant" },
  { id: "gtm-deal-intel", name: "GTM Deal Intel", description: "Analyze deal conversations, score opportunities", persona: "cro", source: "custom", path: "gtm-deal-intel" },
  { id: "gtm-prospecting", name: "GTM Prospecting", description: "Build enriched prospect lists from ICP criteria", persona: "cro", source: "custom", path: "gtm-prospecting" },
  { id: "gtm-lead-capture", name: "GTM Lead Capture", description: "Lead qualification rubrics, response templates", persona: "cro", source: "custom", path: "gtm-lead-capture" },
  { id: "gtm-outbound", name: "GTM Outbound", description: "Personalized outreach sequences across channels", persona: "cro", source: "custom", path: "gtm-outbound" },

  // ===== CMO =====
  { id: "cmo", name: "CMO Co-Pilot", description: "GTM strategy, growth frameworks, marketing leadership", persona: "cmo", source: "custom", path: "cmo" },
  { id: "gtm-icp", name: "GTM ICP", description: "Define ICP segments, messaging frameworks, positioning", persona: "cmo", source: "custom", path: "gtm-icp" },
  { id: "gtm-content", name: "GTM Content", description: "Segment-targeted content generation", persona: "cmo", source: "custom", path: "gtm-content" },
  { id: "gtm-analytics", name: "GTM Analytics", description: "Performance reports, channel analysis, funnel diagnostics", persona: "cmo", source: "custom", path: "gtm-analytics" },
  { id: "gtm-lifecycle", name: "GTM Lifecycle", description: "Expansion playbooks, churn prevention signals", persona: "cmo", source: "custom", path: "gtm-lifecycle" },
  { id: "gtm-onboarding", name: "GTM Onboarding", description: "Onboarding playbooks, time-to-value acceleration", persona: "cmo", source: "custom", path: "gtm-onboarding" },
  { id: "gtm-monetization", name: "GTM Monetization", description: "Packaging, pricing strategy, value communication", persona: "cmo", source: "custom", path: "gtm-monetization" },
  { id: "gtm-infra", name: "GTM Infrastructure", description: "Build and configure GTM tech stack", persona: "cmo", source: "custom", path: "gtm-infra" },
  { id: "marketing-skill", name: "Marketing Suite (43 skills)", description: "Full marketing toolkit: SEO, CRO, content, channels, growth", persona: "cmo", source: "community", path: "community-skills/marketing-skill" },
  { id: "brand-guidelines", name: "Brand Guidelines", description: "Brand colors, typography, visual identity standards", persona: "cmo", source: "community", path: "community-skills/brand-guidelines" },
  { id: "competitive-ads", name: "Competitive Ads Extractor", description: "Extract and analyze competitor ad creative", persona: "cmo", source: "community", path: "community-skills/competitive-ads-extractor" },
  { id: "twitter-optimizer", name: "Twitter Algorithm Optimizer", description: "Optimize tweets for maximum reach", persona: "cmo", source: "community", path: "community-skills/twitter-algorithm-optimizer" },
  { id: "content-research", name: "Content Research Writer", description: "Research-backed content with citations", persona: "cmo", source: "community", path: "community-skills/content-research-writer" },
  { id: "domain-brainstormer", name: "Domain Name Brainstormer", description: "Generate domain ideas, check availability", persona: "cmo", source: "community", path: "community-skills/domain-name-brainstormer" },

  // ===== CFO =====
  { id: "cfo", name: "CFO Co-Pilot", description: "Strategic finance, valuation narrative, VC readiness", persona: "cfo", source: "custom", path: "cfo" },
  { id: "finance-forecast", name: "Finance Forecast", description: "Scenario modeling, revenue projections, burn rate", persona: "cfo", source: "custom", path: "finance-forecast" },
  { id: "personal-cfo", name: "Personal CFO", description: "Budgeting, net worth, tax optimization, investments", persona: "cfo", source: "custom", path: "personal-cfo" },
  { id: "opex-model", name: "OpEx Model", description: "Vendor mapping, GL classification, Drivetrain sync", persona: "cfo", source: "custom", path: "opex-model" },
  { id: "infra-cost", name: "Infrastructure Cost", description: "Cloud cost analysis, waste identification, spend efficiency", persona: "cfo", source: "custom", path: "infra-cost" },
  { id: "finance-skills", name: "Financial Analyst", description: "Ratio analysis, DCF valuation, budget variance", persona: "cfo", source: "community", path: "community-skills/finance-skills/financial-analyst" },
  { id: "saas-metrics", name: "SaaS Metrics Coach", description: "ARR, MRR, churn, CAC, LTV, NRR analysis", persona: "cfo", source: "community", path: "community-skills/finance-skills/saas-metrics-coach" },

  // ===== CTO =====
  { id: "cto", name: "CTO Co-Pilot", description: "Technical leadership, architecture, infrastructure", persona: "cto", source: "custom", path: "cto" },
  { id: "architecture-decision", name: "Architecture Decision", description: "Generate and review ADRs", persona: "cto", source: "custom", path: "architecture-decision" },
  { id: "tech-debt", name: "Tech Debt", description: "Track, prioritize, plan technical debt paydown", persona: "cto", source: "custom", path: "tech-debt" },
  { id: "execute", name: "Execute", description: "Implementation with elegant, modular code", persona: "cto", source: "custom", path: "execute" },
  { id: "explore-skill", name: "Explore", description: "Codebase exploration and feature analysis", persona: "cto", source: "custom", path: "explore" },
  { id: "review", name: "Code Review", description: "Logging, error handling, TypeScript, production readiness", persona: "cto", source: "custom", path: "review" },
  { id: "designer", name: "10x Designer", description: "UI/UX design review, visual critique, design systems", persona: "cto", source: "custom", path: "designer" },
  { id: "mcp-builder", name: "MCP Builder", description: "Guide creation of MCP servers for LLM integration", persona: "cto", source: "community", path: "community-skills/mcp-builder" },
  { id: "software-arch", name: "Software Architecture", description: "Clean Architecture, SOLID, design patterns", persona: "cto", source: "community", path: "community-skills/software-architecture" },
  { id: "tdd", name: "Test-Driven Development", description: "TDD workflow before writing implementation", persona: "cto", source: "community", path: "community-skills/test-driven-development" },
  { id: "subagent-dev", name: "Subagent-Driven Development", description: "Dispatch subagents with code review checkpoints", persona: "cto", source: "community", path: "community-skills/subagent-driven-development" },
  { id: "git-worktrees", name: "Git Worktrees", description: "Isolated git worktrees with safety verification", persona: "cto", source: "community", path: "community-skills/using-git-worktrees" },
  { id: "playwright-auto", name: "Playwright Automation", description: "Browser automation for testing web apps", persona: "cto", source: "community", path: "community-skills/playwright-browser-automation" },
  { id: "artifacts-builder", name: "Artifacts Builder", description: "Multi-component HTML artifacts with React/Tailwind", persona: "cto", source: "community", path: "community-skills/artifacts-builder" },
  { id: "postgres-skill", name: "PostgreSQL", description: "Safe read-only SQL queries with multi-connection support", persona: "cto", source: "community", path: "community-skills/postgres" },

  // ===== CPO =====
  { id: "cpo", name: "CPO Co-Pilot", description: "Product strategy, roadmap, competitive positioning", persona: "cpo", source: "custom", path: "cpo" },
  { id: "product-discovery", name: "Product Discovery", description: "Market research, competitive analysis, feasibility", persona: "cpo", source: "custom", path: "product-discovery" },
  { id: "pm", name: "Product Manager", description: "PRD writing, feature spec with lean/MVP mindset", persona: "cpo", source: "custom", path: "pm" },
  { id: "create-issue", name: "Create Issue", description: "Capture bugs, features, improvements as issues", persona: "cpo", source: "custom", path: "create-issue" },
  { id: "create-plan", name: "Create Plan", description: "Structured implementation plans with status tracking", persona: "cpo", source: "custom", path: "create-plan" },
  { id: "learning-opp", name: "Learning Opportunity", description: "Teaching mode for technical PM concepts", persona: "cpo", source: "custom", path: "learning-opp" },

  // ===== CISO =====
  { id: "ciso", name: "CISO Co-Pilot", description: "Startup security, compliance, risk management", persona: "ciso", source: "custom", path: "ciso" },
  { id: "ciso-compliance", name: "CISO Compliance", description: "SOC 2 policies, Vanta integration, audit readiness", persona: "ciso", source: "custom", path: "ciso-compliance" },
  { id: "ciso-privacy", name: "CISO Privacy", description: "GDPR/CCPA compliance, DPA, data inventory", persona: "ciso", source: "custom", path: "ciso-privacy" },
  { id: "ciso-security", name: "CISO Security Ops", description: "Access control, vulnerability management, incident response", persona: "ciso", source: "custom", path: "ciso-security" },
  { id: "ciso-vendor-risk", name: "CISO Vendor Risk", description: "Vendor security assessments, SaaS tool reviews", persona: "ciso", source: "custom", path: "ciso-vendor-risk" },

  // ===== GENERAL =====
  { id: "session-end", name: "Session End", description: "Tech debt scan, work summary, CLAUDE.md improvements", persona: "general", source: "custom", path: "session-end" },
  { id: "skills-audit", name: "Skills Audit", description: "Audit, validate, maintain skills ecosystem", persona: "general", source: "custom", path: "skills-audit" },
  { id: "document", name: "Document", description: "Update documentation after code changes", persona: "general", source: "custom", path: "document" },
  { id: "peer-review", name: "Peer Review", description: "Evaluate peer review findings as team lead", persona: "general", source: "custom", path: "peer-review" },
  { id: "life-review", name: "Life Review", description: "Daily check-in, weekly review, quarterly deep-dive", persona: "general", source: "custom", path: "life-review" },
  { id: "life-sync", name: "Life Sync", description: "Cross-domain life orchestrator", persona: "general", source: "custom", path: "life-sync" },
  { id: "personal-journal", name: "Personal Journal", description: "Journaling, decision logging, gratitude practice", persona: "general", source: "custom", path: "personal-journal" },
  { id: "personal-home", name: "Personal Home", description: "Home improvement tracking, contractor management", persona: "general", source: "custom", path: "personal-home" },
  { id: "travel", name: "Travel", description: "Family travel planning, budget, points optimization", persona: "general", source: "custom", path: "travel" },
  { id: "csv-summarizer", name: "CSV Summarizer", description: "Auto-analyze CSV files with visualizations", persona: "general", source: "community", path: "community-skills/csv-data-summarizer" },
  { id: "deep-research", name: "Deep Research", description: "Autonomous multi-step research with Gemini", persona: "general", source: "community", path: "community-skills/deep-research" },
  { id: "file-organizer", name: "File Organizer", description: "Intelligent file organization and deduplication", persona: "general", source: "community", path: "community-skills/file-organizer" },
  { id: "brainstorming", name: "Brainstorming", description: "Transform rough ideas into fully-formed designs", persona: "general", source: "community", path: "community-skills/brainstorming" },
  { id: "kaizen", name: "Kaizen", description: "Continuous improvement methodology", persona: "general", source: "community", path: "community-skills/kaizen" },
  { id: "skill-creator", name: "Skill Creator", description: "Guidance for creating effective Claude Skills", persona: "general", source: "community", path: "community-skills/skill-creator" },
  { id: "prompt-eng", name: "Prompt Engineering", description: "Prompt engineering techniques and Anthropic best practices", persona: "general", source: "community", path: "community-skills/prompt-engineering" },
  { id: "n8n-skills", name: "n8n Skills", description: "Understand and operate n8n workflows", persona: "general", source: "community", path: "community-skills/n8n-skills" },
  { id: "docx", name: "DOCX", description: "Create, edit, analyze Word documents", persona: "general", source: "community", path: "community-skills/docx" },
  { id: "pdf", name: "PDF", description: "Extract text, tables, merge & annotate PDFs", persona: "general", source: "community", path: "community-skills/pdf" },
  { id: "pptx", name: "PPTX", description: "Read, generate, adjust slides and templates", persona: "general", source: "community", path: "community-skills/pptx" },
  { id: "xlsx", name: "XLSX", description: "Spreadsheet manipulation, formulas, charts", persona: "general", source: "community", path: "community-skills/xlsx" },
  { id: "internal-comms", name: "Internal Comms", description: "Company newsletters, FAQs, status reports", persona: "general", source: "community", path: "community-skills/internal-comms" },
  { id: "invoice-organizer", name: "Invoice Organizer", description: "Organize invoices for tax preparation", persona: "general", source: "community", path: "community-skills/invoice-organizer" },
  { id: "resume-gen", name: "Resume Generator", description: "Tailored resumes from job descriptions", persona: "general", source: "community", path: "community-skills/tailored-resume-generator" },
  { id: "meeting-analyzer", name: "Meeting Insights", description: "Analyze meeting transcripts for behavioral patterns", persona: "general", source: "community", path: "community-skills/meeting-insights-analyzer" },
  { id: "google-workspace", name: "Google Workspace", description: "Gmail, Calendar, Docs, Sheets, Drive integrations", persona: "general", source: "community", path: "community-skills/google-workspace-skills" },
];

// Top 5 industry leaders per persona
export const LEADER_REGISTRY: Record<PersonaId, Leader[]> = {
  ceo: [
    { name: "Tobi Lütke", title: "CEO", company: "Shopify", domain: "platform-scale leadership", twitterHandle: "tolobi", reason: "Scaled Shopify from startup to $200B+ while maintaining founder-led culture" },
    { name: "Claire Hughes Johnson", title: "Former COO", company: "Stripe", domain: "operational excellence", reason: "Author of 'Scaling People'; defined modern startup operating frameworks" },
    { name: "Frank Slootman", title: "CEO", company: "Snowflake", domain: "execution intensity", reason: "Three IPOs; wrote 'Amp It Up' on relentless execution" },
    { name: "Patrick Collison", title: "CEO", company: "Stripe", domain: "long-term thinking", twitterHandle: "patrickc", reason: "Built the financial infrastructure of the internet with extraordinary taste" },
    { name: "Dara Khosrowshahi", title: "CEO", company: "Uber", domain: "turnaround leadership", reason: "Transformed Uber's culture and path to profitability post-crisis" },
  ],
  cro: [
    { name: "Mark Roberge", title: "Former CRO", company: "HubSpot", domain: "sales-science", reason: "Pioneered data-driven sales hiring and the Sales Acceleration Formula" },
    { name: "Jason Lemkin", title: "Founder", company: "SaaStr", domain: "SaaS GTM", twitterHandle: "jasonlk", reason: "Created the playbook for SaaS revenue scaling from $1M to $100M ARR" },
    { name: "Jacco van der Kooij", title: "Founder", company: "Winning by Design", domain: "revenue architecture", reason: "Built the Bowtie model and recurring revenue operating system" },
    { name: "Kyle Poyar", title: "Partner", company: "OpenView", domain: "PLG revenue", twitterHandle: "paborow", reason: "Leading authority on product-led growth monetization" },
    { name: "Sam Blond", title: "Former CRO", company: "Brex", domain: "startup revenue", reason: "Scaled Brex revenue from zero; now advises at Founders Fund" },
  ],
  cmo: [
    { name: "Emily Kramer", title: "Co-Founder", company: "MKT1", domain: "B2B marketing", twitterHandle: "emilykramer", reason: "Former VP Marketing at Asana; writes the most actionable B2B marketing playbooks" },
    { name: "Kipp Bodnar", title: "CMO", company: "HubSpot", domain: "inbound marketing", reason: "Scaled HubSpot's marketing engine and the inbound methodology" },
    { name: "Guillaume Cabane", title: "Advisor", company: "Multiple", domain: "growth engineering", twitterHandle: "guillaumecabane", reason: "Pioneered intent-based outbound and predictive lead scoring" },
    { name: "Amanda Natividad", title: "VP Marketing", company: "SparkToro", domain: "audience research", twitterHandle: "amandanat", reason: "Expert in zero-click content and audience-first marketing" },
    { name: "Lenny Rachitsky", title: "Author", company: "Lenny's Newsletter", domain: "growth + product marketing", twitterHandle: "lennysan", reason: "Most influential product/growth newsletter in tech" },
  ],
  cfo: [
    { name: "David Sacks", title: "GP", company: "Craft Ventures", domain: "SaaS finance", twitterHandle: "DavidSacks", reason: "Created SaaS financial frameworks used by thousands of startups" },
    { name: "Jamin Ball", title: "Partner", company: "Altimeter Capital", domain: "cloud metrics", twitterHandle: "jaborball", reason: "Writes 'Clouded Judgement' — the definitive SaaS metrics weekly" },
    { name: "Christoph Janz", title: "Managing Partner", company: "Point Nine Capital", domain: "SaaS benchmarking", reason: "Created the 'five ways to build $100M' framework" },
    { name: "Tomasz Tunguz", title: "GP", company: "Theory Ventures", domain: "data-driven finance", twitterHandle: "ttunguz", reason: "Most data-driven VC writer on startup finance and GTM metrics" },
    { name: "Ravi Gupta", title: "Partner", company: "Sequoia Capital", domain: "growth-stage finance", reason: "Former CFO of Instacart; deep operator expertise in hypergrowth finance" },
  ],
  cto: [
    { name: "Will Larson", title: "CTO", company: "Carta", domain: "engineering leadership", twitterHandle: "lethain", reason: "Author of 'An Elegant Puzzle' and 'Staff Engineer' — definitive eng management" },
    { name: "Kelsey Hightower", title: "Distinguished Engineer", company: "Google (retired)", domain: "infrastructure", twitterHandle: "kelseyhightower", reason: "Kubernetes thought leader; most influential infra voice in tech" },
    { name: "Martin Kleppmann", title: "Researcher", company: "University of Cambridge", domain: "distributed systems", reason: "Author of 'Designing Data-Intensive Applications' — the systems bible" },
    { name: "Charity Majors", title: "CTO", company: "Honeycomb", domain: "observability", twitterHandle: "maborow", reason: "Pioneered modern observability and o11y engineering culture" },
    { name: "Guillermo Rauch", title: "CEO", company: "Vercel", domain: "frontend infrastructure", twitterHandle: "rauchg", reason: "Created Next.js; defines the modern web development stack" },
  ],
  cpo: [
    { name: "Shreyas Doshi", title: "Advisor", company: "Multiple", domain: "product strategy", twitterHandle: "shreyas", reason: "Former PM leader at Stripe/Twitter/Google; most influential product thinker on X" },
    { name: "Marty Cagan", title: "Founder", company: "SVPG", domain: "product management", reason: "Author of 'Inspired' and 'Empowered' — product management canon" },
    { name: "Teresa Torres", title: "Author", company: "Product Talk", domain: "continuous discovery", reason: "Created the Opportunity Solution Tree and continuous discovery framework" },
    { name: "Gibson Biddle", title: "Former VP Product", company: "Netflix", domain: "product strategy", reason: "Netflix product strategy frameworks and DHM model" },
    { name: "Lenny Rachitsky", title: "Author", company: "Lenny's Newsletter", domain: "product benchmarks", twitterHandle: "lennysan", reason: "Largest product management newsletter; definitive PM career advice" },
  ],
  ciso: [
    { name: "Magda Lilia Chelly", title: "CISO", company: "Responsible Cyber", domain: "startup security", reason: "Named global CISO of the year; expert in building security from zero" },
    { name: "Phil Venables", title: "CISO", company: "Google Cloud", domain: "enterprise security", reason: "Writes the most actionable security leadership blog" },
    { name: "Tanya Janca", title: "Founder", company: "We Hack Purple", domain: "AppSec", twitterHandle: "shehackspurple", reason: "Author of 'Alice and Bob Learn Application Security'; AppSec evangelist" },
    { name: "Caleb Sima", title: "CISO", company: "Robinhood", domain: "fintech security", reason: "Pioneer in web application security; deep fintech security expertise" },
    { name: "Ross Young", title: "CISO", company: "Caterpillar Financial", domain: "compliance", reason: "Expert in SOC 2, ISO 27001, and security compliance frameworks" },
  ],
  general: [],
};

// Identify duplicate skills between custom and community
export const DUPLICATE_GROUPS: { canonical: string; duplicates: string[]; reason: string }[] = [
  { canonical: "cmo (custom)", duplicates: ["marketing-skill (community)"], reason: "Both provide CMO/marketing leadership — community version has 43 sub-skills for execution; custom is strategic wrapper" },
  { canonical: "brand-guidelines (community/brand-guidelines)", duplicates: ["marketing-skill/brand-guidelines (community)"], reason: "Identical concept — Anthropic brand guidelines vs. marketing brand guidelines" },
  { canonical: "gtm-deal-intel (custom)", duplicates: ["business-growth/revenue-operations (community)"], reason: "Overlapping pipeline analysis and deal intelligence capabilities" },
  { canonical: "finance-forecast (custom)", duplicates: ["finance-skills/financial-analyst (community)"], reason: "Both do financial modeling and forecasting — custom is startup-focused, community is general" },
  { canonical: "gtm-content (custom)", duplicates: ["content-research-writer (community)", "marketing-skill/content-creator (community)"], reason: "Multiple content generation skills with overlapping scope" },
  { canonical: "ciso-vendor-risk (custom)", duplicates: ["cs-quality-regulatory (community agent)"], reason: "Overlapping vendor/compliance assessment capabilities" },
  { canonical: "create-plan (custom)", duplicates: ["review-implementing (community)"], reason: "Both deal with implementation planning and spec alignment" },
];

export function getPersonaSkills(personaId: PersonaId): Skill[] {
  return SKILL_REGISTRY.filter((s) => s.persona === personaId);
}

export function getPersona(personaId: PersonaId): Persona {
  return {
    ...PERSONA_META[personaId],
    skills: getPersonaSkills(personaId),
    leaders: LEADER_REGISTRY[personaId] || [],
    feedItems: [],
  };
}

export function getAllPersonas(): Persona[] {
  return (Object.keys(PERSONA_META) as PersonaId[]).map(getPersona);
}
