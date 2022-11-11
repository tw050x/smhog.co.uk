<template>
  <div class="home">

    <!-- introduction -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.promotion.data.attributes.section.introduction.heading }}</span>
        <span slot="h2">{{ $store.state.promotion.data.attributes.section.introduction.subheading }}</span>
      </section-heading>
      <section-paragraph v-for="content in $store.state.promotion.data.attributes.section.introduction.content" :key="content.slice(0, 31).trim().toLowerCase().replace(/\s+/g, '-')">
        <span>{{ content }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.promotion.data.attributes.section.introduction.links.length" :links="$store.state.promotion.data.attributes.section.introduction.links" />
    </section>

    <!-- drama classes -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.promotion.data.attributes.section.ourDramaClasses.heading }}</span>
        <span slot="h2">{{ $store.state.promotion.data.attributes.section.ourDramaClasses.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaClasses.content[0] }}</span>
      </section-paragraph>
      <section-break>
        <no-ssr>
          <grid-gallery-preview class="gallery-preview background" ref="dramaClassGalleryPreview" v-view="() => galleryPreviewInViewportHandler('dramaClassGalleryPreview')" :media="dramaClassMedia" />
          <carousel class="testimonials" ref="dramaClassesTestimonials" v-view="() => testimonialsInViewportHandler('dramaClassesTestimonials')">
            <cloak class="testimonial" v-for="testimonial in testimonials" v-slot="{ visible }" :key="testimonial.author.trim().toLowerCase().replace(/\s+/g, '-')">
              <transition enter-active-class="animated fade-in-up" enter-class="opacity-none" leave-active-class="animated fade-out-up" leave-to-class="opacity-none" name="drama-class-testimonial" :duration="1000">
                <div v-show="visible">
                  <span class="rating" v-if="testimonial.rating">
                    <i class="icon--star" v-for="star in testimonial.rating" :key="star" />
                  </span>
                  <span class="text" v-if="testimonial.text">{{ testimonial.text }}</span>
                  <span class="author" v-if="testimonial.author">{{ testimonial.author }}</span>
                  <span class="author" v-else>Anonymous</span>
                </div>
              </transition>
            </cloak>
          </carousel>
        </no-ssr>
      </section-break>
      <section-paragraph>
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaClasses.content[1] }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.promotion.data.attributes.section.ourDramaClasses.links.length" :links="$store.state.promotion.data.attributes.section.ourDramaClasses.links" />
    </section>

    <!-- drama class venues -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.promotion.data.attributes.section.ourDramaClassVenues.heading }}</span>
        <span slot="h2">{{ $store.state.promotion.data.attributes.section.ourDramaClassVenues.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaClassVenues.content[0] }}</span>
      </section-paragraph>
      <section-break reverse>
        <no-ssr>
          <embeddable-map class="map" icon="/asset/image/icon/map-pin.png" ref="map" v-view.once="() => $refs.map.initialise()" :apikey="$store.state.secret.google.map.api.key" :latitude="latitude" :longitude="longitude" :markers="venues.map(venue => ({ coordinates: venue.coordinates }))" :zoom="zoomValue" />
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
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaClassVenues.content[1] }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.promotion.data.attributes.section.ourDramaClassVenues.links.length" :links="$store.state.promotion.data.attributes.section.ourDramaClassVenues.links" />
    </section>

    <!-- drama class programmes -->
    <section class="section-content-padding">
      <section-heading>
        <span slot="h1">{{ $store.state.promotion.data.attributes.section.ourDramaProgrammes.heading }}</span>
        <span slot="h2">{{ $store.state.promotion.data.attributes.section.ourDramaProgrammes.subheading }}</span>
      </section-heading>
      <section-paragraph>
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaProgrammes.content[0] }}</span>
      </section-paragraph>
      <section-break>
        <no-ssr>
          <grid-gallery-preview class="gallery-preview background" ref="dramaProgrammeGalleryPreview" v-view="() => galleryPreviewInViewportHandler('dramaProgrammeGalleryPreview')" :media="dramaClassMedia" />
          <carousel class="testimonials" ref="dramaClassesTestimonials" v-view="() => testimonialsInViewportHandler('dramaClassesTestimonials')">
            <cloak class="testimonial" v-for="testimonial in testimonials" v-slot="{ visible }" :key="testimonial.author.trim().toLowerCase().replace(/\s+/g, '-')">
              <transition enter-class="opacity-none" enter-active-class="animated fade-in-up" leave-active-class="animated fade-out-up" leave-to-class="opacity-none" name="drama-class-testimonial" :duration="1000">
                <div v-show="visible">
                  <span class="rating" v-if="testimonial.rating">
                    <i class="icon--star" v-for="star in testimonial.rating" :key="star"></i>
                  </span>
                  <span class="text" v-if="testimonial.text">{{ testimonial.text }}</span>
                  <span class="author" v-if="testimonial.author">{{ testimonial.author }}</span>
                  <span class="author" v-else>Anonymous</span>
                </div>
              </transition>
            </cloak>
          </carousel>
        </no-ssr>
      </section-break>
      <section-paragraph>
        <span>{{ $store.state.promotion.data.attributes.section.ourDramaProgrammes.content[1] }}</span>
      </section-paragraph>
      <section-link-bar v-if="$store.state.promotion.data.attributes.section.ourDramaProgrammes.links.length" :links="$store.state.promotion.data.attributes.section.ourDramaProgrammes.links" />
    </section>
  </div>
</template>

<script>
  import GridGalleryPreview from '@application/feature/photo-gallery/component/grid-gallery-preview'

  import Card from '@application/component/card'
  import Carousel from '@application/component/carousel'
  import Cloak from '@application/component/cloak'
  import EmbeddableMap from '@application/component/embeddable-map'
  import NoSsr from '@application/component/no-ssr'
  import SectionBreak from '@application/component/section-break'
  import SectionHeading from '@application/component/section-heading'
  import SectionLinkBar from '@application/component/section-link-bar'
  import SectionParagraph from '@application/component/section-paragraph'

  export default {
    beforeMount () {
      this.$store.commit('breadcrumbs/set', {
        breadcrumbs: this.$store.state.promotion.data.attributes.meta.breadcrumbs,
        type: 'main'
      })
    },

    components: {
      Card,
      Carousel,
      Cloak,
      EmbeddableMap,
      GridGalleryPreview,
      NoSsr,
      SectionLinkBar,
      SectionBreak,
      SectionHeading,
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

      testimonials () {
        return [
          { author: 'Vee Walsh', rating: 5, text: null },
          { author: 'Rachel Dowd', rating: 5, text: 'It was excellent when I joined as a child and I can already see a difference in confidence in my daughter after just a few weeks of joining' },
          { author: 'Pa Ali Jobe', rating: 5, text: null },
          { author: 'Alan Kelly', rating: 5, text: 'Excellent for confidence and communication' },
          { author: 'Claire Donnelly', rating: 5, text: null }
        ]
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

    methods: {
      galleryPreviewInViewportHandler (ref) {
        if (this.$refs[ref].$el.classList.contains('view-in')) {
          if (! this.$refs[ref].initialised) this.$refs[ref].initialise()
          this.$refs[ref].activate()
        }
        else this.$refs[ref].deactivate()
      },
      testimonialsInViewportHandler (ref) {
        if (this.$refs[ref].$el.classList.contains('view-in')) {
          if (! this.$refs[ref].interval) this.$refs[ref].setInterval(5000)
        }
        else this.$refs[ref].clearInterval()
      }
    },

    name: 'DocumentPromotion'
  }
</script>
