import React, { useState } from "react";

export type HintData = {
  component: string;
  description: string;
  prompt: string;
};

type HintMode = "section" | "element";

function HintModal({
  hint,
  onClose,
}: {
  hint: HintData;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(hint.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(13,18,38,0.65)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-lavenderGrey px-6 pb-5 pt-6">
          <div>
            <span className="mb-1.5 block font-body text-[11px] uppercase tracking-widest text-navy/40">
              Component
            </span>
            <h2 className="font-heading text-[24px] font-light text-navy">{hint.component}</h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 rounded-full p-2 font-body text-[14px] leading-none text-navy/30 transition-colors hover:bg-lightGrey hover:text-navy"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <p className="font-body text-[15px] leading-relaxed text-navy/70">{hint.description}</p>
        </div>

        <div className="px-6 pb-6">
          <p className="mb-2 font-body text-[11px] uppercase tracking-widest text-navy/40">
            Lovable prompt — click to copy
          </p>
          <button
            onClick={copy}
            className="group w-full rounded-xl border border-blue/20 bg-blue/[0.03] px-4 py-3 text-left transition-all hover:border-blue/40 hover:shadow-sm"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-[10px] uppercase tracking-widest text-blue/40">
                Click to copy
              </span>
              <span
                className={`font-body text-[11px] transition-opacity ${
                  copied ? "text-blue opacity-100" : "text-navy/30 opacity-0 group-hover:opacity-100"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </span>
            </div>
            <p className="font-body text-[14px] leading-relaxed text-navy/70">{hint.prompt}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HintOverlay({
  children,
  hint,
  mode = "element",
  inline = false,
}: {
  children: React.ReactNode;
  hint: HintData;
  mode?: HintMode;
  inline?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative ${inline ? "inline-block" : ""}`}
        onMouseEnter={() => mode === "element" && setHovered(true)}
        onMouseLeave={() => mode === "element" && setHovered(false)}
      >
        {children}

        {/* Section mode: always-visible pill */}
        {mode === "section" && (
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(true); }}
            className="absolute right-4 top-4 z-30 flex items-center gap-1.5 rounded-full bg-blue px-3 py-1.5 font-body text-[12px] font-medium text-white shadow-md transition-colors hover:bg-navy"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="shrink-0">
              <circle cx="5.5" cy="5.5" r="5" stroke="currentColor" strokeWidth="1" />
              <path d="M5.5 5V8M5.5 3.2V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {hint.component}
          </button>
        )}

        {/* Element mode: small badge on hover */}
        {mode === "element" && (
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(true); }}
            className={`absolute -right-2 -top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-blue font-body text-[10px] font-bold text-white shadow-sm transition-opacity duration-150 ${
              hovered ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            i
          </button>
        )}
      </div>

      {open && <HintModal hint={hint} onClose={() => setOpen(false)} />}
    </>
  );
}
