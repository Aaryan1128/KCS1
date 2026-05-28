import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FAQItem } from "@/components/faq/FAQAccordion";

const faqs: FAQItem[] = [
  {
    question: "How do I start GST filing for my business?",
    answer:
      "We guide you through registration (if needed), setup of invoices/returns process, and help you file returns on time with reconciliation support.",
  },
  {
    question: "What documents are needed for Income Tax Filing?",
    answer:
      "Typically we require identity/address proof, income statements (Form 16/26AS), bank statements, investment proofs (if applicable), and prior year return details.",
  },
  {
    question: "Do you help with audit and assurance preparation?",
    answer:
      "Yes. We assist with audit-ready documentation, reconciliations, and process improvement so your statements are easy to verify.",
  },
  {
    question: "What is included in company registration support?",
    answer:
      "We help with incorporation advisory, required filings, documentation checklist, and initial compliance setup.",
  },
  {
    question: "Can you handle ROC compliance and notices?",
    answer:
      "We support annual filings, board/AGM compliance and help address ROC notices with structured documentation.",
  },
  {
    question: "How do you manage filing deadlines?",
    answer:
      "We follow a compliance calendar and work backward with your documents to ensure timely submissions. You’ll receive clear checklists and timelines.",
  },
];

export const metadata = {
  title: "FAQ | KC Shinde & Associates",
  description:
    "Frequently asked questions about GST, Income Tax, audits, company registration, ROC compliance, and filing deadlines.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      <Navbar />
      <WhatsAppButton />

      <main className="pt-24">
        <div className="py-14">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Quick answers for common compliance questions"
              description="If you don’t find your question here, contact us and we’ll guide you to the right service."
            />

            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/25 bg-white/45 p-8 shadow-glass backdrop-blur-md dark:bg-navy-950/35">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                    Still unsure?
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-navy-950 dark:text-navy-50">
                    Let’s review your requirement
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    Send details on WhatsApp and we’ll respond with next steps.
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:bg-navy-800 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://wa.me/919511630795"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
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

