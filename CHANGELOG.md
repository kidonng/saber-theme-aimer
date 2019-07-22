# Changelog

Based on [9f3305d](https://github.com/h404bi/www.h404bi.com/tree/9f3305d724f7553f6e9b8874f86598be21c1e4b5/packages/saber-theme-aimer) (Jun 9, 2019). Some refactor/tweaking changes are not listed.

## Usage

The theme requires the following packages:

- `sass` and `sass-loader`
- `saber-plugin-query-posts`
- `DisqusJS`

And works best with following plugins:

- `markdown-it-attrs`/`markdown-it-decorate` and `markdown-it-implicit-figures`
  - Config for `markdown-it-implicit-figures`: `figcaption: true`
- `markdown-it-footnote`
- `prismjs` and `saber-plugin-prismjs`
- `saber-plugin-image`

## New

- `smoothscroll-for-websites`
- `medium-zoom`
- `prism-theme-one-dark`
  - `saber-highlight-css@0.0.5` included
- Table of contents
  - In front matter: `toc: true`
- Page transition
- Lazy load transition & loader for `saber-plugin-image`
- Click header to scroll to top
- `scroll-behavior: smooth` on post page
- Serif/Sans serif font select
- Complete `alt`, `title` and `rel` attributes
- Complete SEO metas
- Dark style for 404 layout and `medium-zoom`
- Last updated date on title
- Avatar as default meta image
  - Avatar should be placed to `assets/avatar.png`

## Removed

- `normalize.css`
- `intersection-observer`
- `vue-headroom`
  - Headroom is built-in
- `lozad`
  - `saber-plugin-image` preserves image's size, thus avoid jumping caused by lazy load
  - For external image  use `markdown-it-imsize`
- Ionic icon font
- Social links in footer

## Tweaks

- Hide heading anchor on small screens
- Change post outdating period to 180 days 
- Smarter Disqus loading
- Fix 404 page layout
- More...
