# Update the homepage hero with a sticky note

## Scope
- Change only the homepage introduction; preserve the shared header, navigation, theme toggle, primary work button, footer, and every other page.
- Replace the headline with the exact approved sentence.
- Add one dusty-rose sticky note using the supplied copy and mail link.

## Implementation
- Use a two-column desktop composition with a constrained headline and a rotated note that never overlaps it.
- Build the note with restrained texture, a folded corner, subtle shadow, existing palette tokens, and a dark-mode treatment.
- Make only “Let’s talk ↗” clickable, with underline and a visible keyboard-focus state.
- Stack the note below the headline on tablet and mobile, prevent overflow, and keep natural scrolling on short screens.
- Keep desktop spacing compact enough for the existing footer to remain visible.

## Verification
- Check desktop, tablet, and mobile layouts in light and dark mode.
- Confirm the headline and note copy are exact, the mail link is correct, the work button is unchanged, and no horizontal overflow occurs.
