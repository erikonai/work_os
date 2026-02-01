# GTM Skills for Claude Code

A modular, AI-native go-to-market system built as Claude Code skills. Designed for founder-led sales at early-stage startups.

---

## Philosophy

**Traditional GTM:** Large teams, expensive tools, rigid playbooks, months to iterate.

**AI-Native GTM:** One founder + AI agents, lightweight tools, continuous learning, ships this week.

This system embodies the thinking of modern GTM leaders:
- **Elena Verna** — Re-find PMF every 3 months. Free product > paid ads.
- **Jeanne DeWitt Grosser** — 1 person + AI replaces 10 SDRs. 80% buy to avoid pain.
- **Luke Harries** — Everything is a launch. Fix the prompt, not the output.
- **Jason Lemkin** — $1M before first sales hire. AI agents doing the work.

---

## Architecture

```
                         ┌─────────────────┐
                         │      /cmo       │
                         │  Orchestration  │
                         └────────┬────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
    ┌───────────┐           ┌───────────┐           ┌───────────┐
    │ STRATEGY  │           │ EXECUTION │           │ POST-SALE │
    └───────────┘           └───────────┘           └───────────┘
          │                       │                       │
    ┌─────┴─────┐           ┌─────┴─────┐           ┌─────┴─────┐
    │           │           │           │           │           │
/gtm-icp    /gtm-       /gtm-      /gtm-       /gtm-       /gtm-
            monettic    prospect   outbound    onboard     lifecycle
                        │           │
                        └─────┬─────┘
                              ▼
                        ┌───────────┐
                        │/gtm-lead- │
                        │  capture  │
                        └─────┬─────┘
                              ▼
                        ┌───────────┐
                        │/gtm-deal- │
                        │   intel   │
                        └───────────┘

    ┌─────────────────────────────────────────────────────────┐
    │              /gtm-analytics  (Measurement)              │
    └─────────────────────────────────────────────────────────┘
    ┌─────────────────────────────────────────────────────────┐
    │              /gtm-infra  (Infrastructure)               │
    └─────────────────────────────────────────────────────────┘
    ┌─────────────────────────────────────────────────────────┐
    │              /gtm-content  (Serves all layers)          │
    └─────────────────────────────────────────────────────────┘
```

---

## Skills

### Orchestration

| Skill | Purpose |
|-------|---------|
| **`/cmo`** | Strategic GTM leadership. Prioritization, sparring, cross-skill coordination. The brain of the system. |

### Strategy Layer

| Skill | Purpose |
|-------|---------|
| **`/gtm-icp`** | Define ICP segments, messaging frameworks, value props, objection handling. The foundation everything else builds on. |
| **`/gtm-monetization`** | Packaging, pricing strategy, value communication. Bridges GTM and Finance. |

### Execution Layer

| Skill | Purpose |
|-------|---------|
| **`/gtm-prospecting`** | Build enriched prospect lists. Find targets, enrich contacts, score accounts, detect trigger signals. |
| **`/gtm-outbound`** | Execute personalized sequences. Email, LinkedIn, multi-touch campaigns with AI-assisted messaging. |
| **`/gtm-content`** | Generate segment-targeted content. LinkedIn posts, emails, case studies, sales decks. |
| **`/gtm-lead-capture`** | Qualify and route leads. Scoring rubrics, response templates, handoff protocols. |
| **`/gtm-deal-intel`** | Analyze deals. Extract patterns from calls, score opportunities, feed insights upstream. |

### Post-Sale Layer

| Skill | Purpose |
|-------|---------|
| **`/gtm-onboarding`** | Activate new customers. Welcome sequences, milestone tracking, time-to-value acceleration. |
| **`/gtm-lifecycle`** | Retain and expand. Churn prevention signals, renewal processes, expansion playbooks. |

### Infrastructure & Measurement

| Skill | Purpose |
|-------|---------|
| **`/gtm-infra`** | Build the tech stack. Tool selection, integrations, data flows. Builds the pipes other skills run through. |
| **`/gtm-analytics`** | Measure everything. Funnel diagnostics, channel attribution, performance reports. |

