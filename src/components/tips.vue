<template>
  <div class="showPage">
    <loading v-if="tag === 'loading'"></loading>
    <p v-if="tag === 'loading'">加载中...</p>
    <img v-if="tag === 'noData'" :src="img || logo" class="img">
    <p v-if="tag === 'noData'">{{content||'暂无数据'}}</p>
    <img v-if="tag === 'noAuth'" :src="img || noAuthImg" class="img">
    <p v-if="tag === 'noAuth'">{{content}}</p>
    <img v-if="tag === 'warning'" src="../assets/images/noSignal.png" class="img">
    <p v-if="tag === 'warning'">获取数据失败</p>
  </div>
</template>

<script>
  import loading from './loading'
  export default {
    name: "no-auth",
    props: [ 'tag','content','img' ],
    data() {
      return {
        logo: require('../assets/logo.png'),
        noAuthImg: require('../assets/images/noAuth.png')
      }
    },
    components: {
      loading
    }
  }
</script>

<style lang="less" scoped>
  .showPage{
    width: 50%;
    text-align: center;
    margin: 60px auto 0 auto;
    .img{
      width: 100%;
    }
    p{
      margin-top: 10px;
    }
  }
</style>
