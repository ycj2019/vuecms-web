<template>
  <div class="el-col el-col-24 flex-50">
    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 160px;">品牌</label>
      <div class="el-form-item__content" style="margin-left: 160px;">
        <div class="el-select w192">
          <div class="el-input el-input--suffix">
            <input type="text" autocomplete="off" placeholder="请选择品牌" readonly="readonly" class="el-input__inner">
            <span class="iconfont icon-el-icon-arrow-down"></span>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-select"
    }
</script>

<style scoped>
  .flex-50 {
    width: 50%;
    flex: auto;
    margin-top: 0;
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
  .el-select {
    display: inline-block;
    position: relative;
  }
  .w192 {
    width: 300px;
  }
  .el-select>.el-input {
    display: block;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
  .el-form-item .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 30px;
  }
  .el-select .el-input__inner {
    cursor: pointer;
    padding-right: 35px;
  }
  .el-input__inner {
    border: 1px solid #d8dce5;
  }
  .el-input__inner {
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
  .iconfont{
    position: absolute;
    top:0;
    right: 12px;
    color: #c0c4cc;
    font-size: 14px;
  }
</style>
