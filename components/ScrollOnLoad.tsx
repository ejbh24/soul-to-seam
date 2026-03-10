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

    if (section) {
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState({}, "", window.location.pathname);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [searchParams]);

  return null;
}
