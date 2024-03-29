# saber-theme-aimer

![Maintenance](https://img.shields.io/maintenance/no/2019?style=for-the-badge)

> A concise [Saber](https://saber.land/) theme, ported and evoluted from the unreleased hexo-theme-mina.

This is a fork of [the original theme](https://github.com/h404bi/www.h404bi.com/tree/master/packages/saber-theme-aimer). For detailed usage and changes, see [Changelog](CHANGELOG.md).

## Install

Since this modified theme isn't published on npm, you should install it manually:

1. Clone/download the theme.
2. In Saber config file:

```js
module.exports = {
  // ...
  theme: 'path/to/theme'
}
```

## Layouts

- `404`: For 404 not found page.
- `default`: The default post/page layout.
- `index`: The default homepage layout.
- `category`: The category pages layout (extend from index).
- `tag`: The tag pages layout (extend from index).
- `home`: The frontpage (landing page) layout.

## License

[MIT](./LICENSE) © h404bi

> [Website](https://www.h404bi.com) · GitHub [@h404bi](https://github.com/h404bi) · Twitter [@h404bi](https://twitter.com/h404bi)
