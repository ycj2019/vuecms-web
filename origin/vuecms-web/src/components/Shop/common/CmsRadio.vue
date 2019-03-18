<template>
  <div class="el-col-lg-24">
    <div class="el-form-item is-required">
      <label class="el-form-item__label">类型名称</label>
                    <div class="s-g-f-word">
                        <div class="s-g-f-input">
                            <input type="radio" class="s-g-f-r" name="name" value="true"/><span class="s-g-f-r-w">是</span>
                            <input type="radio" class="s-g-f-r" name="name" value="false"/><span class="s-g-f-r-w">否</span>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsRadio',
        components: {

        }
   }
</script>

<style scoped>
  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-col-lg-24{
    width:100%;
  }
    .s-g-f-r{
        width: 16px;
        height:16px;
        vertical-align: middle;
        outline: none;
        cursor:pointer;
    }
    .s-g-f-r-w{
        font-size: 14px;
        color: #999;
        line-height: 36px;
        padding-left: 10px;
        margin-right: 30px;
        cursor:pointer;
    }
    .s-g-f-input{
        font-size: 14px;
        display: inline-block;
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
</style>
