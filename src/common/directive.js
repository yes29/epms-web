import Vue from 'vue'
// 用于根据浏览器高度计算内容高度，以便footer显示在最底部
Vue.directive('contentHeight', {
  bind: function (el, data) {
    let cHeight = window.document.body.clientHeight
    let height = cHeight - 120 - 128 - 60
    if (data.value > 0) {
      height = height - data.value
    }
    el.style.minHeight = height + 'px'
  }
})
