<template>
  <section class="sub-header">
    <div class="hero-image">
      <img :src="page.attributes.assets.cover" :alt="page.attributes.title" />
      <span class="overlay"></span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['page']
}
</script>

<style scoped>
.hero-image {
  position: relative;
}

.hero-image img {
  display: block;
  width: 100%;
  max-height: 27rem;
  object-fit: cover;
}

.overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, .6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .2;
  transition: opacity .2s ease-in-out;
}
</style>
