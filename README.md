# Work OS - AI Skills for Claude Code

A modular skill system for running a startup with AI. Built for founder-led companies where one person + AI agents replaces traditional departments.

---

## Quick Reference

| Category | Skills |
|----------|--------|
| **Leadership** | `/ceo` `/cfo` `/cmo` `/cpo` `/cto` `/leadership-sync` `/coach` |
| **GTM** | `/gtm-icp` `/gtm-monetization` `/gtm-prospecting` `/gtm-outbound` `/gtm-content` `/gtm-lead-capture` `/gtm-deal-intel` `/gtm-onboarding` `/gtm-lifecycle` `/gtm-analytics` `/gtm-infra` `/advisor-outreach` |
| **Finance** | `/finance-forecast` `/cap-table` `/board-deck` `/fundraise-prep` `/investor-update` |
| **Engineering** | `/tech-debt` `/architecture-decision` `/infra-cost` |
| **Product** | `/product-discovery` `/pm` |
| **Design** | `/designer` |
| **Dev Workflow** | `/explore` `/create-plan` `/execute` `/review` `/peer-review` `/create-issue` `/document` `/learning-opp` |
| **Utilities** | `/morning-standup` `/session-end` `/skills-audit` |

---

## Architecture

```
                                    ┌─────────────┐
                                    │    /ceo     │
                                    │  (Founder)  │
                                    └──────┬──────┘
                                           │
              ┌────────────────────────────┼────────────────────────────┐
              │                            │                            │
              │                   ┌────────┴────────┐                   │
              │                   │ /leadership-sync│                   │
              │                   │(Cross-functional)                   │
              │                   └────────┬────────┘                   │
              │                            │                            │
    ┌─────────┴─────────┬─────────────────┬┴───────────────┬───────────┴─────────┐
    │                   │                 │                │                     │
    ▼                   ▼                 ▼                ▼                     ▼
┌───────┐         ┌───────┐         ┌───────┐        ┌───────┐            ┌──────────┐
│ /cmo  │         │ /cfo  │         │ /cpo  │        │ /cto  │            │/designer │
│ (GTM) │         │(Fin)  │         │(Prod) │        │(Tech) │            │ (Design) │
└───┬───┘         └───┬───┘         └───┬───┘        └───┬───┘            └──────────┘
    │                 │                 │                │
    ▼                 ▼                 ▼                ▼
┌────────┐       ┌────────┐        ┌────────┐      ┌────────┐
│  GTM   │       │Finance │        │Product │      │  Tech  │
│Skills  │       │Skills  │        │Skills  │      │Skills  │
│  (12)  │       │  (5)   │        │  (2)   │      │  (3)   │
└────────┘       └────────┘        └────────┘      └────────┘


Standalone:  /coach (Mentor)    /morning-standup    /session-end    /skills-audit

┌────────────────────────────────────────────────────────────────────────────────────┐
│                        CROSS-FUNCTIONAL UTILITIES                                  │
│                                                                                    │
│  /explore  /create-plan  /execute  /review  /peer-review  /create-issue            │
│  /document  /learning-opp                                                          │
│                                                                                    │
│  These skills can be invoked by any function at any time.                          │
└────────────────────────────────────────────────────────────────────────────────────┘
```

### Skills Hierarchy

```
CEO (founder strategy)
│
├── Leadership Sync (cross-functional coordinator)
│   └── Reads from: CMO, CFO, CPO, CTO
│
├── CMO (GTM strategy) ─────────────────────────────────────────────────────┐
│   ├── gtm-icp           Define ICP segments and messaging                 │
│   ├── gtm-monetization  Packaging and pricing strategy                    │
│   ├── gtm-content       Content generation for segments                   │
│   ├── gtm-prospecting   Enriched prospect lists and signals               │
│   ├── gtm-outbound      Outreach execution                                │
│   ├── gtm-lead-capture  Lead scoring and qualification                    │
│   ├── gtm-deal-intel    Deal analysis and feedback loop                   │
│   ├── gtm-onboarding    Post-close customer activation                    │
│   ├── gtm-lifecycle     Expansion and retention playbooks                 │
│   ├── gtm-analytics     GTM performance measurement                       │
│   ├── gtm-infra         Tech stack and automation                         │
│   └── advisor-outreach  Network-based intro harvesting                    │
│
├── CFO (finance strategy) ─────────────────────────────────────────────────┐
│   ├── finance-forecast  Scenario modeling and projections                 │
│   ├── cap-table         Equity tracking and dilution analysis             │
│   ├── board-deck        Quarterly board presentations                     │
│   ├── fundraise-prep    Data room and VC readiness                        │
│   └── investor-update   Monthly investor communications                   │
│
├── CPO (product strategy) ─────────────────────────────────────────────────┐
│   ├── product-discovery Validate assumptions before PRD writing           │
│   └── pm                PRD writing and feature specification             │
│
├── CTO (engineering strategy) ─────────────────────────────────────────────┐
│   ├── tech-debt         Track and prioritize technical debt               │
│   ├── architecture-decision  ADR generation and review                    │
│   └── infra-cost        Cloud cost analysis and optimization              │
│
├── Designer (standalone) ──────────────────────────────────────────────────┐
│   └── UI/UX review, visual critique, design system architecture           │
│
├── Coach (standalone) ─────────────────────────────────────────────────────┐
│   └── Stoic mentorship for resilience and perspective                     │
│
└── Dev Workflow (utilities) ───────────────────────────────────────────────┐
    ├── explore           Codebase exploration before implementation        │
    ├── create-plan       Structured implementation planning                │
    ├── execute           Plan execution with status updates                │
    ├── review            Comprehensive code review                         │
    ├── peer-review       Evaluate external review findings                 │
    ├── create-issue      Quick issue capture mid-development               │
    ├── document          Documentation updates after changes               │
    └── learning-opp      Three-level concept explanations                  │
```

