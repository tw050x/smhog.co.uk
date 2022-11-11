import ResizeObserver from 'resize-observer-polyfill'
import { throttle } from 'throttle-debounce'

export default {
  beforeDestroy () {
    this.dom.observer.unobserve(this.$el)
  },

  data () {
    return {
      component: {
        dimension: {
          height: null,
          width: null
        },
        observer: null,
        offset: {
          x: null,
          y: null
        }
      },
      dom: {
        observer: null
      }
    }
  },

  methods: {
    $updateComponentDimensions () {
      this.component.dimension.height = this.$el.offsetHeight
      this.component.dimension.width = this.$el.offsetWidth
    },
    $updateComponentData () {
      this.$updateComponentDimensions()
      this.$updateComponentOffset()
    },
    $updateComponentOffset () {
      this.component.offset.x = this.$el.offsetTop
      this.component.offset.y = this.$el.offsetLeft
    }
  },

  mounted () {
    this.dom.observer = new ResizeObserver(throttle(100, (mutations) => this.$updateComponentData()))
    this.dom.observer.observe(this.$el)
    this.$updateComponentDimensions()
    this.$updateComponentOffset()
  }
}
