<template>
  <div class="carousel">
    <slot :activeIndex="activeIndex" :frames="frames" :interval="interval" :nextFrame="nextFrame" :previousFrame="previousFrame" :setInterval="setInterval" />
  </div>
</template>

<script>
  export default {
    beforeDestroy () {
      if (this.interval) this.clearInterval()
    },

    computed: {
      frames () {
        return this.$children
      },
      nextIndex () {
        const nextIndex = this.activeIndex + 1;
        return nextIndex <= this.frames.length - 1 ? nextIndex : 0;
      },
      previousIndex () {
        const prevIndex = this.activeIndex - 1;
        return prevIndex >= 0 ? prevIndex : this.frames.length - 1;
      }
    },

    data () {
      return {
        activeIndex: 0,
        interval: null
      }
    },

    methods: {
      clearInterval () {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      nextFrame () {
        this.setIndex(this.nextIndex)
      },
      previousFrame () {
        this.setIndex(this.prevIndex)
      },
      setIndex (index) {
        this.frames[this.activeIndex].hide()
        this.frames[index].show()
        this.activeIndex = index
      },
      setInterval (delay) {
        if (! this.interval) this.interval = setInterval(() => this.setIndex(this.nextIndex), delay)
      }
    },

    mounted () {
      this.setIndex(this.activeIndex);
    },

    name: 'Carousel'
  }
</script>
