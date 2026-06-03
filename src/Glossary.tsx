import React, { useState } from "react";
import Logo from "./components/brand/Logo";

type PageType = "demo" | "catalog" | "brand-guide" | "glossary" | "best-practices";

const NAV_PAGES: { id: PageType; label: string }[] = [
  { id: "brand-guide", label: "Brand Guide" },
  { id: "glossary", label: "Glossary" },
  { id: "best-practices", label: "Best Practices" },
  { id: "catalog", label: "Catalog" },
];

// ─── Content ─────────────────────────────────────────────────────────────────

type Term = {
  term: string;
  definition: string;
  lovableTip: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  terms: Term[];
};

const CATEGORIES: Category[] = [
  {
    id: "page-structure",
    title: "Page Structure",
    description: "The building blocks that make up a web page from top to bottom.",
    terms: [
      {
        term: "Section",
        definition: "A horizontal band that spans the full width of the page. Pages are built by stacking sections on top of each other. Each section can have its own background colour, padding, and content.",
        lovableTip: "Add a new section with a navy background below the hero.",
      },
      {
        term: "Hero",
        definition: "The first section at the top of the page. It's the first thing visitors see, so it typically has a strong headline, supporting text, and a call-to-action button.",
        lovableTip: "Add a hero section at the top of the page with a large headline and a button.",
      },
      {
        term: "Container",
        definition: "An invisible wrapper inside a section that keeps content centred and prevents it from stretching too wide on large screens. Without a container, content would touch the edges of the browser.",
        lovableTip: "Keep the text centred and contained — don't let it stretch to the full width of the screen.",
      },
      {
        term: "Navigation / Nav",
        definition: "The bar at the top of the page with links and usually a CTA button. Almost always 'sticky' so it stays visible as the user scrolls.",
        lovableTip: "Add a sticky navigation bar at the top with the logo on the left and a button on the right.",
      },
      {
        term: "Footer",
        definition: "The section at the very bottom of the page. Typically contains the logo, copyright text, and secondary links.",
        lovableTip: "Add a footer with the logo on the left and copyright text on the right.",
      },
      {
        term: "Above the fold",
        definition: "Everything visible on screen before the user scrolls. This is the most important part of any page — if it doesn't engage the visitor, they may not scroll further.",
        lovableTip: "Make sure the headline and button are visible without scrolling.",
      },
      {
        term: "Sticky",
        definition: "An element that stays fixed at the top (or bottom) of the screen as the user scrolls. Navigation bars are almost always sticky.",
        lovableTip: "Make the header stick to the top of the page as the user scrolls down.",
      },
      {
        term: "Whitespace",
        definition: "Intentional empty space around and between elements. More whitespace makes a page feel cleaner and more premium. It's not wasted space — it's breathing room.",
        lovableTip: "Add more space above and below the heading to give it more breathing room.",
      },
    ],
  },
  {
    id: "layout",
    title: "Layout & Spacing",
    description: "How elements are arranged and how space is controlled between them.",
    terms: [
      {
        term: "Grid",
        definition: "A system used to arrange items in rows and columns. A 'three-column grid' places three equal-width items side by side. Grids typically collapse to a single column on mobile.",
        lovableTip: "Arrange these three cards in a three-column grid. On mobile, stack them in a single column.",
      },
      {
        term: "Columns",
        definition: "Vertical divisions within a layout. A 'two-column layout' places two pieces of content side by side.",
        lovableTip: "Split this section into two equal columns — text on the left, an image placeholder on the right.",
      },
      {
        term: "Padding",
        definition: "Space inside an element, between its content and its edges. Think of it as the cushion inside a box. Increasing padding makes elements feel less cramped.",
        lovableTip: "Add more padding inside the card so the text isn't touching the edges.",
      },
      {
        term: "Margin",
        definition: "Space outside an element, pushing it away from neighbouring elements. Where padding is the space inside a box, margin is the space around the outside of it.",
        lovableTip: "Add more space between the heading and the paragraph below it.",
      },
      {
        term: "Gap",
        definition: "The space between items in a grid or a row. Increasing the gap pushes items further apart without adding padding to each individual item.",
        lovableTip: "Increase the gap between the three cards.",
      },
      {
        term: "Breakpoint",
        definition: "A screen width at which the layout changes. Below a breakpoint (e.g. mobile), a three-column grid might collapse to a single column. The most common breakpoints are mobile (under 768px) and desktop (over 1024px).",
        lovableTip: "On mobile, stack the two columns vertically so they don't squash together.",
      },
      {
        term: "Responsive",
        definition: "A page that automatically adapts its layout to look good on different screen sizes — desktop, tablet, and mobile. A responsive page doesn't just shrink; it rearranges its layout entirely.",
        lovableTip: "Make sure this layout is responsive — the columns should stack on mobile.",
      },
      {
        term: "Aspect ratio",
        definition: "The proportional relationship between an element's width and height. 16:9 is standard widescreen (like a TV or YouTube video). 1:1 is a perfect square.",
        lovableTip: "Add a placeholder with a 16:9 aspect ratio where the video will go.",
      },
    ],
  },
  {
    id: "typography",
    title: "Typography",
    description: "How text is styled and structured on a page.",
    terms: [
      {
        term: "Heading hierarchy (H1–H6)",
        definition: "Headings are ranked by importance from H1 (largest, most important) to H6 (smallest). Each page should have only one H1 — the main page title. H2s are used for section headings, H3s for sub-sections or card titles. Getting this right also helps with search engines.",
        lovableTip: "The main page headline should be an H1. Each section heading should be an H2. Card titles should be H3s.",
      },
      {
        term: "Body copy",
        definition: "The main readable paragraph text on a page. Usually set in a smaller, more readable font than headings. Most body copy sits between 15px and 18px.",
        lovableTip: "Add a short paragraph of body text below the heading, around 16px, slightly faded.",
      },
      {
        term: "Font weight",
        definition: "How thick or thin text appears. Common weights are light (thin, elegant), regular (standard), medium, semibold, and bold. Genius Sports headings typically use a light weight for display sizes.",
        lovableTip: "Make the large display heading use a lighter font weight so it feels more elegant.",
      },
      {
        term: "Line height",
        definition: "The vertical space between lines of text. More line height makes paragraphs easier to read. Short, punchy headlines often use tight line height; body paragraphs use more generous spacing.",
        lovableTip: "Increase the line height on the body paragraph to make it easier to read.",
      },
      {
        term: "Letter spacing",
        definition: "The horizontal space between letters. Small labels and tags often use wide letter spacing to make them feel more considered. Display headings sometimes use slightly tighter spacing.",
        lovableTip: "Add some letter spacing to the label text above the heading to spread it out.",
      },
      {
        term: "Fluid type",
        definition: "Font sizes that automatically scale between mobile and desktop screen widths, so headings are never too big on mobile or too small on desktop. All Genius Sports heading sizes use fluid type by default.",
        lovableTip: "The heading size will scale down automatically on mobile — no need to set a separate mobile font size.",
      },
    ],
  },
  {
    id: "visual",
    title: "Visual Design",
    description: "The properties that control how elements look.",
    terms: [
      {
        term: "Background colour",
        definition: "The fill colour of a section, card, or element. Alternating section backgrounds (e.g. white, then light grey, then navy) help visually separate content and keep pages from feeling monotonous.",
        lovableTip: "Change the section background to dark navy with white text.",
      },
      {
        term: "Border radius",
        definition: "How rounded the corners of an element are. A small border radius (e.g. 8px) gives cards a subtle softness. A very large border radius creates a pill shape, used for buttons and tags.",
        lovableTip: "Give the card more rounded corners — use a large border radius.",
      },
      {
        term: "Border",
        definition: "A line drawn around the edge of an element. Borders are often used on cards to separate them from the background when both are light-coloured.",
        lovableTip: "Add a subtle light grey border around the card.",
      },
      {
        term: "Shadow",
        definition: "A drop shadow that makes an element appear to float above the page. Often used on cards to add depth, especially on hover.",
        lovableTip: "Add a subtle shadow to the card when hovered.",
      },
      {
        term: "Opacity",
        definition: "How transparent an element is. 100% is fully visible, 0% is completely invisible. Body copy is often set at around 60–70% opacity to appear softer than headings.",
        lovableTip: "Make the supporting text slightly faded — around 60% opacity.",
      },
      {
        term: "Overlay",
        definition: "A semi-transparent layer placed over a background image to make overlaid text more readable. A dark overlay over a photo makes white text legible.",
        lovableTip: "Add a dark semi-transparent overlay over the background image so the white headline is easy to read.",
      },
      {
        term: "Gradient",
        definition: "A smooth colour transition between two or more colours. Can be used as a background or faded over an image to create a natural blend.",
        lovableTip: "Fade the image out to navy at the bottom using a gradient.",
      },
    ],
  },
  {
    id: "interactive",
    title: "Interactive Elements",
    description: "Elements that respond to user actions.",
    terms: [
      {
        term: "CTA (Call to Action)",
        definition: "A button or link that prompts the visitor to take a specific action. Every page should have a clear primary CTA. Examples: 'Get in touch', 'Book a demo', 'Download now'.",
        lovableTip: "Add a primary CTA button below the paragraph that says 'Get in touch'.",
      },
      {
        term: "Hover state",
        definition: "How an element looks when the user moves their mouse over it. Buttons typically change colour, links get underlined, and cards might add a shadow. Hover states give visual feedback that something is interactive.",
        lovableTip: "When hovering the button, it should change to a blue background with white text.",
      },
      {
        term: "Animation / Transition",
        definition: "A transition is a smooth visual change (e.g. a colour fading in on hover). An animation is more complex movement (e.g. text sliding up into view). Subtle transitions make interfaces feel more polished.",
        lovableTip: "Add a smooth colour transition to the button on hover — it should change gradually, not instantly.",
      },
      {
        term: "Anchor link",
        definition: "A link that jumps to a specific section on the same page rather than navigating to a new URL. Often used in navigation bars to scroll down to a features or contact section.",
        lovableTip: "Make the 'Our platform' nav link scroll down to the features section when clicked.",
      },
      {
        term: "Tooltip",
        definition: "A small label that appears near an element when you hover over it, giving extra context or explanation. Useful for icons or abbreviated labels that aren't self-explanatory.",
        lovableTip: "Add a tooltip to the icon that explains what it represents when hovered.",
      },
    ],
  },
  {
    id: "lovable",
    title: "Lovable Workflow",
    description: "Terms specific to building and managing pages in Lovable.",
    terms: [
      {
        term: "Prompt",
        definition: "The instruction you type into Lovable to tell it what to build or change. More specific prompts produce better, more predictable results. Vague prompts lead to unexpected outputs.",
        lovableTip: "Be specific: instead of 'make it look better', say 'increase the padding inside the card and make the heading larger'.",
      },
      {
        term: "Generation",
        definition: "When Lovable processes your prompt and updates the page. Each generation uses credits from your account. To save credits, refine your prompt in ChatGPT first before generating in Lovable.",
        lovableTip: "Draft and refine your prompt in ChatGPT before pasting it into Lovable — it's free to iterate there.",
      },
      {
        term: "Preview",
        definition: "Viewing your page as it will appear to real visitors, without the Lovable editor interface around it. Always check preview — especially on mobile — before sharing with stakeholders.",
        lovableTip: "Click Preview and check the mobile view before sharing a link.",
      },
      {
        term: "Revert",
        definition: "Undoing the last generation and returning to the previous state. If a generation produces something unexpected, revert immediately rather than trying to fix it with more prompts — that often makes things worse.",
        lovableTip: "If something looks wrong after a generation, hit Revert straight away.",
      },
      {
        term: "Deploy / Publish",
        definition: "Making your page live and accessible via a public URL. Use this to share a working version with stakeholders for feedback before a final production deployment.",
        lovableTip: "Click Publish to get a shareable link you can send to your team for feedback.",
      },
      {
        term: "Element selector",
        definition: "A Lovable feature that lets you click directly on any element in the preview to reference it in your prompt. Much faster than trying to describe the location of an element in text.",
        lovableTip: "Click the element you want to change in the preview panel — it auto-populates in the chat so you don't have to describe where it is.",
      },
      {
        term: "Version history",
        definition: "A log of every generation made to a project, which you can browse and restore at any point. More powerful than Revert — use it if you need to go back several steps.",
        lovableTip: "Open version history if you need to go back more than one step — you can restore any previous state.",
      },
    ],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function TermCard({ term, definition, lovableTip }: Term) {
  return (
    <div className="rounded-xl bg-lightGrey p-5">
      <p className="font-heading text-[17px] font-medium text-navy">{term}</p>
      <p className="mt-2 font-body text-[14px] leading-relaxed text-navy/70">{definition}</p>
      <div className="mt-4 rounded-lg bg-blue/[0.05] px-4 py-3">
        <p className="mb-1 font-body text-[10px] uppercase tracking-widest text-blue/50">In Lovable, say…</p>
        <p className="font-body text-[13px] italic leading-relaxed text-navy/60">"{lovableTip}"</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Glossary({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

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
            <span className="font-heading text-[14px] font-medium text-navy">Glossary</span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_PAGES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`rounded-full px-3 py-1.5 font-body text-[12px] transition-colors ${
                  id === "glossary"
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

      <div className="flex">

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="hidden w-52 shrink-0 md:block">
          <nav className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pl-6 pr-4">
            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.12em] text-navy/30">Categories</p>
            <ul className="space-y-0.5">
              {CATEGORIES.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setActiveCategory(id)}
                    className={`block rounded-lg px-3 py-2 font-body text-[14px] transition-colors ${
                      activeCategory === id
                        ? "bg-navy/[0.05] font-medium text-navy"
                        : "text-navy/50 hover:text-navy"
                    }`}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main className="min-w-0 flex-1 px-6 pb-16 pt-12 lg:px-12">

          <div className="mb-12">
            <p className="mb-3 font-body text-[13px] uppercase tracking-[0.12em] text-navy/40">Genius Sports</p>
            <h1 className="text-h2 font-light">Web Design Glossary</h1>
            <p className="mt-4 max-w-xl font-body text-[16px] text-navy/60">
              Plain-English definitions for the web design and Lovable terms you'll encounter when building pages. Each entry includes a tip on how to phrase it in a Lovable prompt.
            </p>
          </div>

          {CATEGORIES.map(({ id, title, description, terms }) => (
            <section
              key={id}
              id={id}
              className="scroll-mt-20 border-t border-lavenderGrey py-12"
            >
              <div className="mb-8">
                <h2 className="font-heading text-[22px] font-medium text-navy">{title}</h2>
                <p className="mt-1.5 font-body text-[15px] text-navy/50">{description}</p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {terms.map((term) => (
                  <TermCard key={term.term} {...term} />
                ))}
              </div>
            </section>
          ))}

        </main>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-lavenderGrey px-6 py-10 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Logo variant="horizontal" color="blue" className="h-20 w-auto" />
          <span className="font-body text-[12px] text-navy/30">GS Web Design Glossary — internal use only</span>
        </div>
      </footer>

    </div>
  );
}
