<template>
  <div class="form-bottom-bar">
    <button type="button" class="el-button">
      <span>提交并继续添加</span>
    </button>
    <button type="button" class="el-button">
      <span>回复</span>
    </button>
    <button type="button" class="el-button">
      <span>重置</span>
    </button>
    <div class="help-info">选择“提交并继续添加”按钮会停留在添加页面；选择“添加”按钮后将跳转到对应的列表页。</div>
  </div>
</template>

<script>
    export default {
        name: "shop-rl-footer"
    }
</script>

<style scoped>
  .form-bottom-bar {
    padding: 0 24px;
    margin: 32px 0 32px 160px;
  }
  .el-button {
    padding: 8px 15px;
    min-width: 80px;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    font-size: 14px;
    border-radius: 4px;

  }
  .el-button:hover{
    opacity: .7;
    transition:.5s;
  }
  .el-button:nth-child(1){
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  .el-button:nth-child(2){
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    margin-left: 10px;
  }
  .el-button:nth-child(3){
    color: #fff;
    background-color: #909399;
    margin-left: 10px;
    border-color: #909399;
  }
  .help-info {
    font-size: 14px;
    color: #adb3bf;
    margin: 20px 0;
    user-select: none;
  }
</style>
