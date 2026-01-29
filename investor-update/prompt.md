# Investor Update

Generate monthly investor updates. Produces two versions:
1. **Existing Investors** — Full detail, candid, includes asks
2. **Potential Investors** — Excitement generator, high-level, includes booking CTA

## Project Configuration

Look for project config at `{project_root}/data/investor-update/config.json`:

```json
{
  "company": {
    "name": "Company Name",
    "founderName": "Founder Name",
    "founderTitle": "Founder & CEO",
    "website": "company.com",
    "bookingLink": "https://calendly.com/..."
  },
  "dataSources": {
    "cfoData": "data/cfo/latest_forecast.json",
    "gtmData": "data/gtm/",
    "previousUpdates": "path/to/previous/updates/"
  },
  "outputDir": "path/to/output/folder/",
  "branding": {
    "primaryColor": "#5DF7B5",
    "accentColor": "#36B87D",
    "logoSvg": "path/to/logo.svg"
  }
}
```

If no config exists, prompt user for setup or work with manual input only.

## Data Sources (if configured)

Pull current state from available data:
- **CFO data** — MRR, ARR, cash, burn, runway, customer status
- **GTM data** — Deal pipeline, ICP profiles, content calendar, strategic context
- **Previous updates** — Tone and format reference

If data is stale (>14 days), note this and ask if user wants to update first.

## Workflow

### Step 1: Load Available Data
Read configured data sources and extract relevant metrics:
- Financial: MRR, ARR, cash, burn, runway
- Customers: Active customers, design partners, pipeline
- Product: Recent launches, milestones
- GTM: Deal status, strategic learnings

### Step 2: Gather Missing Context
Ask user to fill gaps. Keep questions concise:

**For both versions:**
- Biggest headline this month? (1 sentence)
- Top 3-5 wins to highlight?
- Strategic learnings or insights?
- Next 30-day priorities?

**Existing investors only:**
- Challenges or setbacks to share?
- What help do you need? (The Ask)

**Potential investors only:**
- Specific CTA beyond booking link?

### Step 3: Generate Updates

#### Existing Investors Version
Full transparency, detailed metrics, candid tone.

**Sections:**
1. **Header** — "[Company] Investor Update - [Month Year]" + From line
2. **Opening Hook** — 1-2 sentence summary of biggest news
3. **TL;DR** — 5-6 bullet points with actual numbers
4. **Wins** — Detailed narratives on achievements
5. **Strategic Learning** — Insights, lessons (optional)
6. **Metrics** — Table with MoM comparison + goal progress (🟢🟡🔴)
7. **Financial Update** — Cash, burn, runway, fundraising plans
8. **Next 30 Days** — Business goals + product deliverables
9. **Our Ask** — Specific intro requests
10. **The Bottom Line** — Closing summary
11. **Signature**

#### Potential Investors Version
Excitement generator, trajectory-focused.

**Sections:**
1. **Header** — "[Company] Update - [Month Year]"
2. **Opening Hook** — Momentum-focused hook
3. **Highlights** — 4-5 bullets, trajectory language
   - Use ranges, not exact numbers
   - Name-drop impressive partners
   - Emphasize velocity and validation
4. **What We're Building** — Product/vision paragraph
5. **Traction Snapshot** — High-level metrics only
6. **What's Next** — Forward momentum (1-2 sentences)
7. **Let's Connect** — CTA with booking link
8. **Signature**

**OMIT from potential investors:**
- Exact financials
- Challenges/setbacks
- Detailed asks

### Step 4: Generate Outputs

For each version, produce:
1. **Email HTML** — Inline styles for email clients
2. **PDF** — Styled document (via headless Chrome)
3. **PowerPoint** — Slide deck version

**Naming:**
- `Investor Update [Month Year] - Existing.pdf`
- `Investor Update [Month Year] - Existing (email).html`
- `Investor Update [Month Year] - Potential.pdf`
- `Investor Update [Month Year] - Potential (email).html`

## Styling

Use project branding if configured, otherwise default professional styling:
- Clean typography (Inter or system fonts)
- Accent color for headers and highlights
- Logo in header/footer if provided
- Metric cards, styled tables
- Print-ready PDF formatting

## First-Time Setup

If no config exists, offer to create one:
1. Ask for company name, founder info, booking link
2. Ask for data source paths (or skip for manual-only mode)
3. Ask for output directory
4. Create config.json

## Notes

- Professional but warm tone (founder's voice)
- Always show MoM comparison where data exists
- Goal progress uses emoji: 🟢 on track, 🟡 at risk, 🔴 off track
- Fundraising: full context for existing, teaser for potential
- If user provides specific content, use verbatim where appropriate
