<template>
    <div class="s-f-t">
        <cms-form-itunes-title></cms-form-itunes-title>
        <div class="s-f-t-b">
            <div class="s-f-t-b-a">
                <table cellpadding="0" cellspacing="0" class="s-f-t-table">
                    <cms-form-itunestr></cms-form-itunestr>
                    <cms-form-itunestr-con></cms-form-itunestr-con>
                </table>
            </div>
        </div>
        <!-- <cms-form-pay-bottom></cms-form-pay-bottom> -->
    </div>
</template>

// <script>
    import CmsFormItunestr from "./CmsFormItunestr"
    import CmsFormItunestrCon from "./CmsFormItunestrCon"
    import CmsFormItunesTitle from "./CmsFormItunesTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormItunes',
        components: {
            CmsFormItunestr,
            CmsFormItunestrCon,
            CmsFormItunesTitle
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
