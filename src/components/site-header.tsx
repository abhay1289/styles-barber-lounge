"use client";

import { useEffect, useState } from "react";
import { BrandLockup, BOOK_URL } from "./brand";

const links = [
  { href: "#top", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#space", label: "The Space" },
  { href: "#location", label: "Locations" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a href="#top" className="relative z-10" aria-label="Styles Barber Lounge home">
          <BrandLockup />
        </a>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-royal px-5 py-2.5 text-sm font-medium text-snow transition hover:brightness-110 sm:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-snow/20 text-snow"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-snow transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-snow transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-snow transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className={`fixed inset-0 z-0 bg-void/95 pt-[72px] transition ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-10 md:px-8" aria-label="Site">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display border-b border-snow/10 py-4 text-3xl text-snow transition hover:text-royal"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit rounded-full bg-royal px-6 py-3 text-sm font-medium text-snow"
          >
            Book Your Chair
          </a>
        </nav>
      </div>
    </header>
  );
}
