<template>
    <div class="s-f-t">
        <cms-form-Disman-title></cms-form-Disman-title>
        <div class="s-f-t-b">
            <div class="s-f-t-b-a">
                <table cellpadding="0" cellspacing="0" class="s-f-t-table">
                    <cms-form-Disman-tr></cms-form-Disman-tr>
                    <cms-form-Disman-tr-con></cms-form-Disman-tr-con>
                    <cms-form-Disman-tr-con></cms-form-Disman-tr-con>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import CmsFormDismanTitle from "./CmsFormDismanTitle"
    import CmsFormDismanTr from "./CmsFormDismanTr"
    import CmsFormDismanTrCon from "./CmsFormDismanTrCon"

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormDisman',
        components: {
            CmsFormDismanTitle,
            CmsFormDismanTr,
            CmsFormDismanTrCon
        }
   }
</script>

<style scope>
    .s-f-t{
        margin-bottom: 24px;
        background-color: #fff;
    }
    
    .s-f-t-b{
        color: #656565;
        border-top: 1px solid #d4dde2;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #fff;
    }
    .s-f-t-b-a{
        background: #fff;
    }
    .s-f-t-table{
        width: 100%;
    }
    .s-f-t-table tr:nth-child(2n){
        background: #fafafa;
    }
</style>
