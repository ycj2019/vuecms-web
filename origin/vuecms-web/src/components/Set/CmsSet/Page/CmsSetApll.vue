<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-Apll></cms-form-Apll>
            <cms-form-Apll-bottom></cms-form-Apll-bottom>
        </div>
    </div>
</template>

<script>
    import CmsFormApll from "../CmsApll/CmsFormApll"
    import CmsFormApllBottom from "../CmsApll/CmsFormApllBottom"
    import CmsTitle from "../../common/CmsTitle"
    import CmsBottom from "../../common/CmsBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetApll',

        components: {
            CmsTitle,
            CmsFormApll,
            CmsBottom,
            CmsFormApllBottom
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
