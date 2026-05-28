"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({
  items,
}: {
  items: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={it.question}
            className="rounded-2xl border border-navy-200/60 bg-white/55 shadow-glass backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-950/35"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : idx)}
              aria-expanded={open}
            >
              <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
                {it.question}
              </div>
              <div
                aria-hidden
                className={
                  "flex h-9 w-9 items-center justify-center rounded-xl border border-navy-200/60 bg-white/60 text-navy-900 transition dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50 " +
                  (open ? "rotate-45" : "rotate-0")
                }
              >
                +
              </div>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="px-5 pb-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    {it.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

