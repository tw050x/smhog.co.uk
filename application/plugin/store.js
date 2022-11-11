import Vue from 'vue'
import Vuex from 'vuex'

export function createStore({ storeConfiguration }) {
  const { modules, state } = {
    ...{
      actions: {},
      getters: {},
      modules: {},
      mutations: {},
      state: {
        navigation: {
          menu: {
            main: {
              links: [
                {
                  location: { name: 'promotion.default' },
                  text: 'Home'
                },
                {
                  location: { name: 'class' },
                  text: 'Classes'
                },
                {
                  location: { name: 'about' },
                  text: 'About'
                },
                {
                  location: { name: 'user.enquire' },
                  text: 'Contact'
                }
              ]
            }
          }
        }
      }
    },
    ...storeConfiguration
  }

  return new Vuex.Store({
    modules,
    state
  })
}

Vue.use(Vuex)
