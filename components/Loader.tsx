"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAVY = "#0f172a";
const GOLD = "#c8a24a";

// Bar geometry (matches the brand graph): increasing heights, sitting on a baseline.
const bars = [
  { x: 70, w: 26, h: 38 },
  { x: 108, w: 26, h: 70 },
  { x: 146, w: 26, h: 104 },
  { x: 184, w: 26, h: 150 },
];
const BASE_Y = 200; // baseline

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Hide loader after the animation completes (or quickly if already cached).
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
            {/* baseline */}
            <motion.line
              x1="50"
              y1={BASE_Y}
              x2="230"
              y2={BASE_Y}
              stroke={NAVY}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* bars filling upward in sequence */}
            {bars.map((b, i) => (
              <motion.rect
                key={i}
                x={b.x}
                width={b.w}
                rx="3"
                fill={NAVY}
                initial={{ height: 0, y: BASE_Y }}
                animate={{ height: b.h, y: BASE_Y - b.h }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* gold growth arrow drawing across as bars fill */}
            <motion.path
              d="M58 178 C 110 168, 150 120, 210 55"
              stroke={GOLD}
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
            />
            {/* arrow head (single filled triangle) */}
            <motion.path
              d="M210 55 L 191 60 L 201 73 Z"
              fill={GOLD}
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.45 }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
