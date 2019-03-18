<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-Protmes></cms-form-Protmes>
            <cms-form-protmes-bottom></cms-form-protmes-bottom>
        </div>
    </div>
</template>

<script>
    import CmsFormProtmes from "../CmsProtmes/CmsFormProtmes"
    import CmsFormProtmesBottom from "../CmsProtmes/CmsFormProtmesBottom"
    import CmsTitle from "../../common/CmsTitle"
    import CmsBottom from "../../common/CmsBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetProtmes',

        components: {
            CmsTitle,
            CmsFormProtmes,
            CmsBottom,
            CmsFormProtmesBottom
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
