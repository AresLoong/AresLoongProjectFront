<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <div id="login-main" class="login-main">
      <div style="margin: 20px;"></div>
      <el-form class="login-form">
        <el-form-item label="" class="login-information">
          <el-input prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="" class="login-information">
          <el-input prefix-icon="el-icon-goods" type="password" placeholder="请输入密码" v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item>
          <router-link to="/register" class="login-register"><el-button type="text">注册</el-button></router-link>
          <router-link to="/forget" class="login-forget"><el-button type="text">忘记密码</el-button></router-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
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
        msg: '注册',
        labelPosition: 'center',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
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
