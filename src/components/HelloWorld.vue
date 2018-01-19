<template>
  <div class="hello">
    <img src="../assets/images/logo.png">
    <h1>{{ msg }}</h1>
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
      <!--<br>-->
      <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
    <h2>MyProject</h2>
    <ul>
      <li><router-link to="/login"><el-button type="primary">进入新世界</el-button></router-link></li>
    </ul>
    <h2>{{peopleCountingMsg}}{{peopleAllNum}}{{peopleMsg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      peopleCountingMsg: '本站累计访问人数：',
      peopleAllNum: 'Loading...',
      peopleMsg: ''
    }
  },
  mounted () {
    // 自调用
    this.sendAjax()
  },
  methods: {
    sendAjax () {
      this.$axios.get(process.env.API_HOST + '/statistics/peopleCounting',
        {
          params: {
            peopleCountingSetting: 'peopleCountingSetting'
          }
        })
        .then(response => {
          if (response.data.data.type === 'success') {
            console.log(response)
            this.peopleAllNum = response.data.data.message
            this.peopleMsg = '人'
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
</style>
