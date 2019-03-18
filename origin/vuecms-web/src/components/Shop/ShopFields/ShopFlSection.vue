<template>
  <div  class="sm-sec-right">
    <shop-fl-header> </shop-fl-header>
    <shop-fl-content> </shop-fl-content>
    <shop-fl-fotter> </shop-fl-fotter>
  </div>
</template>

<script>
  import ShopFlContent from "./ShopFlContent"
  import ShopFlFotter from "./ShopFlFooter"
  import ShopFlHeader from "./ShopFlHeader"
    export default {
        name: "shop-fl-section",
      components:{
        ShopFlContent,
        ShopFlFotter,
        ShopFlHeader
      }
    }
</script>

<style scoped>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
