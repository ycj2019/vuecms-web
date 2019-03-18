<template>
  <div class="sm-sec-content">
    <shop-mg-rt-top> </shop-mg-rt-top>
    <shop-mg-rt-content> </shop-mg-rt-content>
  </div>
</template>

<script>
  import ShopMgRtTop from "./ShopMgRtTop"
  import ShopMgRtContent from "./ShopMgRtContent"
    export default {
        name: "shop-mg-rt-section",
      components:{
        ShopMgRtTop,
        ShopMgRtContent
      }
    }
</script>

<style scoped>

</style>
