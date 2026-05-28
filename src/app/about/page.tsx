import Container from "@/components/ui/Container";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

const firm = {
  name: "KC Shinde & Associates",
  address:
    "Office No 634, 6th Floor, Triaa, Vasantam City Center, Above Croma, Madhav Nagar, Dhanori, Pune, Maharashtra 411015, India",
};

const values = [
  {
    title: "Integrity",
    desc: "Ethical practice, clear communication, and reliable compliance.",
  },
  {
    title: "Accuracy",
    desc: "Detail-driven filings and documentation that stand up to scrutiny.",
  },
  {
    title: "Responsiveness",
    desc: "Fast turnaround for notices, queries, and deadlines.",
  },
  {
    title: "Strategy",
    desc: "Practical tax planning aligned to your business goals.",
  },
];

const team = [
  {
    name: "CA KC Shinde",
    role: "Founder & Partner",
    focus: "Taxation • GST • Audit & Assurance",
  },
  {
    name: "CA Associate",
    role: "Senior Consultant",
    focus: "ROC Compliance • Company Registrations",
  },
  {
    name: "Finance Associate",
    role: "Advisor",
    focus: "Accounting • Bookkeeping • Payroll",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    desc: "Started advising businesses on taxation and compliance.",
  },
  {
    year: "2017",
    title: "GST Expansion",
    desc: "Helped clients adopt GST with structured filings.",
  },
  {
    year: "2019",
    title: "Audit & Assurance",
    desc: "Strengthened audit-ready documentation processes.",
  },
  {
    year: "2022",
    title: "ROC & Corporate",
    desc: "Focused on company and ROC compliance support.",
  },
  {
    year: "Now",
    title: "Trusted Advisory",
    desc: "Premium, responsive services for individuals and enterprises.",
  },
];

export const metadata = {
  title: "About Us | KC Shinde & Associates",
  description:
    "Learn about KC Shinde & Associates — our vision, mission, values, leadership, journey, and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      <Navbar />
      <WhatsAppButton />
      <main className="pt-24">
        <div className="py-14">
          <Container>
            <SectionHeading
              eyebrow="About the Firm"
              title="Premium, dependable compliance — backed by clarity"
              description="We help you stay ahead of deadlines and regulations with trusted advice across taxation, GST, audit, ROC compliance, and business consulting."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <GlowCard className="lg:col-span-2">
                <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                  Introduction
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                  {firm.name} is built on a simple promise: compliance should be
                  understandable, predictable, and audit-ready. Our approach
                  combines accuracy, timeliness, and strategic planning —
                  enabling individuals and growing businesses to make confident
                  financial decisions.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Taxation & GST", "Audit & Assurance", "ROC Compliance", "Accounting & Bookkeeping"].map(
                    (t) => (
                      <div
                        key={t}
                        className="rounded-xl border border-navy-200/60 bg-white/50 px-4 py-3 text-sm font-semibold text-navy-900 dark:text-navy-50"
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>
              </GlowCard>

              <GlowCard>
                <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                  Vision
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                  To be the most trusted CA firm for businesses and individuals
                  seeking premium compliance and actionable tax strategy.
                </p>

                <div className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                  Mission
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                  Deliver accurate filings, responsive guidance, and
                  documentation that makes audits and compliance smoother.
                </p>
              </GlowCard>
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-10">
            <SectionHeading
              eyebrow="Professional Values"
              title="Precision, integrity, and a service mindset"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <GlowCard key={v.title}>
                  <div className="text-xl font-semibold text-navy-950 dark:text-navy-50">
                    {v.title}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    {v.desc}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="py-10">
            <SectionHeading
              eyebrow="Founder & Partner"
              title="CA KC Shinde"
              description="Leadership focused on compliance strategy, audit-readiness, and clarity-driven advice."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <GlowCard className="lg:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gold-500/25 to-navy-500/10 border border-gold-500/30 shadow-glass" />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                      Founder
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-navy-950 dark:text-navy-50">
                      CA KC Shinde
                    </div>
                    <div className="mt-1 text-sm text-navy-600 dark:text-navy-200">
                      Taxation • GST • Audit & Assurance • ROC Compliance
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                  With a strong compliance-first approach, CA KC Shinde guides
                  clients through tax planning, GST filings, audit readiness,
                  and corporate compliance — ensuring decisions are supported
                  by accurate documentation.
                </p>
              </GlowCard>

              <GlowCard>
                <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                  Office
                </div>
                <div className="mt-3 text-sm text-navy-600 dark:text-navy-200 leading-relaxed">
                  {firm.address}
                </div>
              </GlowCard>
            </div>
          </div>

          <div className="py-10">
            <SectionHeading
              eyebrow="Journey"
              title="A timeline of trust & capability"
            />
            <div className="mt-8 space-y-4">
              {timeline.map((t) => (
                <GlowCard key={t.year}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                        {t.year}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-navy-950 dark:text-navy-50">
                        {t.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                        {t.desc}
                      </div>
                    </div>
                    <div className="hidden h-10 w-10 rounded-full border border-navy-200/60 bg-white/60 dark:border-navy-800/60 dark:bg-navy-900/30 md:block" />
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="py-10 pb-24">
            <SectionHeading
              eyebrow="Team"
              title="Experienced professionals built around clients"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <GlowCard key={m.name}>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gold-500/25 to-navy-500/10 border border-gold-500/30" />
                    <div>
                      <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
                        {m.name}
                      </div>
                      <div className="text-xs text-navy-600 dark:text-navy-200">
                        {m.role}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    {m.focus}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

