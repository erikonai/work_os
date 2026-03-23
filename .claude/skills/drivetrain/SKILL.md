---
name: drivetrain
description: Read and analyze Drivetrain financial data - pull actuals vs plan, run variance analysis, generate CFO-ready reports, and apply changes via browser automation when Drivetrain is open
type: executor
parent: cfo
version: 1.0
lastUpdated: 2026-03-10
---

# Drivetrain Skill

**Role:** You are a Drivetrain data analyst for $ARGUMENTS. If no project name is provided, ask the user what project or business they'd like to work on.

You pull financial data from Drivetrain's MCP tools, run variance and trend analysis, and either recommend or directly apply changes to the financial model. You speak the language of the CFO skill - conversational, direct, framework-driven.

---

## Drivetrain Instance

**URL:** https://getapril.drivetrain.ai/

---

## Available MCP Tools

Drivetrain exposes three READ tools via MCP. There are **no write tools** - changes must be applied via browser automation or manual entry.

| Tool | Function | Key Parameters |
|------|----------|----------------|
| `mcp__drivetrain__Get_Metrics` | Search for metrics by keyword | `query`, `search_phrases[]` |
| `mcp__drivetrain__Get_Metric_Values` | Pull metric data for a date range | `query`, `metric` (system_name), `start_date`, `end_date`, `granularity`, `dimensions[]`, `versions[]` |
| `mcp__drivetrain__Get_Versions` | List available data versions | `query` |

### Versions

| System Name | Display Name | Use When |
|-------------|-------------|----------|
| `Actual` | Actual | Metric domain is **MONITORING** (actuals from Campfire GL) |
| `Current` | Current Plan | Metric domain is **PLANNING** (forecast variables) |

**Critical rule:** Always match version to domain. MONITORING metrics use `Actual`. PLANNING metrics use `Current`. Never cross them unless the user explicitly asks.

### Granularity Options

| Value | Description |
|-------|-------------|
| `MONTHLY` | Monthly data points |
| `QUARTERLY` | Quarterly aggregation |
| `YEARLY` | Annual aggregation |

### Date Format

- `start_date`: Always first day of month (`YYYY-MM-01`)
- `end_date`: Always last day of month (`YYYY-MM-28/29/30/31`)

---

## Complete Metric Taxonomy

### Revenue & ARR Metrics

#### MONITORING (use version: `Actual`)

| System Name | Display Name | Description | Key Dimensions |
|-------------|-------------|-------------|----------------|
| `ARR` | ARR | Annual Recurring Revenue | Org_Size, Segment, Company_Name, Deal_Id, Client, Finance_Deal_Stage |
| `MRR_Change` | MRR Change | Period-over-period MRR delta | (none) |
| `Run_Rate2` | Run Rate | CARR plus UARR | (none) |
| `Contraction_ARR` | Contraction ARR | ARR lost to downgrades | Segment, Company_Name, Deal_Id, Client |
| `Contraction_ARR2` | Contraction ARR (-) | Negative contraction | Same as above |
| `Pass_Through_Revenue` | Pass Through Revenue | Revenue passed to partners | Planning_Vendor, Company_Name, Account_Name |

#### PLANNING (use version: `Current`)

| System Name | Display Name | Description | Key Dimensions |
|-------------|-------------|-------------|----------------|
| `ARR1` | ARR | Planned ARR | (none - top-level) |
| `MRR` | MRR | Planned MRR | (none) |
| `Revenue1` | Revenue | Total Revenue | Account_Type, Account_Name, Budget_Rollups |
| `Copy_of_Revenue_Rev_Rec_from_ARR2` | Total Revenue (Rev Rec) | Revenue recognition from ARR | Org_Size, Segment |
| `Copy_of_Revenue_Rev_Rec_from_Usage_Revenue` | Total Revenue (Rev Rec) | Revenue recognition from usage | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Usage_Based_Revenue` | Revenue - Usage | Usage-based revenue | Company_Name, Segment, Deal_Id, Client |
| `Usage_Based_Revenue1` | Usage Based Revenue | Usage revenue by company | Company_Name, Finance_Deal_Stage, Churn_Date |
| `Copy_of_Subscription_Revenue_Existing_Open_Pipeline2` | Revenue - Subscription | Subscription revenue | Company_Name, Segment, Deal_Id, Client |
| `Opening_ARR` | Starting ARR | Beginning-of-period ARR | (none) |
| `Ending_ARR` | Ending ARR | End-of-period ARR (top-level) | (none) |
| `Ending_ARR2` | Ending ARR | End-of-period ARR (detailed) | Company_Name, Segment, Deal_Id, Client |
| `Expansion_ARR` | Expansion ARR | ARR from expansion | (none) |
| `Churn_ARR` | Churn ARR | ARR lost to churn (top-level) | (none) |
| `Churn_ARR2` | Churn ARR | ARR lost to churn (segmented) | Org_Size, Segment |
| `Net_Change_in_ARR` | Net Change in ARR | Net ARR delta (top-level) | (none) |
| `Net_change` | Net Change in ARR | Net ARR delta (segmented) | Org_Size, Segment |
| `CARR` | CARR | Committed ARR | Company_Name, Finance_Deal_Stage, Churn_Date |
| `CARR_Won` | CARR [Won Deals] | CARR from won deals | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_CARR_Won_Deals` | CARR [Future Deals] | CARR from future deals | (none) |
| `UARR_Usage_Based_Revenue` | UARR | Usage ARR | Company_Name, Finance_Deal_Stage, Churn_Date |

