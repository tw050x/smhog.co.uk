<style lang="scss" scoped>
  div.map div.map-float-positioner {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  div.map .map-float {
    background: #ffffff;
    box-shadow: 0 0 5px 0 #a7a7a7;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 960px) { flex-direction: row; }
    margin-bottom: -18rem;
    @media screen and (min-width: 960px) { margin-bottom: -11rem; }
    max-width: 360px;
    @media screen and (min-width: 960px) { max-width: 1000px; }
    padding: 2rem;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    transform: translateY(-50%);
    width: calc(100% - 6rem);
    z-index: 100;

    &:focus,
    &:hover {
      box-shadow: 0 5px 15px 0 #a7a7a7;
      transform: scale(1.025) translateY(-50%);
    }
  }

  div.map div.map-float > div {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 960px) { flex-direction: row; }
    line-height: 1.8;
    text-align: center;
    width: 100%;
    @media screen and (min-width: 960px) { width: 50%; }

    &.class-locator {
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      padding: 0.5rem 0 2rem;
      @media screen and (min-width: 960px) { padding: 0.5rem 0 0.5rem; }
    }
    &.location-links {
      flex-wrap: wrap;
      padding: 0.5rem 0;
    }

    &.location-links .location-link {
      background: #fefefe;
      border: 2px solid #000000;
      box-sizing: border-box;
      color: #000000;
      margin: 0.5rem auto;
      @media screen and (min-width: 960px) { margin: 1rem 2rem; }
      padding: 0.5rem;
      text-decoration: none;
      width: 75%;
      @media screen and (min-width: 960px) { width: calc(50% - 4rem); }

      &:first-child {
        margin-top: 2rem;
        @media screen and (min-width: 960px) { margin-top: 1rem; }
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid black;
    }

    @media screen and (min-width: 960px) {
      &:first-child {
        padding-right: 2rem;
      }

      &:last-child {
        padding-left: 2rem;
      }

      &:not(:last-child) {
        border-bottom: none;
        border-right: 1px solid black;
        padding-right: 2rem;
      }
    }
  }
</style>

<template>
  <div class="classes">
    <section class="section-content-padding" id="ourClasses">
      <section-heading>
        <span slot="h1">{{ $store.state.class.data.attributes.section.ourClasses.heading }}</span>
        <span slot="h2">{{ $store.state.class.data.attributes.section.ourClasses.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ $store.state.class.data.attributes.section.ourClasses.content[0] }}</span>
      </section-paragraph>
      <section-break>
        <no-ssr>
          <grid-gallery-preview class="gallery-preview" ref="classesIntroFeatureElement" v-view.once="() => $refs.classesIntroFeatureElement.initialise()" :media="dramaClassMedia" />
        </no-ssr>
      </section-break>
      <section-paragraph>
        <span>{{ $store.state.class.data.attributes.section.ourClasses.content[1] }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.class.data.attributes.section.ourClasses.links.length" :links="$store.state.class.data.attributes.section.ourClasses.links" />
    </section>

    <section class="section-content-padding" id="venuesAcrossSouthManchester">
      <section-heading>
        <span slot="h1">{{ $store.state.class.data.attributes.section.venuesAcrossSouthManchester.heading }}</span>
        <span slot="h2">{{ $store.state.class.data.attributes.section.venuesAcrossSouthManchester.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ $store.state.class.data.attributes.section.venuesAcrossSouthManchester.content[0] }}</span>
      </section-paragraph>
      <section-break reverse>
        <no-ssr>
          <embeddable-map class="map" icon="/asset/image/icon/map-pin.png" ref="map" v-view.once="() => $refs.map.initialise()" :apikey="$store.state.secret.google.map.api.key" :class="{ medium: viewport && viewport.dimension.width > 639 }" :latitude="latitude" :longitude="longitude" :markers="venues.map(venue => ({ coordinates: venue.coordinates }))" :zoom="zoomValue" />
          <card>
            <h2>Find Your Class</h2>
            <p>Our drama classes are located around southern Manchester - find your class:</p>
            <ul>
              <li v-for="venue of venues" :key="venue.text">
                <router-link :href="$router.resolve(venue.location).href" :to="venue.location">
                  {{ venue.text }}
                </router-link>
              </li>
            </ul>
          </card>
        </no-ssr>
      </section-break>
      <section-paragraph>
        <span>{{ $store.state.class.data.attributes.section.venuesAcrossSouthManchester.content[1] }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.class.data.attributes.section.venuesAcrossSouthManchester.links.length" :links="$store.state.class.data.attributes.section.venuesAcrossSouthManchester.links" />
    </section>
  </div>
</template>

<script>
  import GridGalleryPreview from '@application/feature/photo-gallery/component/grid-gallery-preview'

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
        breadcrumbs: this.$store.state.class.data.attributes.meta.breadcrumbs,
        type: 'main'
      })
    },

    components: {
      Card,
      EmbeddableMap,
      GridGalleryPreview,
      NoSsr,
      SectionBreak,
      SectionHeading,
      SectionLinkBar,
      SectionParagraph
    },

    computed: {
      dramaClassMedia () {
        let media = {
          images: this.$store.state.promotion.included.filter(included => included.type === 'image'),
          ratio: {
            height: 9,
            width: 16
          },
          scale: {
            small: 8,
            medium: 12,
            large: 16
          }
        }

        return media
      },

      latitude () {
        let latitude = 53.24
        if (this.component && this.component.dimension.width >= 720) latitude = 53.45
        return latitude
      },

      longitude () {
        let longitude = -2.26
        if (this.component && this.component.dimension.width >= 720) longitude = -2.40
        if (this.component && this.component.dimension.width >= 960) longitude = -2.44
        if (this.component && this.component.dimension.width >= 1280) longitude = -2.48
        if (this.component && this.component.dimension.width >= 1600) longitude = -2.52
        if (this.component && this.component.dimension.width >= 1920) longitude = -2.56
        return longitude
      },

      venues () {
        return this.$store.state.classVenue.data.map((venue) => ({
          coordinates: venue.attributes.coordinates,
          location: venue.attributes.location,
          text: venue.attributes.text
        }))
      },

      zoomValue () {
        let zoomValue = 10.25
        if (this.viewport && this.viewport.dimension.width >= 720) zoomValue = 10.5
        if (this.viewport && this.viewport.dimension.width >= 960) zoomValue = 11
        if (this.viewport && this.viewport.dimension.width >= 1280) zoomValue = 11.5
        return zoomValue
      }
    },

    metaDescription () {
      return this.$store.state.promotion.data.attributes.meta.description
    },

    metaKeywords () {
      return this.$store.state.promotion.data.attributes.meta.keywords
    },

    metaTitle () {
      return this.$store.state.promotion.data.attributes.meta.title
    },

    name: 'DocumentClasses'
  }
</script>
