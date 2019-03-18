<template>
  <div class="sm-sec-content">
    <shop-sf-top> </shop-sf-top>
    <shop-sf-bottom> </shop-sf-bottom>
  </div>
</template>

<script>
  import ShopSfTop from "./ShopSfTop"
  import ShopSfBottom from "./ShopSfBottom"
    export default {
        name: "shop-sf-content",
      components:{
        ShopSfTop,
        ShopSfBottom
      }
    }
</script>

<style scoped>

</style>
