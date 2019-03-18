<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>在线客服列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"> <router-link to="">添加数据字典</router-link></button>

        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th  style="width: 68px;">ID</th>
                <th>字典名称</th>
                <th>字典类型</th>
                <th>排序</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>１</td>
                <td>退休</td>
                <td>教育程度</td>
                <td><input type="text" value="1"></td>
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
        name: "dd-list"
    }
</script>

<style scoped>

</style>