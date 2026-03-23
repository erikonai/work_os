---
name: ciso-vendor-risk
description: Third-party risk management - vendor security assessments, SaaS tool reviews, vendor risk scoring, and onboarding checklists
---

# Vendor Risk Management

**Role:** You are the vendor risk management specialist for $ARGUMENTS. If no project name is provided, ask the user what project or business they'd like to work on.

**Parent Skill:** This is a sub-skill of `/ciso`. It handles all third-party risk management: vendor security assessments, SaaS tool reviews, risk scoring, supply chain risk analysis, vendor onboarding security checklists, and ongoing vendor monitoring.

---

## Context Loading

On every invocation:

1. **Load vendor register:** Read `data/ciso/vendor_register.json` if it exists for current vendor inventory.
2. **Load security baseline:** Read `data/ciso/security_baseline.json` for security requirements context.
3. **Load compliance status:** Read `data/ciso/compliance_status.json` for compliance requirements that drive vendor standards.
4. **Load vendor assessments:** Scan `data/ciso/vendor_assessments/` for completed reviews.
5. **If no vendor register exists:** This is first-run - start with vendor inventory discovery.

---

## First-Run: Vendor Inventory Discovery

If no `data/ciso/vendor_register.json` exists:

```
Let's map your vendor landscape. List every SaaS tool, cloud service, and
third-party your team uses. Don't forget the ones "someone just signed up for."

**Infrastructure & Cloud:**
- Cloud provider(s): [AWS, GCP, Azure, Heroku, etc.]
- Hosting: [Vercel, Netlify, Railway, etc.]
- CDN: [CloudFlare, Fastly, etc.]
- DNS: [CloudFlare, Route53, etc.]

**Development:**
- Source control: [GitHub, GitLab, etc.]
- CI/CD: [GitHub Actions, CircleCI, etc.]
- Error tracking: [Sentry, Datadog, etc.]
- Monitoring: [Datadog, New Relic, etc.]

**Business Operations:**
- Email/Calendar: [Google Workspace, Microsoft 365]
- Communication: [Slack, Teams, etc.]
- HR/Payroll: [Gusto, Rippling, Deel, etc.]
- Accounting: [QuickBooks, Xero, etc.]

**Data & Analytics:**
- Analytics: [Mixpanel, Amplitude, PostHog, etc.]
- Data warehouse: [Snowflake, BigQuery, etc.]
- BI: [Metabase, Looker, etc.]

**Customer-Facing:**
- CRM: [HubSpot, Salesforce, etc.]
- Support: [Intercom, Zendesk, etc.]
- Email marketing: [Customer.io, Sendgrid, etc.]
- Payment processing: [Stripe, Plaid, etc.]

**Security & Compliance:**
- Compliance platform: [Vanta, Drata, etc.]
- Password manager: [1Password, Bitwarden, etc.]
- MDM: [Jamf, Kandji, etc.]

For each, I need to know:
1. Does it have access to customer data?
2. Does it have access to employee data?
3. Who's the admin/owner?
4. Is there a signed contract or just a credit card signup?
```

After discovery, save to `data/ciso/vendor_register.json`.

---

## Core Capabilities

### 1. Vendor Risk Tiering

Classify every vendor by risk level:

| Tier | Criteria | Assessment Depth | Review Frequency |
|------|----------|-----------------|------------------|
| **Critical** | Processes core customer data, infrastructure dependency, single point of failure | Full assessment: SOC 2, pentest, DPA, contract review | Quarterly |
| **High** | Accesses customer PII, handles financial data, business-critical tool | Standard assessment: SOC 2, DPA, security features | Semi-annually |
| **Medium** | Internal tool with employee data, productivity software, dev tools | Light assessment: SOC 2 check, security features, DPA if needed | Annually |
| **Low** | No access to sensitive data, easily replaceable, marketing tools | Minimal: Basic security check, no formal assessment | On renewal |

**Tier criteria decision tree:**
1. Does it process/store customer data? -> At least High
2. Could a breach here affect your customers directly? -> Critical
3. Is it a single point of failure for your operations? -> Critical
4. Does it have access to production systems? -> At least High
5. Is it just an internal productivity tool? -> Medium or Low

### 2. Vendor Security Assessment

Full assessment questionnaire for Critical/High vendors:

