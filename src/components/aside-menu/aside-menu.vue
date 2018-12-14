<template>
  <div class="sider-menu-warapper">
    <!-- logo start-->
    <slot></slot>
    <!-- logo end-->
    <el-menu style="height:100%;" default-active="1" :collapse="isCollapse">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length > 1">
          <aside-menu-item v-if="item.children && item.children.length > 1" :key="item._id" :parentItem="item"></aside-menu-item>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="item._id">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
/*
  1. 自定义icon(使用阿里的iconfont)
  2. 通过数据动态生成菜单（定义数据结构？）
  3. 返回当前点击菜单的节点数据
  4. 思考比较合理的权限管理（动态路由挂载）
*/
import AsideMenuItem from './aside-menu-item.vue'
export default {
  name: 'SiderMenu',
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    AsideMenuItem
  }
}
</script>

<style lang="stylus" scoped>
.sider-menu-warapper
  height 100%
</style>
