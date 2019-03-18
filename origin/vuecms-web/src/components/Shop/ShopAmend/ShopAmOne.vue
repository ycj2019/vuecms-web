<template>
  <div class="el-col el-col-24 flex-50">
    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 160px;">分类</label>
      <div class="el-form-item__content" style="margin-left: 160px;">
        <span>三星</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-am-one"
    }
</script>

<style scoped>
  .flex-50 {
    width: 50%;
    flex: auto;
  }
 .el-col-24 {
   border-bottom: none;
    margin-top: 0;
  }
  .el-form-item {
    border-bottom: 1px dashed #eee;
    margin-bottom: 0;
    padding: 22px 0;
  }
  .el-form-item__label {
    text-align: right;
    float: left;
    font-size: 14px;
    color: #606266;
    padding-right: 30px;
    line-height: 36px;
    box-sizing: border-box;
  }
  .el-form-item__content {
    line-height: 36px;
    position: relative;
    font-size: 14px;
  }
</style>
