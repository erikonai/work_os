# 🔐 Vendor Risk & Security Requirements

> Copied from Notion (april workspace) — source: https://app.notion.com/p/3b6992e46de08176a92bede49dd0a33f
> Parent: 🛍️ Procurement Knowledge Base. Order 4. Tag: Policy. Last edited 2026-08-08.

# TL;DR

> ⭐ Every new vendor completes april's Vendor Security & Risk Questionnaire before we onboard them, and we assign a risk tier from their answers. Tier 1 Critical vendors owe the most evidence, including a current SOC 2 Type II and a pen test attestation. Tier 1 vendors are reassessed every year, Tier 2 every 24 months, Tier 3 at renewal. Security and Compliance own this program.

# april Vendor Risk & Security Requirements

This page tells you what a vendor has to do before april can use them, and what we will ask you for as the business owner of that vendor.

> 🚨 Every new vendor **MUST** complete the Vendor Security & Risk Questionnaire and receive a risk tier before onboarding. This runs at the purchase gate, so it happens as part of your Spend Request rather than as separate paperwork.

> 🚨 The Tier 1 / Tier 2 / Tier 3 taxonomy on this page **REPLACES** the Critical, High, Medium, and Low risk levels in the Spend Policy. Use the tiers below.

## Risk tiers

The tier is set from the vendor's inherent risk, before we look at any of their controls. It decides which questionnaire sections apply, what evidence the vendor owes, who approves, and how often we reassess.

> 🚨 **Tier 1 Critical**
> - Touches customer NPI or tax data
> - Moves money, executes payments, or holds custody of funds
> - Sits on the product critical path, where an outage degrades or halts our service
> - Appears on [trust.getapril.com](http://trust.getapril.com) as a subprocessor
> - Gets every questionnaire section

> ⚠️ **Tier 2 Important**
> - Touches internal data or internal systems, but not customer NPI
> - Gets the core questionnaire sections

> ✅ **Tier 3 Low**
> - No access to april data
> - Attestation only

> 🚨 Customer NPI or tax data, money movement, and product critical path each **FLOOR** a vendor at Tier 1 on their own. A listed subprocessor on [trust.getapril.com](http://trust.getapril.com) is Tier 1 as well, because the public trust-center commitment applies to them.

Other factors that push a tier up: continuous access to a data store rather than one-off access, logical access to april systems rather than data alone, a sole-source vendor with no viable backup, and any engagement that pulls data offshore or into a regulated regime such as GLBA, CCPA, or GDPR.

## Evidence required by tier

| **Tier** | **Evidence the vendor must provide** |
| --- | --- |
| Tier 1 Critical | SOC 2 Type II, pen test attestation, BC/DR summary, subprocessor list, DPA, certificate of insurance, security policy, financials |
| Tier 2 Important | SOC 2 Type II or security whitepaper, DPA, security policy |
| Tier 3 Low | Signed attestation only |

## What the questionnaire asks

The questionnaire runs 85 questions across 16 sections. Section 0 sets the tier, and the tier decides which of the remaining sections the vendor has to answer.

<details>
<summary><strong>The 16 sections</strong></summary>

1. Vendor profile & relationship
2. Data handling & classification
3. Information security program
4. Access control & encryption
5. Cloud & infrastructure
6. Independent assurance (SOC 2 / certifications)
7. Penetration testing & vulnerability management
8. Business continuity & disaster recovery
9. Incident response & breach notification
10. Privacy & regulatory
11. AI / ML, if the vendor uses AI on april data or provides an AI service
12. Fourth-party / subprocessor oversight
13. Financial viability & concentration
14. HR & personnel security
15. Legal, litigation & adverse media
16. Attestation & required attachments

</details>

<details>
<summary><strong>Types of company confidential information the questionnaire protects</strong></summary>

**Business Strategy & Planning**
- Strategic plans and roadmaps
- Merger and acquisition information
- Market expansion plans
- Business forecasts

**Financial Information**
- Investment plans
- Pricing strategies
- Salary information
- Revenue and profit figures

**Intellectual Property**
- Trade secrets
- Product designs and specifications
- Proprietary algorithms
- Research and development data

**Customer & Partner Data**
- Customer lists and contracts
- Partner agreements
- Sales pipeline information
- Customer usage analytics

**Internal Operations**
- Security procedures
- Network architecture
- Employee performance data
- Internal policies and procedures

</details>

## The decision

A reviewer rates each control domain against the vendor's answers and independent evidence. The overall residual risk equals the worst unresolved domain, not an average. One of three outcomes follows.

| **Outcome** | **When it applies** |
| --- | --- |
| Approve | Residual risk is Low or Moderate and the evidence is complete and current |
| Approve with conditions | The only open items are rated High, each one closes by a dated remediation with a named owner, and the contract carries the required clauses |
| Reject | Any Critical residual risk that cannot be mitigated. Unencrypted NPI at rest, refusing the DPA or use limitation, training on april data by default, an undisclosed breach, or no assurance path for a Tier 1 all land here |

## Who approves

| **Tier** | **Approver** |
| --- | --- |
| Tier 1 Critical | Security owner and business owner both sign off |
| Tier 2 Important | Business owner, with security review |
| Tier 3 Low | Business owner |
| Any reject, or any Tier 1 approve-with-conditions | Escalates to the security owner |

## Contract clauses the assessment triggers

The result of the assessment decides what has to be in the contract before we sign.

- Any NPI or PII: a DPA with use limitation
- Any data access: a breach-notification SLA and a right to audit
- Vendors with subprocessors: subprocessor-change notice
- Tier 1: a security addendum and insurance minimums, covering cyber and E&O

## Reassessment

| **Tier** | **Reassessment cadence** |
| --- | --- |
| Tier 1 Critical | Annual |
| Tier 2 Important | Every 24 months |
| Tier 3 Low | At renewal |

Five events pull a vendor into an off-cycle reassessment no matter where they sit in the cadence:

1. A breach at the vendor
2. A new subprocessor
3. april data moved offshore
4. A lapsed SOC 2
5. A change of control at the vendor

> 🚨 If you learn about any of those five events for a vendor you own, you **MUST** tell Security. Do not wait for the scheduled reassessment.

> 🆘 **Where to get help**
> - Tiering questions, or a vendor pushing back on the questionnaire: Security.
> - DPA, security addendum, and insurance language: Legal.
> - Whether a vendor is already assessed: Finance or Compliance.

## Change log

- **Last reviewed:** 2026-08-08
- **Owner:** Erik Leavell
- **Notes:** New page. Tiering, evidence floors, decision logic, approvers, and reassessment cadence sourced from the Vendor Risk Management Program (Appendix A and Appendix B). The confidential information list is sourced from the Spend Policy. This tiering replaces the Spend Policy's Critical, High, Medium, and Low risk levels.
