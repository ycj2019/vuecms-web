<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-ema></cms-form-ema>
            <cms-button></cms-button>
        </div>
    </div>
</template>

<script>
    import CmsFormEma from "../CmsEma/CmsFormEma"
    import CmsButton from "../../common/CmsButton"
    import CmsTitle from "../../common/CmsTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetEma',

        components: {
            CmsFormEma,
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
