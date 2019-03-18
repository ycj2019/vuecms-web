<template>
    <div class="s-f-t-a">
        <button class="s-f-t-a-butt">添加配送方式</button>
        <button class="s-f-t-a-butt s-f-t-d-aa">独立密码修改</button>
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormItunesTitle',
        components: {

        }
   }
</script>

<style scoped>
    .s-f-t-a{
        padding: 20px 0;
        margin: 0 24px;
        background-color: #fff;
    }
    .s-f-t-a-butt{
        display: inline-block;
        cursor: pointer;
        border:none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        transition: .1s;
        padding: 6px 15px;
        min-width: 80px;
        font-size: 14px;
        border-radius: 4px;
        color: #fff;
        background-color: #409eff;
    }
    .s-f-t-d-aa{
        background-color: #fff;
        color:#606266;
        border: 1px solid #eee;
        margin-left: 10px;
    }
    .s-f-t-a-butt:hover{
        background: #66b1ff;
        color: #fff;
    }
    .s-f-t-d-aa:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    
</style>
