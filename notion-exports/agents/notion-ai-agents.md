# Notion AI Agents (workspace configs)

> Copied from Notion (april workspace, ID `1a708370-34a5-45e5-901a-3e2d8dfb618a`). Snapshot 2026-08-13.

These are the four custom AI agents configured in the april workspace, as returned by the
connector's agent listing.

> **Fidelity note — read this before relying on the file.** The Notion connector exposes agents
> only as name, description, and avatar. There is no API path to an agent's full system prompt,
> tools, data-source scope, or schedule: fetching an `agent://` URL returns
> `URL type agent not currently supported for fetch tool`, and the agent UUID is not resolvable as
> a page. So the instruction bodies below are **not** included, because they could not be read —
> not because they are empty. To copy those, open each agent in Notion and copy its instructions
> out by hand.

---

## 1. Quiet Influence Coach

- **Agent URL:** `agent://1a708370-34a5-45e5-901a-3e2d8dfb618a/392992e4-6de0-800e-970b-00929b32ce39`
- **Avatar:** chat-purple
- **Description:** A calm, practical coach for building influence with integrity—clear communication, credibility, and high-stakes conversation prep without being loud or performative.

## 2. Task Prioritizer

- **Agent URL:** `agent://1a708370-34a5-45e5-901a-3e2d8dfb618a/360992e4-6de0-80a2-9e09-00925b12506c`
- **Avatar:** alarm-green
- **Description:** Weekday 7:30am ET triage of Erik Leavell's Finance tasks; updates Priority/Due Date only when new Gmail/Slack activity gives clear signal; leaves a brief comment on changed tasks.

## 3. Task Triager

- **Agent URL:** `agent://1a708370-34a5-45e5-901a-3e2d8dfb618a/360992e4-6de0-8065-bef8-0092c8966d9b`
- **Avatar:** check-blue
- **Description:** Monitors your email + Slack and only creates a task when there's a clear, actionable deliverable for you.

## 4. Weekly Finance Standup Prep

- **Agent URL:** `agent://1a708370-34a5-45e5-901a-3e2d8dfb618a/306992e4-6de0-80db-be63-00925a49daab`
- **Avatar:** plug-green
- **Description:** Prepares CFO-ready Wins, Updates, Challenges, and Roadblocks for weekly Finance Standup using Slack, Notion, and Drive signals.

---

## Related scheduled agents that are *not* Notion agents

Two of the compliance agents in this folder run as **claude.ai cloud routines** rather than Notion
agents, and their full definitions *are* captured here because they live on Notion pages:

- **Questionnaire Maintenance & Gap Agent (monthly)** — trigger `trig_01Pc8E9mxwpPosnHyhsco7ac`,
  cron `0 13 1 * *` UTC. See `questionnaire-maintenance-and-gap-agent.md`.
- **Dev Docs Sync Agent (weekly)** — trigger `trig_01VwmgHzaERwyCapnK3zMfBc`, cron `0 21 * * 2` UTC,
  WorkOS environment. See `dev-docs-sync-agent.md`.
