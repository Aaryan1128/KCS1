import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";

import ServicesOverview from "@/components/home/ServicesOverview";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";
import TrustBadges from "@/components/common/TrustBadges";


export const metadata = {
  title: "KC Shinde & Associates | Chartered Accountants",
  description:
    "Trusted Chartered Accountants for Businesses & Individuals — taxation, compliance, and business consulting.",
};


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />


      <main>

        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <TrustBadges />
        <TestimonialsSection />
        <FaqPreview />

        <section className="py-16">
          <div className="mx-auto w-[min(1200px,100%)] px-4">
            <div className="rounded-[2rem] border border-white/25 bg-gradient-to-br from-navy-950 via-navy-950 to-navy-800 px-6 py-10 shadow-glass backdrop-blur-md">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                    Ready to get started?
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    Contact KC Shinde & Associates
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                    Share your requirement. We’ll respond with the next steps for
                    taxation and business consulting.
                  </p>

                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://wa.me/919511630795"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

