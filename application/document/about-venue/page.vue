<template>
  <div class="classes"></div>
</template>

<script>
  import LinkBar from '@application/component/link-bar'
  import SectionHeading from '@application/component/section-heading'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.about.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      LinkBar,
      SectionHeading,
      SectionParagraph
    },

    metaDescription () {
      return this.$store.state.about.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.about.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.about.data.attributes.meta.title
    },

    name: 'DocumentAbout'
  }
</script>