##### MRR Breakdown (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Copy_of_MRR` | Starting MRR | Org_Size, Segment |
| `MRR2` | Ending MRR | Org_Size, Segment |
| `Ending_mrr` | Ending MRR (detailed) | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_New_MRR` | Expansion MRR | Org_Size, Segment |
| `Expansion_MRR` | Expansion MRR | Org_Size, Segment |
| `MRR_Walk` | New MRR | Org_Size, Segment |
| `Copy_of_Expansion_MRR` | New MRR | Org_Size, Segment |
| `Churn_MRR` | Churn MRR | Org_Size, Segment |
| `Copy_of_Copy_of_New_MRR` | Churn MRR | Org_Size, Segment |
| `Churn_MRR_Company___dt___plan` | Churn MRR [Company] | Company_Name, Churn_Date, Finance_Deal_Stage |

##### Revenue Recognition (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Copy_of_Revenue_Rev_Rec_from_ARR` | Revenue (Rev Rec) from Usage Revenue | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Ending_ARR_with_overage_Expansion1` | Revenue (Rev Rec) from Usage Revenue | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_Price_Per_Unit` | Revenue (Rev Rec) from Usage Revenue | Org_Size, Segment |
| `Copy_of_Revenue_Rev_Rec_from_Usage_Revenue1` | Total Revenue (Rev Rec) | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_Revenue_Rev_Rec_from_Usage_Revenue2` | Revenue (Rev Rec) from ARR | Org_Size, Segment |

##### Overage Revenue (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Overage_Revenue_YTD` | Overage Revenue (YTD) | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Usage_Revenue_YTD` | Overage Revenue - YTD | Company_Name, Segment, Deal_Id, Client |
| `Overage_Revenue_YTD1` | Overage Revenue - YTD | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_Overage_Revenue_YTD` | Overage Revenue Available to Convert | Company_Name, Segment, Deal_Id, Client |

##### Deferred Revenue (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Copy_of_Renewal_with_overage_Expansion` | Deferred Revenue (DR) | Company_Name, Segment, Deal_Id, Client, Product |
| `Copy_of_Total_Revenue_Rev_Rec` | Deferred Revenue (DR) | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Total_Revenue_Rev_Rec2` | Deferred Revenue (DR) | Org_Size, Segment |

### Customer & Pipeline Metrics

#### MONITORING

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Operations2` | Operations | Org_Size, Segment, Partner_Legal_Name |
| `Operations_per_Customers` | Operations per Customers | Org_Size, Segment, Partner_Legal_Name |

#### PLANNING

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Enterprise_Deals1` | Customers | Org_Size, Segment |
| `Copy_of_ARPA` | Total Customers | Org_Size, Segment |
| `Copy_of_Total_Customers1` | Total Customers | Org_Size, Segment |
| `Copy_of_Total_Customers` | New Customers | Org_Size, Segment |
| `Copy_of_New_Customers` | Churn Customers | Org_Size, Segment |
| `Retension` | Retention | Org_Size, Segment |
| `Retention_Rates` | Retention Rates | Cohort |
| `Operations_per_Deal` | Operations per Deal | Org_Size, Segment |

##### Pipeline (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Open_Run_Rate_Pipeline1` | Open Pipeline (Amount) | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |
| `Copy_of_Subscription_Revenue_Existing_Open_Pipeline1` | Pipeline for MRR | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |
| `Copy_of_Pipeline_for_MRR` | Open Pipeline [ARR] | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |
| `Copy_of_Open_Pipeline_ARR` | Open Pipeline [New ARR] | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |
| `Copy_of_Weighted_Open_Pipeline_AMOUNT` | New Open Pipeline (Amount) | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |

##### Deal-Level Revenue (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Subscription_Revenue_by_Deals` | Subscription Revenue [by Deals] | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Subscription_Revenue_by_Deals` | Usage Revenue [by Deals] | Company_Name, Segment, Deal_Id, Client |
| `Copy_of_Copy_of_Subscription_Revenue_by_Deals` | Total Revenue [by Deals] | Company_Name, Segment, Deal_Id, Client |
| `Subscription_Revenue_per_Deal` | Subscription Revenue per Deal | Org_Size, Segment |
| `Variable_Commission` | Variable Commission | Segment, Client, Deal_Id, Company_Name, Product |

### Expense Metrics

#### MONITORING (use version: `Actual`)

| System Name | Display Name | Description | Key Dimensions |
|-------------|-------------|-------------|----------------|
| `Expenses` | Expenses | Total expenses from GL | Account_Type, Account_Name, Department_Name, Planning_Vendor, Payee_Name |
| `COGS` | COGS | Cost of Goods Sold | Account_Type, Account_Name, Department_Name, Planning_Vendor |
| `COGs_Technology1` | COGs - Technology | Tech-specific COGS | Same as COGS |
| `OTHER_EXPENSES` | Other Expenses | Non-operating expenses | Account_Type, Account_Name, Department_Name, Planning_Vendor |
| `Prepaid_Amortization` | Prepaid Amortization | Amortized prepaid expenses | Planning_Vendor, Account_Name |
| `Pass_Through_Revenue` | Pass Through Revenue | Revenue passed through | Planning_Vendor, Account_Name |
| `Payroll_Processing_Fee` | Payroll Processing Fee | Per-FTE payroll fee | (none) |

#### PLANNING (use version: `Current`)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Operating_Expenses` | Operating Expenses | Department_Name, Account_Name, Cost_Rollup, Parent_Department |
| `COGS1` | COGS | Department_Name, Account_Name, Cost_Rollup |
| `Total_COGS` | Total COGS | Account_Type, Account_Name |
| `Total_People_COGs` | Total People Cost (COGs) | Department_Name, Account_Name, Cost_Rollup |
| `Other_Expenses` | Other Expenses | Account_Type, Account_Name |
| `Payroll_Expenses1` | Payroll Expenses | Department_Name, Account_Name, Cost_Rollup |

##### Vendor Costs (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Vendor_Cost_Model` | Vendor Costs | Planning_Vendor, Department_Name, Account_Name, Expense_Type, Payment_Frequency, Calculation_Category |
| `Vendor_Costs_Cash_Basis` | Vendor Costs [Cash Basis] | Same as above |
| `Copy_of_Vendor_Costs3` | One Time Vendor Costs | Same as above |
| `Vendor_Costs_Automated` | Recurring Vendor Costs | (none) |
| `Software` | Software | Planning_Vendor, Department_Name, Account_Name, Expense_Type, Payment_Frequency |
| `Copy_of_Software` | Professional Services | Same as Software |
| `Copy_of_Professional_Services` | Office Expenses | Same as Software |
| `Growth_Rate_percent` | Software Growth Rate % | (none) |

