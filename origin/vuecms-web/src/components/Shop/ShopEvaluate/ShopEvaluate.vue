<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-el-section> </shop-el-section>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopElSection from "./ShopElSection"
    export default {
        name: "shop-evaluate",
      components:{
        ShopMgHeader,
        ShopElSection
      }
    }
</script>

<style>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
