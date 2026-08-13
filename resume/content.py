#!/usr/bin/env python3
"""Resume copy + per-variant typography dials."""

CONTACT = [
    "917-912-1275",
    "eleavell@gmail.com",
    "linkedin.com/in/erikleavell",
    "New York, NY",
]

IB_URL = "https://app.notion.com/p/36c992e46de080b6a1f1f2d6733de314"
CA_URL = "https://app.notion.com/p/39d992e46de0809e9e1af3c5c2aa58b3"


# ============================================================ GENERAL (finance)

GENERAL = {
    "summary_head": "SUMMARY",
    "summary": (
        "Finance executive with 10+ years building and owning the finance function end to end at "
        "high-growth SaaS and fintech companies. Sole senior finance leader at april, owning FP&A, "
        "Accounting, Revenue Operations, and Compliance. I stand up GAAP accounting, forecasting, board "
        "reporting, and audit-ready governance from scratch, have supported $250M+ raised across Series B "
        "and C, and build AI agent systems on the finance stack so it scales without adding headcount."
    ),
    "sidebar": [
        {"title": "Core Strengths", "items": [
            ("Finance, end to end.",
             "Sole senior finance leader across FP&A, Accounting, Revenue Operations, and Compliance."),
            ("Close & controllership.",
             "31-day close to 5; back-to-back clean KPMG audits."),
            ("Audit & compliance.",
             "SOC 1 owner, SOC 2 Type II support, enterprise security diligence."),
            ("Capital & investor relations.",
             "$250M+ raised across Series B and C rounds."),
            ("AI-native operator.",
             "Builds agent systems on the finance stack so scale doesn't require headcount."),
            ("SaaS metrics.",
             "ARR, CARR, unit economics, and rolling forecasts."),
        ]},
        {"title": "Finance Stack", "items": [
            ("Close & GL", "Campfire, NetSuite, Sage Intacct, QuickBooks, Xero"),
            ("FP&A", "Drivetrain, Planful, Anaplan, Pigment, Runway"),
            ("Spend & AP", "Ramp, Zip, Brex"),
            ("Billing & RevRec", "Campfire, Tabs, Maxio, Chargebee, Stripe"),
            ("Compliance", "Drata, Thoropass"),
            ("BI & CRM", "Looker, Tableau, Salesforce, HubSpot"),
            ("Tax", "Neo.Tax, Anrok, Sphere"),
        ]},
        {"title": "By the Numbers", "items": [
            ("31 → 5 days", "month-end close"),
            ("2 consecutive", "clean KPMG audits"),
            ("$250M+", "raised across Series B and C"),
            ("+25% valuation", "and 6–8 months of runway"),
            ("$100M → $1B", "revenue scale-up at MightyHive"),
            ("−72% AR days", "at Harvard Eye Associates"),
        ]},
        {"title": "Education", "items": [
            ("B.S. Business Strategy & Public Health", ""),
            "Brigham Young University, 2014",
        ]},
        {"title": "Languages", "items": [
            "English (native) · Spanish (native)",
            "Portuguese (intermediate) · ASL (proficient)",
        ]},
    ],
    "experience": [
        {"title": "Director of Finance", "company": "april", "dates": "12/2024 – Present · New York, NY",
         "bullets": [
             ("First finance hire.",
              " Built the entire function from scratch and remain the sole senior finance leader across FP&A, Accounting, Revenue Operations, and Compliance."),
             ("Close: 31 days to 5.",
              " Cut month-end close from 31 days to 7 in four months while running a Series B, then to 5 days by year-end 2025."),
             ("Back-to-back clean audits.",
              " Led april through its first-ever KPMG audit to a clean opinion, then repeated it successfully the following year."),
             ("Compliance owner.",
              " Ran the SOC 1 audit independently; supported the SOC 2 Type II program, security and data-privacy reviews, vendor risk, and enterprise diligence for regulated financial-institution customers."),
             ("AI-native finance stack.",
              " Built a growing library of AI agents on the stack — including Invoice Butler, an AI-driven AR collections engine, and a Compliance Agent Ecosystem automating security and vendor-risk questionnaires — and implemented Campfire and Ramp with the team."),
             ("Board & capital.",
              " Built the first bottoms-up revenue model (ARR, CARR, bookings), now the board's primary forecasting reference, and the forecasting behind april's $40M Series B; delivers board packages and investor updates independently."),
         ]},
        {"title": "VP of Finance & Operations", "company": "Kisi", "dates": "02/2024 – 12/2024 · New York, NY",
         "bullets": [
             (None, "Led strategic direction across FP&A, Accounting, People, Legal, Operations, and Revenue Operations; drove a 25% valuation increase and 6–8 months of added runway through net working capital and pricing optimization."),
             (None, "Ran a full-scale 2023 restatement and deployed Chargebee for accurate, timely revenue recognition; launched new GTM and pricing strategies that added 10% to net profit margin."),
         ]},
        {"title": "Director of Finance", "company": "Prime Trust", "dates": "01/2022 – 02/2024 · New York, NY",
         "bullets": [
             (None, "Hired as FP&A Manager and promoted to Director; built the company's first FP&A team and the revenue, operating, and GTM models behind its forward-looking metrics, and set the vision for Procurement, FP&A, and Treasury."),
             (None, "Implemented Planful for the first three-statement forecasts and headcount planning and built the first Executive and Board dashboards in Looker; chaired a company-wide restructuring and supported the $150M Series B plus $50M in growth capital."),
         ]},
        {"title": "Principal Financial Analyst", "company": "Prosper", "dates": "07/2021 – 01/2022 · San Francisco, CA",
         "bullets": [
             (None, "Led consolidated planning and reporting across P&L and cash flow with quarterly guidance and long-term forecasting; built the planning and unit-economics analysis behind Prosper's credit card launch."),
         ]},
        {"title": "FP&A Manager", "company": "iTradeNetwork", "dates": "10/2019 – 07/2021 · San Francisco, CA",
         "bullets": [
             (None, "Managed revenue and EBITDA forecasts with variance analysis for the C-suite; built the first functional-cost model and implemented Planful, cutting close time 50%."),
         ]},
        {"title": "Senior Finance Analyst", "company": "MightyHive", "dates": "05/2018 – 10/2019 · San Francisco, CA",
         "bullets": [
             (None, "Led global billing through hypergrowth from $100M to $1B in revenue; global finance partner through the $150M public merger with S4 Capital, overseeing accounting, consolidations, close, and treasury on NetSuite under US GAAP."),
         ]},
    ],
    "earlier": [
        ("Controller, Harvard Eye Associates (2016 – 2018). ",
         "Led due diligence for a $78M PE acquisition; lowered AR days 72%, moving cash flow from negative $1.2M to positive $650K."),
        ("Practice Administrator, Retina Consultants of Nevada (2013 – 2016). ",
         "Ran operations for a six-office, 90+ FTE practice; grew revenue from $12M to $15M and reduced denials 35%."),
    ],
}


