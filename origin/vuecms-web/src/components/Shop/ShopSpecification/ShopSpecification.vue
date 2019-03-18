<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-sf-section> </shop-sf-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopSfSection from "./ShopSfSection"
    export default {
        name: "shop-specification",
      components:{
        ShopMgHeader,
        ShopSfSection
      }
    }
</script>

<style>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
