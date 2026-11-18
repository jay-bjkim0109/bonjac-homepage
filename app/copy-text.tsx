"use client";

import { useEffect, useState } from "react";

// Contact value that copies itself on click and says so in place for one second (DESIGN.md, Copy link)
export function CopyText({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard is unavailable (insecure origin or denied): leave the text for manual copy
    }
  }

  return (
    <button
      type="button"
      className={copied ? "copy-link is-copied" : "copy-link"}
      onClick={copy}
    >
      {/* The value stays in the layout while hidden, so the button keeps its size */}
      <span className="copy-value">{value}</span>
      <span className="copy-flag" role="status">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
