<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
      <shop-at-one> </shop-at-one>
        <shop-at-two> </shop-at-two>
        <shop-at-two> </shop-at-two>

    </div>
  </form>
</template>

<script>
  import ShopAtOne from "../common/ShopAtOne"
  import ShopAtTwo from "../common/ShopAtTwo"
    export default {
        name: "shop-at-content",
      components: {
        ShopAtOne,
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
