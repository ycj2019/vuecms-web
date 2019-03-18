<template>
  <div class="sm-sec-right-two">
    <div class="aa">
				<span>
				</span>
    </div>
    <div class="bb">
      1
    </div>
    <div class="sm-sec-right-two-1">数码
    </div>
    <div class="sm-sec-right-two-1">shuma
    </div>
    <div class="sm-sec-right-two-1">数码
    </div>
    <div class="sm-sec-right-two-1">
      <input type="text" class="cf-sec-three" value="1"/>
    </div>
    <div class="sm-sec-right-two-1">
      <div class="bianji">
        <span class="iconfont icon-edit_small"></span>
      </div>
      <div class="shanchu">
        <span class="iconfont icon-del"></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-cf-rt-content"
    }
</script>

<style scoped>
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
