<template>
    <div class="s-g-top">
        <span>单点登录设置</span>
        <span>单点登录设置</span>
        <span>单点登录设置</span>
        <div class="bb"><router-link to="/test/fh"><button class="aa">返回上级城市列表</button></router-link></div>        
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsTitleEr',
        components: {

        }
   }
</script>

<style scoped>
    .s-g-top{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #d4dde2;
        background: #eceff1;
        font-size: 14px;
        color: #565656;
        padding: 0 24px;
    } 
    .s-g-top span{
        margin-right: 24px;
    }
    .aa{
        display: inline-block;
        line-height: 1;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-size: 14px;
        border-radius: 4px;
        padding: 8px 15px;
        min-width: 80px;
    }
    .bb{
        float: right;
    }
    .aa:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
</style>
