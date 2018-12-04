let state = {

}

let getters = {}
for (let key in state) {
  getters[key] = state => state[key]
}


const actions = {
  updateManager({
    commit,
    state
  }, manager) {
    commit('updateManager', manager)
  },
}

const mutations = {
  updateManager(state, manager) {
    state.manager = manager
  },
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
