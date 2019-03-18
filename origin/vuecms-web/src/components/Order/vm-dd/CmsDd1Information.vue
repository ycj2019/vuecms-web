<template>
  <div>
  <li class="lis2">
    <input type="checkbox" name="choose">
    <span>1971</span>
    <span>1552383750253</span>
    <span>test1</span>
    <span>3100(含运费0)</span>
    <span>2019-03-12 17:42:30</span>
    <span>未确认</span>
    <span>未支付</span>
    <span>网上支付</span>
    <span>未发货</span>
    <span>普通快递</span>
    <span>
          <span class="iconfont icon-torder_light"></span>
          <span class="iconfont icon-edit_small"></span>
          <span class="iconfont icon-del"></span>
    </span>
  </li>


  </div>
</template>

<script>
    export default {
        name: "CmsDd1Information"
    }
</script>

<style scoped>
  .vm-dd-bigBox4 ul li{
    width:1100px;
    height:47px ;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -40px;
  }
  .vm-dd-bigBox4 ul li:hover{
    background: darkseagreen;
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
  .lis2 .iconfont{
    font-size:30px;
  }
  .icon-torder_light{
    padding: 3px 3px;
    background: #ffbf35;
    border-radius: 2px;
  }
  .icon-edit_small{
    padding: 3px 3px;
    background: #17d57e;
    margin-left: 6px;
    border-radius: 2px;
  }
  .icon-del{
    padding: 3px 3px;
    background: #ff8b53;
    margin-left: 6px;
    border-radius: 3px;
  }

</style>
