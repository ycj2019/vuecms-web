<template>
  <div class="footer">
    <div class="footer2">
      <div class="footer2Top">
        <span>提交并继续添加</span>
        <span>添加</span>
        <span>重置</span>
      </div>
      <div class="footer2Bottom">
        <span>选择"提交并继续添加"按钮会停留在添加页面;选择"添加"按钮后将跳转到对应的列表页。</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsDd3ChildrenFooter"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 135px;
    background: #fff;

  }
  .footer2{
    width: 555px;
    height: 135px;
    margin-left: 180px;
  }
  .footer2Top{
    height: 88px;
    line-height: 88px;
  }
  .footer2Top span{
    margin-left: 14px;
    cursor: pointer;
  }
  .footer2Top span:nth-child(1){
    padding:10px 16px;
    background: #e6a23c;
    border-radius: 3px;
    color: #fff;
  }
  .footer2Top span:nth-child(2),.footer2Top span:nth-child(3){
    padding:10px 26px;
    color: #fff;
    border-radius: 3px;
  }
  .footer2Top span:nth-child(2){
    background: #409eff;
  }
  .footer2Top span:nth-child(3){
    background: #909399;
  }
  .footer2Bottom span{
    color:#adb3bf;
    font-size:14px;
    cursor: pointer;
  }

</style>
