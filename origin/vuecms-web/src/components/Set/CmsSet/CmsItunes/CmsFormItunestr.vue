<template>
    <tr class="s-f-t-table-tr">
        <th class="s-f-t-table-a">ID</th>
        <th>appid</th>
        <th>是否禁用</th>
        <th class="s-f-t-table-d">操作选项</th>
    </tr>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormItunestr',
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
        width: 200px;
    }
    .s-f-t-table-tr th{
        border-bottom: 1px solid #d4dde2;
    }
</style>
