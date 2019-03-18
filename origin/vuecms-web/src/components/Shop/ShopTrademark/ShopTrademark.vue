<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-tm-section> </shop-tm-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopTmSection from "./ShopTmSection"
    export default {
        name: "shop-trademark",
      components:{
        ShopMgHeader,
        ShopTmSection
      }
    }
</script>

<style>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