##### Depreciation & Assets (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Asset_Purchase` | Asset Purchase | Asset_ID, Account_Name, Asset_Description |
| `Copy_of_Asset_Purchase` | Depreciation Expense | Asset_ID, Account_Name, Asset_Description |
| `Asset1` | Asset | Account_Type, Account_Name |

### People & Headcount Metrics

#### MONITORING (use version: `Actual`)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Headcount` | Closing Headcount | Department_Name, Employment_Type, Employee_Name, Cost_Rollup, Team |
| `Opening_Headcount` | Opening Headcount | Same as above |
| `Net_Addition_to_Headcount` | Net Addition to Headcount | (none) |

#### PLANNING (use version: `Current`)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Headcount1` | Closing Headcount [Roster] | Department_Name, Employment_Type, Employee_Name, Cost_Rollup, Team |
| `Opening_Headcount1` | Opening Headcount [Roster] | Same as above |
| `Opending_Total_Headcount` | Opening Headcount [Total] | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Copy_of_Additional_Contractors_Needed` | Ending Total Headcount | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Additional_Contractors1` | Closing Headcount [Top Down Basis] | Department_Name, Employment_Type, Cost_Rollup |
| `Copy_of_Forecasted_Contractor_New_Hires_Top_Down` | Attrition [Driver Based] | Department_Name, Employment_Type, Cost_Rollup |
| `Copy_of_Additional_Top_Down_New_Hires1` | Attrition [Top Down Basis] | Department_Name, Employment_Type, Cost_Rollup |

##### Compensation (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Total_Payroll_Cost` | Total Payroll Cost [Roster] | Employee_Name, Department_Name, Employment_Type, Cost_Rollup, Team |
| `Copy_of_Total_Payroll_Cost_Roster` | Total Payroll Cost | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Payroll` | Payroll Tax | Employee_Name, Department_Name, Employment_Type, Cost_Rollup |
| `Copy_of_Payroll_Tax` | Payroll Tax for US Employees | Same as above + Annual_Compensation_Currency |
| `Copy_of_Salary_Driver_Based1` | Payroll Tax [Driver Based] | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Payroll_Service_fee` | Payroll Service Fee | Employee_Name, Department_Name, Employment_Type |
| `Copy_of_Payroll_Service_Fee` | Payroll Service Fee per Head | (none) |
| `Bonus` | Bonus | Employee_Name, Department_Name, Employment_Type, Cost_Rollup, Team |
| `Health_Benefits` | Health Benefits | Employee_Name, Department_Name, Employment_Type, Cost_Rollup |
| `Health_Benefits_per_Head` | Health Benefits per Head | (none) |
| `Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Salary_Driver_Based` | Health Benefits [Driver Based] | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Other_Benefits` | Other Benefits | (none) |
| `Copy_of_Copy_of_Health_Benefits_Driver_Based` | Other Benefits [Driver Based] | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `401K` | 401K | Employee_Name, Department_Name, Employment_Type, Cost_Rollup |
| `401K_percent_of_Annual_Compensation_Value` | 401K (% of Base Compensation) | (none) |
| `Copy_of_Copy_of_Salary_Driver_Based1` | 401K [Driver Based] | Department_Name, Employment_Type, Cost_Rollup, Parent_Department |
| `Copy_of_National_Insurance_B_L` | Pension | Employee_Name, Department_Name, Employment_Type, Cost_Rollup |
| `Merit_Increase_percent` | Merit Increase % | Employee_Name, Department_Name, Employment_Type |
| `Tax_Pro_Bonus` | Tax Pro Bonus | (none) |

##### Staffing Plans (PLANNING)

| System Name | Display Name | Description |
|-------------|-------------|-------------|
| `Additional_Contractors` | Additional Contractors aprilPRO | aprilPRO contractor additions |
| `Additional_Contractors_Customer_Support` | Customer Support Additional Contractors | CS contractor additions |
| `Customer_Support_Offboard_Contractors` | Customer Support Offboard Contractors | CS offboarding |
| `Copy_of_Customer_Support_Additional_Contractors` | Customer Support Additional Contractors Requirements | CS hiring needs |
| `aprilPRO_New_Hires` | aprilPRO & Consultations FTEs New Hires | aprilPRO FTE hiring |
| `Customer_Support_Start_Headcount` | Customer Support Starting Headcount | CS baseline headcount |

### Profitability Metrics

#### MONITORING (use version: `Actual`)

| System Name | Display Name | Description |
|-------------|-------------|-------------|
| `Gross_Profit` | Gross Profit | Revenue - COGS |
| `Gross_Profit_percent` | Gross Margin % | Gross Profit as % of Revenue |
| `Gross_Margin_TTM1` | Gross Margin (TTM) | Trailing 12-month Gross Margin % |
| `Operating_Profit` | Operating Profit | Gross Profit - OpEx |
| `Net_Income` | Net Income | Operating Profit + Net Other Income |
| `Net_Other_Income` | Net Other Income | Other Income - Other Expenses |
| `EBITDA` | aEBITDA | Adjusted EBITDA |
| `EBITDA_Margin_percent` | EBITDA Margin % | EBITDA as % of Revenue |
| `EBITDA_Margin_Growth_TTM` | EBITDA Margin % (TTM) | Trailing 12-month EBITDA Margin |

#### PLANNING (use version: `Current`)

| System Name | Display Name |
|-------------|-------------|
| `Gross_Profit1` | Gross Profit |
| `Gross_Profit_percent1` | Gross Profit % |
| `Gross_Margin` | Gross Margin (TTM) |
| `Operating_Profit1` | Operating Profit |
| `Net_Income1` | Net Income |
| `Net_Income_percent` | Net Income % |
| `Net_Other_Income1` | Net Other Income |
| `EBITDA2` | EBITDA |
| `EBITDA_Margin` | EBITDA % |
| `EBITDA1` | aEBITDA |
| `EBITDA_percent` | EBITDA Growth % |

### Cash & Balance Sheet Metrics

#### MONITORING (use version: `Actual`)

| System Name | Display Name | Description | Key Dimensions |
|-------------|-------------|-------------|----------------|
| `Closing_Cash_Balance1` | Closing Cash Balance | Cash at end of period | Account_Name, Account_Type, Posting_Period |
| `Opening_Cash_Balance1` | Opening Cash Balance | Cash at start of period | (none) |
| `Net_Change_in_Cash1` | Net Change in Cash | Cash flow for period | Account_Type, Account_Name |
| `Accounts_Receivable_AR` | Accounts Receivable (AR) | AR balance | Account_Name, Posting_Period |
| `Accounts_Payable_AP` | Accounts Payable (AP) | AP balance | Account_Name, Posting_Period |
| `DPO1` | DPO | Days Payable Outstanding | (none) |
| `Runway` | Runway | Months of runway remaining | (none) |

#### PLANNING (use version: `Current`)

| System Name | Display Name |
|-------------|-------------|
| `Closing_Cash_Balance` | Closing Cash Balance |
| `Opening_Cash_Balance` | Opening Cash Balance |
| `Net_Change_in_Cash` | Net Change in Cash |
| `Cash_Burn2` | Cash Burn |
| `Net_Income_Cash_Basis` | Net Income (Cash Basis) |
| `Runway1` | Runway |
| `Additional_Paid_in_Capital` | Additional Paid in Capital |
| `Equity` | Equity |
| `Liability1` | Liability |
| `Copy_of_Payment_Timing_DPO` | Total Non-Payroll Cost |
| `Copy_of_Total_Non_Payroll_Cost` | Accrued Cost based on Payment Schedule |
| `Copy_of_Vendor_Costs_Cash_Basis` | Is Payment Made |

### Run Rate & Efficiency Metrics

#### MONITORING

| System Name | Display Name | Description |
|-------------|-------------|-------------|
| `Run_Rate2` | Run Rate | CARR plus UARR |

#### PLANNING

| System Name | Display Name |
|-------------|-------------|
| `Run_Rate` | Run Rate |
| `Run_Rate1` | Run Rate |
| `Run_Rate_AM` | Run Rate / AM |
| `Assumptions` | Run Rate / CSM |
| `ARR_FTE` | ARR/FTE |
| `Take_Rate1` | Take Rate (by Product) |

### Enterprise Deal Metrics (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Additional_ARR` | New MRR [Enterprise Deals] | Org_Size, Segment |
| `New_MRR1` | New MRR [Enterprise Deals] | Org_Size, Segment |
| `Copy_of_New_MRR_Enterprise_Deals` | Expansion [Enterprise Deals] | Org_Size, Segment |
| `Copy_of_Copy_of_New_MRR_Enterprise_Deals` | Churn [Enterprise Deals] | Org_Size, Segment |
| `Churn_MRR3` | Churn MRR [Enterprise Deals] | Org_Size, Segment |

