"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";

const items = [
  {
    name: "Business Owner",
    text: "Clear guidance on filings and documentation readiness. The process felt premium and organized.",
  },
  {
    name: "Founder",
    text: "Compliance support was timely and documentation was handled professionally. Highly recommended.",
  },
  {
    name: "Individual Client",
    text: "Tax planning advice helped reduce stress and improve clarity for my filings.",
  },
];


export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <GlowCard>
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold-600">Testimonial</div>
              <div className="text-xs text-navy-600 dark:text-navy-200">{index + 1}/{items.length}</div>
            </div>
            <div className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">“{items[index].text}”</div>
            <div className="mt-5 text-sm font-semibold text-navy-950 dark:text-navy-50">— {items[index].name}</div>
          </GlowCard>
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2.5 w-2.5 rounded-full transition " +
              (i === index ? "bg-gold-500" : "bg-navy-200 dark:bg-navy-800")
            }
          />
        ))}
      </div>
    </div>
  );
}

