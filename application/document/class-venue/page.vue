<template>
  <div class="class-venue">

    <!-- introduction -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ classVenue.attributes.section.ourClass.heading }}</span>
        <span slot="h2">{{ classVenue.attributes.section.ourClass.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ classVenue.attributes.section.ourClass.content[0] }}</span>
      </section-paragraph>
      <section-link-bar :links="classVenue.attributes.section.ourClass.links" />
    </section>

    <!-- venue (map) -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ classVenue.attributes.section.ourClassVenue.heading }}</span>
        <span slot="h2">{{ classVenue.attributes.section.ourClassVenue.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ classVenue.attributes.section.ourClassVenue.content[0] }}</span>
      </section-paragraph>
      <section-break reverse>
        <no-ssr>
          <embeddable-map class="map" icon="/asset/image/icon/map-pin.png" ref="map" v-view.once="() => $refs.map.initialise()" :apikey="$store.state.secret.google.map.api.key" :latitude="latitude" :longitude="longitude" :markers="[ { coordinates: classVenue.attributes.coordinates } ]" :zoom="zoomValue" />
          <card ref="directions-card">
            <h2>Need Directions?</h2>
            <p>Coming Soon!</p>
          </card>
        </no-ssr>
      </section-break>
      <section-link-bar :links="classVenue.attributes.section.ourClassVenue.links" />
    </section>
  </div>
</template>

<script>
  import Card from '@application/component/card'
  import EmbeddableMap from '@application/component/embeddable-map'
  import NoSsr from '@application/component/no-ssr'
  import SectionBreak from '@application/component/section-break'
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', {
        breadcrumbs: this.classVenue.attributes.meta.breadcrumbs,
        type: 'main'
      })
    },

    components: {
      Card,
      EmbeddableMap,
      NoSsr,
      SectionBreak,
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    computed: {
      classVenue () {
        return this.$store.state.classVenue.data.filter(classVenue => classVenue.id === this.$route.params.venue).shift()
      },

      latitude () {
        let latitude = this.classVenue.attributes.coordinates.latitude - 0.02
        if (this.component && this.component.dimension.width >= 720) latitude = this.classVenue.attributes.coordinates.latitude
        return latitude
      },

      longitude () {
        let longitude = this.classVenue.attributes.coordinates.longitude
        if (this.component && this.component.dimension.width >= 720) longitude = this.classVenue.attributes.coordinates.longitude - 0.08
        if (this.component && this.component.dimension.width >= 960) longitude = this.classVenue.attributes.coordinates.longitude - 0.1
        if (this.component && this.component.dimension.width >= 1280) longitude = this.classVenue.attributes.coordinates.longitude - 0.12
        if (this.component && this.component.dimension.width >= 1600) longitude = this.classVenue.attributes.coordinates.longitude - 0.14
        if (this.component && this.component.dimension.width >= 1920) longitude = this.classVenue.attributes.coordinates.longitude - 0.16
        return longitude
      },

      zoomValue () {
        let zoomValue = 11.5
        if (this.viewport && this.viewport.dimension.width >= 720) zoomValue = 11.5
        if (this.viewport && this.viewport.dimension.width >= 960) zoomValue = 11.5
        return zoomValue
      }
    },

    metaDescription () {
      return this.classVenue.attributes.meta.description
    },

    metaKeywords () {
      return this.classVenue.attributes.meta.keywords
    },

    metaTitle () {
      return this.classVenue.attributes.meta.title
    },

    name: 'DocumentClassVenue'
  }
</script>
