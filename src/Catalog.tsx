import React, { useEffect } from "react";
import { colors, spacing } from "./tokens/tokens";
import Button from "./components/elements/Button";
import TextLink from "./components/elements/TextLink";
import PillTag from "./components/elements/PillTag";
import CustomLines from "./components/elements/CustomLines";
import HighlightedText from "./components/elements/HighlightedText";
import TextCard from "./components/elements/TextCard";
import { Link } from "./components/elements/Link";
import LinkGroup from "./components/elements/LinkGroup";
import DotSubheading from "./components/sections/DotSubheading";
import TextMasthead from "./components/sections/TextMasthead";
import GetStartedCTA from "./components/sections/GetStartedCTA";
import Logo from "./components/brand/Logo";
import BrandIcon, { brandIcons, BrandIconName } from "./components/brand/BrandIcon";
import {
  RightArrowCircle,
  RightArrow,
  CircleArrow,
  CTASpring,
  FooterFeaturedLinksArrow,
} from "./components/icons/Icons";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function CatalogSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-lavenderGrey py-16">
      <h2 className="mb-10 font-heading text-[13px] font-semibold uppercase tracking-[0.12em] text-navy/40">{title}</h2>
      {children}
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 font-body text-[11px] uppercase tracking-[0.1em] text-navy/40">{children}</p>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg bg-lightGrey px-4 py-3 font-mono text-[11px] leading-relaxed text-navy/60">
      {children}
    </pre>
  );
}

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-16 w-full rounded-xl border border-lavenderGrey" style={{ backgroundColor: hex }} />
      <span className="font-body text-[12px] font-medium text-navy">{name}</span>
      <span className="font-mono text-[10px] text-navy/40">{hex}</span>
    </div>
  );
}

function PropRow({ prop, type, desc }: { prop: string; type: string; desc: string }) {
  return (
    <tr className="border-t border-lavenderGrey">
      <td className="py-2 pr-4 font-mono text-[12px] text-blue">{prop}</td>
      <td className="py-2 pr-4 font-mono text-[12px] text-navy/50">{type}</td>
      <td className="py-2 font-body text-[12px] text-navy/70">{desc}</td>
    </tr>
  );
}

