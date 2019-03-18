<template>
    <div class="s-g-f-t">
        <div class="s-g-f-b">
            
            <span class="s-g-f-sone">
                <i></i>
                关注欢迎语
            </span>
            <div class="s-g-f-word">
                <div class="s-g-f-input">
                    <textarea rows="2" cols="20" class="s-g-f-inputa"></textarea>
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
        name:'CmsFormTenTextarea',
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
        min-height: 36px;
        display: block;
        width: 300px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #d8dce5;
        border-radius: 4px;
        color: #606266;
        padding: 0 15px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        overflow-y:hidden;
        resize: vertical;
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
