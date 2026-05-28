import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firmName = "KC Shinde & Associates";
const phone = "+91 9511630795";

export const metadata: Metadata = {
  metadataBase: new URL("https://kcs-shinde-associates.example"),
  title: {
    default: `${firmName} | Chartered Accountants`,
    template: `%s | ${firmName}`,
  },
  description:
    "Trusted Chartered Accountants for Businesses & Individuals — taxation, GST, audit, ROC compliance, and business consulting.",
  keywords: [
    "chartered accountant",
    "CA firm",
    "taxation",
    "GST",
    "audit",
    "ROC compliance",
    "income tax",
    "Pune",
    "Madhav Nagar",
  ],
  authors: [{ name: firmName }],
  openGraph: {
    title: `${firmName} | Chartered Accountants`,
    description:
      "Trusted Chartered Accountants for Businesses & Individuals — taxation, GST, audit, ROC compliance, and business consulting.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${firmName} | Chartered Accountants`,
    description:
      "Trusted Chartered Accountants for Businesses & Individuals — taxation, GST, audit, ROC compliance, and business consulting.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1'%20height='1'%3E%3C/svg%3E"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1'%20height='1'%3E%3C/svg%3E"
          type="image/svg+xml"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy-950 dark:bg-navy-950 dark:text-navy-50">


        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var saved = localStorage.getItem('kcs-theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                }catch(e){}
              })();
            `,
          }}
        />
        {children}
      </body>

    </html>
  );
}

