import React from "react";

export default function FirmContactCards({
  variant,
}: {
  variant?: "light" | "dark";
}) {
  const phone = "+91 9511630795";
  const whatsappUrl = "https://wa.me/919511630795";
  const address =
    "Office No 634, 6th Floor, Triaa, Vasantam City Center, Above Croma, Madhav Nagar, Dhanori, Pune, Maharashtra 411015, India";

  const cardBase =
    "rounded-2xl border p-5 shadow-glass backdrop-blur-md transition border-navy-200/60 bg-white/55 dark:border-navy-800/60 dark:bg-navy-950/35";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className={cardBase}>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
          Call
        </div>
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="mt-2 inline-block text-lg font-semibold text-navy-950 hover:text-gold-500 dark:text-navy-50"
        >
          {phone}
        </a>
        <div className="mt-2 text-sm text-navy-600 dark:text-navy-200">
          Click-to-call for quick assistance.
        </div>
      </div>

      <div className={cardBase}>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
          WhatsApp
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-lg font-semibold text-navy-950 hover:text-gold-500 dark:text-navy-50"
        >
          Chat Now
        </a>
        <div className="mt-2 text-sm text-navy-600 dark:text-navy-200">
          Fast replies for taxation & compliance queries.
        </div>
      </div>

      <div className={cardBase}>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
          Office
        </div>
        <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
          {address}
        </div>
      </div>

      <div className={cardBase}>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
          Business Hours
        </div>
        <div className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
          Mon–Sat: 10:00 AM – 6:30 PM
          <br />
          Sunday: Closed
        </div>
      </div>
    </div>
  );
}

