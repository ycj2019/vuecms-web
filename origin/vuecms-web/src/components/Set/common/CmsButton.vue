<template>
    <div class="s-g-bottom">
        <button class="s-g-button s-g-b-x">修改</button>
        <button class="s-g-button s-g-b-c">重置</button>
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:"CmsButton",
        components: {

        }
   }
</script>

<style scoped>
    .s-g-bottom{
        padding: 0 24px;
        margin: 32px 0 32px 160px;
    }
    .s-g-button{
        display: inline-block;
        padding:6px 15px;
        width: 80px;
        text-align: center;
        cursor: pointer;
        outline: none;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        background-color: #fff;
        color: #606266;
    }
    
    .s-g-b-x{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .s-g-b-x:hover{
        background-color: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
    .s-g-b-c{
        margin-left: 10px;
        color: #fff;
        background-color: #909399;
        border-color:#909399;
    }
    .s-g-b-c:hover{
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
</style>
