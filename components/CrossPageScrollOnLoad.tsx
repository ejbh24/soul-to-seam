"use client";

import { useEffect } from "react";

export function CrossPageScrollOnLoad() {
  useEffect(() => {
    const target = sessionStorage.getItem("cross-page-scroll-target");
    if (!target) return;

    sessionStorage.removeItem("cross-page-scroll-target");

    let attempts = 0;
    const maxAttempts = 20;

    const tryScroll = () => {
      const el = document.getElementById(target);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 100);
      }
    };

    window.setTimeout(tryScroll, 50);
  }, []);

  return null;
}
