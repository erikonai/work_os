# Custom Skills

Created: 2026-01-24

## Available Skills

| Skill | Purpose |
|-------|---------|
| `/pm` | Senior PM - produces CTO-ready PRDs with hypothesis-driven MVP scoping |
| `/cto` | Technical architecture and implementation planning |
| `/create-issue` | Quick issue capture mid-development |
| `/explore` | Codebase exploration before implementation |
| `/create-plan` | Structured plan document with progress tracking |
| `/execute` | Implement plan with status updates |
| `/review` | Comprehensive code review |
| `/peer-review` | Evaluate external review findings |
| `/document` | Update docs after code changes |
| `/cfo` | TreasuryPath CFO Co-Pilot - strategic finance, valuation narrative, and VC readiness (CJ Gustafson voice) |
| `/cmo` | CMO Co-Pilot - GTM strategy, growth frameworks, and marketing leadership (composite GTM leader voice) |
| `/gtm-icp` | Define and refine ICP segments, messaging frameworks, positioning, and objection handling |
| `/gtm-monetization` | Design packaging, pricing strategy, and value communication. Bridges GTM (CMO) and Finance (CFO). |
| `/gtm-content` | Generate segment-targeted content (LinkedIn posts, emails, case studies, sales decks) from ICP and messaging data |
| `/gtm-lead-capture` | Build lead qualification rubrics, response templates, enrichment workflows, and handoff protocols |
| `/gtm-deal-intel` | Analyze deal conversations (transcripts, notes, emails), score opportunities, extract competitive intel, and feed insights back upstream |
| `/learning-opp` | Three-level concept explanations |

## Typical Workflows

**Feature Development:**
`/pm` → `/cto` → `/explore` → `/create-plan` → `/execute` → `/review` → `/document`

**Quick Bug/Feature Capture:**
`/create-issue`

**Code Review:**
`/review` → `/peer-review` (if getting external feedback)

**Learning:**
`/learning-opp`

**Finance & Strategy:**
`/cfo` (standalone - valuation narrative and VC readiness)

**GTM & Marketing:**
```
/cmo (strategy) → /gtm-icp (ICP & messaging) → /gtm-monetization (packaging & pricing)
    ↑                                              ↓
    │                                         /gtm-content (content creation)
    │                                              ↓
    │                                         /gtm-lead-capture (lead scoring & handoff)
    │                                              ↓
    └──────────────────────────────────────── /gtm-deal-intel (deal analysis & feedback loop)
                                                   ↩ feeds back to /gtm-icp and /cmo
```

**Data dependencies:**
- `/gtm-content` requires `messaging_framework.json` (from `/gtm-icp`)
- `/gtm-lead-capture` requires `icp_profiles.json` (from `/gtm-icp`)
- `/gtm-deal-intel` warns without `icp_profiles.json` but doesn't block
- `/gtm-deal-intel` produces upstream recommendations for `/gtm-icp`, `/cmo`, and `/gtm-content`
