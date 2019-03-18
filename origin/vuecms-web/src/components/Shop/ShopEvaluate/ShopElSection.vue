<template>
  <div  class="sm-sec-right">
    <shop-cs-header> </shop-cs-header>
    <shop-el-content> </shop-el-content>
    <shop-tp-footer> </shop-tp-footer>
  </div>
</template>

<script>
  import ShopElContent from "./ShopElContent"
  import ShopTpFooter from "../common/ShopTpFooter"
  import ShopCsHeader from "../common/ShopCsHeader"
    export default {
        name: "shop-el-section",
      components:{
        ShopElContent,
        ShopTpFooter,
        ShopCsHeader
      }
    }
</script>

<style scoped>

</style>
