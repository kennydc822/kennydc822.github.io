# 麻將紅中變 Website

Official landing page for **麻將紅中變 / Mahjong Red Dragon**. The site links to
the Android game on Google Play and its published
[privacy policy](https://kennydc822.github.io/mahjong-red-dragon-privacy/).

## Local preview

```bash
npm run dev
```

Then open `http://127.0.0.1:4173`.

## Production build

```bash
npm run build
```

## Content

The landing page covers five formal singleplayer modes, Custom Playground, Quiz Dojo, three AI difficulties, per-mode ratings, and four appearance themes. Online play remains labelled coming soon. The previous feature availability confirmation was on 2026-09-28.

The 2026-10-05 refresh adds a clearly labelled development preview for public-information danger/safety hints, Taiwan declared-ready waits, and the Hong Kong hand assistant. It updates the icon from the game's October 5 launcher artwork, replaces theme settings captures with gameplay environments, and refreshes Custom, Quiz and statistics images. No published app version is inferred from the development project; the page directs players to their installed Google Play version for feature availability.

Screenshot and artwork provenance is recorded in [SCREENSHOTS.md](SCREENSHOTS.md). Theme previews use native buttons with selected-state announcements and preserve the current image if loading fails. Newly referenced images use dated filenames, and CSS/JS use a dated query, so cached September assets do not hide the refresh.

## Publishing

The public website is served by GitHub Pages from the root of `main`. The existing Sites configuration is retained; this update does not change hosting providers.
