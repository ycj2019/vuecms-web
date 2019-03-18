<template>
  <div class="sm-sec-content">
    <shop-tp-top> </shop-tp-top>
    <shop-tp-bottom> </shop-tp-bottom>
  </div>
</template>

<script>
  import ShopTpTop from "./ShopTpTop"
  import ShopTpBottom from "./ShopTpBottom"
    export default {
        name: "shop-tp-content",
      components:{
        ShopTpTop,
        ShopTpBottom
      }
    }
</script>

<style scoped>

</style>
