"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollOnLoad() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;

    // Wait for DOM paint
    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Clean URL back to "/" so refresh doesn't stick
      window.history.replaceState({}, "", "/");
    });
  }, [searchParams]);

  return null;
}