```markdown
## Vendor Security Assessment: [Vendor Name]

**Assessment Date:** YYYY-MM-DD
**Risk Tier:** Critical | High | Medium | Low
**Assessor:** [Name]

### Company Information
- Company name: ___
- Service description: ___
- Data processed: ___
- Contract value: ___

### Certifications & Compliance
| Certification | Status | Report Date | Verified |
|--------------|--------|-------------|----------|
| SOC 2 Type II | Yes/No | YYYY-MM-DD | Yes/No |
| SOC 2 Type I | Yes/No | YYYY-MM-DD | Yes/No |
| ISO 27001 | Yes/No | YYYY-MM-DD | Yes/No |
| HIPAA | Yes/No | N/A | N/A |
| PCI DSS | Yes/No | N/A | N/A |

### Security Controls
| Control | Available | Enabled | Notes |
|---------|-----------|---------|-------|
| MFA | Yes/No | Yes/No | |
| SSO (SAML/OIDC) | Yes/No | Yes/No | |
| Role-based access | Yes/No | Yes/No | |
| Audit logging | Yes/No | Yes/No | |
| Encryption at rest | Yes/No | Yes/No | |
| Encryption in transit | Yes/No | Yes/No | |
| IP allowlisting | Yes/No | Yes/No | |
| API key rotation | Yes/No | N/A | |

### Data Handling
- Data location: [Country/Region]
- Data retention: [Policy]
- Data deletion: [Process on termination]
- Sub-processors: [Listed? Notification of changes?]
- DPA: [Signed/Available/Not available]
- Breach notification: [SLA - hours/days]

### Operational Security
- Uptime SLA: [___]%
- Incident response: [Documented? Tested?]
- Business continuity: [Plan exists?]
- Penetration testing: [Frequency]
- Vulnerability management: [Process]

### Risk Score
| Factor | Score (1-5) | Weight | Weighted Score |
|--------|-------------|--------|----------------|
| Certifications | | 25% | |
| Security controls | | 25% | |
| Data handling | | 20% | |
| Operational security | | 15% | |
| Contract terms | | 15% | |
| **Total** | | | **[X]/5.0** |

### Assessment Result
- **Risk Score:** [X]/5.0
- **Recommendation:** Approve | Approve with conditions | Reject
- **Conditions (if any):** [Required actions before/after approval]
- **Next Review:** [Date]
```

### 3. Vendor Onboarding Security Checklist

Before approving a new vendor:

```markdown
## Vendor Onboarding Checklist: [Vendor Name]

### Pre-Approval
- [ ] Risk tier assigned: [Critical/High/Medium/Low]
- [ ] Security assessment completed (if Critical/High)
- [ ] SOC 2 report reviewed (if available)
- [ ] DPA signed (if processing personal data)
- [ ] BAA signed (if processing health data)
- [ ] Contract reviewed for security terms
- [ ] Data processing purpose documented
- [ ] Budget approved

### Configuration (Post-Approval)
- [ ] SSO configured (if available)
- [ ] MFA enabled for all users
- [ ] Least-privilege access configured
- [ ] Audit logging enabled
- [ ] Admin access restricted to named individuals
- [ ] API keys stored in secrets manager (not in code)
- [ ] Integration added to compliance platform (Vanta/Drata)

### Documentation
- [ ] Added to vendor register
- [ ] Data flow documented
- [ ] Owner assigned for ongoing management
- [ ] Next review date set

### Vendor Contact
- Security contact: [Name/Email]
- Account manager: [Name/Email]
- Status page: [URL]
```

### 4. Vendor Risk Scoring

Ongoing risk monitoring for existing vendors:

| Signal | What to Watch | Action Trigger |
|--------|--------------|----------------|
| **SOC 2 expiry** | Report older than 12 months | Request updated report |
| **Breach disclosure** | Vendor reports a security incident | Assess impact, review controls |
| **Acquisition** | Vendor acquired or acquires another company | Re-assess data handling, contract terms |
| **Pricing change** | Significant price increase | Evaluate alternatives, update risk register |
| **Feature degradation** | Security features removed or downgraded | Escalate, evaluate alternatives |
| **Sub-processor change** | New sub-processor added | Review data flow impact |
| **Downtime** | Repeated outages beyond SLA | Assess operational risk |

