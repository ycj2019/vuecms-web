<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>用户列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"><router-link to="">添加用户</router-link></button>
            <div class="ope-search">用户名：<input type="text">
                <input type="button" value="查询">
            </div>
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th  style="width: 68px;">ID</th>
                <th>用户名</th>
                <th>用户等级</th>
                <th>积分</th>
                <th>邮箱</th>
                <th>最后登录时间</th>
                <th>是否禁用</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>1</td>
                <td>admin</td>
                <td>金牌会员</td>
                <td>10000</td>
                <td>123@qq.com</td>
                <td>2019-3-12 11:00:00</td>
                <td>否</td>
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
        name: "user-manage"
    }
</script>

<style scoped>

</style>