<template>
  <form class="el-form table-body">
    <div class="form-group el-row">
        <shop-at-one> </shop-at-one>
        <shop-am-one> </shop-am-one>
        <shop-select> </shop-select>
        <shop-at-one> </shop-at-one>
      <shop-checkbox> </shop-checkbox>
      <shop-danxuan> </shop-danxuan>
      <shop-butoon> </shop-butoon>
      <shop-rl-content-two> </shop-rl-content-two>
      <shop-input> </shop-input>
      <shop-input> </shop-input>
      <shop-wai> </shop-wai>
      <shop-rl-content-two> </shop-rl-content-two>
      <shop-at-one> </shop-at-one>
      <shop-at-one> </shop-at-one>
      <shop-at-one> </shop-at-one>
      <shop-at-one> </shop-at-one>
      <cms-ueditor> </cms-ueditor>
    </div>
  </form>
</template>

<script>
  import ShopButoon from "../common/ShopButoon"
  import ShopWai from "../common/ShopWai"
  import ShopAtOne from "../common/ShopAtOne"
  import ShopRlContentTwo from "../common/ShopRlContentTwo"
  import ShopInput from "../common/ShopInput"
  import ShopAmOne from "./ShopAmOne"
  import ShopSelect from "../common/ShopSelect"
  import CmsUeditor from "../common/CmsUeditor"
  import ShopCheckbox from "../common/ShopCheckbox"
  import ShopDanxuan from "../common/ShopDanxuan"
    export default {
        name: "shop-am-content",
      components: {
        ShopInput,
        ShopAmOne,
        ShopSelect,
        CmsUeditor,
        ShopRlContentTwo,
        ShopAtOne,
        ShopCheckbox,
        ShopDanxuan,
        ShopWai,
        ShopButoon
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
