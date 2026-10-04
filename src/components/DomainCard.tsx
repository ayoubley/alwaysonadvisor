import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function InquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", message: "" });
      }, 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const prev = JSON.parse(localStorage.getItem("aoa_inquiries") || "[]");
      localStorage.setItem("aoa_inquiries", JSON.stringify([...prev, { ...form, at: Date.now() }]));
    } catch {
      /* storage unavailable */
    }
    setSent(true);
  };

  const field =
    "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[14px] text-fog-100 placeholder:text-fog-500 outline-none transition-colors duration-300 focus:border-gold-400/50 focus:bg-white/[0.06]";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[120] flex items-end justify-center bg-ink/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-ink-2 p-7 shadow-card sm:p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-400">
                  Domain inquiry
                </p>
                <h3 className="mt-2 text-balance text-[22px] font-semibold leading-snug tracking-tight text-fog-100">
                  Interested in{" "}
                  <span className="serif-accent font-normal text-gold-200">AlwaysOnAdvisor.com?</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-fog-400 transition-colors hover:border-white/25 hover:text-fog-100"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="mt-8 flex flex-col items-center py-6 text-center"
              >
                <CheckCircle2 size={36} className="text-gold-300" strokeWidth={1.5} />
                <p className="mt-4 text-[16px] font-semibold text-fog-100">Inquiry sent</p>
                <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-relaxed text-fog-400">
                  Thank you — your message has been received. We'll be in touch shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-full border border-white/12 px-6 py-2.5 text-[13.5px] font-medium text-fog-200 transition-colors hover:border-white/25 hover:text-fog-100"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="mt-7 space-y-4">
                <div>
                  <label htmlFor="aoa-name" className="mb-1.5 block text-[12.5px] font-medium text-fog-300">
                    Name
                  </label>
                  <input
                    id="aoa-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="aoa-email" className="mb-1.5 block text-[12.5px] font-medium text-fog-300">
                    Email
                  </label>
                  <input
                    id="aoa-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="aoa-message" className="mb-1.5 block text-[12.5px] font-medium text-fog-300">
                    Message
                  </label>
                  <textarea
                    id="aoa-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a bit about your interest…"
                    className={`${field} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-300 py-3 text-[14.5px] font-semibold text-ink transition-colors duration-300 hover:bg-gold-200"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DomainCard() {
  const [dismissed, setDismissed] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem("aoa_domain_dismissed") === "1");
    } catch {
      /* storage unavailable */
    }
    const t = setTimeout(() => setMounted(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem("aoa_domain_dismissed", "1");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <>
      <AnimatePresence>
        {mounted && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.7, ease }}
            className="fixed bottom-4 right-4 z-[100] sm:bottom-6 sm:right-6"
          >
            <div className="glass-dark w-[calc(100vw-2rem)] max-w-[292px] rounded-2xl p-4 shadow-glass">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-gold-400/50" />
                    <span className="relative h-2 w-2 rounded-full bg-gold-400" />
                  </span>
                  <span className="font-mono text-[11.5px] font-medium tracking-wide text-fog-200">
                    AlwaysOnAdvisor.com
                  </span>
                </div>
                <button
                  onClick={dismiss}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-fog-500 transition-colors hover:text-fog-200"
                  aria-label="Dismiss"
                >
                  <X size={12} />
                </button>
              </div>
              <p className="serif-accent mt-2 pl-[18px] text-[14px] text-fog-400">
                This domain is available.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-end gap-x-2 gap-y-2 pl-[18px]">
                <a
                  href="mailto:ayoubraniro@gmail.com"
                  className="mr-auto text-[10.5px] leading-none text-fog-500 transition-colors duration-300 hover:text-gold-300"
                >
                  Contact: <span className="font-mono text-fog-400">ayoubraniro@gmail.com</span>
                </a>
                <a
                  href="https://www.spaceship.com/s/buy/alwaysonadvisor.com/eqks1wusPzIrRWkc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold-400/30 bg-gold-400/[0.06] px-5 py-1.5 text-[12px] font-semibold text-gold-200 transition-all duration-300 hover:border-gold-400/60 hover:bg-gold-400/[0.14]"
                >
                  Inquire
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
