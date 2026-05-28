import Image from "next/image";
import CTAButtons from "@/components/common/CTAButtons";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const phone = "+91 9511630795";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400/30 via-navy-500/10 to-gold-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-navy-950/5" />
      </div>

      <div className="mx-auto w-[min(1200px,100%)] px-4 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-white/60 px-4 py-2 text-xs font-semibold text-navy-950 shadow-glass backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold-500" />
                Bringing Value Through Expertise

              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                Trusted Chartered Accountants for Businesses & Individuals
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-600 dark:text-navy-200 sm:text-lg">
                KC Shinde & Associates helps you stay compliant with{' '}
                <span className="font-medium text-navy-950 dark:text-navy-50">
                  taxation and compliance
                </span>{' '}
                — with clear advice and timely filings.

              </p>

              <div className="mt-7">
                <CTAButtons />
                <div className="mt-3 text-xs text-navy-600 dark:text-navy-200">
                  Or call{' '}
                  <a
                    className="text-gold-600 underline underline-offset-4"
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                  >
                    {phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-b from-gold-400/20 via-white/10 to-transparent blur-2xl" />
            <div className="rounded-[2rem] border border-white/25 bg-white/40 p-4 shadow-glass backdrop-blur-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-950 to-navy-600">
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 600 400" className="h-full w-full" aria-hidden>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#d4af37" stopOpacity="0.7" />
                        <stop offset="1" stopColor="#3267c6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M-10 300 C 80 240, 160 250, 240 220 C 320 190, 390 120, 520 140 C 560 146, 610 170, 640 180 L 640 440 L -10 440 Z"
                      fill="url(#g)"
                    />
                    <path
                      d="M-20 250 C 80 190, 190 220, 280 170 C 370 120, 460 70, 620 90"
                      fill="none"
                      stroke="#d4af37"
                      strokeOpacity="0.35"
                      strokeWidth="3"
                    />
                    <circle cx="120" cy="140" r="10" fill="#d4af37" fillOpacity="0.65" />
                    <circle cx="210" cy="110" r="6" fill="#d4af37" fillOpacity="0.45" />
                    <circle cx="420" cy="120" r="8" fill="#d4af37" fillOpacity="0.5" />
                  </svg>
                </div>

                <div className="absolute inset-0 p-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-white/90">
                          Compliance Snapshot
                        </div>
                        <div className="mt-1 text-xs text-white/70">Tax • Documentation • Deadlines</div>

                      </div>
                      <div className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-200">
                        Premium
                      </div>
                    </div>

                  </div>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                        Built for clarity
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        KC Shinde & Associates
                      </div>
                    </div>
                    <div className="relative h-24 w-24">
                      <div className="absolute inset-0 rounded-full border border-gold-500/40 bg-gold-500/15 shadow-[0_0_50px_rgba(212,175,55,0.25)]" />
                      <Image
                        src="/CALogo.jpg"
                        alt="Chartered Accountant logo"
                        width={96}
                        height={96}
                        className="absolute inset-0 h-full w-full object-contain opacity-95"
                        priority
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

