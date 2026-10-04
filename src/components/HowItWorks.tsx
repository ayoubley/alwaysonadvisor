import { Eyebrow, Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Ask",
    body: "Describe the situation, problem, or decision — in your own words, with as much or as little detail as you have.",
  },
  {
    n: "02",
    title: "Understand",
    body: "AlwaysOnAdvisor analyzes the context, separates signal from noise, and identifies what actually matters.",
  },
  {
    n: "03",
    title: "Decide",
    body: "Get clear recommendations, trade-offs, and actionable next steps — in seconds, not scheduling cycles.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 border-t border-ink/[0.07] bg-paper py-28 text-ink sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="light">How it works</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[48px]">
              From question to decision{" "}
              <span className="serif-accent font-normal text-gold-600">in seconds.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-ink/[0.09] lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.12 * i}>
              <div className="group relative text-center lg:px-6">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink/[0.09] bg-cream transition-all duration-500 group-hover:border-gold-600/50 group-hover:bg-gold-400/10">
                  <span className="serif-accent text-[20px] text-gold-600">{s.n}</span>
                </div>
                <h3 className="mt-7 text-[21px] font-semibold tracking-tight">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-fog-500">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