---

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                          STRATEGY                                │
│  /gtm-icp produces: icp_profiles.json, messaging_framework.json │
│  /gtm-monetization produces: pricing_strategy.json              │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        PROSPECTING                               │
│  /gtm-prospecting reads ICP → builds enriched lists             │
│  Outputs: prospects/lists/, prospects/enriched/                  │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                          OUTBOUND                                │
│  /gtm-outbound reads prospects → executes sequences             │
│  Outputs: outbound/sequences/, outbound/activity/                │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       QUALIFICATION                              │
│  /gtm-lead-capture qualifies responses                          │
│  Outputs: leads/qualified/, lead_scoring.json                    │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        SALES CALLS                               │
│  Founder runs discovery, demo, negotiation                       │
│  Fathom records → /gtm-deal-intel analyzes                       │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DEAL INTEL                                 │
│  /gtm-deal-intel extracts patterns                              │
│  Feeds back: objections → /gtm-icp, signals → /gtm-prospecting  │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        POST-SALE                                 │
│  /gtm-onboarding activates → /gtm-lifecycle retains/expands     │
└─────────────────────────────────────────────────────────────────┘
```

---

## File Structure

All GTM data lives in your project's `data/gtm/` directory:

```
project/
└── data/
    └── gtm/
        ├── project_context.json          # Business context
        ├── icp_profiles.json             # ICP segments
        ├── messaging_framework.json      # Positioning & messaging
        ├── pricing_strategy.json         # Packaging & pricing
        ├── lead_scoring.json             # Qualification rules
        ├── response_templates.json       # Reply templates
        ├── content_calendar.json         # Content plan
        ├── deal_intel_summary.json       # Deal patterns
        ├── gtm_scorecard.json            # Current metrics
        │
        ├── prospects/
        │   ├── lists/                    # Target account lists
        │   ├── enriched/                 # Enriched contacts
        │   ├── inbound/                  # Inbound for enrichment
        │   └── signals/                  # Trigger events
        │
        ├── outbound/
        │   ├── sequences/                # Sequence definitions
        │   ├── templates/                # Message templates
        │   ├── activity/                 # Send/open/reply logs
        │   └── review_queue/             # Pending approval
        │
        ├── leads/
        │   ├── qualified/                # Passed qualification
        │   └── disqualified/             # Failed with reason
        │
        ├── deals/
        │   └── {company}.json            # Individual deal files
        │
        ├── content/
        │   ├── linkedin/
        │   ├── email/
        │   └── substack/
        │
        ├── analytics/
        │   ├── funnel/
        │   └── channel/
        │
        └── infra/
            ├── stack.json                # Tool inventory
            ├── integrations/             # Integration configs
            └── runbooks/                 # Operational docs
```

---

## Quick Start

### 1. Define Your ICP

```
/gtm-icp
```

This is the foundation. Every other skill reads from ICP profiles and messaging framework.

### 2. Set Up Infrastructure

```
/gtm-infra
```

Configure your tools: CRM, enrichment, email, analytics. Builds the pipes everything flows through.

### 3. Build Your First List

```
/gtm-prospecting
```

Create an enriched, scored prospect list from your ICP criteria.

### 4. Execute Outbound

```
/gtm-outbound
```

Design sequences, generate personalized messages, track responses.

### 5. Qualify and Close

```
/gtm-lead-capture
```

Score responses, route to founder, track handoffs.

### 6. Learn and Iterate

```
/gtm-deal-intel
/gtm-analytics
```

Analyze what's working, feed insights back to strategy.

---

## Key Principles

1. **ICP is the foundation.** Every skill reads from `icp_profiles.json`. Define it first.

2. **Quality over quantity.** 50 enriched prospects beat 500 scraped emails.

3. **Personalization is mandatory.** Every message references something specific about the prospect.

4. **AI-assisted, human-approved.** AI drafts, founder reviews. You should know what's going out.

5. **Speed-to-lead wins.** 5-minute SLA on positive replies. Momentum matters.

6. **Feedback loops are essential.** Deal intel feeds back to ICP. Patterns improve targeting.

7. **Minimum viable stack.** Start with 4 tools. Add complexity when simplicity breaks.

---

## Recommended Tool Stack

| Function | Tool | Cost |
|----------|------|------|
| CRM | HubSpot (free tier) | $0 |
| Enrichment | Clay | $149-349/mo |
| Email Sequences | Instantly | $37-97/mo |
| LinkedIn Scheduling | Taplio | $49/mo |
| Call Recording | Fathom | $0-19/mo |
| Automation | Zapier | $0-29/mo |
| **Total** | | **$235-543/mo** |

---

## Integration with Other Skills

The GTM system connects to the broader skill ecosystem:

```
┌─────────────────────────────────────────────────────────────┐
│                    C-SUITE SKILLS                            │
├─────────────────────────────────────────────────────────────┤
│  /ceo    /cfo    /cmo    /cpo    /cto    /leadership-sync   │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
            ┌───────────────┐   ┌───────────────┐
            │  GTM SKILLS   │   │ OTHER SKILLS  │
            │  (this repo)  │   │               │
            ├───────────────┤   ├───────────────┤
            │ /gtm-icp      │   │ /fundraise-   │
            │ /gtm-prospect │   │    prep       │
            │ /gtm-outbound │   │ /board-deck   │
            │ /gtm-content  │   │ /finance-     │
            │ /gtm-deal-    │   │    forecast   │
            │    intel      │   │ /cap-table    │
            │ ...           │   │ ...           │
            └───────────────┘   └───────────────┘
```

**Cross-skill data flows:**
- `/cfo` → budget constraints for GTM spend
- `/cpo` → product roadmap for launch timing
- `/gtm-analytics` → `/board-deck` for investor updates
- `/gtm-deal-intel` → `/fundraise-prep` for customer stories

---

## Contributing

Each skill is a standalone markdown file in its own directory:

```
skills/
├── gtm-icp/
│   └── SKILL.md
├── gtm-prospecting/
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

Built for founders who'd rather close deals than manage marketing departments.
