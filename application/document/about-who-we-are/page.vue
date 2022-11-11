<template>
  <div class="who-we-are">

    <!-- our franchise -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutWhoWeAre.data.attributes.section.ourFranchise.heading }}</span>
        <span slot="h2">{{ $store.state.aboutWhoWeAre.data.attributes.section.ourFranchise.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutWhoWeAre.data.attributes.section.ourFranchise.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutWhoWeAre.data.attributes.section.ourFranchise.links.length" :links="$store.state.aboutWhoWeAre.data.attributes.section.ourFranchise.links" />
    </section>

    <!-- helen o'grady international -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutWhoWeAre.data.attributes.section.helenOGradyInternational.heading }}</span>
        <span slot="h2">{{ $store.state.aboutWhoWeAre.data.attributes.section.helenOGradyInternational.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutWhoWeAre.data.attributes.section.helenOGradyInternational.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutWhoWeAre.data.attributes.section.helenOGradyInternational.links.length" :links="$store.state.aboutWhoWeAre.data.attributes.section.helenOGradyInternational.links" />
    </section>
  </div>
</template>

<script>
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.aboutWhoWeAre.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    metaDescription () {
      return this.$store.state.aboutWhoWeAre.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.aboutWhoWeAre.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.aboutWhoWeAre.data.attributes.meta.title
    },

    name: 'DocumentAboutWhoWeAre'
  }
</script>
