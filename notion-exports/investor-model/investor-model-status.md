# Investor Model — state of play

> Assembled from Notion (april workspace) on 2026-08-13.
> Sources: the **Investor Model** project page (`3ab992e46de08073bb00c4d52ea5fedf`, last edited
> 2026-08-07) and the task page **Investor Model: 2nd Review Responses & Action Plan (Ben's Notes +
> IC Memo)** (`3ab992e46de080358bd9c0ee44631241`, last edited 2026-07-31).

> ## ⚠️ On the Excel copy
>
> **This file is not the workbook, and it is not a reconstruction of it.** `april_Investor_Model_v2.xlsx`
> is not in Notion and is not reachable from this session — it lives on your machine or in Drive, and
> the Notion connector cannot see either. What is captured below is everything Notion *records about*
> the model: structure, what was rebuilt, what is still pending, and the Base-case figures as written
> down on 2026-07-31.
>
> Rebuilding those figures into a spreadsheet and calling it "where I left it" would produce a
> workbook whose numbers look authoritative and are actually invented — the worst possible artifact
> for something an IC reads. So: send me the file (upload it here, or put it somewhere this session
> can reach) and I will produce the Excel copy from the real thing.
>
> One caveat on dating even this record: the newest Notion evidence is **2026-07-31**, and the project
> page was last touched **2026-08-07**. You said you were editing until the **10th**, and there is an
> **Investor Model Review** meeting on the calendar for **Mon Aug 10, 1:30pm ET** (Ben Borodach).
> Nothing in Notion covers Aug 7–10, so any change you made in that window is not represented here.

---

## Project record

| Field | Value |
| --- | --- |
| Project | Investor Model |
| Status | In Progress |
| Priority | Urgent (Priority Score 16) |
| Energy | Extreme |
| Owner | Erik Leavell |
| Date | 2026-08-14 |
| Created | 2026-07-28 |
| Last edited | 2026-08-07 |
| Goal | [2026] Objective 10: Support Series C Fundraise with Best-in-Class Financial Strategy and Data |

---

## The anchor issue (the single highest-value fix)

Current customers bill about **$10M** today. On the contracts already signed, that same book grows to
about **$20M**, no new deals needed (pipeline and sales-capacity deals sit on top of that). The model
holds the book at today's $10M and never shows the ramp.

Showing that ramp clears most of the review comments:

- The book stops looking understated; it shows where the signed contracts actually get to
- The out years grow instead of flatlining, because signed contracts ramp (new wins then layer on top)
- The sales-efficiency metrics stop looking broken
- Everyone quotes one number instead of four

The headline number becomes **Run-Rate**: the signed book with its ramp, with pipeline and sales
capacity shown as separate layers on top, defined once on the console.

---

## Structural fixes (agreed, in the build plan)

