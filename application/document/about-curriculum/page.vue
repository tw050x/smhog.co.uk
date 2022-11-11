<template>
  <div class="who-we-are">

    <!-- our franchise -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutCurriculum.data.attributes.section.ourDramaCurriculum.heading }}</span>
        <span slot="h2">{{ $store.state.aboutCurriculum.data.attributes.section.ourDramaCurriculum.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutCurriculum.data.attributes.section.ourDramaCurriculum.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutCurriculum.data.attributes.section.ourDramaCurriculum.links.length" :links="$store.state.aboutCurriculum.data.attributes.section.ourDramaCurriculum.links" />
    </section>

    <!-- helen ogrady international -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.aboutCurriculum.data.attributes.section.ourCurriculumProgrammes.heading }}</span>
        <span slot="h2">{{ $store.state.aboutCurriculum.data.attributes.section.ourCurriculumProgrammes.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.aboutCurriculum.data.attributes.section.ourCurriculumProgrammes.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.aboutCurriculum.data.attributes.section.ourCurriculumProgrammes.links.length" :links="$store.state.aboutCurriculum.data.attributes.section.ourCurriculumProgrammes.links" />
    </section>
  </div>
</template>

<script>
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.aboutCurriculum.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    metaDescription () {
      return this.$store.state.aboutCurriculum.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.aboutCurriculum.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.aboutCurriculum.data.attributes.meta.title
    },

    name: 'DocumentAboutCurriculum'
  }
</script>
