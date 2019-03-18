<template>
    <div class="s-i">
        <div class="s-g">
            <cms-title></cms-title>
            <cms-form-gol></cms-form-gol>
            <cms-button></cms-button>
        </div>
    </div>
</template>

<script>
    import CmsFormGol from "../CmsGoldal/CmsFormGol"
    import CmsButton from "../../common/CmsButton"
    import CmsTitle from "../../common/CmsTitle"

    export default {
        data () {
            return {

            }
        },
        name:'CmsSetGlo',

        components: {
            CmsFormGol,
            CmsButton,
            CmsTitle
        }
   }
</script>

<style scoped>
.s-i{
        padding: 0 24px;
        /* background: pink; */
        margin-left: 220px;
    }
    .s-g{
        border: 1px solid #d4dde2;
        background: #fff;
        margin-bottom: 24px;
    }
    
</style>
