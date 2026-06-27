"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { Icon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <a
          href="#home"
          aria-label={site.name}
          className="group flex items-center"
        >
          <Image
            src="/logo-graph.png"
            alt=""
            width={1500}
            height={1000}
            priority
            className="h-11 w-auto shrink-0 transition-transform group-hover:scale-105 lg:h-12"
          />
          <Image
            src="/text-logo.png"
            alt={site.name}
            width={1240}
            height={230}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-dark"
                      : "text-slate-600 hover:text-brand-dark"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/40 active:scale-95"
          >
            <Icon name="whatsapp" width={18} height={18} />
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((l) => {
                const isActive = active === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => {
                        // Close the menu first (which unlocks body scroll), then
                        // scroll manually on the next frame so the offset is
                        // computed against the unlocked page — not the locked one.
                        e.preventDefault();
                        setOpen(false);
                        const target = document.getElementById(
                          l.href.replace("#", "")
                        );
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            target?.scrollIntoView({ behavior: "smooth" });
                            history.replaceState(null, "", l.href);
                          });
                        });
                      }}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-brand/10 text-brand-dark"
                          : "text-slate-700 hover:bg-slate-50 hover:text-brand-dark"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold text-white shadow-lg shadow-brand/30"
                >
                  <Icon name="whatsapp" width={18} height={18} />
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
