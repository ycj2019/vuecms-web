<template>
  <div class="vm-dd2-bigBox4">
    <ul>
      <li>
        <input type="checkbox" />
        <span>id</span>
        <span>订单编号</span>
        <span>物流编号</span>
        <span>是否已打印快递面单</span>
        <span>操作员</span>
        <span>操作</span>
      </li>
      <cms-dd2-information></cms-dd2-information>

    </ul>
  </div>
</template>

<script>
  import CmsDd2Information from "./CmsDd2Information"
    export default {
        name: "CmsDd2InformationList",
        components:{
          CmsDd2Information
        }
    }
</script>

<style scoped>
  .vm-dd2-bigBox4{
    width:1073px;
    height:287px;
    margin-top: -10px;
  }
  .vm-dd2-bigBox4 ul li{
    width: 966px;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -40px;
  }
  .vm-dd2-bigBox4 ul li>span{
    width: 194px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd2-bigBox4 ul li>span:nth-child(2),.vm-dd2-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd2-bigBox4 ul li>span:last-child{
    width: 200px;
  }
</style>
