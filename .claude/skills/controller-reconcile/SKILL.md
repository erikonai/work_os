---
name: controller-reconcile
description: Reconciliation engine - monthly subledger-to-balance-sheet reconciliations (AR, AP, bank, Stripe, PayPal) with audit-ready workpapers and mismatch flagging
parent: controller
version: 1.0
lastUpdated: 2026-03-23
---

# Reconciliation Engine

**Role:** You are the reconciliation specialist for $ARGUMENTS. If no project name is provided, default to April.

**Parent Skill:** This is a sub-skill of `/controller`. It performs monthly reconciliations between subledgers and the balance sheet, produces audit-ready workpapers, and flags mismatches early.

---

## Context Loading

On every invocation:

1. **Load controller config:** Read `data/controller/controller_config.json` for materiality thresholds and account mappings.
2. **Load prior reconciliations:** Scan `data/controller/reconciliations/` for prior period workpapers and trends.
3. **Load GL data:** Read available GL exports or trial balance data.
4. **Load Ramp data:** Use Ramp MCP tools for expense/AP data.
5. **Determine target period:** Default to the most recent completed month unless user specifies otherwise.

---

## Reconciliation Types

### 1. Accounts Receivable (AR)

Reconcile AR subledger to GL AR balance:

| Step | What to Check | Source |
|------|---------------|--------|
| **GL AR balance** | Total AR per general ledger | Trial balance |
| **AR subledger total** | Sum of all open customer invoices | AR aging report |
| **Difference** | Should be $0 | Calculate |
| **Reconciling items** | Payments in transit, unapplied cash, credit memos | Investigate |

**AR-specific checks:**
- AR aging analysis (current, 30, 60, 90, 120+ days)
- Collectability assessment for 120+ day accounts
- Bad debt reserve adequacy (is the allowance sufficient?)
- Revenue recognition alignment (is deferred revenue properly classified?)
- Credit memo volume and trends

**Known issue from team feedback:** $144K across ELV8 Inc., Mission Lane, Tongo Financial, and VetraFi in 120+ day AR. The reconciliation must flag accounts like these and recommend collectability assessment and potential reserve adjustments.

### 2. Accounts Payable (AP)

Reconcile AP subledger to GL AP balance:

| Step | What to Check | Source |
|------|---------------|--------|
| **GL AP balance** | Total AP per general ledger | Trial balance |
| **AP subledger total** | Sum of all open vendor invoices | AP aging report |
| **Difference** | Should be $0 | Calculate |
| **Reconciling items** | Payments in transit, unrecorded invoices, accruals | Investigate |

**AP-specific checks:**
- AP aging analysis
- Duplicate invoice detection (same vendor + same amount + same invoice number)
- AP-to-cash cross-posting (the duplicate issue the team identified)
- Unrecorded liabilities at period end
- Vendor statement reconciliation for top vendors
- Three-way match: PO → receipt → invoice

**Critical from team feedback:** AP reconciliation previously caught duplicated expenses — items recorded once to AP and again to cash. Always cross-reference AP postings against cash disbursements for the same vendor + amount.

### 3. Bank Reconciliation

Reconcile bank statement to GL cash balance:

| Step | What to Check | Source |
|------|---------------|--------|
| **Bank statement balance** | Ending balance per bank | Bank statement/feed |
| **GL cash balance** | Cash per general ledger | Trial balance |
| **Outstanding checks** | Issued but not cleared | Check register |
| **Deposits in transit** | Recorded but not cleared at bank | Deposit log |
| **Bank charges/interest** | Items on bank statement not yet in GL | Bank statement |

### 4. Stripe Reconciliation

Reconcile Stripe settlements to GL:

| Step | What to Check | Source |
|------|---------------|--------|
| **Stripe gross volume** | Total charges processed | Stripe dashboard/export |
| **Stripe fees** | Processing fees deducted | Stripe fee report |
| **Stripe net payouts** | Amounts deposited to bank | Stripe payout report |
| **GL revenue** | Revenue recorded in GL | Revenue accounts |
| **GL Stripe fees** | Fees recorded in GL | Fee expense account |
| **Bank deposits from Stripe** | Stripe payouts per bank | Bank statement |

**Stripe-specific checks:**
- Revenue recognition timing (charge date vs. payout date vs. recognition date)
- Refund and dispute reconciliation
- Subscription vs. one-time revenue classification
- Fee allocation to correct expense accounts
- Deferred revenue for prepaid subscriptions
- Currency conversion reconciliation (if applicable)

**Team feedback:** Over time, Claude should handle the Stripe close process and review related JEs before posting.

### 5. PayPal Reconciliation

Same structure as Stripe:
- Gross volume → fees → net payouts → GL entries → bank deposits
- Reconcile holds, disputes, and chargebacks
- Verify fee classification and revenue recognition

### 6. Other Balance Sheet Accounts

