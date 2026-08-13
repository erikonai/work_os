# 🛍️ Procurement Knowledge Base

> Copied from Notion (april workspace) — wiki database: https://app.notion.com/p/55f992e46de08214b6eb815f1617f504
> Snapshot 2026-08-13. All 11 pages, numbered in the wiki's own `Order` property.
> Owner throughout: Erik Leavell. Every page is tagged **Policy**.

| # | Page | Last edited |
| --- | --- | --- |
| 1 | [Business Spend Overview](01-business-spend-overview.md) | 2026-08-08 |
| 2 | [Requesting a Purchase: Spend Requests](02-requesting-a-purchase-spend-requests.md) | 2026-08-10 |
| 3 | [Purchase Approval Process & Timelines](03-purchase-approval-process-and-timelines.md) | 2026-08-09 |
| 4 | [Vendor Risk & Security Requirements](04-vendor-risk-and-security-requirements.md) | 2026-08-08 |
| 5 | [Invoices & Accounts Payable](05-invoices-and-accounts-payable.md) | 2026-08-09 |
| 6 | [Corporate Card Usage & Guidelines](06-corporate-card-usage-and-guidelines.md) | 2026-08-08 |
| 7 | [Expense Reimbursements](07-expense-reimbursements.md) | 2026-08-08 |
| 8 | [Business Travel Booking](08-business-travel-booking.md) | 2026-08-09 |
| 9 | [Travel Expenses, Per Diem & Safety](09-travel-expenses-per-diem-and-safety.md) | 2026-08-08 |
| 10 | [Work From Home Stipend](10-work-from-home-stipend.md) | 2026-08-08 |
| 11 | [Out-of-Policy Activity & Escalations](11-out-of-policy-activity-and-escalations.md) | 2026-08-08 |

## Notes on the source

- The database is a **wiki** with a simple schema: Page (title), Owner (person), Tags (multi-select,
  only value `Policy`), Order (number), Verification, Last edited time.
- The wiki's two views are *All pages* (grouped by Tags, sorted by Order) and *Pages I own*.
  The view you linked (`v=8ff992e46de08389a093880d7df454ca`) is not one of the two stored view IDs,
  so these pages were pulled by querying the data source directly and sorting by `Order` — which
  reproduces the default *All pages* ordering.
- Several pages carry deliberate **"agreed in design, NOT YET LIVE in Ramp"** callouts (the express
  approval path, the risk-keyed Security review, the reordered Accounting step). Those are preserved
  as-is; they describe planned behaviour, not current behaviour.
