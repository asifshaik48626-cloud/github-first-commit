---
name: Lumina Git
colors:
  surface: '#0e1323'
  surface-dim: '#0e1323'
  surface-bright: '#34394a'
  surface-container-lowest: '#080d1d'
  surface-container-low: '#161b2b'
  surface-container: '#1a1f30'
  surface-container-high: '#25293a'
  surface-container-highest: '#2f3446'
  on-surface: '#dee1f9'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dee1f9'
  inverse-on-surface: '#2b3041'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0e1323'
  on-background: '#dee1f9'
  surface-variant: '#2f3446'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 2rem
  card-gap: 1.5rem
  section-margin: 4rem
  max-width: 1200px
---

## Brand & Style
The brand personality is high-performance, futuristic, and sophisticated. Designed for developers and open-source enthusiasts, the design system evokes the feeling of a high-end command center or a specialized observation deck. 

The aesthetic is a fusion of **Glassmorphism** and **Soft 3D**, heavily inspired by the refined execution seen in Apple and Vercel interfaces. We prioritize deep visual depth through the use of translucent layers, background blurs, and "glowing" ambient light sources that suggest life beneath the surface. The interface should feel like a premium tool—precise, lightweight, and atmospheric.

## Colors
The palette is rooted in a deep-space navy (`#0B1020`) which serves as the canvas for high-energy accents. 
- **Primary Electric Blue** is used for critical actions and navigational focus.
- **Secondary Purple** and **Accent Cyan** are used to create gradients that simulate light refraction within the glass panels.
- **Glass Surfaces** utilize low-opacity white with heavy backdrop blurs (20px+) to maintain legibility while preserving the futuristic depth.
- **Ambient Glows**: Use large, low-opacity radial gradients of the Primary and Secondary colors in the background to break the monotony of the dark canvas.

## Typography
We use **Geist** for its technical precision and modern feel. It offers the clean, "developer-first" look necessary for a GitHub-centric tool. For data-heavy elements, hashes, and commit IDs, we utilize **JetBrains Mono** to provide a distinct functional contrast.

- **Headlines**: Use tight letter-spacing and high weights to create a "machined" look.
- **Body**: Maintain generous line-height for readability against the dark, blurred backgrounds.
- **Labels**: Always monospaced to emphasize the technical nature of the data.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain the "floating card" aesthetic. Content should be centered within a 1200px container.

- **Floating Cards**: Primary content is housed in large glass panels with 24px internal padding.
- **Grid Patterns**: A subtle 32px square grid should be visible in the background, reinforcing the "system" feel.
- **Responsive Flow**: On mobile, containers switch to a fluid 100% width with 16px horizontal margins. The 3D depth is flattened slightly to prioritize vertical scrolling and touch targets.

## Elevation & Depth
Depth is the core differentiator of this design system. We do not use standard drop shadows; instead, we use **Ambient Glows** and **Inner Stroke Highlighting**.

1.  **Level 0 (Background):** Deep navy with a subtle grid overlay.
2.  **Level 1 (Surface):** 10% white opacity, 20px backdrop-blur, 1px border (`rgba(255,255,255,0.1)`).
3.  **Level 2 (Active/Hover):** 15% white opacity, 1px border (`rgba(255,255,255,0.2)`), and a soft primary-color outer glow (20px blur, 10% opacity).
4.  **Level 3 (Popovers/Modals):** High-blur background with a distinct 2px gradient border (Primary to Secondary).

Use "light-leak" effects—linear gradients at 45 degrees on the borders of cards—to simulate a light source coming from the top-left.

## Shapes
The design system uses a pronounced **Rounded** language. All primary containers and cards feature a **24px (1.5rem)** corner radius to soften the technical nature of the app and align with modern OS aesthetics.

- **Buttons & Inputs**: 12px (0.75rem) radius.
- **Chips/Badges**: Fully pill-shaped (999px).
- **Cards**: 24px (1.5rem).
- **Focus Rings**: 4px offset from the element with a 2px thickness.

## Components
- **Buttons**: Primary buttons are solid Electric Blue with a subtle inner-top white highlight. Secondary buttons are glass-based with white text.
- **Input Fields**: Darker than the background (`#050810`), with a 1px glass border. On focus, the border transitions to a Primary-to-Secondary gradient.
- **Cards (Commit Panels)**: Feature a "Glass-Skeuomorphic" look. A subtle 1px border on the top and left should be lighter than the bottom and right to simulate light catch.
- **Progress Indicators**: Use thin, glowing lines with "scanning" animations for loading states.
- **Commit Nodes**: Small, circular glowing points connected by 1px faint lines, mimicking a git graph but with a "neon circuit" aesthetic.
- **Chips**: Small, monospaced labels with low-opacity backgrounds (e.g., 10% Cyan for tags).