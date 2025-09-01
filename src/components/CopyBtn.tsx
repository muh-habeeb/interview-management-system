"use client";

import { useState, ReactNode } from "react";
import { CopyIcon, CopyCheckIcon } from "lucide-react";
import toast from "react-hot-toast";

interface CopyToClipboardProps {
  /** The string to copy (used if children not provided) */
  value?: string;
  /** Children text (used if value not provided) */
  children?: ReactNode;
  /** If true, shows "Copy"/"Copied" instead of icons */
  textMode?: boolean;
  /** Duration in ms before reset (default: 3000ms) */
  resetAfter?: number;
}

/**
 * Copy-to-clipboard component.
 * Usage rules:
 * - Either use <CopyToClipboard value="..."/> 
 * - Or use <CopyToClipboard>text</CopyToClipboard>
 * - Do NOT combine both.
 */
export  function CopyToClipboard({
  value,
  children,
  textMode = false,
  resetAfter = 3000,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      let textToCopy: string | null = null;

      if (children && value) {
        toast.error("Use either children OR value, not both");
        return;
      }

      if (typeof children === "string") {
        textToCopy = children;
      } else if (value) {
        textToCopy = value;
      }

      if (!textToCopy) {
        toast.error("Nothing to copy");
        return;
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success("Copied!");

      setTimeout(() => setCopied(false), resetAfter);
    } catch (err) {
      toast.error("Failed to copy");
      console.error(err);
    }
  };

  if (textMode) {
    // --- Text Button Mode ---
    return (
      <button
        onClick={handleCopy}
        className="text-sm px-2  rounded-sm bg-zinc-700  hover:bg-zinc-600 active:scale-95 transition text-white cursor-pointer"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    );
  }

  // --- Icon Mode ---
  return (
    <span onClick={handleCopy} className="cursor-pointer">
      {copied ? (
        <CopyCheckIcon className="size-5 text-green-500 transition-colors active:scale-95 " />
      ) : (
        <CopyIcon className="size-5 transition-opacity active:scale-95" />
      )}
    </span>
  );
}
