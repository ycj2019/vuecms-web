<template>
  <div  class="sm-sec-right">
    <shop-cs-header> </shop-cs-header>
    <shop-cs-content> </shop-cs-content>
    <shop-tp-footer> </shop-tp-footer>
  </div>
</template>

<script>
  import ShopCsContent from "./ShopCsContent"
  import ShopTpFooter from "../common/ShopTpFooter"
  import ShopCsHeader from "../common/ShopCsHeader"
    export default {
        name: "shop-cs-section",
    components:{
      ShopCsContent,
      ShopTpFooter,
      ShopCsHeader
  }
    }
</script>

<style scoped>

</style>
