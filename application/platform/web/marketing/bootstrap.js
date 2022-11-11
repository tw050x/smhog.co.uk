import Vue from 'vue'

import { constructMarketingApplication } from '@application/marketing'

import { serverMetaCreatedMixin } from '@application/mixin/meta'
import FormatMixin from '@application/mixin/format'
import TimingMixin from '@application/mixin/timing'

import '@application/filter/css'

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

Vue.mixin({
  created: serverMetaCreatedMixin,
})

Vue.mixin(FormatMixin)
Vue.mixin(TimingMixin)

export default async function bootstrap (context) {
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
            clear (state) {
              state.queue = []
            },
            queue (state, { modal }) {
              state.queue = [ ...state.queue, modal ]
            }
          },
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

  router.push(context.url)

  const matchedComponents = await new Promise(resolve => router.onReady(() => resolve(router.getMatchedComponents())))

  if (matchedComponents.length) await new Promise.
  all(matchedComponents.map(component => {
    let initialisation

    if (component && component.initialise) {
      initialisation = component.initialise({
        route: router.currentRoute,
        store
      })
    }

    else {
      initialisation = Promise.resolve()
    }

    return initialisation
  }))
  else throw new Error('not-found')

  context.state = store.state

  return vtree
}
