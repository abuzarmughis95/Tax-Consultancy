"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { Icon, type IconName } from "./icons";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete tax, corporate & regulatory solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From company formation to ongoing compliance, we handle the entire
            process so you can focus on growing your business.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-accent/10 text-brand-dark transition-colors group-hover:from-brand group-hover:to-accent group-hover:text-white">
                  <Icon name={s.icon as IconName} width={28} height={28} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {s.items.slice(0, 5).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Icon
                        name="check"
                        width={15}
                        height={15}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {item}
                    </li>
                  ))}
                  {s.items.length > 5 && (
                    <li className="pl-6 text-sm font-medium text-brand-dark">
                      + {s.items.length - 5} more
                    </li>
                  )}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
