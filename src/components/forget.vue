<template>
  <div class="login">
    <div id="login-main" class="login-main">
      <h1>{{ msg }}</h1>
      <div style="margin: 20px;"></div>
      <el-form class="login-form" ref="registerInformationRef" :model="registerInformation">
        <el-form-item label="" class="login-information" prop="phone">
          <el-input prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" v-model="registerInformation.phone"></el-input>
        </el-form-item>
        <el-form-item label="" class="login-information" prop="password">
          <el-input prefix-icon="el-icon-goods" type="password" placeholder="请输入密码" v-model="registerInformation.password"></el-input>
        </el-form-item>
        <el-form-item label="" class="login-information" prop="securityCode">
          <el-input prefix-icon="el-icon-goods" type="password" placeholder="请输入安全码" v-model="registerInformation.securityCode"></el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/login" class="login-register"><el-button type="text">登录</el-button></router-link>
          <router-link to="/register" class="login-forget"><el-button type="text">注册</el-button></router-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerInformationRef')">提交</el-button>
          <el-button @click="resetForm('registerInformationRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--<router-link to="/home"><el-button type="primary">主要按钮</el-button></router-link>-->
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        msg: '忘记密码',
        labelPosition: 'center',
        registerInformation: {
          phone: '',
          password: '',
          securityCode: ''
        }
      }
    },
    methods: {
      goHome (s) {
        this.$router.push({path: '/login?S=' + s})
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid)
//            alert('submit!')
            console.log(this.registerInformation)
            this.sendAjax()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      sendAjax () {
        this.$axios.get(process.env.API_HOST + '/users/forget',
          {
            params: {
              phone: this.registerInformation.phone,
              password: this.md5(this.registerInformation.password),
              securityCode: this.md5(this.registerInformation.securityCode)
            }
          })
          .then(response => {
            if (response.data.data.type === 'success') {
              console.log(response)
              alert(response.data.data.message)
              this.goHome(response.data.data._id)
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
</style>
