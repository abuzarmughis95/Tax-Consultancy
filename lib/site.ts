// Central business / brand config. Edit values here to update the whole site.

export const site = {
  name: "Burney Tomar Tax Consultants",
  shortName: "Burney Tomar",
  tagline: "Professional Tax Preparation Service",
  description:
    "Burney Tomar Tax Consultants is a professional firm providing comprehensive tax, corporate, and regulatory consultancy services across Pakistan — expert tax filing, SECP compliance, company registration, licensing, and business advisory.",
  // Update this to your real deployed domain for correct SEO/canonical URLs.
  url: "https://burneytomar.com",
  phone: "0315-4337860",
  phoneIntl: "+923154337860", // used for tel: and WhatsApp links
  landline: "042-36442954",
  landlineIntl: "+924236442954",
  email: "rimsha.abuzar1@gmail.com",
  country: "Pakistan",
  whatsappMessage:
    "Hello Burney Tomar Tax Consultants, I'd like to enquire about your services.",
} as const;

export const whatsappLink = `https://wa.me/${site.phoneIntl.replace(
  "+",
  ""
)}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const telLink = `tel:${site.phoneIntl}`;
export const landlineLink = `tel:${site.landlineIntl}`;
export const mailLink = `mailto:${site.email}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
