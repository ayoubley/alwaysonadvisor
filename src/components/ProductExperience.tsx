import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUp, CircleAlert, Lightbulb, Compass, Mic } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { Mark } from "./Mark";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cards = [
  {
    tag: "Insight",
    title: "Market opportunity",
    body: "Demand signals in the target segment align with your current strengths and growth trajectory.",
    icon: Lightbulb,
    accent: "#d8b78e",
    tint: "rgba(216, 183, 142, 0.08)",
  },
  {
    tag: "Risk",
    title: "Customer concentration",
    body: "Your top three customers represent a significant share of revenue — expansion amplifies that exposure.",
    icon: CircleAlert,
    accent: "#e0a08a",
    tint: "rgba(224, 160, 138, 0.08)",
  },
  {
    tag: "Recommendation",
    title: "Validate demand before committing resources",
    body: "Run a focused pilot in the new market before capital allocation or hiring decisions.",
    icon: Compass,
    accent: "#9ec3a4",
    tint: "rgba(158, 195, 164, 0.08)",
  },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-gold-400/80"
          style={{ animation: "typing 1.2s ease-in-out infinite", animationDelay: `${i * 0.18}s` }}
        />
      ))}
      <span className="ml-2 text-[12px] text-fog-400">Advisor is thinking</span>
    </div>
  );
}

export function ProductExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 2300),
      window.setTimeout(() => setStep(3), 3100),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section id="product" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold-400/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>The product</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-fog-100 sm:text-[48px]">
              Ask anything.{" "}
              <span className="serif-accent font-normal text-gold-200">Get clarity.</span>{" "}
              Move forward.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-[16px] leading-relaxed text-fog-300">
              A conversation with your AI advisor isn't a search results page. It's structured
              thinking — context in, clear guidance out.
            </p>
          </Reveal>
        </div>

        {/* Advisor window */}
        <Reveal delay={0.25} y={40} className="mt-16">
          <div
            ref={ref}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-card"
          >
            {/* window chrome */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <div className="ml-3 flex items-center gap-2">
                  <Mark size={16} className="text-gold-400" />
                  <span className="text-[13px] font-medium text-fog-200">Advisor session</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-300/70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </span>
                <span className="text-[11px] font-medium tracking-wide text-fog-300">Always on</span>
              </div>
            </div>

            <div className="space-y-6 px-5 py-7 sm:px-9 sm:py-9">
              {/* user message */}
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[85%] rounded-2xl rounded-br-md border border-white/[0.08] bg-white/[0.045] px-5 py-3.5">
                      <p className="text-[15px] leading-relaxed text-fog-100">
                        "Should we expand into this market?"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* thinking */}
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TypingDots />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* advisor response */}
              <AnimatePresence>
                {step >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="flex gap-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/[0.08]">
                      <Mark size={15} className="text-gold-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2.5">
                        <span className="text-[13px] font-semibold text-fog-100">Advisor</span>
                        <span className="rounded border border-white/[0.08] px-1.5 py-px text-[10px] font-medium uppercase tracking-[0.14em] text-fog-400">
                          Strategic review
                        </span>
                      </div>
                      <p className="max-w-[62ch] text-[15px] leading-relaxed text-fog-200">
                        Based on your current growth, customer concentration, and operating
                        capacity, expansion looks promising — but I would validate three
                        assumptions first…
                      </p>

                      {/* structured cards */}
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {cards.map((c, i) => (
                          <motion.div
                            key={c.tag}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 + i * 0.35, ease }}
                            className="rounded-xl border border-white/[0.07] p-4"
                            style={{ background: c.tint }}
                          >
                            <div className="flex items-center gap-2">
                              <c.icon size={13} style={{ color: c.accent }} />
                              <span
                                className="text-[10.5px] font-semibold uppercase tracking-[0.18em]"
                                style={{ color: c.accent }}
                              >
                                {c.tag}
                              </span>
                            </div>
                            <p className="mt-2.5 text-[13.5px] font-medium leading-snug text-fog-100">
                              {c.title}
                            </p>
                            <p className="mt-1.5 text-[12.5px] leading-relaxed text-fog-300">
                              {c.body}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* input bar */}
            <div className="border-t border-white/[0.06] px-5 py-4 sm:px-9">
              <div className="flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] py-2.5 pl-5 pr-2.5">
                <span className="flex-1 truncate text-[14px] text-fog-400">
                  Ask a follow-up, or describe a new decision…
                </span>
                <Mic size={15} className="text-fog-500" />
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-ink">
                  <ArrowUp size={15} strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-[13px] text-fog-500">
            Illustrative interface — AlwaysOnAdvisor structures every answer into insight, risk,
            and a recommended next step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