### Operations Metrics (PLANNING)

| System Name | Display Name |
|-------------|-------------|
| `OP` | OP (Operations) |
| `April_Pro_Operations` | aprilPro Operations |
| `Consultations_Operations` | Consultations Operations |

### Pipeline Open/Won (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `New_ARR_Open_Pipeline` | New MRR [Open Pipeline] | Company_Name, Segment, Deal_Id, Finance_Deal_Stage |
| `Copy_of_Subscription_Revenue_Existing_Open_Pipeline` | New MRR [Existing Open Pipeline] | Same as above |
| `Copy_of_Churn_Open_Pipeline` | Expansion MRR [Open Pipeline] | Same as above |
| `Copy_of_New_MRR_Open_Pipeline` | Churn MRR [Open Pipeline] | Same as above |
| `Copy_of_Ending_MRR_Open_Pipeline1` | MRR Check [Open Pipeline] | (none) |
| `Copy_of_Subscription_Revenue_Existing_Open_Pipeline2` | Revenue - Subscription | Company_Name, Segment, Deal_Id, Client |
| `Target_with_Pipeline_Adjustement` | Target with Pipeline Adjustment | (none) |

### ARPA / Unit Metrics (PLANNING)

| System Name | Display Name | Key Dimensions |
|-------------|-------------|----------------|
| `Copy_of_Ending_MRR` | ARPA | Org_Size, Segment |

### Balance Check / Internal (PLANNING)

| System Name | Display Name |
|-------------|-------------|
| `Balance_Check_Headcount_Walk` | Balance Check : Headcount Walk |
| `COGs_Variance` | COGs Variance |
| `Beg_COGs` | (Beg) COGs |
| `End_COGs` | (End) COGs |
| `End_OpEx` | (End) OpEx |
| `Product_Level_Allocation` | Product Level Allocation % (COGS) (by Product) |

---

## Key Dimension Values

These are the dimension keys you can use to filter/group metrics:

### Revenue Dimensions
- **Org_Size** - Organization size tier
- **Segment** - Customer segment
- **Company_Name** - Individual company
- **Deal_Id** / **Deal_Name** - Specific deal
- **Client** - Client identifier
- **Finance_Deal_Stage** - Deal stage in finance pipeline
- **Deal_Pipeline** - Pipeline name
- **Deal_Stage** - CRM deal stage
- **Is_Present_In_Contracts** - Contract status flag
- **Product** - Product line
- **Churn_Date** - Expected churn date
- **Revenue_Share** - Revenue share arrangement

### Expense Dimensions
- **Planning_Vendor** - Normalized vendor name (from OpEx model)
- **Department_Name** / **Department** - Department
- **Parent_Department** - Department parent grouping
- **Cost_Rollup** - Cost center rollup
- **Account_Type** - GL account type (COGS, OPERATING_EXPENSES, OTHER_EXPENSE)
- **Account_Subtype** - GL account subtype
- **Account_Name** - GL account name
- **Account_Number** - GL account number
- **Expense_Type** - Recurring vs One-Time
- **Payment_Frequency** - Payment schedule
- **Calculation_Category** - Forecast calculation method
- **Budget_Rollups** - Budget category grouping
- **Expense_Rollups** - Expense category grouping
- **Expense_SubType_Rollups** - Expense subtype grouping
- **Management_Rollups** - Management reporting grouping
- **Entity_Name** - Legal entity
- **Company_Name** - Entity for multi-company

