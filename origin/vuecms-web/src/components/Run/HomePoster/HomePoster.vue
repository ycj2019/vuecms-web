<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>在线客服列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"><router-link to="">添加海报</router-link></button>
        </div>
        <div class="poster">
            <ul>
                <li>海报1：</li>
                <li>图片：<a href=""><img src="" alt=""></a></li>
                <li><i></i>链接地址：   <input type="text" placeholder="http://123456/dhhd"></li>
            </ul>
        </div>
        <button class="ope-btn">提交</button>
    </div>
</template>

<script>
    export default {
        name: "home-poster"
    }
</script>

<style scoped>

</style>