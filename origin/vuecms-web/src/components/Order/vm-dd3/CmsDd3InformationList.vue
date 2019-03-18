<template>
  <div class="vm-dd3-bigBox4">
    <ul>
      <li>
        <input type="checkbox">
        <span>id</span>
        <span>发货人</span>
        <span>联系方式</span>
        <span>发货地址</span>
        <span>是否默认</span>
        <span>操作</span>
      </li>
        <cms-dd3-information></cms-dd3-information>
    </ul>
  </div>
</template>

<script>
    import CmsDd3Information from "./CmsDd3Information"
    export default {
        name: "CmsDd3InformationList",
        components:{
          CmsDd3Information
        }
    }
</script>

<style scoped>
  .vm-dd3-bigBox4{
    width:100%;
    height:95px;
    margin-top: -10px;
  }
  .vm-dd3-bigBox4 ul{
    width: 100%;
  }
  .vm-dd3-bigBox4 ul li{
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -40px;
  }
  .vm-dd3-bigBox4 ul li>span{
    width: 194px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd3-bigBox4 ul li>span:nth-child(2),.vm-dd3-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd3-bigBox4 ul li>span:last-child{
    width: 200px;
  }
</style>
