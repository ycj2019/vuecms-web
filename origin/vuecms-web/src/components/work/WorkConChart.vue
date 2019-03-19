<template>
    <div>
        <h3 class="work-h3">销售额统计</h3>
        <work-con-radio></work-con-radio>
        <work-echarts></work-echarts>
    </div>
</template>

<script>
    import WorkConRadio from "./WorkConRadio";
    import WorkEcharts from "./WorkEcharts";
    export default {
      name: "WorkConChart",
      components: {WorkEcharts, WorkConRadio},
    }
</script>

<style scoped>

</style>
