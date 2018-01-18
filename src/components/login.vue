<template>
  <div class="login">
    <div id="login-main" class="login-main">
      <h1>{{ msg }}</h1>
      <div style="margin: 20px;"></div>
      <el-form class="login-form">
        <el-form-item label="" class="login-information">
          <el-input v-model="loginInformation.phone" prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <el-form-item label="" class="login-information">
          <el-input v-model="loginInformation.password" prefix-icon="el-icon-goods" type="password" placeholder="请输入密码" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/register" class="login-register"><el-button type="text">注册</el-button></router-link>
          <router-link to="/forget" class="login-forget"><el-button type="text">忘记密码</el-button></router-link>
        </el-form-item>
        <el-form-item>
          <el-button class="login-submit" type="primary"  @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: '登录',
        loginInformation: {}
      }
    },
    methods: {
      goHome (s) {
        this.$router.push({path: '/home?S=' + s})
      },
      submitForm () {
        console.log(this.loginInformation)
        this.sendAjax()
      },
      sendAjax () {
        this.$axios.get(process.env.API_HOST + '/users/users',
          {
            params: {
              phone: this.loginInformation.phone,
              password: this.md5(this.loginInformation.password)
            }
          })
          .then(response => {
            if (response.data.data.type === 'success') {
              console.log(response)
              this.goHome(response.data.data.S)
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .login-main{
    /*background-color: bisque;*/
    width:430px;
    margin:0 auto;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  }
  .login-form{
    width:310px;
    margin:0 auto;
  }
  .login-information{
    width:100%;
    height:40px;
  }
  .login-register{
    float: left;
    margin-left: 30px;
  }
  .login-forget{
    float: right;
    margin-right: 30px;
  }
  .login-submit{
    width:100%;
  }
</style>
