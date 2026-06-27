"use client";

import { motion } from "framer-motion";
import { site, whatsappLink, telLink } from "@/lib/site";
import { Icon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  "Expert Tax Filing",
  "SECP Compliance",
  "Company Registration",
  "Licensing Services",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="animate-float absolute top-40 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl [animation-delay:-3s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-dark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted Tax & Corporate Consultants in {site.country}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                Tax Preparation
              </span>{" "}
              Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/40 active:scale-95"
              >
                <Icon name="whatsapp" width={20} height={20} />
                Chat on WhatsApp
              </a>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand hover:text-brand-dark active:scale-95"
              >
                <Icon name="phone" width={18} height={18} />
                {site.phone}
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {highlights.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <Icon name="check" width={16} height={16} className="text-accent" />
                  {h}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-2xl shadow-slate-300/40 backdrop-blur">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Burney Tomar Tax Consultants
                </p>
                <p className="mt-2 text-2xl font-bold">Your Compliance Partner</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "7+", v: "Service Areas" },
                    { k: "100%", v: "Compliance" },
                    { k: "PK", v: "Nationwide" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-xl bg-white/5 p-3 text-center">
                      <div className="text-xl font-bold text-accent">{s.k}</div>
                      <div className="mt-1 text-[11px] text-slate-400">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {["FBR · NTN & Tax Returns", "SECP · Corporate Filings", "WeBOC / PSW · Trade"].map(
                  (row, i) => (
                    <motion.div
                      key={row}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.12, ease }}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand-dark">
                        <Icon name="check" width={18} height={18} />
                      </span>
                      <span className="text-sm font-medium text-slate-700">{row}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
