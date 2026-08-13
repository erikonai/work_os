# 🤖 Agent Run Log / Control Agent

> Copied from Notion (april workspace) — source: https://app.notion.com/p/39e992e46de081fea2c2d2a017305a09
> Parent: The april Almanac. Snapshot as of 2026-08-07.

# TL;DR

> ⭐ Maintain the operating history for every agent and skill run so the compliance ecosystem is auditable and you can tell whether it is actually being maintained. It appends a run record after each agent run, rolls up system health (last run, open blockers, overdue reviews), and enforces the close rule: **a run cannot be closed while it has unresolved approval gates or missing evidence.** Append-only: it never edits another agent's output, approves content, or deletes history.

## What it maintains

> 🗃️ One **Run Log** across all the compliance skills (Questionnaire Autofill, Answer Bank Maintenance, Evidence Conversion, Questionnaire Gap & Enrichment Monitor, KB Health Monitor, Developer Docs Sync, Ramp Vendor Risk Intake Tracker). One entry per run, immutable once written.

## The run record

> 📄 Each run entry carries:

- Agent / skill
- Run date and trigger (scheduled, event, or manual)
- Scope (pages, rows, or evidence checked)
- What changed (created, updated, flagged)
- Findings by severity
- Human queue items opened
- Unresolved blockers / approval gates
- Next review date
- Status (clean or blocked)

## What it does

1. **Append run summaries.** After each agent run, record the fields above. The log is the system of record for what ran, when, and with what result.
2. **Roll up system health.** Surface last-run date, open blockers, and overdue reviews per agent, so one view answers "is this actually being maintained."
3. **Flag silent skills.** Identify any skill with no run inside its stated cadence, and hand that to the KB Health Monitor (its "skills with no recent run log" check reads this log).
4. **Enforce closure.** Hold a run open while it still has unresolved always-ask gates or missing evidence, so nothing is quietly marked done.

## The close rule (the control function)

> 🚦 A run is **clean** only when it has no unresolved approval gates and no missing evidence. Anything short of that stays **blocked**, with the open items named in the entry and carried to the human queue. This is what makes the log a control, not just a diary.

## Guardrails (never allowed)

> 🚫 The agent records and controls closure. It may **not**:
> - **Close a run with unresolved approval gates or missing evidence.**
> - Approve content, or mark anything verified / approved.
> - Edit another agent's outputs, answers, or evidence.
> - Delete or rewrite log history (the log is append-only and immutable).

## How it connects

- **Every agent writes to it:** each run ends by appending its record here.
- **Feeds** the KB Health Monitor (silent-skill detection) and the human owner (the health rollup and blocker queue).
- **Distinct from** the agents it logs: it does none of their work and makes no compliance judgment. It records what happened and refuses to let a run close with open gates.

## Running as a loop

> 🔁 Append-only, so it is safe to run at the end of every agent run. Add a periodic rollup (weekly) that surfaces overdue reviews and standing blockers across all agents.

- Stop condition for a goal loop: every completed run is logged, and no run is marked clean while blockers or missing evidence remain.
- Headless caveat: needs the Notion connector authorized for non-interactive use; if unavailable, it buffers the run record and flags that the log was not written rather than dropping it.

## Out of scope

Doing any agent's work, verifying content, or approving anything. It maintains the operating history and enforces the close rule; the agents and human owners do the work it records.

---

### 2026-07-20 · Questionnaire Maintenance Agent · ad hoc full review (audit-only)

