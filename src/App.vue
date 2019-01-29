<template>
  <div id="app">
    <img src="./assets/logo.png">
    <first></first>

    <div class="linkStyle">

      <router-link to="/Home" class="link">首页</router-link>
      <router-link to="/About" class="link">关于</router-link>
      <router-link to="/Welcome" class="link">欢迎</router-link>
      <router-view></router-view>
    </div>



  </div>
</template>

<script>
  import first from './components/First'
      export default {
                  data(){
                     return{}
                  },
  components:{first}
}
</script>

<style>
  @import './assets/css/app.css';
</style>
