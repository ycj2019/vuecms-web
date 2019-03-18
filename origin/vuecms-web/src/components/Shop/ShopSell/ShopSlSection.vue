<template>
  <div  class="sm-sec-right">
    <shop-sl-header> </shop-sl-header>
    <shop-sl-content> </shop-sl-content>
    <shop-sl-footer> </shop-sl-footer>
  </div>
</template>

<script>
  import ShopSlContent from "./ShopSlContent"
  import ShopSlFooter from "./ShopSlFooter"
  import ShopSlHeader from "./ShopSlHeader"
    export default {
        name: "shop-sl-section",
      components:{
        ShopSlContent,
        ShopSlFooter,
        ShopSlHeader
      }
    }
</script>

<style scoped>

</style>
