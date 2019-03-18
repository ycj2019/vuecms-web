<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-ten></cms-form-ten>
            <cms-button></cms-button>
        </div>
    </div>
</template>

<script>
    import CmsTitle from "../../common/CmsTitle"
    import CmsButton from "../../common/CmsButton"
    import CmsFormTen from "../CmsTen/CmsFormTen"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetTen',
        components: {
            CmsFormTen,
            CmsTitle,
            CmsButton
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
