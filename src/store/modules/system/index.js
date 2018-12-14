import { SET_COLLAPSE } from './mutation-types'
export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  getters: {
  },
  mutations: {
    [SET_COLLAPSE] (state, payload) {
      state.isCollapse = payload
    }
  },
  actions: {
  }
}
