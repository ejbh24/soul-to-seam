"use client";

import { useEffect } from "react";

export function ScrollOnLoad() {
  useEffect(() => {
    // stop browser from restoring old scroll position on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // force page to top on load
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  return null;
}