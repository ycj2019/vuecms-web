<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <shop-mg-header> </shop-mg-header>
        <as-content> </as-content>
        <shop-rl-footer> </shop-rl-footer>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopMgHeader from "../common/ShopMgHeader"
  import AsContent from "./AsContent"
  import ShopRlFooter from "../common/ShopRlFooter"
    export default {
        name: "add-specification",
      components:{
        ShopMgHeader,
        AsContent,
        ShopRlFooter
      }
    }
</script>

<style scoped>
  .sm-section{
    margin-left: 220px;
    position: relative;
    right: 0;
    left: 0;
    padding-top: 0;
  }
  .sm-sec-one{
    top: 64px;
    bottom: 24px;
    padding: 0 24px;
  }
  .sm-sec-1{
    background: #fff;
    border: 1px solid #d4dde2;
    margin-bottom: 24px;
  }
</style>
