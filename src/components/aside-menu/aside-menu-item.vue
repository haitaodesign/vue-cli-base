<template>
  <el-submenu :index="parentItem.path">
    <template slot="title">
      <i :class="parentItem.icon"></i>
      <span slot="title">{{parentItem.name}}</span>
    </template>
    <template v-for="item in parentItem.children">
      <sider-menu-item v-if="item.children && item.children.length > 0" :parentItem="item" :key="item._id"></sider-menu-item>
      <el-menu-item v-else :index="item.path" :key="item._id">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'SiderMenuItem',
  props: {
    parentItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
