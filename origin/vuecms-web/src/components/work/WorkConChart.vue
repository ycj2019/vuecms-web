<template>
    <div>
        <h3 class="work-h3">销售额统计</h3>
        <!--<p @click="haha">ahahahh</p>-->
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
      /*methods: {
        haha(){
          $.ajax({
            type:'GET',
            url:'http://localhost:3000/first',
            headers:{
              "Conten-Type":"http://localhost:3000/first"
            },
            success:function (backDate) {
              // body...
              console.log(backDate);
            }
          })
        }
      }*/
    }
</script>

<style scoped>

</style>
