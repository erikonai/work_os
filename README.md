# Work OS

A comprehensive AI-powered operating system for running a company, built on Claude Code's skill system.

**41 skills** organized hierarchically: CEO at the top, C-suite personas (CMO, CFO, CPO, CTO, CISO), execution skills under each function, and a Stoic Coach for personal advisory.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        WORK OS                                            │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                        /ceo                                               │
│                              (Founder strategy & direction)                               │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                   /leadership-sync                                        │
│                          (Cross-functional alignment layer)                               │
├────────────────┬──────────────┬──────────────┬──────────────────┬────────────────────────┤
│      CMO       │     CFO      │     CPO      │       CTO        │         CISO            │
│  (GTM Leader)  │(Finance Lead)│(Product Lead)│  (Tech Leader)   │   (Security Leader)     │
├────────────────┼──────────────┼──────────────┼──────────────────┼────────────────────────┤
│ /gtm-icp       │ /finance-    │ /pm          │ /eng-brief       │ /ciso-compliance        │
│ /gtm-content   │   forecast   │              │ /tech-debt       │ /ciso-security          │
│ /gtm-execute   │ /cap-table   │              │ /architecture-   │ /ciso-privacy           │
│ /gtm-lead-     │ /board-deck  │              │   decision       │ /ciso-vendor-risk       │
│   capture      │ /fundraise-  │              │ /infra-cost      │                         │
│ /gtm-deal-     │  prep        │              │                  │                         │
│   intel        │              │              │                  │                         │
│ /gtm-onboarding│              │              │                  │                         │
│ /gtm-lifecycle │              │              │                  │                         │
│ /gtm-analytics │              │              │                  │                         │
│ /gtm-          │              │              │                  │                         │
│   monetization │              │              │                  │                         │
└────────────────┴──────────────┴──────────────┴──────────────────┴────────────────────────┘
        │                                                                     │
   /designer                                                               /coach
(Cross-functional)                                                 (Personal advisory -
                                                                    Stoic philosophy)
```

---

## Installation

### Prerequisites

- [Claude Code CLI](https://claude.ai/download) installed and authenticated
- macOS, Linux, or Windows with WSL

### Quick Install

Clone this repo and copy the skills to your Claude config:

```bash
# Clone the repo
git clone https://github.com/YOUR_ORG/work-os.git
cd work-os

# Copy all skill directories to your Claude skills directory
# (Excludes README and other non-skill files)
for dir in */; do
  if [ -f "$dir/SKILL.md" ]; then
    cp -r "$dir" ~/.claude/skills/
  fi
done

