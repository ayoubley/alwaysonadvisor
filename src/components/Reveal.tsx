import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${tone === "dark" ? "bg-gold-400/60" : "bg-gold-600/60"}`} />
      <span
        className={`text-[11px] font-medium uppercase tracking-[0.22em] ${
          tone === "dark" ? "text-gold-400" : "text-gold-600"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
