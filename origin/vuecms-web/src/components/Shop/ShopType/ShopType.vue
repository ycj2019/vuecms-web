<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-tp-section> </shop-tp-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopTpSection from "./ShopTpSection"
    export default {
        name: "shop-type",
      components:{
        ShopMgHeader,
        ShopTpSection
      }
    }
</script>

<style>
    @import "../../../../static/CmsShop/css/warning.css";
</style>
