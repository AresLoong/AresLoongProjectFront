// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
// import './assets/stylesheets/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
Vue.prototype.$axios = axios
Vue.prototype.md5 = md5
Vue.prototype.Base64 = Base64

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