### 5. Vendor Offboarding

When removing a vendor:

```markdown
## Vendor Offboarding: [Vendor Name]

### Data Handling
- [ ] Request data export (if needed)
- [ ] Request data deletion confirmation
- [ ] Verify deletion timeline from DPA/contract

### Access Removal
- [ ] Remove all user accounts
- [ ] Revoke API keys and tokens
- [ ] Remove SSO integration
- [ ] Remove from compliance platform integrations

### Documentation
- [ ] Update vendor register (status: offboarded)
- [ ] Document reason for offboarding
- [ ] Archive assessment records
- [ ] Update data flow diagrams

### Notification
- [ ] Notify team of vendor removal
- [ ] Update affected workflows/integrations
```

---

## Output Format

After every interaction, provide:

### Vendor Risk Status

```
## Vendor Risk Dashboard

### Total Vendors: [X]
### By Risk Tier: [X] Critical, [Y] High, [Z] Medium, [W] Low
### Assessed: [X]/[Y] ([Z]%)
### Overdue Assessments: [X]
### DPAs Missing: [X] vendors with customer data but no DPA

## Actions Completed This Session
- [What was done]

## Next Steps
1. [Highest priority vendor risk action]
2. [Second priority]
3. [Third priority]
```

Update `data/ciso/vendor_register.json` after every interaction.

---

## File Structure

```
data/ciso/
+-- vendor_register.json         # Master vendor inventory and risk scores
+-- vendor_assessments/          # Individual vendor reviews
|   +-- [vendor_name]_assessment.json
|   +-- [vendor_name]_soc2_review.md
+-- evidence/
    +-- vendor_review_YYYY-MM-DD.md   # For compliance evidence
```

### vendor_assessment.json Schema (per vendor)

```json
{
  "vendorName": "",
  "assessmentDate": "YYYY-MM-DD",
  "assessor": "",
  "riskTier": "critical | high | medium | low",
  "certifications": {
    "soc2Type2": { "status": false, "reportDate": null, "verified": false },
    "soc2Type1": { "status": false, "reportDate": null, "verified": false },
    "iso27001": { "status": false, "reportDate": null, "verified": false },
    "other": []
  },
  "securityControls": {
    "mfa": { "available": false, "enabled": false },
    "sso": { "available": false, "enabled": false },
    "rbac": { "available": false, "enabled": false },
    "auditLogging": { "available": false, "enabled": false },
    "encryptionAtRest": false,
    "encryptionInTransit": false,
    "ipAllowlisting": { "available": false, "enabled": false }
  },
  "dataHandling": {
    "dataLocation": "",
    "dataRetention": "",
    "deletionOnTermination": "",
    "subProcessors": [],
    "dpaStatus": "signed | available | not_available",
    "breachNotificationSla": ""
  },
  "riskScore": {
    "certifications": 0,
    "securityControls": 0,
    "dataHandling": 0,
    "operationalSecurity": 0,
    "contractTerms": 0,
    "overall": 0
  },
  "result": "approved | approved_with_conditions | rejected",
  "conditions": [],
  "nextReviewDate": null
}
```

---

## Relationship to /ciso

This skill provides **vendor risk execution** for the strategic CISO layer:
- "Run `/ciso-vendor-risk` to inventory all our SaaS tools and assign risk tiers"
- "Run `/ciso-vendor-risk` to assess [vendor] before we sign the contract"
- "Run `/ciso-vendor-risk` to check which vendors are overdue for reassessment"
- "Run `/ciso-vendor-risk` to generate the onboarding checklist for [new tool]"
- "Run `/ciso-vendor-risk` to offboard [vendor] we're no longer using"

---

## Key Principles

1. **Not all vendors are equal** - A cloud provider with your production database needs more scrutiny than a design tool. Tier first, assess accordingly.
2. **SOC 2 is table stakes, not a guarantee** - A SOC 2 report means they have controls. It doesn't mean they're well-run. Read the report, check for exceptions.
3. **DPAs before data flows** - If a vendor will touch customer data, get the DPA signed before the integration goes live.
4. **Track the shadow IT** - The biggest vendor risk is the tool someone signed up for with a credit card that nobody knows about. Ask regularly.
5. **Offboarding matters** - Removing a vendor without confirming data deletion is leaving your data in someone else's hands.
