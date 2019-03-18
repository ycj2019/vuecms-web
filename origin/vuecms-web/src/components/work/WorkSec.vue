<template>
    <diV>
      <div class="work-sec">
        <div class="work-sales">
            <work-sales></work-sales>
            <work-sales></work-sales>
            <work-sales></work-sales>
            <work-sales></work-sales>
        </div>
        <div class="work-con">
            <work-con-l></work-con-l>
            <work-con-r></work-con-r>
        </div>
        <div class="work-chart">
            <work-con-chart></work-con-chart>
        </div>
        <div class="work-foot">
            <work-con-foot></work-con-foot>
        </div>
      </div>
    </diV>
</template>

<script>
    import WorkSales from "./WorkSales";
    import WorkConL from "./WorkConL"
    import WorkConR from "./WorkConR";
    import WorkConChart from "./WorkConChart";
    import WorkConFoot from "./WorkConFoot";


    export default {
        name: "WorkSec",
        components: {WorkConFoot, WorkConChart, WorkConR, WorkConL, WorkSales}
    }
</script>

<style scoped>
.work-chart{
  position: relative;
  background: white;
  margin-bottom: 20px;
}
.work-foot{
  margin-bottom: 20px;

}
</style>
