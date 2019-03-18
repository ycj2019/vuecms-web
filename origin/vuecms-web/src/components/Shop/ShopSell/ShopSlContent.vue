<template>
  <div class="sm-sec-content">
    <shop-sl-top> </shop-sl-top>
    <shop-sl-bottom> </shop-sl-bottom>
  </div>
</template>

<script>
  import ShopSlTop from "./ShopSlTop"
  import ShopSlBottom from "./ShopSlBottom"
    export default {
        name: "shop-sl-content",
      components:{
        ShopSlTop,
        ShopSlBottom
      }
    }
</script>

<style scoped>

</style>
