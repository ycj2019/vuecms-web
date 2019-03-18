<template>
  <div class="el-col-lg-24">
    <div class="el-form-item is-required">
      <label class="el-form-item__label">类型名称</label>
      <div class="s-g-f-word">
        <div class="s-g-f-input-a">
          <div class="s-g-f-inputa s-w">
            <div id="editor" type='text/plain'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import "../../../../static/utf8-jsp/ueditor.config"
    import "../../../../static/utf8-jsp/ueditor.all"
    import "../../../../static/utf8-jsp/lang/zh-cn/zh-cn"

    export default {
        data () {
            return {
                ue:''
            }
        },
        name:'CmsUeditor',
        components: {

        },
        mounted() {
            this.ue = UE.getEditor("editor",{
                BaseUrl: '',
                UEDITOR_HOME_URL: 'static/utf8-jsp/',
            })
            // console.log($("#editor"))
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
    #editor{
        width:1035px;
        min-width: 305px;
    }
    .s-w{
        height: 100%;
        z-index: 999;
        padding: 0;
        overflow: hidden;
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
