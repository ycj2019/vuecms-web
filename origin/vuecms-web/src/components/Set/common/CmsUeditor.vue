<template>
    <div class="s-g-f-t">
                <div class="s-g-f-b">
                    <span class="s-g-f-sone">
                        部署路径
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
        width:1035px;
        min-width: 305px;
    }
    .s-w{
        height: 100%;
        z-index: 999;
        padding: 0;
        overflow: hidden;
    }
    .s-g-f-inputa{
        font-size: 14px;
    }
    .s-g-f-b{
        margin-bottom: 22px;
    }
</style>
