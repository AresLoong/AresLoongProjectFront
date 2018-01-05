<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/login"><el-button type="primary">主要按钮</el-button></router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Home new window'
      }
    },
    methods: {
      ready () {
        console.log('deviceid: ' + this.$route.params.deviceId)
        console.log('dataId: ' + this.$route.params.dataId)
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
