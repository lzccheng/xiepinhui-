<template>
    <div class="index-wrap">
        <heard></heard>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<script>
import heard from "@/page/comm/heard";
import bottom from "@/page/comm/bottom";

export default {
  name: "index",
  props: {},
  components: {
    heard,
    bottom
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
</style>