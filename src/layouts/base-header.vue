<template>
  <div class="base-header">
    <div class="base-header-open">
      <i class="el-icon-menu" @click="handleClick"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  methods: {
    handleClick () {
      this.$emit('on-click-menu')
    }
  }
}
</script>
<style lang="stylus" scoped>
.base-header-open
  width 60px
  height 60px
  line-height 60px
  font-size 24px
  .el-icon-menu
    cursor pointer
</style>
