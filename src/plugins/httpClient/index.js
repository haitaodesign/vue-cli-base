/*
 * @Author: lihaitao
 * @Date: 2018-12-19 11:45:15
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-19 14:33:40
 */
import QS from 'qs'
import service from './interceptors.js'

class BaseHttpClient {
  constructor () {
    this.$http = service
    this.OptionsDefault = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return QS.stringify(data)
      }
    }
  }
  get (url, config = {}) {
    return this.$http.get(url, config)
  }
  post (url, data = undefined, config = {}) {
    return this.$http.post(url, data, { ...this.OptionsDefault, ...config })
  }
  put (url, data = undefined, config = {}) {
    return this.$http.put(url, data, { ...this.OptionsDefault, ...config })
  }
  delete (url, data = undefined, config = {}) {
    return this.$http.delete(url, data, config)
  }
}
export default BaseHttpClient
