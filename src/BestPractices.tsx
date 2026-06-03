import React, { useState } from "react";
import Logo from "./components/brand/Logo";
import Button from "./components/elements/Button";

type PageType = "demo" | "catalog" | "brand-guide" | "glossary" | "best-practices";

const NAV_PAGES: { id: PageType; label: string }[] = [
  { id: "brand-guide", label: "Brand Guide" },
  { id: "glossary", label: "Glossary" },
  { id: "best-practices", label: "Best Practices" },
  { id: "catalog", label: "Catalog" },
];

const PAGE_SECTIONS = [
  { id: "glossary-usage",    label: "Using the Glossary" },
  { id: "chatgpt-workflow",  label: "LovableGPT Workflow" },
  { id: "before-you-start",  label: "Before You Start" },
  { id: "efficient-prompts", label: "Efficient Prompting" },
  { id: "lovable-features",  label: "Lovable Features" },
  { id: "starter-prompts",   label: "Starter Prompts" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="scroll-mt-20 mb-8 border-b border-lavenderGrey pb-6 pt-14 first:pt-12">
      <h2 className="font-heading text-[22px] font-medium text-navy">{title}</h2>
      <p className="mt-1.5 font-body text-[15px] text-navy/50">{subtitle}</p>
    </div>
  );
}

function TipCard({ number, title, children }: { number: string | number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-lightGrey p-6">
      <div className="mb-3 flex items-start gap-4">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue font-heading text-[13px] font-medium text-white">
          {number}
        </span>
        <h3 className="pt-0.5 font-heading text-[17px] font-medium leading-tight text-navy">{title}</h3>
      </div>
      <div className="ml-11 space-y-2 font-body text-[14px] leading-relaxed text-navy/70">
        {children}
      </div>
    </div>
  );
}

function FeatureCard({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-lightGrey p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[22px] leading-none">{emoji}</span>
        <h3 className="font-heading text-[17px] font-medium text-navy">{title}</h3>
      </div>
      <div className="space-y-2 font-body text-[14px] leading-relaxed text-navy/70">
        {children}
      </div>
    </div>
  );
}

