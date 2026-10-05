# Website screenshot and artwork sources

## Alternating appearance themes (`20261005r4`)

The twelve gameplay/UI image placements alternate across all four appearance packs, with three placements per pack on initial load. All added captures are native 1920×1080 Hong Kong Traditional Chinese frames from `Marketing/GooglePlay/2026-10-05/themes/`, verified against the SHA-256 records in `themes/manifest.json` before uncropped JPEG exports at quality 87 with mozjpeg. Their development-version and prepared-state limits remain the same as the October set below. No removed Hong Kong hand-assistance image is included.

| Website asset (`assets/images/`) | Source relative to `Marketing/GooglePlay/2026-10-05/themes/` | Placement |
| --- | --- | --- |
| `taiwan-ready-original-20261005r4.jpg` | `original/zh-HK/02-taiwan-ready-preview.png` | Hero; Original theme comparison |
| `game-modes-classic-20261005r4.jpg` | `classic-teahouse/zh-HK/04-game-modes.png` | Main mode picker |
| `custom-rules-midnight-20261005r4.jpg` | `midnight-porcelain/zh-HK/05-custom-rules.png` | Custom Playground |
| `japanese-safety-original-20261005r4.jpg` | `original/zh-HK/03-japanese-safe-tiles.png` | Safety feature card |
| `taiwan-ready-classic-20261005r4.jpg` | `classic-teahouse/zh-HK/02-taiwan-ready-preview.png` | Taiwan feature card; Classic comparison |
| `taiwan-ready-midnight-20261005r4.jpg` | `midnight-porcelain/zh-HK/02-taiwan-ready-preview.png` | Default theme comparison; Taiwan gallery entry |
| `japanese-safety-classic-20261005r4.jpg` | `classic-teahouse/zh-HK/03-japanese-safe-tiles.png` | Japanese gallery entry |
| `statistics-original-20261005r4.jpg` | `original/zh-HK/08-statistics.png` | Statistics gallery entry |

The retained `quiz-dojo-20261005r2.jpg`, `game-modes-20261005r2.jpg`, and `appearance-settings-20261005r2.jpg` show Jade Morning in Quiz and the gallery. `taiwan-ready-20261005r2.jpg` supplies the Jade comparison. Captions and alternative text identify the actual pack. Earlier game-theme captures remain in history but no longer supply the comparison.

## Content correction (`20261005r3`)

The game owner confirmed that Hong Kong hand assistance is no longer present. All descriptions of that feature and both `hand-assist-20261005*.jpg` exports have been removed. The hero now uses `taiwan-ready-20261005r2.jpg`; the first gallery image uses `game-modes-20261005r2.jpg`. Source records below describe retained assets.

## October 5 alignment with the current game (`20261005r2`)

Current Hong Kong UI captures come from `Marketing/GooglePlay/2026-10-05/zh-HK/`, generated from `develop-1.4.0` commit `68566633`. Each is exported as an uncropped 1920×1080 JPEG at quality 87 with mozjpeg. The source set is prepared for a future Google Play update; it has not established availability in a published version. Screens 01–03 are prepared gameplay states, and 05 is an in-memory custom rule example. The website retains its development-preview availability note.

| Website asset (`assets/images/`) | Source filename in that directory |
| --- | --- |
| `taiwan-ready-20261005r2.jpg` | `02-taiwan-ready-preview.png` |
| `japanese-safety-20261005r2.jpg` | `03-japanese-safe-tiles.png` |
| `game-modes-20261005r2.jpg` | `04-game-modes.png` |
| `custom-rules-20261005r2.jpg` | `05-custom-rules.png` |
| `quiz-dojo-20261005r2.jpg` | `06-quiz-dojo.png` |
| `appearance-settings-20261005r2.jpg` | `07-appearance-themes.png` |
| `statistics-20261005r2.jpg` | `08-statistics.png` |

- Mode names and rule copy follow `Assets/Resources/Localization/locale.csv`, the regional overrides in `zh-HK.csv`, and `CONTEXT.md`. Hong Kong is three-fan minimum, ten-fan cap; the Japanese mode is the game's Red Wild hybrid.
- `game-tile-base-20261005r2.png` is the exact sprite rectangle (118×175 at Unity x=2, y=2) from `Assets/_Game/Textures/Tiles3D/tile2d_face.png`, referenced by `TileDefinitionDatabase.asset` (GUID `4fbe1f131f7e9a44db2161d1a81856fd`).
- `game-dragon_red-20261005r2.png`, `game-dragon_green-20261005r2.png`, `game-bamboo_3-20261005r2.png`, and `game-dots_1-20261005r2.png` are byte copies of the corresponding production face sprites in `Assets/_Game/Textures/Tiles/`. CSS follows `UITilePrefab.prefab`: 90×135 tile, 82×125 contained face, offset up one pixel. No font glyph or CSS gradient substitutes for the tile artwork.
- `game-wordmark-20261005r2.webp` is the original `Assets/_Game/Textures/UI/Wordmark/wordmark-zh-hant.png`, resized to 768×512 at WebP quality 95. It retains the source paper background and brush strokes.
- `og-gamebrand-20261005r2.png` is a byte copy of the prepared game banner `Marketing/GooglePlay/2026-10-05/banner/feature-graphic-v2-1024x500.png`. This is existing promotional artwork, not a screenshot.
- The October 5 app icon and four gameplay theme captures below remain in use. Older feature captures are retained for history but are no longer referenced by the page.