### People Dimensions
- **Employee_Name** - Individual employee
- **Id** - Employee ID
- **Employment_Type** - FTE, Contractor, etc.
- **Team** - Team name
- **Timezone** - Employee timezone
- **Annual_Compensation_Currency** - Pay currency
- **Management_Employee_Type** - Management classification

### Balance Sheet Dimensions
- **Posting_Period** - Accounting period

---

## Standard Queries

### CFO Dashboard Pull

Pull the key metrics a CFO needs for a quick health check:

```
Metrics to pull (Actual):
1. ARR → system: "ARR", version: "Actual"
2. Closing Cash Balance → system: "Closing_Cash_Balance1", version: "Actual"
3. Expenses → system: "Expenses", version: "Actual"
4. COGS → system: "COGS", version: "Actual"
5. Gross Profit → system: "Gross_Profit", version: "Actual"
6. Gross Margin % → system: "Gross_Profit_percent", version: "Actual"
7. Operating Profit → system: "Operating_Profit", version: "Actual"
8. EBITDA → system: "EBITDA", version: "Actual"
9. Headcount → system: "Headcount", version: "Actual"
10. Runway → system: "Runway", version: "Actual"
11. Net Change in Cash → system: "Net_Change_in_Cash1", version: "Actual"
12. AR → system: "Accounts_Receivable_AR", version: "Actual"
13. AP → system: "Accounts_Payable_AP", version: "Actual"

Metrics to pull (Current Plan):
1. ARR → system: "ARR1", version: "Current"
2. MRR → system: "MRR", version: "Current"
3. Closing Cash Balance → system: "Closing_Cash_Balance", version: "Current"
4. Cash Burn → system: "Cash_Burn2", version: "Current"
5. Runway → system: "Runway1", version: "Current"
6. Operating Expenses → system: "Operating_Expenses", version: "Current"
7. Vendor Costs → system: "Vendor_Cost_Model", version: "Current"
8. Total Customers → system: "Copy_of_ARPA", version: "Current"
9. Headcount → system: "Copy_of_Additional_Contractors_Needed", version: "Current"
```

### Variance Analysis (Actual vs Plan)

For metrics that have BOTH a MONITORING and PLANNING version, pull both and compare:

| What | Actual (MONITORING) | Plan (PLANNING) |
|------|-------|------|
| ARR | `ARR` + `Actual` | `ARR1` + `Current` |
| Expenses | `Expenses` + `Actual` | `Operating_Expenses` + `Current` |
| COGS | `COGS` + `Actual` | `COGS1` + `Current` |
| Gross Profit | `Gross_Profit` + `Actual` | `Gross_Profit1` + `Current` |
| Gross Margin % | `Gross_Profit_percent` + `Actual` | `Gross_Profit_percent1` + `Current` |
| Net Income | `Net_Income` + `Actual` | `Net_Income1` + `Current` |
| EBITDA | `EBITDA` + `Actual` | `EBITDA2` + `Current` |
| Closing Cash | `Closing_Cash_Balance1` + `Actual` | `Closing_Cash_Balance` + `Current` |
| Headcount | `Headcount` + `Actual` | `Copy_of_Additional_Contractors_Needed` + `Current` |
| Run Rate | `Run_Rate2` + `Actual` | `Run_Rate` + `Current` |
| Runway | `Runway` + `Actual` | `Runway1` + `Current` |

---

## Applying Changes to Drivetrain

Since Drivetrain's MCP tools are **READ-ONLY**, changes must be applied through one of these methods:

### Method 1: Browser Automation (Preferred when Drivetrain is open)

Use Claude in Chrome MCP tools to directly edit model formulas in the Drivetrain UI.

#### URL Patterns

| Target | URL Pattern | Example |
|--------|-------------|---------|
| Models home | `https://getapril.drivetrain.ai/models` | |
| Model folder | `/models/folders/{id}` | `/models/folders/2` (Expenses) |
| Individual model | `/models/m/{Model_Name}` | `/models/m/Vendor_Cost_Model` |

#### Model Folder Structure

```
Models/
├── Financial Statements/
├── Revenue/                  (folder 5)
│   └── Enterprise Deals
├── Expenses/                 (folder 2)
│   ├── COGS Model
│   ├── Capital Expenditure
│   ├── Travel Model
│   └── Vendor Cost Model
├── People/
├── Benchmarks (Benchmarkit)/
├── WIP/
├── Cohort Model              (standalone)
├── Current Plan Metrics      (standalone)
└── Time Series Assumptions   (standalone)
```

#### Grid Editor Structure

The Drivetrain grid has two sections:
- **Fixed left columns:** Row labels + formula textbox column (shows the forecast formula/method)
- **Scrollable right columns:** Time period data cells (Jan 24 → Dec 27)

**Cell types:**
- **Actual cells:** Have a database icon child element, show historical data. Not directly editable in models.
- **Forecast cells:** Show computed values from formulas. Editable through the formula editor popup.

#### Editing Workflow (Step-by-Step)

**IMPORTANT:** Data cells CANNOT be directly edited by clicking/typing. All editing goes through the formula editor popup.

**Step 1: Navigate to the model**
```
mcp__Claude_in_Chrome__tabs_context_mcp → get tab ID
mcp__Claude_in_Chrome__navigate → https://getapril.drivetrain.ai/models/m/{Model_Name}
```

**Step 2: Open the formula editor popup**
Two methods:
- **Method A:** Double-click the formula textbox in the formula column (left side of grid)
- **Method B:** Click a data cell, then press F2

A popup appears with:
- **Forecast method** dropdown (7 options)
- **Formula** textarea (for Formula method)
- **Cancel** / **Apply** buttons

**Step 3: Edit the formula value**
```
# Find the textarea within the popup
mcp__Claude_in_Chrome__find → query: "formula textarea input with value {current_value}"

# Click the textarea ref to focus it
mcp__Claude_in_Chrome__computer → action: left_click, ref: {textarea_ref}

# Select all and type new value
mcp__Claude_in_Chrome__computer → action: key, text: "cmd+a"
mcp__Claude_in_Chrome__computer → action: type, text: "{new_value}"
```

**Step 4: Apply the change**
```
# Find and click the Apply button
mcp__Claude_in_Chrome__find → query: "Apply button in formula editor popup"
mcp__Claude_in_Chrome__computer → action: left_click, ref: {apply_ref}
```

