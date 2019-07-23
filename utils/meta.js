export default app => {
  if (app.page) {
    let image = app.$siteConfig.url
    image += app.page.attributes.assets.cover || app.page.attributes.assets.avatar || app.$themeConfig.defaultImage

    return [
      {
        name: 'description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'og:title',
        content: app.page.attributes.title
      },
      {
        property: 'og:description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        name: 'twitter:title',
        content: app.page.attributes.title
      },
      {
        name: 'twitter:description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'twitter:image:src',
        content: image
      }
    ]
  } else {
    const image = `${app.$siteConfig.url}${app.$themeConfig.defaultImage}`

    return [
      {
        name: 'description',
        content: app.$siteConfig.description
      },
      {
        property: 'og:title',
        content: app.$siteConfig.title
      },
      {
        property: 'og:description',
        content: app.$siteConfig.description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        name: 'twitter:title',
        content: app.$siteConfig.title
      },
      {
        name: 'twitter:description',
        content: app.$siteConfig.description
      },
      {
        property: 'twitter:image:src',
        content: image
      }
    ]
  }
}
