"use client";

import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

import Link from "next/link";
import {
  BsFileEarmarkText,
  BsShieldCheck,
  BsBuilding,
  BsClipboardCheck,
  BsCalculator,
  BsCashCoin,
} from "react-icons/bs";

const services = [
  { icon: BsFileEarmarkText, title: "Income Tax", desc: "Filing support with documentation clarity." },
  { icon: BsClipboardCheck, title: "Accounting", desc: "Bookkeeping, reconciliation, and MIS." },
  { icon: BsCalculator, title: "Advisory", desc: "Tax planning and business consulting." },
];


export default function ServicesOverview() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1200px,100%)] px-4">
        <SectionHeading
          eyebrow="Services"
          title="Compliance services built for speed & trust"
description="Explore premium support across taxation, accounting, and business consulting." 

        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.02 }}
            >
              <GlowCard className="h-full hover:shadow-glass transition">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 border border-gold-500/30">
                    <s.icon className="h-6 w-6 text-gold-600 dark:text-gold-300" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-navy-950 dark:text-navy-50">{s.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">{s.desc}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-navy-200/60 bg-white/60 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-glass transition hover:bg-white/80 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                  >
                    Learn more
                  </Link>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

