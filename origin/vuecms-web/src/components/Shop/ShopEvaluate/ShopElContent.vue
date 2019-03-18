<template>
  <div class="sm-sec-content">
    <shop-el-top> </shop-el-top>
    <shop-el-bottom> </shop-el-bottom>
  </div>
</template>

<script>
  import ShopElTop from "./ShopElTop"
  import ShopElBottom from "./ShopElBottom"
    export default {
        name: "shop-el-content",
      components:{
        ShopElTop,
        ShopElBottom
      }
    }
</script>

<style scoped>

</style>
