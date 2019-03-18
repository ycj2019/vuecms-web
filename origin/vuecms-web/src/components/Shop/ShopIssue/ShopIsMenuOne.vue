<template>
  <ul class="sm-white-items">
    <li class="">数码</li>
    <li class="">服装</li>
    <li class="">鞋包配饰</li>
    <li class="">日用百货</li>
    <li class="">家居建材</li>
    <li class="active">珠宝手表</li>
  </ul>
</template>

<script>
    export default {
        name: "shop-is-menu-one"
    }
</script>

<style scoped>
  .sm-white-items{
    float: left;
    min-width: 260px;
    min-height: 210px;
    overflow-y: auto;
    padding: 10px 0;
    border: 1px solid #ddd;
    margin-right: 7px;
    margin-left: 8px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  .sm-white-items li{
    cursor: pointer;
    padding: 8px 12px;
    font-size: 14px;
  }
</style>
