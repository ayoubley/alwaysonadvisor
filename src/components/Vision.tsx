import { Clock, ScanSearch, Zap } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const pillars = [
  { icon: Clock, title: "Continuous", body: "Guidance that is present before, during, and after the decision." },
  { icon: ScanSearch, title: "Contextual", body: "Intelligence that understands your situation, not just your question." },
  { icon: Zap, title: "Actionable", body: "Every answer ends in a next step, not a dead end." },
];

export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 overflow-hidden py-32 sm:py-44">
      {/* horizon glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-[1px] mx-auto max-w-4xl hairline" />
        <div className="absolute bottom-[-320px] left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-gold-400/[0.07] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>Vision</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] text-fog-100 sm:text-[56px]">
            The future of advice is{" "}
            <span className="serif-accent font-normal text-gold-200">always on.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-[17px] leading-relaxed text-fog-300">
            As AI becomes part of how people work, invest, build, and make decisions, access to
            intelligent guidance will become continuous — not occasional.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="serif-accent mx-auto mt-8 max-w-2xl text-[26px] leading-snug text-gold-200 sm:text-[30px]">
            AlwaysOnAdvisor is built for that future.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.12 * i}>
              <div className="group h-full rounded-2xl border border-white/[0.07] bg-ink-2/60 p-6 text-left transition-colors duration-500 hover:border-gold-400/20">
                <p.icon size={17} strokeWidth={1.75} className="text-gold-300" />
                <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-fog-100">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-fog-400">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
