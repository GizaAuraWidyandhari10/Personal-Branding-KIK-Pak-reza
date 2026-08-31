---
name: Paper & Petals
colors:
  surface: '#fff8f8'
  surface-dim: '#efd3dd'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f4'
  surface-container: '#ffe8ef'
  surface-container-high: '#fde1eb'
  surface-container-highest: '#f8dbe5'
  on-surface: '#27171e'
  on-surface-variant: '#504447'
  inverse-surface: '#3d2b33'
  inverse-on-surface: '#ffecf2'
  outline: '#827377'
  outline-variant: '#d4c2c6'
  surface-tint: '#7f5162'
  primary: '#7f5162'
  on-primary: '#ffffff'
  primary-container: '#e8afc3'
  on-primary-container: '#6b4051'
  inverse-primary: '#f1b7cb'
  secondary: '#715861'
  on-secondary: '#ffffff'
  secondary-container: '#f8d7e2'
  on-secondary-container: '#755c65'
  tertiary: '#815064'
  on-tertiary: '#ffffff'
  tertiary-container: '#ebaec5'
  on-tertiary-container: '#6e3f52'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#f1b7cb'
  on-primary-fixed: '#320f1f'
  on-primary-fixed-variant: '#643a4b'
  secondary-fixed: '#fbdae5'
  secondary-fixed-dim: '#debec9'
  on-secondary-fixed: '#28161e'
  on-secondary-fixed-variant: '#574049'
  tertiary-fixed: '#ffd9e5'
  tertiary-fixed-dim: '#f4b5cc'
  on-tertiary-fixed: '#330e20'
  on-tertiary-fixed-variant: '#66394c'
  background: '#fff8f8'
  on-background: '#27171e'
  surface-variant: '#f8dbe5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style
The design system embodies a modern digital scrapbook aesthetic, blending the high-fashion sophistication of a luxury editorial magazine with the tactile, personal charm of a curated journal. It is designed to evoke feelings of intimacy, creativity, and timeless elegance.

The style leverages **Minimalism** for layout structure—prioritizing heavy whitespace and intentional voids—while incorporating **Tactile** elements like paper textures, ribbon-like accents, and layered compositions. The interface should feel like a physical object that has been thoughtfully assembled, using subtle overlaps and varied image treatment to break the rigid digital grid.

## Colors
The palette is a tonal exploration of rose and cream, creating a low-contrast, soothing environment. 
- **Primary & Secondary:** Used for interactive elements and soft decorative washes.
- **Accent:** Reserved for call-to-actions and emphasized text.
- **Background:** A warm cream that avoids the sterile nature of pure white.
- **Text:** A deep, desaturated rose-grey that provides sufficient contrast while maintaining the feminine softness of the palette.
- **Surface:** Used for cards and inset sections to create subtle depth against the background.

## Typography
The typography system relies on a high-contrast pairing. **Playfair Display** provides the editorial "voice"—use it for large headlines and pull quotes. For the Display-LG tier, use italic styles occasionally to emphasize specific words, mimicking a fashion magazine's lead-in.

**Montserrat** is used for body copy and UI labels. To maintain the elegant feel, body text should be set with generous line heights and tracking. Use the uppercase `label-md` style for navigation and small headers to create a structured, professional hierarchy.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with fixed maximum widths to ensure the editorial compositions don't become overstretched on wide monitors.

- **Desktop:** 12-column grid with wide 64px margins to create a "framed" look.
- **Mobile:** 4-column grid with 20px margins.
- **Rhythm:** Use "stack" units to define vertical rhythm. Large sections should be separated by `stack-lg` (64px) to maintain the airy, premium feel. 
- **Scrapbook Offsets:** Occasionally break the grid by shifting images or text blocks by 24px-48px horizontally to create a layered, "pasted-in" appearance.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than stark physical heights.

- **Soft Shadows:** Use very diffused shadows with a hint of the `tertiary_color_hex` (Dusty Pink) in the shadow color to avoid a "dirty" grey look. Shadows should have a high blur radius (20-40px) and low opacity (8-10%).
- **Layering:** Components should overlap. For example, a small decorative "ribbon" element might sit on the corner of a card, or a caption might slightly overlap an image container.
- **Glassmorphism:** Use subtle backdrop blurs (4-8px) on navigation bars or overlaying labels to suggest translucent vellum paper.

## Shapes
The shape language is predominantly soft and feminine.
- **Standard Cards:** Use a `rounded-xl` (1.5rem / 24px) corner radius to create a friendly, modern container.
- **Interactive Elements:** Buttons and input fields follow the `rounded-lg` (1rem / 16px) pattern.
- **Decorative Frames:** Apply a thin 1px border in `border_color_hex` to images, or use a double-border (a 1px solid line inside a 4px solid line) for a "framed photo" effect.

## Components
- **Buttons:** Primary buttons are pill-shaped with `accent` backgrounds and white text. Secondary buttons use a `surface` background with `neutral` text and no shadow.
- **Cards:** Cards should have a `surface` color background, `rounded-xl` corners, and a soft ambient shadow. Use internal padding of 32px for an editorial feel.
- **Inputs:** Text fields are underlined or have very soft `surface` fills. Use `label-md` typography for field labels, placed consistently above the input.
- **Chips:** Small, pill-shaped tags used for categories. Use `secondary_color_hex` with `neutral` text.
- **Scrapbook Elements:** 
    - *The Ribbon:* A small horizontal bar of `primary_color_hex` used as a section divider or top-accent on a card.
    - *The Dotted Pattern:* A 4x4 or 8x8 grid of small dots in `tertiary_color_hex` used as a background texture behind images.
    - *Editorial Lists:* List items should be separated by thin, light grey horizontal lines with generous vertical padding (16px-24px).