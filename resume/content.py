#!/usr/bin/env python3
"""Resume copy + per-variant typography dials.

De-duplication rule: the sidebar carries capability, stack, and credentials
only, never a metric or achievement that also appears in the main column.
Every accomplishment is stated exactly once, in the experience prose.
"""

CONTACT = [
    "917-912-1275",
    "eleavell@gmail.com",
    "linkedin.com/in/erikleavell",
    "New York, NY",
]

# ============================================================ GENERAL (finance)

GENERAL = {
    "summary_head": "SUMMARY",
    "summary": (
        "Finance executive who builds finance functions that scale. I run FP&A, Accounting, Revenue "
        "Operations, and Compliance at april as its sole senior finance leader, a function I built from "
        "zero as the company's first finance hire. Ten-plus years across SaaS and fintech: GAAP accounting "
        "and audit-ready governance stood up from scratch, global consolidations delivered, $250M+ in "
        "capital supported, and manual, vendor-dependent operations replaced with automated systems that "
        "run leaner than the headcount they displace."
    ),
    "sidebar": [
        {"title": "Leadership Scope", "items": [
            "FP&A & Strategic Finance",
            "Accounting & Controllership",
            "Technical Accounting & Rev Rec",
            "Audit, SOC & Risk Governance",
            "Tax & Multi-Entity Compliance",
            "Treasury & Working Capital",
            "Investor Relations & Board Reporting",
            "Global Consolidation (US / Israel)",
            "Procurement & Vendor Strategy",
            "Team Building, Comp & Leveling",
            "AI & Finance Automation",
        ]},
        {"title": "By the Numbers", "items": [
            ("31 → 5 days", "month-end close"),
            ("2 consecutive", "clean KPMG audits"),
            ("$250M+", "raised across Series B and C"),
            ("+25% valuation", "and 6–8 months of runway"),
            ("$100M → $1B", "revenue scale-up at MightyHive"),
            ("126 → 43 days", "AR aging at april"),
        ]},
        {"title": "Finance Stack", "items": [
            ("Close & GL", "Campfire, NetSuite, Sage Intacct, Numeric, QuickBooks"),
            ("FP&A", "Runway, Drivetrain, Planful, Anaplan, Pigment"),
            ("Spend & AP", "Ramp, Zip, Brex, Bill.com"),
            ("Billing & Rev Rec", "Campfire, Growfin, Chargebee, Stripe, Maxio, Tabs"),
            ("Tax", "Anrok, Neo.Tax, Sphere"),
            ("Compliance & GRC", "Thoropass, Safebase, Drata"),
            ("People & Equity", "Justworks, Carta, Rippling, QuotaPath, Guideline"),
            ("BI & CRM", "Looker, Tableau, Salesforce, HubSpot"),
        ]},
        {"title": "Education", "items": [
            ("B.S. Business Strategy & Public Health", ""),
            "Brigham Young University, 2014",
        ]},
    ],
    "experience": [
        {"title": "Director of Finance", "company": "april", "dates": "12/2024 – Present · New York, NY",
         "bullets": [
             (None, "First finance hire; built the entire function from zero and run it as sole senior leader across FP&A, Accounting, Revenue Operations, Compliance, and Treasury for a Series B fintech running U.S. and Israeli entities."),
             (None, "Compressed month-end close from 31 days to 7 within four months and to 5 by year-end 2025, and delivered april's first-ever consolidated U.S.–Israel financials, migrating the company onto Campfire in 48 hours against a 2–6 month industry benchmark."),
             (None, "Moved accounting from outsourced and consultant-dependent to fully in-house: closed the 2024 books, resolved intercompany, deferred revenue, and AP/AR cleanup, ran a 2024 revenue restatement, and authored the technical accounting library (ASC 606, 842, 810, 830, 718), all while offboarding a $144K/yr fractional CFO and $88.5K/yr outsourced FP&A, consolidating four tax and audit firms into one, and hiring the Accounting Manager and Staff Accountant who replaced them."),
             (None, "Led april through its first-ever KPMG audit to a clean opinion and repeated it the following year; ran the SOC 1 audit independently, supported SOC 2 Type II, and stood up risk governance: Risk Committee charter, controls documentation, and the policy library behind enterprise diligence for regulated financial-institution customers."),
             (None, "Implemented ten core platforms (Campfire, Ramp, Runway, Drivetrain, Anrok, Growfin, Guideline, QuotaPath, Thoropass, and Safebase), rebuilding ASC 606 billing and revenue recognition, AP and procurement controls, automated multi-jurisdiction sales tax, collections, commissions, and trust infrastructure."),
             (None, "Built FP&A as an operating system: three-statement model, ARR waterfall and snowball, sales-capacity and headcount models, unit economics, and driver-based scenarios fed by HubSpot, Campfire, and GCP; the board's primary forecasting reference and the basis for april's $40M Series B and Series C readiness."),
             (None, "Rewrote partner pricing around a platform fee billed on top of filing usage rather than against it, a single structural change that nearly doubled the book to a $25M ending run rate at 158% net revenue retention, from a base where only 2 of 28 partners had ever hit their contract minimums."),
             (None, "Built a growing library of AI agents on top of the finance stack, including Invoice Butler, an AI-driven AR collections engine that cut AR aging from 126 days to 43, and a Compliance Agent Ecosystem that answers security and vendor-risk questionnaires at a 95% completion rate on questionnaires running to 1,000 questions."),
         ]},
        {"title": "VP of Finance & Operations", "company": "Kisi", "dates": "02/2024 – 12/2024 · New York, NY",
         "bullets": [
             (None, "Owned strategic direction across FP&A, Accounting, People, Legal, Operations, and Revenue Operations; drove a 25% valuation increase and 6–8 months of added runway within six months through net working capital and pricing optimization."),
             (None, "Ran a full-scale 2023 restatement and deployed Chargebee for accurate, timely revenue recognition; launched new GTM and pricing strategies that added 10% to net profit margin."),
         ]},
        {"title": "Director of Finance", "company": "Prime Trust", "dates": "01/2022 – 02/2024 · New York, NY",
         "bullets": [
             (None, "Hired as FP&A Manager and promoted to Director; built the company's first FP&A team, set the vision for Procurement, FP&A, and Treasury, and built the first revenue, operating, and GTM models plus a predictive churn model with Sales leadership using machine learning."),
             (None, "Implemented Planful for the first three-statement forecasts and headcount planning and built the first Executive and Board dashboards in Looker; chaired a company-wide restructuring, presented results to the Board, supported the $150M Series B, and raised an additional $50M in growth capital."),
         ]},
    ],
    "earlier": [
        ("Principal Financial Analyst, Prosper (2021 – 2022). ",
         "Consolidated planning across P&L and cash flow; built the unit economics behind Prosper's credit card launch."),
        ("FP&A Manager, iTradeNetwork (2019 – 2021). ",
         "Owned revenue and EBITDA forecasting for the C-suite; built the first functional-cost model and implemented Planful, cutting close 50%."),
        ("Senior Finance Analyst, MightyHive (2018 – 2019). ",
         "Ran global billing through $100M-to-$1B hypergrowth; finance partner on the $150M public merger with S4 Capital, overseeing consolidations and treasury on NetSuite under US GAAP."),
        ("Controller, Harvard Eye Associates (2016 – 2018). ",
         "Led due diligence for a $78M PE acquisition; lowered AR days 72%, moving cash flow from negative $1.2M to positive $650K."),
        ("Practice Administrator, Retina Consultants of Nevada (2013 – 2016). ",
         "Ran a six-office, 90+ FTE practice; grew revenue from $12M to $15M and reduced denials 35%."),
    ],
}


