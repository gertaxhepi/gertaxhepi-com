# Remove the homepage grid

## Scope
- Remove the decorative homepage background grid, including its pseudo-element, gradients, masks, and dark-mode variant.
- Remove the empty decorative cells from the homepage markup so they no longer reserve space.
- Remove all borders and dividing lines around or between the homepage hero, Projects, Resume, and Writing areas.
- Preserve the existing two-column desktop arrangement, mobile stacking, content, typography, spacing, colors, links, hover behavior, header, footer, and dark mode.
- Leave every other page unchanged.

## Implementation details
- Update only the homepage markup and homepage-specific styles.
- Keep the left content vertically positioned using the existing layout dimensions without rendering empty grid cells.
- Retain the existing desktop and mobile breakpoints, including the Safari 15 plain-CSS fallbacks, while removing selectors tied only to the deleted decorative grid.

## Verification
- Check desktop and mobile screenshots in the live preview.
- Compare homepage height before and after, and confirm the footer does not overlap content.
- Confirm light mode is a continuous warm off-white surface and dark mode retains its current solid background.
