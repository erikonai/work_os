# AI Skills for Claude Code

A modular skill system for running a startup with AI. Built for founder-led companies where one person + AI agents replaces traditional departments.

---

## Quick Reference

| Category | Skills |
|----------|--------|
| **Leadership** | `/ceo` `/cfo` `/cmo` `/cpo` `/cto` `/leadership-sync` `/coach` |
| **GTM** | `/gtm-icp` `/gtm-monetization` `/gtm-prospecting` `/gtm-outbound` `/gtm-content` `/gtm-lead-capture` `/gtm-deal-intel` `/gtm-onboarding` `/gtm-lifecycle` `/gtm-analytics` `/gtm-infra` |
| **Finance** | `/finance-forecast` `/cap-table` `/board-deck` `/fundraise-prep` `/investor-update` |
| **Engineering** | `/tech-debt` `/architecture-decision` `/infra-cost` |
| **Design** | `/designer` |
| **Dev Workflow** | `/pm` `/explore` `/create-plan` `/execute` `/review` `/peer-review` `/create-issue` `/document` |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                   WORK OS                                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│    ┌──────────┐                    ┌───────────┐                                │
│    │  /coach  │                    │   /ceo    │                                │
│    │ (Mentor) │                    │ (Founder) │                                │
│    └──────────┘                    └─────┬─────┘                                │
│                                          │                                       │
│                               ┌──────────┴──────────┐                           │
│                               │  /leadership-sync   │                           │
│                               │  (Cross-functional) │                           │
│                               └──────────┬──────────┘                           │
│                                          │                                       │
│         ┌────────────────┬───────────────┼───────────────┬────────────────┐     │
│         ▼                ▼               ▼               ▼                ▼     │
│    ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌──────────┐│
│    │  /cmo   │     │  /cfo   │     │  /cpo   │     │  /cto   │     │/designer ││
│    │  (GTM)  │     │(Finance)│     │(Product)│     │ (Tech)  │     │ (Design) ││
│    └────┬────┘     └────┬────┘     └────┬────┘     └────┬────┘     └──────────┘│
│         │               │               │               │                       │
│         ▼               ▼               ▼               ▼                       │
│    ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐                  │
│    │   GTM   │     │ Finance │     │   Dev   │     │  Tech   │                  │
│    │ Skills  │     │ Skills  │     │Workflow │     │ Skills  │                  │
│    │  (11)   │     │   (5)   │     │   (8)   │     │   (3)   │                  │
│    └─────────┘     └─────────┘     └─────────┘     └─────────┘                  │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
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
| **`/gtm-prospecting`** | Build enriched prospect lists — find targets, enrich, score, detect signals |
| **`/gtm-outbound`** | Execute personalized sequences — email, LinkedIn, multi-touch campaigns |
| **`/gtm-content`** | Generate segment-targeted content — LinkedIn posts, emails, case studies |
| **`/gtm-lead-capture`** | Qualify and route leads — scoring rubrics, response templates, handoffs |
| **`/gtm-deal-intel`** | Analyze deals — extract patterns from calls, score opportunities, feed upstream |

### Post-Sale

| Skill | Purpose |
|-------|---------|
| **`/gtm-onboarding`** | Activate customers — welcome sequences, milestone tracking, time-to-value |
| **`/gtm-lifecycle`** | Retain and expand — churn prevention, renewal processes, expansion playbooks |

### Infrastructure & Measurement

| Skill | Purpose |
|-------|---------|
| **`/gtm-analytics`** | Measure performance — funnel diagnostics, channel attribution, reports |
| **`/gtm-infra`** | Build the stack — tool selection, integrations, data flows |

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
| **`/pm`** | Senior PM — produces CTO-ready PRDs with hypothesis-driven MVP scoping |
| **`/explore`** | Codebase exploration before implementation |
| **`/create-plan`** | Structured implementation plan with progress tracking |
| **`/execute`** | Implement plan with status updates |
| **`/review`** | Comprehensive code review |
| **`/peer-review`** | Evaluate external review findings |
| **`/create-issue`** | Quick issue capture mid-development |
| **`/document`** | Update documentation after code changes |
| **`/learning-opp`** | Three-level concept explanations (beginner → intermediate → advanced) |

---

## Common Workflows

### Strategic Planning
```
/leadership-sync → /cmo + /cfo + /cpo + /cto → unified strategy
```

### GTM Execution
```
/gtm-icp → /gtm-infra → /gtm-prospecting → /gtm-outbound → /gtm-lead-capture
    → /gtm-deal-intel → /gtm-onboarding → /gtm-lifecycle
    ← /gtm-analytics (feedback loop)
```

### Feature Development
```
/cpo → /pm → /cto → /explore → /create-plan → /execute → /review → /document
```

### Fundraising
```
/cfo → /finance-forecast → /cap-table → /fundraise-prep → /board-deck
```

### Investor Communication
```
/cfo + /cmo + /gtm-analytics → /investor-update or /board-deck
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
    ├── product/            # CPO, PM
    ├── engineering/        # CTO, tech-debt, ADRs
    ├── design/             # Designer
    └── leadership/         # Leadership sync
```

---

## Skill Count

| Category | Count |
|----------|-------|
| Leadership | 7 |
| GTM | 11 |
| Finance | 5 |
| Engineering | 3 |
| Design | 1 |
| Dev Workflow | 9 |
| **Total** | **36** |

---

## Philosophy

**One founder + AI agents > traditional departments**

These skills embody principles from modern operators:
- **Elena Verna** — Re-find PMF every 3 months. Free product > paid ads.
- **Jeanne DeWitt Grosser** — 1 person + AI replaces 10 SDRs. 80% buy to avoid pain.
- **Luke Harries** — Everything is a launch. Fix the prompt, not the output.
- **Jason Lemkin** — $1M before first sales hire. AI agents doing the work.
- **CJ Gustafson** — Metrics are a means, not an end. Tell the story.

---

## Contributing

Each skill is a markdown file in its own directory:

```
skills/
├── skill-name/
│   └── SKILL.md
└── ...
```

Skills follow a consistent structure:
1. **Frontmatter** — name, description
2. **Context Loading** — what data to read on invocation
3. **Core Philosophy** — principles that guide behavior
4. **Phases** — step-by-step workflow
5. **Output & Persistence** — what to produce and where to save
6. **JSON Schemas** — data structure definitions
7. **Behaviors** — personality and pushback patterns

---

## License

MIT

---

*Built for founders who'd rather build products than manage processes.*
