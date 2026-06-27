"use client";

import { useEffect, useState } from "react";

// Scrollspy: returns the id of the section currently in view, given a list of
// hrefs like ["#home", "#about", ...]. Used to highlight the active nav link.
export function useActiveSection(hrefs: readonly string[]) {
  const [active, setActive] = useState<string>(hrefs[0] ?? "");

  useEffect(() => {
    const ids = hrefs.map((h) => h.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Track how much of each section is visible; the most-visible one wins.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0 && bestId) {
          setActive(`#${bestId}`);
        }
      },
      {
        // Bias the "active" zone toward the upper-middle of the viewport so the
        // header highlight updates as a section scrolls under it.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [hrefs]);

  return active;
}
