import Vue from 'vue'
import HelloWorld from '@/views/userLogin/login.vue'

describe('login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
