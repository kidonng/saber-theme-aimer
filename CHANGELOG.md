# Changelog

Synced with commit [81443fc](https://github.com/h404bi/www.h404bi.com/tree/81443fc3a42d591aea72ece464aeb2297ea7432a/packages/saber-theme-aimer) (Jul 22, 2019). Some refactor/tweaking changes are not listed.

## Packages

The theme depends on following packages:

- `sass` and `sass-loader`
- `saber-plugin-query-posts`

And works best with following packages:

- `markdown-it-attrs` / `markdown-it-decorate`
- `markdown-it-implicit-figures`
  - Plugin config: `figcaption: true`
- `markdown-it-footnote`
- `prismjs` & `saber-plugin-prismjs`
- `saber-plugin-image`
- `saber-plugin-medium-zoom`

## New

- Smooth scroll (`smoothscroll-for-websites`)
  - `scroll-behavior: smooth` on post page
- Code highlight theme: One Dark (`prism-theme-one-dark`)
  - `saber-highlight-css@0.0.5` included
- Table of contents
  - Usage: add `toc: true` to front matter
- Page transition
- Lazy load transition & loader for `saber-plugin-image`
- Click header to scroll to top
- Serif/sans serif font select
- Complete `alt`, `title` and `rel` attributes
- Complete SEO meta tags
  - Set `defaultImage` in theme config for social sites
- Dark style for 404 layout and `medium-zoom`
- Last updated date on title
- Avatar as default meta image
  - Avatar should be placed to `assets/avatar.png`

## Removed

- `normalize.css`
- `vue-headroom`
  - Headroom is built-in
- `lozad` & `intersection-observer`
  - We recommend using `saber-plugin-image` as it preserves size, thus avoid jumping while loading
  - To preserve size for external images use `markdown-it-imsize`

## Tweaks

- Hide heading anchor on small screens
- Change post outdated period to 180 days
- Fix 404 page layout
- More...
