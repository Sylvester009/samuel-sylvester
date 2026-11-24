"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const JOBS = [
  {
    id: "ductape",
    tab: "Ductape",
    title: "Frontend Developer",
    company: "Ductape Technologies",
    period: "December 2024 – January 2026",
    location: "Remote, Nigeria",
    bullets: [
      "Implemented workspace roles and permissions, including frontend workflows for managing access across the application.",
      "Built workspace suspension and restoration interfaces, integrating REST APIs and handling loading, success, and error states.",
      "Developed billing interfaces and admin dashboard features with React, TypeScript, Tailwind CSS, and shadcn/ui.",
      "Redesigned the login experience and contributed to authentication flows across the application.",
      "Built forms and validation with React Hook Form and Zod, and integrated REST APIs using TanStack Query.",
      "Created reusable UI components, data tables, and filtering interfaces, collaborating with designers and backend developers.",
    ],
  },
] as const;

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = JOBS.length - 1;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        select(active === last ? 0 : active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        select(active === 0 ? last : active - 1);
        break;
      case "Home":
        e.preventDefault();
        select(0);
        break;
      case "End":
        e.preventDefault();
        select(last);
        break;
    }
  };

  const job = JOBS[active];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[700px] scroll-mt-24 py-24 sm:scroll-mt-28 sm:py-32"
    >
      <h2 className="mb-10 flex items-center whitespace-nowrap text-[clamp(26px,5vw,32px)] font-bold text-[#ccd6f6]">
        <span className="mr-2 font-mono text-lg font-normal text-[#64ffda]">02.</span>
        Where I&apos;ve Worked
        <span className="ml-5 h-px w-full max-w-[300px] bg-[#233554]" />
      </h2>

      <div className="flex flex-col sm:flex-row">
        <div
          role="tablist"
          aria-label="Job history"
          onKeyDown={onKeyDown}
          className="mb-6 flex overflow-x-auto border-b border-line sm:mb-0 sm:w-[170px] sm:shrink-0 sm:flex-col sm:border-b-0 sm:border-l"
        >
          {JOBS.map((j, i) => {
            const selected = i === active;
            return (
              <button
                key={j.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${j.id}`}
                aria-selected={selected}
                aria-controls={`panel-${j.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`min-w-[120px] whitespace-nowrap border-b-2 px-4 py-3 text-left font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:border-b-0 sm:border-l-2 ${
                  selected
                    ? "border-accent bg-navy-light text-accent"
                    : "border-transparent text-slate-muted hover:bg-navy-light hover:text-accent"
                }`}
              >
                {j.tab}
              </button>
            );
          })}
        </div>

        <div
          key={job.id}
          role="tabpanel"
          id={`panel-${job.id}`}
          aria-labelledby={`tab-${job.id}`}
          tabIndex={0}
          className="min-h-[320px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:ml-5"
        >
          <h3 className="text-xl font-semibold text-slate-text">
            {job.title}{" "}
            <span className="text-accent">@ {job.company}</span>
          </h3>
          <p className="mt-2 font-mono text-xs text-slate-muted">
            {job.period} · {job.location}
          </p>
          <ul className="mt-5 space-y-3 text-[15px]">
            {job.bullets.map((item) => (
              <li
                key={item}
                className="before:mr-3 before:text-accent before:content-['▹']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}