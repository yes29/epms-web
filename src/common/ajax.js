import axios from 'axios'
import util from './utilPublic'
import config from './config'
// 将ajax请求封装
export default {
  post (url, params, opt) {
    url = config.server + url
    let contentType = 'application/json; charset=utf-8'
    if (opt) {
      if (opt.contentType === 1) {
        contentType = 'multipart/form-data'
      }
    }
    let hdD = util.getObjLocal('hd_userInfo')
    let headers = {
      'Content-type': contentType
    }
    if (hdD.token) {
      headers.Authorization = 'Bearer ' + hdD.token
    }
    let req = {
      method: 'post',
      url: url,
      headers: headers,
      data: params
    }
    return new Promise((resolve, reject) => {
      axios(req, params).then(function (result) {
        resolve(result)
      })
      .catch(function (error) {
        reject(error)
      })
    })
  }
}