function CopyPrompt({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      onClick={copy}
      className="group w-full rounded-xl border border-blue/20 bg-blue/[0.03] px-4 py-3 text-left transition-all hover:border-blue/40 hover:shadow-sm"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-body text-[10px] uppercase tracking-widest text-blue/50">{label}</span>
        <span
          className={`font-body text-[11px] transition-opacity ${
            copied ? "text-blue opacity-100" : "text-navy/30 opacity-0 group-hover:opacity-100"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
      <p className="font-body text-[14px] leading-relaxed text-navy/70">{text}</p>
    </button>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function BestPractices({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="min-h-screen bg-white text-navy">

      {/* ── Header ───────────────────────────────────────────────────────── */}
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
            <span className="font-heading text-[14px] font-medium text-navy">Best Practices</span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_PAGES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`rounded-full px-3 py-1.5 font-body text-[12px] transition-colors ${
                  id === "best-practices"
                    ? "bg-navy text-white"
                    : "text-navy/50 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12">

        {/* ── Page title ──────────────────────────────────────────────────── */}
        <div className="border-b border-lavenderGrey py-12">
          <p className="mb-3 font-body text-[13px] uppercase tracking-[0.12em] text-navy/40">Genius Sports</p>
          <h1 className="text-h2 font-light">Lovable Best Practices</h1>
          <p className="mt-4 max-w-xl font-body text-[16px] text-navy/60">
            How to build on-brand pages in Lovable effectively — from using the right terminology to writing prompts that get results first time.
          </p>
          <div className="mt-6 w-fit">
            <a
              href="https://docs.lovable.dev/tips-tricks/best-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                link={{ title: "Lovable official best practices", url: "" }}
                button={{ background_color: "lightGrey", type: "slim" }}
              />
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {PAGE_SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-lavenderGrey px-3 py-1.5 font-body text-[13px] text-navy/60 transition-colors hover:border-navy/30 hover:text-navy"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ════ USING THE GLOSSARY ════════════════════════════════════════════ */}
        <SectionHeading
          id="glossary-usage"
          title="Using the Glossary"
          subtitle="The Glossary is your cheat sheet when writing Lovable prompts. These tips show you how to use it effectively."
        />

        <div className="grid gap-4 pb-14 md:grid-cols-2">
          <TipCard number="1" title="Use exact component names">
            <p>
              Instead of "add a hero section", say "add a <strong>TextMasthead</strong> section". Instead of "add a banner at the bottom", say "add a <strong>GetStartedCTA</strong>".
            </p>
            <p>Lovable understands these component names from the brand kit and will generate the correctly styled component.</p>
          </TipCard>

          <TipCard number="2" title="Reference colors by token name">
            <p>
              Say "set the Section background_color to <strong>navy</strong>" instead of "make the background dark blue". Say "use <strong>brightGreen</strong> for the subheading dot" instead of "use a bright lime green".
            </p>
            <p>All 17 color token names are in the Glossary. Using exact names prevents Lovable from guessing the wrong shade.</p>
          </TipCard>

          <TipCard number="3" title="Name typography classes explicitly">
            <p>
              If you want a specific size, say "use the <strong>text-h2</strong> class for the heading" or "use <strong>font-body text-16</strong> for the body copy".
            </p>
            <p>This keeps type choices consistent and on-brand rather than defaulting to Tailwind's generic sizes.</p>
          </TipCard>

          <TipCard number="4" title="Specify logo and icon modes">
            <p>
              When requesting a logo, include the variant and color: "add a <strong>Logo</strong> with variant <strong>horizontal</strong> and color <strong>white</strong>" (for dark backgrounds) or color <strong>blue</strong> (for light backgrounds).
            </p>
            <p>
              For BrandIcons: use mode <strong>dark</strong> on navy backgrounds, mode <strong>light</strong> on white or grey backgrounds.
            </p>
          </TipCard>
        </div>

        {/* ════ LOVABLEGPT WORKFLOW ════════════════════════════════════════════ */}
        <SectionHeading
          id="chatgpt-workflow"
          title="The LovableGPT Workflow"
          subtitle="LovableGPT is a custom assistant built specifically for this brand kit. It already knows every component, color token, and prop — so you can describe what you want in plain English and get a Lovable-ready prompt back instantly."
        />

        <div className="pb-14 space-y-4">
          <div className="rounded-xl bg-lightGrey p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-heading text-[17px] font-medium text-navy">The workflow in 3 steps</p>
              <a
                href="https://chatgpt.com/g/g-69fa0124fe308191a10e2b9311fe998f-lovable-prompt-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-blue px-3 py-1.5 font-body text-[12px] text-white transition-colors hover:bg-blue/85"
              >
                Open LovableGPT ↗
              </a>
            </div>
            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Open LovableGPT",
                  desc: "Find LovableGPT in the main nav of this site, or open it directly in ChatGPT. It's a purpose-built assistant pre-loaded with the full Genius Sports brand kit — components, color tokens, typography, and props.",
                },
                {
                  step: "2",
                  title: "Describe what you want to build",
                  desc: "Tell LovableGPT what you want — the page type, sections, content, and purpose — in plain English. No need to know the component names or brand terms; it will translate your description into a precise, brand-accurate Lovable prompt.",
                },
                {
                  step: "3",
                  title: "Paste into Lovable",
                  desc: "Copy the prompt LovableGPT produces and paste it into Lovable. Because the prompt uses exact component names and color tokens, it typically achieves the right result in fewer generations — saving significant credit spend.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue font-heading text-[13px] font-medium text-white">
                    {step}
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-medium text-navy">{title}</p>
                    <p className="mt-1 font-body text-[14px] leading-relaxed text-navy/60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-orange/30 bg-orange/5 p-5">
            <p className="font-heading text-[14px] font-medium text-navy">When to skip LovableGPT</p>
            <p className="mt-1 font-body text-[13px] leading-relaxed text-navy/60">
              For small, targeted changes — "change the Section background_color to lightGrey", "update the heading text to X" — you can prompt Lovable directly. LovableGPT pays off most for new pages, large sections, or complex multi-component builds where getting the structure right first time saves the most credits.
            </p>
          </div>
        </div>

        {/* ════ BEFORE YOU START ══════════════════════════════════════════════ */}
        <SectionHeading
          id="before-you-start"
          title="Before You Start"
          subtitle="A few minutes of planning dramatically improves the quality of what Lovable builds — and reduces the number of generations you need."
        />

        <div className="grid gap-4 pb-14 md:grid-cols-2">
          <TipCard number="1" title="Answer four questions first">
            <p>Before opening Lovable, define your build by answering: <strong>What is this page?</strong> <strong>Who is it for?</strong> <strong>Why will they use it?</strong> <strong>What's the one key action they should take?</strong></p>
            <p>Vague ideas produce vague outputs. A clear brief gives Lovable a clear target.</p>
          </TipCard>

          <TipCard number="2" title="Sketch the user journey">
            <p>Think about the sequence of sections, not just isolated layouts. A simple three-step structure — <strong>Hero → Features → CTA</strong> — is enough to plan most marketing pages.</p>
            <p>Consider what builds trust, what gives confidence to act, and where the action leads. Then prompt Lovable section by section in that order.</p>
          </TipCard>

          <TipCard number="3" title="Lock in the visual style upfront">
            <p>Establish the visual tone before you start: pick your primary background color, headline hierarchy, and overall feel — clean and premium, bold and energetic, data-driven and technical.</p>
            <p>Embed style descriptors in your first prompt. It's much easier to set direction early than to retrofit a consistent aesthetic across an existing page.</p>
          </TipCard>

          <TipCard number="4" title="Ask Lovable to ask questions">
            <p>At the end of your opening prompt, add: <em>"Ask me any questions you need to fully understand what I want from this feature and how I envision it."</em></p>
            <p>Lovable responds with focused follow-ups that clarify requirements upfront — reducing back-and-forth iterations and producing a better first generation.</p>
          </TipCard>
        </div>

        {/* ════ EFFICIENT PROMPTING ═══════════════════════════════════════════ */}
        <SectionHeading
          id="efficient-prompts"
          title="Efficient Prompting"
          subtitle="Practical habits that consistently get better results in Lovable."
        />

        <div className="grid gap-4 pb-14 md:grid-cols-2">
          <TipCard number="1" title="One change at a time">
            <p>Lovable works best when each prompt makes a single, focused change. Asking to "add a section, change the colors, and update the nav" in one message often produces mixed results.</p>
            <p>Break your work into steps: add the section first, then refine its content, then adjust colors.</p>
          </TipCard>

          <TipCard number="2" title="Describe what you want, not what you don't want">
            <p>Instead of "don't make it look like the hero", say "use a Section with background_color: lightGrey and padding_top: medium".</p>
            <p>Positive descriptions give Lovable a clear target. Negative descriptions leave too much room for interpretation.</p>
          </TipCard>

          <TipCard number="3" title="Include location context">
            <p>Tell Lovable where on the page the change should happen: "in the first Section after the hero", "in the footer", "inside the TextCard in the left column".</p>
            <p>The more specific the location, the less likely Lovable is to modify the wrong element.</p>
          </TipCard>

          <TipCard number="4" title="Use real content from the start">
            <p>Include the actual heading text, body copy, and CTA label in your prompt rather than asking Lovable to generate placeholder content.</p>
            <p>This produces more accurate previews and avoids a second round-trip to swap out placeholder text.</p>
          </TipCard>

          <TipCard number="5" title="Start broad, then refine">
            <p>For new pages, start with the overall layout ("a two-column Section with a TextCard on the left and a placeholder image on the right"), then follow up with specifics ("change the heading to... and add a Button with background_color: navy").</p>
          </TipCard>

          <TipCard number="6" title="Revert instead of patching">
            <p>If a generation produces something unexpected, use Lovable's revert function immediately rather than trying to fix it with more prompts.</p>
            <p>A clean revert is almost always faster than a recovery sequence of corrective prompts.</p>
          </TipCard>
        </div>

        {/* ════ LOVABLE FEATURES ══════════════════════════════════════════════ */}
        <SectionHeading
          id="lovable-features"
          title="Lovable Features to Know"
          subtitle="Built-in tools that make building in Lovable faster and more precise."
        />

        <div className="grid gap-4 pb-14 md:grid-cols-2">
          <FeatureCard emoji="🖱" title="Visual Element Selector">
            <p>Click on any element in the live preview to automatically reference it in the chat input. This is the fastest way to target a specific button, heading, or section without having to describe its location in text.</p>
            <p className="rounded-lg bg-lightGrey px-3 py-2 font-body text-[13px] text-navy/60">
              <span className="font-medium text-navy">How to use:</span> In the preview panel, click the element you want to change. It populates into the chat. Then describe the change you want to make.
            </p>
          </FeatureCard>

          <FeatureCard emoji="👁" title="Preview Mode">
            <p>Switch to full-screen preview to see how your page looks without the Lovable UI. Use this to check spacing, typography, and layout before sharing with stakeholders.</p>
            <p className="rounded-lg bg-lightGrey px-3 py-2 font-body text-[13px] text-navy/60">
              <span className="font-medium text-navy">Tip:</span> Always check the mobile view before sharing — most brand kit components handle mobile automatically, but multi-column layouts are worth verifying.
            </p>
          </FeatureCard>

          <FeatureCard emoji="↩" title="Undo & Revert">
            <p>Every generation is versioned. If a change produces something unexpected, click Revert to return to the previous state instantly — no work is lost.</p>
            <p>Use undo aggressively. It's better than attempting to fix a bad generation with corrective prompts, which can compound the problem.</p>
          </FeatureCard>

          <FeatureCard emoji="💬" title="Chat History">
            <p>Your full conversation with Lovable is preserved in the chat panel. Scroll up to find earlier prompts, or reference a previous generation to understand what changed.</p>
            <p className="rounded-lg bg-lightGrey px-3 py-2 font-body text-[13px] text-navy/60">
              <span className="font-medium text-navy">Tip:</span> If something worked well in a previous session, you can reference or reuse that prompt — Lovable maintains context within a project.
            </p>
          </FeatureCard>

          <FeatureCard emoji="🐙" title="GitHub Sync">
            <p>Every Lovable project is backed by a GitHub repository. Every generation is committed automatically, which means a developer can review the code, or you can restore a specific version via git history.</p>
          </FeatureCard>

          <FeatureCard emoji="🚀" title="One-Click Publish">
            <p>Lovable can deploy your project to a public URL in one click — useful for sharing work-in-progress with stakeholders for feedback before a production deployment on Vercel.</p>
          </FeatureCard>
        </div>

        {/* ════ STARTER PROMPTS ═══════════════════════════════════════════════ */}
        <SectionHeading
          id="starter-prompts"
          title="Starter Prompts"
          subtitle="Copy-paste these as starting points. Adapt the content, colors, and component props to your specific needs."
        />

        <div className="space-y-8 pb-16">

          <div>
            <p className="mb-3 font-body text-[12px] uppercase tracking-widest text-navy/40">Adding new sections</p>
            <div className="space-y-3">
              <CopyPrompt
                label="Hero section"
                text='Add a TextMasthead section at the top of the page. Wrap it in a Section with background_color: navy. Set alignment to "center" and text_size to "large". Set the subheading to "Your label here" with subheading_colour brightGreen. Set the heading to "Your main heading here". Add a Button link with background_color: white and type: default labelled "Primary CTA", and a TextLink with background_color: navy labelled "Learn more". Enable add_springs with spring_colour: blue.'
              />
              <CopyPrompt
                label="Three-column feature cards"
                text='Add a Section with background_color: white, padding_top: large, padding_bottom: large, and has_container enabled. Inside, add a DotSubheading with colour: blue and the text "Our platform", followed by a centered h2 heading. Below that, create a three-column grid (md:grid-cols-3) of cards. Each card should have a rounded-2xl border border-lavenderGrey, a small colored accent square at the top, an h3 heading, body copy in font-body text-16, and a TextLink with background_color: navy labelled "Learn more".'
              />
              <CopyPrompt
                label="CTA banner"
                text={"Add a GetStartedCTA section at the bottom of the page. Set the heading to \"Ready to get started?\", the content to \"Join the world's leading sports data platform.\", and the link title to \"Talk to our team\"."}
              />
              <CopyPrompt
                label="Stats row"
                text='Add a Section with background_color: lightGrey, padding_top: small, padding_bottom: small, and has_container. Inside, create a four-column grid (grid-cols-2 md:grid-cols-4) of stat blocks. Each block should display a large number in font-heading text-[48px] font-light and a short label in font-body text-[15px] text-navy/60 below it.'
              />
            </div>
          </div>

          <div>
            <p className="mb-3 font-body text-[12px] uppercase tracking-widest text-navy/40">Modifying existing content</p>
            <div className="space-y-3">
              <CopyPrompt
                label="Change a section background"
                text="Change the background_color of the second Section to lightGrey. Make sure any headings use text-navy and any body text uses text-navy/60 so they remain readable on the lighter background."
              />
              <CopyPrompt
                label="Add highlighted text to a heading"
                text='In the main heading, wrap the word "data" in pipe characters so it reads |data|, and set the HighlightedText color to brightGreen. The parent element should have text-white set since the section background is navy.'
              />
              <CopyPrompt
                label="Add a brand icon"
                text='Above the section heading, add a BrandIcon with name "data", mode "light" (the background is white), and size 48. Center it horizontally.'
              />
            </div>
          </div>

          <div>
            <p className="mb-3 font-body text-[12px] uppercase tracking-widest text-navy/40">Layout patterns</p>
            <div className="space-y-3">
              <CopyPrompt
                label="Two-column text + image"
                text="Add a Section with background_color: navy, padding_top: large, padding_bottom: large, and has_container. Inside, create a two-column grid with items-center (lg:grid-cols-2) with a TextCard on the left and a placeholder image div on the right. The TextCard should have a DotSubheading, an h2 heading with a brightGreen highlighted word, body copy in font-body, and a Button with background_color: white."
              />
              <CopyPrompt
                label="Full-width event banner"
                text="Add a Section with background_color: blue, padding_top: large, padding_bottom: large, has_container, and inner_spacing: medium. Center all content. Add a DotSubheading with colour: brightGreen, an h2 heading in text-white, short body copy in font-body text-white/70, and two Buttons side by side: one with background_color: white type: default, and one with background_color: white15 type: default."
              />
            </div>
          </div>

        </div>

      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-lavenderGrey px-6 py-10 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Logo variant="horizontal" color="blue" className="h-20 w-auto" />
          <span className="font-body text-[12px] text-navy/30">GS Best Practices — internal use only</span>
        </div>
      </footer>

    </div>
  );
}
