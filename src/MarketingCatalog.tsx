import React, { useEffect, useRef, useState } from "react";
import { colors } from "./tokens/tokens";
import Button from "./components/elements/Button";
import TextLink from "./components/elements/TextLink";
import PillTag from "./components/elements/PillTag";
import HighlightedText from "./components/elements/HighlightedText";
import TextCard from "./components/elements/TextCard";
import DotSubheading from "./components/sections/DotSubheading";
import TextMasthead from "./components/sections/TextMasthead";
import Logo from "./components/brand/Logo";
import BrandIcon, { brandIcons, BrandIconName } from "./components/brand/BrandIcon";

// ─── Types ───────────────────────────────────────────────────────────────────

type PromptPair = { descriptive: string; specific: string };

// ─── Reusable pieces ─────────────────────────────────────────────────────────

function PromptBox({ prompt }: { prompt: PromptPair }) {
  const [copied, setCopied] = useState<"descriptive" | "specific" | null>(null);

  function copy(type: "descriptive" | "specific") {
    navigator.clipboard.writeText(type === "descriptive" ? prompt.descriptive : prompt.specific);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="mt-5 space-y-3">
      <p className="font-body text-[11px] uppercase tracking-[0.1em] text-navy/40">Lovable prompts — click to copy</p>

      {/* Descriptive prompt */}
      <button
        onClick={() => copy("descriptive")}
        className="group w-full rounded-xl border border-lavenderGrey bg-white px-4 py-3 text-left transition-all hover:border-blue/40 hover:shadow-sm"
      >
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-body text-[10px] uppercase tracking-widest text-navy/30">Describe it</span>
          <span className={`font-body text-[11px] transition-opacity ${copied === "descriptive" ? "text-blue opacity-100" : "text-navy/30 opacity-0 group-hover:opacity-100"}`}>
            {copied === "descriptive" ? "Copied!" : "Copy"}
          </span>
        </div>
        <p className="font-body text-[14px] leading-relaxed text-navy/70">{prompt.descriptive}</p>
      </button>

      {/* Specific prompt */}
      <button
        onClick={() => copy("specific")}
        className="group w-full rounded-xl border border-blue/20 bg-blue/[0.03] px-4 py-3 text-left transition-all hover:border-blue/40 hover:shadow-sm"
      >
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-body text-[10px] uppercase tracking-widest text-blue/40">Using brand terms</span>
          <span className={`font-body text-[11px] transition-opacity ${copied === "specific" ? "text-blue opacity-100" : "text-blue/30 opacity-0 group-hover:opacity-100"}`}>
            {copied === "specific" ? "Copied!" : "Copy"}
          </span>
        </div>
        <p className="font-body text-[14px] leading-relaxed text-navy/70">{prompt.specific}</p>
      </button>
    </div>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8 border-b border-lavenderGrey pb-6">
      <h2 className="font-heading text-[28px] font-light text-navy">{title}</h2>
      <p className="mt-2 font-body text-[15px] text-navy/50">{description}</p>
    </div>
  );
}

