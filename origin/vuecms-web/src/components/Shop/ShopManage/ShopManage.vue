<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <shop-mg-content> </shop-mg-content>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import ShopMgContent from "./ShopMgContent"
    export default {
        name: "shop-manage",
      components:{
        ShopMgHeader,
        ShopMgContent
      }
    }
</script>

<style>
  @import "../../../../static/CmsShop/css/warning.css";
</style>
