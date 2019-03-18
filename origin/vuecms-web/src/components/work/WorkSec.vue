<template>
    <div>
      <div class="work-sec">
        <div class="work-sales">
            <work-sales v-if="cartInfo.work" v-for="(data,idx) in cartInfo.work.header" :key="idx" :data="data"></work-sales>
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
    </div>
</template>

<script>
    import WorkSales from "./WorkSales";
    import WorkConL from "./WorkConL"
    import WorkConR from "./WorkConR";
    import WorkConChart from "./WorkConChart";
    import WorkConFoot from "./WorkConFoot";
    import cartApi from "../../Apis/cartApi"


    export default {
        name: "WorkSec",
        components: {WorkConFoot, WorkConChart, WorkConR, WorkConL, WorkSales},
        data() {
          return {
            cartInfo: {}
          }
        },
        created() {
          this._initDatas()
        },
        methods: {
          _initDatas(){
            this.$axios.get('http://localhost:3000/')
              .then((res) => {
                console.log(res.data)
                this.cartInfo = res.data
              }).catch((err)=>{
              console.log(err)
            })
          },
        }
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
