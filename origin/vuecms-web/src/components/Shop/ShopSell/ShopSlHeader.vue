<template>
  <div class="sm-sec-right-one">
    <div class="sm-sec-right-one-1">
      <div class="sm-sec-right-one-8">
        <label>咨询时间:</label>
        <div class="sm-sec-right-one-7">
          <input type="text"/>
        </div>
        <span>-</span>
        <div class="sm-sec-right-one-7">
          <input type="text"/>
        </div>
      </div>
        <div class="sm-sec-right-one-5">
          <input type="text" placeholder="请选择"/>
          <span class="iconfont icon-el-icon-arrow-down"></span>
      </div>
      <button type="button" class="sm-sec-right-one-6">
        <span>查询</span>
      </button>

    </div>

  </div>
</template>

<script>
    export default {
        name: "shop-sl-header"
    }
</script>

<style scoped>
  .sm-sec-right-one-7{
    width: 220px;
    position: relative;
    font-size: 14px;
    display: inline-block;
  }
  .sm-sec-right-one-6 {
    margin-right: 306px;
  }
  .sm-sec-right-one-8{
    white-space: nowrap;
  }
  .sm-sec-right-one-7 input{
    height: 32px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    line-height: 40px;
    outline: none;
    width: 100%;
    padding: 0 15px;
  }
  .sm-sec-right-one-7{
    padding-left: 0;
  }
  .sm-sec-right-one-5{
    width:300px;
    /*position: relative;*/
    margin-left: 10px;
  }
  .sm-sec-right-one-5 input{
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    line-height: 32px;
    outline: 0;
    padding: 0 15px;
    padding-right: 30px;
    width: 100%;
  }
  .icon-el-icon-arrow-down{
    color: #c0c4cc;
    font-size: 14px;
    position: absolute;
    top:9px;
    right: 10px;
  }
</style>
