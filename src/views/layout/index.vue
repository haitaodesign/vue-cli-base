<template>
  <div class="layout">
    <router-link :to="{ name: 'other' }">
      <span>other</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
