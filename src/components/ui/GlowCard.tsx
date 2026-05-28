import type { ReactNode } from "react";

export default function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-navy-200/60 bg-white/55 p-6 shadow-glass backdrop-blur-md dark:border-navy-800/60 dark:bg-navy-950/35 " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
}

