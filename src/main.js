import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 在main.js初始化，林凯坚第一遍

new Vue({
  render: h => h(App),
}).$mount('#app')
