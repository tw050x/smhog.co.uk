import { throttle } from 'throttle-debounce'

export default class ViewportPlugin {
  constructor () {
    this.viewport = {
      dimension: {
        height: null,
        width: null
      },
      offset: {
        x: null,
        y: null
      },
    }
  }

  addEventListeners () {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', throttle(100, () => this.viewport.dimension.height = window.innerHeight, true))
      window.addEventListener('resize', throttle(100, () => this.viewport.dimension.width = window.innerWidth, true))
      window.addEventListener('scroll', throttle(100, () => this.viewport.offset.x = window.pageXOffset, true))
      window.addEventListener('scroll', throttle(100, () => this.viewport.offset.y = window.pageYOffset, true))
    }
  }

  initialiseValues () {
    if (typeof window !== 'undefined') {
      this.viewport.dimension.height = window.innerHeight
      this.viewport.dimension.width = window.innerWidth
      this.viewport.offset.x = window.pageXOffset
      this.viewport.offset.y = window.pageYOffset
    }
  }

  install (Vue, options = { key: 'viewport' }) {
    const viewport = this.viewport

    Vue.mixin({
      data () {
        return {
          [ options.key ]: viewport
        }
      }
    })

    this.initialiseValues()
    this.addEventListeners()
  }
}
