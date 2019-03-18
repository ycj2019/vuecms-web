<template>
  <div  class="sm-sec-right">
    <shop-cf-rt-header> </shop-cf-rt-header>
    <shop-cf-rt-section> </shop-cf-rt-section>
    <shop-cf-rt-footer> </shop-cf-rt-footer>
  </div>
</template>

<script>
  import ShopCfRtHeader from "./ShopCfRtHeader"
  import ShopCfRtSection from "./ShopCfRtSection"
  import ShopCfRtFooter from "./ShopCfRtFooter"
    export default {
        name: "shop-cf-right",
      components:{
        ShopCfRtHeader,
        ShopCfRtSection,
        ShopCfRtFooter
      }
    }
</script>

<style scoped>
  .sm-sec-right{
    margin-left: 200px;
  }
</style>
