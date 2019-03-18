<template>
  <div class="sm-sec-content">
    <shop-tm-top> </shop-tm-top>
    <shop-tm-bottom> </shop-tm-bottom>
  </div>
</template>

<script>
  import ShopTmTop from "./ShopTmTop"
  import ShopTmBottom from "./ShopTmBottom"
    export default {
        name: "shop-tm-content",
      components:{
        ShopTmTop,
        ShopTmBottom
      }
    }
</script>

<style scoped>

</style>
