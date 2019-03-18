<template>
  <div class="el-col-lg-24">
    <div class="el-form-item">
      <label class="el-form-item__label">评价内容:</label>
      <div class="el-form-item__content">
        <div class="w192 el-textarea">
        				<textarea class="el-textarea__inner">
        				</textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-rl-content-two"
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
  .el-textarea {
    display: inline-block;
    width: 300px;
    vertical-align: bottom;
    font-size: 14px;
    min-height: 33px;
  }
  .el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    font-size: inherit;
    width:100%;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    overflow:hidden;
  }
</style>
