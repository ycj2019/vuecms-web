<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-del-met></cms-form-del-met>
            <cms-bottom></cms-bottom>
        </div>
    </div>
</template>

<script>
    import CmsFormDelMet from "../CmsDelMet/CmsFormDelMet"
    import CmsTitle from "../../common/CmsTitle"
    import CmsBottom from "../../common/CmsBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetDelMet',

        components: {
            CmsTitle,
            CmsFormDelMet,
            CmsBottom
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
