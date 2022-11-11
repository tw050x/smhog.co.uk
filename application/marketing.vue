<style lang="scss" src="@application/theme/layout.scss"></style>

<style lang="scss" src="@application/theme/reset.scss"></style>

<style lang="scss" src="@application/theme/animation.scss"></style>
<style lang="scss" src="@application/theme/animation/bounce.scss"></style>
<style lang="scss" src="@application/theme/animation/fade-in.scss"></style>
<style lang="scss" src="@application/theme/animation/fade-in-up.scss"></style>
<style lang="scss" src="@application/theme/animation/fade-out.scss"></style>
<style lang="scss" src="@application/theme/animation/fade-out-up.scss"></style>
<style lang="scss" src="@application/theme/animation/halfFadeIn.scss"></style>
<style lang="scss" src="@application/theme/animation/halfFadeOut.scss"></style>
<style lang="scss" src="@application/theme/animation/pulse.scss"></style>
<style lang="scss" src="@application/theme/animation/zoomIn.scss"></style>
<style lang="scss" src="@application/theme/animation/zoomOut.scss"></style>

<style lang="scss" src="@application/theme/component/brand-tapestry.scss"></style>
<style lang="scss" src="@application/theme/component/call-to-action-bar.scss"></style>
<style lang="scss" src="@application/theme/component/card.scss"></style>
<style lang="scss" src="@application/theme/component/form-input.scss"></style>
<style lang="scss" src="@application/theme/component/form-submit.scss"></style>
<style lang="scss" src="@application/theme/component/form-textarea.scss"></style>
<style lang="scss" src="@application/theme/component/gallery-preview.scss"></style>
<style lang="scss" src="@application/theme/component/heading.scss"></style>
<style lang="scss" src="@application/theme/component/link-bar.scss"></style>
<style lang="scss" src="@application/theme/component/modal-collection.scss"></style>
<style lang="scss" src="@application/theme/component/navigation-bar.scss"></style>
<style lang="scss" src="@application/theme/component/paragraph.scss"></style>

<style lang="scss" src="@application/theme/feature/class.scss"></style>
<style lang="scss" src="@application/theme/feature/photo-gallery.scss"></style>
<style lang="scss" src="@application/theme/feature/user-enquire.scss"></style>

<style lang="scss" src="@application/theme/form.scss"></style>

<style lang="scss" src="@application/theme/icon.scss"></style>

<style lang="scss" src="@application/theme/section.scss"></style>
<style lang="scss" src="@application/theme/section/break.scss"></style>
<style lang="scss" src="@application/theme/section/break/testimonial.scss"></style>
<style lang="scss" src="@application/theme/section/break/venue.scss"></style>

<style lang="scss" src="@application/theme/transition.scss"></style>
<style lang="scss" src="@application/theme/typography.scss"></style>

<template>
  <div id="application" :data-route="$route.name">

    <document-call-to-action-bar />
    <document-navigation-bar position="top" :breadcrumbs="$store.state.breadcrumbs.main" :fixed="navigationBarFixed" :menu="$store.state.navigation.menu.main" :offset="navigationBarFixed ? 0 : topOffset" />
    <document-brand-tapestry :class="{ [viewport.scroll.direction]: viewport.scroll.active, fixed: brandTaptestryFixed }" :offset="brandTaptestryFixed ? 0 : topOffset" />

    <main>
      <transition enter-class="opacity-none" enter-active-class="animated faster fade-in" leave-active-class="animated faster fade-out" mode="out-in" name="route-transition" :duration="500" @after-leave="$root.$emit('triggerScroll')">
        <router-view class="hero-route" name="hero" />
        <router-view class="main-route" />
        <router-view class="follow-route" name="follow" />
      </transition>
    </main>

    <document-footer />

    <document-modal-collection v-if="$store.state.modals.queue.length" :modals="$store.state.modals.queue" @clear="$store.commit('modals/clear', true)" />
  </div>
</template>

<script>
  import Vue from 'vue'

  import '@application/plugin/validate'

  import DocumentBrandTapestry from '@application/component/document-brand-tapestry'
  import DocumentCallToActionBar from '@application/component/document-call-to-action-bar'
  import DocumentFooter from '@application/component/document-footer'
  import DocumentModalCollection from '@application/component/document-modal-collection'
  import DocumentNavigationBar from '@application/component/document-navigation-bar'

  import { createRouter } from '@application/plugin/router'
  import { createStore } from '@application/plugin/store'

  import { decode } from 'universal-base64'

  export const MarketingContainerSpecification = {
    beforeDestroy () {
      window.removeEventListener('backbutton', () => this.$store.commit('modals/clear'))
      window.removeEventListener('popstate', () => this.$store.commit('modals/clear'))
      window.removeEventListener('scroll', this.throttle(100, () => this.navigationBarFixed = this.brandTaptestryFixed = this.viewport.offset.y > this.topOffset))
    },

    components: {
      DocumentBrandTapestry,
      DocumentCallToActionBar,
      DocumentFooter,
      DocumentModalCollection,
      DocumentNavigationBar
    },

    data () {
      return {
        brandTaptestryFixed: false,
        navigationBarFixed: false,
        topOffset: 35,
        viewport: {
          scroll: {
            active: false,
            direction: null
          }
        }
      }
    },

    errorCaptured (error, vm, info) {
      console.log("error captured:", error)

      let modal

      switch (error.message) {
      case 'not-found' :
        modal = {
          message: {
            debug: error,
            friendly: 'We have been unable to find the page you requested, please try again later.'
          },
          title: 'Page Not Found',
          type: 'error'
        }
        break
      default :
        modal = {
          message: {
            debug: error.message,
            friendly: 'An error occured that cannot be understood by the system, please try again later.'
          },
          title: 'Unknown Error',
          type: 'error'
        }
      }

      this.$store.commit('modals/queue', {
        modal
      })
    },

    mounted () {
      window.addEventListener('backbutton', () => this.$store.commit('modals/clear'))
      window.addEventListener('popstate', () => this.$store.commit('modals/clear'))
      window.addEventListener('scroll', this.throttle(100, () => this.navigationBarFixed = this.brandTaptestryFixed = this.viewport.offset.y > this.topOffset))
      this.navigationBarFixed = this.brandTaptestryFixed = this.viewport.offset.y > this.topOffset
    },

    name: 'MarketingApplication'
  }

  export function constructMarketingApplication (context) {
    const router = createRouter(context)
    const store = createStore(context)

    const vtree = new Vue({
      render: htmlify => htmlify(MarketingContainerSpecification),
      router,
      store
    })

    return { vtree, router, store }
  }

  export default MarketingContainerSpecification


  Vue.mixin({
    methods: {
      $decode: decode
    }
  })
</script>
