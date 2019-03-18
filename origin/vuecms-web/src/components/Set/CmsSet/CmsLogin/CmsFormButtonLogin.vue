<template>
    <span class="s-g-f-stwo"><button class="s-g-button">删除</button></span>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormButtonLogin',
        components: {

        }
   }
</script>

<style scoped>
    .s-g-button{
        display: inline-block;
        padding:6px 15px;
        width: 80px;
        text-align: center;
        cursor: pointer;
        outline: none;
        font-size: 14px;
        border-radius: 4px;
        border:#f56c6c;
        background-color: #f56c6c;
        color: #fff;
    }
    .s-g-button:hover{
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
</style>
