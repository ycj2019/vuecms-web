<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-sl-section> </shop-sl-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopSlSection from "./ShopSlSection"
    export default {
        name: "shop-sell",
      components:{
        ShopMgHeader,
        ShopSlSection
      }
    }
</script>

<style>
@import "../../../../static/CmsShop/css/warning.css";
</style>
