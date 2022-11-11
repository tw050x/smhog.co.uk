<style lang="scss" scoped>
  div.link-bar {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    @media (min-width: 640px) { flex-direction: row; }
    justify-content: left;
    line-height: 1.8;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 640px) { width: 640px }
  }

  div.position {
    background-color: lighten(#e0e0e0, 5%);
    background-image: radial-gradient(circle at center, lighten(#e0e0e0, 2.5%) 40%, #e0e0e0 80%);
    box-sizing: border-box;
    display: flex;
    @media (min-width: 640px) { flex-direction: row; }
    margin: 0.5em;
    overflow: hidden;
    position: relative;
  }

  a {
    background: transparent;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    color: #000000;
    height: calc(100% - 1rem);
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
</style>

<template>
  <div class="link-bar">
    <template v-if="links.length">
      <div class="position" v-for="(link, index) in links" :key="index">
        <a :href="$router.resolve(link.location).href" @click.prevent="handleLinkClick(link.location)" @touch.prevent="handleLinkTouch(link.location)">
          {{ link.text }}
        </a>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    methods: {
      handleLinkClick (location) {
        this.$router.push(location)
      },
      handleLinkTouch (location) {
        this.$router.push(location)
      }
    },

    name: 'SectionLinkBar',

    props: {
      links: {
        require: true,
        type: Array
      }
    }
  }
</script>