# ============================================================== ABACUM (applied AI)

ABACUM = {
    "summary_head": "PROFILE",
    "summary": (
        "AI-native operator who builds the systems, not just the plans. I joined april as its first finance "
        "hire, built the function from zero, and now run it as sole senior leader, then built a library of "
        "production AI agents on top of it that run AR collections and enterprise security diligence end to "
        "end. I work where product, engineering, GTM, and finance overlap: I find the problem, scope it, "
        "ship the system, and own the outcome without waiting for a spec. A decade of finance and fintech "
        "operating depth is what tells me which problems are worth automating."
    ),
    "ai_systems": [
        {"name": "Invoice Butler", "tag": "AI-driven AR collections engine",
         "desc": (
             "Designed and deployed a ten-stage collections system that moves overdue accounts without manual "
             "chasing, cutting AR aging from 126 days to 43: tiered automated email dunning in two customer voices, "
             "a Slack-bot gate that posts account "
             "dossiers and hands ownership to Customer Success, an automatic Growth escalation ladder applying "
             "staged commercial pressure, and a hard auto-escalation backstop. I built the tag-driven workflow "
             "architecture, the escalation and guardrail logic, the Slack integration, and every email template."
         )},
        {"name": "Compliance Agent Ecosystem", "tag": "multi-agent system for security & vendor-risk diligence",
         "desc": (
             "Architected and operate a multi-agent system automating enterprise security and vendor-risk "
             "questionnaire responses: an autofill agent drafting against a governed 320-row answer bank, an "
             "evidence-conversion agent turning SOC and penetration-test PDFs into queryable knowledge pages, a "
             "knowledge-base health monitor, and an append-only control agent that refuses to close a run with "
             "unresolved approval gates. Runs on scheduled crons behind human review gates, hitting a 95% "
             "completion rate on questionnaires running to 1,000 questions."
         )},
    ],
    "sidebar": [
        {"title": "How I Work", "items": [
            "AI-native building",
            "0-to-1 ownership",
            "High agency, low supervision",
            "Cross-functional leadership",
            "Systems & control design",
            "Executive communication",
        ]},
        {"title": "AI & Automation", "items": [
            ("Agents", "Claude & Claude Code, MCP connectors, multi-agent orchestration, scheduled runs, eval and run logs"),
            ("Build", "Python, SQL, Notion API, Slack bots, workflow automation, RAG-style knowledge bases"),
            ("Applied", "AR collections, security questionnaire autofill, evidence pipelines, docs sync"),
        ]},
        {"title": "Finance & Data Stack", "items": [
            ("Planning", "Drivetrain, Planful, Anaplan, Pigment, Runway"),
            ("Systems", "Campfire, NetSuite, Numeric, Ramp, Chargebee, Stripe"),
            ("Compliance & BI", "Drata, Thoropass, Anrok, Looker, Tableau"),
            ("CRM", "Salesforce, HubSpot"),
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
             (None, "First finance hire at a Series B fintech; built the entire function from zero and run it as sole senior leader across FP&A, Accounting, Revenue Operations, Compliance, and Treasury."),
             (None, "Compressed month-end close from 31 days to 7 in four months and to 5 by year-end 2025 by rebuilding the process and the stack, not by hiring. Delivered the first-ever consolidated U.S.–Israel financials, migrating onto Campfire in 48 hours against a 2–6 month industry benchmark."),
             (None, "Implemented ten core platforms (Campfire, Ramp, Runway, Drivetrain, Anrok, Growfin, Thoropass, Safebase, QuotaPath, Guideline) and moved accounting from outsourced to in-house, hiring the team that replaced a $144K/yr fractional CFO and $88.5K/yr outsourced FP&A."),
             (None, "Ran the SOC 1 audit independently and led april through back-to-back clean KPMG audits; supported the SOC 2 Type II program and drive security, engineering, legal, and GTM to close enterprise diligence for regulated financial-institution customers."),
             (None, "Built FP&A as an operating system (three-statement model, ARR waterfall, sales-capacity and headcount models, and driver-based scenarios fed by HubSpot, Campfire, and GCP) behind april's $40M Series B and Series C readiness."),
         ]},
        {"title": "VP of Finance & Operations", "company": "Kisi", "dates": "02/2024 – 12/2024 · New York, NY",
         "bullets": [
             (None, "Owned strategic direction across FP&A, Accounting, People, Legal, Operations, and Revenue Operations; drove a 25% valuation increase and 6–8 months of added runway, and launched GTM and pricing changes worth 10% of net profit margin."),
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
        "side_head": 8.3, "side_gap": 15, "side_body": 8.4,
        "side_item_gap": 5.6, "side_line": 1.11,
        "main_head": 8.6, "main_gap": 8.0,
        "body": 8.5, "body_line": 1.06,
        "role": 9.7, "meta": 7.7,
        "job_gap": 5.8, "bullet_gap": 2.4, "sys_gap": 5,
    },
    "abacum": {
        "side_top": 0.42, "main_top": 0.44,
        "name": 21, "name_gap": 8, "contact": 8.2,
        "side_head": 8.3, "side_gap": 16, "side_body": 8.4,
        "side_item_gap": 6.2, "side_line": 1.11,
        "main_head": 9.0, "main_gap": 9.8,
        "body": 9.0, "body_line": 1.09,
        "role": 10.1, "meta": 8.0,
        "job_gap": 6.5, "bullet_gap": 2.8, "sys_gap": 5.5,
    },
}
