# Changelog

Synced with commit [26154f9](https://github.com/h404bi/www.h404bi.com/tree/26154f97b8077426116872aac251de41eb92c263/packages/saber-theme-aimer) (Jul 30, 2019). Some refactor/tweaking changes are not listed.

## Usage

The theme depends on following packages:

- `sass` and `sass-loader`
- `saber-plugin-query-posts`

And works best with following packages:

- `markdown-it-attrs` / `markdown-it-decorate` (for floating images with `.left`/`.right`)
- `markdown-it-implicit-figures`
  - Plugin config: `figcaption: true`
- `markdown-it-footnote`
- `prismjs` & `saber-plugin-prismjs`
- `saber-plugin-image`
- `saber-plugin-medium-zoom`

For (theme) config example, see [here](https://github.com/h404bi/www.h404bi.com/blob/26154f97b8077426116872aac251de41eb92c263/saber-config.js#L22-L115).

**NOTE:**

- This theme doesn't provide the `pswp` option.
- To enable Disqus, you must put [Disqus config](https://github.com/h404bi/www.h404bi.com/blob/26154f97b8077426116872aac251de41eb92c263/saber-config.js#L11-L16) under `themeConfig`.

## New

- Smooth scroll (`smoothscroll-for-websites`)
  - `scroll-behavior: smooth` on post page
- Code highlight theme: One Dark (`prism-theme-one-dark`)
  - `saber-highlight-css@0.0.5` included
- Table of contents
  - Usage: add `toc: true` to front matter
- Page transition
- Serif/sans serif font select
- Complete `alt`, `title` and `rel` attributes
- Complete SEO meta tags
- Dark style for 404 layout and `medium-zoom`
- Last updated date on title

## Removed

- `normalize.css`
- `vue-headroom`
  - Headroom is built-in
- `lozad` & `intersection-observer`
  - `saber-plugin-image` is recommended as it preserves size, thus avoid jumping while loading
  - To preserve size for external images, please use `markdown-it-imsize`

## Tweaks

- Hide heading anchor on small screens
- Change post outdated period to 180 days
- Fix 404 page layout
- More...
