<template>
    <div>
      <div class="work-sec">
        <div>
            <work-sale v-if="cartInfo.work" :data="cartInfo.work.hea"></work-sale>
        </div>
        <div class="work-con">
            <work-con-l v-if="cartInfo.work" :data="cartInfo.work.manage"></work-con-l>
            <work-con-r v-if="cartInfo.work" :data="cartInfo.work.shopcon"></work-con-r>
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
    import WorkSale from "./WorkSale";
    import WorkConL from "./WorkConL"
    import WorkConR from "./WorkConR";
    import WorkConChart from "./WorkConChart";
    import WorkConFoot from "./WorkConFoot";


    export default {
        name: "WorkSec",
        components: {WorkConFoot, WorkConChart, WorkConR, WorkConL, WorkSale},
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
