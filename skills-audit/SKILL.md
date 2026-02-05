---
name: skills-audit
description: Audit, validate, and maintain the skills ecosystem - structure checks, hierarchy mapping, lint, and health dashboard
type: utility
version: 1.0
lastUpdated: 2026-02-05
---

# Skills Audit Tool

**Role:** You are a skills ecosystem maintenance tool. You audit, validate, and help maintain the health of the skills system at `~/.claude/skills/`.

This is a meta-skill that helps ensure all other skills are well-structured, properly connected, and following best practices.

---

## Modes

### 1. Full Audit (`/skills-audit` or `/skills-audit audit`)

Scan all skills and report on:

**Workflow:**
1. Glob all `SKILL.md` files in `~/.claude/skills/`
2. Parse each skill's frontmatter and structure
3. Check for required sections
4. Map cross-references
5. Identify orphaned skills
6. Report issues ranked by severity

**Output:**
```markdown
## Skills Audit - {date}

### Summary
- Total skills: X
- Orchestrators: X
- Executors: X
- Utilities: X
- Skills missing type metadata: X
- Orphaned skills: X

### Issues Found

| Severity | Skill | Issue | Fix |
|----------|-------|-------|-----|
| High | pm | Missing frontmatter | Add frontmatter with name, description, type |
| High | [skill] | Missing type metadata | Add `type: orchestrator|executor|utility` |
| Medium | [skill] | No parent specified | Add `parent: [orchestrator]` |
| Medium | [skill] | Cross-reference to non-existent skill | Update reference or create skill |
| Low | [skill] | Missing version | Add `version: 1.0` |

### Recommendations
1. [Priority action]
2. [Priority action]
3. [Priority action]
```

### 2. Lint Single Skill (`/skills-audit lint [skill-name]`)

Check individual skill against best practices.

**Checks performed:**
- Frontmatter present and complete (name, description, type)
- Type metadata (orchestrator, executor, utility)
- Parent specified if executor type
- Version number present
- Required sections present:
  - Context Loading (for orchestrators/executors)
  - Output Requirements
  - Key Principles
  - JSON Schemas (if skill writes data)
  - Relationship to Other Skills
- Cross-references point to real skills
- No hardcoded project names (should use $ARGUMENTS)
- Data directory paths are consistent

**Output:**
```markdown
## Lint: /[skill-name]

### Structure
- [x] Frontmatter present
- [x] Name matches folder
- [x] Description present
- [ ] Type metadata (MISSING)
- [ ] Parent specified (MISSING - skill appears to be executor)
- [ ] Version (MISSING)

### Content
- [x] Context loading section
- [x] Output requirements
- [x] Key principles
- [x] JSON schemas
- [x] Relationship to other skills

### References
- [x] All referenced skills exist
- [ ] Bidirectional links present (CMO references this, but this doesn't reference CMO)

### Portability
- [ ] Hardcoded project name found: "TreasuryPath" (should use $ARGUMENTS)

### Fix Suggestions
1. Add to frontmatter: `type: executor`
2. Add to frontmatter: `parent: cmo`
3. Add to frontmatter: `version: 1.0`
4. Replace "TreasuryPath" with "$ARGUMENTS"
```

### 3. Hierarchy View (`/skills-audit hierarchy`)

Generate a visual map of the skills tree.

**Output:**
```markdown
## Skills Hierarchy

### C-Suite Orchestrators

CEO (founder strategy)
│
├── Leadership Sync (cross-functional coordinator)
│   └── reads from: CMO, CFO, CPO, CTO
│
├── CMO (GTM strategy orchestrator)
│   ├── gtm-icp (executor)
│   ├── gtm-monetization (executor)
│   ├── gtm-content (executor)
│   ├── gtm-lead-capture (executor)
│   ├── gtm-onboarding (executor)
│   ├── gtm-lifecycle (executor)
│   ├── gtm-analytics (executor)
│   ├── gtm-deal-intel (executor)
│   ├── gtm-prospecting (executor)
│   ├── gtm-outbound (executor)
│   └── gtm-infra (executor)
│
├── CFO (finance strategy orchestrator)
│   ├── finance-forecast (executor)
│   ├── cap-table (executor)
│   ├── board-deck (executor)
│   ├── fundraise-prep (executor)
│   └── investor-update (executor) [if exists]
│
├── CPO (product strategy orchestrator)
│   └── pm (executor)
│
└── CTO (engineering strategy orchestrator)
    ├── tech-debt (executor)
    ├── architecture-decision (executor)
    └── infra-cost (executor)

### Standalone Skills
- coach (utility) - mentorship, no parent
- designer (utility) - UI/UX review, no parent

### Dev Workflow Skills
- explore (utility)
- create-plan (utility)
- execute (utility)
- review (utility)
- peer-review (utility)
- create-issue (utility)
- document (utility)
- learning-opp (utility)

### Utility Skills
- morning-standup (utility) - invokes leadership-sync
- session-end (utility) - end of session wrap-up
- advisor-outreach (executor) - parent: cmo (warm intro generation)
- skills-audit (utility) - meta-skill for maintenance

### Orphaned Skills (no parent, not standalone)
[List any skills that appear to be executors but have no parent]

### Mermaid Diagram
```mermaid
graph TD
    CEO --> CMO
    CEO --> CFO
    CEO --> CPO
    CEO --> CTO
    CEO --> LeadershipSync

    CMO --> gtm-icp
    CMO --> gtm-monetization
    CMO --> gtm-content
    ...
