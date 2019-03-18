<template>
  <div  class="sm-sec-right">
    <shop-tp-header> </shop-tp-header>
    <shop-tp-content> </shop-tp-content>
    <shop-tp-footer> </shop-tp-footer>
  </div>
</template>

<script>
  import ShopTpContent from "./ShopTpContent"
  import ShopTpFooter from "../common/ShopTpFooter"
  import ShopTpHeader from "../common/ShopTpHeader"
    export default {
        name: "shop-tp-section",
      components:{
        ShopTpContent,
        ShopTpFooter,
        ShopTpHeader
      }
    }
</script>

<style scoped>

</style>
