<template>
  <ul>
  <li>
    <div><span>订单编号</span><span class="spa5">1492674091791</span></div>
    <div><span>支付状态</span><span class="spa5">已支付</span></div>
  </li>
  <li>
    <div><span>收货人姓名</span><span class="spa5">ly</span></div>
    <div><span>收货人手机号</span><span class="spa5">1356481521</span></div>
  </li>
  <li>
    <div><span>收货人固定电话</span></div>
    <div><span>收货人邮编</span><span class="spa5">11111111</span></div>
  </li>
  <li>
    <div><span>收货人地址</span><span class="spa5">北京市-通州区-中仓街道-测试地址</span></div>
    <div></div>
  </li>
  <li>
    <div><span>物流单号</span><span class="spa5">861492587823613</span></div>
    <div><span>金额</span><span class="spa5">0</span></div>
  </li>
  <li>
    <div><span>操作员</span></div>
    <div></div>
  </li>
  <li>
    <div><span>备注</span></div>
    <div></div>
  </li>
  </ul>
</template>

<script>
    export default {
        name: "CmsDd2ChildrenInformation"
    }
</script>

<style scoped>
  .informationBottom ul{

  }
  .informationBottom ul li{
    height: 80px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  .informationBottom .spa5{
    margin-left: 30px;
    color:#000;
    font-size: 14px;
  }
  .informationBottom span{
    color:#606266;
    font-size: 14px;
  }
  .informationBottom ul li>div{
    width: 500px;

  }
</style>
