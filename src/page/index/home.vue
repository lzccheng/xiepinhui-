<template>
  <div class="home">
    <!-- 大图 -->
    <div class="showcase">
      <div class="content showcase-text">
        <div class="title">手机开店&nbsp;&nbsp;就用鞋品荟</div>
        <div class="one">一对一辅导 手把手教学</div>
        <div class="text">联系电话：<a :href="`tel:${telArr[0]}`">{{telArr[0]}}</a>&nbsp;&nbsp;<a :href="`tel:${telArr[1]}`">{{telArr[1]}}</a></div>
        <div class="yh180"></div>
        <div class="codebox">
          <div class="code">
            <!-- <div class="codetext">扫一扫下载 鞋品荟APP</div> -->
            <div class="codeimg1"></div>
          </div>
          <div class="code">
            <!-- <div class="codetext">小程序</div> -->
            <div class="codeimg2"></div>
          </div>
          <div class="code">
            <!-- <div class="codetext">关注公众号</div> -->
            <div class="codeimg3"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="content">
      <div class="js">
        <div class="title"></div>
        <div class="san">
          <span class="td">0库存</span>
          <span class="td">低投入</span>
          <span class="td">高利润</span>
        </div>
        <div class="js-text">
          <p>
            降低投资费用，减轻店铺负担,面积20-30平方，0仓库，降低店铺租金；<span>无仓管人员，无收银人员，一人销售</span> ，降低人员费用。货品SKU,按地区喜好和消费水平,经数据筛选,由鞋品荟承担库存。
          </p>
          <p>
            线上、线下结合，改变顾客动线，合计盈利加盟店内增设<span>49寸触摸屏</span>，销售引导关注线上平台，捆绑用户至该店二维码，用户即使没有到店，在线上消费买鞋,均可获得和线下一样的盈利;还可以转发朋友圈或者让朋友帮忙转发朋友圈,通过连接注册的用户也会捆绑至店铺二维码下,拥有同样的收益。
          </p>
        </div>
      </div>
    </div>
    <!-- 优势 -->
    <div class="content">
      <div class="ys">
        <div class="title"></div>
        <div class="ys-cell">
          <div class="left-img ysimg1"></div>
          <div class="ys-text-box">
            <p>广州市鞋业贸易商会工厂委员会工厂会员多达600余个，合作品牌达中国总市场的60%以上，会员工厂为鞋品荟批发交易中心提供大量优质</p>
            <p>广州鞋品荟贸易商会，广东鞋类商会中会员最多、范围最广、影响力最大；全国贸易类客户达到1500人。</p>
          </div>
        </div>
        <div class="ys-cell">
          <div class="left-img ysimg2"></div>
          <div class="ys-text-box">
            <p>互联网推广服务：相关鞋款软文推广、积极露出、网红直播搭配推荐，自我打造鞋款、爆款能卖款。</p>
            <p>联创品牌服务：鞋品荟与商家联合打造加盟品牌，<span>提供大量优质产品保障及积极的品牌推广服务</span>，扩大品牌效应，增加销售量。 </p>
          </div>
        </div>
        <div class="ys-cell">
          <div class="left-img ysimg3"></div>
          <div class="ys-text-box">
            <p>产品模式：通过合作工厂/贸易商全国客户大数据，分析能卖新款，全力打造<span>新款、爆款、能卖款</span>。</p>
            <p>销售模式：全国统一订货，统一单价销售，统一返利制度；<span>线上、线下结合</span>，合计销售收益保障加盟商返利。 </p>
          </div>
        </div>

      </div>
    </div>
    <!-- 新零售 -->
    <div class="sls">
      <div class="content">
        <div class="slsimg"></div>
        <div class="slsinfo">
          <h3>新零售 0库存</h3>
          <h5>中国首个线上线下加盟模式</h5>
          <p>全国招募加盟合伙人</p>
          <p>占据资源、模式、服务、营销等多重优势</p>
          <p>优质货品 / 低投入 / 零加盟费 / 双线收益</p>
          <div class="btn">了解更多</div>
        </div>
      </div>
    </div>
    <!-- 科技 -->
    <div class="content">
      <div class="kj">
        <div class="title"></div>
        <div class="kjimg"></div>
        <div class="kjtextbox">
          <p>广东鞋品荟互联网科技有限公司坐落在号称鞋业源头的广州站西路，是一家集自有商城平台、线下批发交易中心、加盟服务三大业务板块为一体的互联网科技公司。</p>
          <p>鞋品荟由广州市鞋业贸易商会王欣会长发起创建，目前合作高质量的工厂已达21家，工厂委员会会员约500家，为批发中心和加盟中心的发展奠定坚实基础。</p>
          <p>经过一年多的创新发展，鞋品荟组建了强大的技术运营团队，创建了领先全国的鞋业在线商城，并于18年4月筹备创立了现货批发中心，7月正式成立全国加盟中心,拥有最完善的线上线下系统渠道,占据了资源、模式、服务等多重优势，突破了传统业务模式的局限性，搭建起中国真正意义上的鞋产业链服务平台。</p>
        </div>
      </div>
    </div>
    <!-- 支持 -->
    <div class="zc">
      <div class="title"></div>
      <div class="zcitembox">
        <div class="zcitem" :class="item.style" v-for="(item,index) in zcArr" :key="index">
          {{item.title}}
        </div>
      </div>
    </div>
    <!-- 口号 -->
    <div class="newretail">
      <p class="top">
        全国鞋业看广东，广东鞋业看鞋品荟
      </p>
      <p class="center"></p>
      <p class="bottom">
        携手共创鞋业·新零售
      </p>
    </div>
  </div>
