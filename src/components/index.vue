<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <div id="focus-box" class="focus-box">
                <ul class="slides">
                  <li>
                    <el-carousel height="341px" :autoplay="false"  >
                      <el-carousel-item v-for="(slider,index) in sliderlist" :key="index" >
                        <a href="#" class="slider_img">
                          <img :src="slider.img_url" alt>
                        </a>
                      </el-carousel-item>
                    </el-carousel>
                  </li>
                </ul>
                <!-- <ol class="flex-control-nav flex-control-paging">
                  <li>
                    <a class>1</a>
                  </li>
                 
                </ol>-->
              </div>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item,index) in toplist" :key="item.index">
                  <router-link :to="'/detail/'+item.id">
                   <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | globlemonent}}</span>
                </div>
                  </router-link>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="(it,index) in bottomlist" :key="index">
      <div class="main-tit">
        <h2>{{it.catetitle}}</h2>
        <p>
          <a
            href="/goods/43.html"
            v-for="(ite,i) in it.level2catelist"
            :key="i"
          >{{ite.subcatetitle}}</a>
          <!-- <a href="/goods/43.html">摄影摄像</a> -->
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(item,i) in it.datas" :key="i">
              <router-link :to="'/detail/'+item.artID">
                <div class="img-box">
                  <img :src="item.img_url">
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{item.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item.market_price}}</s>
                    </span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
// 导入moment
// import moment from "moment";
export default {
  name: "index",
  data() {
    return {
      //分类数据数组
      catelist: [],
      // 轮播图数组
      sliderlist: [],
      //置顶推荐数组左侧数组
      toplist: [],
      //底部分类数据的数组
      bottomlist: []
    };
  },
  //data结束
  //定义created钩子函数，在实例化成功的时候，就需要请求数据到页面上去
  created() {
    //请求页面参数,使用axios发送请求
    this.$axios.get("site/goods/gettopdata/goods").then(res => {
      console.log(res);
      //置顶推荐数组左侧数组
      this.toplist = res.data.message.toplist;
      //    console.log(this.toplist);
      // 轮播图数组
      this.sliderlist = res.data.message.sliderlist;
      //分类数据数组
      this.catelist = res.data.message.catelist;
    });
    this.$axios.get("site/goods/getgoodsgroup").then(res => {
      //获取到底部分类数据的接口
      //   console.log(res);
      this.bottomlist = res.data.message;
    });
  }
};
</script>

<style>
.slider_img{
    display: block;
    width:100%;
    height:100%;
}
.slider_img img{
    display: block;
    width: 100%;
    height: 100%;
}
</style>
