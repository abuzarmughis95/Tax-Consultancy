"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/services";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { Icon, type IconName } from "./icons";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 overflow-hidden py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Why Work With Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Reliable service, every step of the way
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <StaggerItem key={w.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col items-start rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/30">
                  <Icon name={w.icon as IconName} width={28} height={28} />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {w.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
