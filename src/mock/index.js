import Mock from 'mockjs'
import loginAPI from './login'
// 登录相关
Mock.mock(/api\/login/, 'post', loginAPI.login)
Mock.mock(/logout/, 'post', loginAPI.logout)
