import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Workbench from './workbench'
import SectionJob from './sectionJob'
import SysTemOps from './sysTemOps'
Vue.use(Router)
// 路由
const routers = [
  { // 出现401错误跑的页面
    path: '/401',
    name: '401',
    component: resolve => { require(['@/views/errorPage/401.vue'], resolve) }
  }, { // 出现404错误要跑的页面
    path: '/404',
    name: '404',
    component: resolve => { require(['@/views/errorPage/404.vue'], resolve) }
  }, { // 登录页面
    path: '/',
    name: 'login',
    component: resolve => { require(['@/views/userLogin/login.vue'], resolve) }
  }
]
const main = {
  path: '/tb',
  name: 'td',
  component: Main,
  children: [
    {// 首页
      path: '/dashboard',
      name: 'dashboard',
      component: resolve => { require(['@/views/dashboard'], resolve) }
    }
  ]
}
// 模块路由push到main
const mainList = [
  Workbench, // 工作台
  SectionJob, // 部门工作
  SysTemOps  // 管理员
]
mainList.forEach(function (v) {
  v.forEach(function (r) {
    main.children.push(r)
  })
})
// 将main--push到路由
routers.push(main)
// 将登录模块push到路由
// UserLogin.forEach(function (v) {
//   routers.push(v)
// })
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}
export default new Router(RouterConfig)
