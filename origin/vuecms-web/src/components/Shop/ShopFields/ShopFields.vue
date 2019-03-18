<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-fl-section> </shop-fl-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopFlSection from "./ShopFlSection"
    export default {
        name: "shop-fields",
      components:{
        ShopMgHeader,
        ShopFlSection
      }
    }
</script>

<style scoped>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
