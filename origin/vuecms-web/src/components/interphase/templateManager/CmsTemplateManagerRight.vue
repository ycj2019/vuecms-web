<template>
  <div class="right">
    <cms-template-manager-right-top></cms-template-manager-right-top>
    <cms-template-manager-right-list></cms-template-manager-right-list>
  </div>
</template>

<script>
  import CmsTemplateManagerRightList from "./CmsTemplateManagerRightList"
  import CmsTemplateManagerRightTop from "./CmsTemplateManagerRightTop"
    export default {
        name: "CmsTemplateManagerRight",
        components:{
          CmsTemplateManagerRightTop,
          CmsTemplateManagerRightList
        }
    }
</script>

<style scoped>
.right{
  width: 75%;
  float: right;
  box-sizing: border-box;
}
</style>
