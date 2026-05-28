import Link from "next/link";

const firm = {
  name: "KC Shinde & Associates",
  address:
    "Office No 634, 6th Floor, Triaa, Vasantam City Center, Above Croma, Madhav Nagar, Dhanori, Pune, Maharashtra 411015, India",
  phone: "+91 9511630795",
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy-200/60 bg-white/50 backdrop-blur-sm dark:border-navy-800/60 dark:bg-navy-950/30">
      <div className="mx-auto w-[min(1200px,100%)] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-navy-950 dark:text-navy-50">
              {firm.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
              Trusted chartered accountants for taxation, GST, audits, ROC compliance, and business consulting.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${firm.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-navy-800 underline underline-offset-4 hover:text-gold-500 dark:text-navy-50"
              >
                Click to call
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-navy-800 underline underline-offset-4 hover:text-gold-500 dark:text-navy-50"
              >
                Contact details
              </Link>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
              Pages
            </div>
            <Link className="text-sm text-navy-700 hover:text-gold-500 dark:text-navy-200" href="/">
              Home
            </Link>
            <Link className="text-sm text-navy-700 hover:text-gold-500 dark:text-navy-200" href="/about">
              About
            </Link>
            <Link className="text-sm text-navy-700 hover:text-gold-500 dark:text-navy-200" href="/services">
              Services
            </Link>
            <Link className="text-sm text-navy-700 hover:text-gold-500 dark:text-navy-200" href="/faq">
              FAQ
            </Link>
            <Link className="text-sm text-navy-700 hover:text-gold-500 dark:text-navy-200" href="/blog">
              Insights
            </Link>
          </div>

          <div>
            <div className="text-sm font-semibold text-navy-950 dark:text-navy-50">
              Office
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200">
              {firm.address}
            </p>
            <div className="mt-6 text-xs text-navy-600 dark:text-navy-200">
              © {new Date().getFullYear()} {firm.name}. All rights reserved.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-navy-200/60 pt-6 text-xs text-navy-600 dark:border-navy-800/60 dark:text-navy-200 md:flex-row md:items-center">
          <span>Built for clarity, compliance, and trust.</span>
          <div className="flex gap-3">
            <Link href="/contact" className="hover:text-gold-500">
              Privacy
            </Link>
            <span className="text-navy-400 dark:text-navy-500">•</span>
            <Link href="/faq" className="hover:text-gold-500">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

