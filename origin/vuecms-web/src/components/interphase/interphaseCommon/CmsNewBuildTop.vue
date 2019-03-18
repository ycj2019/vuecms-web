<template>
  <div class="title">
    <span>添加模板</span>
    <span>返回列表</span>
  </div>
</template>

<script>
    export default {
        name: "CmsNewBuildTop"
    }
</script>

<style scoped>
  .title{
    height: 49px;
    background: #eceff1;
    display: flex;
    align-items: center;
    padding:0  20px;
    font-size: 14px;
    color: #565656;
    justify-content: space-between;
    border-bottom: 1px solid #d4dde2;
    width: 100%;
    box-sizing: border-box;

  }
  .title span:last-child{
    width: 86px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #fff;
    border: 1px solid #d4dde2;
    border-radius: 4px;

  }
</style>
