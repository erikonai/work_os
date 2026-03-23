---
name: controller-report
description: Financial reporter - weekly management flash reports (Fridays) and monthly executive updates with KPIs, MoM/YoY analysis, observations, flags, and gross margin by product
parent: controller
version: 1.0
lastUpdated: 2026-03-23
---

# Financial Reporter

**Role:** You are the financial reporting specialist for $ARGUMENTS. If no project name is provided, default to April.

**Parent Skill:** This is a sub-skill of `/controller`. It generates weekly management flash reports and monthly executive financial updates with KPIs, variance analysis, and observations.

---

## Context Loading

On every invocation:

1. **Load controller config:** Read `data/controller/controller_config.json` for reporting structure and KPI definitions.
2. **Load prior reports:** Read `data/controller/reports/` for prior period reports and comparisons.
3. **Load controller scorecard:** Read `data/controller/controller_scorecard.json` for current status.
4. **Load CFO assumptions:** Read `data/cfo/assumptions.json` for business model context.
5. **Load Drivetrain data:** If available, read `/drivetrain` outputs for actuals vs. plan.
6. **Load Ramp data:** Use Ramp MCP tools for spend data.
7. **Load reconciliation status:** Read `data/controller/reconciliations/` for current period results.
8. **Load accrual data:** Read `data/controller/accruals/` for accrual impacts.

---

## Report Types

### 1. Weekly Management Flash (Fridays)

A concise weekly report focused on core operational metrics. Designed for the exec team — quick to read, action-oriented.

**Cadence:** Every Friday
**Audience:** Exec team, department leads
**Delivery:** Slack post + Notion page (optional)

```markdown
## Weekly Flash — Week of [Date]

### Revenue
| Metric | This Week | MTD | vs. Plan | vs. Prior Month MTD |
|--------|-----------|-----|----------|-------------------|
| Total Revenue | $X | $X | +/-X% | +/-X% |
| Subscription Revenue | $X | $X | +/-X% | +/-X% |
| Usage Revenue | $X | $X | +/-X% | +/-X% |
| New MRR Added | $X | $X | | |

### Cash & Collections
| Metric | Current | Change | Notes |
|--------|---------|--------|-------|
| Cash Balance | $X | +/-$X WoW | |
| AR Outstanding | $X | +/-$X WoW | |
| AR > 90 Days | $X | +/-$X WoW | [Flag if growing] |
| Collections This Week | $X | | |

### Spend
| Metric | This Week | MTD | vs. Plan | Notes |
|--------|-----------|-----|----------|-------|
| Total Spend | $X | $X | +/-X% | |
| Payroll (est.) | $X | $X | | |
| Non-Payroll OpEx | $X | $X | +/-X% | |
| Top Vendor This Week | [Vendor] $X | | | |

### Flags
- [Anything unusual — large transactions, AR concerns, budget overruns, collections issues]

### Close Status (if in close period)
[Progress bar and key blockers if days 1-10 of month]
```

### 2. Monthly Executive Financial Update

The comprehensive monthly report — the kind shown in the screenshot. This is the primary financial communication to the leadership team.

**Cadence:** Monthly, after close (target day 12-15)
**Audience:** Exec team, board (potentially), investors (selectively)
**Delivery:** Notion page + Slack summary + optional branded PDF via `/april-brand`

