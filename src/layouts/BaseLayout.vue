<template>
  <el-container class="container">
    <el-aside class="aside">
      aside
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
export default {
  name: 'BaseLayout'
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
  .aside
    width 256px !important
</style>
