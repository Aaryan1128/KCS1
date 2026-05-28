import Link from "next/link";

const whatsappUrl = "https://wa.me/919511630795";

export default function CTAButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:bg-navy-600 focus:outline-none focus:ring-4 focus:ring-gold-500/30"
      >
        WhatsApp Us
      </Link>
    </div>
  );
}


