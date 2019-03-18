<template>
  <div class="sm-sec-content">
    <shop-cf-rt-top> </shop-cf-rt-top>
    <shop-cf-rt-content> </shop-cf-rt-content>
  </div>
</template>

<script>
  import ShopCfRtTop from "./ShopCfRtTop"
  import ShopCfRtContent from "./ShopCfRtContent"
    export default {
        name: "shop-cf-rt-section",
      components:{
        ShopCfRtTop,
        ShopCfRtContent
      }
    }
</script>

<style scoped>

</style>
