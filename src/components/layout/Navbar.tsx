"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import ThemeToggle from "@/components/theme/ThemeToggle";

import { FiMenu, FiX } from "react-icons/fi";


const phone = "+91 9511630795";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("/");

  useEffect(() => {
    const onHash = () => {
      setActive(window.location.pathname || "/");
    };
    onHash();
    window.addEventListener("popstate", onHash);
    return () => window.removeEventListener("popstate", onHash);
  }, []);

  const mobileItems = useMemo(() => navItems, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={
          "mx-auto w-[min(1200px,100%)] px-4 pt-3 transition"
        }
      >
        <div
          className={
            "flex items-center justify-between rounded-2xl border border-white/25 bg-white/55 px-3 py-3 shadow-glass backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-950/35"
          }
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-950 shadow-gold">
              <Image
                src="/CALogo.jpg"
                alt="Chartered Accountant logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-navy-950 dark:text-navy-50">
                KC Shinde & Associates


              </span>
              <span className="block text-xs text-navy-600 dark:text-navy-200">
                Chartered Accountants
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-3 py-2 text-sm transition",
                    active === item.href
                    ? "bg-navy-950 text-black dark:text-black"
                    : "text-navy-900 hover:bg-white/70 dark:text-navy-50 dark:hover:bg-navy-900/60"
                )}
              >
                {item.label}
              </Link>
            ))}

          </nav>


          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200/60 bg-white/60 shadow-glass backdrop-blur-sm transition hover:border-gold-400/60 hover:bg-white dark:border-navy-800/60 dark:bg-navy-900/40"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {open && (
          <div
            className={
              "mt-2 overflow-hidden rounded-2xl border border-white/25 bg-white/55 shadow-glass backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-950/35"
            }
          >
            <div className="flex flex-col gap-1 p-3">
              {mobileItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-xl px-3 py-3 text-sm transition",
                    active === item.href
                      ? "bg-navy-950 text-black dark:text-black"
                      : "text-navy-900 hover:bg-white/70 dark:text-navy-50 dark:hover:bg-navy-900/60"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="mt-1 rounded-xl bg-gold-500 px-4 py-3 text-sm font-semibold text-navy-950 shadow-gold"
                onClick={() => setOpen(false)}
              >
                Call {phone}
              </a>
            </div>
          </div>
        )}

      </motion.div>
    </header>
  );
}

