<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- 首页 -->
      <slot></slot>
      <template v-for="item in data">
        <el-breadcrumb-item :key="item.name" :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    data: Array,
    default () {
      return []
    }
  }
}
</script>
