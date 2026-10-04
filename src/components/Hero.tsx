import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Check, Radar, CircleAlert, Sparkles } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Chip({
  className,
  delay,
  driftDelay,
  children,
}: {
  className: string;
  delay: number;
  driftDelay: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease }}
      className={`absolute z-10 ${className}`}
    >
      <div
        className="glass-dark flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4 shadow-glass"
        style={{ animation: `drift 8s ease-in-out infinite`, animationDelay: driftDelay }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-gold-400/[0.05] blur-[130px]" />
        <div className="absolute right-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-fog-100/[0.025] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,244,240,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,244,240,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:min-h-screen lg:grid-cols-12 lg:gap-6 lg:pb-16 lg:pt-28">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-4"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            <span className="text-[12.5px] font-medium tracking-wide text-fog-300">
              Always-on intelligence · Now in early access
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease }}
            className="text-balance text-[44px] font-semibold leading-[1.04] tracking-[-0.035em] text-fog-100 sm:text-[58px] lg:text-[64px]"
          >
            The advisor that never{" "}
            <span className="serif-accent font-normal text-gold-200">clocks&nbsp;out.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.36, ease }}
            className="mt-6 max-w-[520px] text-balance text-[17px] leading-relaxed text-fog-300"
          >
            AlwaysOnAdvisor gives you intelligent guidance, analysis, and recommendations whenever
            you need them — powered by AI and available 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-fog-100 px-6 py-3.5 text-[15px] font-semibold text-ink shadow-[0_8px_32px_-8px_rgba(245,244,240,0.35)] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_40px_-6px_rgba(245,244,240,0.45)]"
            >
              Meet Your Advisor
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-[15px] font-medium text-fog-200 transition-all duration-300 hover:border-white/25 hover:text-fog-100"
            >
              See How It Works
              <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-fog-400"
          >
            {["Context-aware analysis", "Available 24/7/365", "Decision-ready output"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check size={13} className="text-gold-400" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            <HeroVisual />

            <Chip className="left-[2%] top-[16%]" delay={1.1} driftDelay="0s">
              <span className="h-3.5 w-3.5 animate-spin rounded-full border border-gold-400/30 border-t-gold-400" />
              <span className="text-[12px] font-medium text-fog-200">Analyzing context…</span>
            </Chip>

            <Chip className="right-[0%] top-[46%]" delay={1.35} driftDelay="-3s">
              <CircleAlert size={14} className="text-gold-400" />
              <span className="text-[12px] font-medium text-fog-200">3 assumptions to validate</span>
            </Chip>

            <Chip className="bottom-[10%] left-[10%]" delay={1.6} driftDelay="-6s">
              <Sparkles size={14} className="text-gold-300" />
              <span className="text-[12px] font-medium text-fog-200">Recommendation ready</span>
            </Chip>

            <Chip className="bottom-[30%] right-[6%] hidden sm:flex" delay={1.85} driftDelay="-1.5s">
              <Radar size={14} className="text-fog-300" />
              <span className="text-[12px] font-medium text-fog-300">Monitoring signals</span>
            </Chip>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-fog-500">Scroll</span>
        <div className="h-8 w-px overflow-hidden bg-white/10">
          <motion.div
            className="h-3 w-px bg-gold-400"
            animate={{ y: [-12, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
