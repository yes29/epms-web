/* 封装验证体系 */
export const required = (message) => {
  return [{
    required: true,
    message: message
  }]
}
