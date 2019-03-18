<template>
  <div  class="sm-sec-right">
    <shop-tm-header> </shop-tm-header>
    <shop-tm-content> </shop-tm-content>
    <shop-tm-footer> </shop-tm-footer>
  </div>
</template>

<script>
  import ShopTmContent from "./ShopTmContent"
  import ShopTmFooter from "./ShopTmFooter"
  import ShopTmHeader from "./ShopTmHeader"
    export default {
        name: "shop-tm-section",
      components:{
        ShopTmContent,
        ShopTmFooter,
        ShopTmHeader
      }
    }
</script>

<style scoped>
  .sm-sec-right{
    margin-left:0;
  }
</style>
