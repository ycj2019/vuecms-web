<template>
  <a href="#">
    <span class="iconfont bs" :class="data.ico"></span>
    <span>{{data.title}}</span>
    <span class="num">{{data.num}}</span>
  </a>
</template>

<script>
    export default {
        name: "WorkConMenu",
      props:["data"]
    }
</script>

<style scoped>

</style>
