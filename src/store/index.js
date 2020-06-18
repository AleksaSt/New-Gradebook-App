import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { GradebooksStore } from './GradebooksStore'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthStore,
    GradebooksStore
  }
})

export default store
