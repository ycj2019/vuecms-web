<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
      <div class="aba">
        <shop-at-two> </shop-at-two>
        <shop-at-two> </shop-at-two>
      </div>
      <shop-at-two> </shop-at-two>
      <cms-radio> </cms-radio>
      <shop-at-two> </shop-at-two>

    </div>
  </form>
</template>

<script>
  import ShopAtTwo from "../common/ShopAtTwo"
  import CmsRadio from "../common/CmsRadio"
    export default {
        name: "as-content",
      components: {
        CmsRadio,
        ShopAtTwo
      }
    }
</script>

<style scoped>
  .table-body {
    margin: 0 24px;
  }
  .el-row {
    box-sizing: border-box;
  }
  .aba{
    display:flex;
  }
</style>
