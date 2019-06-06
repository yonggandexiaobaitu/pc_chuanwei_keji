// router这个js文件用来整合路由，然后将其暴露出去
//需要先导入vue，再导入路由
import Vue from 'vue'
//导入路由，先安装路由包,然后导入路由包
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//导入组件
//2.导入index首页组件
import index from './components/index.vue'
import gouwuche from './components/gouwuche.vue'
import detail from './components/detail.vue'
// 导入会员中心组件
import membercenter from './components/membercenter.vue'
//导入嵌套路由个人中心组件
import mypersoncenter from './components/mypersoncenter.vue'
// 导入嵌套路由的交易订单组件
import orderlist from './components/orderlist'
//导入嵌套路由的订单详情组件
import orderlistdetail from './components/orderlistdetail'
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
  },
  {
    path:'/membercenter',
    component:membercenter,
    children:[
      {path:'',component:mypersoncenter},
      {path:'mypersoncenter',component:mypersoncenter},
      {path:'orderlist',component:orderlist},
      {path:'orderlistdetail',component:orderlistdetail}
    
    ]
  },
  
  
  
  ];
  //实例化路由对象
let router = new VueRouter({
    // 注入属性
    routes
  });
  //将这个路由对象暴露出去，相当于return
  export default { router}
  