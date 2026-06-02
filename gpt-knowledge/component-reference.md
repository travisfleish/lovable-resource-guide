# Genius Sports Brand Kit — Component Reference
## Knowledge source for the GS Lovable Prompt Assistant

---

## COLORS

17 named color tokens. Always refer to these by name, never by hex value.

| Token name    | Hex      | Use on text? | Notes |
|---------------|----------|-------------|-------|
| navy          | #0D1226  | Yes         | Primary dark — hero sections, dark backgrounds |
| blue          | #0000DC  | Yes         | Brand blue — CTA sections, accent color |
| lightBlue     | #95ECFD  | Accent      | Soft highlight on dark backgrounds |
| brightGreen   | #E1FF67  | Accent      | High-energy accent, use sparingly |
| lightGreen    | #18C971  | Accent      | Mid-tone green accent |
| green         | #047C40  | Yes         | Deep green |
| lightPurple   | #C2D1FF  | Accent      | Soft section background or highlight |
| purple        | #4337A8  | Yes         | Deep purple |
| lightOrange   | #FFEBAF  | Accent      | Warm soft accent |
| orange        | #FA5D00  | Yes         | Warm bold accent |
| lightRed      | #F76B6A  | Accent      | Soft red |
| red           | #C20000  | Yes         | Deep red |
| black         | #000000  | Yes         | True black |
| lightGrey     | #F6F7F9  | Background  | Very light grey — stats rows, divider sections |
| lavenderGrey  | #E7E7E9  | Border      | Used for borders and dividers |
| white         | #ffffff  | Yes         | Pure white |
| snow          | #FAFAFA  | Background  | Very slightly off-white |

**Section background + automatic text color pairing:**
- navy → white text
- blue → white text
- brightGreen → navy text
- lightBlue → navy text
- lightPurple → navy text
- lightOrange → navy text
- lightGrey → navy text
- white → navy text
- snow → navy text

---

## TYPOGRAPHY

### Heading classes (KlarheitKurrent font, fluid between 768px–1024px)

| Class   | HTML tag | Use case |
|---------|----------|----------|
| text-h1 | h1       | Page title, main hero headline |
| text-h2 | h2       | Section headline |
| text-h3 | h3       | Sub-section headline |
| text-h4 | h4       | Card headline, stat number |
| text-h5 | h5       | Smaller card title |
| text-h6 | h6       | Label heading |
| text-h7 | p        | Small bold label text |

**Font weight**: headings typically use `font-light` for display/editorial feel, `font-medium` or `font-semibold` for emphasis.

### Body text classes (Red Hat Text font)

| Class       | Approx size | Use case |
|-------------|-------------|----------|
| text-22     | 22px        | Large body — hero subheading, intro copy |
| text-18     | 18px        | Standard body — section copy |
| text-16     | 16px        | Medium body |
| text-15     | 15px        | Small body — card copy, captions |
| text-14     | 14px        | Label, secondary text |
| text-12     | 12px        | Meta text, small labels |
| text-11     | 11px        | Micro labels, UI |
| text-9      | 9px         | Smallest text |

**Always add `font-body` class to paragraphs and labels.** The page default is KlarheitKurrent (heading font), so body text needs the explicit class.

### Line breaks in headings
Use `<>` inside a heading string to insert a line break that activates at medium+ screen sizes:
- `"The data and technology<> behind modern sport"` → breaks before "behind" on tablet/desktop

### Display sizes (for oversized decorative type)
text-88, text-80, text-72, text-70, text-64, text-header-stat

---

## COMPONENTS

---

### Button

Pill-shaped animated button with framer-motion hover effect.

**Props:**
- `link.title` — button label text
- `link.url` — destination URL
- `button.type` — visual style:
  - `"default"` — full-size CTA (most common)
  - `"slim"` — smaller, secondary/inline
  - `"header"` — compact, for navigation bars
  - `"outline"` — ghost style with border, no fill
- `button.background_color`:
  - `"navy"` — dark fill, use on light backgrounds
  - `"white"` — white fill, use on dark/navy backgrounds
  - `"light-grey"` — subtle grey, secondary on light backgrounds
  - `"white15"` — semi-transparent white, use on dark backgrounds
  - `"navy5"` — semi-transparent navy, subtle

**Important**: The button stretches to fill its container by default. Wrap in `<div className="w-fit">` when you want a naturally-sized pill.

