import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
import MarketingCatalog from "./MarketingCatalog";
import Glossary from "./Glossary";
import BestPractices from "./BestPractices";
import Section from "./components/layouts/Section";
import TextMasthead from "./components/sections/TextMasthead";
import GetStartedCTA from "./components/sections/GetStartedCTA";
import DotSubheading from "./components/sections/DotSubheading";
import Button from "./components/elements/Button";
import TextLink from "./components/elements/TextLink";
import TextCard from "./components/elements/TextCard";
import Logo from "./components/brand/Logo";
import BrandIcon from "./components/brand/BrandIcon";
import HintOverlay from "./components/demo/HintOverlay";

// ─── App ─────────────────────────────────────────────────────────────────────
type PageType = "demo" | "catalog" | "brand-guide" | "glossary" | "best-practices";

export default function App() {
  const [page, setPage] = useState<PageType>("demo");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (page === "catalog") return <Catalog onNavigate={setPage} />;
  if (page === "brand-guide") return <MarketingCatalog onNavigate={setPage} />;
  if (page === "glossary") return <Glossary onNavigate={setPage} />;
  if (page === "best-practices") return <BestPractices onNavigate={setPage} />;

  return (
    <div className="min-h-screen bg-white text-navy">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className={`sticky top-0 z-50 flex h-24 items-center justify-between bg-navy px-6 lg:px-12 transition-opacity duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Logo variant="vertical" color="white" className="h-20 w-auto" />
        <nav className="hidden items-center gap-2 md:flex">
          {([
            { id: "brand-guide" as PageType, label: "Brand Guide" },
            { id: "glossary" as PageType, label: "Glossary" },
            { id: "best-practices" as PageType, label: "Best Practices" },
            { id: "catalog" as PageType, label: "Catalog" },
          ]).map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setPage(id)}
              className="rounded-full px-4 py-2 font-heading text-[16px] font-normal text-white/80 transition-colors hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>
        <Button
          link={{ title: "Get started", url: "#" }}
          button={{ background_color: "white15", type: "header" }}
        />
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HintOverlay mode="section" hint={{
        component: "TextMasthead",
        description: "The hero section. A large heading, supporting text, and a CTA button on a dark background. Decorative lines appear on both sides of the content.",
        prompt: "Add a full-screen hero section with a dark navy background. Include a small label at the top with a green dot, a large two-line headline, a short paragraph, and a light grey button. Add decorative vertical lines on both sides of the content.",
      }}>
        <Section background={{ background_color: "navy" }} padding_top="huge" padding_bottom="huge" has_container inner_spacing="medium">
          <TextMasthead
            content={{
              subheading: "Powering sport worldwide",
              heading: "The data and technology<> behind modern sport",
              content: "We connect sports federations, broadcasters, and betting operators with the official data, integrity services, and fan engagement tools they need to grow.",
              links: [
                {
                  link: { title: "Get in touch", url: "#", target: "" },
                  type: "button",
                  button: { background_color: "lightGrey", type: "default" },
                } as any,
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
                  <div className="mb-5">
                    <BrandIcon name={icon} mode="light" size={40} />
                  </div>
                  <h3 className="mb-3 text-h7">{heading}</h3>
                  <p className="font-body text-[16px] leading-relaxed text-navy/70">{content}</p>
                  <div className="mt-6">
                    <TextLink link={{ title: "Learn more", url: "#" }} text_link={{ background_color: "navy" }} />
                  </div>
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
            <TextCard
              text_card={{
                subheading: "Trusted by the best",
                heading: "Powering the world's biggest sports |properties|",
                content: "From Premier League to the NFL, our technology sits at the heart of sport's data infrastructure — delivering official feeds that operators and broadcasters depend on.",
                links: [
                  {
                    link: { title: "See our partners", url: "#", target: "" },
                    type: "button",
                    button: { background_color: "white", type: "default" },
                  } as any,
                ],
                options: {
                  heading_tag: "h2",
                  heading_highlighted_color: "brightGreen",
                  text_alignment: "left",
                },
              }}
            />
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-blue/20">
              <span className="font-body text-[14px] text-white/40">[ Replace with image or animation ]</span>
            </div>
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
          <Logo variant="horizontal" color="white" className="h-6 w-auto" />
          <span className="font-body text-[13px] text-white/30">
            © {new Date().getFullYear()} Genius Sports Group. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
  );
}
