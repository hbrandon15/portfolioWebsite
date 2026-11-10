# Zone System: bhdz.dev design system

The visual style for **bhdz.dev**. Approved November 2026 (issue #103).
Follow this for all new pages and components. Change it on purpose, by updating this document, never ad hoc.

Preview: https://claude.ai/artifact/QUdpxyFuyDhaMza3H4SQ8y

## Idea

The site belongs to one person who is both an **imaging engineer** and a **working photographer**. The design reflects that:

- **Neutral, like a gallery wall.** Cool grays let the photos supply the color.
- **Named after photography's tools.** The grays follow Ansel Adams' Zone System (0 = black, X = paper white). The one accent comes from the ColorChecker calibration chart used in camera testing.
- **Engineering in the details.** Technical information (camera settings, tags, dates) is set in a monospace face.

## Typography

One family, **IBM Plex**, in three styles. Don't add other font families.

| Role | Font | Weights | Use for |
|---|---|---|---|
| Display | IBM Plex Sans Condensed | 500, 600 | Headings, the name, nav brand. Often uppercase. |
| Body | IBM Plex Sans | 400, 500, 600 | Paragraphs, buttons, navigation, everything else |
| Technical | IBM Plex Mono | 400, 500 | Camera settings (EXIF), tags, dates, small labels |

Rules:
- Use only the weights listed, to keep downloads small.
- Uppercase labels get a little letter spacing (`tracking-wider`).
- Keep paragraphs about 65 characters wide (`max-w-prose` or `max-w-[65ch]`).
- Headings use `text-balance` so lines break evenly.

## Color

### Light theme (default)

| Token | Hex | Zone / source | Use for |
|---|---|---|---|
| `ink` | `#14161b` | Zone 0 | Headings, body text, dark buttons |
| `graphite` | `#3a3e48` | Zone III | Secondary text, dark button hover |
| `muted` | `#6b707b` | Zone IV | Captions, metadata, labels |
| `line` | `#dcdfe5` | — | Borders and dividers |
| `paper` | `#f5f6f8` | Zone IX | Page background |
| `surface` | `#ffffff` | Zone X | Cards, header, raised areas |
| `accent` | `#505ba6` | ColorChecker patch 8 (purplish blue) | Links and keyboard focus **only** |

Contrast on `paper`: ink ≈ 16.7:1, graphite ≈ 9.9:1, muted ≈ 4.6:1, accent ≈ 5.7:1. All pass WCAG AA for normal text.

### Dark theme (for #112)

| Token | Hex |
|---|---|
| `ink` | `#e8eaee` |
| `graphite` | `#c3c7cf` |
| `muted` | `#9aa0ab` |
| `line` | `#2c3038` |
| `paper` | `#111318` |
| `surface` | `#1a1d23` |
| `accent` | `#8f99d6` |

Text that sits **on top of** an `ink` background (dark buttons) uses `surface` in light mode and `paper` in dark mode.

### Color rules
- The accent is used sparingly: links, focus outlines, small highlights. Never for large backgrounds.
- Don't add new colors without updating this document. If something needs a new shade, check whether an existing token works first.
- Text over photos is always white (`#ffffff`) or `ink` on a white button, with a dark overlay on the photo if needed for contrast.

## Tailwind setup

These tokens live in `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --color-ink: #14161b;
  --color-graphite: #3a3e48;
  --color-muted: #6b707b;
  --color-line: #dcdfe5;
  --color-paper: #f5f6f8;
  --color-surface: #ffffff;
  --color-accent: #505ba6;
}
```

That creates classes such as `font-display`, `font-mono`, `bg-paper`, `bg-surface`, `text-ink`, `text-muted`, `border-line` and `text-accent`. Use these instead of Tailwind's built-in colors (`neutral-900`, `blue-600`, etc.) so the whole site stays consistent and dark mode works from one place.

Fonts: load from Google Fonts at first; self-host them later (Fontsource) as part of #105.

## Components

Shared building blocks live in `src/components/`. Use them instead of repeating Tailwind classes.

| Component | Props | Notes |
|---|---|---|
| `Button.astro` | `href`, `variant` (`dark` / `light` / `outline`), `size` (`md` / `lg`) | `light` is for buttons over photos. Extra attributes (`target`, `rel`) pass through. |

Conventions:
- **Corners:** `rounded-md` (6px) for buttons and cards, `rounded` (4px) for small tags and photos. Avoid larger radii.
- **Cards:** `bg-surface`, `border border-line`, no heavy shadows.
- **Focus:** every interactive element shows a visible `focus-visible` outline.
- **Motion:** short color transitions only, and respect `prefers-reduced-motion`.
- **Tags:** `font-mono text-xs` with a `border-line` border.
- **Photo captions:** `font-mono text-xs text-muted`, e.g. `35mm · f/1.8 · 1/250s · ISO 200`.

Add a row to the table above whenever a new shared component is created.

## Changing the system

1. Discuss the change and why.
2. Update this document and `global.css` in the same pull request.
3. Check contrast for any new or changed color.
