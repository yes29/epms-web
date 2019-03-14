<template>
  <div class="components-container board">
    <opt-panel :key="1" class="todo" :list="list1" :options="options" header-text="Todo"/>
    <opt-panel :key="2" class="working" :list="list2" :options="options" header-text="Working"/>
    <opt-panel :key="3" class="done" :list="list3" :options="options" header-text="Done"/>

  </div>
</template>
<style lang="scss" scoped>
  @import "./index";
</style>
<script>
  import index from './index'
  export default index
</script>
