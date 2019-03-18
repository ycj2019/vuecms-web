<template>
    <div class="s-g-f-t">
        <div class="s-g-f-b">
            
            <span class="s-g-f-sone">
                <i></i>
                部署路径
            </span>
            <div class="s-g-f-word">
                <div class="s-g-f-input">
                    <i class="s-g-f-i"></i>
                    <input type="file" class="s-g-f-inputa"/>
                </div>
                <span class="s-g-f-stwo"></span>
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
        name:'CmsFormTenEr',
        components: {

        }
   }
</script>

<style scoped>
    .s-g-f-b{
        margin-bottom: 10px;
        float: left;
        width: 100%;
    }
    .s-g-f-inputa{
        box-sizing: border-box;
        width: 178px;
        height: 178px;
        line-height:178px;
        outline: none;
        position: absolute;
        top: 0;
        left: 0;
    }
    i{
        font-style: normal;
        color: red;
    }
    .s-g-f-input:hover{
        border-color: #409eff;
    }
    .s-g-f-input{
        position: relative;
        display: inline-block;
        font-size: 28px;
        color: #6281ac;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
        border: 1px dashed #d8dce5;
        border-radius: 6px;
        overflow: hidden;
        z-index: 1;
        background-color: #fff;
    }
    /* .s-g-f-i{
        width: 178px;
        height: 178px;
        position: absolute;
        top:0;
        left:0;
        background: #fff;
        z-index: 999;
    } */
</style>
