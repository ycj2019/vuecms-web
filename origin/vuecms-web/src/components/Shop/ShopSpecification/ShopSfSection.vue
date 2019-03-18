<template>
  <div  class="sm-sec-right">
    <shop-sf-header> </shop-sf-header>
    <shop-sf-content> </shop-sf-content>
    <shop-sf-footer> </shop-sf-footer>
  </div>
</template>

<script>
  import ShopSfContent from "./ShopSfContent"
  import ShopSfFooter from "./ShopSfFooter"
  import ShopSfHeader from "./ShopSfHeader"
    export default {
        name: "shop-sf-section",
      components:{
        ShopSfContent,
        ShopSfFooter,
        ShopSfHeader
      }
    }
</script>

<style scoped>

</style>
