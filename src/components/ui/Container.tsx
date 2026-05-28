import type { ReactNode } from "react";

export default function Container({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="mx-auto w-[min(1200px,100%)] px-4">{children}</div>;
}

