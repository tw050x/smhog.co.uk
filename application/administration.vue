<style src="@theme/reset.scss" lang="scss"></style>
<style src="@theme/typography.scss" lang="scss"></style>
<style src="@theme/global.scss" lang="scss"></style>
<style src="@theme/icon.scss" lang="scss"></style>

<style lang="scss" scoped>
  #application {
    font-size: 1rem;
  }

  .navigation-bar {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }
</style>

<template>
  <div id="application" :data-route="$route.name">

    <template v-if="$store.state.error.queue.length">
      <aside @click.capture="errorClickHandler">
        <component :is="errorQueue[ 0 ]" />
      </aside>
    </template>

    <!-- @todo: build intermediate loading template -->
    <template v-else-if="false">
      <aside>
        loading...
      </aside>
    </template>

    <template v-else>
      <main-brand />
      <navigation-bar class="navigation-bar" />
      <router-view />
    </template>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { sync } from 'vuex-router-sync'

  import NotFound from '@application/error/not-found'
  import Unknown from '@application/error/unknown'

  import MainBrand from '@application/component/custom/main-brand'
  import NavigationBar from '@application/component/custom/navigation-bar'

  import { createRouter } from '@application/route'
  import { createStore } from '@application/store'

  import { decode } from 'universal-base64'

  export const AdministrationContainer = {
    components: {
      MainBrand,
      NavigationBar,
      NotFound,
      Unknown
    },

    computed: {
      errorQueue () {
        return this.$store.state.error.queue.
          map(error => this.$options.components[this.$format(error, 'pascal')])
      }
    },

    methods: {
      errorClickHandler () {
        this.$router.replace({ name: 'promotion.default' })
        this.$store.commit('error/replaceQueue', { queue: this.$store.state.error.queue.slice(1) })
      }
    },

    name: 'AdministrationContainer'
  }

  export function construct (context) {
    const router = createRouter(context)
    const store = createStore(context)

    const vtree = new Vue({
      render: htmlify => htmlify(AdministrationContainer),
      router,
      store
    })

    const unsync = sync(store, router)

    return { vtree, router, store, unsync }
  }

  export default AdministrationContainer

  Vue.mixin({
    methods: {
      $decode: decode
    }
  })
</script>
