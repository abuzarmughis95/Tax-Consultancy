// Regulatory authorities & platforms we work with / are registered with.
// `logo` points to a file in /public. Files that don't exist yet fall back to
// a text badge automatically (see components/TrustStrip.tsx) — just drop a
// matching image into /public to replace the badge with a real logo.

export type Authority = {
  name: string;
  full: string;
  logo: string;
};

export const authorities: Authority[] = [
  { name: "FBR", full: "Federal Board of Revenue", logo: "/fbr.jpg" },
  { name: "PRA", full: "Punjab Revenue Authority", logo: "/pra.png" },
  { name: "KPRA", full: "Khyber Pakhtunkhwa Revenue Authority", logo: "/kpra.jpg" },
  { name: "SRB", full: "Sindh Revenue Board", logo: "/srb.jpg" },
  { name: "BRA", full: "Balochistan Revenue Authority", logo: "/bra.png" },
  { name: "SECP", full: "Securities & Exchange Commission of Pakistan", logo: "/secp.jpg" },
  { name: "PSW", full: "Pakistan Single Window", logo: "/psw.png" },
  { name: "NADRA", full: "National Database & Registration Authority", logo: "/nadra.png" },
  { name: "PEC", full: "Pakistan Engineering Council", logo: "/pec.png" },
  { name: "DNFBP", full: "Designated Non-Financial Businesses & Professions", logo: "/dnfbp.png" },
  { name: "PPRA", full: "Public Procurement Regulatory Authority", logo: "/ppra.png" },
  { name: "Chamber of Commerce", full: "Chambers of Commerce (RCCI, LCCI, etc.)", logo: "/chamber.png" },
];
