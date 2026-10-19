# App collection · dong0902hee.github.io

Static GitHub Pages site. No build dependencies, analytics, third-party runtime scripts or remote font requests. Fonts are self-hosted with their OFL notices.

- `/`: app catalog (currently FrameDiary; future entries can be added as app cards).
- `/apps/framediary/`: product overview and sample screens.
- `/apps/framediary/guide/`: tutorial and FAQ based on the +25 user-accepted UI.
- `/apps/framediary/design/`: public brand/template/design boards and screen gallery.
- `/app-ads.txt`: existing AdMob authorization record, preserved byte for byte.

Keep the existing privacy-policy project URLs unchanged. Do not put its files inside this repo or replace its legal text in a marketing update.

To add an app: add an app card to index.html, a separate directory under apps/, its own privacy-policy URL, original/licensed assets, and sitemap entry. Do not publish an app that does not exist as a clickable placeholder.

Local preview: `python -m http.server 8765 --bind 127.0.0.1` from this directory.
Check desktop and mobile widths, gallery keyboard/Escape/close, comparison slider, all local links, and app-ads.txt before publishing.

## Asset provenance

FrameDiary screenshots render the existing app source at 084a132 using synthetic guide/record data and repository-owned generated image fixtures. They are not device captures and do not contain user records. Ads are not requested. Android builds and app source are not changed by website work.

App icon and silhouette templates reuse the existing FrameDiary brand/design assets. The two season images were drawn from primitives by the project's demo generator. Internal HTML-export stock photos, raw private design bundles, device identifiers, secrets and real user media are excluded. No keystore, build outputs or source repository are published.

Gallery screenshots may differ slightly by platform/font and installed app version. No auto-analysis, auto-alignment or medical claims are made. Gallery/share/ZIP, Compare/Stack and guide files remain distinct in the tutorial.

## Revised design gallery

`/apps/framediary/design/preview/` publishes 18 static screen previews from the user-provided revised HTML (source SHA256 `1d649cb9b279e7508ae1ed10a991651070fc12f776c53c4d136d8d69ccadb9af`). The original supplied file is preserved locally and is not published wholesale. Layouts, inline vectors and 38 custom PNG template assets are retained. All JPEG placeholders are replaced by the two repository-owned generated sample images. No bundled JavaScript, remote fonts, stock photographs, runtime internals or raw source bundle are published. Preview buttons are inert; current app screens and tutorial remain separate. This does not change the app design baseline or application code.

## Site theme refresh — 2026-10-19

Based on the user-supplied `FrameDiary Site (standalone).html` (SHA256 `2a698c7c418722b03333023cd5a88c2492410cc4f95ae3da113106fcf18db16c`). White/Mist surfaces, Blue #2A6DF4, Ink #10203A, Night #0B1420, rounded cards, 68px desktop header and Plus Jakarta Sans/Noto Sans KR now apply across the catalog, product overview, tutorial and design gallery. Overview and design sections preserve the supplied composition; app catalog and tutorial use the same shared theme. The app's code and authoritative design baseline are unchanged.

Custom loops/navigation from the source are converted to ordinary static HTML links. No supplied DC/React runtime, raw standalone bundle, hidden photo-credit script, source paths or arbitrary code is published. A small same-origin script handles the comparison pointer/keyboard slider and image dialog. Theme CSS/JS use content-hashed filenames to prevent stale-cache layouts.

This source now includes explicit Unsplash provenance (eight original image IDs). The official Unsplash License was checked on 2026-10-19 (https://unsplash.com/license); its public license allows commercial use, modification and distribution. The seven supplied design-screen PNGs and comparison JPG remain labeled as design examples/Unsplash, not user photographs or AI-generated imagery. They are used in context as an app UI illustration, not as an endorsement. No photographer names or real capture location/date are invented. The existing +25 synthetic-data screenshots and 18-screen safe preview remain separate and unchanged. Full credits: `/apps/framediary/credits/`. This review is for these documented website mockups, not a blanket license clearance of the app repository's older undocumented stock photos.

The source's 24 custom ink template PNGs and two SVG brand assets are used. Bundled WOFF2 subsets are self-hosted; official copyright/OFL texts from google/fonts are retained in assets/fonts. Original source is preserved locally, not uploaded. app-ads.txt and all privacy-policy URLs are unchanged.
