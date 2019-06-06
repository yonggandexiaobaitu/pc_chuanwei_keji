
import Vue from 'vue'
import router from "./router.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'

Vue.config.productionTip = false
// 在main.js初始化，林凯坚第一遍
//导入router这个js文件


//1.导入全局的样式
import './assets/statics/site/css/style.css'
//导入全局的axios
import axios from 'axios'
//设置全局基地址,必须axios放在vue的原型之前设置
axios.defaults.baseURL = 'http://111.230.232.110:8899/'
Vue.prototype.$axios=axios;

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
