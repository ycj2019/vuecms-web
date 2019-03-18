<template>
  <div class="work-footr">
      <p>当前系统版本: jspgou 单店版 5.0版</p>
      <p>最近登录时间:2019-03-17 15:27:50</p>
      <p>内存:已用 254MB 剩余 148MB 最大 3531MB</p>
  </div>
</template>

<script>
    export default {
        name: "WorkConFootR"
    }
</script>

<style scoped>
  .work-footr{
    width: 45%;
    height: 90px;
    background: white;
    padding: 24px;
    float: right;
    display: inline-block;
  }
  .work-footr p {
    font-size: 14px;
    line-height: 35px;
  }
</style>
