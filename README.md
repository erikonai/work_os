# WorkOS

A comprehensive AI-powered operating system for running a company, built on Claude Code's skill system.

**93+ custom & community skills** organized by executive persona, plus the **WorkOS Dashboard** — a retro-terminal command center for managing the entire skill ecosystem.

---

## Repository Structure

```
workos/
├── [custom skills]           # 52 custom skills at root level
├── community-skills/         # 48 community skills from open-source repos
├── workos-dashboard/         # Next.js dashboard (AI Executive Command Center)
├── _shared/                  # Shared templates
├── projects/                 # Project manifests
├── README.md                 # This file
└── GTM-README.md             # Detailed GTM skill documentation
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              WORK OS                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                              /ceo                                       │
│                    (Founder strategy & direction)                        │
├─────────────────────────────────────────────────────────────────────────┤
│                         /leadership-sync                                │
│                   (Cross-functional alignment)                          │
├──────────┬──────────┬──────────┬──────────┬──────────┬──────────────────┤
│   CMO    │   CFO    │   CPO    │   CTO    │   CISO   │   General       │
│(14 skills)│(7 skills)│(6 skills)│(15 skills)│(5 skills)│(26 skills)     │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────────────┘
```

---

## Custom Skills (Root Level)

### Executive & Advisory

| Skill | Description |
|-------|-------------|
| `/ceo` | Founder strategy, capital allocation, stakeholder management |
| `/leadership-sync` | Cross-functional alignment across all C-suite personas |
| `/coach` | Stoic philosophy-based coaching and perspective |
| `/morning-standup` | Start-of-day briefing, task review, priority setting |

### CMO — GTM & Marketing

| Skill | Description |
|-------|-------------|
| `/cmo` | GTM strategy, growth frameworks, marketing leadership |
| `/gtm-icp` | ICP segments, messaging frameworks, positioning |
| `/gtm-content` | Segment-targeted content generation |
| `/gtm-prospecting` | Enriched prospect lists from ICP criteria |
| `/gtm-outbound` | Personalized outreach sequences across channels |
| `/gtm-lead-capture` | Lead qualification, response templates, handoff protocols |
| `/gtm-deal-intel` | Deal conversation analysis, opportunity scoring |
| `/gtm-onboarding` | Onboarding playbooks, time-to-value acceleration |
| `/gtm-lifecycle` | Expansion playbooks, churn prevention, renewals |
| `/gtm-monetization` | Packaging, pricing strategy, value communication |
| `/gtm-analytics` | Performance reports, channel analysis, funnel diagnostics |
| `/gtm-infra` | GTM tech stack selection and configuration |
| `/advisor-outreach` | Network scanning, ICP matching, intro requests |

### CFO — Finance

| Skill | Description |
|-------|-------------|
| `/cfo` | Strategic finance, valuation narrative, VC readiness |
| `/finance-forecast` | Scenario modeling, revenue projections, burn analysis |
| `/cap-table` | Equity tracking, dilution analysis, option pool modeling |
| `/board-deck` | Quarterly board presentations with metrics |
| `/fundraise-prep` | Data room preparation, VC Q&A, due diligence |
| `/investor-update` | Monthly investor updates with metrics and narrative |
| `/personal-cfo` | Personal & family financial planning |
| `/infra-cost` | Cloud infrastructure cost analysis and optimization |

### CPO — Product

| Skill | Description |
|-------|-------------|
| `/cpo` | Product strategy, roadmap, competitive positioning |
| `/product-discovery` | Market research, competitive analysis, feasibility |
| `/pm` | PRD writing with lean/MVP mindset |
| `/create-issue` | Capture bugs, features, improvements as issues |
| `/create-plan` | Structured implementation plans with tracking |
| `/learning-opp` | Teaching mode for technical PM concepts |

### CTO — Engineering

