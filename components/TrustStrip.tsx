"use client";

import { useState } from "react";
import Image from "next/image";
import { authorities, type Authority } from "@/lib/authorities";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

// One logo tile. If the image file is missing/broken, it gracefully falls back
// to a clean text badge so the strip always looks complete.
function LogoTile({ a }: { a: Authority }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="group relative flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
      {errored ? (
        <span className="text-center text-sm font-bold tracking-wide text-slate-600 transition-colors group-hover:text-brand-dark">
          {a.name}
        </span>
      ) : (
        <Image
          src={a.logo}
          alt={`${a.full} (${a.name})`}
          width={120}
          height={64}
          onError={() => setErrored(true)}
          className="max-h-14 w-auto object-contain opacity-90 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      )}

      {/* Styled tooltip with the authority's full name */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[220px] -translate-x-1/2 translate-y-1 rounded-lg bg-slate-900 px-3 py-2 text-center text-xs font-medium leading-snug text-white opacity-0 shadow-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="text-[#c8a24a]">{a.name}</span>
        <span className="mt-0.5 block text-[11px] font-normal text-slate-300">
          {a.full}
        </span>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-slate-900"
        />
      </span>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      id="registrations"
      className="border-y border-slate-200 bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Registered With & Integrated
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Trusted across Pakistan&apos;s key authorities & platforms
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We handle filings, registrations, and integrations with all major
            federal and provincial regulatory bodies.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {authorities.map((a) => (
            <StaggerItem key={a.name}>
              <LogoTile a={a} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
