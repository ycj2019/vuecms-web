<template>
  <div class="sm-sec-right-two">
    <div class="aa">
										<span>
										</span>
    </div>

      <div class="sm-sec-right-two-1">name
      </div>
      <div class="sm-sec-right-two-1">字符串文本
      </div>
      <div class="sm-sec-right-two-1">
        <input type="text" class="cf-sec-three abc" value="分类名称"/>
      </div>
    <div class="sm-sec-right-two-1">
      <input type="text" class="cf-sec-three" value="10"/>
    </div>
    <div class="bb">
										<span>
										</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-fl-bottom"
    }
</script>

<style scoped>
  @import "../../../../static/CmsShop/css/warning.css";
  .bb{
    width:100px;
  }
  .abc{
    width:150px;
  }
  .sm-sec-right-two:nth-child(2n){
    background-color:#FAFAFA;
  }
  .sm-sec-right-two:hover{
    background-color:#F5F7FA;
  }
</style>
