<template>
  <div class="w1-h1-bf mt20">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="Img4" alt="404">
        <img class="pic-404__child left" :src="imgCloud" alt="404">
        <img class="pic-404__child mid" :src="imgCloud" alt="404">
        <img class="pic-404__child right" :src="imgCloud" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__info">版权所有<a class='link-type' href='https://wallstreetcn.com' target='_blank'>华尔街见闻</a></div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <a href="#/dashboard" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>
<script>
import Img4 from '@/assets/images/404.png'
import imgCloud from '@/assets/images/404_cloud.png'
export default {
  data () {
    return {
      Img4,
      imgCloud
    }
  },
  computed: {
    message () {
      return '特朗普说这个页面你不能进......'
    }
  }
}
</script>
<style lang="scss">
  @import "./404.scss";
</style>
