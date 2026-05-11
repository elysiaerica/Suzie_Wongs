# QA Report

## Checks

- Created branch: `launch-options-offer-preview`.
- Added standalone file: `suzie-launch-options.html`.
- Added a client-facing launch-options page with two options only:
  - Option 1 - Website Live: `$1,950`
  - Option 2 - Website + Venue Setup: `$3,750`, marked Recommended
- Included deposit copy: `50% to start. Balance on launch.`
- Included final CTA: `Reply with Option 1 or Option 2 and I'll take it from there.`
- Built option toggle behavior with plain JavaScript.
- Built notes on/off toggle behavior with plain JavaScript.
- Added dynamic annotations for Option 1 and Option 2.
- Kept the page static and portable, with no backend functionality.
- Used existing repo fonts and image assets via relative paths.

## Local QA

- Confirmed the HTML opens locally with Chrome headless using the local file URL.
- Confirmed the default selected option is Option 2.
- Confirmed Option 2 shows `$3,750` and the Recommended badge.
- Confirmed toggling to Option 1 shows `Option 1 - Website Live` and `$1,950`.
- Confirmed Option 1 does not show the Recommended badge.
- Confirmed notes toggle changes from `Notes On` to `Notes Off` and hides the notes layer.
- Confirmed Option 1 renders six active notes.
- Confirmed toggling back to Option 2 restores `Option 2 - Website + Venue Setup`, `$3,750`, and the Recommended badge.
- Confirmed final CTA is present: `Reply with Option 1 or Option 2 and I'll take it from there.`

## Compromises

- The original site is React/Vite-based, so this is a hand-authored static approximation rather than a framework export.
- Icons from the React/lucide implementation were not carried over, to keep this as one standalone HTML file without external dependencies.
- The preview recreates the current design language, layout, typography feel, imagery, nav, hero, CTAs and footer, but it is intentionally a compact client-facing preview rather than a full static copy of every route.
- The Codex in-app browser blocked both direct `file://` and localhost navigation for this workspace, so final interaction QA was completed with local Chrome headless plus a DOM-level JavaScript toggle harness.
