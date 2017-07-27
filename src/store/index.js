import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
// import * as actions from './actions'
// import * as getters from './getters'

import ui from './ui'
Vue.use(Vuex)
// window.za_app.depend.Vuex = Vuex

const store = new Vuex.Store({
  // actions,
  // getters,
  state: {
  },
  modules: {
    ui
  },
  actions: {
    getStore ({ commit, state }, bool) {
      commit(types.LOADIND_STORE)
    },
    setStore ({ commit, state }) {
      commit(types.SET_STORE)
    }
  },
  mutations: {
    [types.LOADIND_STORE] (state) {
      if (sessionStorage) {
        let s = JSON.parse(sessionStorage.getItem("key"))
        if (!s) return
        let b = Object.keys(state)
        b.map(function (v, i, arr) {
          state[v] = s[v]
        })
      }
    },
    [types.SET_STORE] (state) {
      if (sessionStorage) {
        sessionStorage.setItem("key", JSON.stringify(state))
      }
    }
  },
  strict: false,
  plugins: []
})

export default store
