<template>
  <div class="what-we-do">

    <!-- speech and drama classes -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaClasses.heading }}</span>
        <span slot="h2">{{ $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaClasses.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaClasses.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaClasses.links.length" :links="$store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaClasses.links" />
    </section>

    <!-- speech and drama curriculum -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaCurriculum.heading }}</span>
        <span slot=h2>{{ $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaCurriculum.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaCurriculum.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaCurriculum.links.length" :links="$store.state.aboutWhatWeDo.data.attributes.section.speechAndDramaCurriculum.links" />
    </section>
  </div>
</template>

<script>
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.aboutWhatWeDo.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    metaDescription () {
      return this.$store.state.aboutWhatWeDo.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.aboutWhatWeDo.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.aboutWhatWeDo.data.attributes.meta.title
    },

    name: 'DocumentAboutWhatWeDo'
  }
</script>
