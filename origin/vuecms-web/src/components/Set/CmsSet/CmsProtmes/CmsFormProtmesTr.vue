<template>
    <tr class="s-f-t-table-tr">
        <th class="s-f-t-table-a"><input type="checkbox"></th>
        <th class="s-f-t-table-a">ID</th>
        <th>接口名称</th>
        <th>接口URL</th>
        <th>接口代码</th>
        <th class="bb">每日限制调用次数</th>
        <th>总调用次数</th>
        <th>月调用次数</th>
        <th>周调用次数</th>
        <th>日调用次数</th>
        <th class="bb">最后一次调用时间</th>
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
        name:'CmsFormProtmesTr',
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
