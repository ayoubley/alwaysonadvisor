import { ScanSearch, TrendingUp, Compass, Footprints } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    icon: ScanSearch,
    title: "Understand",
    body: "Turn complex information into clear answers — documents, data, and decisions explained in plain language.",
  },
  {
    n: "02",
    icon: TrendingUp,
    title: "Analyze",
    body: "Explore options, risks, opportunities, and scenarios before you commit to a single path.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Advise",
    body: "Receive contextual recommendations shaped by your situation — not generic answers from a search box.",
  },
  {
    n: "04",
    icon: Footprints,
    title: "Act",
    body: "Turn insight into practical next steps, so momentum never stalls at the thinking stage.",
  },
];

export function CoreValue() {
  return (
    <section id="platform" className="relative scroll-mt-24 bg-paper py-28 text-ink sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="light">The platform</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[48px]">
                Intelligence,{" "}
                <span className="serif-accent font-normal text-gold-600">always within reach.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <p className="max-w-md text-balance text-[16px] leading-relaxed text-fog-500 lg:ml-auto">
              AlwaysOnAdvisor is a decision-support platform, not a chatbot. Every interaction
              moves through the same disciplined loop.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={0.08 * i} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-cream p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-600/40 hover:shadow-[0_24px_50px_-24px_rgba(26,22,14,0.25)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/[0.08] bg-white transition-colors duration-500 group-hover:border-gold-600/30 group-hover:bg-gold-400/10">
                    <item.icon size={19} strokeWidth={1.75} className="text-ink transition-colors duration-500 group-hover:text-gold-600" />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-fog-400">{item.n}</span>
                </div>
                <h3 className="mt-7 text-[19px] font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fog-500">{item.body}</p>
                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-ink/[0.06]">
                    <div className="h-px w-0 bg-gold-600 transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