```
```

### 4. Health Dashboard (`/skills-audit health`)

Quick status check for the skills ecosystem.

**Output:**
```markdown
## Skills Health - {date}

| Metric | Value | Status |
|--------|-------|--------|
| Total skills | X | - |
| With proper frontmatter | X/Y | Green/Yellow/Red |
| With type metadata | X/Y | Green/Yellow/Red |
| With version | X/Y | Green/Yellow/Red |
| With cross-references | X/Y | Green/Yellow/Red |
| Orphaned skills | X | Green/Yellow/Red |
| Broken references | X | Green/Yellow/Red |
| Hardcoded values | X | Green/Yellow/Red |

### Quick Actions Needed
1. [Action 1]
2. [Action 2]

### Recently Modified
| Skill | Last Updated |
|-------|--------------|
| [skill] | YYYY-MM-DD |

### Skills Missing Type Metadata
[List]

### Skills Missing Parent
[List of executors without parent]
```

---

## Required Skill Structure

Skills should follow this structure:

```markdown
---
name: skill-name
description: One-line description
type: orchestrator | executor | utility
parent: parent-skill-name (required if executor)
version: 1.0
lastUpdated: YYYY-MM-DD
---

# Skill Name

**Role:** Dynamic description using $ARGUMENTS for project name.

---

## Context Loading

On every invocation:
1. Check for [context file]
2. Load [data sources]
3. If no context exists: trigger discovery flow

---

## Core Capabilities / Frameworks

[Main content]

---

## Output Requirements

After EVERY interaction:
- [What to output]
- [Where to save data]

---

## File Structure

```
[project]/
└── data/
    └── [skill-domain]/
        └── [files]
```

---

## JSON Schemas

[Schema definitions]

---

## Relationship to Other Skills

[How this skill connects to orchestrators and peers]

---

## Key Principles

[Numbered list of behavioral guidelines]
```

---

## Metadata Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Skill identifier (must match folder name) |
| `description` | Yes | One-line description for skill discovery |
| `type` | Yes | `orchestrator`, `executor`, or `utility` |
| `parent` | If executor | Which orchestrator owns this skill |
| `version` | Recommended | Semantic version (1.0, 1.1, 2.0) |
| `lastUpdated` | Recommended | YYYY-MM-DD of last modification |

### Type Definitions

| Type | Description | Examples |
|------|-------------|----------|
| **orchestrator** | Strategic layer that coordinates execution skills. Reads from multiple sources, delegates to executors. | ceo, cmo, cfo, cpo, cto |
| **executor** | Tactical skill owned by an orchestrator. Does specific work, writes to specific data files. | gtm-icp, finance-forecast, tech-debt |
| **utility** | Standalone skill not part of a hierarchy. May invoke other skills but doesn't own executors. | coach, designer, morning-standup, skills-audit |

---

## Cross-Reference Validation

When checking skill references:

1. **Explicit references:** Look for patterns like "Run `/skill-name`" or "`/skill-name`"
2. **Relationship section:** Check "Relationship to Other Skills" section
3. **Data dependencies:** Check if skill reads from another skill's data directory

A reference is **valid** if the target skill exists in `~/.claude/skills/`.

A reference is **bidirectional** if skill A references skill B AND skill B references skill A.

---

## Hardcoded Value Detection

Flag these patterns as hardcoded values that should be parameterized:

- Company names in role descriptions (e.g., "TreasuryPath CFO" should be "CFO for $ARGUMENTS")
- Specific file paths outside of `data/` directory conventions
- Project-specific URLs or credentials
- Specific person names (except in example/template sections)

---

## Behaviors

- **Non-destructive:** This skill only reports. It never modifies skills automatically.
- **Prioritize by severity:** High = skill won't work properly. Medium = best practice violation. Low = nice to have.
- **Actionable suggestions:** Every issue should have a clear fix suggestion.
- **Track over time:** When run repeatedly, note improvements or regressions.

---

## Invocation Examples

```
/skills-audit                    # Full audit of all skills
/skills-audit audit              # Same as above
/skills-audit lint cfo           # Check CFO skill specifically
/skills-audit lint gtm-icp       # Check gtm-icp skill
/skills-audit hierarchy          # Show skill tree
/skills-audit health             # Quick health dashboard
```

---

## Integration

This skill:
- **Reads from:** All skills in `~/.claude/skills/`
- **Writes to:** Nothing (read-only audit tool)
- **Helps maintain:** The entire skills ecosystem

Run periodically (weekly or after adding new skills) to catch drift and maintain consistency.
