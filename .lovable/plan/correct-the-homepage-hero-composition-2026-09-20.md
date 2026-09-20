# Correct the homepage hero composition

## Scope
- Rebuild only the homepage structure and hero spacing to match the supplied reference.
- Preserve the header, primary button styling, footer content, typography, colors, dark mode, and all other pages.
- Replace the sticky-note copy and destination with the supplied PeakProfile content and case-study link.

## Implementation
- Remove the current homepage hero sizing and positioning rules, then establish a viewport-height page with header, flexible middle area, and footer.
- Use one explicit two-column desktop grid: a headline/button column and a 320–370px note column, with a 32–56px gap and centered alignment.
- Add desktop-only line break controls for the exact five-line headline while keeping natural wrapping below 900px.
- Stack headline, button, and note in that order below 900px, with the requested 32px and 40px spacing and overflow-safe widths.
- Retain the existing note texture and folded corner while adjusting its dimensions and rotation to match the reference.

## Verification
- Check the supplied 1094×649 preview and a large desktop viewport for footer visibility, five-line wrapping where space permits, and compact note placement.
- Check mobile for ordering, natural headline wrapping, exact spacing, and no horizontal overflow.
- Confirm the PeakProfile link opens the existing case-study page and light/dark appearances remain coherent.