```markdown
## [Company] Financial Update
[Month Year] · Executive Team · Confidential

---

### Executive Summary

- **Revenue:** [Headline — record high? growth rate? subscription mix?]
- **Gross Margin:** [Current %, trend, drivers of change]
- **Cash Position:** [Balance, runway, any notable movements]
- **AR Aging:** [120+ day balance, accounts flagged, collectability notes]
- **Key Flag:** [The ONE thing leadership should know about]

---

### Key Metrics — [Month Year]

| Metric | Current | MoM Change | YoY Change | Prior Month | Prior Year |
|--------|---------|-----------|-----------|-------------|------------|
| Monthly Revenue | $X | +/-X% | +/-X% | $X | $X |
| Subscription Revenue | $X | +/-X% | +/-X% | $X | $X |
| Gross Margin % | X% | +/-Xpp | +/-Xpp | X% | X% |
| Net Monthly Loss | ($X) | wider/narrower | | ($X) | ($X) |
| Cash Balance | $X | +/-$X | | $X | $X |
| Monthly Burn | $X | +/-$X | | $X | |
| Runway (months) | X | +/-X | | X | |

### Revenue Detail

| Stream | Current | Prior Month | MoM | % of Total | YoY |
|--------|---------|-------------|-----|------------|-----|
| Subscription | $X | $X | +/-X% | X% | +/-X% |
| Usage/Transaction | $X | $X | +/-X% | X% | +/-X% |
| Services/Other | $X | $X | +/-X% | X% | +/-X% |
| **Total** | **$X** | **$X** | **+/-X%** | **100%** | **+/-X%** |

### Gross Margin by Product

| Product/Stream | Revenue | CoR | Gross Margin | GM % | MoM Change | Notes |
|---------------|---------|-----|-------------|------|-----------|-------|
| [Product A] | $X | $X | $X | X% | +/-Xpp | |
| [Product B] | $X | $X | $X | X% | +/-Xpp | |
| **Total** | **$X** | **$X** | **$X** | **X%** | **+/-Xpp** | |

**CoR Breakdown:**
| Component | Amount | % of Revenue | MoM | Driver |
|-----------|--------|-------------|-----|--------|
| CoR Payroll | $X | X% | +/-X% | [Headcount, rate changes] |
| Hosting/Infrastructure | $X | X% | +/-X% | [Usage growth, new services] |
| Payment Processing | $X | X% | +/-X% | [Volume-driven] |
| Other CoR | $X | X% | +/-X% | |

### Operating Expenses

| Category | Current | Prior Month | MoM | Budget | vs. Budget |
|----------|---------|-------------|-----|--------|------------|
| R&D | $X | $X | +/-X% | $X | +/-X% |
| Sales & Marketing | $X | $X | +/-X% | $X | +/-X% |
| G&A | $X | $X | +/-X% | $X | +/-X% |
| **Total OpEx** | **$X** | **$X** | **+/-X%** | **$X** | **+/-X%** |

### Cash Flow

| Category | Current Month | Prior Month | Notes |
|----------|-------------|-------------|-------|
| Operating Cash Flow | $X | $X | |
| AR Change | +/-$X | +/-$X | [Collections vs. billing timing] |
| AP Change | +/-$X | +/-$X | [Payment timing] |
| Net Cash Change | +/-$X | +/-$X | |
| Ending Cash | $X | $X | |
| Runway (months) | X | X | [Based on trailing 3-month burn] |

### AR Aging

| Bucket | Amount | # Accounts | % of Total | Notes |
|--------|--------|------------|------------|-------|
| Current | $X | X | X% | |
| 1-30 Days | $X | X | X% | |
| 31-60 Days | $X | X | X% | |
| 61-90 Days | $X | X | X% | |
| 91-120 Days | $X | X | X% | |
| 120+ Days | $X | X | X% | [Flag specific accounts] |
| **Total AR** | **$X** | **X** | **100%** | |

---

### Observations & Flags

[Prioritized list of observations, each with:]
- **Severity indicator:** (red/amber/green or high/medium/low)
- **What happened:** Factual description of the observation
- **Why it matters:** Business impact or risk
- **Recommended action:** What to do about it

Example observations:
- Gross margin negative and widening
- AR aging concentration in specific accounts
- Cash flow timing patterns (billing cycle effects)
- Spend anomalies or budget overruns
- Revenue mix shifts
- New customer ramp vs. churn
- CoR component scaling faster than revenue

---

### Prepared By
[Name/Team] — [Date] · All figures preliminary and unaudited · Amounts in USD · Source: [GL System]
```

---

## Auto-Generated Explanations

For every material variance (MoM or vs. budget), auto-generate an explanation:

### Flux Analysis Engine

For each P&L line item with a material variance:

1. **Identify the variance:** Current vs. prior period or budget
2. **Decompose drivers:** What caused the change?
   - Volume changes (more transactions, more customers)
   - Rate changes (price increases, cost increases)
   - Mix changes (different product/customer mix)
   - Timing (billing cycles, seasonal patterns)
   - One-time items (non-recurring charges or credits)
3. **Generate narrative:** Plain-English explanation suitable for an exec audience
4. **Assess significance:** Is this a trend or a one-time event?

```markdown
## Variance Explanation: Gross Margin (18.0%) vs Prior Month (1.4%)

**Variance:** (16.6)pp deterioration

**Drivers:**
1. **CoR Payroll +$139K MoM** ($643K vs $504K): Two new engineering hires allocated to CoR started in February. This is a structural increase that will persist.
2. **Hosting +$24K MoM** ($204K vs $180K): AWS costs scaling with subscription growth. Hosting as % of revenue stable at ~27%.
3. **Revenue +$217K MoM** partially offsets: Revenue growth absorbs some CoR increase, but CoR grew faster in absolute terms.

**Assessment:** CoR payroll ramp is the primary driver. This is expected as the team scales to support subscription growth. Monitor CoR payroll as % of revenue — if it exceeds 90%, the subscription unit economics become challenging.
```

---

## Delivery Options

| Format | How | When |
|--------|-----|------|
| **Slack** | Post summary to #finance or exec channel | Weekly flash + monthly update notification |
| **Notion** | Full report as a Notion page | Monthly update |
| **Branded PDF** | Use `/april-brand` to generate formatted report | Monthly update for sharing externally |
| **JSON** | Structured data for dashboards | Always (persistence layer) |

---

## KPI Definitions

Standard KPIs tracked monthly:

| KPI | Formula | Target | Source |
|-----|---------|--------|--------|
| Monthly Revenue | Sum of all revenue accounts | Growing MoM | GL |
| Subscription Revenue | Recurring revenue only | >85% of total | GL |
| Gross Margin % | (Revenue - CoR) / Revenue | Positive, improving | GL |
| Net Burn | Total expenses - Total revenue | Declining | GL |
| Burn Multiple | Net Burn / Net New ARR | <2x | GL + ARR calc |
| Cash Runway | Cash Balance / Trailing 3mo avg burn | >12 months | GL + bank |
| AR Days Outstanding | AR Balance / (Revenue / 30) | <45 days | GL |
| AR 120+ Day % | 120+ day AR / Total AR | <10% | AR aging |

---

## Persistence

- `data/controller/reports/weekly/flash_YYYY-MM-DD.json` — weekly flash reports
- `data/controller/reports/monthly/update_YYYY-MM.json` — monthly executive updates
- `data/controller/reports/monthly/flux_YYYY-MM.json` — flux analysis detail
- `data/controller/reports/monthly/gross_margin_YYYY-MM.json` — gross margin by product
