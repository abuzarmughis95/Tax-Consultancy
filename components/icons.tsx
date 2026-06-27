// Lightweight inline SVG icon set (no external icon dependency).
// Stroke-based, inherits currentColor.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icons = {
  building: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M19 21V9a2 2 0 0 0-2-2h-2" />
      <path d="M9 7h.01M9 11h.01M9 15h.01" />
    </svg>
  ),
  receipt: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1V3l-2 1-2-1-2 1-2-1-2 1-2-1Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  certificate: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-1.5 7L12 19l4.5 2L15 14" />
      <path d="m9.5 9 1.5 1.5L14 7.5" />
    </svg>
  ),
  globe: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  ),
  chart: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-3 3 3 5-6" />
    </svg>
  ),
  users: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  badge: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 2 3 5v6c0 5 3.8 8.6 9 11 5.2-2.4 9-6 9-11V5l-9-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  layers: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  map: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  sparkle: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg {...base(p)} strokeWidth={0} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.96 3.85Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base(p)} strokeWidth={2.25}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  ),
  arrowUp: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icons;

export function Icon({ name, ...rest }: { name: IconName } & IconProps) {
  const C = Icons[name] ?? Icons.sparkle;
  return <C {...rest} />;
}
