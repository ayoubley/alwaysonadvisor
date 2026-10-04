import { Eyebrow, Reveal } from "./Reveal";

function Dial() {
  const ticks = Array.from({ length: 60 });
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* soft halo */}
      <div className="absolute inset-[-12%] rounded-full bg-gold-400/[0.05] blur-[60px]" />

      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <linearGradient id="hand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0ddbc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d8b78e" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0ddbc" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#d8b78e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#d8b78e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* tick marks */}
        {ticks.map((_, i) => {
          const major = i % 5 === 0;
          const a = (i / 60) * Math.PI * 2;
          const r1 = major ? 82 : 86;
          const r2 = 91;
          return (
            <line
              key={i}
              x1={100 + Math.cos(a) * r1}
              y1={100 + Math.sin(a) * r1}
              x2={100 + Math.cos(a) * r2}
              y2={100 + Math.sin(a) * r2}
              stroke={major ? "rgba(216,183,142,0.5)" : "rgba(245,244,240,0.14)"}
              strokeWidth={major ? 1.4 : 0.8}
              strokeLinecap="round"
            />
          );
        })}

        <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(245,244,240,0.07)" strokeWidth="1" />
        <circle cx="100" cy="100" r="52" fill="none" stroke="rgba(245,244,240,0.05)" strokeWidth="1" />
        <circle cx="100" cy="100" r="34" fill="url(#coreGlow)" />

        {/* sweeping hand */}
        <g style={{ transformOrigin: "100px 100px", animation: "sweep 9s linear infinite" }}>
          <line x1="100" y1="100" x2="100" y2="32" stroke="url(#hand)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="100" cy="32" r="3" fill="#f0ddbc" />
          <circle cx="100" cy="32" r="7" fill="#d8b78e" opacity="0.25" />
        </g>

        {/* counter-orbiting satellite */}
        <g style={{ transformOrigin: "100px 100px", animation: "orbit 22s linear infinite" }}>
          <circle cx="100" cy="20" r="2.2" fill="#d8b78e" />
          <circle cx="100" cy="20" r="5.5" fill="#d8b78e" opacity="0.2" />
        </g>

        {/* inner counter-rotating arc */}
        <g style={{ transformOrigin: "100px 100px", animation: "orbit-rev 16s linear infinite" }}>
          <path
            d="M 100 66 A 34 34 0 0 1 134 100"
            fill="none"
            stroke="rgba(216,183,142,0.6)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="3 6"
          />
        </g>

        <circle cx="100" cy="100" r="4.5" fill="#faf9f5" />
      </svg>

      {/* numerals overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="translate-y-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fog-400">local time</p>
          <p className="serif-accent mt-1 text-[22px] text-gold-200">always open</p>
        </div>
      </div>
    </div>
  );
}

export function AlwaysOn() {
  return (
    <section id="always-on" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.05] blur-[140px]" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl hairline" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Always on</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-6 flex items-baseline gap-3 text-[56px] font-semibold leading-none tracking-[-0.04em] text-fog-100 sm:text-[72px]">
                <span>24</span>
                <span className="serif-accent text-[0.6em] font-normal text-gold-400">/</span>
                <span>7</span>
                <span className="serif-accent text-[0.6em] font-normal text-gold-400">/</span>
                <span>365</span>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="mt-6 text-balance text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-fog-100 sm:text-[40px]">
                Expertise shouldn't have{" "}
                <span className="serif-accent font-normal text-gold-200">office hours.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-md text-balance text-[16px] leading-relaxed text-fog-300">
                Questions don't wait for meetings. Decisions don't wait for Monday.
                AlwaysOnAdvisor is designed to be available whenever clarity is needed.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08]">
                {[
                  ["24", "hours a day"],
                  ["7", "days a week"],
                  ["365", "days a year"],
                ].map(([n, label]) => (
                  <div key={label} className="px-4 py-5 text-center first:pl-0">
                    <p className="text-[24px] font-semibold tracking-tight text-fog-100">{n}</p>
                    <p className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-fog-400">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={36}>
            <Dial />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
