<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-cf-section> </shop-cf-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopCfSection from "./ShopCfSection"
    export default {
        name: "shop-classify",
      components:{
        ShopMgHeader,
        ShopCfSection
      }
    }
</script>

<style>
 @import "../../../../static/CmsShop/css/warning.css";
</style>
