<template>
  <div class="heard">
    <div class="content">
      <div class="img"></div>
      <ul class="nav">
        <router-link :to="item.link"  v-for="(item,index) in routeList" :key="index" tag="li" >{{item.name}}</router-link>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
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
.heard {
  height: 1.2rem;
  line-height: 1.2rem;
  overflow: hidden;
  background: #fff;

  .img {
    float: left;
    margin-top: 0.37rem;
    height: 0.54rem;
    width: 1.68rem;
    background: url("~@/assets/images/index/logo.png");
    background-size: contain;
  }

  .nav {
    float: left;
    list-style: none;
    font-size: 0;
    margin-left: 1.88rem;
    color: #333;
    user-select: none;
    li {
      float: left;
      margin-left: 0.63rem;
      font-size: 0.24rem;
    }
  }
}
.router-link-active {
  position: relative;
  color: #61d8d0;
}
.router-link-active::after {
  position: absolute;
  bottom: 0.3rem;
  left: 0;
  right: 0;
  content: "";
  width: 100%;
  height: 0.02rem;
  background: #61d8d0;
  border-radius: 0.02rem;
}
</style>
