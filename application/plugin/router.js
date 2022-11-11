import Vue from 'vue'
import VueRouter from 'vue-router'

export function createRouter ({ routerConfiguration }) {
  const router =  new VueRouter({
    ...{
      mode: 'history',
      routes: [],
      scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve) => {
          const position = savedPosition || { x: 0, y: 0 }
          if ( ! savedPosition ) {
            if (to.hash) {
              position.selector = to.hash
              position.offset = { y: 90 }
            }
          }
          return to.path === from.path ? resolve(position) : router.app.$root.$once('triggerScroll', () => router.app.$nextTick(() => resolve(position)))
        })
      }
    },
    ...routerConfiguration
  })
  return router
}

Vue.use(VueRouter)
