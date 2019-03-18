<template>
    <div class="s-g-f-t">
        <div class="s-g-f-b">
            <span class="s-g-f-sone">
                <i></i>
                认证地址
            </span>
            <div class="s-g-f-word">
                <cms-form-input-login-text></cms-form-input-login-text>
                <cms-form-button-login></cms-form-button-login>
            </div>
            <div class="s-g-f-word">
                <cms-form-input-login-text></cms-form-input-login-text>
                <cms-form-button-login></cms-form-button-login>
            </div>
            <cms-form-button-login-two class="aa"></cms-form-button-login-two>
        </div>
    </div>       
        
</template>

<script>
    import CmsFormButtonLogin from "./CmsFormButtonLogin"
    import CmsFormInputLoginText from "./CmsFormInputLoginText"
    import CmsFormButtonLoginTwo from "./CmsFormButtonLoginTwo"

    export default {
        data () {
            return {

            }
        },
        name:'CmsFromInputLogin',
        components: {
            CmsFormButtonLogin,
            CmsFormInputLoginText,
            CmsFormButtonLoginTwo
        }
   }
</script>

<style scoped>
    .aa{
        margin-left: 150px;
    }
    .s-g-f-b{
        margin-bottom: 22px;
        float: left;
        width: 50%;
    }
    
    i{
        font-style: normal;
        color: red;
    }
    .s-g-f-input{
        font-size: 14px;
        display: inline-block;
        width: 30%;
    }
    .s-g-f-word{
        margin-bottom: 10px;
    }
</style>