---

## Leadership Skills

Strategic decision-making at the executive level.

| Skill | Purpose |
|-------|---------|
| **`/ceo`** | Founder strategy, capital allocation, board management, stakeholder decisions |
| **`/cfo`** | Strategic finance, valuation narrative, VC readiness, runway planning |
| **`/cmo`** | GTM strategy, growth frameworks, marketing leadership, pipeline prioritization |
| **`/cpo`** | Product strategy, roadmap prioritization, competitive positioning, PMF validation |
| **`/cto`** | Technical leadership, architecture decisions, infrastructure, engineering health |
| **`/leadership-sync`** | Cross-functional alignment, synthesizes all C-suite perspectives into unified output |
| **`/coach`** | Stoic philosophy-based mentoring for resilience, perspective, and the hard days |

---

## GTM Skills

Full go-to-market system from strategy to execution to retention.

> **See [GTM-README.md](./GTM-README.md) for detailed GTM architecture and workflows.**

### Strategy

| Skill | Purpose |
|-------|---------|
| **`/gtm-icp`** | Define ICP segments, messaging frameworks, value props, objection handling |
| **`/gtm-monetization`** | Packaging, pricing strategy, value communication |

### Execution

| Skill | Purpose |
|-------|---------|
| **`/gtm-prospecting`** | Build enriched prospect lists - find targets, enrich, score, detect signals |
| **`/gtm-outbound`** | Execute personalized sequences - email, LinkedIn, multi-touch campaigns |
| **`/gtm-content`** | Generate segment-targeted content - LinkedIn posts, emails, case studies |
| **`/gtm-lead-capture`** | Qualify and route leads - scoring rubrics, response templates, handoffs |
| **`/gtm-deal-intel`** | Analyze deals - extract patterns from calls, score opportunities, feed upstream |
| **`/advisor-outreach`** | Harvest warm intros from advisors - network scanning, ICP matching, intro requests |

### Post-Sale

| Skill | Purpose |
|-------|---------|
| **`/gtm-onboarding`** | Activate customers - welcome sequences, milestone tracking, time-to-value |
| **`/gtm-lifecycle`** | Retain and expand - churn prevention, renewal processes, expansion playbooks |

### Infrastructure & Measurement

| Skill | Purpose |
|-------|---------|
| **`/gtm-analytics`** | Measure performance - funnel diagnostics, channel attribution, reports |
| **`/gtm-infra`** | Build the stack - tool selection, integrations, data flows |

---

## Finance Skills

Financial planning, fundraising, and investor communication.

| Skill | Purpose |
|-------|---------|
| **`/finance-forecast`** | Scenario modeling, revenue projections, burn rate analysis |
| **`/cap-table`** | Equity tracking, dilution analysis, option pool modeling |
| **`/board-deck`** | Quarterly board presentations with metrics, narrative, and asks |
| **`/fundraise-prep`** | Data room preparation, VC Q&A prep, due diligence readiness |
| **`/investor-update`** | Monthly investor updates for existing and potential investors |

---

## Engineering Skills

Technical strategy, debt management, and infrastructure optimization.

| Skill | Purpose |
|-------|---------|
| **`/tech-debt`** | Track, prioritize, and plan technical debt paydown |
| **`/architecture-decision`** | Generate and review Architecture Decision Records (ADRs) |
| **`/infra-cost`** | Analyze and optimize cloud infrastructure costs, identify waste |

---

## Product Skills

Product discovery, management, and specification.

| Skill | Purpose |
|-------|---------|
| **`/product-discovery`** | Validate assumptions through market research, competitive analysis, build vs buy decisions, and technical feasibility before PRD writing |
| **`/pm`** | Senior PM - produces CTO-ready PRDs with hypothesis-driven MVP scoping |

---

## Design Skills

UI/UX review and design system management.

| Skill | Purpose |
|-------|---------|
| **`/designer`** | UI/UX design review, visual critique, design system architecture for React/shadcn/Tailwind |

