<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-am-content> </shop-am-content>
        <shop-rl-footer> </shop-rl-footer>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopAmContent from "./ShopAmContent"
  import ShopRlFooter from "../common/ShopRlFooter"
    export default {
        name: "shop-amend",
      components:{
        ShopMgHeader,
        ShopAmContent,
        ShopRlFooter
      }
    }
</script>

<style scoped>

</style>
