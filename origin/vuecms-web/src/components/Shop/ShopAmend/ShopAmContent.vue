<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
      <shop-input> </shop-input>
      <shop-am-one> </shop-am-one>
      <div  class="aab">
        <shop-select> </shop-select>
      <shop-input> </shop-input>
      </div>
      <div  class="aab">
        <shop-select> </shop-select>
        <shop-select> </shop-select>
      </div>
      <shop-rl-content-two> </shop-rl-content-two>
      <shop-input> </shop-input>
      <shop-input> </shop-input>
      <shop-input> </shop-input>
      <shop-input> </shop-input>
      <cms-ueditor> </cms-ueditor>
    </div>
  </form>
</template>

<script>
  import ShopRlContentTwo from "../common/ShopRlContentTwo"
  import ShopInput from "../common/ShopInput"
  import ShopAmOne from "./ShopAmOne"
  import ShopSelect from "../common/ShopSelect"
  import CmsUeditor from "../common/CmsUeditor"
    export default {
        name: "shop-am-content",
      components: {
        ShopInput,
        ShopAmOne,
        ShopSelect,
        CmsUeditor,
        ShopRlContentTwo
      }
    }
</script>

<style scoped>
  .aab{
    display:flex;
  }
  .table-body {
    margin: 0 24px;
  }
  .form-group {
    margin-top: 0;
    border-bottom: none;
  }
  .el-row {
    box-sizing: border-box;
  }
</style>
