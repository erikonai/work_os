# Agent pages

Markdown copies of the compliance agent ecosystem in the **april** workspace (parent: The april
Almanac), plus the roster of configured Notion AI agents.

## The compliance ecosystem

Start with the hub, which maps the three flows and names every agent, its allowed actions, and its
human-approval gates.

| File | Source page | Snapshot |
| --- | --- | --- |
| [compliance-agent-ecosystem.md](compliance-agent-ecosystem.md) | Compliance Agent Ecosystem & Knowledge Base Operations — **the hub** | 2026-07-30 |
| [questionnaire-maintenance-and-gap-agent.md](questionnaire-maintenance-and-gap-agent.md) | Questionnaire Maintenance & Gap Agent (live, monthly cron) | 2026-07-30 |
| [evidence-conversion-agent.md](evidence-conversion-agent.md) | Evidence Conversion Agent | 2026-07-21 |
| [kb-health-monitor-agent.md](kb-health-monitor-agent.md) | Knowledge Base Health Monitor Agent | 2026-07-20 |
| [dev-docs-sync-agent.md](dev-docs-sync-agent.md) | Dev Docs Sync Agent (live, weekly cron) | 2026-08-04 |
| [agent-run-log-control-agent.md](agent-run-log-control-agent.md) | Agent Run Log / Control Agent — the full run history | 2026-08-07 |
| [questionnaire-intake-page-builder-template.md](questionnaire-intake-page-builder-template.md) | Vendor Risk Questionnaire Page Template | 2026-07-30 |

## Notion AI agents

[notion-ai-agents.md](notion-ai-agents.md) — the four configured agents (Quiet Influence Coach, Task
Prioritizer, Task Triager, Weekly Finance Standup Prep). **Name and description only.** The connector
exposes no path to an agent's instructions, tools, or schedule; see the fidelity note in that file.

## One page could not be copied

**Questionnaire Autofill Agent** (`387992e46de080b19bb9d6290ce0c2ef`), the fill-only sibling
referenced throughout the hub and the maintenance agent, returns `object_not_found` (404) from this
integration. That means it is archived, or it was never shared with the connector. Its
responsibilities are documented second-hand in the hub's Flow A table and in the maintenance agent's
"Out of scope" section, both of which are captured here — but the page itself is not. Re-share it
with the Notion integration and it can be pulled in a follow-up.