</template>

<script>
// import bottom from "@/components/bottom";

export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {
      telArr: ["81654564", "81978324"],
      zcArr: [
        {
          title: "标准装修风格",
          style: "zcitem-bg1"
        },
        {
          title: "店员培训",
          style: "zcitem-bg2"
        },
        {
          title: "开业指导",
          style: "zcitem-bg1"
        },
        {
          title: "营销推广",
          style: "zcitem-bg2"
        },
        {
          title: "售前售后400电话",
          style: "zcitem-bg2"
        },
        {
          title: "线上商城",
          style: "zcitem-bg1"
        },
        {
          title: "品牌宣传",
          style: "zcitem-bg2"
        },
        {
          title: "活动策划",
          style: "zcitem-bg1"
        }
      ]
    };
  },
  created() {}
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  box-sizing: border-box;

  // padding-bottom: 33%;
  .content {
    text-align: center;
  }

  .showcase {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 6.32rem;
    background: url("~@/assets/images/index/gb.png") no-repeat;
    background-size: cover;
  }

  .showcase-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .title {
      color: #333;
      font-size: 0.65rem;
      font-weight: bolder;
      margin-top: 0.08rem;
      margin-bottom: 0.44rem;
      user-select: none;
    }

    .one {
      margin: 0 auto;
      margin-bottom: 0.24rem;
      width: 3.81rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.32rem;
      color: #fff;
      background: rgba(242, 196, 57, 1);
      user-select: none;
    }

    .yh180 {
      margin: 0 auto;
      margin-bottom: 0.25rem;
      width: 4.2rem;
      height: 1.06rem;
      background: url("~@/assets/images/index/yhq.png") no-repeat;
      background-size: contain;
    }

    .text {
      text-align: center;
      color: #666;
      font-size: 0.24rem;
      margin-bottom: 0.22rem;
      font-weight: bolder;
      a{
        color: #333;
      }
    }

    .codebox {
      width: 7.3rem;
      overflow: hidden;
      margin: 0 auto;

      .code {
        font-size: 0.2rem;
        color: #666;
        float: left;
        width: 33.33%;

        .codeimg1 {
          width: 1.46rem;
          height: 1.46rem;
          background: url("~@/assets/images/index/app_img.png") no-repeat;
          background-size: contain;
        }

        .codeimg2 {
          width: 1.46rem;
          height: 1.46rem;
          background: url("~@/assets/images/index/swx_img.png") no-repeat;
          background-size: contain;
        }

        .codeimg3 {
          width: 1.46rem;
          height: 1.46rem;
          background: url("~@/assets/images/index/wx_img.png") no-repeat;
          background-size: contain;
        }

        .codetext {
          width: 0.99rem;
        }
      }
    }
  }

  .title {
    height: 1.06rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 0.64rem;
  }

  .js {
    .title {
      background: url("~@/assets/images/index/s_js.png") no-repeat;
      width: 5.3rem;
      background-size: contain;
    }

    .san {
      width: 9.6rem;
      margin: 0 auto;
      overflow: hidden;
      margin-left: 2.1rem;
      margin-bottom: 0.62rem;

      .td {
        width: 1.6rem;
        float: left;
        box-sizing: border-box;
        padding: 0.1rem 0.32rem;
        color: #61d8d0;
        border: 1px #61d8d0 solid;
        border-radius: 0.9rem;
        margin-right: 1.6rem;
        white-space: nowrap;
      }
    }

    .js-text {
      color: #666;
      font-size: 0.24rem;

      p {
        margin-bottom: 0.32rem;
        line-height: 200%;

        span {
          color: #ff2f47;
        }
      }
    }
  }

  .ys {
    .title {
      background: url("~@/assets/images/index/s_ys.png") no-repeat;
      background-size: contain;
      width: 4.1rem;
    }
    .ys-cell {
      margin-bottom: 0.4rem;
      overflow: hidden;
      .left-img {
        float: left;
        width: 1.86rem;
        height: 1.86rem;
        background: #f2f2f2;
      }
      .ysimg1 {
        background: url("~@/assets/images/index/zy.png") no-repeat;
        background-size: contain;
      }
      .ysimg2 {
        background: url("~@/assets/images/index/kf.png") no-repeat;
        background-size: contain;
      }
      .ysimg3 {
        background: url("~@/assets/images/index/ms.png") no-repeat;
        background-size: contain;
      }
      .ys-text-box {
        padding-left: 2.4rem;
        font-size: 0.24rem;
        color: #666;
        p {
          margin-bottom: 0.36rem;
          text-align: left;
        }
        span {
          color: #ff2f47;
        }
      }
    }
  }
  .sls {
    background: #61d8d0;
    padding: 0.92rem 0;
    .content {
      overflow: hidden;
      .slsimg {
        float: left;
        width: 5.7rem;
        height: 3.22rem;
        background: url("~@/assets/images/index/fbh.png") no-repeat;
        background-size: contain;
      }
      .slsinfo {
        color: #fff;
        text-align: left;
        margin-left: 6.61rem;
        h3 {
          font-size: 0.48rem;
        }
        h5 {
          font-size: 0.22rem;
          margin: 0.34rem 0;
        }
        p {
          font-size: 0.2rem;
          margin-bottom: 0.15rem;
        }
        .btn {
          width: 1.2rem;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 1);
          transition: all 0.5s ease;
        }
        .btn:hover {
          color: #666;
          background: #fff;
          border: 1px solid #666;
        }
      }
    }
  }
  .kj {
    overflow: hidden;
    .title {
      background: url("~@/assets/images/index/s_xph.png") no-repeat;
      background-size: contain;
      width: 4rem;
    }
    .kjimg {
      float: left;
      width: 4.4rem;
      height: 5.88rem;
      background: url("~@/assets/images/index/fbh2.png") no-repeat;
      background-size: contain;
    }
    .kjtextbox {
      color: #666;
      font-size: 0.28rem;
      margin-left: 5rem;
      text-align: left;
      p {
        margin-bottom: 0.41rem;
      }
    }
  }
  .zc {
    overflow: hidden;
    .title {
      background: url("~@/assets/images/index/s_zc.png") no-repeat;
      background-size: contain;
      width: 4rem;
    }
    .zcitembox {
      overflow: hidden;
      .zcitem {
        float: left;
        width: 25%;
        height: 2.66rem;
        line-height: 2.66rem;
        font-size: 0.34rem;
        text-align: center;
        color: #333;
      }
      .zcitem-bg1 {
        background: #e6fffd;
      }
      .zcitem-bg2 {
        background: #c8fffb;
      }
    }
  }
  .newretail {
    text-align: center;
    margin: 1.35rem auto;
    user-select: none;
    .top {
      color: #333;
      font-size: 0.28rem;
    }
    .center {
      height: 0.04rem;
      width: 0.64rem;
      margin: 0.28rem auto;
      background: #61d8d0;
    }
    .bottom {
      font-size: 0.48rem;
    }
  }
}
</style>
