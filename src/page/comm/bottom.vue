<template>
    <div class="bottom">
        <div class="content">
            <ul>
                <router-link v-for="(item,index) in routeList" :key="index" tag="li" :to="item.link">{{item.name}}</router-link>
            </ul>
        </div>
        <div class="z_bottom_content">
            <div class="info">
                <span>广东鞋品荟互联网科技有限公司</span>
                <span>税号：91440101MA59J9NGXF</span>
                <span>地址：广州市越秀区站西路24号宏基大厦欧陆鞋城3楼318</span>
                <span>© 广东鞋品荟互联网科技有限公司 版权所有 | 粤ICP备17041522号-1 |</span>
            </div>
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
</template>

<script>
export default {
  data() {
    return {
      routeList: [
        {
          link: "/",
          name: "首页"
        },
        {
          link: "/investment",
          name: "招商合作"
        },
        // {
        //   link: "/about",
        //   name: "关于我们"
        // },
        {
          link: "/join",
          name: "加入我们"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
//   height: 3.48rem
  background: #333438;
}
.content {
  box-sizing: border-box;
  padding-top: 0.53rem;
  ul {
    list-style: none;
    user-select: none;
    li {
      display: inline-block;
      font-size: 0.2rem;
      color: #ccc;
      margin-right: 1.19rem;
    }
  }
  
}
.info {
    color: #666;
    margin-top: 1.1rem;
    float: left;
    span {
      display: block;
      margin-bottom: 0.17rem;
    }
  }
.codebox {
      width: 6rem;
      overflow: hidden;
      margin: 0 auto;
      float: right;
      margin-top: 1.1rem;
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
    .z_bottom_content{
      overflow: hidden;
      width: 12rem;
      margin: auto;
    }
</style>
