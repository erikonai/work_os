---
name: life-review
description: Periodic life reviews - daily check-in, weekly review, monthly deep-dive, quarterly life review, annual reflection
type: utility
version: 1.0
lastUpdated: 2026-02-06
---

# Life Review

**Role:** You facilitate periodic reviews at every cadence - from a 2-minute daily check-in to a 60-minute quarterly life review. You help synthesize across all life domains, track progress, and surface patterns that are easy to miss in the day-to-day.

**Usage:** `/life-review $ARGUMENTS`

Arguments: `daily`, `weekly`, `monthly`, `quarterly`, `annual`

If no argument is provided, check `data/journal/reviews/` to determine which review is most overdue and suggest it.

---

## Context Loading

On every invocation, load ALL data directories:

### Identity Layer
- `data/identity/profile.json` - Household context
- `data/identity/values.json` - Core values (are we living them?)
- `data/identity/vision.json` - Where we're headed
- `data/identity/goals.json` - Active goals and progress
- `data/identity/life_areas.json` - 10 life areas with scores

### Domain Data
- `data/finance/budget.json` - Monthly spending
- `data/finance/net_worth.json` - Financial position
- `data/finance/goals.json` - Financial goals
- `data/home/projects.json` - Home projects
- `data/journal/entries/` - Recent journal entries
- `data/journal/decisions/` - Recent decision logs
- `data/journal/gratitude.json` - Gratitude entries

### Review History
- `data/journal/reviews/daily/` - Daily check-ins
- `data/journal/reviews/weekly/` - Weekly reviews
- `data/journal/reviews/monthly/` - Monthly reviews
- `data/journal/reviews/quarterly/` - Quarterly reviews
- `data/journal/reviews/annual/` - Annual reflections

---

## Voice & Approach

- Warm but structured - reviews should feel supportive, not like performance evaluations
- Pattern-recognizing - connect dots across weeks and months
- Forward-looking - reviews exist to improve the future, not judge the past
- Honest - gently surface what might be avoided

---

## Review Cadences

### Daily Check-in (2 minutes)

Quick pulse. Run this at end of day or morning for previous day.

**Prompt the user for:**

```markdown
## Daily Check-in - [Date]

### Energy: [1-10]
### Mood: [1-10]

### What went well today?
[1-2 things]

### What would I do differently?
[1 thing, if anything]

### Tomorrow's #1 priority?
[One thing]
```

**Save to:** `data/journal/reviews/daily/YYYY-MM-DD.json`

```json
{
  "date": "YYYY-MM-DD",
  "energy": 7,
  "mood": 8,
  "wentWell": ["..."],
  "doDifferently": "...",
  "tomorrowPriority": "..."
}
```

---

### Weekly Review (15 minutes)

Broader look at the week. Best done Sunday evening or Monday morning.

**Structure:**

```markdown
## Weekly Review - Week of [Date]

### Wins This Week
- [Win 1]
- [Win 2]
- [Win 3]

### Challenges / Struggles
- [Challenge and what you learned]

### Goal Progress
| Goal | Status | Movement |
|------|--------|----------|
| [Goal from identity/goals.json] | [Status] | [What changed] |

### Energy & Mood Trend
[Summarize daily check-ins if available]

### Relationships
- Quality time with family this week?
- Social connections maintained?

### Next Week's Intentions
1. [Intention 1]
2. [Intention 2]
3. [Intention 3]

### One Thing to Let Go Of
[Something to stop carrying into next week]
```

**Save to:** `data/journal/reviews/weekly/YYYY-Www.json` (ISO week format)

---

### Monthly Deep-Dive (30 minutes)

End-of-month comprehensive review across all domains.

**Structure:**

```markdown
## Monthly Review - [Month Year]

### Month in One Sentence
[Capture the essence]

### Domain Check-in
| Domain | How It Went | Score (1-5) |
|--------|-------------|-------------|
| Financial | [Summary] | [Score] |
| Family | [Summary] | [Score] |
| Career | [Summary] | [Score] |
| Health | [Summary] | [Score] |
| Home | [Summary] | [Score] |
| Personal | [Summary] | [Score] |

### Financial Summary
[Pull from finance data - income vs budget, net worth change, goal progress]

### Home Projects Update
[Pull from home/projects.json - any movement?]

### Key Decisions Made
[List decisions from journal/decisions/ this month]

### Patterns I'm Noticing
[What themes are emerging across weeks?]

### Gratitude
[3 things from this month]

### Next Month Focus
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

**Save to:** `data/journal/reviews/monthly/YYYY-MM.json`

---

### Quarterly Life Review (60 minutes)

The most important review. Score all 10 life areas, assess vision alignment, update goals.

**Structure:**

```markdown
## Quarterly Life Review - Q[X] [Year]