For prepaids, accrued liabilities, deferred revenue, fixed assets, and other BS accounts:

| Account Type | What to Reconcile | Frequency |
|-------------|-------------------|-----------|
| **Prepaids** | Amortization schedule vs. GL balance | Monthly |
| **Deferred Revenue** | Billing schedule vs. recognition schedule | Monthly |
| **Accrued Liabilities** | Accrual schedule vs. GL balance | Monthly |
| **Fixed Assets** | Asset register vs. GL, depreciation schedule | Monthly |
| **Intercompany** | Elimination entries, IC balance agreement | Monthly (if multi-entity) |

---

## Workpaper Format

Every reconciliation produces an audit-ready workpaper:

```markdown
## [Account Name] Reconciliation — [Month YYYY]

**Account:** [GL Account #] — [Account Name]
**Prepared by:** Claude (Controller Co-Pilot)
**Reviewed by:** [Pending review]
**Date prepared:** [Date]
**Period:** [Month YYYY]

---

### Balance Comparison

| Source | Amount | Reference |
|--------|--------|-----------|
| GL Balance (per trial balance) | $X | TB line [X] |
| Subledger / External Balance | $Y | [Source document] |
| **Unadjusted Difference** | **$Z** | |

---

### Reconciling Items

| # | Date | Description | Amount | Category | Status | Age (Days) |
|---|------|-------------|--------|----------|--------|------------|
| 1 | MM/DD | [Description] | $X | [Timing/Error/Other] | Open | X |
| 2 | MM/DD | [Description] | $X | [Timing/Error/Other] | Resolved | X |

**Total Reconciling Items:** $X
**Adjusted Difference:** $0 (target)

---

### Aging of Open Reconciling Items

| Age Bucket | Count | Amount | % of Total |
|------------|-------|--------|------------|
| Current (< 30 days) | X | $X | X% |
| 30-60 days | X | $X | X% |
| 60-90 days | X | $X | X% |
| 90+ days | X | $X | X% |

---

### Observations & Flags

[Narrative observations about trends, concerns, items requiring management attention]

---

### Required Actions

| # | Action | Owner | Due Date | Priority |
|---|--------|-------|----------|----------|
| 1 | [Action item] | [Name] | [Date] | High/Med/Low |

---

### Sign-off

- [ ] Preparer review complete
- [ ] All items > $[materiality] explained
- [ ] Reviewer sign-off
- [ ] Filed to audit workpaper binder
```

---

## Execution Flow

### Phase 1: Data Gathering
1. Pull trial balance / GL account balances for the period
2. Pull subledger detail (AR aging, AP aging, bank statements, Stripe/PayPal reports)
3. Pull prior period reconciliation for carryforward items

### Phase 2: Automated Matching
1. Compare GL balance to subledger/external balance
2. Identify and categorize reconciling items:
   - **Timing differences** — items that will clear in the next period
   - **Errors** — items requiring correction (JE or reclassification)
   - **Unidentified** — items needing investigation

### Phase 3: Workpaper Generation
1. Generate the standardized workpaper for each account
2. Flag items over materiality threshold
3. Flag aging items (>30, >60, >90 days)
4. Generate recommended correcting entries for errors

### Phase 4: Review & Notification
1. Save workpapers to `data/controller/reconciliations/[account]_YYYY-MM.json`
2. Post summary to Slack for reviewer notification
3. Update close checklist status in `data/controller/close/close_YYYY-MM.json`

---

## Reconciliation Dashboard

After completing reconciliations, produce a summary:

```markdown
## Reconciliation Status — [Month YYYY]

| Account | GL Balance | External Balance | Difference | Reconciling Items | Status |
|---------|-----------|-----------------|------------|-------------------|--------|
| AR | $X | $X | $X | X items / $X | Complete/In Progress |
| AP | $X | $X | $X | X items / $X | Complete/In Progress |
| Bank - Primary | $X | $X | $X | X items / $X | Complete/In Progress |
| Stripe | $X | $X | $X | X items / $X | Complete/In Progress |
| PayPal | $X | $X | $X | X items / $X | Complete/In Progress |
| Prepaids | $X | $X | $X | X items / $X | Complete/In Progress |
| Deferred Revenue | $X | $X | $X | X items / $X | Complete/In Progress |

### Summary
- **Accounts reconciled:** X / Y
- **Total open reconciling items:** X ($X)
- **Items over materiality:** X ($X)
- **Items aging > 60 days:** X ($X)
- **Correcting JEs required:** X

### Flags
[Items requiring management attention or escalation]
```

---

## Persistence

Save all reconciliation data to:
- `data/controller/reconciliations/[account]_YYYY-MM.json` — individual workpapers
- `data/controller/reconciliations/summary_YYYY-MM.json` — dashboard summary
- Update `data/controller/controller_scorecard.json` with reconciliation status
