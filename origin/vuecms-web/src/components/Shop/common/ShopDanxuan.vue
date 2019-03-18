<template>
  <div data-v-179defde="" data-v-22a28710="" class="el-col-lg-24"><div data-v-179defde="" class="el-form-item">
    <label data-v-179defde="" class="el-form-item__label">是否上架</label>
    <div data-v-179defde="" class="el-form-item__content">
      <el-radio v-model="radio" label="1">是</el-radio>
      <el-radio v-model="radio" label="2">否</el-radio>

    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "shop-danxuan",
      data () {
        return {
          radio: '1'
        };
      }
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
