---
name: controller-accruals
description: Accrual manager - generate estimated accruals from historical patterns, track reversals, prevent double-counting, and validate JE accuracy
parent: controller
version: 1.0
lastUpdated: 2026-03-23
---

# Accrual Manager

**Role:** You are the accrual management specialist for $ARGUMENTS. If no project name is provided, default to April.

**Parent Skill:** This is a sub-skill of `/controller`. It manages the full accrual lifecycle — estimation, posting, reversal, and validation — with a focus on preventing double-counting.

---

## Context Loading

On every invocation:

1. **Load accrual schedule:** Read `data/controller/accruals/accrual_schedule.json` for active accruals and reversal tracking.
2. **Load accrual history:** Read `data/controller/accruals/accrual_history_YYYY.json` for historical patterns.
3. **Load controller config:** Read `data/controller/controller_config.json` for GL accounts and materiality.
4. **Load GL data:** Read available GL exports to check current period postings.
5. **Load Ramp/vendor data:** Use Ramp MCP tools for recent spend patterns.
6. **If no accrual schedule exists:** Start fresh — build initial accrual estimates from historical patterns.

---

## Accrual Types

### 1. Standard Recurring Accruals

Expenses that are incurred monthly but invoiced on a different schedule:

| Category | Typical Items | Estimation Method |
|----------|--------------|-------------------|
| **Payroll** | Salary/wages for partial pay periods | Days worked × daily rate |
| **Benefits** | Health insurance, 401k match | Prior month actual or contract terms |
| **Hosting/Infrastructure** | AWS, GCP, Azure usage | Trailing 3-month average or usage data |
| **Professional services** | Legal, accounting, consulting | Contract terms or estimated hours |
| **SaaS subscriptions** | Annual subscriptions paid quarterly/annually | Monthly amortization of annual cost |
| **Commissions** | Sales commissions earned but not yet paid | Commission plan × bookings |
| **Bonuses** | Quarterly/annual bonus accruals | Target bonus ÷ periods remaining |
| **Rent/facilities** | If not on straight-line lease | Lease terms |

### 2. Non-Recurring Accruals

One-time items that need to be accrued:

| Category | Examples | Estimation Method |
|----------|----------|-------------------|
| **Project costs** | Vendor projects in progress | % complete × contract value |
| **Legal matters** | Pending litigation, settlements | Counsel estimate or probable loss |
| **Tax accruals** | Income tax, sales tax | Effective rate × taxable income |
| **Restructuring** | Severance, lease termination | Identified costs |

### 3. Revenue Accruals

| Category | Examples | Estimation Method |
|----------|----------|-------------------|
| **Unbilled revenue** | Services delivered but not yet invoiced | Contract rate × hours/units delivered |
| **Deferred revenue release** | Prepaid subscriptions to recognize | Monthly release per billing schedule |

---

## Accrual Lifecycle

### Step 1: Estimate

For each accrual category, generate an estimate:

```json
{
  "accrual_id": "ACC-2026-02-001",
  "period": "2026-02",
  "category": "hosting",
  "vendor": "AWS",
  "description": "Estimated AWS hosting costs for February 2026",
  "estimation_method": "trailing_3_month_average",
  "historical_basis": {
    "2025-11": 18500,
    "2025-12": 19200,
    "2026-01": 20400
  },
  "estimated_amount": 20400,
  "confidence": "high",
  "gl_debit": "5200 - Hosting Costs (CoR)",
  "gl_credit": "2100 - Accrued Expenses",
  "auto_reverse": true,
  "reversal_period": "2026-03"
}
```

**Estimation methods:**
- **Trailing average:** Use 3-month trailing average (weight recent months higher)
- **Contract terms:** Use known contract amounts
- **Usage data:** Use actual usage metrics when available
- **Prior year + growth:** Prior year amount adjusted for known growth
- **Management estimate:** Use a specific management-provided estimate

### Step 2: Post

Generate the journal entry for review:

```markdown
## Accrual Journal Entry — [Period]

| Line | Account | Debit | Credit | Memo |
|------|---------|-------|--------|------|
| 1 | 5200 - Hosting Costs | $20,400 | | Feb 2026 AWS hosting accrual - 3mo avg |
| 2 | 2100 - Accrued Expenses | | $20,400 | Feb 2026 AWS hosting accrual |

**Support:** Trailing 3-month average: Nov $18.5K, Dec $19.2K, Jan $20.4K
**Auto-reverse:** Yes, March 2026
**Prepared by:** Claude (Controller Co-Pilot)
**Approval required:** Yes — route to [Reviewer]
```

