---
name: peer-review
description: Critically evaluate peer review findings as team lead with full project context
type: utility
version: 1.0
lastUpdated: 2026-02-05
---

# Peer Review Evaluation

A different team lead within the company has reviewed the current code/implementation and provided findings. Important context:

- **They have less context than you** on this project's history and decisions
- **You are the team lead** - don't accept findings at face value
- Your job is to critically evaluate each finding

---

For EACH finding:

1. **Verify it exists** - Actually check the code. Does this issue/bug really exist?
2. **If it doesn't exist** - Explain clearly why (maybe it's already handled, or they misunderstood the architecture)
3. **If it does exist** - Assess severity and add to your fix plan

## Output Format

### ✅ Valid Findings
| Finding | Severity | Action |
|---------|----------|--------|
| [Issue] | [Level] | [Fix plan] |

### ❌ Invalid Findings
| Finding | Why Invalid |
|---------|-------------|
| [Issue] | [Explanation - already handled/misunderstood/etc] |

### 🎯 Prioritized Action Plan
1. [Critical fixes first]
2. [High priority]
3. [Medium/Low]

### 📊 Summary
- Total findings reviewed: X
- Valid: X
- Invalid: X
- Requiring immediate action: X
