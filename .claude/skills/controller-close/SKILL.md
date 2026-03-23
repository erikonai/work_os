---
name: controller-close
description: Month-end close manager - close checklist tracking, task assignment, dependency management, progress monitoring, and close quality scoring
parent: controller
version: 1.0
lastUpdated: 2026-03-23
---

# Close Manager

**Role:** You are the month-end close manager for $ARGUMENTS. If no project name is provided, default to April.

**Parent Skill:** This is a sub-skill of `/controller`. It manages the month-end close process — tracking tasks, assignments, dependencies, and completion status against target timelines.

---

## Context Loading

On every invocation:

1. **Load close status:** Read `data/controller/close/close_YYYY-MM.json` for current close progress.
2. **Load close template:** Read `data/controller/close/close_template.json` for standard checklist.
3. **Load controller config:** Read `data/controller/controller_config.json` for close calendar and team.
4. **Load reconciliation status:** Scan `data/controller/reconciliations/` to check reconciliation completion.
5. **Load scan results:** Read `data/controller/scans/` to check for blocking items.
6. **Load accrual status:** Read `data/controller/accruals/accrual_schedule.json` for pending accruals.
7. **Determine current period:** Auto-detect based on date. If days 1-15, assume closing prior month.

---

## Standard Close Checklist

The default close checklist, customizable per company:

### Day 1-2: Pre-Close

| # | Task | Owner | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Cut off AR — ensure all invoices for the period are posted | AR | None | |
| 2 | Cut off AP — ensure all vendor invoices received are entered | AP | None | |
| 3 | Import bank transactions through period end | Controller | Bank feed access | |
| 4 | Import Stripe transactions and settlements through period end | Controller | Stripe access | |
| 5 | Import PayPal transactions through period end | Controller | PayPal access | |
| 6 | Import Ramp transactions through period end | Controller | Ramp access | |
| 7 | Review and approve pending expense reports | Approvers | Employee submissions | |

### Day 3-5: Core Close

| # | Task | Owner | Dependencies | Status |
|---|------|-------|-------------|--------|
| 8 | Reconcile bank accounts | Controller | #3 | |
| 9 | Reconcile Stripe to GL | Controller | #4 | |
| 10 | Reconcile PayPal to GL | Controller | #5 | |
| 11 | Reconcile AR subledger to GL | Controller | #1 | |
| 12 | Reconcile AP subledger to GL | Controller | #2 | |
| 13 | Review and post accruals | Controller | #2 complete | |
| 14 | Review and reverse prior month accruals | Controller | #13 | |
| 15 | Run transaction scan for anomalies | Controller | #3-7 | |
| 16 | Post reclassification journal entries | Controller | #15 | |
| 17 | Reconcile payroll to GL | Controller | Payroll processed | |
| 18 | Review intercompany transactions (if applicable) | Controller | All entities closed | |

### Day 5-7: Review & Adjustments

| # | Task | Owner | Dependencies | Status |
|---|------|-------|-------------|--------|
| 19 | Reconcile prepaids and amortization | Controller | None | |
| 20 | Reconcile deferred revenue | Controller | #1 | |
| 21 | Reconcile fixed assets and depreciation | Controller | None | |
| 22 | Post adjusting journal entries | Controller | #8-21 | |
| 23 | Flux analysis — review P&L line items vs. prior month and budget | Controller | #22 | |
| 24 | Investigate and explain material variances | Controller | #23 | |

### Day 7-10: Reporting & Sign-Off

| # | Task | Owner | Dependencies | Status |
|---|------|-------|-------------|--------|
| 25 | Generate trial balance | Controller | #22 | |
| 26 | Prepare management P&L and balance sheet | Controller | #25 | |
| 27 | Prepare gross margin analysis by product | Controller | #25 | |
| 28 | Prepare cash flow summary | Controller | #25 | |
| 29 | Generate executive financial update | Controller | #26-28 | |
| 30 | CFO/management review and sign-off | CFO | #29 | |
| 31 | File workpapers and close the period | Controller | #30 | |

---

## Close Status Dashboard

```markdown
## Month-End Close — [Month YYYY]

### Progress
██████████░░░░░░░░░░ 52% (16/31 tasks)

**Day of close:** Day 4 of 10
**Target close date:** [Date]
**Status:** On Track / Behind / Blocked

### By Phase
| Phase | Tasks | Done | Blocked | Status |
|-------|-------|------|---------|--------|
| Pre-Close (Day 1-2) | 7 | 7 | 0 | Complete |
| Core Close (Day 3-5) | 11 | 6 | 1 | In Progress |
| Review (Day 5-7) | 6 | 2 | 0 | Not Started |
| Reporting (Day 7-10) | 7 | 0 | 0 | Not Started |

### Blocked Items
| Task | Blocked By | Owner | Action Needed |
|------|-----------|-------|---------------|
| #9 Stripe reconciliation | Missing Stripe export | Controller | Pull Stripe payout report |

### Upcoming (Next 24 Hours)
1. Complete Stripe reconciliation (#9)
2. Complete AP reconciliation (#12)
3. Begin accrual review (#13)

### Close Quality (Prior Month)
| Dimension | Score | Notes |
|-----------|-------|-------|
| Timeliness | 4/5 | Closed day 9 (target: 10) |
| Accuracy | 3/5 | 2 post-close adjustments |
| Completeness | 4/5 | All recons complete |
| Documentation | 3/5 | Some workpapers need support |
| Communication | 4/5 | Reports delivered day 12 |
```

---

## Stripe & PayPal Close Process

Per team feedback, the skill should handle the Stripe and PayPal close process over time:

### Stripe Close Checklist
1. Pull payout report for the period (all settlements)
2. Pull charge and refund detail
3. Pull fee report
4. Reconcile gross charges → fees → net payouts → bank deposits
5. Verify revenue recognition timing (charge date alignment)
6. Post or validate revenue JEs
7. Post or validate fee expense JEs
8. Reconcile deferred revenue for prepaid subscriptions
9. Flag refunds and disputes for review
10. Prepare Stripe reconciliation workpaper

### PayPal Close Checklist
Same structure adapted for PayPal's settlement and fee reporting.

---

## Review Workflow

Per team feedback, implement a formal review process:

1. **Claude prepares:** Generates reconciliations, JEs, reports with full support
2. **Claude notifies:** Posts to designated Slack channel or Notion page with summary
3. **Reviewer reviews:** Reviews workpapers, approves or requests changes
4. **Claude posts:** After approval, posts JEs to GL (with explicit user confirmation)

```markdown
## Review Queue — [Date]

| Item | Type | Amount | Prepared | Status |
|------|------|--------|----------|--------|
| Feb accrual - hosting | JE | $24,500 | Claude | Pending review |
| Feb AR reconciliation | Workpaper | N/A | Claude | Pending review |
| Reclass: AWS to CoR | JE | $3,200 | Claude | Pending review |
```

---

## Close Calendar

Track close dates and set expectations:

```json
{
  "target_close_day": 10,
  "reporting_day": 15,
  "board_reporting_day": 20,
  "close_calendar": {
    "2026-01": {"close_date": "2026-02-09", "status": "closed", "quality_score": 3.6},
    "2026-02": {"close_date": null, "status": "in_progress", "quality_score": null}
  }
}
```

---

## Persistence

- `data/controller/close/close_YYYY-MM.json` — close checklist with task status per period
- `data/controller/close/close_template.json` — standard checklist template (customizable)
- `data/controller/close/review_queue.json` — items pending review/approval
- Update `data/controller/controller_scorecard.json` with close progress
