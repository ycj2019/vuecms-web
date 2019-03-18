<template>
  <div class="sm-sec-right-one">
    <div class="sm-sec-right-one-1">
      <div class="sm-sec-right-one-ss">
        <div class="sm-sec-right-one-2">
          <input type="text" placeholder="在售" readonly="readonly">
          <span class="iconfont icon-el-icon-arrow-down">
										</span>
        </div>
        <div class="sm-sec-right-one-3">
          <span class="">推荐</span>
        </div>
        <div class="sm-sec-right-one-3">
          <span class="">特价</span>
        </div>
        <div class="sm-sec-right-one-3">
          <span class="">热卖</span>
        </div>
        <div class="sm-sec-right-one-3">
          <span class="">新品</span>
        </div>
      </div>
      <div class="sm-sec-right-one-ss">
        <div class="sm-sec-right-one-4">
          <label>商品名称:</label>
          <div class="sm-sec-right-one-5">
            <input type="text"/>
          </div>
        </div>
        <div class="sm-sec-right-one-4">
          <label>品牌:</label>
          <div class="sm-sec-right-one-5">
            <input type="text"/>
          </div>
        </div>
        <button type="button" class="sm-sec-right-one-6">
          <span>查询</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-mg-rt-header"
    }
</script>

<style scoped>
.sm-sec-right-one-ss{
  display: flex;
}
</style>
