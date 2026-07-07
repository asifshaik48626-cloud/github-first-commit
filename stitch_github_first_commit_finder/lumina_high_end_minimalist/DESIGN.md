---
name: Lumina High-End Minimalist
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424754'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#4d5d73'
  on-tertiary: '#ffffff'
  tertiary-container: '#66768d'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The design system is defined by an atmosphere of extreme clarity, precision, and high-end technical sophistication. It targets professional users who value efficiency and aesthetic purity. By blending the structured utilitarianism of developer-centric tools with the polished, consumer-facing elegance of premium hardware brands, the UI evokes a sense of weightlessness and future-forward reliability.

The core aesthetic is **Technical Minimalism** with a **Glassmorphic** layer. It utilizes expansive whitespace (negative space) as a structural element rather than a void. Visual interest is generated not through heavy color or ornamentation, but through subtle transitions of light, high-quality typography, and the interaction of translucent surfaces. The emotional response should be one of calm focus, "airy" openness, and uncompromising quality.

## Colors

The palette is intentionally restrained to maintain a "white-themed" purity. 

- **Primary:** The "Electric Blue" (#3B82F6) is used sparingly for high-intent actions, progress indicators, and active states. It should feel like a surgical strike of color against a monochromatic canvas.
- **Backgrounds:** The base layer is pure `#FFFFFF`. For subtle grouping or to distinguish secondary content, use `#F9FAFB`.
- **Grayscale:** Use a deep black (#000000) for primary headings to ensure maximum contrast, and a slate gray (#64748B) for secondary text and icons.
- **Glassmorphism:** Surface containers use a white-tinted translucency (`rgba(255, 255, 255, 0.7)`) paired with a high backdrop-blur (20px to 40px) to create depth without introducing heavy shadows.

## Typography

The typography system relies on **Geist** for its mathematical precision and neutral, "developer-grade" clarity. 

- **Weight Strategy:** Use Bold/SemiBold for headings to create strong hierarchy against the light background. Regular weight is reserved for body copy to maintain legibility.
- **Kerning:** For large display text, negative letter-spacing (-0.02em to -0.04em) is required to achieve the "premium" editorial look.
- **Monospace:** Use JetBrains Mono for data points, IDs, or technical snippets to reinforce the futuristic, systematic nature of the design system.

## Layout & Spacing

The layout philosophy follows a **strict 4px grid system** within a fluid-width container. 

- **Grid:** Use a 12-column grid for desktop with 24px gutters. For tablet, move to 8 columns, and for mobile, a 4-column layout.
- **Airy Composition:** Emphasize vertical rhythm by using large section gaps (80px+). Components should have generous internal padding to avoid a "cramped" feel.
- **Alignment:** Content should predominantly align to the left for a structured, document-like feel, reminiscent of technical documentation and high-end landing pages.

## Elevation & Depth

Depth is achieved through **optical layering** rather than traditional drop shadows.

- **The Glass Layer:** Elevated elements (cards, modals, navigation bars) must use a `backdrop-filter: blur(20px)` and a background color of `rgba(255, 255, 255, 0.7)`. 
- **The Border Constraint:** Instead of heavy shadows, use a 1px "ghost border" with a hex value of `rgba(0, 0, 0, 0.08)`. For high-priority floating elements, add a very soft, diffused shadow: `0 8px 32px rgba(0, 0, 0, 0.04)`.
- **Z-Index Hierarchy:** 
  1. Base: Pure White.
  2. Content: White with 1px border.
  3. Overlays/Modals: Glassmorphic blur + soft shadow.

## Shapes

The shape language is "Soft-Modern." Elements use a subtle corner radius to feel approachable while maintaining a crisp, architectural edge.

- **Small elements (Buttons, Inputs):** 0.25rem (4px).
- **Medium elements (Cards, Modals):** 0.5rem (8px).
- **Large elements (Outer Containers):** 0.75rem (12px).
- **Interactive States:** Avoid "pill" shapes unless used for tags/chips; rectangular shapes with subtle rounding feel more professional and aligned with the Vercel-inspired aesthetic.

## Components

- **Buttons:** 
  - *Primary:* Solid Electric Blue with white text. No gradient. 
  - *Secondary:* Pure white with 1px border (`#E2E8F0`) and black text.
  - *Ghost:* No background or border, transitions to a very light grey (`#F1F5F9`) on hover.
- **Input Fields:** Use a 1px light border. On focus, the border transitions to the Primary Electric Blue with a subtle 2px outer glow of the same color at 10% opacity.
- **Cards:** White glass panels. No background color on the card itself (rely on the backdrop blur and the 1px border). Hover states should slightly increase the border opacity rather than lifting the card.
- **Chips/Tags:** Use a neutral background (`#F1F5F9`) with `label-sm` typography. 
- **Navigation:** A fixed top-bar with `backdrop-filter: blur(20px)` and a single 1px bottom-border. Links should use `body-md` weight, transitioning from Slate to Black on hover.
- **Dividers:** Use 1px lines with `#F1F5F9`. They should never be pure black; they must be almost invisible.