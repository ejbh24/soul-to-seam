"use client";

import React from "react";
import { useRouter } from "next/navigation";

export function ScrollButton({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const el = document.getElementById(targetId);

        // If we're on the page that has the section, just scroll (no hash in URL)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        // Otherwise, go to home and ask it to scroll after navigation
        router.push(`/?section=${encodeURIComponent(targetId)}`);
      }}
    >
      {children}
    </button>
  );
}

