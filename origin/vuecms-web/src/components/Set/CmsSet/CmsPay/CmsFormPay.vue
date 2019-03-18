<template>
    <div class="s-f-t">
        <cms-form-pay-title></cms-form-pay-title>
        <div class="s-f-t-b">
            <div class="s-f-t-b-a">
                <table cellpadding="0" cellspacing="0" class="s-f-t-table">
                    <cms-form-pay-tr></cms-form-pay-tr>
                    <cms-form-pay-tr-con></cms-form-pay-tr-con>
                    <cms-form-pay-tr-con></cms-form-pay-tr-con>
                    <cms-form-pay-tr-con></cms-form-pay-tr-con>
                    <cms-form-pay-tr-con></cms-form-pay-tr-con>
                </table>
            </div>
        </div>
        <cms-form-pay-bottom></cms-form-pay-bottom>
    </div>
</template>

<script>
    import CmsFormPayTitle from "./CmsFormPayTitle"
    import CmsFormPayTr from "./CmsFormPayTr"
    import CmsFormPayTrCon from "./CmsFormPayTrCon"
    import CmsFormPayBottom from "./CmsFormPayBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormPay',
        components: {
            CmsFormPayTitle,
            CmsFormPayTr,
            CmsFormPayTrCon,
            CmsFormPayBottom
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
