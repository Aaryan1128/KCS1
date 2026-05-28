import TestimonialsSlider from "@/components/home/TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1200px,100%)] px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 dark:text-navy-50">
              Trusted by individuals & growing businesses
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-navy-600 dark:text-navy-200">
              Premium service is felt in clarity, responsiveness, and documentation that’s ready for review.
            </p>
          </div>
          <div className="hidden md:block text-sm text-navy-600 dark:text-navy-200">
            Scroll for more services & compliance guidance.
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
}

