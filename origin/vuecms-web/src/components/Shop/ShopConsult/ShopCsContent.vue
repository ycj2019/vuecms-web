<template>
  <div class="sm-sec-content">
    <shop-cs-top> </shop-cs-top>
    <shop-cs-bottom> </shop-cs-bottom>
  </div>
</template>

<script>
  import ShopCsTop from "./ShopCsTop"
  import ShopCsBottom from "./ShopCsBottom"
    export default {
        name: "shop-cs-content",
      components:{
        ShopCsTop,
        ShopCsBottom
      }
    }
</script>

<style scoped>

</style>
