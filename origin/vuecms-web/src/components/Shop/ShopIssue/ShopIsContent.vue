<template>
  <div class="sm-flex-items">
    <shop-is-menu-one> </shop-is-menu-one>
    <shop-is-menu-two> </shop-is-menu-two>
    <shop-is-menu-three> </shop-is-menu-three>
  </div>
</template>

<script>
  import ShopIsMenuOne from "./ShopIsMenuOne"
  import ShopIsMenuTwo from "./ShopIsMenuTwo"
  import ShopIsMenuThree from "./ShopIsMenuThree"
    export default {
        name: "shop-is-content",
      components:{
        ShopIsMenuOne,
        ShopIsMenuTwo,
        ShopIsMenuThree
      }
    }
</script>

<style scoped>
  .sm-flex-items{
    display: flex;
  }
</style>
