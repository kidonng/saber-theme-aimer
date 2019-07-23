<template>
  <footer id="site-footer" class="site-footer">
    <div class="wrap">
      <section class="section" v-if="$themeConfig.footer.nav">
        <nav class="footer-nav">
          <ul>
            <li v-for="(item, index) in $themeConfig.footer.nav" :key="index">
              <a
                v-if="item.name === 'Feed'"
                :href="$feed.permalink"
                target="_blank">Feed</a>
              <a
                v-else-if="item.name === 'Font'"
                class="button"
                title="Select Font"
                @click="selectFont">{{ serif ? 'Serif' : 'Sans-serif' }}</a>
              <saber-link v-else :to="item.path">{{ item.name }}</saber-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="section" v-if="$themeConfig.footer.social_network">
        <div class="social-network">
          <ul>
            <li v-for="(item, index) in $themeConfig.footer.social_network" :key="index">
              <a :class="`icon ion-${item.icon}`" :href="item.path" target="_blank" rel="noopener"></a>
            </li>
          </ul>
        </div>
      </section>
      <section class="section">
        <div class="copyright" v-text="`© ${siteDate} ${$siteConfig.author}`"></div>
      </section>
    </div>
  </footer>
</template>

<script>
import date from '../utils/date'

export default {
  data: () => ({
    serif: JSON.parse((process.browser && localStorage.serif) || false)
  }),
  computed: {
    siteDate () {
      const since = this.$themeConfig.since
      const now = date(Date.now(), '{YYYY}')
      if (since) {
        return new Date(since) === now ? now : `${since}-${now}`
      } else {
        return now
      }
    }
  },
  methods: {
    selectFont() {
      this.serif = localStorage.serif = !this.serif
      document.documentElement.classList.toggle('serif', this.serif)
    }
  }
}
</script>
