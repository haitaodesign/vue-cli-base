<template>
  <div id="app">
    <BaseLayout></BaseLayout>
  </div>
</template>

<script>
import BaseLayout from './layouts/base-layout.vue'
export default {
  name: 'app',
  components: {
    BaseLayout
  }
}
</script>

<style lang="stylus">
html,body,#app
  height 100%
  width 100%
</style>
