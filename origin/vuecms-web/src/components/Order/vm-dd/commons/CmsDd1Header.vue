<template>
  <div class="vm-dd-header">
    <span class="iconfont icon-home-copy"></span>
    <img src="../../../../../static/dd-1/img/1.png" alt="">
    <span>订单</span>
    <img src="../../../../../static/dd-1/img/1.png" alt="">
    <span>订单管理</span>
  </div>
</template>

<script>
    export default {
        name: "CmsDd1Header"
    }
</script>

<style scoped>
  .vm-dd-header{
    width: 100%;
    height:64px;
    line-height: 64px;
    padding-left: 25px;
  }
  .vm-dd-header img{
    margin-left: 10px;
  }
  .vm-dd-header span{
    margin-left: 10px;
    color: #999999;
    font-size:14px;
    cursor: pointer;
  }
  .vm-dd-header .iconfont{
    color:skyblue;
  }
</style>