**Example prompts:**
- "Add a Button with background_color 'navy' and type 'default' that says 'Explore our platform'."
- "Add a Button with background_color 'white' and type 'default' for a dark section that says 'Get started'."
- "Add a Button with background_color 'light-grey' and type 'header' that says 'Contact Sales' in the navigation."

---

### TextLink

Arrow-circle icon + bold text link. Use as a secondary action where a full button would be too heavy.

**Props:**
- `link.title` — link label
- `link.url` — destination URL
- `text_link.background_color`:
  - `"navy"` — navy icon and text, use on light backgrounds
  - `"white"` — white icon and text, use on dark backgrounds

**Example prompts:**
- "Add a TextLink with background_color 'navy' that says 'Learn more'."
- "Add a TextLink with background_color 'white' that says 'See our partners' on the dark hero section."

---

### PillTag

Small blue rounded badge. Use to label new features, categories, or status.

**Props:**
- `text` — label text (keep short: 1–3 words)

**Example prompts:**
- "Add a PillTag with text 'New' next to the feature name."
- "Add a blue pill badge that says 'Beta'."

---

### DotSubheading

Pill label with a colored dot and tapering line decoration. Used above section headings.

**Props:**
- `subheading` — label text
- `colour` — color name for the dot (e.g. `blue`, `brightGreen`, `navy`, `lightBlue`, `orange`, `lightPurple`)

**Note**: Always renders with a light grey pill background regardless of the parent section's background. The text is always navy. Do NOT use on a `lightGrey` section background — the pill will be invisible.

**Example prompts:**
- "Add a DotSubheading above the heading with subheading 'Our platform' and colour 'blue'."
- "Add a small pill label that says 'Trusted by the best' with a bright green dot."

---

### HighlightedText

Renders a heading where specific words are colored differently. Wrap words in `|pipe characters|` to highlight them.

**Props:**
- `tag` — HTML heading tag (`h1`, `h2`, `h3`, `h4`, etc.)
- `content` — text with `|highlighted words|` wrapped in pipes
- `color` — color name for the highlighted words (e.g. `brightGreen`, `lightBlue`, `blue`, `orange`)

**Important**: The non-highlighted text inherits color from its parent. On dark backgrounds, ensure the parent has `text-white` set.

**Example prompts:**
- "In the heading, wrap 'modern sport' in pipe characters: 'The data behind |modern sport|'. Set heading_highlighted_color to 'brightGreen'."
- "Make the words 'real-time' appear in brand blue in the heading: 'Official data. |Real-time| delivery.' Set color to 'blue'."

---

### DotSubheading

See above.

---

### TextMasthead

Full hero/masthead section component. The main component for page-top hero content.

**Content props:**
- `content.subheading` — small label text (renders as DotSubheading by default)
- `content.heading` — main heading text. Use `<>` for a line break at medium+ screens.
- `content.content` — body paragraph
- `content.links` — array of Button/TextLink objects

**Options props:**
- `options.alignment` — `"center"` (default, for landing pages) or `"left"` (for product/inner pages)
- `options.text_size` — `"large"` (bumps heading up a size, body to text-22) or `"default"`
- `options.subheading_colour` — `{ colours: "colorName" }` — dot color for the label
- `options.simple_subheading` — `true` renders subheading as plain text instead of pill
- `options.add_springs` — `true` shows decorative tapered-line spring elements on both sides
- `options.spring_colour` — `{ colours: "colorName" }` — color of the springs
- `options.max_width` — max width of the entire block in px
- `options.content_max_width` — max width of the body text in px

**Typical usage — centered navy hero:**
```
TextMasthead with:
- alignment: "center"
- text_size: "large"
- subheading_colour: { colours: "brightGreen" }
- add_springs: true, spring_colour: { colours: "blue" }
```

**Typical usage — left-aligned product page hero:**
```
TextMasthead with:
- alignment: "left"
- text_size: "default"
- subheading_colour: { colours: "blue" }
- (no springs)
```

---

### TextCard

A flexible content block: label + heading + body + CTAs. Used inside sections, typically alongside images or data visuals.

**Props (all under `text_card`):**
- `subheading` — small label above the heading
- `heading` — main heading. Use `|pipes|` for highlighted words.
- `content` — body paragraph
- `links` — array of Button/TextLink objects
- `options.heading_tag` — `"h1"` through `"h6"`
- `options.text_alignment` — `"left"`, `"center"`, or `"right"`
- `options.section_alignment` — `"center"` to center the entire block (use with `text_alignment: "center"`)
- `options.heading_highlighted_color` — color name for `|piped|` words in the heading

---

### Section

Page-level layout wrapper. Wraps any content in a section with background color, padding, and optional container.