# Restart Claude Code for changes to take effect
```

### Verify Installation

After restarting Claude Code, run:

```bash
/ceo
```

You should see the CEO persona respond with a discovery prompt or strategic assessment.

---

## Quick Start

### Your First Session

1. **Start with the CEO** to set company context:
   ```
   /ceo
   ```
   This will run discovery and save your company strategy.

2. **Run a leadership sync** to see cross-functional health:
   ```
   /leadership-sync
   ```

3. **Dive into specific functions** as needed:
   ```
   /cmo    # GTM strategy
   /cfo    # Financial planning
   /cpo    # Product strategy
   /cto    # Technical decisions
   /ciso   # Security & compliance
   ```

4. **When struggling**, use the coach:
   ```
   /coach
   ```

---

## Skill Reference

### Executive & Advisory Layer

| Skill | Description | When to Use |
|-------|-------------|-------------|
| `/ceo` | Founder strategy, capital allocation, board management | Big decisions, setting direction, hard conversations |
| `/coach` | Stoic philosophy-based coaching | When you're struggling, need perspective, or feel stuck |

### C-Suite Personas

| Skill | Description | Sub-Skills |
|-------|-------------|------------|
| `/cmo` | GTM strategy, growth frameworks, marketing leadership | 9 GTM skills |
| `/cfo` | Strategic finance, valuation narrative, VC readiness | 5 Finance skills |
| `/cpo` | Product strategy, roadmap prioritization, PMF validation | — |
| `/cto` | Technical leadership, architecture decisions | 4 Engineering skills |
| `/ciso` | Pragmatic startup security, compliance readiness, risk management | 4 Security skills |
| `/leadership-sync` | Cross-functional alignment, synthesizes all perspectives | — |
| `/designer` | UI/UX design review, design system architecture | — |

### GTM Skills (under CMO)

| Skill | Description |
|-------|-------------|
| `/gtm-icp` | ICP segments, messaging frameworks, positioning, objection handling |
| `/gtm-monetization` | Packaging, pricing strategy, value communication |
| `/gtm-content` | Segment-targeted content (LinkedIn, emails, case studies, decks) |
| `/gtm-lead-capture` | Lead qualification, response templates, handoff protocols |
| `/gtm-deal-intel` | Deal conversation analysis, opportunity scoring, competitive intel |
| `/gtm-onboarding` | Onboarding playbooks, welcome sequences, time-to-value |
| `/gtm-lifecycle` | Expansion playbooks, churn prevention, renewal processes |
| `/gtm-analytics` | GTM performance reports, channel analysis, funnel diagnostics |
| `/gtm-execute` | GTM tech stack selection, automation workflows |

### Finance Skills (under CFO)

| Skill | Description |
|-------|-------------|
| `/finance-forecast` | Detailed scenario modeling, revenue projections, burn analysis |
| `/cap-table` | Equity tracking, dilution analysis, option pool modeling |
| `/board-deck` | Quarterly board presentations with metrics and narrative |
| `/fundraise-prep` | Data room preparation, VC Q&A prep, due diligence readiness |

### Engineering Skills (under CTO)

| Skill | Description |
|-------|-------------|
| `/eng-brief` | Weekly Engineering Brief — CTO-level status with strategic analysis and executive summary |
| `/tech-debt` | Technical debt tracking, prioritization, paydown planning |
| `/architecture-decision` | Architecture Decision Records (ADRs) generation and review |
| `/infra-cost` | Cloud infrastructure cost analysis and optimization |

### Security Skills (under CISO)

| Skill | Description |
|-------|-------------|
| `/ciso-compliance` | SOC 2 policies, Vanta integration, evidence collection, audit readiness, gap analysis |
| `/ciso-security` | Access control reviews, vulnerability management, incident response, security tool configuration |
| `/ciso-privacy` | Privacy policies, DPAs, GDPR/CCPA compliance, data inventory, privacy impact assessments |
| `/ciso-vendor-risk` | Vendor security assessments, SaaS tool reviews, risk scoring, onboarding checklists |

### Development Workflow Skills

| Skill | Description |
|-------|-------------|
| `/pm` | Senior PM - produces CTO-ready PRDs with hypothesis-driven scoping |
| `/explore` | Codebase exploration before implementation |
| `/create-plan` | Structured plan document with progress tracking |
| `/execute` | Implement plan with status updates |
| `/review` | Comprehensive code review |
| `/peer-review` | Evaluate external review findings |
| `/create-issue` | Quick issue capture mid-development |
| `/document` | Update docs after code changes |

### Other Skills

| Skill | Description |
|-------|-------------|
| `/investor-update` | Generate monthly investor updates (existing + potential investor versions) |
| `/learning-opp` | Three-level concept explanations |

---

## Typical Workflows

### Weekly Leadership Sync
```
/leadership-sync        # Cross-functional health check
/ceo                    # CEO-level decisions needed this week
```

### Weekly Engineering Review
```
/eng-brief              # Generate CTO-level engineering brief
/cto                    # Address items flagged in the brief
/tech-debt              # Review any debt surfaced during the week
```

### GTM Planning & Execution
```
/cmo                    # Set GTM strategy
/gtm-icp                # Define/refine ICP and messaging
/gtm-monetization       # Design pricing and packaging
/gtm-content            # Generate content for segments
/gtm-execute            # Build automation workflows
```

### Analyzing a Deal
```
/gtm-deal-intel         # Paste transcript, get scoring and intel
```

### Fundraising Prep
```
/cfo                    # Strategic financial view
/finance-forecast       # Build detailed projections
/cap-table              # Model dilution scenarios
/fundraise-prep         # Prepare data room and Q&A
```

### Board Meeting Prep
```
/board-deck             # Generate board presentation
```

### Feature Development
```
/cpo                    # Product strategy context
/pm                     # Write PRD
/cto                    # Technical feasibility
/create-plan            # Implementation plan
/execute                # Build it
/review                 # Code review
```

### Security & Compliance
```
/ciso                   # Security strategy and posture review
/ciso-compliance        # SOC 2 policies, evidence, audit readiness
/ciso-security          # Access reviews, vulnerability management
/ciso-privacy           # Privacy policies, DPAs, data inventory
/ciso-vendor-risk       # Vendor security assessments
```

### When You're Struggling
```
/coach                  # Stoic perspective on challenges
```

---

## Data Persistence

Each skill family writes to a dedicated data directory in your project:

```
your-project/
└── data/
    ├── ceo/            # CEO strategy and decisions
    ├── coach/          # Personal reflections
    ├── gtm/            # CMO & GTM skills data
    ├── cfo/            # CFO & Finance skills data
    ├── product/        # CPO & Product skills data
    ├── engineering/    # CTO & Engineering skills data
    ├── ciso/           # CISO & Security skills data
    ├── design/         # Designer skill data
    └── leadership/     # Leadership sync data
```

Skills read from and write to JSON files, creating a persistent knowledge base that accumulates over time. Run skills in your project directory to build up context.

---

## Customization

### Modifying a Skill

Each skill is defined in a `SKILL.md` file. Edit `~/.claude/skills/[skill-name]/SKILL.md` to:
- Change the persona voice
- Add or remove frameworks
- Adjust output formats
- Modify data schemas

### Creating a New Skill

1. Create a directory: `~/.claude/skills/your-skill/`
2. Add a `SKILL.md` file with frontmatter:

```markdown
---
name: your-skill
description: What this skill does
---

# Your Skill Name

**Role:** You are...

[Rest of skill definition]
```

3. Restart Claude Code

---

## Persona Credits

Each C-suite skill channels specific thought leaders:

| Skill | Voices |
|-------|--------|
| **CEO** | Ben Horowitz, Tobi Lütke, Patrick Collison, Claire Hughes Johnson |
| **CMO** | Elena Verna, Jeanne DeWitt Grosser, Luke Harries, Jason Lemkin |
| **CFO** | CJ Gustafson (Mostly Metrics) |
| **CPO** | Shreyas Doshi, Lenny Rachitsky, Marty Cagan, Gibson Biddle |
| **CTO** | Werner Vogels, Kelsey Hightower, Will Larson, Charity Majors |
| **CISO** | Pragmatic startup CISO composite (Caleb Sima mindset) |
| **Coach** | Marcus Aurelius, Seneca, Epictetus, Ryan Holiday |

---

## Skill Count Summary

| Category | Count |
|----------|-------|
| Executive & Advisory | 2 (CEO, Coach) |
| C-Suite Personas | 5 (CMO, CFO, CPO, CTO, CISO) |
| Cross-functional | 2 (leadership-sync, designer) |
| GTM Skills | 9 |
| Finance Skills | 5 |
| Engineering Skills | 4 |
| Security Skills | 4 |
| Development Skills | 8 |
| Other | 2 |
| **Total** | **41** |

---

## License

Private - internal use only.

---

## Built With

[Claude Code](https://claude.ai/claude-code) by Anthropic
