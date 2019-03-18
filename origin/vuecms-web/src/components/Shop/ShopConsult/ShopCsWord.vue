<template>
  <div class="sm-sec-right-two">
    <div class="aa">
										<span>
										</span>
    </div>
    <div class="bb">
      106
    </div>
    <div class="sm-sec-right-two-1">2019-03-12 16:17:50
    </div>
    <div class="sm-sec-right-two-1">海尔彩电LE32G310G 32英寸高清LED液晶电视
    </div>
    <div class="sm-sec-right-two-1">
      fengx
    </div>
    <div class="cc">
      <div class="bianji">
        <router-link to="/shop/ShopReply">
        <span class="iconfont icon-dingdanshu"></span>
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
        name: "shop-cs-word"
    }
</script>

<style scoped>
  .cc{
    width:200px;
  }
  .cc .icon-dingdanshu{
    font-size: 18px;
  }
  .cc .icon-del{
    font-size: 20px;
  }
  .bianji{
    background: #ffbf35;
    color:#fff;
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
