<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-third></cms-form-third>
            <cms-button></cms-button>
        </div>
    </div>
</template>

<script>
    import CmsFormThird from "../CmsThird/CmsFormThird"
    import CmsButton from "../../common/CmsButton"
    import CmsTitle from "../../common/CmsTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetThird',

        components: {
            CmsButton,
            CmsTitle,
            CmsFormThird
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