# ============================================================== ABACUM (applied AI)

ABACUM = {
    "summary_head": "PROFILE",
    "summary": (
        "AI-native operator who builds the systems, not just the plans. I joined april as its first finance "
        "hire and built the function from zero — then built a library of production AI agents on top of it "
        "that now run AR collections and enterprise security diligence end to end. I work where product, "
        "engineering, GTM, and finance overlap: I find the problem, scope it, ship the system, and own the "
        "outcome without waiting for a spec. Ten-plus years in finance and fintech is the domain depth "
        "behind it — it tells me which problems are worth automating."
    ),
    "ai_systems": [
        {"name": "Invoice Butler", "tag": "AI-driven AR collections engine", "url": IB_URL,
         "desc": (
             "Designed and deployed a ten-stage collections system that moves overdue accounts without manual "
             "chasing: tiered automated email dunning in two customer voices, a Slack-bot gate that posts account "
             "dossiers and hands ownership to Customer Success, an automatic Growth escalation ladder applying "
             "staged commercial pressure, and a hard auto-escalation backstop. I built the tag-driven workflow "
             "architecture, the escalation and guardrail logic, the Slack integration, and every email template."
         )},
        {"name": "Compliance Agent Ecosystem", "tag": "multi-agent system for security & vendor-risk diligence", "url": CA_URL,
         "desc": (
             "Architected and operate a multi-agent system automating enterprise security and vendor-risk "
             "questionnaire responses: an autofill agent drafting against a governed 320-row answer bank, an "
             "evidence-conversion agent turning SOC and penetration-test PDFs into queryable knowledge pages, a "
             "knowledge-base health monitor, and an append-only control agent that refuses to close a run with "
             "unresolved approval gates. Runs on scheduled crons behind human review gates — a 152-item "
             "enterprise questionnaire now comes back as a reviewed draft."
         )},
    ],
    "sidebar": [
        {"title": "Core Strengths", "items": [
            ("AI-native building.",
             "Ships production agent systems — orchestration, guardrails, human-in-the-loop review, run logs."),
            ("0-to-1 ownership.",
             "Built a company function and its automation layer from nothing, twice over."),
            ("High agency.",
             "Finds the problem, scopes it, ships it, and owns the outcome without being handed a spec."),
            ("Cross-functional operator.",
             "Connective tissue across engineering, security, product, GTM, CS, and legal."),
            ("Domain depth.",
             "10+ years in finance, FP&A, and fintech — knows which problems are worth automating."),
            ("Systems thinking.",
             "Designs the escalation ladder, the failure mode, and the control loop, not just the happy path."),
        ]},
        {"title": "AI & Automation", "items": [
            ("Agents", "Claude & Claude Code, MCP connectors, multi-agent orchestration, scheduled agent runs, eval and run logs"),
            ("Build", "Python, SQL, Notion API, Slack bots, workflow automation, RAG-style knowledge bases"),
            ("Applied", "AR collections automation, security questionnaire autofill, evidence pipelines, docs sync"),
        ]},
        {"title": "Finance & Data Stack", "items": [
            ("Planning", "Drivetrain, Planful, Anaplan, Pigment, Runway"),
            ("Systems", "Campfire, NetSuite, Ramp, Chargebee, Stripe, Salesforce, HubSpot"),
            ("Compliance & BI", "Drata, Thoropass, Looker, Tableau"),
        ]},
        {"title": "By the Numbers", "items": [
            ("2 agent systems", "running in production today"),
            ("320-row", "governed compliance answer bank"),
            ("152-item", "enterprise questionnaire → reviewed draft"),
            ("31 → 5 days", "month-end close — built, not hired"),
            ("$250M+", "raised across Series B and C"),
        ]},
        {"title": "Education", "items": [
            ("B.S. Business Strategy & Public Health", ""),
            "Brigham Young University, 2014",
        ]},
        {"title": "Languages", "items": [
            "English (native) · Spanish (native)",
            "Portuguese (intermediate) · ASL (proficient)",
        ]},
    ],
    "experience": [
        {"title": "Director of Finance", "company": "april", "dates": "12/2024 – Present · New York, NY",
         "bullets": [
             ("0-to-1 ownership.",
              " Joined as april's first finance hire and built the entire function from scratch; sole senior finance leader owning FP&A, Accounting, Revenue Operations, and Compliance."),
             ("Systems over headcount.",
              " Cut month-end close from 31 days to 7 in four months while running a Series B, then to 5 days by year-end 2025 — by rebuilding the process and the stack, not by hiring."),
             ("Cross-functional under pressure.",
              " Ran the SOC 1 audit independently and led april through back-to-back clean KPMG audits; supported the SOC 2 Type II program and drive security, engineering, legal, and GTM to close enterprise diligence for regulated financial-institution customers."),
             ("Board-facing.",
              " Built the first bottoms-up revenue model (ARR, CARR, bookings) and the forecasting behind april's $40M Series B; delivered board packages and investor updates independently."),
         ]},
        {"title": "VP of Finance & Operations", "company": "Kisi", "dates": "02/2024 – 12/2024 · New York, NY",
         "bullets": [
             (None, "Led strategic direction across FP&A, Accounting, People, Legal, Operations, and Revenue Operations; drove a 25% valuation increase and 6–8 months of added runway, and launched GTM and pricing changes worth 10% of net profit margin."),
         ]},
        {"title": "Director of Finance", "company": "Prime Trust", "dates": "01/2022 – 02/2024 · New York, NY",
         "bullets": [
             (None, "Built the company's first FP&A team and its revenue, operating, and GTM models; implemented Planful and built the first Executive and Board dashboards in Looker; built a predictive churn model with Sales leadership using machine learning; supported the $150M Series B and raised $50M in growth capital."),
         ]},
    ],
    "earlier": [
        ("Principal Financial Analyst, Prosper (2021 – 2022). ",
         "Consolidated planning across P&L and cash flow, and the unit-economics analysis behind Prosper's credit card launch."),
        ("FP&A Manager, iTradeNetwork (2019 – 2021). ",
         "Built the first functional-cost model and implemented Planful, cutting close time 50%."),
        ("Senior Finance Analyst, MightyHive (2018 – 2019). ",
         "Ran global billing through $100M-to-$1B hypergrowth; finance partner on the $150M public merger with S4 Capital."),
        ("Controller, Harvard Eye Associates (2016 – 2018). ",
         "Led due diligence for a $78M PE acquisition; lowered AR days 72%, moving cash flow from negative $1.2M to positive $650K."),
    ],
}


# ================================================================== dials

DIALS = {
    "general": {
        "side_top": 0.42, "main_top": 0.44,
        "name": 21, "name_gap": 8, "contact": 8.2,
        "side_head": 8.0, "side_gap": 12, "side_body": 8.0,
        "side_item_gap": 4.2, "side_line": 1.09,
        "main_head": 9.2, "main_gap": 11,
        "body": 9.3, "body_line": 1.12,
        "role": 10.4, "meta": 8.2,
        "job_gap": 7.5, "bullet_gap": 3.2, "sys_gap": 5,
    },
    "abacum": {
        "side_top": 0.42, "main_top": 0.44,
        "name": 21, "name_gap": 8, "contact": 8.2,
        "side_head": 8.0, "side_gap": 9.5, "side_body": 7.9,
        "side_item_gap": 3.3, "side_line": 1.07,
        "main_head": 9.2, "main_gap": 10.5,
        "body": 9.3, "body_line": 1.12,
        "role": 10.4, "meta": 8.2,
        "job_gap": 7.5, "bullet_gap": 3.2, "sys_gap": 6,
    },
}
