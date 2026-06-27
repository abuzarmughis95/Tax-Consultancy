"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";
import { Icon } from "./icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          width={16}
          height={16}
          className={i < rating ? "" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Trusted by startups, SMEs, NGOs, and overseas clients for reliable
            tax and compliance services.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/60 p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/70"
              >
                <Icon
                  name="quote"
                  width={40}
                  height={40}
                  className="text-brand/15"
                />
                <Stars rating={t.rating} />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </span>
                    <span className="text-xs text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
