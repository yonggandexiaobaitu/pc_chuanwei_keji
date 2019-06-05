import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'

Vue.config.productionTip = false
// 在main.js初始化，林凯坚第一遍


//1.导入全局的样式
import './assets/statics/site/css/style.css'
//导入全局的axios
import axios from 'axios'
//设置全局基地址,必须axios放在vue的原型之前设置
axios.defaults.baseURL = 'http://111.230.232.110:8899/'
Vue.prototype.$axios=axios;



//2.导入index首页组件
import index from './components/index.vue'
import gouwuche from './components/gouwuche.vue'
import detail from './components/detail.vue'


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
{
  path:'/detail/:id',
  component:detail
}

];
//实例化路由对象
let router = new VueRouter({
  // 注入属性
  routes
});
//导入monent
import moment from "moment";
//创建全局过滤器
Vue.filter('globlemonent', function(value){

return moment(value).format('YYYY-MM-DD');
});


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
