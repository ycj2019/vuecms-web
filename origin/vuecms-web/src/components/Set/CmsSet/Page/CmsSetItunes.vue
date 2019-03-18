<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-itunes></cms-form-itunes>
            <cms-form-itunes-bottom></cms-form-itunes-bottom>
        </div>
    </div>
</template>

<script>
    import CmsFormItunes from "../CmsItunes/CmsFormItunes"
    import CmsTitle from "../../common/CmsTitle"
    import CmsFormItunesBottom from "../CmsItunes/CmsFormItunesBottom"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetItunes',

        components: {
            CmsTitle,
            CmsFormItunes,
            CmsFormItunesBottom
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
