<template>
  <div class="w-h-100">
    <td-nav></td-nav>
    <div class="nav-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import TdNav from '../components/navigation/index.vue'
  export default {
    components: {TdNav},
    data () {
      return {}
    },
    mounted () {}
  }
</script>
