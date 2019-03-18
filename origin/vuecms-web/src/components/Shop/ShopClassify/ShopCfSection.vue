<template>
  <div class="sm-sec-two">
    <shop-mg-left> </shop-mg-left>
    <shop-cf-right> </shop-cf-right>
  </div>
</template>

<script>
  import ShopMgLeft from "../common/ShopMgLeft"
  import ShopCfRight from "./ShopCfRight"
    export default {
        name: "shop-cf-section",
      components:{
        ShopMgLeft,
        ShopCfRight
      }
    }
</script>

<style scoped>

</style>
