<template>
    <div class="cm-login">
        <cm-login-header></cm-login-header>
        <cm-login-bottom></cm-login-bottom>
        <cm-login-button></cm-login-button>

    </div>
</template>

<script>
    import cmLoginHeader from "./cmLoginHeader"
    import cmLoginBottom from "./cmLoginBottom"
    import cmLoginButton from "./cmLoginButton"
    export default {
        data () {
            return {

            }
        },
        components: {
            cmLoginHeader,
            cmLoginBottom,
            cmLoginButton
        }
   }
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
body,html{
    height: 100%;
    width: 100%;
}
.cm-login{
    width: 100%;
    height: 100%;
    background: #188ae2;
}
 
</style>