## October 5 website refresh

Sources are from the local Mahjong Unity project. Captures are converted to JPEG at quality 85 with mozjpeg, preserving their original dimensions without cropping. These are Editor-rendered gameplay/UI previews, including prepared presentation fixtures; they do not certify a published app release or device performance. The website labels recent functionality as a development preview.

| Website asset (`assets/images/`) | Source in the game project |
| --- | --- |
| `theme-original-20261005.jpg` | `Logs/VisualQA/GameplayThemes-Applied-Original/Original_01_GameplayReady.png` |
| `theme-classic-20261005.jpg` | `Logs/VisualQA/GameplayThemes-Classic-Final/Classic_01_GameplayReady.png` |
| `theme-midnight-20261005.jpg` | `Logs/VisualQA/GameplayThemes-Applied-Midnight/Midnight_01_GameplayReady.png` |
| `theme-jade-20261005.jpg` | `Logs/VisualQA/GameplayThemes-Applied-Jade/Jade_01_GameplayReady.png` |
| `japanese-safety-20261005.jpg` | `Logs/VisualQA/2026-10-01-JapaneseSafety-c624/JapaneseSafe/JapaneseSafe_01_JapaneseSafeHints.png` |
| `taiwan-ready-20261005.jpg` | `Logs/VisualQA/TaiwanReadyWaits-2026-10-01/Persistent1080/Persistent1080_01_TaiwanReadyWaits.png` |
| `statistics-20261005.jpg` | `Logs/VisualQA/StatisticsText-2026-09-30/jade-hongkong/jade-hongkong_01_StatisticsOpen.png` |
| `custom-rules-20261005.jpg` | `Logs/VisualQA/UnifiedText-2026-09-30/jade-custom/jade-custom_01_CustomRuleEditor.png` |
| `quiz-dojo-20261005.jpg` | `Logs/VisualQA/UnifiedText-2026-09-30/jade-quiz-question/jade-quiz-question_01_QuizQuestion.png` |

The dated suffix records the website update date, not the original capture date. All retained JPEGs in this refresh are 1920×1080.

- `app-icon-20261005.webp`: resized to 512×512 from `Assets/_Game/AppIcons/icon_1024.png` (WebP quality 92).
- `favicon-20261005.png` and `apple-touch-icon-20261005.png`: 64×64 and 180×180 exports from the same game icon.
- `og-20261005.png`: a 1200×630 browser-rendered share card with the dated icon and HTML/CSS text. It is promotional artwork, not a gameplay screenshot.
- Icon source and design verification: `DesignReferences/AppIcon/2026-10-05/README.md` in the game project.

## Previous September assets

Existing Unity Editor captures from the Mahjong game project; converted to JPEG at quality 85 without cropping. Images illustrate UI and are not device performance evidence.

- `assets/images/table-hong-kong.jpg`: `Logs/UIAudit-20260923/Mode3/Mode3_01_AfterDeal.png`
- `assets/images/table-taiwan.jpg`: `Logs/UIAudit-20260923/Mode4/Mode4_01_AfterDeal.png`
- `assets/images/table-japanese.jpg`: `Logs/UIAudit-20260923/Mode5/Mode5_01_AfterDeal.png`
- `assets/images/statistics.jpg`: `Logs/UIAudit-20260923/Stats-HongKongTenFanRedWild.png`
- `assets/images/custom-rules.jpg`: `Logs/VisualQA/CustomEditorSpacing/AfterJadeTop.png`
- `assets/images/quiz-dojo.jpg`: `Logs/UIAudit-20260923/23-Quiz.png`
- `assets/images/theme-original.jpg`: `DesignReferences/AppearanceThemes/2026-09-23/AppliedPreview/AppearanceSettings-original.png`
- `assets/images/theme-classic.jpg`: `DesignReferences/AppearanceThemes/2026-09-23/AppliedPreview/AppearanceSettings-classic-final.png`
- `assets/images/theme-midnight.jpg`: `DesignReferences/AppearanceThemes/2026-09-23/AppliedPreview/AppearanceSettings-midnight-final.png`
- `assets/images/theme-jade.jpg`: `DesignReferences/AppearanceThemes/2026-09-23/AppliedPreview/AppearanceSettings-jade-final.png`
