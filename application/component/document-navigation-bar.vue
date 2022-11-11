<style lang="scss" scoped>
  // position
  .navigation-bar {
    background: #f5f5f5;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    position: absolute;
    user-select: none;
    z-index: 1000;

    &.fixed {
      position: fixed;
    }

    &.bottom,
    &.top {
      left: 0;
      right: 0;
    }
    &.top {
      top: 0;
    }
    &.bottom {
      bottom: 0;
    }
  }
</style>

<style lang="scss" scoped>
  // menu icon
  .navigation-bar {
    .menu-container {
      display: flex;
      flex-direction: row;
      font-size: 1em;
      z-index: 1100;
    }

    .menu-container .menu-activator {
      color: lighten(black, 40%);
      text-align: center;
      padding: 1em 0;
      text-decoration: none;
      width: 3em;
    }
    .menu-container .menu-activator:hover,
    .menu-container .menu-activator.active {
      color: lighten(black, 50%);
    }
    @media (hover:hover) {
      .menu-container .menu-activator:hover {
        background: white;
        box-shadow: -5px 0 15px 0 lighten(black, 60%);
      }
    }
    .menu-container .menu-activator.active {
      background: white;
      box-shadow: -5px 0 15px 0 lighten(black, 60%);
    }

    .menu-container .drop-menu {
      box-shadow: 2px 3px 10px -6px lighten(black, 60%);
      left: 0;
      position: absolute;
      text-align: center;
      top: 3em;
      width: 100%;
      height: calc(100vh - 3em);
    }

    @media all and (min-width: 640px) {
      .menu-container .drop-menu {
        box-shadow: 2px 3px 10px -6px lighten(black, 60%);
        left: 0;
        position: absolute;
        top: 3em;
        width: auto;
        height: auto;
      }
    }
  }
</style>

<style lang="scss" scoped>
  // breadcrumbs
  nav.navigation-breadcrumbs {
    color: lighten(black, 60%);
    display: flex;
    font-size: 1rem;
    padding: 0 0 0 1em;
    user-select: none;
  }

  nav.navigation-breadcrumbs div {
    padding: 0 0.5em 0 0;
    &:not(:first-child):before {
      content: "/";
      padding: 0 0.5em 0 0;
    }
  }

  nav.navigation-breadcrumbs a.breadcrumb {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: lighten(black, 40%);
    }
  }
</style>

<style lang="scss" scoped>
  // breadcrumbs
  .navigation-bar {
    .breadcrumbs-container {
      display: none;
      @media (min-width: 960px) { display: flex; }
      flex-direction: column;
      justify-content: center;
      margin-right: auto;
    }
  }
</style>

<style lang="scss" scoped>
  // quick-links
  .navigation-bar {
    .quick-links {
      display: none;
      @media (min-width: 640px) { display: flex; }
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      padding: 0 1em 0 0;
      a {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  nav.navigation-menu {
    align-items: flex-start;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 100%;
    padding-top: 8rem;

    .menu-link {
      color: #000000;
      line-height: 3rem;
      padding: 0 1rem;
      text-align: left;
      text-decoration: none;
      width: 100%;

      &:hover {
        background: #eeeeee;
      }

      &:not(:last-child) {
        border-bottom: 1px solid lighten(#000000, 90%);
      }
    }
  }

  @media all and (min-width: 640px) {
    nav.navigation-menu {
      padding-top: 0;
    }
  }
</style>

<template>
  <div class="navigation-bar" :class="{ fixed, [position]: position }" :style="style">
    <div class="menu-container" @click.prevent="handleMenuClick" @mouseleave.prevent="handleMenuMouseleave" @mouseover.prevent="handleMenuMouseover" @tap.prevent="handleMenuTap">
      <a class="menu-activator" href="#" :class="{ active: menuIsActive }">
        <i class="icon--menu" />
      </a>
      <div class="drop-menu" ref="dropMenu" v-if="menuIsActive">
        <nav class="navigation-menu">
          <template v-for="(link, index) in menu.links">
            <a class="menu-link" :href="$router.resolve(link.location).href" :key="index" @click.prevent="routeTo(link.location)" @tap.prevent="routeTo(link.location)">
              {{ link.text }}
            </a>
          </template>
        </nav>
      </div>
    </div>
    <div class="breadcrumbs-container">
      <nav class="navigation-breadcrumbs">
        <template v-for="(breadcrumb, index) in breadcrumbs">
          <div :key="index">
            <span v-if="index === (breadcrumbs.length - 1)">{{ breadcrumb.text }}</span>
            <a class="breadcrumb" v-else :href="$router.resolve(breadcrumb.location).href" @click.prevent="routeTo(breadcrumb.location)" @tap.prevent="routeTo(breadcrumb.location)">{{ breadcrumb.text }}</a>
          </div>
        </template>
      </nav>
    </div>
    <div class="quick-links" v-if="quicklinks.length">
      <template v-if="$route.matched.filter(route => route.name === link.location.name).length">
        <div v-for="(link, index) in quicklinks" :key="index">
          <a :href="$router.resolve(link.location).href" @click="routeTo(link.location)" @tap="routeTo(link.location)">{{ link.text }}</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      style () {
        return `${this.position}: ${this.offset}px`
      }
    },

    data () {
      return {
        menuIsActive: false
      }
    },

    methods: {
      handleMenuClick () {
        this.menuIsActive ? this.hideMenu() : this.showMenu()
      },
      handleMenuMouseleave () {
        this.hideMenu()
      },
      handleMenuMouseover () {
        this.showMenu()
      },
      handleMenuTap (element) {
        this.menuIsActive ? this.hideMenu() : this.showMenu()
      },
      showMenu () {
        this.menuIsActive = true
      },
      hideMenu () {
        this.menuIsActive = false
      },
      routeTo (location) {
        this.$router.push(location)
      }
    },

    name: 'DocumentNavigationBar',

    props: {
      breadcrumbs: {
        default () {
          return []
        },
        type: Array
      },

      fixed: {
        default: false,
        type: Boolean
      },

      menu: {
        required: true,
        type: Object
      },

      offset: {
        default: 0,
        type: Number
      },

      position: {
        default: 'top',
        type: String
      },

      quicklinks: {
        default () {
          return []
        },
        type: Array
      }
    }
  }
</script>
