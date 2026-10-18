"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#why", label: "About" },
  { href: "#explores", label: "Themes" },
  { href: "#speakers", label: "Speakers" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ivory/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="wrap flex h-20 items-center justify-between gap-6" aria-label="Main">
        <a href="#top" className="flex shrink-0 items-center gap-3 font-display text-xl font-semibold tracking-wide text-ink">
          <Image src="/staad-logo.png" alt="STAAD logo" width={46} height={46} priority className="h-[46px] w-[46px]" />
          <span>
            PSYVERSE <span className="font-bold text-purple italic">2026</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#register" className="btn-primary hidden !px-6 !py-3 sm:inline-flex">
            Reserve Your Seat
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="wrap pb-6 xl:hidden">
          <ul className="flex flex-col gap-1 border-t border-line pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-ink hover:bg-beige">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#register" onClick={() => setOpen(false)} className="btn-primary w-full">
                Reserve Your Seat
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
