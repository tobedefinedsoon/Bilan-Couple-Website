"use client";

import { useEffect, useState } from "react";

interface ObfuscatedTextProps {
  /** Base64 encoded text */
  encoded: string;
  /** Optional className for styling */
  className?: string;
  /** Render as inline span (default) or block div */
  as?: "span" | "div";
}

/**
 * ObfuscatedText component to protect any text from crawler bots.
 *
 * Usage:
 * 1. Encode your text in base64: btoa("Your Text Here")
 * 2. Pass it to this component: <ObfuscatedText encoded="..." />
 *
 * Example:
 * <ObfuscatedText
 *   encoded="U3ZlbiBCb3JkZW4="
 *   className="font-bold"
 * />
 */
export default function ObfuscatedText({
  encoded,
  className = "",
  as = "span",
}: ObfuscatedTextProps) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    // Decode the text on the client side only
    // This prevents crawlers from seeing the plain text in HTML
    try {
      const decoded = atob(encoded);
      setText(decoded);
    } catch (error) {
      console.error("Failed to decode text:", error);
    }
  }, [encoded]);

  // Don't render anything until client-side JavaScript runs
  if (!text) {
    return as === "div" ? (
      <div className={className}>...</div>
    ) : (
      <span className={className}>...</span>
    );
  }

  if (as === "div") {
    return <div className={className}>{text}</div>;
  }

  return <span className={className}>{text}</span>;
}

/**
 * Utility function to encode text
 * Use this in your console to generate encoded text:
 *
 * encodeText("Sven Borden")
 * // Returns: "U3ZlbiBCb3JkZW4="
 */
export function encodeText(text: string): string {
  if (typeof window !== "undefined") {
    return btoa(text);
  }
  // Node.js environment
  return Buffer.from(text).toString("base64");
}
