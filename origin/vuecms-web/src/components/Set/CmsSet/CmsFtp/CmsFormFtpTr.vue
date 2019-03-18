<template>
    <tr class="s-f-t-table-tr">
        <th class="s-f-t-table-a"><input type="checkbox"></th>
        <th class="s-f-t-table-a">ID</th>
        <th>名称</th>
        <th>服务器IP</th>
        <th>远程目录</th>
        <th>访问URL</th>
        <th class="s-f-t-table-d">操作选项</th>
    </tr>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormFtpTr',
        components: {

        }
   }
</script>

<style scoped>
    .s-f-t-table-tr th{
        font-weight: 500;
        height: 48px;
        vertical-align: middle;
        text-align: center;
    }
    .s-f-t-table-a{
        width: 48px;
    }
    .s-f-t-table-d{
        width: 180px;
    }
    .s-f-t-table-tr th{
        border-bottom: 1px solid #d4dde2;
    }
    .bb{
        max-width: 60px;
    }
</style>
