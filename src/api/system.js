/*
 * @Author: lihaitao
 * @Date: 2018-12-19 11:45:19
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-19 14:35:16
 */
import BaseHttpClient from '../plugins/httpClient/index.js'

class System extends BaseHttpClient {
  getMenuList (data) {
    return this.post('system/menuList', data)
  }
}
export default System
