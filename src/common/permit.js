import router from '../router/indexRoute'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// 配置进度条
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (to.matched.length === 0) {
    next({ path: '/404' })
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
