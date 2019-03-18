<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
      <div class="aba">
        <shop-at-two> </shop-at-two>
        <shop-select> </shop-select>
      </div>
      <div class="aba">
        <shop-at-two> </shop-at-two>
        <shop-at-two> </shop-at-two>
      </div>
      <div class="aba">
        <cms-radio> </cms-radio>
        <cms-radio> </cms-radio>
      </div>

      <shop-at-two> </shop-at-two>
      <cms-ueditor> </cms-ueditor>
    </div>
  </form>
</template>

<script>
  import ShopAtTwo from "../common/ShopAtTwo"
  import CmsRadio from "../common/CmsRadio"
  import ShopSelect from "../common/ShopSelect"
  import CmsUeditor from "../common/CmsUeditor"
    export default {
        name: "shop-ab-content",
      components: {
        CmsRadio,
        ShopAtTwo,
        ShopSelect,
        CmsUeditor
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
