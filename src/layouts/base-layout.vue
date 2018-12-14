<template>
  <el-container class="container">
    <el-aside :class="isCollapse === true ? 'aside': '' ">
      <aside-menu :menuList="menuList" :isCollapse="isCollapse"></aside-menu>
    </el-aside>
    <el-container>
      <el-header>
        <base-header @on-click-menu="handleOpenOrCloseMenuClick"></base-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from '@/components/aside-menu/aside-menu.vue'
import BaseHeader from './base-header.vue'
const menuList = require('./SiderMenu.json')
export default {
  name: 'BaseLayout',
  data () {
    return {
      menuList: menuList,
      isCollapse: false
    }
  },
  methods: {
    handleOpenOrCloseMenuClick () {
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    AsideMenu,
    BaseHeader
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  .aside
    width 65px !important
</style>
