<template>
  <div class="frontpage">
    <div class="frontpage-content">
      <saber-link
        v-if="page.attributes.avatarLink"
        class="avatar"
        :to="page.attributes.avatarLink"
        :title="page.attributes.avatarTitle">
        <img :src="page.attributes.assets.avatar" alt="Avatar" />
      </saber-link>
      <div v-else class="avatar">
        <img :src="page.attributes.assets.avatar" alt="Avatar" />
      </div>
      <h1 class="name">{{ $siteConfig.author }}</h1>
      <div class="slogan" :title="$themeConfig.home.slogan.title">
        <a
          v-if="$themeConfig.home.slogan.path"
          :href="$themeConfig.home.slogan.path" target="_blank" rel="noopener noreferrer">
          {{ $themeConfig.home.slogan.name }}
        </a>
        <span v-else>{{ $themeConfig.home.slogan.name }}</span>
      </div>
      <hr>
      <ul class="menu">
        <li v-for="(item, index) in $themeConfig.home.menu" :key="index">
          <saber-link v-if="item.path.startsWith('/')" :to="item.path" :title="item.title">
            {{ item.name }}
          </saber-link>
          <a v-else
            :href="item.path"
            :title="item.title"
            target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
        </li>
      </ul>
      <div v-if="$themeConfig.home.location" class="location">
        {{ $themeConfig.home.location }}
      </div>
    </div>
  </div>
</template>

<script>
import meta from '../utils/meta'

export default {
  props: ['page'],
  head() {
    return {
      title: this.$siteConfig.title,
      meta: meta(this)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Covered By Your Grace';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Covered By Your Grace'), local('CoveredByYourGrace'), url(https://fonts.gstatic.com/s/coveredbyyourgrace/v8/QGYwz-AZahWOJJI9kykWW9mD6opopoqXSOSEEQgsiaXVIw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.frontpage {
	width: 100vw;
	height: 100vh;
  display: flex;
	align-items: center;
	justify-content: center;
  line-height: 1.15;
}

.frontpage-content {
	text-align: center
}

.avatar img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

h1 {
	font-size: 38px;
	font-family: 'Covered By Your Grace', cursive;
	font-weight: 400;
	margin: 8px 0;
}

.slogan {
	font-size: 16px;
	margin-bottom: 16px;
}

hr {
	max-width: 400px;
	height: 1px;
	border: none;
	background-image: linear-gradient(0deg, transparent, #d5d5d5, transparent);
	background-image: -webkit-linear-gradient(0deg, transparent, #d5d5d5, transparent);
}

.menu {
  display: flex;
  justify-content: center;
  list-style-type: none;
	font-size: 14px;
	margin: 16px 0;
}

.menu li {
	margin: 0 4px;
}

.location {
	font-size: 12px;
}
</style>
