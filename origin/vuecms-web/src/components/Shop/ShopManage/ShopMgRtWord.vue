<template>
  <div class="sm-sec-right-two">
    <div class="aa">
										<span>
										</span>
    </div>
    <div class="bb">
      <img src="../../../../static/CmsShop/imgs/tp-1.png" alt="">
    </div>
    <div class="cc">测试商品
    </div>
    <div class="sm-sec-right-two-1">三星
    </div>
    <div class="sm-sec-right-two-1">
    </div>
    <div class="sm-sec-right-two-1">1
    </div>
    <div class="sm-sec-right-two-1">6
    </div>
    <div class="sm-sec-right-two-1">
      <div class="bianji">
        <router-link to="/shop/ShopAmend">
          <span class="iconfont icon-edit_small"></span>
        </router-link>

      </div>
      <div class="shanchu">
        <span class="iconfont icon-del"></span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-mg-rt-word"
    }
</script>

<style scoped>
    .sm-sec-right-two{
      height:69px;
    }
    .bb{
      height:56px;
    }
  .bb img{
    vertical-align: middle;
  }
    .bianji:hover{
      opacity: .5;
      transition: .5s;
    }
    .shanchu:hover{
      opacity: .5;
      transition: .5s;
    }
    .sm-sec-right-two:nth-child(2n){
      background-color:#FAFAFA;
    }
    .sm-sec-right-two:hover{
      background-color:#F5F7FA;
    }
</style>
