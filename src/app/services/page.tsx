import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import {
  BsFileEarmarkText,
  BsShieldCheck,
  BsBuilding,
  BsClipboardCheck,
  BsCalculator,
  BsPeople,
  BsCashCoin,
} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    title: "Income Tax Filing",
    icon: BsFileEarmarkText,
    desc: "Accurate filings, computation support, and compliance-ready documentation.",
    benefits: [
      "Personal & business filings",
      "Notice handling",
      "Audit-ready records",
    ],
  },
  {
    title: "GST Registration & Filing",
    icon: BsCashCoin,
    desc: "Seamless GST registration and timely returns with clear reconciliation.",
    benefits: [
      "GST returns",
      "E-invoicing readiness",
      "Proper input tax credit tracking",
    ],
  },
  {
    title: "ROC Compliance",
    icon: BsShieldCheck,
    desc: "Company compliance support aligned with ROC requirements and deadlines.",
    benefits: [
      "Annual filings",
      "Board & AGM compliance",
      "ROC notice assistance",
    ],
  },
  {
    title: "Company Registration",
    icon: BsBuilding,
    desc: "Guidance and documentation support for company incorporation.",
    benefits: [
      "Incorporation advisory",
      "Required filings",
      "Structured compliance setup",
    ],
  },
  {
    title: "Audit & Assurance",
    icon: BsClipboardCheck,
    desc: "Premium audit readiness with clear internal documentation.",
    benefits: [
      "Statutory audit support",
      "Assurance services",
      "Process improvement",
    ],
  },
  {
    title: "Accounting & Bookkeeping",
    icon: BsCalculator,
    desc: "Maintain accurate books with clean reporting and reconciliation.",
    benefits: [
      "Monthly bookkeeping",
      "MIS reporting",
      "Reconciliation support",
    ],
  },
  {
    title: "Payroll Services",
    icon: BsPeople,
    desc: "Professional payroll support aligned with compliance requirements.",
    benefits: [
      "Payroll processing",
      "Statutory compliance",
      "Employee documentation",
    ],
  },
  {
    title: "Startup Compliance",
    icon: BsShieldCheck,
    desc: "Early-stage compliance help so you can focus on growth.",
    benefits: [
      "Incorporation & filings",
      "GST + ROC readiness",
      "Budget-aligned compliance",
    ],
  },
  {
    title: "Tax Planning",
    icon: BsFileEarmarkText,
    desc: "Strategic tax planning for individuals and businesses.",
    benefits: [
      "Lower legal tax burden",
      "Scenario planning",
      "Compliance-first approach",
    ],
  },
  {
    title: "Business Consulting",
    icon: BsClipboardCheck,
    desc: "Actionable advisory for financial decisions and compliance roadmap.",
    benefits: [
      "Process guidance",
      "Compliance roadmap",
      "Reporting clarity",
    ],
  },
];

export const metadata = {
  title: "Services | KC Shinde & Associates",
  description:
    "Explore premium chartered accountant services — taxation, GST, audits, ROC compliance, company registration, accounting, payroll, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      <Navbar />
      <WhatsAppButton />

      <main className="pt-24">
        <div className="py-14">
          <Container>
            <SectionHeading
              eyebrow="Services"
              title="Premium compliance services for every stage"
              description="From GST filings to audit readiness and ROC compliance — our services are designed to keep your business confident and compliant."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <GlowCard
                  key={s.title}
                  className="h-full transition hover:shadow-glass"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 border border-gold-500/30">
                        <s.icon className="h-6 w-6 text-gold-600 dark:text-gold-300" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-navy-950 dark:text-navy-50">
                          {s.title}
                        </div>
                        <div className="mt-2 text-sm text-navy-600 dark:text-navy-200">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-navy-600 dark:text-navy-200">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white shadow-glass transition hover:bg-navy-800 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                    >
                      Contact about {s.title}
                    </Link>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/25 bg-white/45 p-8 shadow-glass backdrop-blur-md dark:bg-navy-950/35">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                    Need the right fit?
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-navy-950 dark:text-navy-50">
                    Tell us your requirement
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    We’ll suggest the right service and the most efficient compliance plan.
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                  >
                    Contact Us
                  </Link>

                  <a
                    href="https://wa.me/919511630795"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-navy-200/60 bg-white/60 px-6 py-3 text-sm font-semibold text-navy-950 shadow-glass transition hover:bg-white/80 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                  >
                    WhatsApp Us
                  </a>
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

