<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-wn-section> </shop-wn-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopWnSection from "./ShopWnSection"
    export default {
        name: "shop-warning",
        components:{
        ShopMgHeader,
        ShopWnSection
      }
    }
</script>

<style>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
