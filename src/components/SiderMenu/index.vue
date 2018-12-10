<template>
  <div>

  </div>
</template>

<script>
  /*
    1. 自定义icon
    2. 通过数据动态生成菜单（定义数据结构？）
    3. 返回当前点击菜单的节点数据
    4. 思考比较合理的权限管理（动态路由挂载）
  */
  export default {
    name: 'SiderMenu',
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    methods: {

    }
  }
</script>

<style lang="stylus" scoped>

</style>
