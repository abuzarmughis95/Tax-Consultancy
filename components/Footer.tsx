import { navLinks, site, telLink, mailLink, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { Icon } from "./icons";

export default function Footer() {
  const year = 2026; // static to keep the build deterministic; update as needed

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent font-bold text-white">
                BT
              </span>
              <span className="text-base font-semibold text-slate-900">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Comprehensive tax, corporate, and regulatory consultancy services
              for startups, SMEs, NGOs, and international firms across {site.country}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand hover:text-brand-dark"
              >
                <Icon name="whatsapp" width={20} height={20} />
              </a>
              <a
                href={telLink}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand hover:text-brand-dark"
              >
                <Icon name="phone" width={18} height={18} />
              </a>
              <a
                href={mailLink}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-brand hover:text-brand-dark"
              >
                <Icon name="mail" width={18} height={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 transition hover:text-brand-dark"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 transition hover:text-brand-dark"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            {site.phone} · {site.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