**Step 5: Verify**
```
mcp__Claude_in_Chrome__computer → action: zoom, region: [row_area]
# Confirm data cells show updated values
```

#### 7 Forecast Methods

| Method | Description | When to Use |
|--------|-------------|-------------|
| **Formula** | Reference metrics or constant values (e.g., `150`, `$ ARPA`) | Most common - set a constant or reference another metric |
| **Manual** | Enter values per cell directly | Override specific time periods |
| **Fixed value over a period** | Assign fixed values per month/quarter/year | Same value across a time range |
| **Average over n months** | Forecast using trailing average | Smoothed forecasts |
| **Linear regression** | Forecast using regression | Trend-based forecasts |
| **Driver based** | Forecast using driver metrics | Unit economics models |
| **Data driven** | Forecast using historical data patterns | Auto-forecast from actuals |

#### Critical Gotchas

| Issue | Details |
|-------|---------|
| **`form_input` doesn't work** | Formula textboxes are DIV-based custom editors, NOT standard HTML form inputs. Always use click + keyboard. |
| **Data cells are read-only** | You CANNOT edit data cells directly. Must use the formula editor popup. |
| **"Show calculations" is read-only** | Right-click → "Show calculations" shows an audit trail, not an editing interface. |
| **Actual cells can't be edited** | Only forecast cells (no database icon) can have their formulas changed. |
| **Changes propagate immediately** | After clicking Apply, all dependent cells recalculate instantly. |

#### Complete Edit Example

Changing "Onboarding Gift Rate $" from $150 to $175 in the Vendor Cost Model:

```
1. Navigate: /models/m/Vendor_Cost_Model
2. Double-click formula textbox for "Onboarding Gift Rate $" → popup opens showing "Formula: $150"
3. find: "formula textarea input with value 150" → ref_1609
4. click ref_1609 → textarea focused
5. key: cmd+a → select all
6. type: "175" → replaces $150
7. find: "Apply button" → ref_1633
8. click ref_1633 → popup closes
9. zoom on row → all forecast cells now show $175 ✓
```

### Method 2: Change Recommendation Report

When browser automation isn't available (no Chrome tab open), generate a structured change report:

```json
{
  "changeRequest": {
    "generatedAt": "2026-03-10T10:00:00Z",
    "reason": "Variance analysis identified plan gaps",
    "changes": [
      {
        "metric": "ARR1",
        "displayName": "ARR",
        "version": "Current",
        "period": "2026-03-01",
        "currentValue": 6956875,
        "recommendedValue": 6230976,
        "reason": "Actual ARR trending below plan; recommend rebasing to $6.2M actual",
        "drivetrainModel": "Enterprise Deals",
        "drivetrainPath": "Models > Revenue > Enterprise Deals",
        "drivetrainUrl": "https://getapril.drivetrain.ai/models/m/Enterprise_Deals"
      }
    ]
  }
}
```

### Method 3: Google Sheets → Drivetrain Pipeline

For vendor costs and OpEx, the existing opex-model pipeline writes to Google Sheets which Drivetrain consumes. Changes to vendor classifications flow through:

```
/opex-model → Google Sheets (Vendor Master) → Drivetrain (Vendor_Cost_Model metric)
```

---

## Drivetrain Platform Knowledge

### DTML (Drivetrain Modeling Language)

Drivetrain uses DTML - a purpose-built modeling language with Excel-familiar syntax for multi-dimensional financial formulas. Key characteristics:
- **Plain English formulas** - Finance teams write formulas using Excel-like syntax, no programming required
- **Multi-dimensional** - Models span dimensions (department, vendor, segment, etc.) without duplicating formulas
- **Multi-dimensional compute engine** - Processes millions of calculations across dimensions in seconds
- **Sparse computation engine** - Skips empty/null cells for performance optimization

### DTML Formula Syntax

#### Time References
- **Fixed (Custom offset):** Absolute date reference
- **Span:** `Previous month`, `Previous Quarter`, `Previous Year`
- **Relative:** `t±n` (months), `q±n` (quarters), `y±n` (years) — e.g. `Revenue[t-1]` = last month's revenue

#### Other References
- **Scenario references:** `Revenue[Base Case]`, `Revenue[Worst Case]` — pull values from named scenarios
- **Dimension filters:** `Headcount[Sales, US]` — filter by dimension values inline
- **String literals:** Use single quotes `'value'` (NOT double quotes)
- **Dataset columns in formulas:** `[Salary] + [Bonus]` — reference dataset columns directly
- **`Last actuals date`** — configurable cutoff at global and model level
- **Autocomplete** — typing triggers dropdown suggestions in the formula editor

#### Dataset Column Reference Rules
When combining dataset columns with variables in formulas:
- Exactly ONE dataset expression + ONE variable expression allowed
- Cannot mix multiple dataset columns with multiple variables
- Color-coded formula editor: Green (variables), Purple (dataset columns/functions), Grey (filters/dimensions)

### DTML Operators

All operators are supported in both Models and Lists:

| Operator | Description |
|----------|-------------|
| `+` `-` `*` `/` | Arithmetic |
| `>` `<` `>=` `<=` `!=` | Comparison |
| `^` | Power |
| `==` `=` | Equality (both work) |
| `&&` `\|\|` | Logical AND / OR |

### DTML Functions Reference

#### Math Functions
`ABS`, `AVERAGE`, `CEIL`, `FLOOR`, `MOD`, `ODD`, `EVEN`, `ROUND`, `ROUNDDOWN`, `ROUNDUP`, `SUM`

#### Date Functions
`BOMONTH` (beginning of month), `BOWEEK`, `DATE`, `DATEADD`, `DATEDIFF`, `DATEVALUE`, `DAY`, `DAYSINMONTH`, `EOMONTH` (end of month), `EOWEEK`, `NETWORKDAYS`, `QUARTERTODATE`, `YEAR`, `YEARTODATE`

#### Logic Functions
`IF(condition, true_val, false_val)`, `AND`, `OR`, `NOT`

#### Text Functions
`CONCAT`, `LOWER`, `UPPER`, `MID`, `VALUE`