**Props:**
- `background.background_color` — color token name (sets bg + text color automatically)
- `padding_top` and `padding_bottom` — padding scale:
  - `"none"`, `"min"`, `"tiny"`, `"xSmall"`, `"small"`, `"medium"`, `"large"`, `"xLarge"`, `"huge"`, `"max"`
- `inner_spacing` — same scale as padding, controls vertical spacing between children
- `has_container` — `true` wraps content in a centered max-width container
- `is_rounded` — `true` adds rounded corners to the inner block

**Padding scale approximate values:**
- none: 0
- min: 2rem / 5rem (mobile/desktop)
- small: 2.5rem / 7rem
- medium: 3rem / 7.5rem
- large: 3rem / 9rem
- xLarge: 4rem / 10rem
- huge: 4rem / 11rem
- max: 5rem / 11.875rem

---

### GetStartedCTA

A pre-built blue CTA banner section with animated spring decorations. Use at the bottom of pages.

**Props:**
- `heading` — main headline
- `content` — supporting body text
- `link` — `{ title, url, target }` — CTA button

**Example prompt:**
- "Add a GetStartedCTA at the bottom of the page with heading 'Ready to get started?' and body 'Join the world's leading sports data platform.' and a button that says 'Talk to our team'."

---

### Logo

Genius Sports logo in four variants.

**Props:**
- `variant`: `"horizontal"` | `"vertical"` | `"wordmark"` | `"marque"`
  - horizontal — full logo with icon + text side by side (use in navigation)
  - vertical — icon above text
  - wordmark — text only
  - marque — G mark icon only
- `color`: `"blue"` (on light backgrounds) | `"white"` (on dark backgrounds)
- `className` — size control: use `h-10 w-auto` for standard nav size

**Rules:**
- Always use `color="blue"` on white/light backgrounds
- Always use `color="white"` on navy/dark backgrounds

---

### BrandIcon

25 official Genius Sports brand icons as PNG images.

**Props:**
- `name` — icon identifier (see full list below)
- `mode`: `"light"` (navy icon, for light backgrounds) | `"dark"` (white icon, for dark backgrounds)
- `size` — width and height in pixels (default 48)

**All 25 icon names:**
basketball, cloud, data, distribute, engage, euros, fans, field, football, liveData, livePricing, majorSports, monetise, personalise, platform, pounds, pricing, reach, soccer, social, stadium, statistics, tier1Support, video, vr3d

**Example prompts:**
- "Add three BrandIcon components with names 'data', 'engage', and 'fans', each with mode 'light' and size 48, in a row with a label beneath each."
- "Add the 'platform' icon with mode 'dark' and size 64 on the navy section."

---

### CustomLines

Decorative tapered horizontal or vertical line patterns. Used as section backgrounds or decorative elements.

**Props:**
- `lineNumber` — number of lines (e.g. 6, 8, 12)
- `lineDirection` — `"horizontal"` or `"vertical"`
- `lineClassName` — Tailwind background color class (e.g. `bg-lavenderGrey`, `bg-blue/20`, `bg-brightGreen/40`)
- `initialLineWidth` — width of the widest line in px (lines taper from this value)

---

### LinkGroup

Renders an array of Link objects in a flex row (wraps to column on mobile). Used internally by TextMasthead and TextCard — you'll rarely call it directly, but it's available.

**Props:**
- `links` — array of Link objects (each with type "button" or "text")
- `centered` — centers the group horizontally
- `noFullWidthOnMobile` — prevents buttons going full-width on mobile

---

## COMMON PATTERNS

### Page hero (most landing pages)
```
Section (background: navy, padding: large, has_container)
  └── TextMasthead
        ├── alignment: center, text_size: large
        ├── subheading (DotSubheading, colour: brightGreen)
        ├── heading (with <> line break)
        ├── body content
        ├── Button (background_color: white, type: default)
        ├── TextLink (background_color: white)
        └── add_springs: true, spring_colour: blue
```

### Two-column feature section
```
Section (background: navy or white, padding: large)
  ├── [image or visual — left column]
  └── TextCard (right column)
        ├── subheading
        ├── heading with |highlighted| words
        ├── content
        └── Button (white on navy bg, navy on white bg)
```

### Stats or features row
```
Section (background: lightGrey, padding: medium, has_container)
  └── [grid of stat items]
        Each item: h4 heading + text-15 body text
```

### CTA banner (page footer section)
```
GetStartedCTA
  ├── heading
  ├── content
  └── link (white button)
```
