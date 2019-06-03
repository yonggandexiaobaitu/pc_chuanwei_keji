import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 在main.js初始化，林凯坚第一遍

//1.导入全局的样式
import './assets/statics/site/css/style.css'

//2.导入index首页组件
import index from './components/index.vue'
import gouwuche from './components/gouwuche.vue'

//导入路由，先安装路由包,然后导入路由包
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//编写路由规则,默认显示首页
const routes = [{
  path: '/',
  component: index
},
{
  path:'/gouwuche',
  component:gouwuche
},
{
  path: '/index',
  component: index
},


];
//实例化路由对象
let router = new VueRouter({
  // 注入属性
  routes
});




new Vue({
  el: '#app',
  render: h => h(App),
  router
});
