// All service categories and their items, extracted from the company profile.

export type Service = {
  id: string;
  title: string;
  icon: string; // key resolved in components/icons.tsx
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "business-registration",
    title: "Business & Company Registration",
    icon: "building",
    summary:
      "Legal registration and business formation under the required legal structures in Pakistan — we manage the entire process end to end.",
    items: [
      "Registration of Private Limited Companies with SECP",
      "Formation of Single Member Companies (SMC-Pvt Ltd)",
      "Partnership Firm Registration through Registrar of Firms",
      "Sole Proprietorship Setup through FBR",
      "Registration of NGOs, Welfare Societies, and Trusts",
      "Branch and Liaison Office Setup for Foreign Companies",
    ],
  },
  {
    id: "taxation",
    title: "Taxation & Compliance Services",
    icon: "receipt",
    summary:
      "A full range of tax services for individuals, businesses, and associations to ensure compliance and optimize tax positions.",
    items: [
      "NTN (National Tax Number) Registration",
      "Sales Tax Registration with FBR, PRA, SRB & other authorities",
      "Annual Income Tax Return Filing for all categories",
      "Wealth Statement Preparation and Filing",
      "Monthly Sales Tax Returns and Annexure Filing",
      "Income Tax Refund and Adjustment Claims",
      "Withholding Tax Reconciliation",
      "Applications for Tax Exemptions under relevant clauses",
      "Strategic tax planning and compliance guidance",
    ],
  },
  {
    id: "secp-compliance",
    title: "Corporate Compliance (SECP)",
    icon: "shield",
    summary:
      "Keep your company in good standing with the SECP through timely and accurate corporate compliance.",
    items: [
      "Annual Filings (Form A, Form 29, Auditor's Reports)",
      "Share Transfers and Issuance of New Shares",
      "Change or Resignation of Directors",
      "Amendments to Company Name or Objectives",
      "Changes in Capital Structure",
      "Company Dissolution or Winding Up",
      "Drafting and Filing of MOA/AOA Amendments",
    ],
  },
  {
    id: "licensing",
    title: "Licensing & Regulatory Services",
    icon: "certificate",
    summary:
      "Obtain essential licenses and registrations from government bodies to operate legally in Pakistan.",
    items: [
      "Chambers of Commerce Memberships (RCCI, LCCI, etc.)",
      "Pakistan Single Window (PSW) registration for trade",
      "Import/Export Licensing through WeBOC and PSW",
      "Trademark, Copyright & Patent Registration (IPO Pakistan)",
      "DRAP Licensing for Pharmaceuticals & Medical Devices",
      "PEC Registration for Engineers and Contractors",
      "Provincial Tax Authorities Licensing (PRA, SRB, etc.)",
      "Food Authority Licenses (Punjab, Sindh, etc.)",
      "Trade and Shop Establishment Licensing",
      "Software Export Certification (PSEB, P@SHA)",
      "Labour Department, EOBI & Social Security Registration",
    ],
  },
  {
    id: "import-export",
    title: "Import & Export Facilitation",
    icon: "globe",
    summary:
      "Complete documentation, regulatory compliance, and customs support for international trade.",
    items: [
      "WeBOC Account Registration and Setup",
      "PSW Activation and NTN Integration",
      "Filing of Import General Manifests (IGM)",
      "Issuance of E-Forms for Export Activities",
      "Bank Contract Registration for Exports",
      "Letter of Credit (LC) Guidance & Documentation",
      "Classification of Goods under HS Codes",
      "Guidance and Liaison for Customs Clearance",
      "Filing of Goods Declaration (GD)",
    ],
  },
  {
    id: "advisory",
    title: "Business Advisory & Documentation",
    icon: "chart",
    summary:
      "Strategic and operational consultancy to help you build sustainable growth and strong governance.",
    items: [
      "Feasibility Reports and Business Plans",
      "Legal Agreements (MOUs, NDAs, Partnership Deeds)",
      "Board Resolutions and Internal Policies",
      "Internal Audits and Compliance Reviews",
      "ISO Certification assistance",
      "Preparation of Financial Statements",
      "Liaison & Coordination for External Audits",
      "Business Valuation and Due Diligence",
      "Foreign Direct Investment (FDI) advisory",
    ],
  },
  {
    id: "payroll",
    title: "Employee & Payroll Services",
    icon: "users",
    summary:
      "Manage employee records, payroll processes, and legal HR compliance with confidence.",
    items: [
      "Monthly Payroll Management and Tax Deductions",
      "Filing of Salary-related Tax Returns",
      "EOBI and Social Security Registration & Compliance",
      "Drafting of Employment Contracts",
      "HR Policies, SOPs, and Compliance Manuals",
    ],
  },
];

export const whyUs: { title: string; description: string; icon: string }[] = [
  {
    title: "Experienced Professionals",
    description:
      "Qualified experts with deep knowledge of Pakistani tax law, SECP regulations, and compliance.",
    icon: "badge",
  },
  {
    title: "End-to-End Solutions",
    description:
      "Complete business, tax, and regulatory services under one roof — from setup to ongoing compliance.",
    icon: "layers",
  },
  {
    title: "Nationwide Coverage",
    description:
      "We serve startups, SMEs, NGOs, and international firms across all of Pakistan.",
    icon: "map",
  },
  {
    title: "Transparent Process",
    description:
      "Timely, accurate, and transparent processes with personalized support for every client.",
    icon: "sparkle",
  },
];
