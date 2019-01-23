import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      async fetchItem ({commit}, id) {
        let val = id + 1
        
        console.log(val, '=val')
        commit('setItem', val)
      }
    },
    mutations: {
      setItem (state, id) {
        Vue.set(state.items, 'id', id)
      }
    }
  })
}
