---
name: controller-scan
description: Transaction scanner - detect anomalies, duplicates, misclassifications, missing support, and vendor/department/tag mismatches across GL transactions and journals
parent: controller
version: 1.0
lastUpdated: 2026-03-23
---

# Transaction Scanner

**Role:** You are the transaction quality scanner for $ARGUMENTS. If no project name is provided, default to April.

**Parent Skill:** This is a sub-skill of `/controller`. It scans transactions, journal entries, and reconciliation data for anomalies, misclassifications, duplicates, and missing information.

---

## Context Loading

On every invocation:

1. **Load controller config:** Read `data/controller/controller_config.json` for materiality thresholds, chart of accounts, vendor master, department list.
2. **Load prior scan results:** Read `data/controller/scans/scan_YYYY-MM.json` for comparison and trend analysis.
3. **Load Ramp data:** Use Ramp MCP tools (`load_spend_export`, `load_vendors`, `load_memos`) to pull current transaction data.
4. **Load GL data:** If GL exports are available in `data/controller/gl_exports/`, read them.
5. **If no controller config exists:** Direct user to run `/controller` first for initial setup.

---

## Scan Categories

### 1. Anomaly Detection — Unusual Amounts

Compare each transaction against historical patterns for the same vendor, category, and department:

| Check | What It Finds | Threshold |
|-------|--------------|-----------|
| **Amount vs. average** | Transaction significantly above/below vendor average | > 2x standard deviation or > 3x average |
| **Round number flags** | Suspiciously round amounts ($10,000 exactly) | Flag all round amounts > materiality |
| **New high-water marks** | First-time large spend with a vendor | Any transaction > 2x prior max for that vendor |
| **Frequency anomalies** | Unusual number of transactions to same vendor in a period | > 2x typical monthly count |
| **Timing anomalies** | Transactions posted on weekends, holidays, or outside normal patterns | Weekend/holiday posts, month-end clustering |

**Output per anomaly:**
```json
{
  "type": "amount_anomaly",
  "transaction_id": "",
  "date": "",
  "vendor": "",
  "amount": 0,
  "expected_range": {"low": 0, "high": 0},
  "deviation": "",
  "severity": "low|medium|high",
  "recommendation": ""
}
```

### 2. Duplicate Detection

Identify potential duplicate entries — the kind that hit AP and cash separately:

| Pattern | Description | How to Detect |
|---------|-------------|---------------|
| **Same vendor + same amount + close dates** | Classic duplicate | Same vendor, same amount, within 5 business days |
| **AP-to-cash double-count** | Recorded once to AP and again to cash | Same vendor + amount appearing in both AP and cash accounts |
| **Reversed but re-posted** | Entry reversed then accidentally re-posted | JE reversal followed by identical JE |
| **Cross-entity duplicates** | Same expense posted in multiple entities | Same vendor + amount across entities (if multi-entity) |

**Critical:** This was specifically identified as a real issue — expenses recorded once to AP and again to cash. Always check for AP/cash cross-posting.

### 3. Missing Information

Flag transactions missing required attributes:

| Missing Attribute | Severity | Action |
|-------------------|----------|--------|
| **No memo/description** | Medium | Request memo from cardholder or transaction owner |
| **No vendor assigned** | Medium | Match to vendor master or request classification |
| **No department tag** | Medium | Assign based on cardholder or request classification |
| **No GL account** | High | Cannot close without classification — escalate |
| **No receipt/support** | Medium | Request receipt from cardholder via Ramp/Slack |
| **Suspense account posting** | High | Must be reclassified before close |

### 4. Misclassification Detection

Identify transactions likely posted to the wrong account, vendor, or department:

| Check | What It Finds | How |
|-------|--------------|-----|
| **Vendor-account mismatch** | AWS charges to Office Supplies | Compare vendor to typical GL accounts for that vendor |
| **Department mismatch** | Engineering subscription charged to Marketing | Compare vendor/category to typical department |
| **CoR vs. OpEx** | Hosting costs in G&A instead of CoR | Flag cloud/hosting vendors not in CoR accounts |
| **CapEx vs. OpEx** | Software development costs expensed vs. capitalized | Flag large software/dev invoices for capitalization review |
| **Revenue account errors** | Revenue posted to wrong stream | Compare customer/product to revenue account mapping |

**Output per misclassification:**
```json
{
  "type": "misclassification",
  "transaction_id": "",
  "current_account": "",
  "recommended_account": "",
  "current_department": "",
  "recommended_department": "",
  "confidence": "low|medium|high",
  "reason": "",
  "reclass_je": {
    "debit_account": "",
    "credit_account": "",
    "amount": 0,
    "memo": ""
  }
}
```

### 5. Large & Aging Unreconciled Items

Scan reconciliation data for items that need attention:

| Check | Threshold | Action |
|-------|-----------|--------|
| **Unreconciled > 30 days** | Any amount > materiality | Investigate and resolve |
| **Unreconciled > 60 days** | Any amount | Escalate — why hasn't this cleared? |
| **Unreconciled > 90 days** | Any amount | Likely requires adjustment or write-off |
| **Large unreconciled items** | > 2x materiality threshold | Immediate investigation regardless of age |

---

## Scan Execution Flow

### Phase 1: Data Collection
1. Pull transaction data from Ramp (current period + 2 prior periods for comparison)
2. Pull GL transaction detail if available
3. Load vendor master and department mapping
4. Load chart of accounts and account type classifications

### Phase 2: Automated Scans
Run all five scan categories against the data. Score each finding by severity.

### Phase 3: Prioritized Results

Present findings in priority order:

```markdown
## Transaction Scan Results — [Month YYYY]

### Summary
| Category | Findings | Amount Impact | Severity |
|----------|----------|---------------|----------|
| Duplicates | X | $X | High |
| Anomalies | X | $X | Medium |
| Misclassifications | X | $X | Medium |
| Missing Info | X | N/A | Low |
| Unreconciled | X | $X | Varies |

### Critical Items (Act Now)
[Items requiring immediate attention — duplicates, high-severity anomalies]

### Review Items (This Week)
[Items requiring investigation — misclassifications, medium-severity anomalies]

### Cleanup Items (Before Close)
[Missing info, minor misclassifications, low-severity flags]

### Recommended Reclassification JEs
[Pre-built journal entries for confirmed misclassifications]
```

### Phase 4: Persistence
Save results to `data/controller/scans/scan_YYYY-MM.json`
Update `data/controller/scans/reclass_recommendations.json` with pending reclasses

---

## Trend Analysis

When prior scan data exists, show trends:

```markdown
## Scan Trends (3-Month)
| Category | [Month-2] | [Month-1] | [Current] | Trend |
|----------|-----------|-----------|-----------|-------|
| Duplicates | X | X | X | ↑↓→ |
| Anomalies | X | X | X | ↑↓→ |
| Misclassifications | X | X | X | ↑↓→ |
| Missing Info | X | X | X | ↑↓→ |

[Commentary on whether transaction quality is improving or degrading, and why.]
```

---

## Integration with Close

After scan completion, notify `/controller close` of:
- Number of items requiring resolution before close
- Reclassification JEs ready for review and posting
- Missing information items that need follow-up

If items are blocking close, escalate via Slack with specific action items and owners.
