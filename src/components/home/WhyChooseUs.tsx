"use client";

import GlowCard from "@/components/ui/GlowCard";

import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const points = [
  {
    title: "Clarity first",
    desc: "Plain-English explanations for taxation, audits, and corporate compliance.",
  },
  {
    title: "Deadline-driven",
    desc: "Structured checklists and a compliance calendar to reduce last-minute stress.",
  },
  {
    title: "Documentation that lasts",
    desc: "Audit-ready records designed to stand up to review.",
  },
  {
    title: "Premium service mindset",
    desc: "Responsive guidance and thoughtful strategy for businesses and individuals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1200px,100%)] px-4">
        <SectionHeading
          eyebrow="Why choose us"
          title="Premium compliance that builds confidence"
          description="KC Shinde & Associates delivers trusted chartered accountant services with accuracy, timeliness, and clear communication."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
            >
              <GlowCard className="h-full hover:shadow-glass transition">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 h-6 w-6 text-gold-500" />
                  <div>
                    <div className="text-lg font-semibold text-navy-950 dark:text-navy-50">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                      {p.desc}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

