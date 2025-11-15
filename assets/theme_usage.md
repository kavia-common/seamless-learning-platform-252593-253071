# Theme Usage — LMS Frontend

This app uses CSS variable tokens defined in `src/styles/theme.css`. Use these tokens to style components consistently without introducing new dependencies or changing build scripts.

Tokens (examples)
- Colors: var(--text-primary), var(--text-secondary), var(--accent-cyan), var(--accent-magenta), var(--border)
- Radii: var(--radius-md), var(--radius-lg), var(--radius-pill)
- Shadows/Glows: var(--shadow-sm), var(--shadow-md), var(--glow-cyan)
- Gradients: var(--gradient-hero), var(--gradient-cta)
- Typography: var(--font-sans), var(--fs-6xl), var(--ls-tightish)
- Spacing: var(--sp-4), var(--sp-6), var(--sp-10)

How to use
- In JSX, apply existing utility classes such as `btn`, `btn-primary`, `btn-outline`, `card`, `container`, `surface`, `section-title`.
- For custom components, set CSS using the variables, for example:
  .badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); border-radius: var(--radius-pill); color: var(--text-secondary); padding: 6px 10px; }

Primitives provided
- Button: variants "primary" (filled gradient), "outline" (glass), and "ghost"
- Input, Select: themed form controls with accessible focus states
- Card: surface panel with border, radius, and shadow
- Navbar/Header: logo/title area, nav links, and outline CTA
- Hero: gradient background with darker left overlay for readability and decorative blobs

Global guidance
- The canvas background uses `--gradient-hero`. Body text uses `--text-primary`; secondary text uses `--text-secondary`.
- Keep contrast accessible. Prefer dark surfaces for text-heavy content. The `.hero__overlay-left` ensures readability over the gradient.
- Respect motion preferences; avoid heavy animations.

Environment variables
- No secrets are hardcoded. Keep using existing `REACT_APP_*` env vars where needed for data APIs.
