/*
 * @Author: lihaitao
 * @Date: 2018-12-19 10:54:14
 * @Last Modified by: lihaitao
 * @Last Modified time: 2018-12-19 11:08:42
 * @description 数据mock
 */
import Mock from 'mockjs'
import System from './system.js'

Mock.mock(/\/system\/menuList/, 'post', System.menuList)

export default Mock
