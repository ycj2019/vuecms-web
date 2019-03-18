<template>
  <div  class="sm-sec-right">
      <shop-wn-content> </shop-wn-content>
      <shop-wn-footer> </shop-wn-footer>
  </div>
</template>

<script>
  import ShopWnContent from "./ShopWnContent"
  import ShopWnFooter from "./ShopWnFooter"
    export default {
        name: "shop-wn-section",
      components:{
        ShopWnContent,
        ShopWnFooter
      }
    }
</script>

<style scoped>

</style>
