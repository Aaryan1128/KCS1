"use client";

import { useEffect, useState } from "react";


export default function ThemeToggle() {
  const canRender = typeof window !== "undefined";

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!canRender) return;
    // Defer to avoid synchronous cascading render warnings.
    const id = window.setTimeout(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    }, 0);
    return () => window.clearTimeout(id);
  }, [canRender]);


  const toggle = () => {

    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const next = !isDark;
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("kcs-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark/light mode"
      className={
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200/60 bg-white/60 text-navy-900 shadow-glass backdrop-blur-sm transition hover:border-gold-400/60 hover:bg-white dark:border-navy-800/60 dark:bg-navy-900/40 dark:text-navy-50"
      }
      disabled={!canRender}
    >
      <span aria-hidden className="text-sm">{isDark ? "☾" : "☀"}</span>
    </button>

  );
}

