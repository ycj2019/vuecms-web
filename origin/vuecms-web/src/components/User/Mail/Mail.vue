<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>收件箱列表</p>
        </div>
        <div class="add-thing">
            <div>
                <button class="add-btn"> <router-link to="">发送站内信</router-link></button>
                <router-link to="">站内信列表</router-link>
                <router-link to="">收件箱</router-link>
                <router-link to="">垃圾箱</router-link>
            </div>
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th  style="width: 68px;">ID</th>
                <th>标题</th>
                <th>内容</th>
                <th>收件人姓名</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>１</td>
                <td>标题</td>
                <td>内容</td>
                <td>收件人姓名</td>
                <td class="cz">
                    <a href="#" class="iconfont icon-edit_small bj"></a>
                    <a href="#" class="iconfont icon-del sc"></a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "mail"
    }
</script>

<style scoped>

</style>