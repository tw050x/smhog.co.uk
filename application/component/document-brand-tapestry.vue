<style lang="scss" scoped>
  div.brand-tapestry {
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    z-index: 2000;

    &.fixed {
      position: fixed;
    }

    div.tapestry-end-shadow {
      height: 115px;
      width: 125px;

      &:after, &:before {
        background: transparent;
        content: "";
        height: 1px;
        position: absolute;
        top: calc(100% + 25px);
        width: 57.5px;
      }
      &:after {
        animation: tapestry-end-left-shadow 16s cubic-bezier(.46,.03,.52,.96) both infinite;
        box-shadow: 0px 0px 20px 1px #000000;
        right: 50%;
        transform: rotate(-13.5deg);
      }
      &:before {
        animation: tapestry-end-right-shadow 16s cubic-bezier(.46,.03,.52,.96) both infinite;
        box-shadow: 0 0px 20px 1px #000000;
        left: 50%;
        transform: rotate(13.5deg);
      }
    }

    div.tapestry {
      cursor: pointer;
      height: 115px;
      position: absolute;
      transition: width 0.2s ease-in-out;
      width: 100px;
      z-index: 2000;

      &.tapestry-shadow:after {
        animation: tapestry-shadow 16s cubic-bezier(.46,.03,.52,.96) both infinite;
        box-shadow: 0px 0px 20px 1px #000000;
        content: "";
        transform: translateZ(-100px);
        display: block;
        background: transparent;
        left: 0;
        height: 130px;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        z-index: 1000;
      }

      div.tapestry-block {
        animation: tapesty-wind 16s cubic-bezier(.46,.03,.52,.96) both infinite;
        background: #fff;
        background-image: url('/asset/image/brand/global.png');
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100%;
        display: block;
        height: 25px;
        position: absolute;
        top: -1px;
        transform: translateZ(100px);
        transform-origin: 100% 0;
        transform-style: preserve-3d;
        transition: background-position 0.2s ease-in-out, height 0.2s ease-in-out;
        width: 100%;
        z-index: 2000;

        div.tapestry-block {
          top: calc(100% - 1px);
        }

        &.top-middle { background-position: 0 -24px; }
        &.middle { background-position: 0 -48px; }
        &.bottom-middle { background-position: 0 -72px; }
        &.bottom {
          background-position: 0 -96px;
          &:after {
            border-style: solid;
            border-width: 0 62.5px 20px 62.5px;
            border-color: #ffffff #ffffff transparent #ffffff;
            content: "";
            height: 0;
            position: absolute;
            top: calc(100% - 1px);
            width: 0;
          }
        }
      }
    }

    // @media (min-width: 640px) {
      div.tapestry {
        width: 125px;

        div.tapestry-block {
          height: 30px;

          &.top-middle { background-position: 0 -29px; }
          &.middle { background-position: 0 -58px; }
          &.bottom-middle { background-position: 0 -87px; }
          &.bottom { background-position: 0 -116px; }

          div.tapestry-block.bottom:before {
            border-width: 0 62.5px 18.75px 62.5px;
          }
        }
      }
    // }
  }
</style>

<style lang="scss">
  @keyframes tapestry-shadow {
    0% {
      height: 135px;
    }
    50% {
      height: 135px;
    }
    75% {
      height: 115px;
    }
    100% {
      height: 135px;
    }
  }
  @keyframes tapestry-end-left-shadow {
    0% {
      top: calc(100% + 30px);
      transform: rotate(-13.5deg);
    }
    50% {
      top: calc(100% + 30px);
      transform: rotate(-13.5deg);
    }
    75% {
      top: calc(100% + 15px);
      transform: rotate(-6.5deg);
    }
    100% {
      top: calc(100% + 30px);
      transform: rotate(-13.5deg);
    }
  }
  @keyframes tapestry-end-right-shadow {
    0% {
      top: calc(100% + 30px);
      transform: rotate(13.5deg);
    }
    50% {
      top: calc(100% + 30px);
      transform: rotate(13.5deg);
    }
    75% {
      top: calc(100% + 15px);
      transform: rotate(14.5deg);
    }
    100% {
      top: calc(100% + 30px);
      transform: rotate(13.5deg);
    }
  }
  @keyframes tapesty-wind {
    0% {
      transform: rotateX(0);
    }
    50% {
      transform: rotateX(0);
    }
    75% {
      transform: rotateX(-8deg) rotateY(-2deg);
    }
    100% {
      transform: rotateX(0);
    }
  }
</style>

<template>
  <div class="brand-tapestry" :style="style">
    <router-link :to="{ name: 'promotion.default' }">
      <div class="tapestry-end-shadow">
        <div class="tapestry tapestry-shadow">
          <div class="tapestry-block top">
            <div class="tapestry-block top-middle">
              <div class="tapestry-block middle">
                <div class="tapestry-block bottom-middle">
                  <div class="tapestry-block bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    beforeDestroy () {
      if (window) window.removeEventListener('scroll', this.debounce(750, false, this.disableScrollActiveEventListener))
      if (window) window.removeEventListener('scroll', this.throttle(100, true, this.enableScrollActiveEventListener, true))
    },

    computed: {
      style () {
        return this.offset ? `top: ${this.offset}px` : ''
      }
    },

    data () {
      return {
        viewport: {
          scroll: {
            active: false,
            direction: null
          }
        }
      }
    },

    methods: {
      enableScrollActiveEventListener () {
        this.viewport.scroll.active = true
        if (this.viewport.offset.y < window.pageYOffset) this.viewport.scroll.direction = 'downward'
        else if (this.viewport.offset.y > window.pageYOffset) this.viewport.scroll.direction = 'upward'
        else {
          this.viewport.scroll.active = false
          this.viewport.scroll.direction = null
        }
        this.viewport.offset.y = window.pageYOffset
      },
      disableScrollActiveEventListener () {
        this.viewport.scroll.active = false
        this.viewport.scroll.direction = null
      },
    },

    mounted () {
      if (window) window.addEventListener('scroll', this.debounce(750, false, this.disableScrollActiveEventListener))
      if (window) window.addEventListener('scroll', this.throttle(100, true, this.enableScrollActiveEventListener, true))
    },

    name: 'DocumentBrandTapestry',

    props: {
      offset: {
        default: 0,
        type: Number
      }
    }
  }
</script>
