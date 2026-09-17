# Redesign the homepage introduction

## Scope
- Replace only the homepage’s current two-column hero and Projects/Resume/Writing blocks with the approved single-column introduction.
- Keep the existing header, mobile navigation, theme toggle, compact homepage footer, social links, dark mode, routes, and all other pages unchanged.
- Use the exact eyebrow, headline, and “View selected work ↗” label from the approved brief.

## Implementation
- Build a Safari 15-safe single-column homepage layout that fills the space between the fixed-height header and existing footer without overlap.
- Add a thin semantic divider below the dusty-rose eyebrow and constrain the headline width for balanced wrapping across desktop, tablet, and mobile.
- Reuse the shared resume-download button’s visual foundation through a shared button style, while keeping the homepage action as a normal link to `/work` with a diagonally animated arrow.
- Apply a short, one-time staggered entrance to the eyebrow, headline, and action; disable movement under reduced-motion preferences.
- Remove homepage-only editorial grid markup and obsolete homepage grid styles without affecting any other page.

## Verification
- Check light and dark mode at desktop, tablet, and mobile sizes in the live preview.
- Confirm the button reaches the existing Work page, the mobile menu remains intact, and there is no horizontal overflow.
- Confirm headline/footer clearance at common desktop heights and natural scrolling on shorter mobile screens.
