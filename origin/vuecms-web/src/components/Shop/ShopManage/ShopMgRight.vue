<template>
  <div  class="sm-sec-right">
    <shop-mg-rt-header> </shop-mg-rt-header>
    <shop-mg-rt-section> </shop-mg-rt-section>
    <shop-mg-rt-footer> </shop-mg-rt-footer>
  </div>
</template>

<script>
  import ShopMgRtHeader from "./ShopMgRtHeader"
  import ShopMgRtSection from "./ShopMgRtSection"
  import ShopMgRtFooter from "./ShopMgRtFooter"
    export default {
        name: "shop-mg-right",
      components:{
        ShopMgRtHeader,
        ShopMgRtSection,
        ShopMgRtFooter
      }
    }
</script>

<style scoped>
    .sm-sec-right{
      margin-left: 200px;
    }
</style>
