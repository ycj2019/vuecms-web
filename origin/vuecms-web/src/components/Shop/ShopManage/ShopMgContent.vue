<template>
  <div class="sm-sec-two">
      <shop-mg-left> </shop-mg-left>
      <shop-mg-right> </shop-mg-right>
  </div>
</template>

<script>
  import ShopMgLeft from "../common/ShopMgLeft"
  import ShopMgRight from "./ShopMgRight"
    export default {
        name: "shop-mg-content",
      components:{
        ShopMgLeft,
        ShopMgRight
      }
    }
</script>

<style scoped>

</style>
