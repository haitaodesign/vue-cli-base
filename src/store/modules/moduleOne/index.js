import { SET_LIST } from './mutation-types'
export default {
  namespaced: true,
  state: {
    list: ['module1']
  },
  getters: {
  },
  mutations: {
    [SET_LIST] (state, payload) {
      state.list = payload
    }
  },
  actions: {
  }
}
