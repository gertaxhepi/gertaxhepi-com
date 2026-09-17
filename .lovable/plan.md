# Redesign the Work project index

## Scope
- Replace the current company-grouped Work layout with one five-row editorial project list.
- Keep the existing page heading, global header, navigation, theme toggle, footer, routes, and case-study pages unchanged.
- Use the supplied titles, contexts, outcomes, numbering, and order exactly.

## Layout and interaction
- Desktop: consistent four-column rows for number, project/context, outcome, and arrow.
- Tablet/mobile: collapse each row into a compact readable layout without horizontal scrolling.
- Add thin dividers, square edges, subtle dusty-rose row hover, arrow movement, and visible keyboard focus.
- Use page-scoped standard CSS Grid and media queries compatible with Safari 15.6.1.

## Verification
- Check desktop, tablet, and mobile in light and dark modes.
- Confirm all five complete rows are clickable and retain their current case-study destinations.
- Confirm no horizontal overflow and no changes outside the Work index presentation.
