<template>
  <section class="page-comments">
    <div id="load-disqus" ref="loadButton">
      <a class="button" @click="load">Comments</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import DisqusJS from 'disqusjs'
import 'disqusjs/dist/disqusjs.css'

export default {
  props: ['page'],
  methods: {
    load() {
      this.$refs.loadButton.remove()

      const { shortname, siteName, api, apikey, admin, adminLabel } = this.$themeConfig.disqusjs
      const { title, url, author } = this.$siteConfig
      new DisqusJS({
        shortname: shortname || author,
        siteName: siteName || title,
        identifier: this.page.attributes.permalink,
        url: `${url}${this.page.attributes.permalink}`,
        title: this.page.attributes.title,
        api,
        apikey,
        admin: admin || author,
        adminLabel
      })
    }
  }
}
</script>