| # | Comment | What the model said | Fix |
| --- | --- | --- | --- |
| 1 | ABV very understated; layer new wins into forward ABV | Book built off actual billed run-rate, so ABV at Apr-26 reads $10.1M while the IC memo prices off $20M of signed contracts. Newly won deals never flow into forward ABV, so the outer-year book flatlines | Re-anchor book to contracted ACV + new-win layering (also fixes magic number) |
| 2 | Too many ARR terms, defined inconsistently | Two different NRR numbers coexist with no definitions: Metrics tab shows 124% (historical cohort math), console shows 146% (modeled forward) | One ARR taxonomy + definitions block; NRR/GRR defined with formulas; ARR per head replaces ABV per head |
| 3 | Win rate too high; normalize on bigger denominator (15-25%) | The 55% is the win rate on qualified late-stage deals only. Against the full $50M pipeline, blended conversion is ~38%, still above the 15-25% investors benchmark | Reframe sales engine as Total Pipeline × conversion % (~20% Base); qualified win rate becomes a sub-driver; same New ARR |
| 4 | DIY revenue per file closer to $12 | Model charges $20 per DIY file in the Base case | Set $12 Base; volume scale recalibrates so revenue holds |
| 5 | DIY % too high vs Expert; Other Software scales too slow | DIY is 64% of revenue in FY26 and only drifts to 60% by FY28; Other Software reaches just 12% | Re-tune mix path (DIY glides to low-50s by FY28, software to ~18-20%); re-peg segment GMs |
| 6 | No capital raise in the model | Model raises no equity at all. Only financing is the existing $5M credit facility; cash bottoms near $5M in FY27 | Raise block as console levers: amount + timing, **$50M default** (adjustable to test the memo's $30-40M), flows to cash, equity, financing |
| 7 | S&M too low; OpEx growth too low | S&M grows only $4.8M → $7.2M while new ARR quadruples to $50M, implying $1 of S&M buys $7 of ARR. Total OpEx grows 23% in a year revenue triples | Raise-deployment plan re-inflates S&M and OpEx |
| 8 | Book Value lists 250 customers | The tab lists all 255 rows in one table: 53 paying customers, 13 churned, 188 prospects that pay nothing | Three sections that tie to the forecast: 53 paying customers with contracted ramp, 13 churned, then pipeline with weightings, stages, close dates, segments |
| 9 | Product mapping (Forward Value, Revenue Output) | Consultations, Estimator/Optimizer, and Transcripts sit as their own product lines and never roll up into Expert / DIY / Other Software | Map to Expert / Other Software everywhere; ACV column with "n/a per-op" for SaaS-style deals |
| 10 | Metrics Analysis placement + clutter | Sits at the back of the workbook, shows six overlapping book measures (CARR, UARR, book, forward, ABV, FRR) with equal billing and no hierarchy | Move directly after console; ARR Run-Rate on top with CARR + UARR beneath; duplicate book rows folded into an expanded view |
| 11 | Engines wrap customers and pipeline together | Each engine lists paying customers and unsigned prospects in one table, separated only by a Status column | Engines keep the status split; pipeline weightings, stages and close dates live in the Book Value pipeline section |
| 12 | "AI-proof" the model | Workbook still carries working layers (hidden scalars, engine roll-ups, leftover descriptions) that read as noise when opened cold or uploaded to an AI | New **Model Map** tab: definitions, driver flow (console → engines → outputs → statements), where actuals end and forecast begins |

## Already answered by the model (surfacing, not rebuilding)

| Comment | Answer |
| --- | --- |
| Customer engine shows ~$8M for 2026 but we say $10M | Both are right. $8.9M is signed customers; the rest is new business planned to win, together making $10.2M. The bridging line sits at the bottom of the tab where nobody sees it. Moving it to the top |
| What are rows 34-38 on the console? | They set how much a customer grows usage in years 1-4, which drives expansion revenue. Labels are cryptic; renaming in plain English |
| Total people declines in 2028? GTM flat? | Payroll dollars nearly triple. What's flat is employee count, because the model only counts people already hired — no hiring plan in it yet. Adding one, tied to the raise |

---

## Plan of action

| Phase | Scope | Timing |
| --- | --- | --- |
| **1. Definitions + surfacing** | ARR taxonomy + definitions, Metrics slimmed and moved, engine bridge to top, rows 34-38 relabeled, tab renames, Book Value filtered to real customers, product mapping, Model Map tab | 1 day |
| **2. The re-anchor** | Book to contracted ACV + new-win layering (reconciles to the memo's $20M), pipeline-conversion reframe, DIY $12 + mix/GM re-tune, raise block + S&M/OpEx deployment, req-plan headcount. Recalibrate Base to hold $10.2M / $32.3M / $74.9M revenue and the $25M / $75M run-rate anchors, then rerun the full 23-check QA suite across Bear/Base/Bull | 2-3 days |
| **3. Validate + pressure test** | Ops volumes signed off by Adams/Yossi (the memo's demand-quality gate), then hand to Ben + Chris to break | end of next week |

*Model status going in: 23-check QA suite passing across Bear/Base/Bull (ties, balance, engine
reconciliation, walks, anonymization). Current Base: revenue $10.2M / $32.3M / $74.9M, FRR $24M /
$74M / $145M, EBITDA positive FY28, cash $15.6M / $5.4M / $22.2M.*

---

## v2 status vs the structural fixes (as of 2026-07-31)

The model was rebuilt corporate-down as **april_Investor_Model_v2.xlsx** (fully formula-linked, no
scalar shortcuts; Chris's finding addressed at the root).

### Done in v2

- One Investor Console drives everything (assumption tabs de-drivered and hidden, Global Assumptions deleted)
- ARR taxonomy live (Run Rate headline with CARR/UARR beneath, ABV annual-historical)
- NRR/GRR are live measured formulas (also killed the 20 legacy `#N/A` cells)
- Rule of 40 / Magic / per-head / per-customer re-based on Run Rate; ABV-per-head removed
- Metrics moved next to the console
- **New Sensitivity Analysis tab** (full-model recomputes: Bear/Base/Bull + ACV and conversion at ±20%)
- Model Map tab (definitions + every methodology, the AI-proofing)
- Product family mapping (DIY / Expert / Other Software)
- Book Value intermediary block deleted (with its name leaks)
- Actuals refreshed from Campfire through Jun-26 with a one-cell dynamic boundary (headers and shading follow it)

### Pending (Phase 2, unchanged plan)

- Book re-anchor to contracted ARR with new-win layering (needs Adams's refreshed deal data; fixes the ABV level, book flatline, and NRR driver tie-out)
- Capital injection toggle with S&M/R&D reinflation
- Pipeline-conversion reframe + pipeline stage detail
- DIY $12 and mix recalibration (engine re-tune with Ben)
- Book Value three-section sort (rides the re-anchor rebuild)

### New data point for the raise story

With real May/Jun actuals in, **Base ending cash reads ~$11.1M FY26 and ~$0.7M FY27; Bear goes
negative in FY27.** The capital toggle is now the critical path.

---

## Related Notion records

- Project: [Investor Model](https://app.notion.com/p/3ab992e46de08073bb00c4d52ea5fedf)
- Task (completed 2026-07-29): [Investor Model: 2nd Review Responses & Action Plan](https://app.notion.com/p/3ab992e46de080358bd9c0ee44631241)
- Task: [Phase 1: Definitions + Surfacing](https://app.notion.com/p/e5a9d61a790d484c9db30de3a907dd87)
- Goal: [\[2026\] Objective 10: Support Series C Fundraise](https://app.notion.com/p/5779dcde5b464cef814cb7a9ef77235d)
