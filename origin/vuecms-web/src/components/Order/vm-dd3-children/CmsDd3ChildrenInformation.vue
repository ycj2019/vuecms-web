<template>
  <div>
  <li>
    <span><i>*</i>发货人：</span>
    <input type="text">
  </li>
  <li>
    <span><i>*</i>发货人联系方式：</span>
    <input type="text">
  </li>
  <li>
    <span><i>*</i>发货地址：</span>
    <input type="text">
  </li>
  <li>
    <span class="spa2"><i>*</i>是否默认：</span>
    <input class="inputs" type="radio" name="a"> <span class="spa">是</span>
    <input class="inputs" type="radio" checked name="a"> <span class="spa">否</span>
  </li>
  </div>
</template>

<script>
    export default {
        name: "CmsDd3ChildrenInformation"
    }
</script>

<style scoped>
  .center ul li{
    width: 100%;
    height: 79px;
    border-bottom: 1px solid #eeeeee;
    line-height: 80px;
  }
  .center i{
    font-style: normal;
    color:#f56c6c;
    margin-right: 5px;
  }
  .center ul li:nth-child(2) span{
    margin-left: 20px;
  }
  .center ul li:nth-child(3) span,.center ul li:nth-child(4) .spa2{
    margin-left: 60px;
  }
  .center ul li span{
    margin-left: 75px;
    color:#606266;
    font-size:14px
  }
  .center ul li input{
    width: 298px;
    height: 34px;
    border-radius:4px;
    border:1px solid #d8dce5;
    margin-left: 31px;
  }
  .center ul .inputs{
    width: 15px;
    height: 15px;
  }
  .center ul .spa{
    margin-left:5px;
  }
</style>
