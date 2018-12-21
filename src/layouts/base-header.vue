<template>
  <div class="base-header clearfix">
    <div class="base-header-open">
      <i class="el-icon-menu" @click="handleClick"></i>
    </div>
    <div class="base-header-breadcrumb">
      <breadcrumb class="breadcrumb" :data="breadcrumbData">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      </breadcrumb>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'BaseHeader',
  components: {
    Breadcrumb
  },
  computed: {
    ...mapState('system', [
      'breadcrumbData'
    ])
  },
  methods: {
    handleClick () {
      this.$emit('on-click-menu')
    }
  }
}
</script>
<style lang="stylus" scoped>
.base-header
  .base-header-open
    float left
    width 40px
    height 60px
    line-height 60px
    font-size 24px
    .el-icon-menu
      cursor pointer
  .base-header-breadcrumb
    float left
    width 200px
    height 60px
    position relative
    .breadcrumb
      position absolute
      top 50%
      transform translateY(-50%)
</style>
