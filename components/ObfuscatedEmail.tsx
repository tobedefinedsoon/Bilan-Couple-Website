"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { trackEmailReveal } from "@/lib/analytics";

interface ObfuscatedEmailProps {
  /** Base64 encoded email address */
  encoded: string;
  /** Optional className for styling */
  className?: string;
  /** Show as mailto link (default: true) */
  asLink?: boolean;
}

/**
 * ObfuscatedEmail component to protect email addresses from crawler bots.
 *
 * Usage:
 * 1. Encode your email in base64: btoa("your@email.com")
 * 2. Pass it to this component: <ObfuscatedEmail encoded="..." />
 *
 * Example:
 * <ObfuscatedEmail
 *   encoded="c3ZlbmR4c0BnbWFpbC5jb20="
 *   className="hover:text-raspberry"
 * />
 */
export default function ObfuscatedEmail({
  encoded,
  className = "",
  asLink = true,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");
  const locale = useLocale();

  useEffect(() => {
    // Decode the email on the client side only
    // This prevents crawlers from seeing the plain email in HTML
    try {
      const decoded = atob(encoded);
      setEmail(decoded);
    } catch (error) {
      console.error("Failed to decode email:", error);
    }
  }, [encoded]);

  // Don't render anything until client-side JavaScript runs
  if (!email) {
    return <span className={className}>...</span>;
  }

  if (asLink) {
    return (
      <a
        href={`mailto:${email}`}
        className={className}
        onClick={(e) => {
          // Additional protection: prevent automated clicks
          e.stopPropagation();
          // Track email reveal for analytics
          trackEmailReveal(locale);
        }}
      >
        {email}
      </a>
    );
  }

  return <span className={className}>{email}</span>;
}

/**
 * Utility function to encode email addresses
 * Use this in your console to generate encoded emails:
 *
 * encodeEmail("your@email.com")
 * // Returns: "eW91ckBlbWFpbC5jb20="
 */
export function encodeEmail(email: string): string {
  if (typeof window !== "undefined") {
    return btoa(email);
  }
  // Node.js environment
  return Buffer.from(email).toString("base64");
}
