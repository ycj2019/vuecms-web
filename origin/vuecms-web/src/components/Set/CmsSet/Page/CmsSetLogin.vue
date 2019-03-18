<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-login></cms-form-login>
            <cms-button></cms-button>
        </div>
    </div>
</template>

<script>
    import CmsFormLogin from "../CmsLogin/CmsFormLogin"
    import CmsButton from "../../common/CmsButton"
    import CmsTitle from "../../common/CmsTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetLogin',

        components: {
            CmsFormLogin,
            CmsButton,
            CmsTitle
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
