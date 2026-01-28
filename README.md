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
| `/cmo` | CMO Co-Pilot - GTM strategy, growth frameworks, and marketing leadership (composite GTM leader voice) |
| `/gtm-icp` | Define and refine ICP segments, messaging frameworks, positioning, and objection handling |
| `/gtm-monetization` | Design packaging, pricing strategy, and value communication |
| `/gtm-content` | Generate segment-targeted content (LinkedIn posts, emails, case studies, sales decks) from ICP and messaging data |
| `/gtm-lead-capture` | Build lead qualification rubrics, response templates, enrichment workflows, and handoff protocols |
| `/gtm-deal-intel` | Analyze deal conversations (transcripts, notes, emails), score opportunities, extract competitive intel, and feed insights back upstream |
| `/gtm-onboarding` | Design onboarding playbooks, welcome sequences, milestone tracking, and time-to-value acceleration |
| `/gtm-lifecycle` | Design expansion playbooks, churn prevention signals, renewal processes, and feature adoption campaigns |
| `/gtm-analytics` | GTM performance reports, channel analysis, content attribution, and funnel diagnostics |
| `/gtm-execute` | GTM tech stack selection, automation workflows, and execution infrastructure to operationalize the GTM strategy |
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

**GTM & Marketing (10-skill ecosystem):**
```
/cmo (strategy) → /gtm-icp (ICP & messaging) → /gtm-monetization (packaging & pricing)
    ↑                                              ↓
    │                                         /gtm-content (content creation)
    │                                              ↓
    │                                         /gtm-execute (tech stack & automation)
    │                                              ↓
    │                                         /gtm-lead-capture (lead scoring & handoff)
    │                                              ↓
    │                                         /gtm-deal-intel (deal analysis)
    │                                              ↓
    │                                         /gtm-onboarding (post-close onboarding)
    │                                              ↓
    │                                         /gtm-lifecycle (expand & retain)
    │                                              ↓
    └──────────────────────────────────────── /gtm-analytics (cross-cutting measurement)
                                                   ↩ feeds back to /cmo and all skills
```

**Strategy flow:** `/cmo` → `/gtm-icp` → `/gtm-monetization` → `/gtm-content`
**Execution layer:** `/gtm-execute` (tech stack, automation, and workflows to operationalize everything)
**Pre-sale flow:** `/gtm-lead-capture` → `/gtm-deal-intel`
**Post-sale flow:** `/gtm-onboarding` → `/gtm-lifecycle`
**Measurement layer:** `/gtm-analytics` (reads from all skills, produces diagnostics and recommendations)

**Data dependencies:**
- `/gtm-content` requires `messaging_framework.json` (from `/gtm-icp`)
- `/gtm-lead-capture` requires `icp_profiles.json` (from `/gtm-icp`)
- `/gtm-deal-intel` warns without `icp_profiles.json` but doesn't block
- `/gtm-deal-intel` produces upstream recommendations for `/gtm-icp`, `/cmo`, and `/gtm-content`
- `/gtm-onboarding` warns without `icp_profiles.json` but doesn't block; reads deal files for personalization
- `/gtm-lifecycle` warns without `icp_profiles.json` but doesn't block; reads pricing for expansion paths
- `/gtm-execute` reads all GTM data files to understand what needs execution infrastructure; no hard dependencies
- `/gtm-analytics` has no hard dependencies — reads all `data/gtm/*.json` files and reports on whatever exists
- `/gtm-lifecycle` feeds churn/expansion insights back to `/cmo`, `/gtm-icp`, and `/gtm-deal-intel`

**Data ownership (`data/gtm/`):**
| File | Owner |
|------|-------|
| `project_context.json` | `/cmo` |
| `icp_profiles.json` | `/gtm-icp` |
| `messaging_framework.json` | `/gtm-icp` |
| `pricing_strategy.json` | `/gtm-monetization` |
| `revenue_parameters.json` | `/gtm-monetization` |
| `content_calendar.json` | `/gtm-content` |
| `content/` | `/gtm-content` |
| `lead_scoring.json` | `/gtm-lead-capture` |
| `response_templates.json` | `/gtm-lead-capture` |
| `deal_intel_summary.json` | `/gtm-deal-intel` |
| `deals/` | `/gtm-deal-intel` |
| `onboarding_playbooks.json` | `/gtm-onboarding` |
| `welcome_sequences.json` | `/gtm-onboarding` |
| `lifecycle_playbooks.json` | `/gtm-lifecycle` |
| `expansion_signals.json` | `/gtm-lifecycle` |
| `gtm_analytics.json` | `/gtm-analytics` |
| `channel_analysis.json` | `/gtm-analytics` |
| `gtm_execution_stack.json` | `/gtm-execute` |
| `gtm_scorecard.json` | `/cmo` |
| `sync_history.json` | `/cmo` |
| `scorecards/` | `/cmo` |
