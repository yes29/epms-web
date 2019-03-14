export default {
  // 删除某一键值对
  success (restData) {
    return {success: true, data: restData}
  },
  error (errMsg) {
    return {error: errMsg, success: false, data: undefined}
  }
}
