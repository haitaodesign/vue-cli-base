/*
 * @Author: lihaitao
 * @Date: 2018-12-19 10:54:03
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-19 11:07:55
 * @description 系统级别的数据mock, 如：菜单列表，个人信息
 */

const menuList = [{
  _id: '1',
  name: '首页',
  path: '/dashboard',
  icon: 'el-icon-circle-plus'
}]
export default {
  menuList: () => {
    return menuList
  }
}
