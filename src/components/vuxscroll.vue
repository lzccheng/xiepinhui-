<template>
  <div>
    <scroller lock-x :height="height" ref="scroll" :use-pulldown='usePulldown' :use-pullup="usePullup"
                @on-pulldown-loading="onPulldownLoading" @on-pullup-loading="onPullupLoading"
                :pullup-config="pullupConfig" :pulldown-config="pulldownConfig"
                :scroll-top-offst="20" :scroll-bottom-offset="20"
      >
        <div>
          <slot></slot>
        </div>
      </scroller>
  </div>
</template>

<script>
import { Scroller } from "vux";

export default {
  components: {
    Scroller
  },
  props: {
    height: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: []
    },
    usePullup:{
      type: Boolean,
      default: true
    },
    usePulldown:{
      type: Boolean,
      default: true
    },
    pullupConfig:{
      type: Object,
      default: function (){
        return {downContent: '上拉加载',content:' ', upContent: '释放加载',loadingContent: '加载中...',}
      }
    },
    pulldownConfig:{
      type: Object,
      default: function (){
        return {downContent: '下拉刷新',content:' ', upContent: '释放刷新',loadingContent: '刷新中...',}
      }
    }
  },
  data() {
    return {};
  },
  watch: {
    list: function() {
      this.$nextTick(() => {
        this.$refs.scroll.donePullup();
        this.$refs.scroll.donePulldown();
        this.$refs.scroll.reset();
      });
    }
  },
  methods: {
    async onPulldownLoading() {
      // 刷新
      if(!this.usePulldown){return;}
      this.$emit("onPulldown");
    },
    async onPullupLoading() {
      // 加载
      if(!this.usePullup){return;}
      this.$emit("onPullup");
    }
  }
};
</script>

<style lang="less" scoped>
</style>
