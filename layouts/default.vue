<template>
  <div class="site-container">
    <Header />
    <main class="site-wrapper">
      <div class="page-content">
        <article itemscope itemtype="https://schema.org/Article">
          <header class="page-header">
            <h1 class="page-title">{{ page.attributes.title }}</h1>
            <div class="page-meta" v-if="page.attributes.type === 'post'">
              <section class="page-datetime">
                <time
                  class="published"
                  :title="`Last updated on ${humanDate}`"
                  :datetime="page.attributes.createdAt.toISOString()">
                  {{ date(page.attributes.createdAt, '{YYYY}-{Mo}-{DD}') }}
                </time>
              </section>
              <section class="page-categories" v-if="page.categories">
                <span v-for="(item, index) in page.categories" :key="index">
                  <span v-if="index > 0">, </span>
                  <saber-link
                    class="category"
                    :to="item.permalink">
                    {{ item.name }}
                  </saber-link>
                </span>
              </section>
            </div>
          </header>
          <section
            v-if="isPostOutdated"
            class="page-alert outdated-alert notification">
            The article is last updated {{ days }} ago ({{ humanDate }}), the information in the article may have changed.
          </section>
          <section class="page-body">
            <Contents v-if="page.attributes.toc" :page="page" />
            <slot />
          </section>
          <section class="page-block-action" v-if="$themeConfig.share || page.tags">
            <div class="page-share"></div>
            <div class="page-tags" v-if="page.tags">
              <span v-for="(item, index) in page.tags" :key="index">
                  <span v-if="index > 0">, </span>
                  <saber-link
                    class="tag"
                    :to="item.permalink"
                    v-text="item.name">
                  </saber-link>
                </span>
            </div>
          </section>
          <Disqus
            v-if="page.attributes.comments !== false && $themeConfig.disqusjs"
            :page="page" />
          <footer class="page-footer"></footer>
        </article>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Disqus from '../components/Disqus'
import Contents from '../components/Contents'
import date from '../utils/date'
import meta from '../utils/meta'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Disqus,
    Contents
  },
  mounted() {
    // Create lazy load loader for external images only
    this.$nextTick(() =>
      document.querySelectorAll('[lazy]:not([data-src^="/"])').forEach(el =>
        el.parentElement.classList.add('loader')
      )
    )

    setTimeout(() => document.documentElement.classList.add('smooth'), 0)
  },
  beforeDestroy() {
    document.documentElement.classList.remove('smooth')
  },
  methods: {
    date
  },
  computed: {
    days() {
      const nowDate = new Date()
      const postDate = new Date(this.page.attributes.updatedAt || this.page.attributes.createdAt)
      return Math.floor((nowDate - postDate) / 86400000)
    },
    humanDate() {
      return date(this.page.attributes.updatedAt || this.page.attributes.createdAt, '{YYYY}-{MM}-{DD}')
    },
    isPostOutdated() {
      return this.days > 180
    }
  },
  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: meta(this)
    }
  }
}
</script>