function PropsTable({ children }: { children: React.ReactNode }) {
  return (
    <table className="mt-4 w-full text-left">
      <thead>
        <tr>
          <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Prop</th>
          <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Type</th>
          <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Notes</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

// ─── Nav anchors ─────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "colors",        label: "Colors" },
  { id: "typography",    label: "Typography" },
  { id: "fonts",         label: "Fonts" },
  { id: "spacing",       label: "Spacing" },
  { id: "easing",        label: "Easing" },
  { id: "buttons",       label: "Button" },
  { id: "textlink",      label: "TextLink" },
  { id: "pilltag",       label: "PillTag" },
  { id: "customlines",   label: "CustomLines" },
  { id: "highlighted",   label: "HighlightedText" },
  { id: "dotsubheading", label: "DotSubheading" },
  { id: "textmasthead",  label: "TextMasthead" },
  { id: "textcard",      label: "TextCard" },
  { id: "section",       label: "Section" },
  { id: "getstarted",    label: "GetStartedCTA" },
  { id: "link",          label: "Link" },
  { id: "linkgroup",     label: "LinkGroup" },
  { id: "svgicons",      label: "SVG Icons" },
  { id: "logos",         label: "Logo" },
  { id: "brandicons",    label: "BrandIcon" },
  { id: "cssutils",      label: "CSS Utilities" },
  { id: "utils",         label: "Utils" },
];

// ─── Catalog ─────────────────────────────────────────────────────────────────

type PageType = "demo" | "catalog" | "brand-guide" | "glossary" | "best-practices";

const CROSS_NAV: { id: PageType; label: string }[] = [
  { id: "brand-guide", label: "Brand Guide" },
  { id: "glossary", label: "Glossary" },
  { id: "best-practices", label: "Best Practices" },
];

export default function Catalog({ onNavigate, initialAnchor }: { onNavigate: (page: PageType) => void; initialAnchor?: string }) {
  useEffect(() => {
    if (initialAnchor) {
      requestAnimationFrame(() => {
        document.getElementById(initialAnchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [initialAnchor]);

  return (
    <div className="min-h-screen bg-white text-navy">

      {/* ── Sticky top nav ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-lavenderGrey bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center justify-between gap-6 px-6 lg:px-12">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("demo")}
              className="flex items-center gap-1.5 font-body text-[13px] text-navy/50 transition-colors hover:text-navy"
            >
              ← Demo
            </button>
            <span className="text-navy/20">/</span>
            <span className="font-heading text-[14px] font-medium text-navy">Brand Catalog</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-1 md:flex">
              {CROSS_NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={`rounded-full px-3 py-1.5 font-body text-[12px] transition-colors ${
                    id === "catalog"
                      ? "bg-navy text-white"
                      : "text-navy/50 hover:bg-navy/5 hover:text-navy"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        {/* Section anchor nav */}
        <div className="border-t border-lavenderGrey/60">
          <div className="container mx-auto overflow-x-auto px-6 lg:px-12">
            <nav className="flex h-10 items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="shrink-0 font-body text-[11px] text-navy/50 transition-colors hover:text-navy"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12">

        {/* ── Page title ──────────────────────────────────────────────────── */}
        <div className="py-12">
          <p className="mb-3 font-body text-[13px] uppercase tracking-[0.12em] text-navy/40">Genius Sports</p>
          <h1 className="text-h2 font-light">Brand Component Catalog</h1>
          <p className="mt-4 font-body text-[16px] text-navy/60 max-w-xl">
            Every token, component, and visual element available in the Lovable brand template. Use this as your reference when building new experiences.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* COLORS                                                           */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="colors" title="Colors">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {(Object.entries(colors) as [string, string][]).map(([name, hex]) => (
              <Swatch key={name} name={name} hex={hex} />
            ))}
          </div>
          <Code>{`import { colors } from "./tokens/tokens";
// e.g. colors.navy → "#0D1226"

// Tailwind classes (all available as bg-*, text-*, border-*):
// bg-navy  bg-blue  bg-brightGreen  bg-lightGrey
// bg-lavenderGrey  bg-lightBlue  bg-lightPurple  ...`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TYPOGRAPHY                                                       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="typography" title="Typography Scale">
          <div className="space-y-1">

            {/* Display */}
            <p className="mb-4 font-body text-[11px] uppercase tracking-widest text-navy/30">Display</p>
            {[
              { cls: "text-88",  sample: "Aa" },
              { cls: "text-80",  sample: "Aa" },
              { cls: "text-72",  sample: "Aa" },
              { cls: "text-70",  sample: "Aa" },
              { cls: "text-64",  sample: "Aa" },
            ].map(({ cls, sample }) => (
              <div key={cls} className="flex items-baseline gap-6 border-b border-lavenderGrey py-3">
                <span className="w-32 shrink-0 font-mono text-[11px] text-navy/40">.{cls}</span>
                <span className={`${cls} font-light leading-none text-navy`}>{sample}</span>
              </div>
            ))}

            {/* Headings */}
            <p className="mb-4 mt-8 font-body text-[11px] uppercase tracking-widest text-navy/30">Headings</p>
            {[
              { cls: "text-h1",  tag: "h1",  sample: "The operating system of modern sport" },
              { cls: "text-h2",  tag: "h2",  sample: "Official data. Real-time delivery." },
              { cls: "text-h3",  tag: "h3",  sample: "Powered by official partnerships" },
              { cls: "text-h4",  tag: "h4",  sample: "150+ sports federations" },
              { cls: "text-h5",  tag: "h5",  sample: "Fan engagement tools" },
              { cls: "text-h6",  tag: "h6",  sample: "Learn more about our platform" },
              { cls: "text-h7",  tag: "p",   sample: "Integrity services and data feeds" },
            ].map(({ cls, tag, sample }) => (
              <div key={cls} className="flex items-baseline gap-6 border-b border-lavenderGrey py-3">
                <span className="w-32 shrink-0 font-mono text-[11px] text-navy/40">.{cls} / {tag}</span>
                <span className={`${cls} font-light text-navy`}>{sample}</span>
              </div>
            ))}

            {/* Body / UI */}
            <p className="mb-4 mt-8 font-body text-[11px] uppercase tracking-widest text-navy/30">Body &amp; UI</p>
            {[
              { cls: "text-header-stat", sample: "1B+ data events per year" },
              { cls: "text-40",   sample: "Powering sport worldwide" },
              { cls: "text-40-s", sample: "Powering sport worldwide" },
              { cls: "text-36",   sample: "Powering sport worldwide" },
              { cls: "text-32",   sample: "Powering sport worldwide" },
              { cls: "text-30",   sample: "Powering sport worldwide" },
              { cls: "text-24",   sample: "Powering sport worldwide" },
              { cls: "text-22",   sample: "Powering sport worldwide" },
              { cls: "text-20",   sample: "Powering sport worldwide" },
              { cls: "text-18",   sample: "Powering sport worldwide" },
              { cls: "text-17",   sample: "Powering sport worldwide" },
              { cls: "text-16",   sample: "Powering sport worldwide" },
              { cls: "text-15",   sample: "Powering sport worldwide" },
              { cls: "text-14",   sample: "Powering sport worldwide" },
              { cls: "text-12",   sample: "Powering sport worldwide" },
              { cls: "text-11",   sample: "Powering sport worldwide" },
              { cls: "text-9",    sample: "Powering sport worldwide" },
            ].map(({ cls, sample }) => (
              <div key={cls} className="flex items-baseline gap-6 border-b border-lavenderGrey py-2">
                <span className="w-32 shrink-0 font-mono text-[11px] text-navy/40">.{cls}</span>
                <span className={`${cls} text-navy`}>{sample}</span>
              </div>
            ))}
          </div>
          <Code>{`// Apply as a className — clamp-based fluid sizing between 768px–1024px
<h2 className="text-h2">Heading</h2>
<p className="text-22">Body copy</p>
<span className="text-14 text-navy/60">Label</span>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* FONTS                                                            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="fonts" title="Fonts">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* KlarheitKurrent */}
            <div className="rounded-2xl border border-lavenderGrey p-8">
              <p className="mb-6 font-body text-[11px] uppercase tracking-widest text-navy/40">KlarheitKurrent — font-heading</p>
              <div className="space-y-4">
                {[
                  { weight: 400, label: "Regular (400) — licensed" },
                  { weight: 500, label: "Medium (500) — trial" },
                  { weight: 600, label: "Semibold (600) — trial" },
                  { weight: 700, label: "Bold (700) — licensed" },
                ].map(({ weight, label }) => (
                  <div key={weight}>
                    <p className="mb-0.5 font-body text-[10px] text-navy/30">{label}</p>
                    <p className="font-heading text-[28px] leading-tight text-navy" style={{ fontWeight: weight }}>
                      The quick brown fox
                    </p>
                  </div>
                ))}
              </div>
              <Code>{`// Tailwind: font-heading
// CSS variable: var(--font-heading)
<h1 className="font-heading font-light">Display</h1>`}</Code>
            </div>

            {/* RedHatText */}
            <div className="rounded-2xl border border-lavenderGrey p-8">
              <p className="mb-6 font-body text-[11px] uppercase tracking-widest text-navy/40">RedHatText — font-body</p>
              <div className="space-y-4">
                {[
                  { weight: 400, label: "Regular (400)" },
                  { weight: 500, label: "Medium (500)" },
                ].map(({ weight, label }) => (
                  <div key={weight}>
                    <p className="mb-0.5 font-body text-[10px] text-navy/30">{label}</p>
                    <p className="font-body text-[28px] leading-tight text-navy" style={{ fontWeight: weight }}>
                      The quick brown fox
                    </p>
                  </div>
                ))}
              </div>
              <Code>{`// Tailwind: font-body
// CSS variable: var(--font-body)
<p className="font-body text-16">Body copy</p>`}</Code>
            </div>
          </div>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SPACING                                                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="spacing" title="Spacing Tokens">
          <p className="mb-6 font-body text-[14px] text-navy/60">
            Custom spacing values extending Tailwind's default scale. Use as <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">p-*</code>, <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">m-*</code>, <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">gap-*</code>, etc.
          </p>
          <div className="space-y-3">
            {(Object.entries(spacing) as [string, string][]).map(([token, value]) => (
              <div key={token} className="flex items-center gap-6">
                <span className="w-24 shrink-0 font-mono text-[12px] text-blue">{token}</span>
                <span className="w-24 shrink-0 font-mono text-[12px] text-navy/40">{value}</span>
                <div className="h-4 rounded bg-navy/10" style={{ width: value }} />
              </div>
            ))}
          </div>
          <Code>{`// Tailwind classes generated from spacing tokens:
// p-4.25   p-7.5   p-13   p-15   p-18   p-18.875
// Also available as m-*, gap-*, w-*, h-*, etc.`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* EASING                                                           */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="easing" title="Easing">
          <p className="mb-6 font-body text-[14px] text-navy/60">
            Brand easing curves used for animations. Available as CSS variables and Tailwind <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">ease-*</code> utilities.
          </p>
          <div className="space-y-6">
            {[
              {
                name: "slide",
                cssVar: "--ease-slide",
                tailwind: "ease-slide",
                curve: "cubic-bezier(0.68, -0.2, 0.15, 0.98)",
                desc: "Primary animation easing — used on button hover overlays. Fast in, snappy out.",
              },
              {
                name: "bounce",
                cssVar: "--ease-bounce",
                tailwind: "ease-bounce-brand",
                curve: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                desc: "Spring/bounce easing — used for elements that overshoot and settle.",
              },
            ].map(({ name, cssVar, tailwind, curve, desc }) => (
              <div key={name} className="rounded-2xl border border-lavenderGrey p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-[16px] font-medium text-navy">{name}</p>
                    <p className="mt-1 font-body text-[13px] text-navy/50">{desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[11px] text-navy/40">{cssVar}</p>
                    <p className="font-mono text-[11px] text-navy/40">{tailwind}</p>
                    <p className="mt-1 font-mono text-[11px] text-blue">{curve}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Code>{`/* CSS variable */
transition-timing-function: var(--ease-slide);

/* Tailwind utility */
className="transition-all ease-slide duration-300"
className="transition-transform ease-bounce-brand duration-500"

/* framer-motion (used in Button) */
ease: [0.68, -0.2, 0.15, 0.98]`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* BUTTON                                                           */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="buttons" title="Button">
          <PropsTable>
            <PropRow prop="button.type"             type='"default" | "slim" | "header" | "outline"'  desc="Visual style. default = full CTA, header = compact nav button." />
            <PropRow prop="button.background_color" type='"navy" | "white" | "light-grey" | "white15" | "navy5"' desc="Fill color of the button pill." />
            <PropRow prop="link.title"              type="string"  desc="Button label text." />
            <PropRow prop="link.url"                type="string"  desc="Destination href." />
          </PropsTable>

          {/* Types */}
          <div className="mt-10 space-y-12">

            <div>
              <Label>type: "default" — full CTA</Label>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-lavenderGrey p-8">
                <div className="flex flex-col items-start gap-2">
                  <span className="font-mono text-[10px] text-navy/30">navy</span>
                  <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "navy", type: "default" }} />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="font-mono text-[10px] text-navy/30">light-grey</span>
                  <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "light-grey", type: "default" }} />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="font-mono text-[10px] text-navy/30">navy5</span>
                  <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "navy5", type: "default" }} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl bg-navy p-8">
                <div className="flex flex-col items-start gap-2">
                  <span className="font-mono text-[10px] text-white/30">white</span>
                  <Button link={{ title: "Explore our platform", url: "#" }} button={{ background_color: "white", type: "default" }} />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="font-mono text-[10px] text-white/30">white15</span>
                  <Button link={{ title: "Learn more", url: "#" }} button={{ background_color: "white15", type: "default" }} />
                </div>
              </div>
            </div>

            <div>
              <Label>type: "slim" — secondary / inline CTA</Label>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-lavenderGrey p-8">
                <Button link={{ title: "View all", url: "#" }} button={{ background_color: "navy", type: "slim" }} />
                <Button link={{ title: "View all", url: "#" }} button={{ background_color: "light-grey", type: "slim" }} />
              </div>
            </div>

            <div>
              <Label>type: "header" — compact nav CTA</Label>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-lavenderGrey p-8">
                <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "light-grey", type: "header" }} />
                <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "navy", type: "header" }} />
              </div>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl bg-navy p-8">
                <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "white15", type: "header" }} />
              </div>
            </div>

            <div>
              <Label>type: "outline" — bordered / ghost</Label>
              <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-lavenderGrey p-8">
                <Button link={{ title: "See all partners", url: "#" }} button={{ background_color: "navy", type: "outline" }} />
              </div>
            </div>
          </div>

          <Code>{`<Button
  link={{ title: "Contact Sales", url: "/contact" }}
  button={{ background_color: "light-grey", type: "header" }}
/>

<Button
  link={{ title: "Explore our platform", url: "/platform" }}
  button={{ background_color: "navy", type: "default" }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TEXT LINK                                                        */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="textlink" title="TextLink">
          <PropsTable>
            <PropRow prop="text_link.background_color" type='"navy" | "white"' desc='Context color. "navy" = on light bg. "white" = on dark bg.' />
            <PropRow prop="link.title" type="string" desc="Link label." />
            <PropRow prop="link.url"   type="string" desc="Destination href." />
          </PropsTable>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-lavenderGrey p-8">
              <Label>background_color: "navy" — on light</Label>
              <TextLink link={{ title: "Learn more", url: "#" }} text_link={{ background_color: "navy" }} />
              <TextLink link={{ title: "See our partners", url: "#" }} text_link={{ background_color: "navy" }} />
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-navy p-8">
              <p className="mb-2 font-body text-[11px] uppercase tracking-[0.1em] text-white/40">background_color: "white" — on dark</p>
              <TextLink link={{ title: "Learn more", url: "#" }} text_link={{ background_color: "white" }} />
              <TextLink link={{ title: "See our partners", url: "#" }} text_link={{ background_color: "white" }} />
            </div>
          </div>
          <Code>{`<TextLink
  link={{ title: "Learn more", url: "/platform" }}
  text_link={{ background_color: "navy" }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* PILL TAG                                                         */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="pilltag" title="PillTag">
          <PropsTable>
            <PropRow prop="text" type="string" desc="Label text shown inside the pill." />
          </PropsTable>
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-lavenderGrey p-8">
            <PillTag text="New" />
            <PillTag text="Beta" />
            <PillTag text="Live" />
            <PillTag text="Featured" />
          </div>
          <Code>{`<PillTag text="New" />
<PillTag text="Beta" />`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* CUSTOM LINES                                                     */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="customlines" title="CustomLines">
          <PropsTable>
            <PropRow prop="lineNumber"      type="number"                   desc="Number of lines to render." />
            <PropRow prop="lineDirection"   type='"horizontal" | "vertical"' desc="Orientation of the lines." />
            <PropRow prop="lineClassName"   type="string"                   desc="Tailwind bg color class for the lines." />
            <PropRow prop="initialLineWidth" type="number"                  desc="Width of the widest line (px). Lines taper from this value." />
          </PropsTable>
          <div className="mt-8 space-y-6">
            <div>
              <Label>horizontal — 6 lines, bg-lavenderGrey</Label>
              <div className="h-10 rounded-xl border border-lavenderGrey px-4">
                <CustomLines lineNumber={6} lineDirection="horizontal" lineClassName="bg-lavenderGrey" initialLineWidth={6} />
              </div>
            </div>
            <div>
              <Label>horizontal — 6 lines, bg-blue/20</Label>
              <div className="h-10 rounded-xl border border-lavenderGrey px-4">
                <CustomLines lineNumber={6} lineDirection="horizontal" lineClassName="bg-blue/20" initialLineWidth={6} />
              </div>
            </div>
            <div>
              <Label>horizontal — 8 lines, bg-brightGreen/40, on dark</Label>
              <div className="h-10 rounded-xl bg-navy px-4">
                <CustomLines lineNumber={8} lineDirection="horizontal" lineClassName="bg-brightGreen/40" initialLineWidth={8} />
              </div>
            </div>
          </div>
          <Code>{`<CustomLines
  lineNumber={6}
  lineDirection="horizontal"
  lineClassName="bg-lavenderGrey"
  initialLineWidth={6}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HIGHLIGHTED TEXT                                                 */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="highlighted" title="HighlightedText">
          <PropsTable>
            <PropRow prop="tag"     type="string"  desc="HTML element to render (h1, h2, p, span, etc.)." />
            <PropRow prop="content" type="string"  desc="Text with |pipes| around the word(s) to highlight." />
            <PropRow prop="color"   type="string"  desc="Tailwind color name for the highlighted span (e.g. brightGreen, lightBlue)." />
          </PropsTable>
          <div className="mt-8 space-y-6 rounded-2xl border border-lavenderGrey p-8">
            <div>
              <Label>color: brightGreen — on navy</Label>
              <div className="rounded-xl bg-navy px-6 py-4 text-white">
                <HighlightedText tag="h2" content="The data behind |modern sport|" color="brightGreen" />
              </div>
            </div>
            <div>
              <Label>color: lightBlue — on navy</Label>
              <div className="rounded-xl bg-navy px-6 py-4 text-white">
                <HighlightedText tag="h2" content="Powering the world's |biggest| sports |properties|" color="lightBlue" />
              </div>
            </div>
            <div>
              <Label>color: blue — on white</Label>
              <HighlightedText tag="h2" content="Official data. |Real-time| delivery." color="blue" />
            </div>
            <div>
              <Label>color: orange — on white</Label>
              <HighlightedText tag="h3" content="Fan engagement |tools|" color="orange" />
            </div>
          </div>
          <Code>{`<HighlightedText
  tag="h2"
  content="The data behind |modern sport|"
  color="brightGreen"
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* DOT SUBHEADING                                                   */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="dotsubheading" title="DotSubheading">
          <PropsTable>
            <PropRow prop="subheading" type="string" desc="Label text." />
            <PropRow prop="colour"     type="string" desc="Tailwind color name for the dot (e.g. blue, navy, brightGreen)." />
          </PropsTable>
          <div className="mt-8 flex flex-wrap gap-4 rounded-2xl border border-lavenderGrey p-8">
            {["blue", "navy", "brightGreen", "lightBlue", "orange", "lightPurple", "lightGreen"].map((colour) => (
              <DotSubheading key={colour} subheading={colour} colour={colour} />
            ))}
          </div>
          <Code>{`<DotSubheading subheading="Our platform" colour="blue" />
<DotSubheading subheading="Trusted by the best" colour="brightGreen" />`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TEXT MASTHEAD                                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="textmasthead" title="TextMasthead">
          <PropsTable>
            <PropRow prop="content.subheading"              type="string"              desc="Small label above the heading. Rendered as a DotSubheading unless simple_subheading is true." />
            <PropRow prop="content.heading"                 type="string"              desc="Main h1. Use <> for a line break at md+ breakpoint." />
            <PropRow prop="content.content"                 type="string"              desc="Body paragraph below the heading." />
            <PropRow prop="content.links"                   type="LinkProps[]"         desc="Array of button/text link objects passed to LinkGroup." />
            <PropRow prop="options.alignment"               type='"center" | "left"'   desc="Text alignment. Default is center." />
            <PropRow prop="options.text_size"               type='"default" | "large"' desc='"large" bumps heading to is-large class and body to text-22.' />
            <PropRow prop="options.subheading_colour"       type='{ colours: string }' desc="Dot color for the DotSubheading." />
            <PropRow prop="options.simple_subheading"       type="boolean"             desc="Renders subheading as plain text instead of DotSubheading." />
            <PropRow prop="options.add_springs"             type="boolean"             desc="Shows decorative tapered-line spring decorations on both sides." />
            <PropRow prop="options.spring_colour"           type='{ colours: string }' desc="Color of the spring decoration lines." />
            <PropRow prop="options.max_width"               type="number"              desc="Max width of the entire block in px." />
            <PropRow prop="options.content_max_width"       type="number"              desc="Max width of the body paragraph in px." />
          </PropsTable>

          <div className="mt-8 space-y-6">
            <div>
              <Label>alignment: "center", text_size: "large", springs on navy</Label>
              <div className="overflow-hidden rounded-2xl bg-navy px-6 py-16 text-white">
                <TextMasthead
                  content={{
                    subheading: "Powering sport worldwide",
                    heading: "The data and technology<> behind modern sport",
                    content: "We connect sports federations, broadcasters, and betting operators with official data, integrity services, and fan engagement tools.",
                    links: [
                      { link: { title: "Explore our platform", url: "#", target: "" }, type: "button", button: { background_color: "white", type: "default" } } as any,
                      { link: { title: "Talk to sales", url: "#", target: "" }, type: "text", text_link: { background_color: "white" } } as any,
                    ],
                  }}
                  options={{
                    alignment: "center",
                    text_size: "large",
                    subheading_colour: { colours: "brightGreen" },
                    add_springs: true,
                    spring_colour: { colours: "blue" },
                  }}
                />
              </div>
            </div>
            <div>
              <Label>alignment: "left", text_size: "default", no springs</Label>
              <div className="overflow-hidden rounded-2xl border border-lavenderGrey px-8 py-12">
                <TextMasthead
                  content={{
                    subheading: "Our platform",
                    heading: "Official data.<> Real-time delivery.",
                    content: "Industry-leading sports integrity monitoring, protecting the fairness of competition.",
                    links: [
                      { link: { title: "Learn more", url: "#", target: "" }, type: "button", button: { background_color: "navy", type: "default" } } as any,
                    ],
                  }}
                  options={{
                    alignment: "left",
                    text_size: "default",
                    subheading_colour: { colours: "blue" },
                  }}
                />
              </div>
            </div>
          </div>
          <Code>{`<TextMasthead
  content={{
    subheading: "Powering sport worldwide",
    heading: "The data and technology<> behind modern sport",
    // <> inserts a line break at md+ breakpoint
    content: "Body copy here.",
    links: [
      { link: { title: "Explore", url: "/platform", target: "" },
        type: "button", button: { background_color: "white", type: "default" } },
      { link: { title: "Talk to sales", url: "/contact", target: "" },
        type: "text", text_link: { background_color: "navy" } },
    ],
  }}
  options={{
    alignment: "center",      // or "left"
    text_size: "large",        // or "default"
    subheading_colour: { colours: "brightGreen" },
    add_springs: true,
    spring_colour: { colours: "blue" },
  }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* TEXT CARD                                                        */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="textcard" title="TextCard">
          <PropsTable>
            <PropRow prop="text_card.subheading"                 type="string"                    desc="Small label above the heading." />
            <PropRow prop="text_card.heading"                    type="string"                    desc="Main heading. Wrap words in |pipes| for highlight." />
            <PropRow prop="text_card.content"                    type="string"                    desc="Body paragraph." />
            <PropRow prop="text_card.links"                      type="LinkGroup[]"               desc="Array of buttons/text links." />
            <PropRow prop="text_card.options.heading_tag"        type='"h1"–"h6"'                 desc="HTML tag for the heading." />
            <PropRow prop="text_card.options.text_alignment"     type='"left"|"center"|"right"'   desc="Alignment of all text." />
            <PropRow prop="text_card.options.heading_highlighted_color" type="string"            desc="Highlight color for |piped| words." />
          </PropsTable>

          <div className="mt-8 space-y-6">
            <div>
              <Label>left-aligned — on navy</Label>
              <div className="rounded-2xl bg-navy p-10 text-white">
                <TextCard
                  text_card={{
                    subheading: "Trusted by the best",
                    heading: "Powering the world's biggest sports |properties|",
                    content: "From Premier League to the NFL, our technology sits at the heart of sport's data infrastructure.",
                    links: [
                      { link: { title: "See our partners", url: "#", target: "" }, type: "button", button: { background_color: "white", type: "default" } } as any,
                    ],
                    options: { heading_tag: "h2", heading_highlighted_color: "brightGreen", text_alignment: "left" },
                  }}
                />
              </div>
            </div>
            <div>
              <Label>center-aligned — on white</Label>
              <div className="rounded-2xl border border-lavenderGrey p-10">
                <TextCard
                  text_card={{
                    subheading: "Our platform",
                    heading: "Official data. |Real-time| delivery.",
                    content: "We connect sports federations, broadcasters, and betting operators with the official data they need.",
                    links: [
                      { link: { title: "Explore", url: "#", target: "" }, type: "button", button: { background_color: "navy", type: "default" } } as any,
                    ],
                    options: { heading_tag: "h2", heading_highlighted_color: "blue", text_alignment: "center", section_alignment: "center" },
                  }}
                />
              </div>
            </div>
          </div>
          <Code>{`<TextCard
  text_card={{
    subheading: "Our platform",
    heading: "Official data. |Real-time| delivery.",
    content: "Body copy here.",
    links: [
      { link: { title: "Learn more", url: "#", target: "" },
        type: "button", button: { background_color: "navy", type: "default" } }
    ],
    options: {
      heading_tag: "h2",
      heading_highlighted_color: "blue",
      text_alignment: "left",
    },
  }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SECTION                                                          */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="section" title="Section">
          <PropsTable>
            <PropRow prop="background.background_color" type="string"  desc="Background color token (navy, white, lightGrey, blue, etc.)." />
            <PropRow prop="padding_top / padding_bottom" type='"none"|"min"|"tiny"|"xSmall"|"small"|"medium"|"large"|"xLarge"|"huge"|"max"' desc="Vertical padding scale." />
            <PropRow prop="inner_spacing" type="same as padding" desc="space-y between child elements." />
            <PropRow prop="has_container" type="boolean"   desc="Wraps content in a centered max-width container." />
            <PropRow prop="is_rounded"    type="boolean"   desc="Applies rounded corners to the inner block." />
          </PropsTable>

          <div className="mt-8 space-y-2">
            <Label>Background color options</Label>
            {["white", "snow", "lightGrey", "navy", "blue", "brightGreen", "lightBlue", "lightPurple", "lightOrange"].map((bg) => (
              <div
                key={bg}
                className="flex items-center justify-between rounded-xl border border-lavenderGrey/50 px-5 py-4"
                style={{ backgroundColor: (colors as Record<string, string>)[bg] || bg }}
              >
                <span
                  className="font-mono text-[12px]"
                  style={{ color: ["navy", "blue"].includes(bg) ? "#fff" : "#0D1226" }}
                >
                  {bg}
                </span>
                <span
                  className="font-mono text-[11px] opacity-50"
                  style={{ color: ["navy", "blue"].includes(bg) ? "#fff" : "#0D1226" }}
                >
                  background_color: "{bg}"
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            <Label>Padding scale (top/bottom)</Label>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Token</th>
                    <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Mobile</th>
                    <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Desktop</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-[12px]">
                  {[
                    ["none",   "0",     "0"],
                    ["min",    "2rem",  "5rem"],
                    ["tiny",   "2rem",  "6rem"],
                    ["xSmall", "2.5rem","6.5rem"],
                    ["small",  "2.5rem","7rem"],
                    ["medium", "3rem",  "7.5rem"],
                    ["large",  "3rem",  "9rem"],
                    ["xLarge", "4rem",  "10rem"],
                    ["huge",   "4rem",  "11rem"],
                    ["max",    "5rem",  "11.875rem"],
                  ].map(([token, mob, desk]) => (
                    <tr key={token} className="border-t border-lavenderGrey">
                      <td className="py-2 pr-6 text-blue">{token}</td>
                      <td className="py-2 pr-6 text-navy/50">{mob}</td>
                      <td className="py-2 text-navy/50">{desk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Code>{`<Section
  background={{ background_color: "navy" }}
  padding_top="large"
  padding_bottom="large"
  has_container
  inner_spacing="medium"
>
  {/* children */}
</Section>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* GET STARTED CTA                                                  */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="getstarted" title="GetStartedCTA">
          <PropsTable>
            <PropRow prop="heading" type="string" desc="Main headline." />
            <PropRow prop="content" type="string" desc="Supporting body text." />
            <PropRow prop="link"    type="{ title, url, target }" desc="CTA button link." />
          </PropsTable>
          <div className="mt-8">
            <GetStartedCTA
              heading="Ready to get started?"
              content="Join the world's leading sports data platform."
              link={{ title: "Talk to our team", url: "#", target: "" }}
            />
          </div>
          <Code>{`<GetStartedCTA
  heading="Ready to get started?"
  content="Join the world's leading sports data platform."
  link={{ title: "Talk to our team", url: "/contact", target: "" }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* LINK                                                             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="link" title="Link">
          <p className="mb-4 font-body text-[14px] text-navy/60">
            Vite-compatible <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">&lt;a&gt;</code> wrapper. Accepts a <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">type</code> prop to render as a Button or TextLink internally. When <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">url</code> is <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">#</code> or empty, it disables pointer events automatically.
          </p>
          <PropsTable>
            <PropRow prop="link.url"    type="string"  desc="href. Falls back to href or to props. Disables clicks if '#' or empty." />
            <PropRow prop="link.title"  type="string"  desc="Plain text link label (no type needed)." />
            <PropRow prop="link.target" type="string"  desc='"_blank" opens in new tab, otherwise same tab.' />
            <PropRow prop="type"        type='"button" | "text"' desc='Renders a Button or TextLink inside the anchor.' />
            <PropRow prop="button"      type="ButtonProps"  desc="Passed through to Button when type=button." />
            <PropRow prop="text_link"   type="TextLinkProps" desc="Passed through to TextLink when type=text." />
          </PropsTable>
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-lavenderGrey p-8">
            <div className="flex flex-col gap-1">
              <Label>Plain text link</Label>
              <Link link={{ title: "Visit our website", url: "#" }} className="font-body text-[15px] text-blue underline" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>type="button"</Label>
              <Link link={{ title: "Get started", url: "#" }} type="button" {...{ button: { background_color: "navy", type: "default" } } as any} />
            </div>
            <div className="flex flex-col gap-1">
              <Label>type="text"</Label>
              <Link link={{ title: "Learn more", url: "#" }} type="text" {...{ text_link: { background_color: "navy" } } as any} />
            </div>
          </div>
          <Code>{`import { Link } from "./components/elements/Link";

// Plain anchor
<Link link={{ title: "Visit site", url: "/about" }} />

// As a button
<Link
  link={{ title: "Get started", url: "/signup" }}
  type="button"
  button={{ background_color: "navy", type: "default" }}
/>

// As a text link
<Link
  link={{ title: "Learn more", url: "/platform" }}
  type="text"
  text_link={{ background_color: "navy" }}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* LINK GROUP                                                       */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="linkgroup" title="LinkGroup">
          <p className="mb-4 font-body text-[14px] text-navy/60">
            Renders an array of Link objects in a flex row (wraps to column on mobile). Used internally by TextMasthead and TextCard to render mixed button + text link combinations.
          </p>
          <PropsTable>
            <PropRow prop="links"              type="LinkProps[]" desc="Array of Link objects — each can be type button or text." />
            <PropRow prop="centered"           type="boolean"     desc="Centers items horizontally." />
            <PropRow prop="noFullWidthOnMobile" type="boolean"    desc="Prevents links from going full-width on small screens." />
          </PropsTable>
          <div className="mt-8 space-y-4">
            <div>
              <Label>Mixed button + text link (centered)</Label>
              <div className="rounded-2xl bg-navy p-8">
                <LinkGroup
                  centered
                  links={[
                    { link: { title: "Explore our platform", url: "#", target: "" }, type: "button", button: { background_color: "white", type: "default" } } as any,
                    { link: { title: "Talk to sales", url: "#", target: "" }, type: "text", text_link: { background_color: "white" } } as any,
                  ]}
                />
              </div>
            </div>
            <div>
              <Label>Two buttons (left-aligned)</Label>
              <div className="rounded-2xl border border-lavenderGrey p-8">
                <LinkGroup
                  links={[
                    { link: { title: "Primary CTA", url: "#", target: "" }, type: "button", button: { background_color: "navy", type: "default" } } as any,
                    { link: { title: "Secondary", url: "#", target: "" }, type: "button", button: { background_color: "light-grey", type: "default" } } as any,
                  ]}
                />
              </div>
            </div>
          </div>
          <Code>{`import LinkGroup from "./components/elements/LinkGroup";

<LinkGroup
  centered
  links={[
    {
      link: { title: "Explore", url: "/platform", target: "" },
      type: "button",
      button: { background_color: "white", type: "default" },
    },
    {
      link: { title: "Talk to sales", url: "/contact", target: "" },
      type: "text",
      text_link: { background_color: "navy" },
    },
  ]}
/>`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* SVG ICONS                                                        */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="svgicons" title="SVG Icons">
          <p className="mb-4 font-body text-[14px] text-navy/60">
            Internal SVG primitives used by other components. Color is controlled via <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">currentColor</code> / className props. Not intended as standalone icons — use BrandIcon for brand iconography.
          </p>
          <div className="mt-8 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="flex flex-col gap-3 rounded-2xl border border-lavenderGrey p-6">
                <Label>RightArrowCircle</Label>
                <p className="font-body text-[12px] text-navy/50">Used by TextLink. Circle and arrow colors are independent props.</p>
                <div className="flex items-center gap-4">
                  <RightArrowCircle />
                  <RightArrowCircle circleClassName="text-blue" arrowClassName="text-white" />
                  <RightArrowCircle circleClassName="text-brightGreen" arrowClassName="text-navy" />
                  <div className="rounded-lg bg-navy p-2">
                    <RightArrowCircle circleClassName="text-white" arrowClassName="text-navy" />
                  </div>
                </div>
                <Code>{`<RightArrowCircle
  circleClassName="text-navy"   // default
  arrowClassName="text-white"   // default
  width={27} height={26}
/>`}</Code>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-lavenderGrey p-6">
                <Label>RightArrow</Label>
                <p className="font-body text-[12px] text-navy/50">Bare arrow, fills parent container. Wrap in a sized div.</p>
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 text-navy"><RightArrow /></div>
                  <div className="h-4 w-4 text-blue"><RightArrow /></div>
                  <div className="h-6 w-6 text-brightGreen"><RightArrow /></div>
                </div>
                <Code>{`<div className="h-4 w-4 text-navy">
  <RightArrow />
</div>`}</Code>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-lavenderGrey p-6">
                <Label>CircleArrow</Label>
                <p className="font-body text-[12px] text-navy/50">Diagonal arrow (NE direction). Fills parent container.</p>
                <div className="flex items-center gap-4">
                  <div className="h-5 w-5 text-navy"><CircleArrow /></div>
                  <div className="h-5 w-5 text-blue"><CircleArrow /></div>
                  <div className="h-8 w-8 text-orange"><CircleArrow /></div>
                </div>
                <Code>{`<div className="h-5 w-5 text-navy">
  <CircleArrow />
</div>`}</Code>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-lavenderGrey p-6 sm:col-span-2">
                <Label>CTASpring</Label>
                <p className="font-body text-[12px] text-navy/50">The tapered vertical-line spring decoration used in GetStartedCTA. Blue lines on white background. Fills parent container.</p>
                <div className="h-24 w-48 overflow-hidden rounded-lg border border-lavenderGrey">
                  <CTASpring />
                </div>
                <Code>{`<div className="h-32 w-64">
  <CTASpring />
</div>`}</Code>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-lavenderGrey p-6">
                <Label>FooterFeaturedLinksArrow</Label>
                <p className="font-body text-[12px] text-navy/50">Small diagonal arrow (15×16). Fixed size, navy stroke.</p>
                <FooterFeaturedLinksArrow />
                <Code>{`<FooterFeaturedLinksArrow />`}</Code>
              </div>

            </div>
          </div>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* LOGO                                                             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="logos" title="Logo">
          <PropsTable>
            <PropRow prop="variant"   type='"horizontal" | "vertical" | "wordmark" | "marque"' desc="Which logo lockup to render." />
            <PropRow prop="color"     type='"blue" | "white"'  desc="Color version. Use white on dark backgrounds." />
            <PropRow prop="className" type="string"             desc="Controls display size. Use w-[Xpx] h-auto (width-first) to honour brand minimums: vertical ≥110px, horizontal/wordmark ≥70px, marque ≥40px." />
          </PropsTable>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-8 rounded-2xl border border-lavenderGrey p-10">
              <p className="font-body text-[11px] uppercase tracking-widest text-navy/30">On light — color: "blue"</p>
              <div className="flex flex-col gap-8">
                {(["horizontal", "wordmark", "marque", "vertical"] as const).map((v) => (
                  <div key={v} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-navy/30">{v}</span>
                    <Logo variant={v} color="blue" className="w-[160px] h-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 rounded-2xl bg-navy p-10">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/30">On dark — color: "white"</p>
              <div className="flex flex-col gap-8">
                {(["horizontal", "wordmark", "marque", "vertical"] as const).map((v) => (
                  <div key={v} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-white/30">{v}</span>
                    <Logo variant={v} color="white" className="w-[160px] h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Code>{`{/* Width-first sizing respects brand minimums (vertical ≥110px, horizontal/wordmark ≥70px, marque ≥40px) */}
<Logo variant="vertical"   color="white" className="w-[110px] h-auto" /> {/* hero / large display */}
<Logo variant="horizontal" color="blue"  className="h-14 w-auto" />      {/* nav on white bg — h-14 → ~114px wide */}
<Logo variant="horizontal" color="white" className="h-14 w-auto" />      {/* nav on dark bg */}
<Logo variant="marque"     color="blue"  className="w-[40px] h-auto" />  {/* icon only */}`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* BRAND ICONS                                                      */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="brandicons" title="BrandIcon">
          <PropsTable>
            <PropRow prop="name"  type="BrandIconName" desc="Icon identifier — see full list below." />
            <PropRow prop="mode"  type='"light" | "dark"' desc='"light" = navy icon (on light bg). "dark" = white icon (on dark bg).' />
            <PropRow prop="size"  type="number | string"  desc="Width and height in px (default 48)." />
          </PropsTable>

          <div className="mt-8 space-y-8">
            <div>
              <Label>mode: "light" — navy icons, on light background</Label>
              <div className="flex flex-wrap gap-6 rounded-2xl border border-lavenderGrey p-8">
                {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <BrandIcon name={name} mode="light" size={40} />
                    <span className="font-body text-[10px] text-navy/40 capitalize">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>mode: "dark" — white icons, on dark background</Label>
              <div className="flex flex-wrap gap-6 rounded-2xl bg-navy p-8">
                {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <BrandIcon name={name} mode="dark" size={40} />
                    <span className="font-body text-[10px] text-white/40 capitalize">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Code>{`import BrandIcon, { BrandIconName } from "./components/brand/BrandIcon";

// Available names:
// basketball, cloud, data, distribute, engage, euros, fans, field,
// football, liveData, livePricing, majorSports, monetise, personalise,
// platform, pounds, pricing, reach, soccer, social, stadium, statistics,
// tier1Support, video, vr3d

<BrandIcon name="data"     mode="light" size={48} /> {/* on light bg */}
<BrandIcon name="data"     mode="dark"  size={48} /> {/* on dark bg  */}`}</Code>
        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* CSS UTILITIES                                                    */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="cssutils" title="CSS Utilities">

          {/* Container variants */}
          <div className="mb-12">
            <h3 className="mb-4 font-heading text-[15px] font-medium text-navy">Container Variants</h3>
            <p className="mb-4 font-body text-[14px] text-navy/60">
              Width-capped centered containers for narrower content columns. Use instead of Tailwind's default <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">container</code> when you need a specific max-width.
            </p>
            <div className="space-y-3">
              {[
                { cls: "container--small",  width: "676px",  desc: "Narrow — long-form text, single-column content" },
                { cls: "container--medium", width: "846px",  desc: "Medium — article body, forms" },
                { cls: "container--large",  width: "1376px", desc: "Wide — full-bleed layout with breathing room" },
              ].map(({ cls, width, desc }) => (
                <div key={cls} className="flex items-center gap-6 rounded-xl border border-lavenderGrey px-5 py-3">
                  <span className="w-44 shrink-0 font-mono text-[12px] text-blue">.{cls}</span>
                  <span className="w-20 shrink-0 font-mono text-[12px] text-navy/40">{width}</span>
                  <span className="font-body text-[13px] text-navy/60">{desc}</span>
                </div>
              ))}
            </div>
            <Code>{`<div className="container--small">
  {/* Max 676px, centered */}
</div>`}</Code>
          </div>

          {/* Text stroke */}
          <div className="mb-12">
            <h3 className="mb-4 font-heading text-[15px] font-medium text-navy">Text Stroke</h3>
            <p className="mb-4 font-body text-[14px] text-navy/60">
              Used with the TextStrokeStack pattern — applies <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">-webkit-text-stroke</code> to create outlined text. Apply to transparent-colored text for the outline-only effect.
            </p>
            <div className="flex flex-wrap gap-6 rounded-2xl bg-navy p-8">
              {[
                { cls: "stroke-brightGreen", color: "brightGreen", label: "brightGreen" },
                { cls: "stroke-lightPurple", color: "lightPurple", label: "lightPurple" },
                { cls: "stroke-white",       color: "white",       label: "white" },
                { cls: "stroke-lightBlue",   color: "lightBlue",   label: "lightBlue" },
              ].map(({ cls, label }) => (
                <div key={cls} className="flex flex-col items-center gap-2">
                  <span
                    className={`text-h4 font-light text-stroke-stack__item--${cls}`}
                    style={{ color: "transparent" }}
                  >
                    Aa
                  </span>
                  <span className="font-mono text-[10px] text-white/40">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-6 rounded-2xl border border-lavenderGrey p-8">
              <span
                className="text-h4 font-light text-stroke-stack__item--stroke-navy"
                style={{ color: "transparent" }}
              >
                Aa
              </span>
              <span className="self-center font-mono text-[11px] text-navy/40">stroke-navy</span>
            </div>
            <Code>{`// Class format: text-stroke-stack__item--stroke-{color}
// Available: brightGreen, lightPurple, navy, white, lightBlue

<span
  className="text-h1 font-light text-stroke-stack__item--stroke-brightGreen"
  style={{ color: "transparent" }}
>
  Genius Sports
</span>`}</Code>
          </div>

          {/* Scrollbar utilities */}
          <div>
            <h3 className="mb-4 font-heading text-[15px] font-medium text-navy">Scrollbar</h3>
            <p className="mb-4 font-body text-[14px] text-navy/60">
              Styled scrollbar utilities for scrollable containers. Apply to any element with <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">overflow-auto</code> or <code className="rounded bg-lightGrey px-1.5 py-0.5 font-mono text-[12px]">overflow-scroll</code>.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>.scrollbar--dark — on light bg</Label>
                <div className="scrollbar--dark h-24 overflow-y-scroll rounded-xl border border-lavenderGrey p-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i} className="font-body text-[13px] text-navy/60">Scrollable content row {i + 1}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>.scrollbar--light — on dark bg</Label>
                <div className="scrollbar--light h-24 overflow-y-scroll rounded-xl bg-navy p-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i} className="font-body text-[13px] text-white/60">Scrollable content row {i + 1}</p>
                  ))}
                </div>
              </div>
            </div>
            <Code>{`<div className="scrollbar--dark overflow-y-scroll h-64">
  {/* content */}
</div>

<div className="scrollbar--light overflow-y-scroll h-64 bg-navy">
  {/* content */}
</div>`}</Code>
          </div>

        </CatalogSection>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* UTILS                                                            */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <CatalogSection id="utils" title="Utility Functions">
          <p className="mb-8 font-body text-[14px] text-navy/60">
            Developer utility functions used internally by components. Import directly when building custom components.
          </p>

          <div className="space-y-10">

            {/* colorHelpers */}
            <div>
              <h3 className="mb-3 font-heading text-[15px] font-medium text-navy">colorHelpers.ts</h3>
              <p className="mb-4 font-body text-[13px] text-navy/60">Maps color token names to CSS hex values, Tailwind classes, or paired bg+text combinations.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Function</th>
                      <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Input</th>
                      <th className="pb-2 font-body text-[11px] uppercase tracking-widest text-navy/30">Output example</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-[12px]">
                    {[
                      ["getHexValue(color)",              '"navy"',        '"#0D1226"'],
                      ["getClassValue(color)",             '"blue"',        '"bg-blue"'],
                      ["getTextColor(color)",              '"brightGreen"', '"text-brightGreen"'],
                      ["getBackgroundAndTextColor(color)", '"navy"',        '"bg-navy text-white"'],
                      ["getSectionColors(color)",          '"lightGrey"',   '"bg-lightGrey text-navy"'],
                    ].map(([fn, input, output]) => (
                      <tr key={fn} className="border-t border-lavenderGrey">
                        <td className="py-2 pr-6 text-blue">{fn}</td>
                        <td className="py-2 pr-6 text-navy/50">{input}</td>
                        <td className="py-2 text-navy/50">{output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Code>{`import { getHexValue, getClassValue, getTextColor,
         getBackgroundAndTextColor, getSectionColors }
  from "./utils/colorHelpers";

getHexValue("navy")                 // "#0D1226"
getClassValue("blue")               // "bg-blue"
getTextColor("brightGreen")         // "text-brightGreen"
getBackgroundAndTextColor("navy")   // "bg-navy text-white"
getSectionColors("lightGrey")       // "bg-lightGrey text-navy"`}</Code>
            </div>

            {/* text.tsx */}
            <div>
              <h3 className="mb-3 font-heading text-[15px] font-medium text-navy">text.tsx</h3>
              <p className="mb-4 font-body text-[13px] text-navy/60">String transform utilities for heading content.</p>
              <div className="space-y-4 rounded-2xl border border-lavenderGrey p-6">
                <div>
                  <Label>getSplitBreakText — converts &lt;&gt; to a &lt;br&gt; span</Label>
                  <p className="font-body text-[13px] text-navy/60 mb-2">
                    Wrap <code className="rounded bg-lightGrey px-1 font-mono text-[11px]">&lt;&gt;</code> in heading text to insert a line break that only activates at the <code className="rounded bg-lightGrey px-1 font-mono text-[11px]">md</code> breakpoint.
                  </p>
                  <Code>{`getSplitBreakText({ text: "Modern sport<>powered by data" })
// → 'Modern sport<span class="br"></span>powered by data'

// breakAtAll: true → breaks on all screen sizes
getSplitBreakText({ text: "Line one<>Line two", breakAtAll: true })`}</Code>
                </div>
                <div>
                  <Label>getHighlightedText — converts |pipes| to colored spans</Label>
                  <Code>{`getHighlightedText({ content: "The |future| of sport", color: "brightGreen" })
// → 'The <span class="text-brightGreen">future</span> of sport'`}</Code>
                </div>
                <div>
                  <Label>getCapitalisedString</Label>
                  <Code>{`getCapitalisedString("genius sports") // → "Genius sports"`}</Code>
                </div>
              </div>
            </div>

            {/* links.tsx */}
            <div>
              <h3 className="mb-3 font-heading text-[15px] font-medium text-navy">links.tsx</h3>
              <p className="mb-4 font-body text-[13px] text-navy/60">Helper functions to build typed link objects for LinkGroup arrays without writing the full object shape by hand.</p>
              <Code>{`import { getButtonLinkProps, getTextLinkProps, getLinkTarget }
  from "./utils/links";

// Build a button link object
getButtonLinkProps({
  title: "Get started",
  url: "/signup",
  button: { background_color: "navy", type: "default" },
})
// → { link: { title, url, target: "" }, type: "button", button: {...} }

// Build a text link object
getTextLinkProps({ title: "Learn more", url: "/platform" })
// → { link: { title, url, target: "" }, type: "text", text_link: { background_color: "navy" } }

// Get safe target value
getLinkTarget("_blank")  // → "_blank"
getLinkTarget("")        // → "_self"`}</Code>
            </div>

          </div>
        </CatalogSection>

      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="mt-16 border-t border-lavenderGrey px-6 py-10 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Logo variant="horizontal" color="blue" className="h-20 w-auto" />
          <span className="font-body text-[12px] text-navy/30">GS Brand Catalog — internal use only</span>
        </div>
      </footer>
    </div>
  );
}
