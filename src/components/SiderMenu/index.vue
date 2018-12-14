<template>
  <div class="sider-menu-warapper">
    <!-- logo -->
    <slot></slot>
    <el-menu style="height:100%;" default-active="1" :collapse="isCollapse">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length > 1">
          <sider-menu-item v-if="item.children && item.children.length > 1" :key="item._id" :parentItem="item"></sider-menu-item>
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
  1. 自定义icon
  2. 通过数据动态生成菜单（定义数据结构？）
  3. 返回当前点击菜单的节点数据
  4. 思考比较合理的权限管理（动态路由挂载）
*/
import SiderMenuItem from './SiderMenuItem.vue'
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
    SiderMenuItem
  }
}
</script>

<style lang="stylus" scoped>
.sider-menu-warapper
  height 100%
</style>
