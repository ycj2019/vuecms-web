<template>
  <div class="sm-sec-content">
    <shop-fl-top> </shop-fl-top>
    <shop-fl-bottom> </shop-fl-bottom>
  </div>
</template>

<script>
  import ShopFlTop from "./ShopFlTop"
  import ShopFlBottom from "./ShopFlBottom"
    export default {
        name: "shop-fl-content",
      components:{
        ShopFlTop,
        ShopFlBottom
      }
    }
</script>

<style scoped>
@import "../../../../static/CmsShop/css/warning.css";
</style>
