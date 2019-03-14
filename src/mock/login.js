import Util from './util'
const userMap = [
  {
    userName: 'admin',
    pwd: 'admin',
    type: 1,
    introduction: '超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'admin'
  }, {
    userName: 'yeSong',
    pwd: 'yeSong',
    type: 2,
    introduction: '普通用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
]

export default {
  login: params => {
    let body = JSON.parse(params.body)
    for (let k of userMap) {
      if (k.userName === body.userName && k.pwd === body.pwd) {
        return Util.success(k)
      }
    }
    return Util.error('用户名或者密码错误！')
  },
  logout: () => Util.success()
}
