/*
 * @Author: lihaitao
 * @Date: 2018-12-20 15:15:15
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-20 17:56:54
 */

class MenuTree {
  currentList = null
  getCurrentMenuList (list, path) {
    for (let i = 0; i < list.length; i++) {
      if (this.currentList) {
        break
      }
      const curMenu = list[i]
      if (!curMenu || !curMenu.path) {
        continue
      }
      if (curMenu.path === path) {
        this.currentList = curMenu
        break
      } else {
        if (curMenu.children) {
          this.getCurrentMenuList(curMenu.children, path)
        } else {
          continue
        }
      }
    }
    return this.currentList
  }
}

export default MenuTree
