<template>
  <div>
    <div>
      <div class="section">
        <div class="location">
          <span>当前位置：</span>
          <a href="/index.html">首页</a> &gt;
          <a href="/goods.html">购物商城</a> &gt;
          <a href="/goods/42/1.html">商品详情</a>
        </div>
      </div>
      <div class="section">
        <div class="wrapper clearfix">
          <div class="wrap-box">
            <div class="left-925">
              <div class="goods-box clearfix">
                <div class="pic-box" width="515px">
                  <el-carousel height="320px">
                    <el-carousel-item v-for="(img1,i) in imglist" :key="i">
                      <img :src="img1.original_path" alt>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="goods-spec">
                  <h1>{{goodsinfo.title}}</h1>
                  <p class="subtitle">{{goodsinfo.sub_title}}</p>
                  <div class="spec-box">
                    <dl>
                      <dt>货号</dt>
                      <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                    </dl>
                    <dl>
                      <dt>市场价</dt>
                      <dd>
                        <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                      </dd>
                    </dl>
                    <dl>
                      <dt>销售价</dt>
                      <dd>
                        <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                      </dd>
                    </dl>
                  </div>
                  <div class="spec-box">
                    <dl>
                      <dt>购买数量</dt>
                      <dd>
                        <div class="stock-box">
                          <!-- <div class="el-input-number el-input-number--small">
                            <span role="button" class="el-input-number__decrease is-disabled">
                              <i class="el-icon-minus"></i>
                            </span>
                            <span role="button" class="el-input-number__increase">
                              <i class="el-icon-plus"></i>
                            </span>
                            <div class="el-input el-input--small">
                         
                              <input
                                autocomplete="off"
                                size="small"
                                type="text"
                                rows="2"
                                max="60"
                                min="1"
                                validateevent="true"
                                class="el-input__inner"
                                role="spinbutton"
                                aria-valuemax="60"
                                aria-valuemin="1"
                                aria-valuenow="1"
                                aria-disabled="false"
                              >
                           
                            </div>
                          </div>-->
                          <el-input-number
                            v-model="num"
                            @change="handleChange"
                            :min="1"
                            :max="10"
                            label="描述文字"
                          ></el-input-number>
                        </div>
                        <span class="stock-txt">
                          库存
                          <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dd>
                        <div id="buyButton" class="btn-buy">
                          <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                          <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id="goodsTabs" class="goods-tab bg-wrap">
                <div
                  id="tabHead"
                  class="tab-head"
                  style="position: static; top: 517px; width: 925px;"
                >
                  <ul>
                    <li @click="index=1">
                      <a href="javascript:;" :class="{selected:index==1}">商品介绍</a>
                    </li>
                    <li @click="index=2">
                      <a href="javascript:;" :class="{selected:index==2}">商品评论</a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content entry" style="display: block;" v-show="index==1">
                  <p>展示图部分</p>
                  <ul>
                    <li v-for="(img,l) in imglist" :key="l">
                      <img :src="img.original_path" alt>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" style="display: block;" v-show="index==2">
                  <div class="comment-box">
                    <div id="commentForm" name="commentForm" class="form-box">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="conn-box">
                        <div class="editor">
                          <textarea
                            id="txtContent"
                            name="txtContent"
                            sucmsg=" "
                            data-type="*10-1000"
                            nullmsg="请填写评论内容！"
                            @keyup.enter="pinglun()"
                            v-model.trim="pinglun_value"
                          ></textarea>
                          <span class="Validform_checktip"></span>
                        </div>
                        <div class="subcon">
                          <input
                            id="btnSubmit"
                            name="submit"
                            type="submit"
                            value="提交评论"
                            class="submit"
                          >
                          <span class="Validform_checktip"></span>
                        </div>
                      </div>
                    </div>
                    <ul id="commentList" class="list-box">
                      <p
                        style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                      >暂无评论，快来抢沙发吧！</p>
                      <li v-for="(item,index) in padelist" :key="index">
                        <div class="avatar-box">
                          <i class="iconfont icon-user-full"></i>
                        </div>
                        <div class="inner-box">
                          <div class="info">
                            <span>{{item.user_name}}</span>
                            <span>{{item.reply_time | globlemonent()}}</span>
                          </div>
                          <p>{{item.content}}</p>
                        </div>
                      </li>
                    </ul>
                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                      <!-- 页码改变事件和页容量改变事件，当这个改变肯定需要知道当前多少页，每页多少条-->
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageindex"
                        :page-sizes="[10, 15, 18, 30]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount"
                      ></el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left-220">
              <div class="bg-wrap nobg">
                <div class="sidebar-box">
                  <h4>推荐商品</h4>
                  <ul class="side-img-list">
                    <li v-for="(it,index)  in hotgoodslist" :key="index">
                      <router-link :to="'/detail/'+it.id">
                        <div class="img-box">
                          <a href="#/site/goodsinfo/90" class>
                            <img :src="it.img_url">
                          </a>
                        </div>
                        <div class="txt-box">
                          <a href="#/site/goodsinfo/90" class>{{it.title}}</a>
                          <span>{{it.add_time | globlemonent}}</span>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入axios
