<template>
  <div>
    <group style="margin-top: -1.73333333em;">
      <project-chunk chunk="xx"></project-chunk>
    </group>
  </div>
</template>

<script>
  import {Group, Toast, Cell, CellBox, Badge, Scroller, Actionsheet, TransferDomDirective as TransferDom,Confirm, XButton} from 'vux'
  import projectChunk from './projectChunk'
  export default {
    name: "project-product",
    data() {
      return {
      }
    },
    components: {
      Group,
      Cell,
      CellBox,
      Badge,
      Actionsheet,
      Confirm,
      Toast,
      XButton,
      projectChunk
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
