<template>
  <div class="w1-h1-bf">
    <div class="errPage-container">
      <router-link to="/dashboard">
        <el-button class="pm-button db-button-default">返回首页</el-button>
      </router-link>
      <el-row>
        <el-col :span="12">
          <h1 class="text-jumbo text-ginormous">Oops!</h1>
          gif来源<a href='https://zh.airbnb.com/' target='_blank'>airbnb</a> 页面
          <h2>你没有权限去该页面</h2>
          <h6>如有不满请联系你领导</h6>
          <ul class="list-unstyled">
            <li>或者你可以去:</li>
            <li class="link-type">
              <router-link to="/dashboard">回首页</router-link>
            </li>
            <li class="link-type"><a href="https://www.taobao.com/">随便看看</a></li>
            <li><a @click.prevent="dialogVisible=true" href="#">点我看图</a></li>
          </ul>
        </el-col>
        <el-col :span="12">
          <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
        </el-col>
      </el-row>
      <el-dialog title="随便看" :visible.sync="dialogVisible" size="large">
        <img class="pan-img" :src="ewizardClap">
      </el-dialog>
    </div>
  </div>
</template>

<script>
import errGif from '@/assets/images/401.gif'
export default {
  data () {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back () {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss">
  @import "./401.scss";
</style>
