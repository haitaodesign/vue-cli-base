<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      list: state => state.ModulesOne.list
    })
  }
}
</script>
