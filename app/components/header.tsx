"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;


const linkStyles =
  "text-slate-text transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none";

function Logo() {
  return (
    <Link
      href="#"
      aria-label="Home"
      className="relative grid h-11 w-10 place-items-center text-xl font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <polygon
          points="50,3 97,26 97,74 50,97 3,74 3,26"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative">S</span>
    </Link>
  );
}

function NavItems({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <>
      {NAV_LINKS.map(({ href, label }, i) => (
        <Link
          key={href}
          href={href}
          onClick={onNavigate}
          className={`${linkStyles} ${className}`}
        >
          <span className="mr-1 text-accent">
            {String(i + 1).padStart(2, "0")}.
          </span>
          {label}
        </Link>
      ))}
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="rounded border border-accent px-4 py-3 text-accent transition-colors hover:bg-accent/10 focus-visible:bg-accent/10 focus-visible:outline-none"
      >
        Resume
      </Link>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Escape to close + lock body scroll while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-[70px] items-center justify-between bg-navy/90 px-6 backdrop-blur-md sm:h-[100px] sm:px-12">
      <Logo />

      {/* Desktop nav */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-8 font-mono text-xs sm:flex"
      >
        <NavItems />
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-accent sm:hidden"
      >
        <span
          className={`h-px bg-accent transition-all duration-300 ${
            open ? "w-7 translate-y-[7px] rotate-45" : "w-7"
          }`}
        />
        <span
          className={`h-px bg-accent transition-all duration-300 ${
            open ? "w-0 opacity-0" : "w-5"
          }`}
        />
        <span
          className={`h-px bg-accent transition-all duration-300 ${
            open ? "w-7 -translate-y-[7px] -rotate-45" : "w-7"
          }`}
        />
      </button>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 sm:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={close}
          className="absolute inset-0 bg-black/50"
        />
        <nav
          aria-label="Mobile"
          className="absolute inset-y-0 right-0 flex w-[min(75vw,400px)] flex-col items-center justify-center gap-8 bg-navy-light px-8 font-mono text-sm shadow-2xl"
        >
          <NavItems
            onNavigate={close}
            className="flex flex-col items-center gap-1"
          />
        </nav>
      </div>
    </header>
  );
}
