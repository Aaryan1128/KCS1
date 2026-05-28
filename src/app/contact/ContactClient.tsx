"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { motion } from "framer-motion";

import CTAButtons from "@/components/common/CTAButtons";


const phone = "+91 9511630795";
const address =
  "Office No 634, 6th Floor, Triaa, Vasantam City Center, Above Croma, Madhav Nagar, Dhanori, Pune, Maharashtra 411015, India";
const whatsappUrl = "https://wa.me/919511630795";
const email = "kcshindeandassociates@gmail.com";




export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });



  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 8 &&
      form.email.includes("@") &&
      form.message.trim().length >= 10
    );
  }, [form]);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // Mock submit (no backend wiring requested)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
                eyebrow="Contact"
                title="Get in touch with a compliance expert"
                description="Share your requirement and we’ll respond with the next steps. Primary CTA: Contact Us and WhatsApp."
              />
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <GlowCard>
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
                        Phone
                      </div>
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-navy-200/70 bg-white/70 px-4 py-3 text-sm font-semibold text-navy-950 shadow-glass transition hover:bg-white/90 dark:border-navy-800/70 dark:bg-navy-900/30"
                      >
                        {phone}
                      </a>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
                        WhatsApp
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gold-500 px-4 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-navy-600 dark:text-navy-200">
                    Get in touch with KC Shinde & Associates using WhatsApp.
                  </div>
                </div>


                <div className="mt-6">
                  <CTAButtons />
                </div>
              </GlowCard>

              <div className="space-y-6">
                <GlowCard>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                    Office Address
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
                    {address}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center justify-center rounded-xl bg-gold-500 px-4 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
                    >
                      Click-to-call
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-navy-200/60 bg-white/60 px-4 py-3 text-sm font-semibold text-navy-950 shadow-glass transition hover:bg-white/80 dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
                    >
                      WhatsApp Chat
                    </a>
                  </div>

                  <div className="mt-3">
                    <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-navy-200/70 bg-white/70 px-4 py-3 text-sm font-semibold text-navy-950 shadow-glass transition hover:bg-white/90 dark:border-navy-800/70 dark:bg-navy-900/30 dark:text-navy-50"
                    >
                      {email}
                    </a>
                  </div>

                  <div className="mt-6 text-xs text-navy-600 dark:text-navy-200">
                    Business hours: Mon–Sat 10:00 AM – 6:30 PM
                    <br />
                    Sunday: Closed
                  </div>

                </GlowCard>

                <GlowCard>
                  <div className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
                    Map
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-navy-200/60">
                    <iframe
                      title="KC Shinde & Associates - Map"
                      className="h-72 w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Vasantam%20City%20Center%20Above%20Croma%20Dhanori%20Pune&output=embed"
                    />
                  </div>
                </GlowCard>
              </div>
            </div>


          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

