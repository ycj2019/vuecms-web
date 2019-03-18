<template>
  <div class="el-col-lg-24">
    <div class="border-none el-col el-col-12">
      <div class="el-form-item is-required">
        <label class="el-form-item__label">类型名称</label>
        <div class="el-form-item__content">
          <div class="w192 el-input">
            <input type="text" autocomplete="off" class="el-input__inner" value="生活电器"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-at-one"
    }
</script>

<style scoped>
  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .form-group .el-col-lg-12 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-col-lg-24{
    width:100%;
  }
  .border-none {
    margin-top: 0!important;
    border: none!important;
  }
  .el-col-12 {
    width: 50%;
  }
  .el-form-item__label {
    text-align: right;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 36px;
    padding-right: 30px;
    width: 160px;
    box-sizing: border-box;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-form-item__content {
    line-height: 36px;
    position: relative;
    font-size: 14px;
    margin-left: 160px;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 300px;
  }
  .el-form-item .el-input__inner {
    height: 36px;
    border: 1px solid #d8dce5;
    line-height: 36px;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
</style>
