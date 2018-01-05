import Vue from 'vue'
import login from '@/components/login'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.login h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
