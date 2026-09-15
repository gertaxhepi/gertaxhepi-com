# Homepage Editorial Grid Redesign

## Scope
Redesign only the homepage content between the existing header and footer. Preserve every existing word, link, icon, font, color token, dark-mode behavior, and interaction destination.

## Implementation
- Replace the homepage’s current two-column content wrapper with one square-cornered, thin-bordered editorial grid.
- At 1024px and above, divide the grid approximately 50/50:
  - Left: an empty architectural row, the dominant hero block, then another empty architectural row.
  - Right: three equal linked rows for Projects, Resume, and Writing.
- Divide each linked row into number, title, description/CTA, and arrow cells with subtle internal rules and vertically centered content.
- Keep each full row clickable; retain the existing restrained tint and diagonal arrow movement on hover without shifting text.
- Below 1024px, remove the empty cells and stack the hero plus three linked sections as large bordered blocks.
- Below 768px, keep the existing mobile navigation and arrange each linked block without horizontal overflow.
- Remove only the homepage’s graph-paper pseudo-background. Do not change shared colors, typography, header, footer, or any other page.

## Browser compatibility
- Use dedicated homepage class names with standard CSS Grid and standard `min-width` media queries.
- Keep the existing Safari 15 navigation fallback and replace the homepage layout fallback with selectors matching the new grid.
- Avoid masks, gradients, container queries, and Tailwind-responsive layout dependence for this homepage structure.

## Verification before completion
- Check the live homepage at desktop (1280px) and mobile (390px) sizes.
- Capture and inspect both previews before reporting completion.
- Confirm no horizontal overflow, no footer overlap, intact links, and unchanged header/footer behavior.
