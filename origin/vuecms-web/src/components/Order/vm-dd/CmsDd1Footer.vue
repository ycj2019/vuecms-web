<template>
  <div class="vm-dd-bigBox5">
    <div class="vm-dd-bigBox5Left">
      <span>批量删除</span>
      <p>每页显示
        <el-input v-model="input"></el-input>条，输入后按回车
      </p>
    </div>
    <div class="vm-dd-bigBox5Right">
      <span class="spa4">共1120条</span>
      <!--<p><img src="../../../static/dd-1/img/6.png" alt=""><span class="spa3">1</span><span>2</span>-->
        <!--<span>3</span><span>4</span><span>5</span><span>6</span>-->
        <!--<span>...</span><span>112</span><img src="../../../static/dd-1/img/7.png" alt="">-->
      <!--</p>-->
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsDd1Footer"
    }
</script>

<style scoped>
  .el-input{
    width: 60px;
    margin-right: 10px;
  }
  .el-pagination{
    padding:22px 5px;
  }
  .vm-dd-bigBox5{
    display: flex;
    justify-content: space-between;
  }
  .vm-dd-bigBox5Left{
    width:403px ;
    height: 72px;
    display: flex;
    align-items: center;
  }
  .vm-dd-bigBox5Left input{
    width:58px;
    height: 30px;
    border-radius: 3px;
    margin-left: 9px;
    margin-right: 14px;
  }
  .vm-dd-bigBox5Left span{
    color:#c0c4cc;
    font-size:14px;
    margin-left: 24px;
    padding: 8px 15px;
    border:1px solid #ebeef5;
    border-radius: 4px;
  }
  .vm-dd-bigBox5Left p{
    margin-left: 35px;
    color:#c0c4cc;
    font-size:14px;
  }
  .vm-dd-bigBox5Right{
    line-height: 72px;
    width: 470px;
    height: 72px;
    display: flex;

  }
  .vm-dd-bigBox5Right p{
    width: 350px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vm-dd-bigBox5Right p img{
    width:6px ;
    height: 11px;
  }
  .vm-dd-bigBox5Right p span{
    cursor: pointer;
    color:#303133;
    font-weight: bolder;
  }
  .vm-dd-bigBox5Right .spa3{
    color:#409eff;
  }
  .vm-dd-bigBox5Right .spa4{
    color:#606266;
  }
</style>
