<template>
  <div>
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>{{ title }}</h2>-->
    <h2>{{ smallApp }}</h2>
    <ul>
    <li><a v-on:click="clickAppFrame('isShowCalendar')">万年历</a></li>
    <li><a v-on:click="clickAppFrame('isShowHoroscope')">星座运势</a></li>
    <!--<li><a v-on:click="clickAppFrame('isShowWeather')">天气预报</a></li>-->
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">综合新闻</a></li>
    </ul>
    <h2>{{ smallSoloGame }}</h2>
    <ul>
      <li><a href="http://www.aresloong.cn/myprojectgame/gobang/index.html" target="_blank">五子棋</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/flyskypvp/index.html" target="_blank">飞机大战</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/heighhouse/index.html" target="_blank">盖房子</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/checkword/index.html" target="_blank">选字游戏</a></li>
    </ul>
    <h2>{{ smallDoubleGame }}</h2>
    <ul>
      <li><a href="http://www.aresloong.cn/myprojectgame/cardmatch/game.html" target="_blank">CardMatch（双人）</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/cardmatch/game_three.html" target="_blank">CardMatch（三人）</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/cardmatch/game_four.html" target="_blank">CardMatch（四人）</a></li>
      <li><a href="http://www.aresloong.cn/myprojectgame/cardmatch/game_five.html" target="_blank">CardMatch（五人）</a></li>
    </ul>
    <h2>{{ smallInternetGame }}</h2>
    <ul>
      <li><a href="http://www.aresloong.cn/myprojectgame/tjmjgame/index.html" target="_blank">天津麻将</a></li>
    </ul>
    <h2>{{ friendLink }}</h2>
    <ul>
      <li><a href="http://www.baidu.com/" target="_blank">百度</a></li>
      <li><a href="https://www.taobao.com/" target="_blank">淘宝网</a></li>
      <li><a href="http://www.qq.com/" target="_blank">腾讯网</a></li>
      <li><a href="http://www.163.com/" target="_blank">网易</a></li>
    </ul>
    <!--<router-link to="/login"><el-button type="primary">主要按钮</el-button></router-link>-->
    <ul id="calendarAppFrame" v-show="isShowCalendar">
      <li>123</li>
      <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb</li>
      <li>dfafda</li>
    </ul>
    <ul id="horoscopeAppFrame" v-show="isShowHoroscope">
      <li>123</li>
      <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb1111111111</li>
      <li>dfafda</li>
    </ul>
    <ul id="weatherAppFrame" v-show="isShowWeather">
      <li>123</li>
      <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb</li>
      <li>dfafda</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: '链接中转站',
        title: '点击下列链接跳转到想去的地方',
        smallApp: '小应用',
        smallSoloGame: '单人小游戏',
        smallDoubleGame: '多人小游戏',
        smallInternetGame: '网络即时小游戏',
        friendLink: '友情链接',
        isShowCalendar: false,
        isShowHoroscope: false,
        isShowWeather: false
      }
    },
    beforecreate: function () {
    },
    created: function () {
    },
    mounted: function () {
//      beforecreate : 举个栗子：可以在这加个loading事件
//      created ：在这结束loading，还做一些初始化，实现函数自执行
//      mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
//      beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容
      this.calendarAppFrame()
      this.horoscopeAppFrame()
      this.weatherAppFrame()
    },
    beforeDestory: function () {
    },
    methods: {
      ready () {
        console.log('deviceid: ' + this.$route.params.deviceId)
        console.log('dataId: ' + this.$route.params.dataId)
      },
      clickAppFrame (whatAppName) {
        console.log(whatAppName)
        this[whatAppName] = true
      },
      calendarAppFrame () {
        let oMain = document.querySelector('#calendarAppFrame')
        oMain.style.position = 'fixed'
        oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
        oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px';
        (function (doc, win) {
          var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
              oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px'
            }
          if (!doc.addEventListener) {
            return false
          }
          win.addEventListener(resizeEvt, recalc, false)
          doc.addEventListener('DOMContentLoaded', recalc, false)
        })(document, window)
      },
      horoscopeAppFrame () {
        let oMain = document.querySelector('#horoscopeAppFrame')
        oMain.style.position = 'fixed'
        oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
        oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px';
        (function (doc, win) {
          var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
              oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px'
            }
          if (!doc.addEventListener) {
            return false
          }
          win.addEventListener(resizeEvt, recalc, false)
          doc.addEventListener('DOMContentLoaded', recalc, false)
        })(document, window)
      },
      weatherAppFrame () {
        let oMain = document.querySelector('#weatherAppFrame')
        oMain.style.position = 'fixed'
        oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
        oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px';
        (function (doc, win) {
          var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              oMain.style.left = (document.documentElement.clientWidth - oMain.offsetWidth) / 2 + 'px'
              oMain.style.top = (document.documentElement.clientHeight - oMain.offsetHeight) / 2 + 'px'
            }
          if (!doc.addEventListener) {
            return false
          }
          win.addEventListener(resizeEvt, recalc, false)
          doc.addEventListener('DOMContentLoaded', recalc, false)
        })(document, window)
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
  #calendarAppFrame,#horoscopeAppFrame,#weatherAppFrame{
    width: 60%;
    margin: 0 auto;
    border: 1px solid red;
    word-wrap:break-word;
    /*display: none;*/
    z-index: 10;
    background-color: white;
  }
  #calendarAppFrame li,#horoscopeAppFrame li,#weatherAppFrame li{
    width: 95%;
    text-align: center;
    margin: 0;
  }
  .active{
    display: inline-block;
  }
</style>
