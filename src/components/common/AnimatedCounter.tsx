"use client";

import { useEffect, useMemo, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix,
  durationMs = 900,
  className,
}: {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat("en-IN");
  }, []);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const step = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, value]);

  return (
    <span className={className}>
      {formatter.format(display)}
      {suffix ?? ""}
    </span>
  );
}

