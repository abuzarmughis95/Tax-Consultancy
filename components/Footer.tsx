import Image from "next/image";
import {
  navLinks,
  site,
  telLink,
  landlineLink,
  mailLink,
  whatsappLink,
} from "@/lib/site";
import { services } from "@/lib/services";
import { Icon } from "./icons";

const GOLD = "#c8a24a";

export default function Footer() {
  const year = 2026; // static to keep the build deterministic; update as needed

  const socials = [
    { href: whatsappLink, label: "WhatsApp", icon: "whatsapp" as const, external: true },
    { href: telLink, label: "Call mobile", icon: "phone" as const },
    { href: landlineLink, label: "Call landline", icon: "landline" as const },
    { href: mailLink, label: "Email", icon: "mail" as const },
  ];

  const contact = [
    { icon: "phone" as const, value: site.phone, href: telLink },
    { icon: "landline" as const, value: site.landline, href: landlineLink },
    { icon: "mail" as const, value: site.email, href: mailLink },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* decorative gold/brand glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#c8a24a]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* watermark logo */}
      <Image
        src="/logo-graph-mark-white.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={500}
        className="pointer-events-none absolute -bottom-10 right-4 hidden w-72 select-none opacity-[0.05] lg:block lg:w-96"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* CTA band */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 py-12 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to simplify your tax & compliance?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Talk to our experts today — fast, reliable, and transparent.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:shadow-brand/50 hover:brightness-110 active:scale-95"
          >
            <Icon name="whatsapp" width={20} height={20} />
            Get a Free Consultation
          </a>
        </div>

        {/* main columns */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-graph-mark-white.png"
                alt=""
                width={520}
                height={500}
                className="h-11 w-auto"
              />
              <Image
                src="/text-logo-white.png"
                alt={site.name}
                width={1240}
                height={230}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Comprehensive tax, corporate, and regulatory consultancy services
              for startups, SMEs, NGOs, and international firms across{" "}
              {site.country}.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[#c8a24a]/50 hover:bg-white/10 hover:text-[#c8a24a]"
                >
                  <Icon name={s.icon} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="footer-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              {contact.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href}
                    className="group flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#c8a24a] transition-colors group-hover:border-[#c8a24a]/40">
                      <Icon name={c.icon} width={16} height={16} />
                    </span>
                    <span className="break-all pt-2">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <span style={{ color: GOLD }}>Advise</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span style={{ color: GOLD }}>Plan</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span style={{ color: GOLD }}>Grow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
