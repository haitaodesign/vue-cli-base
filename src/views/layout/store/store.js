/*
 * @Author: lihaitao
 * @Date: 2018-12-19 11:44:55
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-08-20 10:18:16
 */
import { SET_COLLAPSE, SET_MENULIST, SET_BREADCRUMBDATA } from './mutation-types'
export default {
  namespaced: true,
  state: {
    isCollapse: false,
    menuList: [],
    breadcrumbData: []
  },
  getters: {
  },
  mutations: {
    [SET_COLLAPSE] (state, payload) {
      state.isCollapse = payload
    },
    [SET_MENULIST] (state, payload) {
      state.menuList = payload
    },
    [SET_BREADCRUMBDATA] (state, payload) {
      state.breadcrumbData = payload
    }
  },
  actions: {
    async getMenuList ({ commit }, payload) {
      try {
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
