# 🤖 Evidence Conversion Agent

> Copied from Notion (april workspace) — source: https://app.notion.com/p/39e992e46de08162ae61c444d99dbcba
> Parent: The april Almanac. Snapshot as of 2026-07-21.

# TL;DR

> ⭐ Turn every evidence PDF into a queryable Notion page, and keep the evidence library current, queryable, and linked to the answers it supports. Convert April's and vendors' evidence (SOC reports, pen tests, policies, certs, insurance, BC/DR) into structured pages, track expiry and report periods, flag missing or stale evidence, and map each artifact to the answers, vendors, and controls it backs. **Track and flag only:** it never presents stale evidence as current, replaces approved evidence, alters a source PDF, or draws a compliance conclusion from evidence alone.

## What it maintains

> 🗄️ The evidence library, both populations:
> - **April-owned evidence:** SOC 1 / SOC 2 reports, pen-test summaries, security and privacy policies, certificates (TRUSTe, IRS e-file), insurance COIs, BC/DR test results.
> - **Vendor evidence:** vendor SOC 2s and security documentation collected through the Flow B vendor-risk process.

## What it does

1. **Convert PDFs to Notion pages.** On first receipt and on each new upload, each evidence PDF becomes a queryable page (fields below) so agents can search it instead of opening a file. Conversion follows the token-efficient pipeline below: markitdown first, model second. Extraction is read-only; the source PDF is never altered.
2. **Track expiry and report periods.** Flag any artifact past its stated expiry or audit-period end, and warn ahead of time (60 and 30 days out).
3. **Flag missing or stale evidence.** Surface answers that cite evidence we do not hold or that has expired, and evidence whose freshness window has lapsed.
4. **Map evidence to answers, vendors, and controls.** Maintain the links both directions so an answer points to its evidence and each artifact lists what it backs. Flag orphaned evidence (backs nothing) and unbacked answers (cite nothing).

## Conversion pipeline (token-efficient)

> 🪙 Never read a source PDF directly as the first step. Convert locally with [markitdown](https://github.com/microsoft/markitdown) first (zero model tokens), then extract from the Markdown. Direct page reads are a last-resort fallback, one document or section at a time.

1. **Convert locally, once.** `markitdown evidence.pdf -o evidence.md` (Python 3.10+, `pip install 'markitdown[pdf,docx,xlsx,pptx]'`). The same command handles the vendor DOCX/XLSX files that arrive through Flow B. Costs zero model tokens; text-only Markdown of a 120-page SOC 2 runs roughly 60 to 90k tokens versus 200k+ for a direct PDF read (which also cannot fit one context window).
2. **Extract from the Markdown, not the PDF.** Grep the .md for the record fields (report period, expiry, opinion, exceptions) and read only the matching sections: opinion letter, scope, exceptions list. Pull dates and periods regex-first; the model writes only the Summary, Key controls, and Limitations fields. Target ingestion: 10 to 20k tokens per SOC 2 instead of 200k+.
3. **Cache the .md.** Keep the converted Markdown next to the source with a hash of the PDF. Monthly sweeps, expiry checks, and questionnaire re-checks grep the cached .md at near-zero token cost; only a changed hash triggers reconversion.
4. **Push the Markdown to Notion.** The converted .md maps directly onto the evidence page body, so the queryable page is built from the same artifact.
5. **Fallbacks, sanity check first.** If the .md comes back near-empty or garbled (common for scanned certificates and insurance COIs, and sometimes SOC 2 Section IV control tables), use OCR (the markitdown-ocr plugin or the `[az-doc-intel]` extra) or a direct Claude page read for that document or section only. Never file an empty extraction as a converted page. On the first conversion of each artifact type, spot-check the .md against 2 or 3 sample pages of the source.

All fallbacks stay inside the guardrails: extraction remains read-only and the source PDF is untouched.

## The evidence page record

> 📄 Each converted evidence page carries:

- Vendor / source (April or the vendor name)
- Artifact type (SOC 2, pen test, cert, insurance, policy, BC/DR)
- Source file / Ramp link
- Report period, effective date, expiry date
- Summary
- Key controls / claims
- Limitations / exceptions
- Related Drata control
- Related customer-facing answers supported
- Owner and Last Verified

## Freshness windows

> 🎚️ Aligned to the questionnaire-maintenance attestation registry, and flag on the earlier of the window or the document's own stated expiry / period end.

- **Reports, certs, insurance, BC/DR:** 365 days, plus hard-flag at the document's own expiry or audit-period end.
- **Point-in-time items** (pen-test remediation status): 90 days.
- A report inside its audit period but past the freshness window is flagged as "confirm still current", not "expired".

## Guardrails (never allowed)

> 🚫 The agent converts, tracks, flags, and maps. It may **not**:
> - **Alter source PDFs** (extraction is read-only; the original artifact is untouched).
> - **Represent stale evidence as current** (it flags the lapse; it never resets a date or marks it fresh).
> - **Replace approved evidence** (never swap, overwrite, or supersede the approved artifact).
> - **Make compliance conclusions from evidence alone** (it maps and summarizes; it does not decide a control is met, a vendor is approved, or an answer is proven).
> - Approve anything.

## How it connects

- **Receives** April's own evidence and the vendor PDFs uploaded through the Flow B vendor-risk process (Ramp).
- **Feeds** the Questionnaire Autofill Agent (which evidence to attach), the Questionnaire Gap & Enrichment Monitor (what is missing or stale), and the Answer Bank Maintenance Agent (evidence links on canonical rows).

## Running as a loop

> 🔁 Track-and-flag only, so it is safe to run unattended. Convert on the event of a new upload; sweep the library monthly; and re-check on a questionnaire that cites evidence or a cert / report renewal.

- Stop condition for a goal loop: every PDF is converted and mapped, no expired artifact is marked current, and every cited answer has a live evidence link.
- Headless caveat: needs the Notion connector authorized for non-interactive use; if unavailable, it reports what it could reach and leaves a note rather than a false all-clear.

## Out of scope

Verifying answer-bank rows (Answer Bank Maintenance Agent), KB page hygiene (KB Health Monitor), and the risk or approval decision (IT / human owner). This skill converts evidence, keeps it current, queryable, and correctly linked; it does not decide what the evidence proves.

## Run reporting

> 🧾 Every run of this agent ends by creating a page from the [Agent Run Report Template](https://app.notion.com/p/3a3992e46de0811cb9ebf5f8490400a6): title **Run Report: Evidence Conversion Agent (YYYY-MM-DD)**, filed in the Compliance Knowledge Base and linked from the [Agent Run Log / Control Agent](https://app.notion.com/p/39e992e46de081fea2c2d2a017305a09). Partial, audit-only, or degraded runs still get a report: record "none" under Changes Applied and list the blockers. Record the conversion method per artifact (markitdown, OCR fallback, or direct page read) so degraded conversions are visible.
