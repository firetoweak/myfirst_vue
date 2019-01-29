// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import route from './router/route.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el:'#app',
   route,
  render: h => h(App)
}).$mount('#app')
