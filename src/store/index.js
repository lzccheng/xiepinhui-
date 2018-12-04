import Vue from 'vue'
import Vuex from 'vuex'

const state = require('./State')
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state
  }
})
