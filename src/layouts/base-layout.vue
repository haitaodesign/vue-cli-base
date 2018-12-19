<template>
  <el-container class="container">
    <el-aside :class="['aside-menu', isCollapse === true ? 'collapse': '' ]">
      <aside-menu
      :menuList="menuList"
      :isCollapse="isCollapse"
      :defaultActive="defaultActive"
      @on-select="handleOnSelect"
      >
        <div class="aside-menu-logo">
          <div class="aside-menu-logo-img">
            <img src="../assets/images/logo.png" alt="">
          </div>
          <div class="aside-menu-logo-name" v-show="!isCollapse">
            <span>数据运营系统</span>
          </div>
        </div>
      </aside-menu>
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
import { mapState, mapActions } from 'vuex'
export default {
  name: 'BaseLayout',
  components: {
    AsideMenu,
    BaseHeader
  },
  data () {
    return {
      isCollapse: false,
      defaultActive: ''
    }
  },
  computed: {
    ...mapState('system', [
      'menuList'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.defaultActive = to.path
    }
  },
  mounted () {
    this.getMenuList()
  },
  methods: {
    ...mapActions('system', [
      'getMenuList'
    ]),
    handleOpenOrCloseMenuClick () {
      this.isCollapse = !this.isCollapse
    },
    handleOnSelect ({ index }) {
      this.$router.push({ path: index })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  .collapse
    width 64px !important
  .aside-menu
    background-color #202736
    .aside-menu-logo
      height 56px
      background-color #202736
      .aside-menu-logo-img
        height 100%
        width 64px
        float left
        position relative
        img
          position absolute
          width 28px
          height 28px
          left 50%
          top 50%
          transform translate(-50%, -50%)
      .aside-menu-logo-name
        float left
        margin-left 10px
        width 100px
        height 56px
        line-height 56px
        color #fff
</style>
