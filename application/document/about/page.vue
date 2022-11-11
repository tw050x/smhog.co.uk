<template>
  <div class="classes">
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.about.data.attributes.section.whoWeAre.heading }}</span>
        <span slot="h2">{{ $store.state.about.data.attributes.section.whoWeAre.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.about.data.attributes.section.whoWeAre.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.about.data.attributes.section.whoWeAre.links.length" :links="$store.state.about.data.attributes.section.whoWeAre.links" />
    </section>

    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.about.data.attributes.section.whatWeDo.heading }}</span>
        <span slot="h2">{{ $store.state.about.data.attributes.section.whatWeDo.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.about.data.attributes.section.whatWeDo.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.about.data.attributes.section.whatWeDo.links.length" :links="$store.state.about.data.attributes.section.whatWeDo.links" />
    </section>

    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.about.data.attributes.section.curriculum.heading }}</span>
        <span slot="h2">{{ $store.state.about.data.attributes.section.curriculum.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.about.data.attributes.section.curriculum.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.about.data.attributes.section.curriculum.links.length" :links="$store.state.about.data.attributes.section.curriculum.links" />
    </section>

    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.about.data.attributes.section.programme.heading }}</span>
        <span slot="h2">{{ $store.state.about.data.attributes.section.programme.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="(content, index) in $store.state.about.data.attributes.section.programme.content" :key="index">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.about.data.attributes.section.programme.links.length" :links="$store.state.about.data.attributes.section.programme.links" />
    </section>
  </div>
</template>

<script>
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', { breadcrumbs: this.$store.state.about.data.attributes.meta.breadcrumbs, type: 'main' })
    },

    components: {
      SectionHeading,
      SectionLinkBar,
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
