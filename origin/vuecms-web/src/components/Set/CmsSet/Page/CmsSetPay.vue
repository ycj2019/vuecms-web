<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-pay></cms-form-pay>
        </div>
    </div>
</template>

<script>
    import CmsFormPay from "../CmsPay/CmsFormPay"
    import CmsTitle from "../../common/CmsTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetPay',

        components: {
            CmsTitle,
            CmsFormPay
        }
   }
</script>

<style scoped>
    .s-i{
        padding: 0 24px;
        margin-left: 220px;
    }
    .s-g{
        border: 1px solid #d4dde2;
        background: #fff;
        margin-bottom: 24px;
    } 
</style>
