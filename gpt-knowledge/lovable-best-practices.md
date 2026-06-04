# Lovable Best Practices: Prompting & General Usage

A comprehensive reference for getting the best results from Lovable — covering how to write effective prompts, how to structure your build process, and how to avoid common pitfalls.

---

## 1. Before You Prompt: Lay the Foundation

### Plan before you start
Define what you're building before touching Lovable. Answer these four questions first:
- What is this product or feature?
- Who is it for?
- Why will they use it?
- What is the one key action the user should take?

Vague thinking produces vague outputs. Clear direction leads to clear results.

### Use the Knowledge file
The Knowledge file is your project's brain — it gets sent with every prompt. Include:
- Your product vision (treat it like a lightweight PRD)
- User journeys
- Design system details (colors, fonts, spacing)
- Role-specific behaviors (e.g. what admins see vs. standard users)

The more context it contains, the less you need to repeat in each prompt.

### Map the user journey visually
Before building screens, map the path from landing to key action. Even a simple three-step sketch (Hero → Features → CTA) makes prompts 10× more effective. Every section should have a reason to exist and a reason to lead to the next one.

### Get the design direction right first
Decide your visual language early — don't fix it later. Choose a direction and commit:
- Calm and elegant
- Bold and disruptive
- Premium and sleek

Feed that style into your prompts using buzzwords, tone descriptors, and UI patterns. Create a "starter style prompt" and reuse it across sections for consistency.

---

## 2. Writing Effective Prompts

### Be specific about location and behavior
Don't write vague requests. Mention the exact page (e.g. `/dashboard`) and exactly what should happen. Include screenshots when reporting visual bugs.

> **Good:** "On the /dashboard page, when the user clicks 'Export', show a modal with a dropdown for format selection (CSV or PDF) and a confirm button."
>
> **Vague:** "Add an export feature."

### Use natural language — but be precise
Clear, verbose prompts produce better output. Say exactly what you want to change and what should stay the same. Use directional words: "replace," "update," "adjust" — not "make this better."

### Make Lovable ask clarifying questions
For complex features, end your prompt with:

> "Ask me any questions you need in order to fully understand what I want from this feature and how I envision it."

Use Plan mode for this. Lovable will surface follow-up questions that clarify requirements up front and prevent wasted effort.

### Set guardrails
Tell Lovable what *not* to touch. This prevents unintended changes to working code.

> "Update only the hero section. Do not modify the navigation or footer."

### Use design buzzwords to define aesthetic
Lovable understands terms like "minimal," "expressive," "cinematic," "playful," "premium," and "developer-focused." These influence typography, spacing, shadows, border radius, and color palette. Use them early and consistently.

> **Example:** "Design a landing page hero that feels premium and cinematic. Use layered depth, translucent surfaces, soft motion blur, and dramatic contrast between headline and background."

### Use real content, not placeholders
Avoid "lorem ipsum" or "Feature 1." Use copy that reflects your actual message. Real content creates real constraints — it reveals layout issues early and helps Lovable generate better spacing and structure.

> **Example:** Hero section with headline: "Design Calmly." Subtext: "Turn stress into structure with Lovable." CTA: "Start Building Free."

---

## 3. Build Process: Think in Systems

### Prompt by component, not by full page
Build your UI in modular parts — not whole pages at once. Asking for an entire landing page in one prompt produces noise, not signal. Treat it like Lego bricks: one hero section, one feature grid, one pricing table. Build, review, refine, then move on.

If something doesn't look right, you fix just that block — not the whole page.

### Speak atomically: use UI vocabulary
Describe specific UI elements rather than vague interfaces. Use the vocabulary of components: buttons, cards, modals, badges, toggles, chips, form fields, dropdowns, toasts.

> **Good:** "A modal with a success toast after submit."
>
> **Vague:** "A user interface for signing up."

### Use repeatable prompt patterns
Build a personal library of layout recipes. A good layout prompt breaks a section into visual parts, clarifies their order, and defines how they're styled. Most follow a "header → content → action" structure.

> **Example pattern:** "Create a feature section with a centered headline, followed by three horizontally aligned cards. Each card includes an icon on top, a headline, and a short description. Cards should have soft shadows and lift on hover."

