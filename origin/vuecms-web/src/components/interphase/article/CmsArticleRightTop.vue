<template>
    <div class="Article_right_title">
      <span v-if="data" v-for="item in data">{{item}}</span>
    </div>
</template>

<script>
    export default {
        name: "CmsArticleRightTop",
        props:["data"]

    }
</script>

<style scoped>
  .Article_right_title{
    height: 72px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }
  .Article_right_title span{
    height: 32px;
    padding:  0 15px;
    border-radius: 4px;
    background: #409eff;
    color: #fff;
    line-height: 32px;
    border: 1px solid #d4dde2;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