---

## Development Workflow Skills

Day-to-day development tasks and code quality.

| Skill | Purpose |
|-------|---------|
| **`/explore`** | Codebase exploration before implementation |
| **`/create-plan`** | Structured implementation plan with progress tracking |
| **`/execute`** | Implement plan with status updates |
| **`/review`** | Comprehensive code review |
| **`/peer-review`** | Evaluate external review findings |
| **`/create-issue`** | Quick issue capture mid-development |
| **`/document`** | Update documentation after code changes |
| **`/learning-opp`** | Three-level concept explanations (beginner to advanced) |

---

## Utility Skills

Standalone tools for productivity and maintenance.

| Skill | Purpose |
|-------|---------|
| **`/morning-standup`** | Start-of-day briefing - leadership sync, task review, priority setting |
| **`/session-end`** | End-of-session wrap-up - tech debt scan, work summary |
| **`/skills-audit`** | Meta-skill for auditing and maintaining the skills ecosystem |

---

## Common Workflows

### Strategic Planning
```
/ceo → /cmo + /cfo + /cpo + /cto (parallel) → /leadership-sync (synthesize)
```
*Leadership-sync reads from C-suite outputs, doesn't initiate them.*

### GTM Execution
```
/cmo → /gtm-icp → /gtm-monetization → /gtm-infra
    → /gtm-prospecting → /gtm-content → /gtm-outbound → /advisor-outreach
    → /gtm-lead-capture → /gtm-deal-intel
    → /gtm-onboarding → /gtm-lifecycle
    ← /gtm-analytics (feedback loop to all stages)
```

### Feature Development
```
/cpo → /product-discovery → /pm → /cto → /designer
    → /explore → /create-plan → /execute → /review → /document
```
*Product-discovery validates assumptions before PM writes PRD. Designer reviews before coding.*

### Fundraising
```
/cfo → /finance-forecast → /cap-table → /fundraise-prep
```

### Investor Communication
```
/cfo + /cmo + /gtm-analytics → /investor-update
/cfo + /cmo → /board-deck
```

### Bug Fixing
```
/explore → /create-plan → /execute → /review
```

### Tech Debt Paydown
```
/cto → /tech-debt → /architecture-decision → /create-plan → /execute → /review
```

---

## Data Structure

Each skill reads from and writes to a project's `data/` directory:

```
project/
└── data/
    ├── ceo/                # CEO decisions, strategy, board
    ├── coach/              # Reflections, practices
    ├── gtm/                # All GTM skills share this
    │   ├── project_context.json
    │   ├── icp_profiles.json
    │   ├── messaging_framework.json
    │   ├── prospects/
    │   ├── outbound/
    │   ├── deals/
    │   └── ...
    ├── cfo/                # Finance skills
    │   ├── latest_forecast.json
    │   ├── cap_table.json
    │   └── ...
    ├── investor-update/    # Investor communications
    │   ├── config.json
    │   └── history.json
    ├── product/            # CPO, PM
    ├── engineering/        # CTO, tech-debt, ADRs
    ├── design/             # Designer
    └── leadership/         # Leadership sync
```

---

## Skill Count

| Category | Count | Type |
|----------|-------|------|
| Leadership | 7 | 5 orchestrators + 2 utilities |
| GTM | 12 | executors (parent: CMO) |
| Finance | 5 | executors (parent: CFO) |
| Engineering | 3 | executors (parent: CTO) |
| Product | 2 | executors (parent: CPO) |
| Design | 1 | utility |
| Dev Workflow | 8 | cross-functional utilities |
| Utilities | 3 | standalone |
| **Total** | **41** | |

---

## Philosophy

**One founder + AI agents > traditional departments**

These skills embody principles from modern operators:
- Re-find PMF every 3 months. Free product > paid ads.
- 1 person + AI replaces 10 SDRs. 80% buy to avoid pain, not gain upside.
- Everything is a launch. Fix the prompt, not the output.
- $1M before first sales hire. AI agents doing the work.
- Metrics are a means, not an end. Tell the story.

---

## Skill Structure

Each skill follows a consistent structure:

```
skills/
├── skill-name/
│   └── SKILL.md
└── ...
```

**Required frontmatter:**
```yaml
---
name: skill-name
description: One-line description
type: orchestrator | executor | utility
parent: parent-skill (if executor)
version: 1.0
lastUpdated: YYYY-MM-DD
---
```

**Standard sections:**
1. Context Loading - what data to read on invocation
2. Core Capabilities - main workflows and frameworks
3. Output Requirements - what to produce and where to save
4. File Structure - data directory layout
5. JSON Schemas - data structure definitions
6. Relationship to Other Skills - how it connects to the hierarchy
7. Key Principles - behavioral guidelines

Run `/skills-audit` to check ecosystem health and validate skill structure.

---

## License

MIT

---

*Built for founders who'd rather build products than manage processes.*
