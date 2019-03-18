<template>
  <div class="footer">
    <span>提交并继续添加</span>
    <span>添加</span>
    <span>重置</span>
    <p>选择提交并继续添加按钮会停留在添加页面，选择添加会跳转到相应的页面</p>
  </div>
</template>

<script>
    export default {
        name: "CmsColumnAddPageFoot"
    }
</script>

<style scoped>
  .footer{
    height: 70px;
    margin-top: 30px;
    /*padding-left: 60px;*/
  }
  .footer span{
    display: inline-block;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 4px;
    padding: 0 20px;
    color: #fff;
    margin-right: 10px;
  }
  .footer span:first-child{
    background: #e6a23c;
    margin-left: 160px;
  }
  .footer span:nth-child(2){
    background:#409eff;
  }
  .footer span:nth-child(3){
    background: #909399;
  }
  .footer p{
    margin-left: 160px;
    line-height: 53px;
  }
</style>
