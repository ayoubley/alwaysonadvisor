import { Mark } from "./Mark";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Advisor", href: "#product" },
      { label: "Platform", href: "#platform" },
      { label: "How it works", href: "#how" },
      { label: "Use cases", href: "#use-cases" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Vision", href: "#vision" },
      { label: "Always on", href: "#always-on" },
      { label: "Get started", href: "#start" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <a href="#top" className="flex items-center gap-2.5">
              <Mark size={24} className="text-gold-400" />
              <span className="text-[15px] font-semibold tracking-tight text-fog-100">
                AlwaysOn<span className="text-fog-300">Advisor</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-fog-400">
              Your always-on intelligence — an AI advisor for context, analysis, recommendations,
              and decision support.
            </p>
            <p className="mt-6 text-[12.5px] leading-relaxed text-fog-500">
              AlwaysOnAdvisor provides informational insights and decision support. It is not a
              substitute for licensed financial, legal, or professional advice.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-fog-400">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-fog-300 transition-colors duration-300 hover:text-fog-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-fog-400">
              Contact
            </h4>
            <a
              href="mailto:hello@alwaysonadvisor.com"
              className="mt-4 inline-block text-[14px] text-fog-300 transition-colors hover:text-fog-100"
            >
              hello@alwaysonadvisor.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-fog-500">© 2025 AlwaysOnAdvisor. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[12.5px] text-fog-500">
            <a href="#top" className="transition-colors hover:text-fog-300">Privacy</a>
            <a href="#top" className="transition-colors hover:text-fog-300">Terms</a>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-300/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
