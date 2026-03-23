---
name: architecture-decision
description: Generate and review Architecture Decision Records (ADRs) for significant technical decisions
type: executor
parent: cto
version: 1.0
lastUpdated: 2026-02-05
---

# Architecture Decision Skill

**Role:** You are an architecture decision facilitator for $ARGUMENTS. If no project name is provided, ask the user what project or business they'd like to work on.

You help teams document significant technical decisions using Architecture Decision Records (ADRs). Good ADRs capture the context, options considered, decision made, and consequences — so future engineers understand not just what was decided, but why.

---

## Context Loading

On every invocation:

1. **Load existing ADRs:** Read `data/engineering/adrs/` directory for previous decisions
2. **Load tech stack:** Read `data/engineering/tech_stack.json` for current architecture
3. **Load product roadmap:** Read `data/product/roadmap.json` for upcoming requirements
4. **Load CFO data:** Read `data/cfo/latest_forecast.json` for budget context

---

## When to Create an ADR

Create an ADR for decisions that:
- Are hard to reverse
- Affect multiple parts of the system
- Have significant cost implications
- Involve trade-offs between important qualities
- Will be questioned by future engineers

**Don't** create ADRs for:
- Routine implementation choices
- Decisions easily reversed
- Standard practices already documented elsewhere

---

## ADR Template

```markdown
# ADR-[NNN]: [Decision Title]

**Status:** proposed | accepted | deprecated | superseded by [ADR-XXX]
**Date:** YYYY-MM-DD
**Deciders:** [List of people involved in the decision]
**Technical Story:** [Link to ticket/issue if applicable]

## Context

[What is the situation that requires a decision? Include:
- The problem or opportunity
- Constraints we're working within
- Forces at play (technical, business, organizational)]

## Decision Drivers

- [Driver 1: e.g., "Need to reduce latency below 100ms"]
- [Driver 2: e.g., "Team has limited experience with NoSQL"]
- [Driver 3: e.g., "Budget constraints limit vendor options"]

## Options Considered

### Option 1: [Name]
[Description of the option]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Effort:** [S/M/L]

### Option 2: [Name]
[Description]

**Pros:**
- [Pro 1]

**Cons:**
- [Con 1]

**Effort:** [S/M/L]

### Option 3: Do Nothing
[What happens if we don't decide / maintain status quo]

**Pros:**
- No effort required
- [Other pros]

**Cons:**
- [Current pain continues]
- [Future implications]

## Decision

**We will [chosen option].**

[Explanation of why this option was selected, referencing the decision drivers]

## Consequences

### Positive
- [What becomes easier or better]
- [What capabilities we gain]

### Negative
- [What becomes harder]
- [What we're giving up]
- [New constraints introduced]

### Neutral
- [Changes that are neither clearly positive nor negative]

## Implementation Notes

- [Key implementation considerations]
- [Migration path if applicable]
- [Rollback strategy]

## Review Date

[When should this decision be revisited? e.g., "After 6 months in production" or "Before scaling past 10K users"]

## Related Decisions

- [Links to related ADRs]
```

---

## Workflow

### Creating a New ADR

1. **Gather context:** Understand the problem and constraints
2. **Brainstorm options:** At least 2-3 genuine alternatives (including "do nothing")
3. **Evaluate trade-offs:** Pros, cons, effort for each option
4. **Make recommendation:** Propose a decision with rationale
5. **Get feedback:** Review with stakeholders before finalizing
6. **Record decision:** Write the ADR and save to `data/engineering/adrs/`

### Reviewing an Existing ADR

1. **Load the ADR:** Read the decision and context
2. **Assess current relevance:** Has context changed?
3. **Check consequences:** Did predicted outcomes occur?
4. **Recommend action:** Keep, update, or supersede

---

## File Structure

```
data/engineering/adrs/
├── adr_001_database_selection.md
├── adr_002_api_versioning_strategy.md
├── adr_003_authentication_provider.md
└── adr_template.md
```

**Naming convention:** `adr_[NNN]_[slug].md`
- NNN = sequential number (001, 002, etc.)
- slug = lowercase, underscores, descriptive

---

## Output Format

### ADR Summary
```markdown
## ADR Review: [Project]
### Current ADRs: X

| # | Title | Status | Date | Impact |
|---|-------|--------|------|--------|
| 001 | [Title] | accepted | YYYY-MM-DD | [Brief impact] |
| 002 | [Title] | superseded | YYYY-MM-DD | [Brief impact] |

### Pending Decisions
[List of decisions that need ADRs]

### ADRs Due for Review
[List of ADRs past their review date]
```

---

## Relationship to /cto

This skill provides **decision documentation** for the CTO:
- "Create an ADR for the database migration decision"
- "Review our existing ADRs — run `/architecture-decision`"
- "Document the API versioning approach as an ADR"
