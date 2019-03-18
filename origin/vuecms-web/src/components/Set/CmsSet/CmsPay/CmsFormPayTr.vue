<template>
    <tr class="s-f-t-table-tr">
        <th class="s-f-t-table-a">ID</th>
        <th>名称</th>
        <th>排序</th>
        <th class="s-f-t-table-d">操作</th>
    </tr>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormPayTr',
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
        width: 68px;
    }
    .s-f-t-table-d{
        width: 100px;
    }
    .s-f-t-table-tr th{
        border-bottom: 1px solid #d4dde2;
    }
</style>
