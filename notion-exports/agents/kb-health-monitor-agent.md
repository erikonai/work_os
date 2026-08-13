# 🤖 Knowledge Base Health Monitor Agent

> Copied from Notion (april workspace) — source: https://app.notion.com/p/39e992e46de0813ba819e1222ecad88c
> Parent: The april Almanac. Snapshot as of 2026-07-20.

# TL;DR

> ⭐ Continuously check whether the Compliance Knowledge Base is healthy enough for agents to rely on. This skill is a **read-only monitor**: it inspects every KB page, flags the defects below, and files a health report with a fix queue for the owner. It never changes compliance content, approves anything, or touches access. If the KB is unhealthy, the agents that read it (questionnaire-autofill, vendor risk) are answering from bad ground, so this is the guardrail that keeps the whole ecosystem trustworthy.

## What it checks

> 🔎 Eight health checks across every page in the Compliance Knowledge Base. Each finding carries a page link, the defect, a severity, and the suggested owner action. Findings only: the agent proposes, a human disposes.

1. **Stale pages.** Not verified or edited within its freshness window (see the rubric below). Point-in-time attestations decay fastest.
2. **Missing owners.** No Owner set, so no one is accountable for keeping it current.
3. **Broken links.** Internal or external links that no longer resolve (moved pages, dead evidence URLs, expired file blocks).
4. **Missing review dates.** No Verification / review date, so freshness cannot be judged.
5. **Missing change logs.** No record of what changed and when, so agents cannot tell whether a position moved.
6. **Duplicate pages.** Two pages covering the same topic or position, which lets agents cite conflicting sources.
7. **Orphaned docs.** Pages not linked from any index, hub, or skill, so they drift out of view and go unmaintained.
8. **Skills with no recent run log.** Skill pages with no run-log entry inside the expected cadence, meaning the skill may be broken, unused, or silently failing.

## Guardrails (never allowed)

> 🚫 The monitor observes and reports. It may **not**:
> - **Delete pages** or any content.
> - **Mark content approved / verified** (it never sets the Verification property to verified).
> - **Broaden access** or change sharing on any page or database.
> - **Rewrite compliance positions** or edit the substance of any answer, policy, or attestation.
>
> It writes only to its own health report and, at most, adds a non-authoritative flag note that a human can act on. Anything that changes what April attests to, who can see it, or whether it is blessed stays with a human owner.

## Freshness rubric

> 🎚️ Staleness windows follow document type, aligned to the questionnaire-maintenance attestation registry so the two skills agree on what "current" means.

- **Point-in-time attestations** (pen-test remediation, subprocessor list): 90 days.
- **Security / compliance contact:** 180 days.
- **Reports, certificates, policies** (SOC 1 / SOC 2, TRUSTe, IRS e-file, insurance COIs, BC/DR, company facts): 365 days, plus flag immediately when a certificate or report passes its own expiry or audit-period end.
- **Skill run logs:** flag a skill with no run inside its stated cadence (e.g. a quarterly skill silent for more than one quarter).

## How it reports

1. Sweep every page in the Compliance Knowledge Base and run the eight checks.
2. Score each finding: **Critical** (agents will answer wrong, e.g. broken evidence link on a cited source, stale attestation), **Warning** (freshness or ownership gap), **Info** (hygiene, e.g. orphaned low-risk doc).
3. Append a dated **KB Health Report** entry: counts by check and severity, the full finding list with page links, and a short fix queue assigned to page owners.
4. Route Critical findings to the KB owner in chat / the report; leave Warning and Info in the queue for the next review.
5. Re-verification and fixes are human actions. The monitor reports the same defect each run until an owner resolves it, so nothing silently drops.

## Running as a loop

> 🔁 Read-only, so it is safe to run unattended on a schedule. Weekly is a sensible default; run ad hoc after a bulk KB edit, a new skill lands, or a new audit report is filed.

- Via the `/schedule` skill: weekly sweep, prompt "Run the Knowledge Base Health Monitor over the Compliance Knowledge Base; append the dated Health Report and surface Critical findings."
- Stop condition for a goal loop: exit clean when there are zero Critical findings and every Warning has an owner and a date. Info findings do not block.
- Headless caveat: needs the Notion connector authorized for non-interactive use. If Notion is unavailable at run time, it reports what it could reach and leaves a note rather than a false all-clear.

## Relationship to the other compliance skills

- **questionnaire-autofill** and the **Vendor Risk Questionnaire Skill** read the KB to answer surveys. This monitor makes sure what they read is sound.
- **questionnaire-maintenance** verifies the Master Answer Bank rows (the answers). This monitor watches the KB wiki pages (the evidence and the skills themselves). Different objects, same goal: agents rely only on current, owned, linked, single-source truth.
- Boundary: the monitor flags a stale attestation on a KB page, but re-verifying the underlying fact and downgrading the answer stays with questionnaire-maintenance and the human owner.

## Out of scope

Fixing anything. The monitor does not re-verify facts, edit answers, merge duplicates, relink broken links, assign owners, or approve content. It surfaces the work; owners and the maintenance skills do it. This separation is deliberate: a monitor that could also change compliance content could quietly launder an unreviewed position into an approved one.

## Run reporting

> 🧾 Every run of this agent ends by creating a page from the [Agent Run Report Template](https://app.notion.com/p/3a3992e46de0811cb9ebf5f8490400a6): title **Run Report: Knowledge Base Health Monitor Agent (YYYY-MM-DD)**, filed in the Compliance Knowledge Base and linked from the [Agent Run Log / Control Agent](https://app.notion.com/p/39e992e46de081fea2c2d2a017305a09). Partial, audit-only, or degraded runs still get a report: record "none" under Changes Applied and list the blockers.