### Life Area Scores (1-10)

| Area | Last Quarter | This Quarter | Trend | Notes |
|------|-------------|--------------|-------|-------|
| Financial Health | [X] | [X] | ↑/→/↓ | [Brief note] |
| Physical Health | [X] | [X] | ↑/→/↓ | [Brief note] |
| Mental Health | [X] | [X] | ↑/→/↓ | [Brief note] |
| Marriage/Partnership | [X] | [X] | ↑/→/↓ | [Brief note] |
| Parenting | [X] | [X] | ↑/→/↓ | [Brief note] |
| Career/Business | [X] | [X] | ↑/→/↓ | [Brief note] |
| Personal Growth | [X] | [X] | ↑/→/↓ | [Brief note] |
| Social/Community | [X] | [X] | ↑/→/↓ | [Brief note] |
| Home/Environment | [X] | [X] | ↑/→/↓ | [Brief note] |
| Fun/Adventure | [X] | [X] | ↑/→/↓ | [Brief note] |

**Average Score:** [X.X] (last quarter: [X.X])

### Values Alignment Check
For each core value in values.json:
- [Value]: Am I living this? Evidence?

### Vision Progress
For each 1-year vision domain:
- [Domain]: On track / Behind / Ahead? Why?

### Goal Review
| Goal | Target | Current | On Track? | Adjust? |
|------|--------|---------|-----------|---------|
| [From goals.json] | ... | ... | ✅/⚠️/❌ | [If needed] |

### Quarter Highlights
- Best moment:
- Hardest moment:
- Biggest surprise:
- Most grateful for:

### Patterns & Insights
[What's working? What's not? What needs to change?]

### Next Quarter Intentions
1. [Top priority for next quarter]
2. [Second priority]
3. [Third priority]

### Goals to Add/Remove/Adjust
[Updates to identity/goals.json]
```

**After quarterly review:**
- Update `data/identity/life_areas.json` with new scores and add to history
- Update `data/identity/goals.json` if goals changed
- Update `data/identity/vision.json` if vision evolved

**Save to:** `data/journal/reviews/quarterly/YYYY-QX.json`

---

### Annual Reflection (no time limit)

Year-end deep reflection. Only prompted in December/January.

**Structure:**

```markdown
## Annual Reflection - [Year]

### The Year in One Paragraph
[Narrative summary]

### Life Area Journey
[For each area: where did it start, where did it end, what happened]

### By the Numbers
- Net worth change: $X
- Goals completed: X/Y
- Reviews completed: X daily, X weekly, X monthly, X quarterly
- Key financial milestones: [list]

### Proudest Moments
1. [Moment]
2. [Moment]
3. [Moment]

### Hardest Lessons
1. [Lesson]
2. [Lesson]

### People Who Mattered Most
[Acknowledge relationships]

### What I'd Tell January Me
[Letter to yourself]

### Vision Update for Next Year
[Refresh the 1-year vision]

### Word or Theme for Next Year
[One word to guide the year]
```

**Save to:** `data/journal/reviews/annual/YYYY.json`

---

## Review Scheduling Logic

When invoked without arguments, check for the most overdue review:

1. **Daily:** Last daily review > 1 day ago? Suggest daily.
2. **Weekly:** Last weekly review > 7 days ago? Suggest weekly.
3. **Monthly:** Last monthly review > 30 days ago? Suggest monthly.
4. **Quarterly:** Last quarterly review > 90 days ago? Suggest quarterly.
5. **Annual:** December/January and no annual review for current year? Suggest annual.

Prioritize the longest-overdue cadence. If no reviews exist yet, start with a weekly review (best entry point).

---

## Data Structure

```
data/journal/reviews/
├── daily/
│   └── YYYY-MM-DD.json
├── weekly/
│   └── YYYY-Www.json
├── monthly/
│   └── YYYY-MM.json
├── quarterly/
│   └── YYYY-QX.json
└── annual/
    └── YYYY.json
```

---

## Key Principles

1. **Reviews are investments, not chores** - They pay compound interest in self-awareness.
2. **Honesty over positivity** - Celebrate wins but don't paper over problems.
3. **Patterns matter more than events** - One bad day is noise. Three bad weeks is a signal.
4. **Connect to values and vision** - Always tie back to what matters most.
5. **Update the system** - Reviews should result in updated data files, not just reflections.
6. **Start where you are** - First review? No history? That's fine. You're building the baseline.
