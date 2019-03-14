<template>
  <div class="nav">
    <ul class="nav-left">
      <li class="bg-main">
        <div class=" logo">
          <div class="header"></div>
            <el-row class="l-row">
              <div class="left"></div>
              <div class="right"></div>
            </el-row>
          </div>
      </li>
      <li v-for="item in navData"
          :class="navTitle === item.name ? 'is-active':''"
          @click="cliNav(item)">
        <div class="icon" :class="item.icon"></div>
        <div class="char">{{item.name}}</div>
      </li>
    </ul>
    <div class="nav-right br">
      <h3>{{navTitle}}</h3>
      <ul class="menu" el-scroll-bar>
        <li v-for="item in chdData"
            :key="item.id">
          <div class="nav-title" @click.stop="cliOpen(chdData, item)">
            <h5>{{item.name}}</h5>
            <i class="icon-arrow icon-nav02_unfold"
               :class="item.isOpen?'icon-arrow-up':''"
               v-if="item.node"></i>
          </div>
          <el-collapse-transition>
            <ul class="sub-menu"
                v-if="item.node  && item.isOpen">
              <li class="item"
                  @click.stop="cliSelect(row.path)"
                  :class="active === row.path ? 'is-active': ''"
                  v-for="row in item.node"
                  :key="row.id">
                <span class="ml25 icon-nav02_number left"></span>
                <span class="left ml5">{{row.name}}</span>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import './index';
</style>
<script>
  import index from './index'
  export default index
</script>
