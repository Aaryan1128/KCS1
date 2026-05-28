import GlowCard from "@/components/ui/GlowCard";

const badges = [
  { title: "Tax Experts", desc: "Notice-ready support and clear filing guidance." },
  { title: "Documentation Support", desc: "Records organized for easy review." },
  { title: "Deadline Focus", desc: "Timelines handled with precision." },
  { title: "Client-First Process", desc: "Clear checklists and next-step timelines." },
];


export default function TrustBadges() {
  return (
    <section className="py-10">
      <div className="mx-auto w-[min(1200px,100%)] px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <GlowCard key={b.title}>
              <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                {b.title}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                {b.desc}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

