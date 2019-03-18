<template>
  <div class="el-col-lg-24">
  <div class="el-form-item">
    <label class="el-form-item__label">商品名称:</label>
    <div class="el-form-item__content">
      测试山坡
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "shop-rl-content-one"
    }
</script>

<style scoped>
  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-col-lg-24 {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-form-item__label {
    width: 160px;
    text-align: right;
    float: left;
    padding-right: 30px;
    line-height: 36px;
    font-size: 14px;
    color: #606266;
    box-sizing: border-box;
  }
  .el-form-item__content {
    line-height:36px;
    position: relative;
    font-size: 14px;
    margin-left: 160px;
  }

</style>