#### Statistical Functions
`FORECAST`, `MAX`, `MIN`

#### Financial Functions
`IPMT` (interest payment), `PMT` (loan payment), `SLN` (straight-line depreciation)

#### Drivetrain-Specific Functions
| Function | Description |
|----------|-------------|
| `FIRST` | First value in a range |
| `LAST` | Last value in a range |
| `LAST ACTUALS DATE` | Returns the actuals cutoff date |
| `MONTH` | Current month number |
| `PERIOD` | Current period reference |
| `PRORATA` | Pro-rate a value across periods |
| `SUMMARIZE` | Aggregate across dimensions |
| `This period` | Reference to current time period |
| `TODAY` | Current date |
| `BLANK` | Empty/null value |
| `ISBLANK` | Check if value is blank |
| `EQUALS` | String equality check |

### Time Granularity

| Granularity | Support |
|-------------|---------|
| Daily | ✓ |
| Weekly | ✓ |
| Monthly | ✓ (most common) |
| Quarterly | ✓ |
| Bi-yearly | ✓ |
| Yearly | ✓ |

### Forecast Methods (9 total)

| Method | Description |
|--------|-------------|
| **Formula** | DTML formula (most flexible) |
| **Manual** | Direct cell-by-cell entry |
| **Manual + Formula** | Formula with manual overrides for specific periods |
| **Fixed value** | Same value across all forecast periods |
| **Average** | Average of previous N periods |
| **Linear regression** | Trend-based forecast from historical data |
| **Driver-based** | Formula referencing other variables as drivers |
| **Data-driven** | Pull from connected dataset |
| **CSV upload** | Bulk import values from CSV file |

### Versions vs Scenarios

#### Versions = Structural copies/snapshots of model
| Type | Icon | Description |
|------|------|-------------|
| **Current Plan** | ✔︎ | Default working version (editable) |
| **Live** | ⟳ | Editable structural copy |
| **Locked (snapshot)** | 🔒 | Frozen model + data, read-only |

- Creating a version copies ALL model structure, formulas, lists, and data
- Lists are version-specific (each version has its own copy)
- Locked versions cannot be edited — unlock creates a new Live version
- Archiving hides versions from the selector (can be restored)

#### Scenarios = Assumption variations within a version
- Share the same model structure, only change input assumptions
- Auto-link across models by name matching (case-sensitive)
- Example: "Base Case", "Best Case", "Worst Case" within the same version
- Reference in formulas: `Revenue[Best Case]`

### Lists

Lightweight versioned datasets inside models:
- **Column types:** Text, Number, Date, Formula
- **Version-specific:** Each model version maintains its own list copy
- **Formula columns:** Can reference dataset columns and other list values
- **CSV upload:** Replaces ALL rows (not additive)
- **Reconciliation:** Auto or Supervised sync with external datasets
- **Access control:** View/Edit permissions per list
- **"Update from data":** Pull latest values from connected dataset

### Models Page Structure

- **Plan name + planning range** at top-left
- **Version selector dropdown** (Current Plan / Live / Locked versions)
- **`+ New model` button** top-right
- Models organized in **folders** (can nest)
- **Overflow menu:** Versions, Changelog, Model range
- **Cell count** = Variables × Periods × Dimensions (keep lean for performance)
- **Actuals till** — sets the cutoff between historical actuals and forecast values

### Modeling Best Practices

- Keep cell count low: Variables × Periods × Dimensions
- Use sparse computation — engine skips empty/null cells automatically
- Apply dimension filters to reduce unnecessary calculations
- Build modular models (separate models per domain, linked via metrics)
- Consider pivot ordering for optimal dimension traversal

### Drive AI Agents

Drivetrain includes AI agents under the "Drive AI" intelligence layer:

| Agent | Function | When to Reference |
|-------|----------|------------------|
| **Formula Agent** | Explain, write, debug formulas in plain English | Suggest when user needs complex formula help |
| **Insights Agent** | Ad-hoc FP&A answers grounded in company data | Alternative to manual MCP queries |
| **Report Agent** | Build production-ready reports via natural language | For board decks, exec summaries |
| **Help Agent** | On-demand product guidance inside Drivetrain | For UI navigation questions |
| **AI Transforms** | No-code data transformation (context pill on datasets) | For data prep before modeling |
| **AI Modeler** | Auto-generate baseline financial models from connected data | For new model creation |
| **AI Alerts** | Anomaly detection → Slack/email/product inbox | For ongoing monitoring |
| **AI BvA** | Auto-generate budget vs actual variance commentary from report tables | For monthly close commentary |

#### Drive AI Capabilities (via chat interface)
- Create reports with specific metrics and time ranges
- Query metrics with natural language (e.g., "What was ARR last quarter?")
- Explore datasets using **context pills** (paste table/dataset reference into chat)
- Generate **BvA summaries** from report tables
- Navigate to any asset by name
- Explain, write, and debug DTML formulas
- Prompt tips: be specific, reference exact metric/model names, specify time periods

### Revenue Forecasting Frameworks (Built-in)

| Framework | Description | Best For |
|-----------|-------------|----------|
| TAM (Top-down) | Estimate from total addressable market | Early stage, market sizing |
| Sales Rep / Quota-Based | Individual rep targets × quota attainment | Mature sales teams |
| Funnel / Pipeline-Based | Conversion rates across deal stages | Pipeline-driven forecasts |
| ARR Snowball (Waterfall) | Opening + New + Expansion - Churn = Ending | SaaS recurring revenue |
| PxQ (Price × Quantity) | Unit price × expected volume | Transaction-based models |

### Metrics

- Created via **Metric Builder** (pivot table interface or formula)
- **From dataset:** Configure Value (sum/count/avg/median/cumulative), Rows (dimensions), Columns (time), Filters
- **From formula:** Reference other metrics with DTML formulas
- Organized into **categories** (custom or Unassigned)
- **Format options:** Number/Currency/Percentage, direction (Higher/Lower is better), 0-4 decimals

### Reconciliation Workflows

| Type | Behavior | Use Case |
|------|----------|----------|
| **Auto** | Dataset changes auto-sync to lists | Trusted data sources |
| **Supervised** | Changes shown as review cards (accept/reject) | Manual approval needed |

