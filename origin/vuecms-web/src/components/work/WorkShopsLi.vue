<template>
  <li class="work-shop">
    <span class="work-shopl">{{data.name}}</span>
    <span class="work-shopr">{{data.title}}</span>
    <span class="work-shopr">{{data.num}}</span>
  </li>
</template>

<script>
    export default {
        name: "WorkShopsLi",
      props:["data"]
    }
</script>

<style scoped>
  .work-shop{
    height: 45px;
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    line-height: 45px;
  }
  .work-shopl{
    text-align: left;
    padding-left: 24px;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .work-shopr{
    width: 15%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