- **Rows checked:** 323 (SQL snapshot + bank_audit.py). 322 Confirmed, 1 Needs review, 0 Inferred. Last Verified blank on all rows (migration backlog).
- **Findings:** 115 STALE_CONFIRMED (bcdr_test 32, company_facts 31, pen_test_remediation 23, soc2_report 16, subprocessors 5, irs_efile 4, soc1_report 3, insurance_coi 1); 6 MISSING_EVIDENCE; 0 duplicates; 0 expiring within 30 days.
- **Evidence links:** all 32 anchors on the Fifth Third page resolve. No dead links.
- **Live checks:** [trust.getapril.com](http://trust.getapril.com) (updated 2026-05-21) lists 15 subprocessors vs 16 in the Third Party Inventory answer (row needs downgrade + refresh); Google and Sentry shown as "Global" location vs US-only attestations; april SOC 2 Type II 2025 current (12-month freshness window ends 2026-11-30); pen test retest letter (E.V.A, dated 2025-12-23) clean, open-item status pending security-team confirmation; the archived Google SOC 2 is Workspace scope, not GCP; trust page names SOC 1 as "Type 1", confirm report type.
- **Stamps / downgrades / merges applied:** none. Review-only pass; apply step deferred pending user sign-off on verifications.
- **Blocker found:** the original Maintenance Log home (Master Answer Bank page 39d992e46de08183afbbe777bc3c82ed) is archived; skill docs still point to it. Log recorded here instead.
- **Policy library review:** full findings and prioritized recommendations in work_os/compliance-policy-review-2026-07-20.md (Erik's machine). Headline: nearly all policies past their 2025-10-07 verification date (Background Check Policy 3.7 years); policy-vs-attestation contradictions on remote access/VPN, RTO/RPO timers, records/email retention, open source review, third-party background check scope, NDAs, incentive comp; no Anti-Fraud / Identity Theft Prevention Program.
- **Human queue:** pen-test open items; TPRA conflict row (Yes vs Attached); 6 missing evidence attachments (NDA, Third Party Inventory, business model, background check policy, access removal procedures, TPRA sample); SOC 1 type confirmation; remote-access posture and records-retention direction calls; subprocessor inventory refresh to 15; registry drift (attestations.csv 90d vs agent page 30d for subprocessors); restore or re-point the Maintenance Log home.
- **Next review:** 2026-10-01 quarterly run (schedule pending).

## Run reporting standard (2026-07-20)

> 🧾 This log keeps the one-line history. The full record of every run lives in a dedicated page created from the [Agent Run Report Template](https://app.notion.com/p/3a3992e46de0811cb9ebf5f8490400a6), titled **Run Report: \<Agent\> (YYYY-MM-DD)**. Every log entry links to its run report page. First report under this standard: [Run Report: Questionnaire Maintenance + Policy Review (2026-07-20)](https://app.notion.com/p/3a3992e46de08170aed9f2021fd261fe).

### 2026-07-30 · Evidence Conversion Agent · event-triggered, 1 artifact (converted)

- **Scope:** one artifact, E.V.A "Web Application, SDK, API Penetration Retest Report", getApril, dated 2026-05-11. 73 pages, 12.3 MB, SHA-256 prefix `270f798eeddf64b7`.
- **What changed:** converted into [\[april\] Penetration Report (Retest) - 2026](https://app.notion.com/p/3ad992e46de0809180a2fa584ecfe6ea) (page was empty, nothing overwritten). Cached text at `work_os/compliance-evidence/april-pentest-retest-2026-05-11.270f798eeddf64b7.txt`. Source PDF unaltered.
- **Findings by severity (retest of 17 prior-round findings):** 8 Fixed (1 Critical, 1 High, 6 Medium), 1 Not Fixed (Low, user enumeration), 8 Wasn't Tested (4 Low, 4 Informational). Remaining open posture: 0 Critical / 0 High / 0 Medium / 5 Low / 4 Informational.
- **Anomalies:** source PDF was password-protected and stopped all local conversion until the operator supplied the password (a scheduled run would have halted). Source report has sections 4.8 and 4.9 swapped body-to-title, flagged not corrected. Exploit screenshots not carried over. `markitdown` install is a broken 0.0.1a1 alpha, fell back to pikepdf plus pdftotext.
- **Human queue:** E.V.A to resolve the 4.8 / 4.9 swap before external use (blocking for external use); set Tags on both new pages (connector cannot write wiki custom properties); assign Owner and Last Verified; map the Drata control; decide remediate-or-accept on finding 4.9.
- **Supersedes:** the 2025-12-23 E.V.A confirmation letter as current pen-test evidence. Should clear the 23 stale `pen_test_remediation` rows flagged on 2026-07-20, with the non-production and retest-only scope caveats preserved.
- **Next review:** 2026-08-09, when the 90-day point-in-time freshness window on remediation status closes.
- **Status:** blocked (open human-queue items; no approval gates cleared by this run).
- **Run report:** [Run Report: Evidence Conversion Agent (2026-07-30)](https://app.notion.com/p/3ad992e46de081edb728fe567d1f4b50)

### 2026-07-30 · Questionnaire Maintenance Agent · event-triggered (new pen-test evidence), apply run

- **Scope:** Master Answer Bank, 323 rows. Audit, live re-verification of [trust.getapril.com](http://trust.getapril.com) and the Almanac pen-test and SOC archives, evidence link check (32 anchors), apply step.
- **Findings:** 115 STALE_CONFIRMED, 6 MISSING_EVIDENCE, 0 duplicates, 0 expiring within 30 days. Identical to the 2026-07-20 run; no bank row had changed in between. All 32 evidence anchors resolve.
- **Changes applied (11 rows):** 1 downgrade to Needs review (the Fifth Third "application fully remediated = Yes" answer, contradicted by the 2026-05-11 E.V.A retest: 1 Low Not Fixed, 8 findings Wasn't Tested); 8 downgrades to Inferred (Third Party Inventory 16 vs live 15; the network-perimeter and cloud-environment annual pen-test attestations and their two attachments, neither scope covered by any report on file; the "moderate or above remediation activities" row; and two rows citing the superseded 2025 letter); 2 Last Verified stamps against the live trust page. One untagged pen-test attachment row tagged `pen_test_remediation`. Bank now 313 Confirmed / 8 Inferred / 2 Needs review, 2 rows verified.
- **Live checks:** trust page unchanged since 2026-05-21, 15 subprocessors, Google and Sentry still labeled "Global", pen-test document still the 2025 letter. SOC 2 Type II 2025 (EY) current to 2026-11-30. The 2026-05-11 retest covers web application / SDK / API in a non-production environment only.
- **Human queue:** confirm open-item status and decide on a Fifth Third correction (blocking); close the perimeter and cloud pen-test scope gap; E.V.A to fix the 4.8 / 4.9 swap; publish the retest on the trust page; re-tag the Attestation Key column; plus the carried 2026-07-20 items (SOC 1 type, TPRA conflict row, subprocessor refresh, 6 missing attachments, policy contradictions).
- **Next review:** 2026-08-09, when the 90-day retest freshness window closes; quarterly run 2026-10-01 (cron still unscheduled).
- **Status:** blocked (unresolved approval gates; Decision 1 is customer-facing and needs CEO sign-off before any outbound correction).
- **Run report:** [Run Report: Questionnaire Maintenance & Gap Agent (2026-07-30)](https://app.notion.com/p/3ad992e46de081d1a230e06b5831971f)
- **Ecosystem change (same day):** the Answer Bank Maintenance Agent and the Questionnaire Gap & Enrichment Monitor Agent were **merged** into the [Questionnaire Maintenance & Gap Agent](https://app.notion.com/p/39d992e46de0814e9cd4f85116b39826), one agent with a Verify pass and a Gap pass, one report, one queue. The merged agent may now propose new Master Answer Bank rows and answer corrections for approval (never create them). `bank_audit.py` retired; the four freshness checks run as SQL against the live bank. Run report format rewritten to fit on one screen. Ecosystem map updated.
- **Cadence change (same day):** the Verify pass moved from quarterly to **monthly on the 1st** (cron `0 9 1 * *`, scheduled task `questionnaire-maintenance-monthly`). Every run now opens with a **Month in review** look-back covering the window since the last run: new bank rows from fill runs, surveys submitted, new or superseded evidence, other agents' runs, and whether last month's decisions actually closed. Quarterly runs could step over a closing 90-day attestation; monthly gives each 90-day window three looks. First monthly run 2026-08-01.

### 2026-07-30 · Questionnaire Maintenance & Gap Agent · scheduled monthly Verify pass (degraded)

- **Scope:** Master Answer Bank, 323 rows. Four freshness checks as SQL against the live data source, evidence-link check (32 anchors), Almanac SOC and certificate re-verification, month-in-review look-back widened to 2026-07-20. Second report dated 2026-07-30; the earlier one was the event-triggered apply run.
- **Findings:** 105 stale, 0 expiring within 30 days, 0 duplicates, 6 missing evidence. Reconciles exactly with the 115 of 2026-07-30 (minus 9 downgraded, minus 2 stamped, plus 1 newly tagged). All 32 evidence anchors resolve. Bank unchanged at 313 Confirmed / 8 Inferred / 2 Needs review.
- **Degraded:** [trust.getapril.com](http://trust.getapril.com) could not be fetched. The agent proxy answered 403 to CONNECT, an organization egress-policy denial, so the subprocessor diff did not run and nothing was stamped. The 16-vs-15 count and the Google and Sentry "Global" labels remain unverified.
- **Control defect found:** the **Last Modified** property does not track edits. All 323 rows report Last Modified identical to createdTime, including rows edited on 2026-07-30. Confirmed by controlled write-then-requery. The month-in-review's edit-detection check will silently return nothing every month until fixed.
- **Uncovered by any prior report:** Vanguard AI Survey, 54 answers submitted 2026-07-28; Ameriprise VISR, 389 answers In review since 2026-07-21. Zero new Master Answer Bank rows from 443 filled history rows.
- **Changes applied (1 row):** a Detail note on the Third Party Inventory row recording that re-verification was attempted and blocked. No stamps, no re-tags, no merges, no confidence raised.
- **Human queue:** restate the Ameriprise cloud and external-network pen-test answers before submission (blocking, still correctable); decide on a Vanguard correction for two submitted answers resting on the superseded 2025-12-23 letter; unblock [trust.getapril.com](http://trust.getapril.com) and fix Last Modified; plus the 12 items carried unresolved from 2026-07-30.
- **New substance gap:** no AI red-teaming program, surfaced by Vanguard MG.8. Google SOC 2 confirmed as Workspace/API/Developer Offerings scope, 2025-03-01 to 2026-02-28, so the GCP assurance gap is scope, not date.
- **Connector note:** **Tags** was written successfully this run and verified by re-query, so the documented wiki-property limitation is out of date and the agent page should be corrected.
- **Next review:** 2026-08-09, when the 90-day retest window closes; next scheduled run 2026-08-01.
- **Status:** blocked (unresolved approval gates, 6 missing evidence items, and a live source that could not be verified).
- **Run report:** [Run Report: Questionnaire Maintenance & Gap Agent (2026-07-30)](https://app.notion.com/p/3ad992e46de08112883de7b51d5ce624)

### 2026-07-31 · Vendor Risk Questionnaire Agent · ad hoc fill run, Vanguard (turn-based, dial Balanced)

- **Scope:** Vanguard's `April - Info and Questionnaire.docx` (received 2026-07-29, author Gopi Natarajan, "Vanguard Internal Use Only"). 142 items captured verbatim across 10 sections: documents requested, the six STRIDE categories, a 33-item Security Architecture Review that Vanguard labeled "April team needs to fill this", 19 Gen AI and Model Governance items, and a 28-item Model DDQ. Two embedded images read: April's own partner-integration architecture and data-flow diagram, and Vanguard's example base-guardrail configuration.
- **Sources:** Master Answer Bank (323 rows, SQL by topic); **Questionnaire Answer Bank filtered to Customer = Vanguard, which returned 54 answers submitted 2026-07-28** (Model Governance MG.1 to MG.24, Data Protection D.7.5, pen-test follow-up); Compliance KB for the SOC 2 Type II 2025 (EY) report and the 2026-05-11 E.V.A retest.
- **Tiers:** 57 Confirmed, 29 Inferred, 56 Needs review. The AI and DDQ sections came out 36 answered of 47 because the MG block is largely a re-ask of the 2026-07-28 submission, cited by MG item throughout. The gap is concentrated in the Security Architecture Review (18 of 56) plus Spoofing, Tampering and Denial of Service, all application-architecture questions the master bank has never covered.
- **Blocking flag (same-customer contradiction):** Vanguard's document asserts April runs Gemini Enterprise (Gemini 3.5 Flash, Gemini 3.1 Pro) for tax recommendations, document abstraction and chatbot responses. MG.2.1, submitted to Vanguard three days earlier, names **Anthropic** as the only third-party foundation-model provider and states it is not in production and not used on Vanguard or customer data. Google appears nowhere in that submission. April's own diagram nonetheless shows `Chatbot (AI)` and `Prep & Review Assistance (AI)`. The cited Gemini version numbers are not Google release names, which supports the reading that Vanguard's document is wrong. 4 items blank, about 25 contingent.
- **Other conflicts found:** D.7.5 as submitted to Vanguard cites the **GLBA Safeguards Rule** while the master bank records April as **not subject to GLBA**; master row "no third-party AI is used to deliver the product" is superseded by MG.12 ("Both"); master row "periodic testing for unanticipated bias or hallucinations: Yes" is superseded by MG.11 ("no ongoing algorithmic-fairness testing program"). Vanguard's pen-test follow-up still rests on the 2025-12-23 letter, superseded by the 2026-05-11 retest, which was already in the maintenance queue.
- **Changes applied:** created [Vanguard Questionnaire](https://app.notion.com/p/3ae992e46de08138af60c4b394258c8e) (tag Risk Questionaries), 10 Q and A tables in review state, 8 flag callouts, a Where-we-need-assistance block grouped by owner, a QC results table, and a Documents section. **No** Answer Bank writes, **no** Master Answer Bank rows proposed, **no** file uploads (integration cannot upload local files; 4 items need dragging in).
- **Human queue:** Flag 1 AI stack (CTO, blocking); the 18-item Security Architecture Review block (Engineering, blocking); SAR.31 versus the open enumeration finding (Security, blocking); IRS 7216 consent mechanics I.10 to I.12 (GC with Product, blocking); the RTO number (blocking); advisor / Crew scope with Vanguard (blocking, 8 items); session inactivity timeout; availability SLA and volumes; support access to tax data; missing architecture artifacts; NDA before evidence release; DDQ.24 threshold disclosure; the two superseded master rows.
- **Process miss:** the run went topic-first against the master bank and found the 54 submitted Vanguard answers only after reading this log, costing a redraft of two sections. Recommend the agent workflow query the history bank **by Customer** as step one whenever the assessor is an existing customer.
- **Next review:** on Erik returning the filled review columns, at which point the four reviewer columns get deleted, the run loads into the Answer Bank (Vanguard needs adding as a Customer select option first), and net-new master rows get proposed.
- **Status:** blocked (6 blocking human-queue items, 4 missing document uploads, and a same-customer contradiction that is a disclosure decision).
- **Run report:** [Run Report: Vendor Risk Questionnaire Agent (2026-07-31)](https://app.notion.com/p/3ae992e46de081368e2fec7e13eb076a)

### 2026-08-01 · Questionnaire Maintenance & Gap Agent · scheduled monthly Verify pass (first on the cron)

- **Comments first:** no comments on either 2026-07-30 report, so no approvals to apply. All 7 Master Answer Bank proposals, all 6 policy actions and all 3 Decide now items carry untouched. First run under the comment workflow to find the thread empty.
- **Scope:** Master Answer Bank, 323 rows. Four freshness checks as SQL against the live data source, live-source re-verification, evidence-link review, Bank Snapshot baseline, month-in-review 2026-07-30 to 2026-08-01.
- **Findings:** 105 stale, 0 expiring within 30 days, 0 duplicates, 6 missing evidence. Unchanged from 2026-07-30 because no row moved in the window.
- **Changes applied (3 rows):** three Confirmed rows downgraded to Needs review because April's own submitted Vanguard answers contradict them: AI model provenance (master "In-house" vs MG.12 "Both"), periodic bias testing (master "Yes" vs MG.11 "No"), and GLBA applicability (master "not subject" vs D.7.5 "handled under the GLBA Safeguards Rule"). Each row keeps its answer text and gains a CONFLICT note naming both variants and the submitted source. Bank now 310 Confirmed / 8 Inferred / 5 Needs review.
- **Cross-agent handoff:** all three came from the [Vendor Risk Questionnaire Agent](https://app.notion.com/p/3ae992e46de081368e2fec7e13eb076a) run of 2026-07-31 and were re-verified here against the Questionnaire Answer Bank directly rather than accepted on report.
- **Still contingent:** Vanguard's document claims April runs Gemini Enterprise in the production path. If true, the submitted MG.2.1 answer and at least one further master row are wrong. The cited model names are not real Google releases, so nothing was downgraded on that basis; it needs the CTO's answer.
- **Degraded:** [trust.getapril.com](http://trust.getapril.com) blocked for the second consecutive run, 403 to CONNECT at 13:13Z. No subprocessor diff, nothing stamped, prior values carried forward unverified.
- **Bank Snapshot:** first baseline written, 323 rows. Edit and deletion detection begins with the 2026-09-01 run; this run had no baseline to diff against.
- **Human queue:** confirm the production AI stack and set canonical AI answers (Daniel Marcous, 2026-08-08); agree one GLBA formulation (Ben Borodach via Erik, 2026-08-14); decide on an Application Security topic for the bank (Erik, 2026-08-21); plus the 15 open decisions and 13 unapproved proposals carried from 2026-07-30. The 2026-08-05 Ameriprise deadline is four days out and unactioned, with the draft still unsubmitted.
- **Next review:** 2026-09-01 monthly run; 2026-08-09 when the 90-day retest window closes.
- **Status:** blocked (no approval gates cleared, 6 missing evidence items, and a live source that could not be verified for the second month).
- **Run report:** [Run Report: Questionnaire Maintenance & Gap Agent (2026-08-01)](https://app.notion.com/p/3af992e46de08155af99e3d41db79fac)

### 2026-08-04 · Dev Docs Sync Agent · ad hoc second pass (30 pages, apply run)

- **Scope:** all 30 Notion pages tagged Developer Documentation, all 14 getapril OpenAPI specs (55 endpoints swept), and the prose docs, reference pages and recipes on [developer.getapril.com](http://developer.getapril.com). Every Notion page was last edited 2026-07-14 or 2026-07-15, so nothing had moved on the mirror side and all drift is source-side.
- **Findings:** 3 pages with real drift, 2 annotated, 25 verified clean, 1 orphan re-confirmed. API side: all 14 specs still map 1:1 to a page, and **API: data-out** documented 2 of its spec's 7 endpoints. Guide side: **Transcriptor** claimed april can pull 7 prior years of IRS transcript data where the source says 3 prior years plus the current year, and that page was logged "verified, no changes" on 2026-07-14. **Data-In** was missing the source's Filing example payload and still carried a Paycheck payload the source has dropped.
- **Changes applied (6 content pages, 24 log-only):** data-out gained the 4 real missing endpoints in full plus a flagged callout for a duplicate spec entry; Transcriptor's transcript window corrected; Data-In gained the Filing payload, a retired-content callout on the Paycheck payload and a page-scope note; Configuration and tax-planning both annotated for a Readme scaffold entry (`GET /new-endpoint`); Data Exchange Overview regained a dropped source link. No pages created, none deleted, no internal-only callouts touched.
- **Method defect found and fixed:** the 2026-07-14 pass inventoried the prose source by searching for each *existing page's* topic. That is one-directional and structurally cannot surface a source doc with no page. A proper source-side sweep found **17 unmirrored docs** (9 guide docs, 5 reference pages, 3 recipes), plus ~9 more linked from source pages and never swept. None are new; they were invisible to the old method. The agent's Sync workflow step 2 needs rewriting before the next run.
- **Tooling defect:** the getapril `search` tool misses docs that fetch fine by ID. `getapril/paycheck-estimation` and `getapril/paycheck-estimation-copy` return nothing for their own titles. Both pages were nearly retired as orphans on a search miss. A search miss is now treated as inconclusive, never as evidence of retirement. Separately, `getapril/data-in` (97,005 characters) exceeds the fetch tool's token limit and must be read from file.
- **Source-side defects for engineering:** the Transcriptor doc contradicts itself on future years (3 in the overview, 2 in the API Only Mode walkthrough, same page, and this is an IRS consent-scope number); the data-out spec carries a `Copy of Get Return Download Link` duplicate with `-1` after the path parameter; the Configuration and tax-planning specs carry untouched Readme scaffolding; and the three typos flagged on 2026-07-14 ("enviornment", "We will response", slug "overivew") are still open.
- **Human queue:** approve or decline the 17 gap pages, ideally in priority order; settle whether reference pages and recipes are in scope at all (that alone clears 8); confirm and scope the ~9 unswept linked docs; and route the four engineering defects to an owner, since they have now accumulated across two runs.
- **Next review:** 2026-09-04 monthly; no cron is set for this agent. Ad hoc triggers: any API release or [developer.getapril.com](http://developer.getapril.com) refresh.
- **Status:** blocked (no approval gates cleared; 17 gaps and 4 source-side defects await decisions).
- **Run report:** [Run Report: Dev Docs Sync Agent (2026-08-04)](https://app.notion.com/p/3b2992e46de081b888a8f6ac70ff7a16)

### 2026-08-04 · Dev Docs Sync Agent · gap close + scheduling (same-day addendum to the second pass)

- **Scope:** Erik answered the three open scope questions the same afternoon, so the run continued instead of closing with the queue open. Decisions: reference pages and recipes are in scope after all; every source doc gets its own page rather than being folded in; source-side defects are owned by the **Solutions Consultant team**.
- **Changes applied:** **17 pages created**, taking the Developer Documentation set from 30 to 47 (9 guide docs, 5 reference pages, 3 recipes). All tagged, all cross-linked on topic, all carrying provenance in their Change Log. Agent definition updated with the scope-and-structure rule and the Solutions Consultant routing rule. Sync Log extended.
- **Mirroring found more than the diff pass did, and three findings are security-shaped.** A **plaintext partner secret** is published in the React Native recipe alongside a literal partner ID and user email, on a public page. The **api-quickstart** reference page uses real-structured JWTs instead of placeholders, and one decodes to an individual's **personal Gmail address** plus account identifiers. And **all three SDK recipes instruct partners to pass `partnerSecret` client-side**, shipping a server-side credential inside a mobile binary, which contradicts April's own guidance in two other docs. Credentials and personal data were redacted in the mirrors rather than copied, the one deliberate departure from mirror-as-is.
- **SDK retirement reopened.** The 2026-07-14 retirement of SDK Reference: Overview rested on the finding that the native SDK path no longer appears in the source. It does: three live recipes document it in full, missed in July because the search-based inventory never covered the `recipe:` namespace. Retirement callout kept but marked unresolved.
- **Also found:** roughly ten smaller source defects, including internal count contradictions (three data models stated / five listed; three integration options stated / two compared), three non-compiling code snippets, an Android snippet enabling application-wide cleartext HTTP on the tax-filing path, a `dataModels` vs `apis` field-name mismatch against the spec, and three inconsistent secret-management anchors.
- **Now scheduled weekly:** cloud routine **Dev Docs Sync Agent (weekly)**, `trig_01VwmgHzaERwyCapnK3zMfBc`, Tuesdays 5:00 PM ET (`0 21 * * 2` UTC), WorkOS environment, Opus 5, Notion connector attached. Two caveats recorded on the agent page: the cron is fixed UTC and drifts to 4:00 PM ET under EST from November, and the **getapril MCP server is local rather than a [claude.ai](http://claude.ai) connector**, so the scheduled run cannot reach the 14 OpenAPI specs. The routine prompt requires it to report those as unverified rather than write a false "verified, no changes" line, which is precisely the failure mode this run caught from July. Weekly runs are partial coverage until getapril is connected.
- **Human queue:** replace the published secret and personal email at source and decide on rotation (blocking); correct or withdraw the client-side `partnerSecret` guidance, which partners may already have followed (blocking); settle the SDK retirement (blocking); confirm the Transcriptor future-years figure, carried from the main run (blocking); connect getapril at [claude.ai/customize/connectors](http://claude.ai/customize/connectors); work the ten smaller defects; decide the DST handling.
- **Next review:** 2026-08-11, first scheduled weekly run. Note the routine's first fire is 2026-08-04 itself, since today is a Tuesday.
- **Status:** blocked (four blocking items, three of them security-shaped, none of which were known before today). The gap queue itself is closed.
- **Run report:** [Run Report: Dev Docs Sync Agent (2026-08-04)](https://app.notion.com/p/3b2992e46de081b888a8f6ac70ff7a16), addendum section

### 2026-08-04 · Dev Docs Sync Agent · SDK decision (second same-day addendum)

- **Decision (Erik):** the SDK retirement stands, and the three SDK recipes are retired alongside it. Rather than un-retire [SDK Reference: Overview](https://app.notion.com/p/322992e46de081f5a8c3c492c9918d1a), the recipes were brought into line with it.
- **Applied to four pages:** SDK Reference: Overview plus the [React Native](https://app.notion.com/p/3b2992e46de081b59dd2cf766a17c8fa), [iOS Swift](https://app.notion.com/p/3b2992e46de081218659c1e885ba3471) and [Android Kotlin](https://app.notion.com/p/3b2992e46de08104b75ece036b534af1) recipes. Each keeps its full content and gains a Retired callout with date, reason, and a pointer to the current WebView path. Nothing deleted, per the retirement policy. Rationale for keep-not-archive: partners integrated against the SDK path, so we need to be able to read what they were told.
- **What it closes:** the Almanac no longer says two contradictory things about the SDK. **What it does not:** all three recipes are still live and public at source, so a partner reading the docs today is still told to use a retired SDK and to embed `partnerSecret` in a mobile app.
- **Guard added to the agent definition** so this is not re-litigated: these four pages will keep showing a live source doc against a retired mirror, which is the expected state rather than drift. Future runs report only whether the source-side removal has happened; they do not un-retire the pages or re-flag the conflict.
- **Human queue:** four blocking items down to three, and the remaining ones consolidate. Taking the three recipes down at source now resolves the plaintext partner secret and the client-side `partnerSecret` guidance in one action. Still separately open: the personal email inside an example JWT on the api-quickstart page, the Transcriptor future-years contradiction, and the SDK Context objects surviving in Shared Data Structures.
- **Status:** blocked, but nothing further is waiting on Erik. Every remaining item is a source-side fix owned by the Solutions Consultant team.
- **Run report:** [Run Report: Dev Docs Sync Agent (2026-08-04)](https://app.notion.com/p/3b2992e46de081b888a8f6ac70ff7a16), Addendum 2

### 2026-08-04 · Dev Docs Sync Agent · first scheduled weekly run (degraded, 0 pages verified)

- **Trigger:** scheduled, cloud routine `trig_01VwmgHzaERwyCapnK3zMfBc`, cron `0 21 * * 2` UTC, WorkOS, Opus 5, unattended. First fire, on the same date as the manual second pass because the routine was created on a Tuesday, exactly as the previous entry predicted.
- **Scope attempted:** the full source-first sweep, 14 OpenAPI specs plus all prose docs, reference pages, recipes and the 11 known-unswept slugs. **Scope achieved:** Notion-side inventory and integrity only.
- **Outcome: 0 of 47 pages verified. The source was unreachable by every available path**, so no page was compared to anything. All 47 pages are reported UNVERIFIED. **No page Change Log was written**, deliberately, because with nothing compared there is no honest per-page line and a false "verified, no changes" entry is precisely the failure this agent caught in July.
- **Access tested four ways, all denied:** getapril MCP not attached (predicted); WebFetch 403; curl 56, CONNECT tunnel failed with a 403 from the gateway; headless chromium `ERR_TUNNEL_CONNECTION_FAILED`; no cached source on the container. **A control fetch of `example.com` was denied identically**, which settles it as the environment's egress policy rather than the docs site blocking a bot.
- **Capability defect found and corrected:** the agent page promised that a cloud run "falls back to WebFetch and headless chromium against the public docs site, which covers the prose docs but probably not the 14 OpenAPI specs." False. There is no fallback and no partial coverage. That claim was a prediction written by a local session that could not observe the cloud environment, and it would have led a future run to report the prose side as covered. Corrected in place with the original wording preserved.
- **Changes applied:** none to any Developer Documentation page. No edits, no Change Log entries, no page created, none retired, none deleted, no internal-only callout touched. Three writes total, all serial, all first-attempt: Addendum 3 on the existing run report, a Sync Log entry plus the capability correction on the agent page, and this record.
- **Verified without needing source:** 47 pages tagged Developer Documentation, matching 30 plus yesterday's 17, all last edited 2026-08-04, none archived or untagged. **SDK retirement reported not decided**, per the guard added yesterday: SDK Reference: Overview was read directly and its Retired callout, Erik's resolution and Change Log entry are consistent. Erik closed that item himself earlier the same day. Whether the source-side removal has happened is unknowable from this environment.
- **Source-side defects carried, none re-checkable, so "open" means "not confirmed fixed":** three recipes still published with a plaintext sandbox partner secret and client-side `partnerSecret` guidance (blocking, 2 runs); personal Gmail address in the `api-quickstart` example JWT (blocking, 2 runs); Transcriptor 3-versus-2 future-years contradiction (blocking, partner-quotable, 2 runs); SDK Context objects in Shared Data Structures (2 runs); `data-out` duplicate download entry (2 runs); Configuration and tax-planning scaffold entries (2 runs); the three typos from 2026-07-14 (**3 runs**, oldest open item); ~10 smaller defects (2 runs).
- **Human queue:** one new item, and it concerns the routine rather than the docs. **The weekly run cannot do its job as configured.** Either open egress to [developer.getapril.com](http://developer.getapril.com) in the WorkOS environment **and** add getapril as a [claude.ai](http://claude.ai) connector, since the connector covers the specs and egress covers the prose docs and neither alone suffices, or turn the cron off and keep this local. A weekly job that verifies nothing still produces a weekly audit trail, and an audit trail of empty runs reads as coverage from a distance. Owner Erik, blocking for the routine itself. All other queue items unchanged, owned by the Solutions Consultant team, nothing further waiting on Erik.
- **Anomalies:** Notion write flakiness did not recur under serial writes. Slack and Figma MCP servers are unauthenticated and cannot be authorized non-interactively, which limits how a scheduled run could notify a team channel directly. No permission errors, no archived pages, no tool crashes.
- **Next review:** 2026-08-11, next scheduled fire. It will be equally empty unless access changes before then. Recommend the next run re-run the three-way access check first and exit early with a short record if it fails.
- **Status:** blocked. 0 pages verified, one blocking item for Erik on the routine's viability, three blocking source-side items with the Solutions Consultant team.
- **Run report:** [Run Report: Dev Docs Sync Agent (2026-08-04)](https://app.notion.com/p/3b2992e46de081b888a8f6ac70ff7a16), Addendum 3

### 2026-08-06 · Vendor Risk Questionnaire Agent · Vanguard, CTO answers returned and loaded (close-out)

- **Scope:** Daniel Marcous returned `april - Vanguard Security and AI Governance Response [Daniel editted].docx`. All **28 previously pending items answered**, substantive rewrites to roughly 15 more, plus a **new 10-question security-operations follow-up block** (the questions from the "April x Vanguard: Security and AI Governance Process Overview" email thread) answered in full. **152 items, zero pending.** Erik confirmed the set.
- **Flag 1 resolved against the Answer Bank's position: Google Gemini IS in production.** april's document-extraction pipeline invokes Gemini models through **Vertex AI** for the extraction step, inside april's own US GCP project, under Google enterprise terms (no training on april or client data), with traffic screened via **Model Armor**. Input-side and assist-only; never the source of the filed outcome; no prompt interface. Daniel framed it as a **clarification that supersedes and makes precise** the MG.2.1 answer submitted to Vanguard on 2026-07-28, not a correction. Also newly disclosed: **Intercom Fin** is the customer-support chatbot (third-party managed service, SOC 2 Type II, ISO 27001/27701/27018/42001, no-training and zero-retention terms, critical vendor).
- **Other flags closed:** SAR.31 answered Yes as standard behaviour; RTO confirmed at **4 hours** (conflicts with the 24-hour Fifth Third dropdown); inactivity timeout confirmed at **60 minutes**, which validates leaving the Fifth Third 15-minute control unchecked; crew and advisor items answered against april's real product without needing Vanguard; GLBA settled as "Data Deletion and Retention Policy aligned to the FTC GLBA Safeguards Rule, 16 C.F.R. §314.4(c)(6), as a bank service provider".
- **Net-new facts:** Datadog as SIEM; Security Command Center Premium, Cloud Armor, Cloud IDS/IPS and Cloud IAP named (replacing the generic "security agent"); mTLS supported and to be enabled for Vanguard at onboarding; audit log retention one year; published rate limits (~10k API calls/partner/minute, ~10k concurrent users/partner, ~12k webhook events/partner/second); full session model (60-min access token, 14-day single-use rotating refresh token with reuse detection, 256-bit CSPRNG identifiers, per-user session epoch kill switch); 7216 consent gating documented field by field; retention model in three cases with a configurable 90-day disposal window; partner-facing audit-log API **under development** for Vanguard's CSOC SaaS-Collector pattern #1.
- **Changes applied:** [Vanguard Questionnaire](https://app.notion.com/p/3ae992e46de08138af60c4b394258c8e) rewritten to **final state** (reviewer columns deleted, all flags resolved, follow-up section added). **30 net-new rows added to the Master Answer Bank** under new topics Application Security, AI Stack, Security Operations, API Platform, Multi-Tenancy, Consent (7216), Data Retention. Final sendable document built: `april - Vanguard Security and AI Governance Response - FINAL 2026-08-06.docx`, 41 pages, april-branded, no internal pages.
- **Not applied, deliberately:** two Confirmed Master Answer Bank rows are now wrong and were **not** edited, because the same answers sit in submissions already delivered to Fifth Third and correcting them is a disclosure decision. (1) "no third-party AI is used to deliver the product or service" is false now that Gemini is in the production path and Intercom Fin runs support chat. (2) "Is generative AI used to produce output from your product or service? No" needs the Gemini extraction step disclosed. Also carried: the 24-hour versus 4-hour RTO, and pen-test rows still citing the superseded 2025-12-23 letter.
- **Gap:** the email thread itself was not read (Gmail and Superhuman connectors unauthorized in the session). The follow-up answers were taken from the block Daniel appended to the response document; confirm the question set matches the thread before submitting.
- **Human queue:** confirm the follow-up question set against the email; decide the Fifth Third correction (Erik + CEO); reconcile the RTO; questionnaire-maintenance to downgrade the two superseded master rows; NDA position before evidence release; re-verify the two forward-looking commitments (CSP script directives, partner audit-log API).
- **Status:** questionnaire **complete and ready to send**; run **blocked** only on the Fifth Third disclosure decision and the two stale master rows.
- **Run report:** [Run Report: Vendor Risk Questionnaire Agent (2026-07-31)](https://app.notion.com/p/3ae992e46de081368e2fec7e13eb076a), updated with this close-out.
