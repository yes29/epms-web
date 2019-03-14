<template>
  <div class="board-column">
    <div class="board-column-header">
      {{headerText}}
    </div>
    <draggable class="board-column-content"
               :list="list"
               v-model="list"
               @end="onEnd"
               :options="options">
      <div class="board-item" v-for="element in list" :key="element.id">
        {{element.name}} {{element.id}}
      </div>
    </draggable>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index";
</style>
<script>
  import index from './index'
  export default index
</script>

