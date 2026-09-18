# Compact next-project navigation

## Build
- Replace the shared end-of-case-study CTA with one compact `NextProjectNavigation` component.
- Encode the approved five-project loop, titles, routes, companies, and dates in one shared mapping.
- Pass the current project slug from each case-study route so every page resolves its next project dynamically.
- Keep the opening breadcrumbs and all case-study content unchanged.

## Presentation and interaction
- Add a single divider, dusty-rose label, large responsive title, muted monospaced metadata, far-right northeast arrow, and a tertiary “← All projects” link.
- Make the full next-project row clickable with restrained arrow motion, visible keyboard focus, dark-mode styling, reduced-motion support, and mobile-safe wrapping.
- Remove the oversized spacing, color-changing hover treatment, and old “Back to Work / All projects” block.

## Verification
- Check all five routes follow the required circular sequence.
- Verify desktop and mobile layouts in light and dark modes, including focus, hover, and horizontal overflow.
- Run the project checks after implementation.
