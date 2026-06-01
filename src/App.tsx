import React, { useState } from "react";
import Catalog from "./Catalog";
import MarketingCatalog from "./MarketingCatalog";
import Section from "./components/layouts/Section";
import TextMasthead from "./components/sections/TextMasthead";
import GetStartedCTA from "./components/sections/GetStartedCTA";
import DotSubheading from "./components/sections/DotSubheading";
import Button from "./components/elements/Button";
import TextLink from "./components/elements/TextLink";
import PillTag from "./components/elements/PillTag";
import CustomLines from "./components/elements/CustomLines";
import TextCard from "./components/elements/TextCard";
import Logo from "./components/brand/Logo";
import BrandIcon, { brandIcons, BrandIconName } from "./components/brand/BrandIcon";
import { colors } from "./tokens/tokens";

// ─── Color palette swatch ────────────────────────────────────────────────────
function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  const isLight = ["white", "snow", "lightGrey", "lavenderGrey", "lightBlue", "lightGreen", "brightGreen", "lightOrange", "lightPurple"].includes(name);
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-14 w-full rounded-lg border border-lavenderGrey"
        style={{ backgroundColor: hex }}
      />
      <span className="text-[12px] font-body text-navy/60">{name}</span>
      <span className="text-[11px] font-mono text-navy/40">{hex}</span>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<"demo" | "catalog" | "brand-guide">("demo");

  if (page === "catalog") {
    return <Catalog onBack={() => setPage("demo")} />;
  }

  if (page === "brand-guide") {
    return <MarketingCatalog onBack={() => setPage("demo")} />;
  }

  return (
    <div className="min-h-screen bg-white text-navy">

      {/* ── Minimal nav bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-lavenderGrey bg-white/95 px-6 backdrop-blur-sm lg:px-12">
        <Logo variant="horizontal" color="blue" className="h-10 w-auto" />
        <nav className="hidden items-center gap-8 md:flex">
          {["Products", "Solutions", "Customers", "Company"].map((item) => (
            <a key={item} href="#" className="font-body text-[15px] text-navy/70 transition-colors hover:text-navy">
              {item}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setPage("brand-guide")}
          className="rounded-full bg-brightGreen/20 px-4 py-2 font-heading text-[13px] text-navy/70 transition-colors hover:bg-brightGreen hover:text-navy"
        >
          Brand Guide
        </button>
        <button
          onClick={() => setPage("catalog")}
          className="rounded-full bg-navy/5 px-4 py-2 font-heading text-[13px] text-navy/60 transition-colors hover:bg-navy hover:text-white"
        >
          Component Catalog
        </button>
        <Button
          link={{ title: "Get started", url: "#" }}
          button={{ background_color: "light-grey", type: "header" }}
        />
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Section
        background={{ background_color: "navy" }}
        padding_top="huge"
        padding_bottom="huge"
        has_container
        inner_spacing="medium"
      >
        <TextMasthead
          content={{
            subheading: "Powering sport worldwide",
            heading: "The data and technology<> behind modern sport",
            content: "We connect sports federations, broadcasters, and betting operators with the official data, integrity services, and fan engagement tools they need to grow.",
            links: [
              {
                link: {
                  title: "Explore our platform",
                  url: "#",
                  target: "",
                },
                type: "button",
                button: { background_color: "white", type: "default" },
              } as any,
              {
                link: {
                  title: "Talk to sales",
                  url: "#",
                  target: "",
                },
                type: "text",
                text_link: { background_color: "navy" },
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

      {/* ── Stats row ────────────────────────────────────────────────────── */}
      <Section background={{ background_color: "lightGrey" }} padding_top="small" padding_bottom="small" has_container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { stat: "150+", label: "Sports federations" },
            { stat: "40+", label: "Sportsbook operators" },
            { stat: "1B+", label: "Data events per year" },
            { stat: "30+", label: "Years of innovation" },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col items-center text-center">
              <span className="font-heading text-[48px] font-light leading-none tracking-[-0.04em] text-navy">
                {stat}
              </span>
              <span className="mt-2 font-body text-[15px] text-navy/60">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Feature cards ────────────────────────────────────────────────── */}
      <Section background={{ background_color: "white" }} padding_top="large" padding_bottom="large" has_container inner_spacing="large">
        <div className="text-center">
          <DotSubheading subheading="Our platform" colour="blue" />
          <h2 className="mx-auto max-w-2xl">Official data. Real-time delivery.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              heading: "Sports Data",
              content: "Official, real-time data from 150+ sports federations worldwide — scored, verified, and delivered at the speed of play.",
              accent: "bg-brightGreen",
            },
            {
              heading: "Integrity Services",
              content: "Industry-leading sports integrity monitoring, protecting the fairness of competition through advanced data analysis.",
              accent: "bg-lightBlue",
            },
            {
              heading: "Fan Engagement",
              content: "Immersive fan experiences powered by official data — from second-screen apps to broadcast graphics and widgets.",
              accent: "bg-lightPurple",
            },
          ].map(({ heading, content, accent }) => (
            <div key={heading} className="group rounded-2xl border border-lavenderGrey bg-white p-8 transition-shadow hover:shadow-lg">
              <div className={`mb-5 h-10 w-10 rounded-lg ${accent}`} />
              <h3 className="mb-3 text-h7">{heading}</h3>
              <p className="font-body text-[16px] leading-relaxed text-navy/70">{content}</p>
              <div className="mt-6">
                <TextLink
                  link={{ title: "Learn more", url: "#" }}
                  text_link={{ background_color: "navy" }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TextCard example ─────────────────────────────────────────────── */}
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
          {/* Placeholder visual */}
          <div className="flex aspect-video items-center justify-center rounded-2xl bg-blue/20">
            <span className="font-body text-[14px] text-white/40">[ Replace with image or animation ]</span>
          </div>
        </div>
      </Section>

      {/* ── Tag & pill demos ─────────────────────────────────────────────── */}
      <Section background={{ background_color: "lightGrey" }} padding_top="small" padding_bottom="small" has_container>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-body text-[15px] text-navy/60">Tags &amp; labels:</span>
          {["Live Data", "Integrity", "Betting", "Fan Engagement", "Broadcast"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-lavenderGrey bg-white px-4 py-1.5 font-body text-[13px] text-navy"
            >
              {tag}
            </span>
          ))}
          <PillTag text="New" />
          <PillTag text="Beta" />
        </div>
      </Section>

      {/* ── Color palette ────────────────────────────────────────────────── */}
      <Section background={{ background_color: "white" }} padding_top="medium" padding_bottom="medium" has_container inner_spacing="small">
        <div>
          <DotSubheading subheading="Brand colors" colour="navy" />
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-9">
            {(Object.entries(colors) as [string, string][]).map(([name, hex]) => (
              <ColorSwatch key={name} name={name} hex={hex} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── Button variants ──────────────────────────────────────────────── */}
      <Section background={{ background_color: "lightGrey" }} padding_top="medium" padding_bottom="medium" has_container inner_spacing="small">
        <DotSubheading subheading="Button variants" colour="blue" />
        <div className="flex flex-wrap items-center gap-6">
          <Button link={{ title: "Primary", url: "#" }} button={{ background_color: "navy", type: "default" }} />
          <Button link={{ title: "White", url: "#" }} button={{ background_color: "white", type: "default" }} />
          <Button link={{ title: "Outline", url: "#" }} button={{ background_color: "navy", type: "outline" }} />
          <Button link={{ title: "Slim", url: "#" }} button={{ background_color: "navy", type: "slim" }} />
        </div>
        <div className="flex flex-wrap items-center gap-8 rounded-xl bg-navy px-8 py-6">
          <Button link={{ title: "On dark", url: "#" }} button={{ background_color: "white", type: "default" }} />
          <TextLink link={{ title: "Text link", url: "#" }} text_link={{ background_color: "navy" }} />
          <TextLink link={{ title: "White link", url: "#" }} text_link={{ background_color: "white" }} />
        </div>
      </Section>

      {/* ── CustomLines decoration demo ──────────────────────────────────── */}
      <Section background={{ background_color: "white" }} padding_top="small" padding_bottom="small" has_container inner_spacing="none">
        <div className="flex items-center gap-8">
          <span className="font-body text-[14px] text-navy/50">Decorative lines:</span>
          <div className="h-8 flex-1">
            <CustomLines lineNumber={6} lineDirection="horizontal" lineClassName="bg-lavenderGrey" initialLineWidth={6} />
          </div>
          <div className="h-8 flex-1">
            <CustomLines lineNumber={6} lineDirection="horizontal" lineClassName="bg-blue/20" initialLineWidth={6} />
          </div>
        </div>
      </Section>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <Section background={{ background_color: "white" }} padding_top="large" padding_bottom="large" has_container>
        <GetStartedCTA
          heading="Ready to get started?"
          content="Join the world's leading sports data platform."
          link={{ title: "Talk to our team", url: "#", target: "" }}
        />
      </Section>

      {/* ── Branded icons showcase ───────────────────────────────────────── */}
      <Section background={{ background_color: "navy" }} padding_top="medium" padding_bottom="medium" has_container inner_spacing="small">
        <DotSubheading subheading="Branded icons" colour="brightGreen" />
        <div className="space-y-8">
          {/* Light mode icons (on dark bg — shown as white/inverted) */}
          <div>
            <p className="mb-4 font-body text-[13px] text-white/40 uppercase tracking-widest">Dark mode (white)</p>
            <div className="flex flex-wrap gap-6">
              {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <BrandIcon name={name} mode="dark" size={40} />
                  <span className="font-body text-[10px] text-white/40 capitalize">{name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Light mode icons (on light bg) */}
        </div>
      </Section>

      <Section background={{ background_color: "lightGrey" }} padding_top="medium" padding_bottom="medium" has_container inner_spacing="small">
        <div>
          <p className="mb-4 font-body text-[13px] text-navy/40 uppercase tracking-widest">Light mode (navy)</p>
          <div className="flex flex-wrap gap-6">
            {(Object.keys(brandIcons) as BrandIconName[]).map((name) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <BrandIcon name={name} mode="light" size={40} />
                <span className="font-body text-[10px] text-navy/40 capitalize">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Logo variants ────────────────────────────────────────────────── */}
      <Section background={{ background_color: "white" }} padding_top="medium" padding_bottom="medium" has_container inner_spacing="small">
        <DotSubheading subheading="Logo variants" colour="blue" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-xl bg-white p-8 border border-lavenderGrey">
            <span className="font-body text-[12px] uppercase tracking-widest text-navy/40">On light</span>
            <Logo variant="horizontal" color="blue" className="h-14 w-auto" />
            <Logo variant="wordmark"   color="blue" className="h-10 w-auto" />
            <Logo variant="marque"     color="blue" className="h-16 w-auto" />
          </div>
          <div className="flex flex-col gap-8 rounded-xl bg-navy p-8">
            <span className="font-body text-[12px] uppercase tracking-widest text-white/40">On dark</span>
            <Logo variant="horizontal" color="white" className="h-14 w-auto" />
            <Logo variant="wordmark"   color="white" className="h-10 w-auto" />
            <Logo variant="marque"     color="white" className="h-16 w-auto" />
          </div>
        </div>
      </Section>

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
