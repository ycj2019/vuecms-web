<template>
  <div class="sm-sec-right-one">
    <div class="sm-sec-right-one-1">
      <!--<div class="aaa">-->
        <div class="sm-sec-right-one-4">
          <label>咨询人:</label>
          <div class="sm-sec-right-one-5">
            <input type="text"/>
          </div>
        </div>
        <div class="sm-sec-right-one-4">
          <label>咨询商品:</label>
          <div class="sm-sec-right-one-5">
            <input type="text"/>
          </div>
        </div>
      <!--</div>-->

    <!--<div class="bbb">-->
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
      <!--<div>-->
        <button type="button" class="sm-sec-right-one-6">
          <span>查询</span>
        </button>
      <!--</div>-->

    </div>

    </div>
</template>

<script>
    export default {
        name: "shop-cs-header"
    }
</script>

<style scoped>
  .sm-sec-right-one-5{
    width:128px;
  }
  .sm-sec-right-one-7{
    width: 220px;
    position: relative;
    font-size: 14px;
    display: inline-block;
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
.sm-sec-right-one-4{
    margin-left: 0;
  }

</style>
