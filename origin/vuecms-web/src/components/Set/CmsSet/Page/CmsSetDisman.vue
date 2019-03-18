<template>
    <div class="s-i">
        <div class="s-g">
            <router-view></router-view>
            <cms-form-Disman></cms-form-Disman>
            <cms-form-Disman-bottom></cms-form-Disman-bottom>
        </div>
    </div>
</template>

<script>
    import CmsFormDisman from "../CmsDisman/CmsFormDisman"
    import CmsFormDismanBottom from "../CmsDisman/CmsFormDismanBottom"
    import CmsTitle from "../../common/CmsTitle"
    import CmsBottom from "../../common/CmsBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetDisman',

        components: {
            CmsTitle,
            CmsFormDisman,
            CmsBottom,
            CmsFormDismanBottom
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
