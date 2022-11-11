<template>
  <div class="classes">

    <!-- lower primary -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutProgramme.data.attributes.section.lowerPrimary.heading }}</span>
        <span slot="h2">{{ $store.state.aboutProgramme.data.attributes.section.lowerPrimary.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutProgramme.data.attributes.section.lowerPrimary.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutProgramme.data.attributes.section.lowerPrimary.links.length" :links="$store.state.aboutProgramme.data.attributes.section.lowerPrimary.links" />
    </section>

    <!-- ipper primary -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutProgramme.data.attributes.section.upperPrimary.heading }}</span>
        <span slot="h2">{{ $store.state.aboutProgramme.data.attributes.section.upperPrimary.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutProgramme.data.attributes.section.upperPrimary.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutProgramme.data.attributes.section.upperPrimary.links.length" :links="$store.state.aboutProgramme.data.attributes.section.upperPrimary.links" />
    </section>

    <!-- youth theatre -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutProgramme.data.attributes.section.youthTheatre.heading }}</span>
        <span slot="h2">{{ $store.state.aboutProgramme.data.attributes.section.youthTheatre.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutProgramme.data.attributes.section.youthTheatre.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutProgramme.data.attributes.section.youthTheatre.links.length" :links="$store.state.aboutProgramme.data.attributes.section.youthTheatre.links" />
    </section>
  </div>
</template>

<script>
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.aboutProgramme.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    metaDescription () {
      return this.$store.state.aboutProgramme.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.aboutProgramme.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.aboutProgramme.data.attributes.meta.title
    },

    name: 'DocumentAboutProgramme'
  }
</script>
