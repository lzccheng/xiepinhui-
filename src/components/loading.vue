<template>
  <div>
    <div class="spinner" v-if="type==='type1'">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <div class="load-3" v-if="type==='type3'">
      <div class="k-line2 k-line12-1"></div>
      <div class="k-line2 k-line12-2"></div>
      <div class="k-line2 k-line12-3"></div>
      <div class="k-line2 k-line12-4"></div>
      <div class="k-line2 k-line12-5"></div>
      <div class="k-line2 k-line12-6"></div>
      <div class="k-line2 k-line12-7"></div>
      <div class="k-line2 k-line12-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    type: {
      type: String,
      default: "type1"
    }
  }
};
</script>

<style scoped>
.load-3 {
  width: 100%;
  height: 1rem;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
}
.k-line12-1 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.8s;
}
.k-line12-2 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.7s;
}
.k-line12-3 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.6s;
}
.k-line12-4 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.5s;
}
.k-line12-5 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.4s;
}
.k-line12-6 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.3s;
}
.k-line12-7 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.2s;
}
.k-line12-8 {
  animation: k-loadingS 4s infinite;
  animation-delay: 0.1s;
}
.k-line2 {
  display: inline-block;
  background: #666;
  height: 0.1rem;
  width: 0.1rem;
  opacity: 0;
  border-radius: 50%;
  transform: translateX(-300px);
  background-color: #4b9cdb;
}
@keyframes k-loadingS {
  40% {
    transform: translateX(0);
    opacity: 0.8;
  }
  100% {
    transform: translateX(300px);
    opacity: 0;
  }
}
.spinner {
  margin: 200px auto 20px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #0c96ef;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
