import "@babel/polyfill"

import Vue from 'vue'
import VueAnalyticsPlugin from 'vue-analytics'
import VueCheckViewPlugin from 'vue-check-view'
import VueScrollPlugin from 'vue-scroll'

import ClampDirective from '@application/directive/clamp'

import { beforeMountMixin, beforeRouteUpdateMixin } from '@application/mixin/initialise'
import { clientMetaMountedMixin } from '@application/mixin/meta'
import ComponentMixin from '@application/mixin/component'
import FormatMixin from '@application/mixin/format'
import TimingMixin from '@application/mixin/timing'

import ViewportPlugin from '@application/plugin/viewport'

import '@application/filter/css'

import { constructMarketingApplication } from '@application/marketing'

import aboutRoutes from '@application/document/about/routes'
import aboutCurriculumRoutes from '@application/document/about-curriculum/routes'
import aboutProgrammeRoutes from '@application/document/about-programme/routes'
import aboutWhatWeDoRoutes from '@application/document/about-what-we-do/routes'
import aboutWhoWeAreRoutes from '@application/document/about-who-we-are/routes'
import classRoutes from '@application/document/class/routes'
import classVenueRoutes from '@application/document/class-venue/routes'
import classProgrammeRoutes from '@application/document/class-programme/routes'
import promotionRoutes from '@application/document/promotion/routes'
import userEnquireRoutes from '@application/document/user-enquire/routes'

// move these to component chunks
import AboutStore from '@application/document/about/store'
import AboutCurriculumStore from '@application/document/about-curriculum/store'
import AboutProgrammeStore from '@application/document/about-programme/store'
import AboutWhatWeDoStore from '@application/document/about-what-we-do/store'
import AboutWhoWeAreStore from '@application/document/about-who-we-are/store'
import ClassStore from '@application/document/class/store'
import ClassVenueStore from '@application/document/class-venue/store'
import ClassProgrammeStore from '@application/document/class-programme/store'
import PromotionStore from '@application/document/promotion/store'
import UserEnquireStore from '@application/document/user-enquire/store'

import * as SecretStore from '@application/store/secret'

Vue.config.errorHandler = function (error, vm, info) {
  vm.$store.commit('modals/queue', { modal: error })
}
Vue.config.productionTip = false

Vue.directive('clamp', ClampDirective)

Vue.mixin({
  beforeMount: beforeMountMixin,
  beforeRouteUpdate: beforeRouteUpdateMixin
})

Vue.mixin({
  mounted: clientMetaMountedMixin
})

const viewportPlugin = new ViewportPlugin()

Vue.mixin(ComponentMixin)
Vue.mixin(FormatMixin)
Vue.mixin(TimingMixin)
Vue.use(viewportPlugin)
Vue.use(VueAnalyticsPlugin, { id: 'UA-133956809-1' })
Vue.use(VueCheckViewPlugin)
Vue.use(VueScrollPlugin)


const { vtree, router, store } = constructMarketingApplication({
  routerConfiguration: {
    mode: 'history',
    routes: [
      ...aboutRoutes,
      ...aboutCurriculumRoutes,
      ...aboutProgrammeRoutes,
      ...aboutWhatWeDoRoutes,
      ...aboutWhoWeAreRoutes,
      ...classRoutes,
      ...classVenueRoutes,
      ...classProgrammeRoutes,
      ...promotionRoutes,
      ...userEnquireRoutes
    ]
  },
  storeConfiguration: {
    modules: {
      about: AboutStore,
      aboutCurriculum: AboutCurriculumStore,
      aboutProgramme: AboutProgrammeStore,
      aboutWhatWeDo: AboutWhatWeDoStore,
      aboutWhoWeAre: AboutWhoWeAreStore,
      breadcrumbs: {
        mutations: {
          set (state, payload) {
            if (payload.breadcrumbs instanceof Array) state[payload.type] = payload.breadcrumbs
            else throw new Error('breadcrumbs must be an instance of Array')
          }
        },
        namespaced: true,
        state () {
          return {
            main: []
          }
        }
      },
      class: ClassStore,
      classVenue: ClassVenueStore,
      classProgramme: ClassProgrammeStore,
      modals: {
        mutations: {
          clear (state, first) {
            state.queue = first ? state.queue.slice(1) : []
          },
          queue (state, { modal }) {
            state.queue = [ ...state.queue, modal ]
          }
        },
        namespaced: true,
        state: {
          queue: []
        }
      },
      promotion: PromotionStore,
      secret: SecretStore,
      userEnquire: UserEnquireStore
    }
  }
})

router.beforeEach((to, from, next) => {
  try {
    if (to.matched.length === 0) throw new Error('not-found')
    else next()
  }

  catch (error) {
    next(error)
  }
})

router.onError((error) => {

  let modal

  switch (error.message) {
  case 'not-found' :
    modal = {
      message: {
        debug: error.message,
        friendly: 'We have been unable to find the page you requested, please try again later.'
      },
      title: 'Page Not Found Error',
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

  store.commit('modals/queue', {
    modal
  })
})
router.onReady(() => vtree.$mount('#application'))

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
