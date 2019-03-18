<template>
  <div class="chart_example">

  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "WorkEcharts",
    mounted() {
      let myChart = echarts.init(document.querySelector('.chart_example'));
      var base = +new Date(2016, 10, 21);
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var data = [Math.random() * 300];


      for (var i = 1; i < 200; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));

      }

      var options = {
        title: {
          show: false,
          text: "疾病",
        },
        color: [
          "#000000"
        ],
        tooltip: {
          enterable: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          show: true,
          x: "left",
          padding: 30,
          textStyle: {
            color: "#999"
          }
        },
        xAxis: {
          type: "time",
          boundaryGap: true,
          splitLine: {
            show: false
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 1,
          splitNumber: 5
        },
        series: [
          {
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: date,
          }
        ]
      };
      myChart.setOption(options);
      window.addEventListener('resize',function() {myChart.resize()});
    }

  }
</script>

<style scoped>
  .chart_example{
    width: 100%;
    height: 360px;
  }
</style>
