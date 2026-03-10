"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollOnLoad() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const section = searchParams.get("section");
    const hash = window.location.hash.replace("#", "");
    const target = section || hash;

    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // removes ?section=... or #...
        window.history.replaceState({}, "", window.location.pathname);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [searchParams]);

  return null;
}
