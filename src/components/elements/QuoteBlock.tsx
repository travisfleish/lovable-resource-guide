import { colors as colorTokens } from "~/tokens/tokens";

type QuoteBlockProps = {
  quote: string;
  name: string;
  role?: string;
  accentColor?: string;    // brand token — brightGreen | blue | lightBlue | orange
  background?: string;     // brand token — navy | blue
  className?: string;
};

export default function QuoteBlock({
  quote,
  name,
  role,
  accentColor = "brightGreen",
  background = "navy",
  className = "",
}: QuoteBlockProps) {
  const accentHex =
    (colorTokens as Record<string, string>)[accentColor] ?? accentColor;
  const bgHex =
    (colorTokens as Record<string, string>)[background] ?? background;

  return (
    <div
      className={`rounded-2xl px-10 py-12 ${className}`}
      style={{ backgroundColor: bgHex }}
    >
      {/* Opening quote mark */}
      <div
        className="mb-4 select-none font-heading text-[72px] leading-[0.75]"
        style={{ color: accentHex }}
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Quote body */}
      <p className="font-heading text-[22px] font-light leading-relaxed text-white">
        {quote}
      </p>

      {/* Divider */}
      <div className="my-6 h-[1px] w-12" style={{ backgroundColor: accentHex }} />

      {/* Attribution */}
      <p className="font-heading text-[15px] font-medium" style={{ color: accentHex }}>
        {name}
      </p>
      {role && (
        <p className="mt-0.5 font-body text-[13px] text-white/50">{role}</p>
      )}
    </div>
  );
}
