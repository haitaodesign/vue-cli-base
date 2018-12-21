/*
 * @Author: lihaitao
 * @Date: 2018-12-19 11:44:55
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-20 16:21:56
 */
import { SET_COLLAPSE, SET_MENULIST, SET_BREADCRUMBDATA } from './mutation-types'
import SystemApi from '../../../api/system.js'
const systemApi = new SystemApi()
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
        const res = await systemApi.getMenuList()
        const data = res.data
        commit('SET_MENULIST', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