// import axios from "axios";

export default {
  name: "detail",
  data() {
    return {
      //  商品的详细信息渲染
      goodsinfo: [],
      //用来切换tabbar索引
      index: 1,
      //右侧热卖商品数据渲染
      hotgoodslist: [],
      //商品的主要展示图渲染
      imglist: [],
      //商品详情计数器num
      num: 1,
      //分页评论
      pinglun_value: "",
      //存储评论状态
      pinglun_status: 0,
      //以下是分页数据用到的数据，因为是经常调用，所以封装成为一个数组
      //1:页码，页容量，总条数，渲染页数数组
      pageindex: 1,
      pagesize: 10,
      //总条数,先默认是0
      totalcount: 0,
      padelist: [] //渲染的数组
    };
  },
  methods: {
    //封装获取商品详情数据
    getdetail() {
      this.$axios
        .get(`site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(res => {
          console.log(res);
          this.goodsinfo = res.data.message.goodsinfo;
          //   console.log('商品详情数组'+goodsinfo);
          this.hotgoodslist = res.data.message.hotgoodslist;
          this.imglist = res.data.message.imglist;
        });
    },
    handleChange(value) {
      //   console.log(value);
    },
    //提交分页评论然后返回真假
    pinglun() {
      //当用户没有输入内容提交的时候，弹出提示框
      if (this.pinglun_value === "") {
        this.$message.error("错了哦，这是一条错误消息");
        return false;
      }
      this.$axios
        .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
          commenttxt: this.pinglun_value
        })
        .then(res => {
          console.log(res);
          if (this.pinglun_status == 0) {
            //评论成功
            this.$message({
              message: "恭喜你，这是一条成功消息",
              type: "success"
            });
            //当发表评论成功的时候，我们也要发送请求，获取评论数据显示最新数据，然后显示就是当前的最新页，所以页数为1
            this.pageindex=1;
            this.pageget();
          } else {
            this.$message.error("评论失败");
          }
        });
      this.pinglun_value = "";
    },
    //提交分页评论结束
    //封装获取到分页数据的接口
    pageget() {
      this.$axios
        .get(
          `site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageindex
          }&pageSize=${this.pagesize}`
        )
        .then(res => {
          console.log(res);
          //赋值渲染数组
          this.padelist = res.data.message;
          //赋值总条数需要用到的
          this.totalcount = res.data.totalcount;
        });
    },
    //当前页码改变事件
    handleCurrentChange(val){
      this.pageindex=val;
      //重新获取数据
      this.pageget();
    },
    //当前页容量改变事件
    handleSizeChange(size){
      this.pagesize=size;
      this.pageget();
      
    }

  },
  //侦听路由
  watch: {
    // $route(val, oldval) {
    //   console.log(val, oldval);
    //没有开启深度侦听
    // }
    //深度侦听$rouer
    $route: {
      handler: function(val, oldval) {
        console.log(val, oldval);
        //重新调用渲染
        this.getdetail();
      },
      deep: true
    }
  },
  created() {
    this.getdetail();
    //获取商品详情的数据

    //页面一打开就获取评论接口
    this.pageget();
  }
  //   created钩子结束
};
</script>

<style>
.pic-box {
  width: 400px !important;
}
.pic-box img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
