<style lang="scss" scoped>
  .embedded-map {
    height: 100%;
    width: 100%;
  }
</style>

<template>
  <div class="embedded-map" ref="map"></div>
</template>

<script>
  let mapApiReady = false

  export default {

    data () {
      return {
        cache: {},
        map: null
      }
    },

    initialise ({ prop, store }) {
      let initialisation

      if (mapApiReady) initialisation = Promise.resolve()
      else {
        const script = document.createElement('script')

        script.src = `https://maps.googleapis.com/maps/api/js?key=${prop.apikey}&callback=googleMapsApiCallback`
        script.setAttribute('async', true)
        script.setAttribute('defer', true)

        initialisation = new Promise(resolve => {
          window.googleMapsApiCallback = () => {
            resolve()
            mapApiReady = true
            window.googleMapsApiCallback = undefined
          }
          document.body.appendChild(script)
        }).
        catch((error) => {
          throw new Error(error)
        })
      }

      return initialisation
    },

    methods: {
      initialise () {
        this.$initialisation.
          then(() => this.initialiseMap()).
          then(() => this.initialiseMarkers())
      },
      initialiseMap () {
        this.map = new google.maps.Map(this.$refs.map, {
          center: new google.maps.LatLng(this.latitude, this.longitude),
          disableDefaultUI: ! this.ui,
          gestureHandling: this.gestureHandling,
          zoom: this.zoom,
          zoomControl: this.zoomControl
        });
      },
      initialiseMarkers () {
        this.cache.markers = this.markers.map(({ coordinates }) => {
          new google.maps.Marker({
            icon: this.icon,
            map: this.map,
            position: {
              lat: coordinates.latitude,
              lng: coordinates.longitude
            }
          })
        })
      },
      setCenterValue () {
        if (this.map) this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude))
      },
      setZoomValue () {
        if (this.map) this.map.setZoom(this.zoom)
      }
    },

    name: 'EmbeddableMap',

    props: {
      apikey: {
        required: true,
        type: String
      },
      gestureHandling: {
        default: 'none',
        type: String
      },
      icon: {
        default: undefined,
        type: String
      },
      latitude: {
        required: true,
        type: Number
      },
      longitude: {
        required: true,
        type: Number
      },
      markers: {
        default () {
          return []
        },
        type: Array
      },
      ui: {
        default: false,
        type: Boolean
      },
      zoom: {
        default: 12,
        type: Number
      },
      zoomControl: {
        default: false,
        type: Boolean
      }
    },

    watch: {
      latitude () {
        this.setCenterValue()
      },
      longitude () {
        this.setCenterValue()
      },
      zoom () {
        this.setZoomValue()
      }
    }
  }
</script>