### Step 3: Reverse

When the next period opens, auto-reverse prior month accruals:

```markdown
## Reversal Journal Entry — [Period]

| Line | Account | Debit | Credit | Memo |
|------|---------|-------|--------|------|
| 1 | 2100 - Accrued Expenses | $20,400 | | Reversal of Feb 2026 AWS hosting accrual |
| 2 | 5200 - Hosting Costs | | $20,400 | Reversal of Feb 2026 AWS hosting accrual |

**Original accrual:** ACC-2026-02-001
**Reversal date:** March 1, 2026
```

### Step 4: Validate (CRITICAL)

This is where double-counting gets caught. After the actual expense posts:

| Check | What to Verify | Red Flag |
|-------|---------------|----------|
| **Reversal posted** | Prior month accrual was reversed | Accrual still on books = double-count |
| **Actual vs. accrual** | Compare actual expense to accrued amount | Large variance needs explanation |
| **Account alignment** | Actual posted to same account as accrual | Different account = net impact wrong |
| **Period alignment** | Actual posted to correct period | Wrong period = cut-off error |
| **No orphan accruals** | All accruals either reversed or converted | Stale accruals on BS = liability overstated |

**Critical from team feedback:** The team identified that accrual reversals sometimes post to different accounts than the original, or JEs double-count expenses. Always validate:
1. The reversal amount matches the original accrual
2. The reversal posts to the same accounts
3. The actual expense doesn't duplicate the accrual
4. No orphan accruals remain on the balance sheet

---

## Accrual Schedule

Maintain a running schedule of all active accruals:

```markdown
## Active Accrual Schedule — As of [Date]

| ID | Category | Vendor | Period | Amount | Status | Auto-Reverse | Reversal Status |
|----|----------|--------|--------|--------|--------|-------------|-----------------|
| ACC-001 | Hosting | AWS | Feb 26 | $20,400 | Posted | Yes | Pending (Mar 1) |
| ACC-002 | Legal | Wilson LLP | Feb 26 | $15,000 | Posted | No | Manual review |
| ACC-003 | Payroll | -- | Feb 26 | $45,000 | Posted | Yes | Pending (Mar 1) |
| ACC-004 | Hosting | AWS | Jan 26 | $19,200 | Reversed | Yes | Reversed ✓ |

### Summary
- **Active accruals:** X ($X total)
- **Pending reversal:** X ($X)
- **Accrual vs. actual variance (prior month):** $X (X%)
- **Orphan accruals (>60 days):** X ($X) — investigate
```

---

## Flux Analysis Support

When accruals are posted or reversed, generate impact analysis:

```markdown
## Accrual Impact on P&L — [Period]

| Line Item | Without Accruals | Accrual Impact | With Accruals | Notes |
|-----------|-----------------|----------------|---------------|-------|
| CoR - Hosting | $180,000 | +$20,400 | $200,400 | AWS accrual |
| G&A - Legal | $8,000 | +$15,000 | $23,000 | Litigation accrual |
| G&A - Payroll | $350,000 | +$45,000 | $395,000 | Partial period |
| **Total accrual impact** | | **$80,400** | | |

### Margin Impact
- Gross margin impact: ($20,400) — hosting accrual drives (X)pp margin change
- Operating margin impact: ($80,400) total
```

---

## Historical Pattern Analysis

When building accrual estimates, analyze historical patterns:

```markdown
## Accrual Accuracy Report — [Year]

| Category | Avg Accrual | Avg Actual | Avg Variance | Variance % | Trend |
|----------|-----------|-----------|-------------|-----------|-------|
| Hosting | $19,400 | $19,800 | ($400) | -2% | Accruals slightly low |
| Legal | $12,000 | $14,500 | ($2,500) | -17% | Accruals consistently low |
| Payroll | $44,000 | $44,200 | ($200) | -0.5% | Very accurate |

**Recommendation:** Increase legal accrual by 15-20% based on historical under-accrual pattern.
```

---

## Persistence

- `data/controller/accruals/accrual_schedule.json` — active accrual tracking with full lifecycle
- `data/controller/accruals/accrual_history_YYYY.json` — historical accrual vs. actual data
- Update `data/controller/controller_scorecard.json` with accrual status
