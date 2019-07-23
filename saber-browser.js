import './styles/main.scss'

export default ({ setHead }) => {
  if (process.browser) {
    import('smoothscroll-for-websites')

    document.documentElement.classList.toggle('serif', JSON.parse(localStorage.serif || false))
  }

  setHead(function() {
    return {
      meta: [
        {
          name: 'author',
          content: this.$siteConfig.author
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: this.$siteConfig.author
        }
      ],
      link: [
        {
          rel: 'alternate',
          title: this.$siteConfig.title,
          href: this.$feed.permalink,
          type: this.$feed.type === 'atom'
            ? 'application/atom+xml'
            : this.$feed.type === 'rss2'
              ? 'application/rss+xml'
              : 'application/json'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/ionicons/dist/css/ionicons.min.css'
        }
      ]
    }
  })
}
