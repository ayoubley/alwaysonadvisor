import { Briefcase, Coins, TrendingUp, Building2, Handshake, User, ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const cases = [
  {
    icon: Briefcase,
    title: "Business Advisor",
    body: "Strategic thinking for founders and executives — pressure-test plans, sharpen positioning, and sequence what's next.",
  },
  {
    icon: Coins,
    title: "Financial Advisor",
    body: "Understand financial decisions, scenarios, and opportunities with clarity before you commit.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisor",
    body: "Analyze opportunities, markets, and investment ideas with structured, unemotional reasoning.",
  },
  {
    icon: Building2,
    title: "Real Estate Advisor",
    body: "Evaluate properties, markets, and decisions — from first viewing to final offer.",
  },
  {
    icon: Handshake,
    title: "Sales Advisor",
    body: "Help teams make better decisions throughout the sales process — qualify, prioritize, and advance deals.",
  },
  {
    icon: User,
    title: "Personal Advisor",
    body: "A private intelligence layer for everyday decisions — the kind you used to save for a friend with expertise.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-1/4 h-[500px] w-[500px] rounded-full bg-gold-400/[0.035] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Use cases</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-fog-100 sm:text-[48px]">
                One intelligence layer.{" "}
                <span className="serif-accent font-normal text-gold-200">Endless possibilities.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <p className="max-w-md text-balance text-[16px] leading-relaxed text-fog-300 lg:ml-auto">
              The same core intelligence, shaped by the domain you're operating in — business,
              finance, property, sales, or life.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-ink-2 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/25 hover:bg-ink-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors duration-500 group-hover:border-gold-400/30 group-hover:bg-gold-400/[0.08]">
                    <c.icon size={19} strokeWidth={1.75} className="text-fog-200 transition-colors duration-500 group-hover:text-gold-300" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-fog-500 opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-gold-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-7 text-[18px] font-semibold tracking-tight text-fog-100">{c.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fog-300">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[13px] text-fog-500">
            Illustrative examples of the platform's intended direction — one intelligence layer,
            many domains of guidance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
