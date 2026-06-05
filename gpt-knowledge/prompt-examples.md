# Genius Sports Brand Kit — Prompt Examples Library
## Knowledge source for the GS Lovable Prompt Assistant
## Use these as reference for output quality and format

---

## HERO SECTIONS

### Centered hero, navy background, with springs (most common for landing pages)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a centered hero section with a navy background. Include a bright green label above the heading that says "Powering sport worldwide", a large light-weight headline that says "The data and technology behind modern sport" with a line break before "behind", a short paragraph describing the platform in one sentence, a white CTA button that says "Explore our platform", and a secondary text link that says "Talk to sales". Add the decorative spring elements on both sides of the content.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a TextMasthead inside a Section with background_color 'navy' and padding_top 'large'. Set alignment to 'center' and text_size to 'large'. Use subheading 'Powering sport worldwide' with subheading_colour { colours: 'brightGreen' }. Set heading to 'The data and technology<> behind modern sport' (the <> creates a line break). Add a content paragraph. Add a Button with background_color 'white' and type 'default' that says 'Explore our platform', and a TextLink with background_color 'white' that says 'Talk to sales'. Set add_springs to true with spring_colour { colours: 'blue' }.

---

### Left-aligned hero, white background (product / inner pages)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a left-aligned hero section on a white background. Include a blue label that says "Sports Data", a large headline that says "Official data. Real-time delivery." with a line break after the first sentence, a short paragraph, and a single navy CTA button that says "Explore Sports Data". No decorative elements.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a TextMasthead inside a white Section with padding_top 'large' and has_container true. Set alignment to 'left' and text_size to 'default'. Use subheading 'Sports Data' with subheading_colour { colours: 'blue' }. Set heading to 'Official data.<> Real-time delivery.'. Add a content paragraph. Add a Button with background_color 'navy' and type 'default' that says 'Explore Sports Data'.

---

## CONTENT SECTIONS

### Two-column feature block, text on left, dark background

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a text content block on the left side of a two-column layout on a navy background. Include a label above that says "Trusted by the best", a large heading that says "Powering the world's biggest sports properties" with the word "properties" highlighted in bright green, a short description paragraph, and a white CTA button that says "See our partners".

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a TextCard inside a Section with background_color 'navy'. Set subheading to 'Trusted by the best'. Set heading to "Powering the world's biggest sports |properties|" and heading_highlighted_color to 'brightGreen'. Add a content paragraph. Add a Button with background_color 'white' and type 'default' that says 'See our partners'. Use heading_tag 'h2' and text_alignment 'left'.

---

### Centered content block, light background

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a centered content block on a white background with a label that says "Our platform", a large heading that says "Official data. Real-time delivery." with "Real-time" highlighted in brand blue, a short paragraph, and a centered navy CTA button.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a TextCard with text_alignment 'center' and section_alignment 'center'. Set subheading to 'Our platform'. Set heading to 'Official data. |Real-time| delivery.' with heading_highlighted_color 'blue'. Add a content paragraph. Add a Button with background_color 'navy' and type 'default'. Use heading_tag 'h2'.

---

## NAVIGATION

### Page navigation bar

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a white sticky navigation bar at the top of the page with the Genius Sports horizontal logo on the left and two buttons on the right: a grey "Log in" button and a darker "Contact Sales" button. The navigation should stay visible when scrolling.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a sticky header with bg-white and border-b border-lavenderGrey. On the left, add a Logo with variant 'horizontal' and color 'blue' and className 'h-8 w-auto'. On the right, add a Button with background_color 'light-grey' and type 'header' that says 'Log in', and a Button with background_color 'navy' and type 'header' that says 'Contact Sales'.

---

## CTA SECTIONS

### Blue GetStartedCTA banner

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a "ready to get started" call-to-action section near the bottom of the page. It should have a bold headline, a short sentence below it, and a button that says "Talk to our team". Use the pre-built blue CTA banner style with decorative line elements.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a GetStartedCTA with heading 'Ready to get started?', content 'Join the world's leading sports data platform.', and link { title: 'Talk to our team', url: '/contact', target: '' }.

