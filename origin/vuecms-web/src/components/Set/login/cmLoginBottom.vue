<template>
    <form action="">
        <div class="cm-login-one login-user">
            <input class="login-input" type="text" placeholder="用户名" @click="focusCheng($event)" @blur="blurCheng($event)"/>
            <label ref="id">请填写用户名</label>
        </div>
        <div class="cm-login-one login-key">
            <input class="login-input" type="password" placeholder="密码" @click="focusCheng($event)" @blur="blurCheng($event)"/>
            <label>请填写密码</label>
        </div>
    </form>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        components: {

        },
        methods: {
            //获得焦点
            focusCheng(ev){
                console.log(ev.path[1].children[1]);
                ev.target.style.backgroundColor = "#fff";
                console.log(this.$refs.id)
            },
            //失去焦点
            blurCheng(ev){
                ev.target.style.backgroundColor = "#e6f4ff"
            }
        },
   }
</script>

<style scoped>
.cm-login-one{
    width: 320px;
    height: 44px;
    line-height: 44px;
    margin: 0 auto 22px;
    position:relative;
}
.cm-login-one label{
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    transition: right .25s linear;
    transform: translate(0);
    font-size: 12px;
}
.login-user input{
    background:#e6f4ff url(../../../static/login-user.png) 274px no-repeat;
}
.login-key input{
    background:#e6f4ff url(../../../static/login-key.png) 274px no-repeat;
}
.login-input{
    width: 290px;
    height: 44px;
    border-radius: 44px;
    border: none;
    padding-left: 30px;
    font-size: 14px;
    outline: none;
    background: #e6f4ff;
}
</style>
