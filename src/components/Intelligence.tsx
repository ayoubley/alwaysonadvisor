import { Eye, Target, SlidersHorizontal, Route, Scale, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const framework = [
  { icon: Eye, n: "01", title: "Context", q: "What is happening?" },
  { icon: Target, n: "02", title: "Goals", q: "What are you trying to achieve?" },
  { icon: SlidersHorizontal, n: "03", title: "Constraints", q: "What could prevent it?" },
  { icon: Route, n: "04", title: "Options", q: "What paths are available?" },
  { icon: Scale, n: "05", title: "Trade-offs", q: "What do you gain — and sacrifice?" },
  { icon: ArrowRight, n: "06", title: "Next Step", q: "What should you do now?" },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="relative scroll-mt-24 bg-paper py-28 text-ink sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow tone="light">The framework</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">
                  Built around context,{" "}
                  <span className="serif-accent font-normal text-gold-600">not just conversation.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-balance text-[16px] leading-relaxed text-fog-500">
                  A great advisor needs more than a chat window. Every response from
                  AlwaysOnAdvisor is structured around the six things that turn talk into
                  judgment.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink/[0.09] bg-cream px-5 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-600" />
                  <span className="text-[13px] font-medium text-fog-500">
                    Structured reasoning, applied to every question
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* framework rows */}
          <div className="lg:col-span-7">
            <div className="border-t border-ink/[0.09]">
              {framework.map((f, i) => (
                <Reveal key={f.n} delay={0.05 * i}>
                  <div className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-ink/[0.09] py-6 transition-colors duration-300 hover:bg-cream/70 sm:grid-cols-[auto_auto_1fr_auto] sm:gap-7 sm:px-4">
                    <span className="font-mono text-[11px] tracking-widest text-fog-400">{f.n}</span>
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/[0.08] bg-white transition-all duration-500 group-hover:border-gold-600/40 group-hover:bg-gold-400/10">
                        <f.icon size={16} strokeWidth={1.75} className="text-fog-500 transition-colors duration-500 group-hover:text-gold-600" />
                      </div>
                      <span className="text-[18px] font-semibold tracking-tight sm:text-[20px]">
                        {f.title}
                      </span>
                    </div>
                    <span className="col-span-2 pl-[52px] text-[14px] text-fog-500 sm:col-span-1 sm:pl-0 sm:text-right sm:text-[15px]">
                      {f.q}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-[13.5px] leading-relaxed text-fog-400">
                This framework is the difference between an answer and advice — and it's applied
                consistently across every domain the platform serves.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
