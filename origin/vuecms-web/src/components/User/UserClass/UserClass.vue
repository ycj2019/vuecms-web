<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>用户列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"><router-link to="">添加用户等级</router-link></button>
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th style="width: 68px;">ID</th>
                <th>用户等级</th>
                <th>所需积分</th>
                <th>折扣</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>1</td>
                <td>金牌会员</td>
                <td>1000</td>
                <td>70</td>
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
        name: "user-class"
    }
</script>

<style scoped>

</style>