function PreviewCard({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl ${dark ? "bg-navy text-white" : "border border-lavenderGrey bg-white text-navy"} ${className}`}>
      {children}
    </div>
  );
}

function ExampleBlock({
  label,
  dark = false,
  children,
  prompt,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
  prompt: PromptPair;
}) {
  return (
    <div>
      <p className="mb-3 font-body text-[12px] font-medium uppercase tracking-[0.08em] text-navy/60">{label}</p>
      <PreviewCard dark={dark} className="p-8">
        {children}
      </PreviewCard>
      <PromptBox prompt={prompt} />
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "colors",      label: "Colors" },
  { id: "headings",    label: "Headings" },
  { id: "body-text",   label: "Body Text" },
  { id: "buttons",     label: "Buttons" },
  { id: "text-links",  label: "Text Links" },
  { id: "backgrounds", label: "Backgrounds" },
  { id: "labels",      label: "Labels" },
  { id: "highlights",  label: "Highlighted Text" },
  { id: "hero",        label: "Hero Section" },
  { id: "content",     label: "Content Blocks" },
  { id: "tags",        label: "Tags" },
  { id: "logo",        label: "Logo" },
  { id: "icons",       label: "Icons" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MarketingCatalog({ onBack }: { onBack: () => void }) {
  const [activeSection, setActiveSection] = useState("colors");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy">

      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-lavenderGrey bg-white/95 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="font-body text-[13px] text-navy/40 transition-colors hover:text-navy"
            >
              ← Back
            </button>
            <span className="text-navy/20">/</span>
            <div className="flex items-center gap-2.5">
              <Logo variant="marque" color="blue" className="h-5 w-auto" />
              <span className="font-heading text-[15px] font-medium text-navy">Brand Guide</span>
            </div>
          </div>
          <span className="hidden font-body text-[12px] text-navy/30 md:block">
            For use with Genius Sports Lovable
          </span>
        </div>

        {/* Mobile nav — horizontal scroll */}
        <div className="flex gap-1 overflow-x-auto border-t border-lavenderGrey px-4 py-2 md:hidden">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 rounded-full px-3 py-1 font-body text-[12px] transition-colors ${
                activeSection === id ? "bg-navy text-white" : "text-navy/50 hover:text-navy"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </header>

      <div className="flex">

        {/* ── Sidebar nav (desktop) ──────────────────────────────────────── */}
        <aside className="hidden w-52 shrink-0 md:block">
          <nav className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pl-6 pr-4">
            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.12em] text-navy/30">Jump to</p>
            <ul className="space-y-0.5">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block rounded-lg px-3 py-2 font-body text-[14px] transition-colors ${
                      activeSection === id
                        ? "bg-navy text-white"
                        : "text-navy/50 hover:bg-lightGrey hover:text-navy"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main content ────────────────────────────────────────────────── */}
        <main className="min-w-0 flex-1 px-6 py-10 md:border-l md:border-lavenderGrey md:px-10 lg:px-16">

          {/* Page intro */}
          <div className="mb-16 max-w-xl">
            <p className="mb-3 font-body text-[12px] uppercase tracking-[0.12em] text-navy/30">Genius Sports</p>
            <h1 className="text-h2 font-light">Brand Guide</h1>
            <p className="mt-4 font-body text-[16px] leading-relaxed text-navy/60">
              Browse the visual building blocks available when creating with Lovable. For each element, you'll find two ready-to-use prompts — one conversational, one more precise.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* COLORS                                                         */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="colors" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Colors"
              description="The full Genius Sports color palette. Every color has a name — use that name when asking Lovable to apply it anywhere."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {(Object.entries(colors) as [string, string][]).map(([name, hex]) => {
                const isDark = ["navy", "blue", "green", "purple", "red", "black"].includes(name);
                return (
                  <div key={name} className="overflow-hidden rounded-2xl border border-lavenderGrey">
                    <div className="h-20" style={{ backgroundColor: hex }} />
                    <div className="px-3 py-2.5">
                      <p className="font-heading text-[14px] font-medium text-navy">{name}</p>
                      <p className="font-mono text-[11px] text-navy/40">{hex}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <PromptBox
              prompt={{
                descriptive: "Change the hero section background to a deep dark navy blue, with all text in white.",
                specific: "Set the Section background_color to 'navy'. Use brightGreen as the accent highlight color for key words in the heading.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* HEADINGS                                                       */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="headings" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Headings"
              description="Seven heading sizes, all in KlarheitKurrent. They scale fluidly between mobile and desktop — pick the size that fits the visual weight you need."
            />
            <div className="divide-y divide-lavenderGrey rounded-2xl border border-lavenderGrey">
              {[
                { label: "Heading 1 — page title, hero headline", cls: "text-h1", sample: "The operating system of modern sport" },
                { label: "Heading 2 — section headline", cls: "text-h2", sample: "Official data. Real-time delivery." },
                { label: "Heading 3 — sub-section headline", cls: "text-h3", sample: "Powered by official partnerships" },
                { label: "Heading 4 — card headline, stat", cls: "text-h4", sample: "150+ sports federations" },
                { label: "Heading 5 — smaller card title", cls: "text-h5", sample: "Fan engagement tools" },
                { label: "Heading 6 — label heading", cls: "text-h6", sample: "Learn more about our platform" },
                { label: "Heading 7 — small bold label", cls: "text-h7", sample: "Integrity services and data feeds" },
              ].map(({ label, cls, sample }) => (
                <div key={cls} className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <div className="w-44 shrink-0">
                    <p className="font-body text-[11px] text-navy/40">{label}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-navy/25">{cls}</p>
                  </div>
                  <p className={`${cls} font-light text-navy`}>{sample}</p>
                </div>
              ))}
            </div>
            <PromptBox
              prompt={{
                descriptive: "Add a large, light-weight main headline that says 'The future of sport data'. It should be the biggest text on the page.",
                specific: "Add an h1 heading that says 'The future of sport data'. Use the text-h1 heading style with font-light.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* BODY TEXT                                                      */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="body-text" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Body Text"
              description="Body copy is set in Red Hat Text. Use these size classes for paragraphs, captions, labels, and UI text."
            />
            <div className="divide-y divide-lavenderGrey rounded-2xl border border-lavenderGrey">
              {[
                { label: "Large body — hero sub-copy", cls: "text-22", sample: "We connect sports federations, broadcasters, and betting operators with the official data they need to grow." },
                { label: "Standard body — section copy", cls: "text-18", sample: "We connect sports federations, broadcasters, and betting operators with the official data they need to grow." },
                { label: "Small body — card copy, captions", cls: "text-15", sample: "We connect sports federations, broadcasters, and betting operators with official data." },
                { label: "Label / meta text", cls: "text-12", sample: "30+ years of innovation" },
              ].map(({ label, cls, sample }) => (
                <div key={cls} className="px-6 py-5">
                  <div className="mb-3 flex items-center gap-4">
                    <p className="font-body text-[11px] text-navy/40">{label}</p>
                    <span className="font-mono text-[10px] text-navy/25">{cls}</span>
                  </div>
                  <p className={`${cls} font-body text-navy/70`}>{sample}</p>
                </div>
              ))}
            </div>
            <PromptBox
              prompt={{
                descriptive: "Add a short paragraph below the heading that describes our sports data platform in 2–3 sentences. The text should be medium-sized body copy in a slightly muted tone.",
                specific: "Add a paragraph using the text-18 class and font-body. Set the text color to text-navy/70 to give it a slightly muted appearance.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* BUTTONS                                                        */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="buttons" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Buttons"
              description="All buttons use a pill shape with a framer-motion hover animation. Choose a style and color to match where the button appears."
            />
            <div className="space-y-6">

              <ExampleBlock
                label="Primary CTA — navy background"
                prompt={{
                  descriptive: "Add a large pill-shaped button with a dark navy background and white text that says 'Explore our platform'.",
                  specific: "Add a Button with background_color 'navy' and type 'default' that says 'Explore our platform'.",
                }}
              >
                <div className="w-fit">
                  <Button link={{ title: "Explore our platform", url: "#" }} button={{ background_color: "navy", type: "default" }} />
                </div>
              </ExampleBlock>

              <ExampleBlock
                label="Primary CTA — white background (use on dark sections)"
                dark
                prompt={{
                  descriptive: "Add a large white pill button with navy text that says 'Explore our platform'. It's going on a dark navy background.",
                  specific: "Add a Button with background_color 'white' and type 'default' that says 'Explore our platform'.",
                }}
              >
                <div className="w-fit">
                  <Button link={{ title: "Explore our platform", url: "#" }} button={{ background_color: "white", type: "default" }} />
                </div>
              </ExampleBlock>

              <ExampleBlock
                label="Secondary CTA — light grey (subtle, on light backgrounds)"
                prompt={{
                  descriptive: "Add a subtle grey pill button that says 'Learn more'. It should feel secondary — less prominent than the main CTA.",
                  specific: "Add a Button with background_color 'light-grey' and type 'default' that says 'Learn more'.",
                }}
              >
                <div className="w-fit">
                  <Button link={{ title: "Learn more", url: "#" }} button={{ background_color: "light-grey", type: "default" }} />
                </div>
              </ExampleBlock>

              <ExampleBlock
                label="Nav CTA — compact header button"
                prompt={{
                  descriptive: "Add a small compact grey pill button in the top navigation bar that says 'Contact Sales'. It should be noticeably smaller than a full CTA button.",
                  specific: "Add a Button with background_color 'light-grey' and type 'header' that says 'Contact Sales'. Place it in the navigation header.",
                }}
              >
                <div className="flex w-fit items-center gap-4">
                  <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "light-grey", type: "header" }} />
                  <Button link={{ title: "Contact Sales", url: "#" }} button={{ background_color: "navy", type: "header" }} />
                </div>
              </ExampleBlock>

              <ExampleBlock
                label="Slim CTA — smaller inline button"
                prompt={{
                  descriptive: "Add a small compact navy button that says 'View all'. It should be smaller than the main CTA — use it for secondary actions inside cards or lists.",
                  specific: "Add a Button with background_color 'navy' and type 'slim' that says 'View all'.",
                }}
              >
                <div className="w-fit">
                  <Button link={{ title: "View all", url: "#" }} button={{ background_color: "navy", type: "slim" }} />
                </div>
              </ExampleBlock>

              <ExampleBlock
                label="Outline button — bordered / ghost style"
                prompt={{
                  descriptive: "Add a ghost-style button with just a border and no fill, that says 'See all partners'. It should use a pill shape with a subtle grey border.",
                  specific: "Add a Button with background_color 'navy' and type 'outline' that says 'See all partners'.",
                }}
              >
                <div className="w-fit">
                  <Button link={{ title: "See all partners", url: "#" }} button={{ background_color: "navy", type: "outline" }} />
                </div>
              </ExampleBlock>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* TEXT LINKS                                                     */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="text-links" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Text Links"
              description="An arrow-circle icon paired with bold text. Use as a secondary action inside cards, or wherever you want a link that doesn't need a full button."
            />
            <div className="space-y-6">
              <ExampleBlock
                label="On a light background"
                prompt={{
                  descriptive: "Add a text link with a circular arrow icon that says 'Learn more'. Place it at the bottom of the card on a white background.",
                  specific: "Add a TextLink with background_color 'navy' that says 'Learn more'.",
                }}
              >
                <TextLink link={{ title: "Learn more", url: "#" }} text_link={{ background_color: "navy" }} />
              </ExampleBlock>

              <ExampleBlock
                label="On a dark background"
                dark
                prompt={{
                  descriptive: "Add a white text link with a circular arrow icon that says 'See our partners'. It's going on a dark navy section.",
                  specific: "Add a TextLink with background_color 'white' that says 'See our partners'.",
                }}
              >
                <TextLink link={{ title: "See our partners", url: "#" }} text_link={{ background_color: "white" }} />
              </ExampleBlock>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* SECTION BACKGROUNDS                                            */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="backgrounds" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Section Backgrounds"
              description="Every page section can have its own background color. These are the most commonly used options — text color is set automatically."
            />
            <div className="space-y-3">
              {[
                { bg: "white",      textColor: "text-navy",  label: "White",       desc: "Default — clean and open" },
                { bg: "snow",       textColor: "text-navy",  label: "Snow",        desc: "Off-white — subtle warmth" },
                { bg: "lightGrey",  textColor: "text-navy",  label: "Light Grey",  desc: "Soft grey — great for stats rows and dividers" },
                { bg: "navy",       textColor: "text-white", label: "Navy",        desc: "Dark — hero sections, feature callouts" },
                { bg: "blue",       textColor: "text-white", label: "Blue",        desc: "Brand blue — CTAs, highlight sections" },
                { bg: "brightGreen",textColor: "text-navy",  label: "Bright Green",desc: "Accent — use sparingly for emphasis" },
                { bg: "lightBlue",  textColor: "text-navy",  label: "Light Blue",  desc: "Soft accent" },
                { bg: "lightPurple",textColor: "text-navy",  label: "Light Purple",desc: "Soft accent" },
                { bg: "lightOrange",textColor: "text-navy",  label: "Light Orange",desc: "Soft accent" },
              ].map(({ bg, textColor, label, desc }) => (
                <div
                  key={bg}
                  className="flex items-center justify-between rounded-2xl border border-lavenderGrey/60 px-6 py-4"
                  style={{ backgroundColor: (colors as Record<string, string>)[bg] || "#fff" }}
                >
                  <div>
                    <p className={`font-heading text-[16px] font-medium ${textColor}`}>{label}</p>
                    <p className={`font-body text-[13px] ${textColor} opacity-50`}>{desc}</p>
                  </div>
                  <p className={`font-mono text-[12px] ${textColor} opacity-30`}>"{bg}"</p>
                </div>
              ))}
            </div>
            <PromptBox
              prompt={{
                descriptive: "Change the statistics section to a light grey background. Keep the text dark.",
                specific: "Set the Section background_color to 'lightGrey' for the statistics row section.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* LABELS / DOT SUBHEADING                                       */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="labels" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Labels"
              description="A small pill label with a colored dot and a tapering line decoration. Used above section headings to categorize or introduce content."
            />
            <PreviewCard className="p-10">
              <div className="flex flex-wrap gap-y-6 gap-x-10">
                {[
                  { text: "Our platform", colour: "blue" },
                  { text: "Trusted by the best", colour: "brightGreen" },
                  { text: "Integrity services", colour: "navy" },
                  { text: "Fan engagement", colour: "lightBlue" },
                  { text: "Betting operators", colour: "orange" },
                  { text: "Sports data", colour: "lightPurple" },
                ].map(({ text, colour }) => (
                  <div key={colour} className="flex flex-col gap-1.5">
                    <p className="font-mono text-[10px] text-navy/30">{colour}</p>
                    <DotSubheading subheading={text} colour={colour} />
                  </div>
                ))}
              </div>
            </PreviewCard>
            <PromptBox
              prompt={{
                descriptive: "Add a small pill label above the main heading that says 'Our platform' with a blue dot on the left side.",
                specific: "Add a DotSubheading above the heading with subheading 'Our platform' and colour 'blue'.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* HIGHLIGHTED TEXT                                               */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="highlights" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Highlighted Text"
              description="Specific words in a heading can be colored differently for emphasis. Wrap words in | pipe characters | to highlight them."
            />
            <div className="space-y-6">
              <ExampleBlock
                label="Bright green highlight — on dark sections"
                dark
                prompt={{
                  descriptive: "In the hero heading that says 'The data behind modern sport', make the words 'modern sport' appear in bright yellow-green to highlight them.",
                  specific: "In the heading, wrap the words 'modern sport' in pipe characters: 'The data behind |modern sport|'. Set heading_highlighted_color to 'brightGreen'.",
                }}
              >
                <HighlightedText tag="h2" content="The data behind |modern sport|" color="brightGreen" />
              </ExampleBlock>

              <ExampleBlock
                label="Light blue highlight — on dark sections"
                dark
                prompt={{
                  descriptive: "Make the word 'biggest' in the heading appear in light blue. The heading reads 'Powering the world's biggest sports properties'.",
                  specific: "Wrap 'biggest' in pipes: 'Powering the world's |biggest| sports properties'. Set heading_highlighted_color to 'lightBlue'.",
                }}
              >
                <HighlightedText tag="h2" content="Powering the world's |biggest| sports properties" color="lightBlue" />
              </ExampleBlock>

              <ExampleBlock
                label="Blue highlight — on light sections"
                prompt={{
                  descriptive: "In the section heading, make the words 'real-time' appear in brand blue to draw attention to them.",
                  specific: "Wrap 'real-time' in pipes: 'Official data. |Real-time| delivery.' Set heading_highlighted_color to 'blue'.",
                }}
              >
                <HighlightedText tag="h2" content="Official data. |Real-time| delivery." color="blue" />
              </ExampleBlock>

              <ExampleBlock
                label="Orange highlight — on light sections"
                prompt={{
                  descriptive: "Highlight the words 'fan engagement' in orange in the section heading.",
                  specific: "Wrap 'fan engagement' in pipes and set heading_highlighted_color to 'orange'.",
                }}
              >
                <HighlightedText tag="h2" content="Driving |fan engagement| worldwide" color="orange" />
              </ExampleBlock>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* HERO SECTION                                                   */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="hero" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Hero Section"
              description="The top section of a page. Supports a label, headline, body copy, and CTA buttons. Can be centered or left-aligned, with optional decorative spring elements on the sides."
            />
            <div className="space-y-6">

              <ExampleBlock
                label="Centered hero — with spring decorations (most common for landing pages)"
                dark
                prompt={{
                  descriptive: "Add a centered hero section on a navy background with: a bright green label that says 'Powering sport worldwide', a large heading that says 'The data and technology behind modern sport' with a line break before 'behind', body copy describing our platform in one sentence, a white CTA button that says 'Explore our platform', and a text link that says 'Talk to sales'. Add the decorative spring elements on each side.",
                  specific: "Add a TextMasthead inside a navy Section with: alignment 'center', text_size 'large', subheading 'Powering sport worldwide' with subheading_colour 'brightGreen', heading 'The data and technology<> behind modern sport' (the <> creates a line break), body content, a white default Button, a text TextLink, and add_springs set to true with spring_colour 'blue'.",
                }}
              >
                <div className="overflow-hidden px-4 py-12">
                  <TextMasthead
                    content={{
                      subheading: "Powering sport worldwide",
                      heading: "The data and technology<> behind modern sport",
                      content: "We connect sports federations, broadcasters, and betting operators with the official data, integrity services, and fan engagement tools they need to grow.",
                      links: [
                        { link: { title: "Explore our platform", url: "#", target: "" }, type: "button", button: { background_color: "white", type: "default" } } as any,
                        { link: { title: "Talk to sales", url: "#", target: "" }, type: "text", text_link: { background_color: "navy" } } as any,
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
              </ExampleBlock>

              <ExampleBlock
                label="Left-aligned hero — no springs (good for product / inner pages)"
                prompt={{
                  descriptive: "Add a left-aligned hero section on a white background with a blue label, a large heading, short body copy, and a single navy CTA button. No decorative elements.",
                  specific: "Add a TextMasthead with alignment 'left', text_size 'default', a blue DotSubheading label, heading, content, and a navy default Button link.",
                }}
              >
                <div className="px-4 py-12">
                  <TextMasthead
                    content={{
                      subheading: "Sports Data",
                      heading: "Official data.<> Real-time delivery.",
                      content: "Industry-leading sports data from 150+ federations — scored, verified, and delivered at the speed of play.",
                      links: [
                        { link: { title: "Explore Sports Data", url: "#", target: "" }, type: "button", button: { background_color: "navy", type: "default" } } as any,
                      ],
                    }}
                    options={{
                      alignment: "left",
                      text_size: "default",
                      subheading_colour: { colours: "blue" },
                    }}
                  />
                </div>
              </ExampleBlock>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* CONTENT BLOCKS                                                 */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="content" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Content Blocks"
              description="A flexible text + CTA block used inside sections — typically paired with an image, video, or data visual on the other side."
            />
            <div className="space-y-6">
              <ExampleBlock
                label="Left-aligned — on dark background (most common)"
                dark
                prompt={{
                  descriptive: "Add a text content block on the left side of a two-column layout. Include a small label that says 'Trusted by the best', a large heading that says 'Powering the world's biggest sports properties' with the words 'properties' highlighted in bright green, a short paragraph, and a white CTA button that says 'See our partners'.",
                  specific: "Add a TextCard with subheading 'Trusted by the best', heading 'Powering the world\\'s biggest sports |properties|', heading_highlighted_color 'brightGreen', body content, a white default Button, heading_tag 'h2', and text_alignment 'left'.",
                }}
              >
                <TextCard
                  text_card={{
                    subheading: "Trusted by the best",
                    heading: "Powering the world's biggest sports |properties|",
                    content: "From Premier League to the NFL, our technology sits at the heart of sport's data infrastructure — delivering official feeds that operators and broadcasters depend on.",
                    links: [
                      { link: { title: "See our partners", url: "#", target: "" }, type: "button", button: { background_color: "white", type: "default" } } as any,
                    ],
                    options: { heading_tag: "h2", heading_highlighted_color: "brightGreen", text_alignment: "left" },
                  }}
                />
              </ExampleBlock>

              <ExampleBlock
                label="Centered — on light background"
                prompt={{
                  descriptive: "Add a centered content block with a label, a large heading with the word 'real-time' highlighted in blue, a paragraph, and a navy CTA button. Everything should be centered.",
                  specific: "Add a TextCard with subheading, heading with |highlighted| words and heading_highlighted_color 'blue', content, a navy default Button, and options set to text_alignment 'center' and section_alignment 'center'.",
                }}
              >
                <TextCard
                  text_card={{
                    subheading: "Our platform",
                    heading: "Official data. |Real-time| delivery.",
                    content: "We connect sports federations, broadcasters, and betting operators with the official data they need to grow.",
                    links: [
                      { link: { title: "Explore the platform", url: "#", target: "" }, type: "button", button: { background_color: "navy", type: "default" } } as any,
                    ],
                    options: { heading_tag: "h2", heading_highlighted_color: "blue", text_alignment: "center", section_alignment: "center" },
                  }}
                />
              </ExampleBlock>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* TAGS                                                           */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="tags" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Tags"
              description="Small blue pill badges for labeling new features, categories, or status. Keep the text short."
            />
            <PreviewCard className="flex flex-wrap items-center gap-3 p-8">
              {["New", "Beta", "Live", "Featured", "Updated"].map((text) => (
                <PillTag key={text} text={text} />
              ))}
            </PreviewCard>
            <PromptBox
              prompt={{
                descriptive: "Add a small blue pill badge next to the feature name that says 'New'.",
                specific: "Add a PillTag with text 'New' next to the feature heading.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* LOGO                                                           */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="logo" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Logo"
              description="Four logo variants — use horizontal for navigation, marque (G mark) as a standalone icon. Always use the blue version on white/light backgrounds and white on dark."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-6 rounded-2xl border border-lavenderGrey p-8">
                <p className="font-body text-[11px] uppercase tracking-widest text-navy/30">On light backgrounds</p>
                {(["horizontal", "wordmark", "marque", "vertical"] as const).map((v) => (
                  <div key={v} className="flex flex-col gap-1.5">
                    <p className="font-mono text-[10px] text-navy/30 capitalize">{v}</p>
                    <Logo variant={v} color="blue" className="h-10 w-auto" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-navy p-8">
                <p className="font-body text-[11px] uppercase tracking-widest text-white/30">On dark backgrounds</p>
                {(["horizontal", "wordmark", "marque", "vertical"] as const).map((v) => (
                  <div key={v} className="flex flex-col gap-1.5">
                    <p className="font-mono text-[10px] text-white/30 capitalize">{v}</p>
                    <Logo variant={v} color="white" className="h-10 w-auto" />
                  </div>
                ))}
              </div>
            </div>
            <PromptBox
              prompt={{
                descriptive: "Add the Genius Sports horizontal logo in the top left of the navigation. Use the blue version since the nav has a white background.",
                specific: "Add a Logo with variant 'horizontal' and color 'blue' in the header nav. Set className to 'h-10 w-auto'.",
              }}
            />
          </section>

          {/* ══════════════════════════════════════════════════════════════ */}
          {/* ICONS                                                          */}
          {/* ══════════════════════════════════════════════════════════════ */}
          <section id="icons" className="mb-20 scroll-mt-28">
            <SectionHeader
              title="Brand Icons"
              description="25 official Genius Sports brand icons. Use the navy versions on light backgrounds, and the white versions on dark backgrounds."
            />
            <div className="space-y-6">
              <div>
                <p className="mb-4 font-body text-[12px] font-medium uppercase tracking-[0.08em] text-navy/40">Navy icons — on light backgrounds</p>
                <PreviewCard className="p-8">
                  <div className="flex flex-wrap gap-6">
                    {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
                      <div key={name} className="flex flex-col items-center gap-2">
                        <BrandIcon name={name} mode="light" size={40} />
                        <span className="font-body text-[10px] text-navy/40 capitalize">{name}</span>
                      </div>
                    ))}
                  </div>
                </PreviewCard>
              </div>
              <div>
                <p className="mb-4 font-body text-[12px] font-medium uppercase tracking-[0.08em] text-navy/40">White icons — on dark backgrounds</p>
                <PreviewCard dark className="p-8">
                  <div className="flex flex-wrap gap-6">
                    {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
                      <div key={name} className="flex flex-col items-center gap-2">
                        <BrandIcon name={name} mode="dark" size={40} />
                        <span className="font-body text-[10px] text-white/40 capitalize">{name}</span>
                      </div>
                    ))}
                  </div>
                </PreviewCard>
              </div>
            </div>
            <PromptBox
              prompt={{
                descriptive: "Add a row of three brand icons — the 'data', 'engage', and 'fans' icons — each above a short label, on a white background.",
                specific: "Add three BrandIcon components with names 'data', 'engage', and 'fans', each with mode 'light' and size 48, arranged in a row with a label beneath each one.",
              }}
            />
          </section>

        </main>
      </div>
    </div>
  );
}
