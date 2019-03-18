<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
        <shop-rl-content-one> </shop-rl-content-one>
        <shop-rl-content-two> </shop-rl-content-two>
    </div>
  </form>
</template>

<script>
  import ShopRlContentOne from "../common/ShopRlContentOne"
  import ShopRlContentTwo from "../common/ShopRlContentTwo"
    export default {
      name: "shop-rl-content",
      components: {
        ShopRlContentOne,
        ShopRlContentTwo
      }
    }
</script>

<style scoped>
  .table-body {
    margin: 0 24px;
  }
  .form-group {
    margin-top: 0;
    border-bottom: none;
  }
  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .form-group .el-col-lg-12 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-row {
    box-sizing: border-box;
  }
</style>