### When prompting role-based systems
Always specify which user type a change applies to. Leaving this ambiguous causes logic conflicts between roles.

---

## 4. Plan Mode

### What it's for
Plan mode is an AI co-pilot for debugging and architecture. It lets Lovable analyze and propose solutions *without writing code*. Use it to:
- Debug complex issues
- Brainstorm and design features before implementing
- Validate your approach before committing to changes

Use phrases like "Investigate but don't write code yet" to keep control.

### When to switch to Plan mode
- After 2–3 failed "Try to Fix" attempts
- When handling complex logic or multi-step features
- Before starting any significant new feature
- When stuck in a recursive bug cycle

Many experienced Lovable users spend 60–70% of their time in Plan mode before implementing anything.

---

## 5. Version Control & Iteration

### Recommended build sequence
Follow this order to avoid instability:
1. Layout and pages
2. Database connection
3. Authentication setup
4. Feature planning
5. Feature implementation

Connect your database only after the frontend is stable.

### Pin stable versions
After each successfully working feature, pin that version in GitHub. This gives you a reliable rollback point. Compare versions when bugs emerge to isolate what changed.

### Think in milestones, not autosave
Lovable autosaves — but that doesn't mean your process is organized. Adopt your own system:
- Think in milestones: layout locked → content added → logic wired
- Add notes in prompts: "Changed CTA text and adjusted card spacing"
- Duplicate the project before risky changes

### Use Visual Edit for cosmetic changes
The Visual Edit tool handles quick UI adjustments (colors, layout tweaks) without consuming credits. Use it for surface-level changes rather than prompting the AI.

---

## 6. Debugging

### Start with "Try to Fix"
When errors occur, click "Try to Fix" first. Lovable will scan logs, detect the issue, and attempt a quick fix.

### Be surgical, not broad
When debugging, focus exclusively on the relevant code sections. Don't make sweeping changes — you'll introduce new bugs while fixing old ones.

### Investigate root causes, not symptoms
Take a step back and examine the problem from multiple angles before proposing solutions. Ask Lovable to explain the root cause, not just apply a patch.

### Use Plan mode for debugging
Switch to Plan mode to analyze without touching code. Document what's been attempted. If standard fixes fail, ask for alternative approaches.

### Rollback strategically
If you've tried multiple failed fixes, don't keep layering patches. Revert to the last stable version and rebuild incrementally from there.

### Common issues and first steps

| Problem | First step |
|---|---|
| White preview screen | Check `vite.config.ts`, review browser console logs |
| Preview not loading | Hard refresh; check for GitHub sync issues |
| Edge function errors | Check Cloud tab logs; verify environment variables |
| UI/layout problems | Screenshot the issue and use the Edit tool |
| Unexpected behavior (no error) | Revert to stable point, re-prompt with clearer instructions |

---

## 7. Database (Supabase) Considerations

- **Connect the database after the frontend is stable.** Building frontend and backend simultaneously increases the risk of broken state.
- **Supabase does not revert cleanly.** If you revert a version, your database schema may not revert with it. Schema changes can persist even after reverting code.
- **Validate schemas when reverting.** Ask the AI to check schema integrity and confirm no breaking changes occurred before proceeding.
- **Design your UI for real data states:** empty states, loading states, and error states — not just the happy path.

---

## 8. Recovery: When Things Go Wrong

If you're stuck in a recursive bug cycle with no clear exit:
- Try remixing the project — this creates a clean copy while preserving history
- This is especially useful after a Supabase disconnection or a series of failed fixes
- A remix is often faster than continued debugging when the project state is fundamentally broken

---

## 9. Quick Reference: Prompt Do's and Don'ts

| Do | Don't |
|---|---|
| Name the specific page or component | Describe things vaguely ("add a nice section") |
| Include what should NOT change | Assume Lovable knows what's off-limits |
| Use real copy and content | Use "lorem ipsum" or placeholder labels |
| Break work into one component at a time | Prompt for an entire page at once |
| Use Plan mode before complex changes | Jump straight to implementation for hard problems |
| Pin versions after stable milestones | Rely on autosave as your only safety net |
| Use design buzzwords to define style | Leave aesthetic direction unspecified |
| Ask Lovable to ask clarifying questions | Assume your first prompt covers everything |
