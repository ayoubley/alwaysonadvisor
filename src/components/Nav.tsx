import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mark } from "./Mark";

const links = [
  { label: "Product", href: "#product" },
  { label: "Platform", href: "#platform" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Vision", href: "#vision" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200"
        style={{ scaleX: progress, opacity: 0.7 }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled ? "glass-dark border-b border-white/[0.06]" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <Mark size={26} className="text-gold-400 transition-transform duration-700 group-hover:rotate-90" />
            <span className="text-[15px] font-semibold tracking-tight text-fog-100">
              AlwaysOn<span className="text-fog-300">Advisor</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-fog-300 transition-colors duration-300 hover:text-fog-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#start"
              className="text-[13.5px] font-medium text-fog-300 transition-colors hover:text-fog-100"
            >
              Sign in
            </a>
            <a
              href="#start"
              className="group inline-flex items-center gap-1.5 rounded-full bg-fog-100 px-4 py-2 text-[13.5px] font-semibold text-ink transition-all duration-300 hover:bg-white"
            >
              Get Started
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-fog-200 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark overflow-hidden border-t border-white/[0.06] md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-fog-200 hover:bg-white/5 hover:text-fog-100"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#start"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-fog-100 px-4 py-2.5 text-[14px] font-semibold text-ink"
                >
                  Get Started <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
