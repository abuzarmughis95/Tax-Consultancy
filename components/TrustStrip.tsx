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
    <div
      title={a.full}
      className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      {errored ? (
        <span className="text-center text-sm font-bold tracking-wide text-slate-600">
          {a.name}
        </span>
      ) : (
        <Image
          src={a.logo}
          alt={`${a.full} (${a.name})`}
          width={120}
          height={64}
          onError={() => setErrored(true)}
          className="max-h-14 w-auto object-contain opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
      )}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      id="registrations"
      className="scroll-mt-20 border-y border-slate-200 bg-white py-16 lg:py-20"
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
