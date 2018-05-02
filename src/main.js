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
axios.defaults.withCredentials = true
let Base64 = require('js-base64').Base64
Vue.prototype.$axios = axios
Vue.prototype.md5 = md5
Vue.prototype.Base64 = Base64
// Vue.prototype.ajaxurl = 'http://211.159.166.222:3000'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  data () {
  },
  mounted () {
    let self = this
    setInterval(function () {
      console.log('刷新')
      self.checkLogin()
    }, 30000)
  },
  methods: {
    saveUserInfo (data, islogin) {
      if (islogin === 'yes') {
        sessionStorage.setItem('loginUser', data.loginUser)
        sessionStorage.setItem('sessionID', data.sessionID)
        document.getElementById('loginUserNameShow').innerHTML = sessionStorage.getItem('loginUser') || '陌生人'
      } else {
        sessionStorage.removeItem('loginUser')
        sessionStorage.removeItem('sessionID')
        document.getElementById('loginUserNameShow').innerHTML = sessionStorage.getItem('loginUser') || '陌生人'
        this.$router.push({path: '/login'})
      }
    },
    checkLogin () {
      this.$axios.get(process.env.API_HOST + '/users/sessionCheckLogin',
        {
          params: {
//              phone: this.loginInformation.phone,
//              password: this.md5(this.loginInformation.password)
          }
        })
        .then(response => {
          if (response.data.data.type === 'success') {
            // console.log(response)
            if (response.data.data.isLogined) {
              this.saveUserInfo(response.data.data, 'yes')
            } else {
              this.saveUserInfo(response.data.data, 'no')
            }
//              this.goHome(response.data.data.S)
          } else if (response.data.data.type === 'error') {
            console.log(response)
            alert(response.data.data.message)
          } else if (response.data.data.type === 'login error') {
            console.log(response)
            alert(response.data.data.message)
          }
        }, response => {
          console.log('获取信息失败')
          console.log(response)
        })
    }
  }
})
