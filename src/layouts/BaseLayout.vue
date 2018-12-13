<template>
  <el-container class="container">
    <el-aside class="aside">
      <sider-menu :menuList="menuList"></sider-menu>
    </el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SiderMenu from '@/components/SiderMenu'
const menuList = require('./SiderMenu.json')
export default {
  name: 'BaseLayout',
  data () {
    return {
      menuList: menuList
    }
  },
  components: {
    SiderMenu
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  // .aside
  //   width 256px !important
</style>
