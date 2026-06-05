import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
import MarketingCatalog from "./MarketingCatalog";
import Glossary from "./Glossary";
import BestPractices from "./BestPractices";
import Section from "./components/layouts/Section";
import { getSplitBreakText } from "./utils/text";
import GetStartedCTA from "./components/sections/GetStartedCTA";
import DotSubheading from "./components/sections/DotSubheading";
import Button from "./components/elements/Button";
import TextLink from "./components/elements/TextLink";
import HighlightedText from "./components/elements/HighlightedText";
import Logo from "./components/brand/Logo";
import BrandIcon from "./components/brand/BrandIcon";
import HintOverlay, { HintNavContext } from "./components/demo/HintOverlay";

// ─── App ─────────────────────────────────────────────────────────────────────
type PageType = "demo" | "catalog" | "brand-guide" | "glossary" | "best-practices";

export default function App() {
  const [page, setPage] = useState<PageType>("demo");
  const [catalogAnchor, setCatalogAnchor] = useState<string | undefined>();
  const [brandGuideAnchor, setBrandGuideAnchor] = useState<string | undefined>();
  const [scrolled, setScrolled] = useState(false);
  const [remixModalOpen, setRemixModalOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!remixModalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setRemixModalOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [remixModalOpen]);

  function navigate(p: PageType, anchor?: string) {
    setPage(p);
    setCatalogAnchor(p === "catalog" ? anchor : undefined);
    setBrandGuideAnchor(p === "brand-guide" ? anchor : undefined);
  }

  if (page === "catalog") return <Catalog onNavigate={setPage} initialAnchor={catalogAnchor} />;
  if (page === "brand-guide") return <MarketingCatalog onNavigate={setPage} initialAnchor={brandGuideAnchor} />;
  if (page === "glossary") return <Glossary onNavigate={setPage} />;
  if (page === "best-practices") return <BestPractices onNavigate={setPage} />;

  return (
    <HintNavContext.Provider value={navigate}>
    <div className="min-h-screen bg-white text-navy">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className={`sticky top-0 z-50 flex h-24 items-center justify-between bg-navy px-6 lg:px-12 transition-opacity duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Logo variant="horizontal" color="white" className="h-14 w-auto" />
        <nav className="hidden items-center gap-2 md:flex">
          {([
            { id: "brand-guide" as PageType, label: "Brand Guide" },
            { id: "best-practices" as PageType, label: "Best Practices" },
            { id: "glossary" as PageType, label: "Glossary" },
          ]).map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setPage(id)}
              className="rounded-full px-4 py-2 font-heading text-[16px] font-normal text-white/80 transition-colors hover:text-white"
            >
              {label}
            </button>
          ))}
          <a
            href="https://chatgpt.com/g/g-69fa0124fe308191a10e2b9311fe998f-lovable-prompt-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 font-heading text-[16px] font-normal text-white/80 transition-colors hover:text-white"
          >
            LovableGPT
          </a>
        </nav>
        <Button
          link={{ title: "Get started", url: "#get-started" }}
          button={{ background_color: "white15", type: "header" }}
        />
      </header>

      {/* ── Get Started ─────────────────────────────────────────────────── */}
      <Section id="get-started" background={{ background_color: "navy" }} padding_top="large" padding_bottom="large" has_container inner_spacing="large">
        <div className="text-center">
          <DotSubheading subheading="Genius Sports × Lovable" colour="brightGreen" />
          <h1 className="mt-4">How to Get Started</h1>
          <p className="mt-4 font-body text-[18px] opacity-70 max-w-xl mx-auto">
            Three simple steps to launch Genius-branded web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-2">
          {[
            {
              step: "01",
              heading: "Log in with your Genius email",
              body: "Go to lovable.dev and sign in using your Genius Sports email address to access the enterprise account.",
              cta: { label: "Open Lovable", url: "https://lovable.dev" },
            },
            {
              step: "02",
              heading: "Remix the GS Brand Template",
              body: "Find the GS Brand Template project and click Remix to create your own editable copy.",
              cta: null,
              showRemixDemo: true,
            },
            {
              step: "03",
              heading: "Prompt with LovableGPT",
              body: "Open LovableGPT, browse the Brand Guide for component examples, then paste the ready-made prompts directly into your Lovable project.",
              cta: { label: "Open LovableGPT", url: "https://chatgpt.com/g/g-69fa0124fe308191a10e2b9311fe998f-lovable-prompt-assistant" },
            },
          ].map(({ step, heading, body, cta, ...rest }) => (
            <div key={step} className="flex flex-col rounded-2xl bg-white/[0.06] p-8 border border-white/10">
              <span className="font-heading text-[48px] font-light leading-none tracking-[-0.04em] text-blue mb-5">{step}</span>
              <h3 className="text-h7 text-white mb-3">{heading}</h3>
              <p className="font-body text-[15px] leading-relaxed text-white/60 flex-1">{body}</p>
              {"showRemixDemo" in rest && (
                <div className="mt-6 w-fit">
                  <button
                    onClick={() => setRemixModalOpen(true)}
                    className="font-heading text-[14px] text-white/70 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Watch demo →
                  </button>
                </div>
              )}
              {cta && (
                <div className="mt-6 w-fit">
                  <a
                    href={cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-[14px] text-white/70 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    {cta.label} →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── Remix demo modal ─────────────────────────────────────────────── */}
      {remixModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4"
          onClick={() => setRemixModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setRemixModalOpen(false)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-heading text-[14px] text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <video
              src="/remix_example.webm"
              autoPlay
              controls
              playsInline
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* ── Disclaimer banner ────────────────────────────────────────────── */}
        <div className="bg-blue/[0.10] border-y border-blue/20 px-6 py-6 lg:px-12 text-center">
          <p className="font-body text-[16px] leading-normal text-navy/80">
            <span className="font-semibold text-navy">Sample page</span> — hover elements to see component badges · click a <span className="font-semibold text-navy">blue pill</span> to view full section details.
          </p>
        </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "TextMasthead",
        description: "The hero section. A large heading, supporting text, and a CTA button on a dark background. Decorative lines appear on both sides of the content.",
        prompt: "Add a full-screen hero section with a dark navy background. Include a small label at the top with a green dot, a large two-line headline, a short paragraph, and a light grey button. Add decorative vertical lines on both sides of the content.",
      }}>
        <Section background={{ background_color: "navy" }} padding_top="huge" padding_bottom="huge" has_container inner_spacing="medium">
          <div className="relative mx-auto max-w-[57.5rem]">
            {/* Decorative springs */}
            <HintOverlay
              mode="element"
              wrapperClassName="absolute inset-y-0 right-[90%] flex w-[80%] items-stretch justify-between md:right-[105%] lg:right-[110%]"
              hint={{
                component: "CustomLines",
                description: "Decorative tapered spring lines made of 25 vertical bars that taper in width. Placed symmetrically on both sides of a content block for a bold, editorial feel.",
                prompt: "Add decorative vertical spring lines on both sides of the hero content. Use blue bars that taper from thick to thin as they move away from the content.",
              }}
            >
              {Array.from({ length: 25 }, (_, i) => i + 1).map((i) => (
                <div key={i} className="h-full bg-blue" style={{ width: 12 - i * 0.5 }} />
              ))}
            </HintOverlay>
            <HintOverlay
              mode="element"
              wrapperClassName="absolute inset-y-0 left-[90%] flex w-[80%] flex-row-reverse items-stretch justify-between md:left-[105%] lg:left-[110%]"
              hint={{
                component: "CustomLines",
                description: "Decorative tapered spring lines made of 25 vertical bars that taper in width. Placed symmetrically on both sides of a content block for a bold, editorial feel.",
                prompt: "Add decorative vertical spring lines on both sides of the hero content. Use blue bars that taper from thick to thin as they move away from the content.",
              }}
            >
              {Array.from({ length: 25 }, (_, i) => i + 1).map((i) => (
                <div key={i} className="h-full bg-blue" style={{ width: 12 - i * 0.5 }} />
              ))}
            </HintOverlay>

            <div className="relative z-10 flex flex-col items-center gap-5 text-center">
              <HintOverlay mode="element" inline hint={{
                component: "DotSubheading",
                description: "A small pill label with a coloured dot. Place above a heading to categorise or introduce the section. The dot colour is set independently from the background.",
                prompt: "Add a small label above the hero heading that says 'Powering sport worldwide' with a green dot on the left.",
              }}>
                <DotSubheading subheading="Powering sport worldwide" colour="brightGreen" />
              </HintOverlay>

              <HintOverlay mode="element" hint={{
                component: "Heading (h1)",
                description: "The hero headline. Use <> in the string to insert a line break at md+. The is-large modifier applies the largest fluid type size.",
                prompt: "Change the hero heading to read 'The data and technology behind modern sport', breaking to a new line after 'technology' on desktop.",
              }}>
                <h1
                  className="is-large"
                  dangerouslySetInnerHTML={{ __html: getSplitBreakText({ text: "The data and technology behind modern sport" }) }}
                />
              </HintOverlay>

              <HintOverlay mode="element" hint={{
                component: "Body Copy",
                description: "A supporting paragraph below the hero heading. Uses font-body, opacity-80, and a fluid 22px size for hero contexts.",
                prompt: "Update the hero body text to: 'We connect sports federations, broadcasters, and betting operators with the official data, integrity services, and fan engagement tools they need to grow.'",
              }}>
                <p className="font-body text-[22px] opacity-80">
                  We connect sports federations, broadcasters, and betting operators with the official data, integrity services, and fan engagement tools they need to grow.
                </p>
              </HintOverlay>

              <HintOverlay mode="element" inline hint={{
                component: "Button",
                description: "A pill-shaped CTA. The light-grey variant works well on dark backgrounds. Wrap in w-fit to prevent it from stretching to full container width.",
                prompt: "Add a light grey pill button labelled 'Get in touch' below the hero body text.",
              }}>
                <div className="w-fit">
                  <Button
                    link={{ title: "Get in touch", url: "#" }}
                    button={{ background_color: "lightGrey", type: "default" }}
                  />
                </div>
              </HintOverlay>
            </div>
          </div>
        </Section>
      </HintOverlay>

      {/* ── Stats row ────────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "Stats Row",
        description: "A row of key metrics, each showing a large number and a short label. Built directly with a grid — no special component needed.",
        prompt: "Add a light grey section that shows four stats side by side. Each stat has a large bold number and a short label underneath.",
      }}>
        <Section background={{ background_color: "lightGrey" }} padding_top="small" padding_bottom="small" has_container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "150+", label: "Sports federations" },
              { stat: "40+",  label: "Sportsbook operators" },
              { stat: "1B+",  label: "Data events per year" },
              { stat: "30+",  label: "Years of innovation" },
            ].map(({ stat, label }) => (
              <HintOverlay key={stat} mode="element" hint={{
                component: "Stat",
                description: "A large headline number with a short descriptive label below. Place several of these in a grid row to communicate key metrics at a glance.",
                prompt: `Add a stat showing "${stat}" as a large number with "${label}" as the label below it. Centre both the number and label.`,
              }}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-heading text-[48px] font-light leading-none tracking-[-0.04em] text-navy">
                    {stat}
                  </span>
                  <span className="mt-2 font-body text-[15px] text-navy/60">{label}</span>
                </div>
              </HintOverlay>
            ))}
          </div>
        </Section>
      </HintOverlay>

      {/* ── Feature cards ────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "Feature Card Grid",
        description: "A section with a small label, a heading, and three cards in a row. Each card has a light grey background, a brand icon, a title, body text, and a text link.",
        prompt: "Add a white section with a small blue label and a heading at the top, then three light grey cards in a row below it. Each card should have an icon at the top, a title, a short description, and a 'Learn more' link.",
      }}>
        <Section background={{ background_color: "white" }} padding_top="large" padding_bottom="large" has_container inner_spacing="large">
          <div className="text-center">
            <HintOverlay mode="element" inline hint={{
              component: "DotSubheading",
              description: "A small pill label with a coloured dot, placed above section headings to categorise or introduce the content below.",
              prompt: "Add a small label above the section heading that says 'Our platform' with a blue dot on the left.",
            }}>
              <DotSubheading subheading="Our platform" colour="blue" />
            </HintOverlay>
            <HintOverlay mode="element" hint={{
              component: "Section Heading (h2)",
              description: "A centred h2 heading. Font size scales fluidly between mobile and desktop. Max-width constrained to keep long headings readable.",
              prompt: "Add a large centred heading that reads 'Official data. Real-time delivery.'",
            }}>
              <h2 className="mx-auto max-w-2xl">Official data. Real-time delivery.</h2>
            </HintOverlay>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                heading: "Sports Data",
                content: "Official, real-time data from 150+ sports federations worldwide — scored, verified, and delivered at the speed of play.",
                icon: "liveData" as const,
              },
              {
                heading: "Integrity Services",
                content: "Industry-leading sports integrity monitoring, protecting the fairness of competition through advanced data analysis.",
                icon: "tier1Support" as const,
              },
              {
                heading: "Fan Engagement",
                content: "Immersive fan experiences powered by official data — from second-screen apps to broadcast graphics and widgets.",
                icon: "engage" as const,
              },
            ].map(({ heading, content, icon }) => (
              <HintOverlay key={heading} mode="element" hint={{
                component: "Feature Card",
                description: "A rounded light grey card with a brand icon, a title, body text, and a 'Learn more' text link at the bottom. Adds a subtle shadow on hover.",
                prompt: `Add a rounded light grey card with a brand icon at the top, a title that reads "${heading}", a short description, and a 'Learn more' link at the bottom.`,
              }}>
                <div className="group rounded-2xl bg-lightGrey p-8 transition-shadow hover:shadow-lg">
                  <HintOverlay mode="element" inline hint={{
                    component: "BrandIcon",
                    description: "One of 25 brand icons served as PNGs. Use mode='light' (navy) on light backgrounds and mode='dark' (white) on dark backgrounds. Size is set in pixels.",
                    prompt: `Add a brand icon using the "${icon}" icon at 40px, in light mode (navy colour), above the card title.`,
                  }}>
                    <div className="mb-5">
                      <BrandIcon name={icon} mode="light" size={40} />
                    </div>
                  </HintOverlay>

                  <HintOverlay mode="element" hint={{
                    component: "Card Title (h3)",
                    description: "A small heading inside a card. Uses the text-h7 utility for a consistent size across all cards.",
                    prompt: `Change the card title to "${heading}".`,
                  }}>
                    <h3 className="mb-3 text-h7">{heading}</h3>
                  </HintOverlay>

                  <HintOverlay mode="element" hint={{
                    component: "Body Copy",
                    description: "Supporting description text inside a card. Uses font-body at 16px with relaxed line-height and reduced opacity for a secondary visual weight.",
                    prompt: `Set the card body text to: "${content}"`,
                  }}>
                    <p className="font-body text-[16px] leading-relaxed text-navy/70">{content}</p>
                  </HintOverlay>

                  <HintOverlay mode="element" inline hint={{
                    component: "TextLink",
                    description: "An arrow-circle icon followed by a text label. Used for secondary navigation inside cards and content blocks.",
                    prompt: "Add a 'Learn more' text link at the bottom of the card.",
                  }}>
                    <div className="mt-6">
                      <TextLink link={{ title: "Learn more", url: "#" }} text_link={{ background_color: "navy" }} />
                    </div>
                  </HintOverlay>
                </div>
              </HintOverlay>
            ))}
          </div>
        </Section>
      </HintOverlay>

      {/* ── TextCard ─────────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "TextCard",
        description: "A two-column layout with a content block on the left and a visual placeholder on the right. The heading supports highlighted words — wrap any word in pipes (|like this|) to colour it.",
        prompt: "Add a dark navy section split into two columns. On the left, show a small label, a heading where one word is highlighted in green, some body text, and a white button. On the right, leave a placeholder space for an image or video.",
      }}>
        <Section background={{ background_color: "navy" }} padding_top="large" padding_bottom="large" has_container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start space-y-4 md:space-y-5">
              <HintOverlay mode="element" hint={{
                component: "Subheading",
                description: "A small secondary label above the main heading. Uses font-heading at 15px with reduced opacity to sit quietly above the headline.",
                prompt: "Add a small subheading above the section heading that reads 'Trusted by the best'.",
              }}>
                <h6 className="w-full font-heading text-[15px] tracking-[0.011em] opacity-80">
                  Trusted by the best
                </h6>
              </HintOverlay>

              <HintOverlay mode="element" hint={{
                component: "HighlightedText",
                description: "A heading where specific words are coloured. Wrap any word in |pipes| in the string and pass a brand colour token — the component swaps them for a coloured span.",
                prompt: "Change the heading to 'Powering the world's biggest sports |properties|' and highlight 'properties' in bright green.",
              }}>
                <HighlightedText
                  tag="h2"
                  content="Powering the world's biggest sports |properties|"
                  color="brightGreen"
                  className="w-full"
                />
              </HintOverlay>

              <HintOverlay mode="element" hint={{
                component: "Body Copy",
                description: "Supporting paragraph text. Uses font-body at 18px with opacity-80 for a secondary visual weight that complements the heading.",
                prompt: "Set the body text to: 'From Premier League to the NFL, our technology sits at the heart of sport's data infrastructure — delivering official feeds that operators and broadcasters depend on.'",
              }}>
                <p className="w-full font-body text-[18px] opacity-80">
                  From Premier League to the NFL, our technology sits at the heart of sport's data infrastructure — delivering official feeds that operators and broadcasters depend on.
                </p>
              </HintOverlay>

              <HintOverlay mode="element" inline hint={{
                component: "Button",
                description: "A pill-shaped CTA. The white variant stands out on dark navy backgrounds. Wrap in w-fit to prevent it stretching to full container width.",
                prompt: "Add a white pill button labelled 'See our partners' below the body text.",
              }}>
                <div className="w-fit pt-2">
                  <Button
                    link={{ title: "See our partners", url: "#" }}
                    button={{ background_color: "white", type: "default" }}
                  />
                </div>
              </HintOverlay>
            </div>

            <HintOverlay mode="element" hint={{
              component: "Media Placeholder",
              description: "A placeholder for an image, video, or animation. Uses aspect-video to maintain a 16:9 ratio. Replace the div with an <img> or embed when content is ready.",
              prompt: "Replace the right-column placeholder with a full-width image or video. Use rounded-2xl to match the card corner radius.",
            }}>
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-blue/20">
                <span className="font-body text-[14px] text-white/40">[ Replace with image or animation ]</span>
              </div>
            </HintOverlay>
          </div>
        </Section>
      </HintOverlay>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "GetStartedCTA",
        description: "A blue call-to-action banner with a heading, supporting text, and a single button. Decorative lines animate on both sides. Typically placed at the bottom of a page.",
        prompt: "Add a blue CTA banner near the bottom of the page with a heading, a short line of supporting text, and a button. Include some decorative lines on the sides.",
      }}>
        <Section background={{ background_color: "white" }} padding_top="large" padding_bottom="large" has_container>
          <GetStartedCTA
            heading="Ready to get started?"
            content="Join the world's leading sports data platform."
            link={{ title: "Talk to our team", url: "#", target: "" }}
          />
        </Section>
      </HintOverlay>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-lavenderGrey bg-navy px-6 py-12 lg:px-12">
        <div className="container mx-auto flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo variant="horizontal" color="white" className="h-20 w-auto" />
          <span className="font-body text-[13px] text-white/30">
            © {new Date().getFullYear()} Genius Sports Group. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
    </HintNavContext.Provider>
  );
}
