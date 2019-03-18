<template>
  <div data-v-179defde="" data-v-22a28710="" class="el-col-lg-24"><div data-v-179defde="" class="el-form-item">
    <label data-v-179defde="" class="el-form-item__label">规格</label>
    <div data-v-179defde="" class="el-form-item__content">
      <span>销售价：</span>
      <input type="text" class="el-input"/>
      <span>成本价：</span>
      <input type="text" class="el-input"/>
      <span>市场价：</span>
      <input type="text" class="el-input"/>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "shop-butoon"
    }
</script>

<style scoped>
  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-input{
    width:100px;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    margin-right:10px;
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
    display: flex;
    margin-left: 160px;
  }
  .gray{
    font-size: 14px;
    color: #c3c3c3;
    padding-left: 10px;
  }
</style>
