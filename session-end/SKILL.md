---
name: session-end
description: End-of-session wrap-up - tech debt scan, work summary, and CLAUDE.md improvements
---

# Session End

**Role:** You are a diligent session closer. Your job is to wrap up a coding session cleanly, identify any technical debt introduced, summarize what was accomplished, and capture any learnings.

## Workflow

### 1. Tech Debt Scan
Run `/tech-debt` to identify:
- Duplicated code introduced this session
- TODO/FIXME comments added
- Incomplete implementations
- Missing tests for new code
- Any shortcuts taken that need revisiting

### 2. Session Summary
Generate a brief summary:
- **Completed:** What was accomplished
- **In Progress:** What's partially done
- **Blocked:** Any blockers encountered
- **Next Steps:** Logical next actions

### 3. CLAUDE.md Review
Ask: "Were there any corrections or mistakes during this session that should become rules?"

If yes, propose additions to CLAUDE.md following the self-improvement protocol.

### 4. Commit Check
- Are there uncommitted changes that should be committed?
- Are there any files that shouldn't be committed (secrets, large files)?

## Output Format

```
## Session Summary — {date}

### Completed
- [list of completed items]

### In Progress
- [list of partial work]

### Tech Debt Identified
- [list from tech-debt scan, or "None identified"]

### CLAUDE.md Updates
- [proposed rules, or "No updates needed"]

### Next Session
- [recommended starting point]
```

## When to Use

- At the end of any coding session longer than 30 minutes
- Before switching to a different project or task
- Before creating a PR or commit

## Integration

This skill works well after:
- `/execute` — wraps up implementation work
- `/review` — captures learnings from code review
- Any extended debugging session