---

### Simple CTA section, navy background

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a dark navy CTA section with a centered heading that says "Start building with official data", a subtitle saying "Trusted by 150+ sports federations worldwide", and two centered buttons: a white "Get started" button and a white text link that says "Speak to sales".

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Section with background_color 'navy', padding_top 'large', padding_bottom 'large', has_container true, and inner_spacing 'small'. Inside, add a centered h2 heading 'Start building with official data', a centered paragraph 'Trusted by 150+ sports federations worldwide' using font-body and text-18, then a LinkGroup with centered true containing a Button with background_color 'white' type 'default' ('Get started') and a TextLink with background_color 'white' ('Speak to sales').

---

## FEATURE / STATS ROWS

### 3-column feature icons

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a section on a light grey background with three columns, each showing a Genius Sports brand icon, a bold title, and a short description. Use the "data", "engage", and "fans" icons. The icons should be the navy versions since the background is light.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Section with background_color 'lightGrey', padding_top 'medium', padding_bottom 'medium', has_container true. Inside, add a 3-column grid. Each column contains: a BrandIcon with mode 'light' and size 48, an h5 heading (bold), and a short paragraph using font-body text-15 text-navy/70. Use icon names 'data', 'engage', and 'fans'.

---

### Stats bar — plain bordered cards (light background)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a row of four key statistics on a white or light grey background. Each stat should have a large number, a short blue divider line, and a label beneath it. Use bordered cards with no background fill.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Section with background_color 'lightGrey', padding_top 'medium', padding_bottom 'medium', has_container true. Inside, add a 4-column grid of StatBlock components: value '3B+' label 'data events processed daily', value '150+' label 'sports federations partnered', value '47%' label 'increase in fan engagement', value '95%' label 'live match uptime guaranteed'.

---

### Stats bar — colored backgrounds

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a row of stat cards each with a different brand color background — blue, navy, bright green, and light blue. Each card shows a large metric and a short label.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add four StatBlock components in a grid with backgrounds: 'blue' (value '3B+', label 'data events processed daily'), 'navy' (value '150+', label 'sports federations'), 'brightGreen' (value '47%', label 'fan engagement lift'), 'lightBlue' (value '95%', label 'match uptime guaranteed').

---

### Stats bar — on a dark navy section

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a row of stats inside a dark navy section. The cards should have no background fill — just the large number, a bright green divider, and white label text floating on the navy background.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Section with background_color 'navy', padding_top 'medium', padding_bottom 'medium', has_container true. Inside, add a 4-column grid of StatBlock components with dark={true}: value '3B+' label 'data events daily', value '150+' label 'sports federations', value '47%' label 'fan engagement lift', value '95%' label 'match uptime'.

---

## LINE BLOCKS

### Diagonal lines bleeding off the corner of a hero section

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add diagonal bright green lines in the top-right corner of the hero section that bleed off the edge. The lines should feel like a graphic design element — not boxed in.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a LineBlock with color 'brightGreen', steps 20, rotation 45 inside an absolute-positioned div in the top-right of the hero section. No clip needed — the section's own overflow-hidden handles the boundary. Set the div to roughly h-48 w-48.

---

### Standalone decorative rectangle of lines

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a rectangular block of parallel brand-blue vertical lines as a standalone decorative element. The lines should be clipped to a hard rectangle — not bleeding out.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a LineBlock with color 'blue', steps 20, clip={true}, and className 'h-40 w-full'.

---

## LABELS AND TAGS

### Section label above a heading

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a small pill label above the section heading that says "Integrity services" with a navy dot on the left.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a DotSubheading with subheading 'Integrity services' and colour 'navy' above the section heading.

---

### "New" badge next to a feature

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a small blue pill badge next to the feature name that says "New" to mark it as recently launched.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a PillTag with text 'New' inline next to the feature heading.

---

## HIGHLIGHTED HEADINGS

