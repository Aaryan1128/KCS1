"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

type Category = "Tax" | "GST" | "Compliance" | "Business" | "Startups";

type Post = {
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
};

const posts: Post[] = [
  {
    title: "Income Tax filing: a premium checklist",
    excerpt: "Understand what to gather, how to reduce errors, and how to stay audit-ready.",
    category: "Tax",
    date: "2026-02-14",
    readTime: "6 min",
  },
  {
    title: "GST reconciliation — simplify input credit decisions",
    excerpt: "A practical guide to reconciliation so your filings stay accurate.",
    category: "GST",
    date: "2026-01-22",
    readTime: "7 min",
  },
  {
    title: "ROC compliance roadmap for growing companies",
    excerpt: "Key filings and documentation steps with a deadline-first approach.",
    category: "Compliance",
    date: "2025-12-10",
    readTime: "8 min",
  },
  {
    title: "Business consulting: translating numbers into decisions",
    excerpt: "Use MIS clarity to make confident financial moves with less guesswork.",
    category: "Business",
    date: "2025-11-08",
    readTime: "5 min",
  },
  {
    title: "Startup compliance: get ready before growth accelerates",
    excerpt: "Incorporation, GST readiness and structured recordkeeping for early stage teams.",
    category: "Startups",
    date: "2025-10-19",
    readTime: "6 min",
  },
];

const categories: Array<Category | "All"> = [
  "All",
  "Tax",
  "GST",
  "Compliance",
  "Business",
  "Startups",
];

export default function BlogClient() {
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>(
    "All"
  );
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const nq = q.trim().toLowerCase();
    return posts.filter((p) => {
      const catOk = activeCat === "All" ? true : p.category === activeCat;
      const qOk = nq
        ? (p.title + " " + p.excerpt).toLowerCase().includes(nq)
        : true;
      return catOk && qOk;
    });
  }, [activeCat, q]);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24">
        <div className="py-14">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Blog / Insights"
                title="Premium insights for compliance and decision-making"
                description="Featured articles across Tax, GST, Compliance, Business, and Startups — designed to be clear and actionable."
              />
            </motion.div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={
                      "rounded-full border px-4 py-2 text-xs font-semibold transition " +
                      (activeCat === c
                        ? "border-gold-500/50 bg-gold-500/15 text-navy-950 dark:text-navy-50"
                        : "border-navy-200/60 bg-white/60 text-navy-700 hover:bg-white/80 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-200")
                    }
                    onClick={() => setActiveCat(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search insights"
                  className="w-full rounded-2xl border border-navy-200/60 bg-white/60 pl-11 pr-4 py-3 text-sm outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.02 }}
                >
                  <GlowCard className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                        {p.category}
                      </div>
                      <div className="text-xs text-navy-600 dark:text-navy-200">
                        {p.readTime}
                      </div>
                    </div>
                    <div className="mt-3 text-lg font-semibold text-navy-950 dark:text-navy-50">
                      {p.title}
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                      {p.excerpt}
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-xs text-navy-600 dark:text-navy-200">
                        {p.date}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-navy-200/60 bg-white/60 px-4 py-2 text-xs font-semibold text-navy-950 shadow-glass transition hover:bg-white/80 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                      >
                        Request summary
                      </Link>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/25 bg-white/45 p-8 shadow-glass backdrop-blur-md dark:bg-navy-950/35">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                    Newsletter
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-navy-950 dark:text-navy-50">
                    Get compliance reminders
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    Monthly premium insights from KC Shinde & Associates.
                  </div>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <input
                    className="w-full rounded-2xl border border-navy-200/60 bg-white/60 px-5 py-3 text-sm outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/20 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                    placeholder="Email address"
                    type="email"
                  />
                  <button
                    type="button"
                    className="w-full rounded-2xl bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30 sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

