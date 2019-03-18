<template>
  <div class="vm-dd2-bigBox5">
    <div class="vm-dd2-bigBox5Left">
      <span>打印订单运单</span>
      <span>标记为已打印</span>
      <span>标记为未打印</span>
      <span>批量删除</span>
    </div>
    <div class="vm-dd2-bigBox5Middle">
      <span>每页显示</span>
      <input type="text" value="20">
      <span>条，输入后按回车</span>
    </div>
    <div class="vm-dd2-bigBox5Right">
      <span>共5条</span>
      <img src="../../../../static/dd/dd-2/img/6.png" alt="">
      <span>1</span>
      <img src="../../../../static/dd/dd-2/img/7.png" alt="">
    </div>

  </div>
</template>

<script>
    export default {
        name: "CmsDd2Footer"
    }
</script>

<style scoped>
  .vm-dd2-bigBox5Left{
    width:475px ;
    height: 72px;
    line-height: 72px;
    float: left;
  }
  .vm-dd2-bigBox5Left span{
    color: #c0c4cc;
    font-size: 14px;
    margin-left: 10px;
    padding: 9px 15px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    cursor: not-allowed;

  }
  .vm-dd2-bigBox5Middle{
    width:255px;
    height: 72px;
    float: left;
    line-height: 72px;
    margin-left: 35px;
  }
  .vm-dd2-bigBox5Middle span{
    color:#999999;
    font-size:14px
  }
  .vm-dd2-bigBox5Middle input{
    width:58px ;
    height:30px ;
    border-radius: 4px;
    border:1px solid #d8dce5;
  }
  .vm-dd2-bigBox5Middle span:last-child{
    margin-left: 15px;
  }
  .vm-dd2-bigBox5Right{
    width: 200px;
    height: 72px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .vm-dd2-bigBox5Right span{
    color:#606266;
    font-size:14px;
  }
  .vm-dd2-bigBox5Right span:nth-child(3){
    color: #409eff;
  }
</style>
