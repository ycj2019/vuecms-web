<template>
    <form action="" class="s-g-f">
        <cms-input-two></cms-input-two>
        <cms-input-two></cms-input-two>
        <cms-input-pass></cms-input-pass>
        <cms-input-long></cms-input-long>
        <cms-ueditor></cms-ueditor>
        <cms-input-long></cms-input-long>
        <!-- <cms-ueditor></cms-ueditor> -->
    </form>
</template>

<script>
    import CmsInputTwo from "../../common/CmsInputTwo"
    import CmsInputPass from "../../common/CmsInputPass"
    import CmsInputLong from "../../common/CmsInputLong"
    import CmsUeditor from "../../common/CmsUeditor"

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormEma'
        ,
        components: {
            CmsInputTwo,
            CmsInputPass,
            CmsInputLong,
            CmsUeditor
        }
   }
</script>

<style>
    .s-g-f{
        margin: 0 24px;
    }
    .s-g-f-t{
        margin-top: 22px;
        border-bottom:1px dashed #eee;
        overflow: hidden;
        position: relative;
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
    .s-g-f-stwo{
        font-size: 14px;
        color: #c3c3c3;
        padding-left: 10px;
        line-height: 36px;
    }
</style>
