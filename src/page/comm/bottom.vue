<template>
    <div class="bottom">
        <div class="content">
            <ul>
                <router-link v-for="(item,index) in routeList" :key="index" tag="li" :to="item.link">{{item.name}}</router-link>
            </ul>
            <div class="info">
                <span>广东鞋品荟互联网科技有限公司</span>
                <span>税号：91440101MA59J9NGXF</span>
                <span>地址：广州市越秀区站西路24号宏基大厦欧陆鞋城3楼318</span>
                <span>© 广东鞋品荟互联网科技有限公司 版权所有 | 粤ICP备17041522号-1 |</span>
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
        {
          link: "/about",
          name: "关于我们"
        },
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
  .info {
    color: #666;
    margin-top: 1.1rem;
    span {
      display: block;
      margin-bottom: 0.17rem;
    }
  }
}
</style>
