# Genius Sports Brand Kit — Design Rules & Conventions
## Knowledge source for the GS Lovable Prompt Assistant

---

## FONT RULES

### Two font families
- **KlarheitKurrent** (`font-heading`) — headings, buttons, UI, all display text
- **Red Hat Text** (`font-body`) — body copy, paragraphs, captions, labels

### Critical rule: font inheritance
The page `html` element defaults to `font-heading` (KlarheitKurrent). This is intentional — buttons and headings inherit it automatically.

**Do NOT** add `font-body` to the `body` element. It breaks button font inheritance.

**Do** add `font-body` explicitly to paragraphs, captions, and labels.

### Heading weight
Headings look best at `font-light` for display/editorial contexts. Use `font-medium` or `font-semibold` for more compact or emphasis contexts (e.g. card labels, stats).

---

## COLOR RULES

### Background → text color pairing
The Section component handles this automatically when you set `background_color`. But when writing custom HTML, follow these rules:

**Dark backgrounds (use white text):**
- `bg-navy` → `text-white`
- `bg-blue` → `text-white`
- `bg-green` → `text-white`
- `bg-purple` → `text-white`
- `bg-red` → `text-white`
- `bg-black` → `text-white`

**Light backgrounds (use navy text):**
- `bg-white` → `text-navy`
- `bg-snow` → `text-navy`
- `bg-lightGrey` → `text-navy`
- `bg-brightGreen` → `text-navy`
- `bg-lightBlue` → `text-navy`
- `bg-lightPurple` → `text-navy`
- `bg-lightOrange` → `text-navy`
- `bg-lightGreen` → `text-navy`
- `bg-lightRed` → `text-navy`

### Choosing button color by background
| Section background | Button background_color to use |
|--------------------|-------------------------------|
| navy               | white                          |
| blue               | white                          |
| white              | navy                           |
| lightGrey          | navy                           |
| brightGreen        | navy                           |
| Any other light    | navy                           |

### Choosing TextLink color by background
| Section background | text_link.background_color |
|--------------------|-----------------------------|
| dark (navy, blue)  | "white"                     |
| light (everything else) | "navy"               |

---

## HEADING HIGHLIGHT RULES

### Pipe syntax
Wrap words in `|vertical pipes|` to color them in a heading:
- Input: `"The data behind |modern sport|"`
- Output: "The data behind" in default color, "modern sport" in the highlight color

### Color pairs that work well
| Background | Highlight color | Visual effect |
|------------|-----------------|---------------|
| navy       | brightGreen     | High contrast, energetic |
| navy       | lightBlue       | Soft, premium feel |
| white      | blue            | On-brand, clean |
| white      | orange          | Warm, sporty |
| white      | lightGreen      | Fresh, active |
| lightGrey  | blue            | Subtle highlight |

### Important: text color on dark backgrounds
When `HighlightedText` is used on a dark background, the non-highlighted words inherit color from the parent. The parent element **must** have `text-white` set explicitly, or the non-highlighted text will be invisible (black on black).

---

## BUTTON RULES

### Width behavior
The Button component's outer container has no intrinsic width — it stretches to fill its parent by default.

When you want a naturally-sized pill button (not full-width), wrap in `w-fit`:
```html
<div class="w-fit">
  <Button ... />
</div>
```

### When to use each type
| Button type | Use case |
|-------------|----------|
| default     | Primary CTAs, main page actions |
| slim        | Secondary inline actions, inside cards |
| header      | Navigation bar CTAs (smaller size) |
| outline     | Ghost/tertiary actions, "see all" links |

---

## SECTION BACKGROUND RULES

### Most used backgrounds
- `white` — default, clean and open
- `snow` — slightly warmer off-white
- `lightGrey` — soft grey, great for stats rows, alternating sections
- `navy` — hero sections, dark feature callouts
- `blue` — brand highlight sections, CTA banners (alternative to GetStartedCTA)
- `brightGreen` — very high emphasis, use sparingly (1 section per page max)

### Avoid
- Using `lightGrey` as a section background when it also contains a `DotSubheading` — the pill badge has a `bg-lightGrey` background and will become invisible.

---

## LOGO RULES

### Which variant to use
| Placement | Variant | Why |
|-----------|---------|-----|
| Navigation header | horizontal | Standard brand lockup |
| Small logo mark / favicon-style | marque | Just the G mark |
| Footer with stacked layout | vertical | Icon above text |
| Text-only brand mention | wordmark | Just "Genius Sports" text |

### Which color to use
| Background | Logo color |
|------------|------------|
| White, light grey, any light | blue |
| Navy, dark blue, black | white |

---

## BRAND ICON RULES

### Which mode to use
| Background | Mode |
|------------|------|
| White, light grey, any light | light (navy icons) |
| Navy, blue, any dark | dark (white icons) |

### Using icons effectively
- Use icons at consistent sizes within a group (48px or 64px are most common)
- Always pair icons with a label below
- Use in sets of 3 or 4 in a feature row
- Don't mix light and dark mode icons in the same row

---

## SPACING / PADDING GUIDE

The Section component uses named padding tokens. Rough guide for choosing:

| Context | Suggested padding |
|---------|-------------------|
| Hero section | large or xLarge |
| Standard content section | medium |
| Compact row (stats, logos) | small or xSmall |
| Full-page background section | huge or max |
| Nested inner padding | tiny or min |

---

## LINE BREAK IN HEADINGS

Use `<>` inside any heading string to create a responsive line break:
- The break is **invisible on mobile** (text wraps naturally)
- The break **activates at medium screen width (768px+)**

Best used in 2–3 word phrases where a specific break point improves readability:
- `"The data and technology<> behind modern sport"` → breaks before "behind" on desktop
- `"Official data.<> Real-time delivery."` → keeps each phrase on its own line

---

## SPRING DECORATIONS

The `TextMasthead` component supports decorative "spring" elements — stacks of tapered lines that appear on both sides of the hero content block. To add them:
- Set `add_springs: true`
- Set `spring_colour: { colours: "colorName" }` — typically `"blue"` on navy, or `"navy"` on white

Springs work best on centered hero mastheads. They look odd on left-aligned mastheads.

---

## GOTCHAS & COMMON MISTAKES

1. **Button is full width** — it stretches to fill its container. Wrap in `w-fit` for natural pill sizing.

2. **Highlighted text invisible on dark section** — parent must have `text-white`. If you put HighlightedText inside a navy section and the non-highlighted words are invisible, add `text-white` to the parent element.

3. **DotSubheading vanishes on lightGrey section** — the pill always uses `bg-lightGrey`, so it blends into a lightGrey section background. Use a different section color, or use a plain text label instead.

4. **Wrong font on body text** — never add `font-body` to the `body` element. Only apply it to specific `<p>`, `<span>`, or `<label>` elements.

5. **Wrong logo color** — blue logo on a dark background will be nearly invisible. Always use white on dark, blue on light.

6. **Wrong icon mode** — using `mode="light"` (navy) on a dark background makes the icon invisible. Use `mode="dark"` (white) on dark sections.

7. **Unrecognised color in Section** — if a color name isn't one of the 17 named tokens, the Section falls back to a generic class with no text color pairing. Always use a named token.
