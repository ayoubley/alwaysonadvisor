import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Mark } from "./Mark";

export function FinalCTA() {
  return (
    <section id="start" className="relative scroll-mt-24 overflow-hidden py-32 sm:py-44">
      {/* centerpiece glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.08] blur-[130px]" />
        <Mark
          size={620}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-400/[0.05]"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-2 shadow-glass">
              <Mark size={26} className="text-gold-300" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] text-fog-100 sm:text-[56px]">
            Never face a complex decision{" "}
            <span className="serif-accent font-normal text-gold-200">alone.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-fog-300">
            AlwaysOnAdvisor — intelligent guidance, whenever you need it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-[15.5px] font-semibold text-ink shadow-[0_12px_44px_-10px_rgba(216,183,142,0.5)] transition-all duration-300 hover:bg-gold-200"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-8 py-4 text-[15px] font-medium text-fog-200 transition-all duration-300 hover:border-white/25 hover:text-fog-100"
            >
              See the product
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-8 text-[13px] text-fog-500">
            Early access — rolling out gradually to new members.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
