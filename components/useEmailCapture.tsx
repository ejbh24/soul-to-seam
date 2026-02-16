"use client";

import { useState } from "react";

export function useEmailCapture(source?: string) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  async function submit() {
    setError(null);

    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, company: "" }),
      });

      if (!res.ok) {
        setError("Something went wrong.");
        return;
      }

      setShowThanks(true);
      setEmail("");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    setEmail,
    error,
    loading,
    showThanks,
    setShowThanks,
    submit,
  };
}

