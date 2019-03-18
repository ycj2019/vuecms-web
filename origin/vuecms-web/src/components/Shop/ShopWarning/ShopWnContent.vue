<template>
  <div class="sm-sec-content">
    <div class="sm-sec-right-two aaa">
    </div>
    <shop-wn-top> </shop-wn-top>
    <shop-wn-bottom> </shop-wn-bottom>
  </div>
</template>

<script>
  import ShopWnTop from "./ShopWnTop"
  import ShopWnBottom from "./ShopWnBottom"
    export default {
        name: "shop-wn-content",
      components:{
        ShopWnTop,
        ShopWnBottom
      }
    }
</script>

<style scoped>
  .aaa{
    height:40px;
  }
</style>
