"use client";

import { motion } from "framer-motion";
import { site, whatsappLink, telLink, landlineLink, mailLink } from "@/lib/site";
import { Reveal } from "./motion";
import { Icon, type IconName } from "./icons";

const channels: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: whatsappLink,
    external: true,
    primary: true,
  },
  {
    icon: "phone",
    label: "Mobile",
    value: site.phone,
    href: telLink,
  },
  {
    icon: "landline",
    label: "Landline",
    value: site.landline,
    href: landlineLink,
  },
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: mailLink,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-brand-dark px-6 py-14 shadow-2xl sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Get In Touch
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s handle your tax & compliance
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Reach out today for expert advice and reliable service. We respond
                quickly on WhatsApp, phone, and email.
              </p>
            </div>

            <div className="relative mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group flex flex-col items-center rounded-2xl border p-6 text-center transition-colors ${
                    c.primary
                      ? "border-accent/40 bg-accent/15 hover:bg-accent/25"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      c.primary
                        ? "bg-accent text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon name={c.icon} width={24} height={24} />
                  </span>
                  <span className="mt-4 text-sm font-semibold text-white">
                    {c.label}
                  </span>
                  <span className="mt-1 break-all text-xs text-slate-300">
                    {c.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
