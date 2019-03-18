<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-cs-section> </shop-cs-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopCsSection from "./ShopCsSection"
    export default {
        name: "shop-consult",
      components:{
        ShopMgHeader,
        ShopCsSection
      }
    }
</script>

<style>
@import "../../../../static/CmsShop/css/warning.css";
</style>
