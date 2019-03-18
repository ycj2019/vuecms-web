<template>
  <div class="vm-dd-bigBox4">
    <ul>
      <li class="lis">
        <input type="checkbox">
        <span>id</span>
        <span>订单编号</span>
        <span>买家用户名</span>
        <span>订单金额（元）</span>
        <span>下单日期</span>
        <span>订单状态</span>
        <span>支付状态</span>
        <span>支付方式</span>
        <span>配送状态</span>
        <span>配送方式</span>
        <span>操作</span>
      </li>
      <cms-dd1-infomation></cms-dd1-infomation>
      <cms-dd1-infomation></cms-dd1-infomation>
    </ul>
  </div>
</template>

<script>
    import CmsDd1Infomation from "./CmsDd1Information"
    export default {
        name: "CmsDd1InformationList",
        components:{
          CmsDd1Infomation
        }
    }
</script>

<style scoped>
  .vm-dd-bigBox4{
    width:100%;
    height:526px;
    margin-top: -10px;
    /*overflow-x: hidden;*/
  }
  .vm-dd-bigBox4 ul{
    width: 100%;
    margin-top: 10px;
  }
  .vm-dd-bigBox4 ul li{
    width:100%;
    height:47px ;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*margin-left: -40px;*/
  }

  .vm-dd-bigBox4 ul li>span{
    width: 86px;
    text-align: center;
  }
  .vm-dd-bigBox4 ul li>span:nth-child(2),.vm-dd-bigBox4 ul li input{
    width: 68px;
  }
  .vm-dd-bigBox4 ul li>span:nth-child(3){
    width: 90px;
  }
  .vm-dd-bigBox4 ul li>span:last-child{
    flex: 1;
    /*width: 200px;*/
  }
  .vm-dd-bigBox4 ul li span{
    color:#656565 ;
    font-size: 12px;
  }


</style>