### Bright green highlight on dark (high energy)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> In the hero heading on the navy background, make the words "modern sport" appear in bright yellow-green to draw attention to them. The full heading is "The data behind modern sport".

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Set the heading to 'The data behind |modern sport|' and set heading_highlighted_color (or color prop) to 'brightGreen'. Ensure the parent element has text-white so the non-highlighted text is visible.

---

### Light blue highlight on dark (premium feel)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> In the navy hero section heading "Powering the world's biggest sports properties", make the word "biggest" stand out in light blue.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Set heading to "Powering the world's |biggest| sports properties" and heading_highlighted_color to 'lightBlue'.

---

### Brand blue highlight on white (clean, editorial)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> In the white section heading "Official data. Real-time delivery.", make "Real-time" appear in brand blue.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Set heading to 'Official data. |Real-time| delivery.' with heading_highlighted_color 'blue'.

---

### Orange highlight on white (warm, sporty)

**Describe it** *(starting from scratch — gives Lovable creative room)*
> In the white section heading, make the phrase "fan engagement" stand out in orange.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Set heading to 'Driving |fan engagement| worldwide' with heading_highlighted_color 'orange'.

---

## LOGO USAGE

### Navigation logo

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add the Genius Sports horizontal logo in the top left corner of the navigation bar. The nav has a white background, so use the blue version of the logo.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Logo with variant 'horizontal', color 'blue', and className 'h-8 w-auto' in the nav header.

---

### Footer logo

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add the Genius Sports logo in the footer. Use the horizontal layout with white text since the footer has a dark navy background.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Logo with variant 'horizontal', color 'white', and className 'h-6 w-auto' in the footer.

---

### Icon mark only

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add just the Genius Sports "G" mark logo as a small icon — no text — in the top bar beside the page title. The bar is dark navy.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Logo with variant 'marque', color 'white', and className 'h-5 w-auto'.

---

## SECTION BACKGROUNDS

### Changing a section background color

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Change the statistics section to a light grey background. Keep the text dark.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Set the Section background_color to 'lightGrey' for the statistics row section.

---

### Creating a bright green accent section

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Add a bright yellow-green accent section with a bold centered heading and a navy CTA button. Use this sparingly — just one section per page.

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> Add a Section with background_color 'brightGreen', padding_top 'medium', padding_bottom 'medium', has_container true. Add a centered heading and a Button with background_color 'navy' type 'default'. Text will automatically be navy on this background.

---

## FULL PAGE EXAMPLES

### Simple product microsite hero page

**Describe it** *(starting from scratch — gives Lovable creative room)*
> Build a landing page for our Sports Integrity product. Start with a sticky white navigation bar with the Genius Sports horizontal logo (blue version) and a "Contact Sales" button. Below that, a full-width navy hero section: centered layout, bright green label saying "Sports Integrity", large heading saying "Protecting the fairness of competition", a short description, a white "Learn more" button and a white "Speak to our team" text link. Add the spring decorations on both sides. Then a light grey stats row with three stats: "150+ Federations", "Real-time monitoring", and "20+ Years experience". End with the blue GetStartedCTA banner with heading "Ready to protect your sport?" and a button that says "Get in touch".

**Using brand terms** *(following a design handoff — keeps Lovable on-spec)*
> 1. Add a sticky header with bg-white and a Logo (variant: horizontal, color: blue, h-8) and a Button (background_color: light-grey, type: header, "Contact Sales").
> 2. Add a Section (background_color: navy, padding_top: xLarge, has_container: true) with a TextMasthead (alignment: center, text_size: large, subheading: "Sports Integrity", subheading_colour: { colours: brightGreen }, heading: "Protecting the fairness<> of competition", content, a white default Button ("Learn more"), a white TextLink ("Speak to our team"), add_springs: true, spring_colour: { colours: blue }).
> 3. Add a Section (background_color: lightGrey, padding_top: medium, has_container: true) with a 3-column grid of StatBlock components: value '150+' label 'Federations', value 'Real-time' label 'Live monitoring', value '20+' label 'Years of experience'.
> 4. Add a GetStartedCTA (heading: "Ready to protect your sport?", content: "Talk to our team today.", link: { title: "Get in touch", url: "/contact" }).
