export default {
  // 获取浏览器客户端口高度
  cHeight: window.document.body.clientHeight,
  // 获取浏览器客户端口宽度
  cWidth: window.document.body.clientWidth,
  // 存储单个属性
  setLocal: function (key, val) {
    return window.localStorage && window.localStorage.setItem(key, val)
  },
  // 获取单个属性
  getLocal: function (key) {
    return window.localStorage && window.localStorage.getItem(key)
  },
  // 存储对象，以JSON格式存储
  setObjLocal: function (key, value) {
    window.localStorage[key] = JSON.stringify(value)
  },
  // 读取对象
  getObjLocal: function (key) {
    return JSON.parse(window.localStorage[key] || '{}')
  },
  // 删除某一键值对
  removeLocal: function (key) {
    return window.localStorage.removeItem(key)
  }
}