| Skill | Description |
|-------|-------------|
| `/cto` | Technical leadership, architecture, infrastructure |
| `/architecture-decision` | Architecture Decision Records (ADRs) |
| `/tech-debt` | Technical debt tracking and prioritization |
| `/execute` | Implementation with modular code patterns |
| `/explore` | Codebase exploration and feature analysis |
| `/review` | Comprehensive code review |
| `/designer` | UI/UX design review, design system architecture |

### CISO — Security & Compliance

| Skill | Description |
|-------|-------------|
| `/ciso` | Pragmatic startup security, compliance, risk management |
| `/ciso-compliance` | SOC 2, Vanta integration, audit readiness |
| `/ciso-security` | Access control, vulnerability management, incident response |
| `/ciso-privacy` | GDPR/CCPA compliance, DPAs, data inventory |
| `/ciso-vendor-risk` | Vendor security assessments, SaaS tool reviews |

### General & Personal

| Skill | Description |
|-------|-------------|
| `/session-end` | End-of-session wrap-up, tech debt scan |
| `/skills-audit` | Audit and maintain the skills ecosystem |
| `/document` | Update documentation after code changes |
| `/peer-review` | Evaluate peer review findings |
| `/life-review` | Daily/weekly/monthly/quarterly life reviews |
| `/life-sync` | Cross-domain life orchestrator |
| `/personal-journal` | Journaling, decision logging, gratitude |
| `/personal-home` | Home improvement and property management |
| `/travel` | Family travel planning and points optimization |

---

## Community Skills

48 community skills sourced from open-source repos, organized in `community-skills/`:

| Category | Skills |
|----------|--------|
| **Document Processing** | docx, pdf, pptx, xlsx |
| **Development Tools** | artifacts-builder, mcp-builder, playwright-browser-automation, software-architecture, subagent-driven-development, test-driven-development, using-git-worktrees, prompt-engineering, skill-creator, skill-seekers |
| **Data & Analysis** | csv-data-summarizer, deep-research, postgres |
| **Business & Marketing** | brand-guidelines, competitive-ads-extractor, domain-name-brainstormer, internal-comms, lead-research-assistant, content-research-writer, twitter-algorithm-optimizer, marketing-skill (43 sub-skills) |
| **Productivity** | file-organizer, invoice-organizer, kaizen, n8n-skills, tailored-resume-generator, brainstorming |
| **Collaboration** | git-pushing, google-workspace-skills, outline, review-implementing, test-fixing, connect, webapp-testing |
| **Agents & Personas** | agents (15 agent personas), business-growth (4 skills), finance-skills (2 skills) |
| **Other** | article-extractor, changelog-generator, claude-code-terminal-title, meeting-insights-analyzer, notebooklm-integration, reddit-fetch, ship-learn-next, move-code-quality-skill |

---

## WorkOS Dashboard

A retro-terminal command center built with Next.js, Tailwind CSS, and Supabase.

```bash
cd workos-dashboard
npm install
npm run dev
```

**Features:**
- Persona cards with glassmorphism and glow effects
- Intel feed with thought leadership tracking (35 industry leaders)
- Web scraper with SHA-256 deduplication
- Boot sequence animation
- Neon amber (#FFB000) aesthetic with scanline overlays

See `workos-dashboard/.env.example` for required environment variables.

---

## Installation

```bash
# Clone the repo
git clone https://github.com/erikleavell/claude_skills.git
cd claude_skills

# Copy custom skills to your Claude skills directory
for dir in */; do
  if [ -f "$dir/SKILL.md" ]; then
    cp -r "$dir" ~/.claude/skills/
  fi
done

# Optionally copy community skills
cp -r community-skills/* ~/.claude/skills/

# Restart Claude Code
```

---

## Quick Start

```bash
/ceo                    # Set company context and strategy
/leadership-sync        # Cross-functional health check
/cmo                    # GTM strategy
/cfo                    # Financial planning
/cpo                    # Product strategy
/cto                    # Technical decisions
/ciso                   # Security & compliance
/coach                  # When you need perspective
```

---

## License

Apache 2.0 for community skills. Custom skills are private — internal use only.

---

Built with [Claude Code](https://claude.ai/claude-code) by Anthropic
