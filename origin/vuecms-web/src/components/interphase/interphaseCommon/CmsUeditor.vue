<template>
    <div class="s-g-f-t">
        <div class="s-g-f-b">
            <span class="s-g-f-sone">
                内容
            </span>
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
  #editor{
    /*width:100%;*/
    min-width: 305px;
  }
  .s-w{
    height: 100%;
    z-index: 999;
    padding: 0;
    /*overflow: hidden;*/
  }
  .s-g-f-inputa{
    font-size: 14px;
  }
  .s-g-f-b{
    margin-bottom: 22px;
  }

  .s-g-f-t{
    margin-top: 22px;
    border-bottom:1px dashed #eee;
    /*overflow: hidden;*/
    position: relative;
    margin-right: 20px;
  }
  .s-g-f-sone{
    width:160px;
    padding-right: 30px;
    line-height: 36px;
    display: block;
    font-size:14px;
    color: #606266;
    text-align: right;
    box-sizing: border-box;
    float: left;
  }
  .s-g-f-word{
    line-height: 36px;
    font-size: 14px;
    margin-left: 160px;
  }
</style>
