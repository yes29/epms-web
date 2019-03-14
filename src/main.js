// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue' // 主路由页面
import ElementUI from 'element-ui' // ui组件库
import Util from './common/utilPublic'
import Ajax from './common/ajax'
import store from './store'
import router from './router/indexRoute' // 路由配置
import './assets/css/base.css' // 基础样式
import './assets/css/index.scss' // 基础样式
import './assets/icomoon/style.css' // 基础样式
import './common/permit' // 权限
import './common/directive' // 指令
import './mock/index' // 引入mock 阶段

// import VueRx from 'vue-rx'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
Vue.prototype.set = Vue.set
Vue.prototype.util = Util
Vue.prototype.post = Ajax.post