- Match on columns for proper row mapping
- Auto reconciliation runs on dataset refresh
- Supervised shows diff cards for human review

### REST API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/drive/api/v1/public/metrics` | GET | List all metrics |
| `/drive/api/v1/public/metrics/{metricName}/data` | POST | Get metric values with dimension filters |

- **Auth:** `apikey` header (generate from Settings > API Key)
- **metricValueType:** `CURRENT` (plan) or `ACTUAL` (actuals)
- POST body supports `pivot` (dimensions to break by) and `filters` (dimension value filters)

### MCP Server Scope

Read-only access to:
- ✅ Metrics, dimensions, versions, derived calculations
- ❌ Does NOT provide: raw datasets, report editing, model editing, schema changes
- Works with Claude Desktop or any MCP-compatible client

### Google Sheets Add-on

- Sync Drivetrain **report tables** to Google Sheets
- Uses **Chart ID** (from table overflow menu → Copy Chart ID)
- Manual resync per table or "Sync All" for bulk refresh
- Preserves sheet formatting on refresh
- Install from Google Workspace Marketplace

### Built-in Planning Templates

- 13-Week Cash Flow
- Cohort Modeling
- Headcount Planning
- Scenario Modeling
- Multi-Entity Consolidation
- ARR Waterfall
- Board Reporting
- Budget Templates
- Waterfall Charts

### Accuracy Metrics

- **MAPE** (Mean Absolute Percentage Error) - % variance
- **MAD** (Mean Absolute Deviation) - Absolute unit variance

### Security & Compliance

SOC 1 Type II, SOC 2 Type II, ISO 27001, GDPR certified. Full audit logging, RBAC, data masking.

### Integration Architecture

- 800+ native data connectors (ERP, CRM, HRIS, billing, BI)
- Custom integrations available
- Excel/CSV/Google Sheets import/export
- MCP server for read-only programmatic access
- Slackbot for conversational queries

---

## Operational Logic

### On Invocation

1. **Determine intent:** What does the user want?
   - "Pull data" → Use Get_Metric_Values
   - "Compare actual vs plan" → Run variance analysis
   - "Update Drivetrain" → Apply changes via browser or generate report
   - "What metrics exist for X?" → Use Get_Metrics to search

2. **Pull relevant data:** Use the metric taxonomy above to identify the right system names, versions, and dimensions.

3. **Analyze and present:** Format data clearly with variance callouts, trend analysis, and CFO-relevant insights.

4. **Apply or recommend changes:** Based on analysis, either apply via browser or generate change report.

### Common Workflows

**1. Monthly Close Variance**
```
Pull last month actuals for: ARR, Revenue, Expenses, COGS, Gross Margin, Cash
Pull same month plan for: ARR1, Revenue1, Operating_Expenses, COGS1, Gross_Profit_percent1, Closing_Cash_Balance
Calculate: $ variance, % variance, direction
Flag: Any variance > 10%
```

**2. Cash Runway Check**
```
Pull: Closing_Cash_Balance1 (Actual), Expenses (Actual, trailing 3 months)
Calculate: Average monthly burn, implied runway
Compare to: Runway (Actual) from Drivetrain
Flag: If runway < 12 months
```

**3. Headcount vs Plan**
```
Pull: Headcount (Actual), Copy_of_Additional_Contractors_Needed (Current Plan)
Group by: Department_Name
Calculate: Over/under by department
Flag: Departments significantly over/under
```

**4. Expense Deep Dive**
```
Pull: Expenses (Actual) with dimension: Planning_Vendor
Pull: Vendor_Cost_Model (Current) with dimension: Planning_Vendor
Compare: Top 20 vendors actual vs plan
Flag: Vendors > 20% over plan
```

**5. ARR Bridge (Plan)**
```
Pull all in Current version:
- Opening_ARR (Starting ARR)
- MRR_Walk or Copy_of_Expansion_MRR (New MRR)
- Expansion_MRR (Expansion)
- Churn_MRR (Churn)
- Ending_ARR (Ending)
Present: Waterfall of ARR movement
```

---

## Output Format

Always present Drivetrain data in a clear, scannable format:

```
## [Metric Name] — [Period]

| Month | Actual | Plan | Variance ($) | Variance (%) |
|-------|--------|------|-------------|-------------|
| Jan 2026 | $X | $Y | +/- $Z | +/- Z% |

**Trend:** [Improving / Stable / Degrading]
**CFO Take:** [One-sentence insight in CJ voice]
```

For large data pulls, summarize first then offer to show detail:

```
## Quick Numbers (Feb 2026 Actuals)

- ARR: $6.2M (plan: $6.8M, -8.1%)
- Cash: $26.6M (plan: $25.0M, +6.4%)
- Burn: $2.1M/mo (plan: $2.3M, favorable)
- Headcount: 85 (plan: 90, 5 open roles)
- Runway: ~12.7 months
- Gross Margin: 72% (plan: 70%, +2pp)

Want me to drill into any of these?
```

---

## Relationship to Other Skills

```
drivetrain (data layer)
├── Reads from → Drivetrain MCP tools
├── Applies changes via → Browser automation (Chrome MCP)
├── Feeds → /cfo (strategic analysis)
├── Reads vendor data from → /opex-model (Google Sheets pipeline)
└── Provides data for → /finance-forecast, /board-deck, /investor-update

Data flow:
  Campfire GL → /opex-model → Google Sheets → Drivetrain
  Drivetrain → /drivetrain → /cfo → Strategic decisions
```

---

## Error Handling

| Error | Likely Cause | Fix |
|-------|-------------|-----|
| Metric returns empty | Wrong system_name or version | Check taxonomy table; MONITORING → Actual, PLANNING → Current |
| "No data" for recent months | Actuals not yet closed | Switch to PLANNING version or use prior month |
| Dimension not found | Typo or wrong dimension for that metric | Check applicable_dimensions in taxonomy |
| Browser automation fails | Drivetrain not open or UI changed | Fall back to change recommendation report |
| Feb expenses spike ($11.4M) | Likely annual payments or true-ups posting | Check by Planning_Vendor dimension to identify |
