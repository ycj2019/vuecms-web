<template>
  <section class="sm-section">
    <div class="sm-sec-one">
      <div class="sm-sec-1">
        <div class="sm-menu">
          <shop-is-content> </shop-is-content>
          <shop-is-middle> </shop-is-middle>
          <shop-is-footer> </shop-is-footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ShopIsContent from "./ShopIsContent"
  import ShopIsFooter from "./ShopIsFooter"
  import ShopIsMiddle from "./ShopIsMiddle"
    export default {
        name: "shop-issue",
      components:{
        ShopIsContent,
        ShopIsFooter,
        ShopIsMiddle
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
  .sm-menu{
    height: 500px;
    background: rgb(255, 255, 255);
    padding: 24px;
    box-sizing: border-box;
  }
  .sm-section .sm-sec-1{
    border:none;
  }
  .sm-white-items li{
    cursor: pointer;
    padding: 8px 12px;
    font-size: 14px;
  }
  .sm-sec-1 {
    margin-bottom: 0;
    border: 1px solid #d4dde2;
  }
</style>
