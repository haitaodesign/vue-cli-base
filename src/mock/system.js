/*
 * @Author: lihaitao
 * @Date: 2018-12-19 10:54:03
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-21 14:51:46
 * @description 系统级别的数据mock, 如：菜单列表，个人信息
 */

const menuList = [{
  _id: 1,
  parent_id: 0,
  name: '首页',
  path: '/dashboard',
  icon: 'el-icon-circle-plus'
}, {
  _id: 2,
  parent_id: 0,
  name: '组件',
  path: '/components',
  icon: 'el-icon-goods',
  children: [{
    _id: 21,
    parent_id: 2,
    name: '多功能表格',
    path: '/components/table',
    icon: 'el-icon-tickets'
  }]
}, {
  _id: 3,
  parent_id: 0,
  name: '图表',
  path: '/charts',
  icon: 'el-icon-news',
  children: [{
    _id: 31,
    parent_id: 3,
    name: '折线图',
    path: '/charts/moorline',
    icon: 'el-icon-date'
  }]
}]
export default {
  menuList: () => {
    return menuList
  }
}
