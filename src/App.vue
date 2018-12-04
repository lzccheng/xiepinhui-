<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import '~@/assets/base.less';
.tab-slider {
  position: relative;
  width: 100%;
}
.tab-slider__content {
  position: absolute;
  height: 100%;
  width: 100%;
}
.tab-slider__content.slide-left-enter,
.tab-slider__content.slide-right-leave-to {
  transform: translateX(100%);
}
.tab-slider__content.slide-left-enter-active,
.tab-slider__content.slide-left-leave-active {
  transition: transform 0.2s linear;
}
.tab-slider__content.slide-left-leave-to,
.tab-slider__content.slide-right-enter {
  transform: translateX(-100%);
}
.tab-slider__content.slide-right-enter-active,
.tab-slider__content.slide-right-leave-active {
  transition: transform 0.2s linear;
}
.tab-slider__out-of-screen {
  position: absolute;
  width: 100%;
  height: 100%;
}
.tab-slider__out-of-screen > :first-child {
  height: 100%;
}
.tab-slider__out-of-screen.tab-slider__out-of-screen--left {
  left: -100%;
}
.tab-slider__out-of-screen.tab-slider__out-of-screen--right {
  right: -100%;
}
</style>
