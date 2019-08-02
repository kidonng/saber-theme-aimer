export default app => {
  const title = app.page.attributes.title || app.$siteConfig.title
  const description = app.page.attributes.description || app.$siteConfig.description
  let keywords = app.$siteConfig.keywords
  if (app.page.tags) keywords += `,${app.page.tags.map(tag => tag.name).join(',')}`

  const metas = [
    {
      name: 'description',
      content: description
    },
    {
      name: 'keywords',
      content: keywords
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    }
  ]

  if (app.page.attributes.assets.cover || app.page.attributes.assets.avatar) {
    const image = `${app.$siteConfig.url}${app.page.attributes.assets.cover || app.page.attributes.assets.avatar}`
    metas.push({
      property: 'og:image',
      content: image
    }, {
      property: 'twitter:image:src',
      content: image
    })
  }

  return metas
}
