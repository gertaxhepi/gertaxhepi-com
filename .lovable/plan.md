# Three-Level Portfolio Button System

## Scope
Standardize only the existing portfolio action buttons without changing their placement, destinations, page layouts, navigation, project rows, social links, or typography.

## Implementation
- Replace the current single shared action style with one reusable button component supporting `primary`, `secondary`, and `tertiary` variants.
- Keep primary and secondary dimensions identical: 52px minimum height, 24px horizontal padding, 16px semibold text, 20px icons, 12px gap, and a shared 14px corner radius.
- Primary: near-black surface with warm off-white content in light mode; inverted in dark mode; no background color change on hover.
- Secondary: warm-grey surface with dark content in light mode; a lighter-than-page grey surface with light content in dark mode; subtly darken on hover.
- Tertiary: transparent, borderless, compact, square-edged text action with no hover container.
- Preserve the existing arrow movement and apply consistent icon alignment to the right. Keep the download icon on the right as required by the unified system.
- Add a clear dusty-rose keyboard focus outline to all variants without changing their resting appearance.

## Apply Variants
- Homepage “View selected work” → primary.
- Every “Download Resume” action on About and Resume → secondary, retaining the direct PDF download and filename.
- Work-page “About me” → tertiary, retaining its About-page destination.

## Verification
- Check light and dark modes at desktop and mobile widths.
- Confirm matching primary/secondary dimensions, correct hover and focus states, direct resume downloads, working destinations, and no overflow or layout changes.
