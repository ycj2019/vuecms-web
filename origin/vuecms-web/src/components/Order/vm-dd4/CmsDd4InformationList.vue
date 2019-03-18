<template>
  <div class="vm-dd4-bigBox4">
    <ul>
      <li class="lis">
        <input type="checkbox">
        <span>id</span>
        <span>退款流水号</span>
        <span>订单编号</span>
        <span>会员名</span>
        <span>下单日期</span>
        <span>退款类型</span>
        <span>申请时间</span>
        <span>状态</span>
        <span>操作</span>
      </li>
      <cms-dd4-information></cms-dd4-information>


    </ul>
  </div>
</template>

<script>
    import CmsDd4Information from "./CmsDd4Information"
    export default {
        name: "CmsDd4InformationList",
        components:{
          CmsDd4Information
        }

    }
</script>

<style scoped>
  .vm-dd4-bigBox4{
    width:100%;
    height:863px;
    margin-top: -10px;
  }
  .vm-dd4-bigBox4 ul{
    width: 100%;
  }
  .vm-dd4-bigBox4 ul li{
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -40px;
  }
  .vm-dd4-bigBox4 ul li>span{
    width: 108px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(3){
    width: 112px;
  }
  .vm-dd4-bigBox4 ul .lis>span:nth-child(5){
    margin-left:30px;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(6),.vm-dd4-bigBox4 ul li>span:nth-child(7),.vm-dd4-bigBox4 ul li>span:nth-child(8){
    line-height: 20px;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(2),.vm-dd4-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd4-bigBox4 ul li>span:last-child{
    width: 200px;
  }
</style>
