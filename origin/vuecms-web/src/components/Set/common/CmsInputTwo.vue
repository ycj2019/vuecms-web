<template>
    <div class="s-g-f-t">
        <div class="s-g-f-b">
            <span class="s-g-f-sone">
                <i></i>
                部署路径
            </span>
            <div class="s-g-f-word">
                <div class="s-g-f-input">
                    <input type="text" class="s-g-f-inputa">
                </div>
                <span class="s-g-f-stwo">如：smit.126.comfffffffffffffffffffff</span>
            </div>
        </div>
        <div class="s-g-f-b">
            <span class="s-g-f-sone">
                <i></i>
                部署路径
            </span>
            <div class="s-g-f-word">
                <div class="s-g-f-input">
                    <input type="text" class="s-g-f-inputa">
                </div>
                <span class="s-g-f-stwo">如：smit.126.comfffffffffffffffffffff</span>
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
        name:'CmsInputTwo',
        components: {

        }
   }
</script>

<style scoped>
    .s-g-f-b{
        margin-bottom: 22px;
        float: left;
        width: 50%;
    }
    .s-g-f-inputa{
        height: 36px;
        line-height: 36px;
        border: 1px solid #d8dce5;
        border-radius: 4px;
        color: #606266;
        padding: 0 15px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
    }
    i{
        font-style: normal;
        color: red;
    }
    .s-g-f-input{
        font-size: 14px;
        display: inline-block;
        width: 300px;
    }
</style>
