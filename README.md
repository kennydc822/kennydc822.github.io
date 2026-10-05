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

The 2026-10-05 refresh adds a clearly labelled development preview for public-information danger/safety hints and Taiwan declared-ready waits. It updates the icon from the game's October 5 launcher artwork, replaces theme settings captures with gameplay environments, and refreshes Custom, Quiz and statistics images. No published app version is inferred from the development project; the page directs players to their installed Google Play version for feature availability.

The follow-up aligns every formal mode name with the current Hong Kong localization: 碰槓牌 · 有番子, 碰槓牌 · 無番子, 香港麻雀三番起糊・紅中百搭, 台灣十六張・紅中百搭, and 日本麻雀・紅中百搭. It explains Hong Kong's three-fan minimum and ten-fan cap, the Japanese Red Wild hybrid, fixed individual Custom fan/tai values, and Quiz's daily 15-question start with up to three mistakes. The latest Hong Kong screenshots are from the October 5 Google Play preparation set. Decorative tiles now layer the production UI tile base and face sprites; the hero and social card use the game's existing brush artwork.

Screenshot and artwork provenance is recorded in [SCREENSHOTS.md](SCREENSHOTS.md). Theme previews use native buttons with selected-state announcements and preserve the current image if loading fails. Newly referenced images use dated filenames, and CSS/JS use a dated query, so cached September assets do not hide the refresh.

The Hong Kong hand-assistant feature is absent from the current game, as confirmed by the owner. Its section, copy, screenshots and obsolete styling have been removed. The hero uses the Taiwan ready-preview capture and the gallery starts with the mode picker.

Screenshots alternate between all four game themes. On initial load, each theme appears three times across the twelve gameplay/UI image placements. The hero uses Original, the main mode picker Classic Teahouse, Custom Midnight Porcelain, and Quiz Jade Morning. Feature cards and gallery entries use different themes for the same feature. The theme comparison uses the latest Taiwan capture for each pack and starts with Midnight Porcelain; selected-state announcements and load-failure fallback remain available.

## Publishing

The public website is served by GitHub Pages from the root of `main`. The existing Sites configuration is retained; this update does not change hosting providers.
