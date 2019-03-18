<template>
    <div class="page">
      <cms-interphase-top>模板列表</cms-interphase-top>
      <cms-manager-left class="left"></cms-manager-left>
      <cms-template-manager-right></cms-template-manager-right>
      <!--<cms-new-build></cms-new-build>-->
    </div>
</template>

<script>
  import CmsManagerLeft from "../interphaseCommon/CmsManagerLeft"
  import CmsInterphaseTop from "../interphaseCommon/CmsInterphaseTop"
  import CmsTemplateManagerRight from "./CmsTemplateManagerRight"
  import CmsNewBuild from "./CmsNewBuild"

    export default {
        name: "CmsTemplateManager",
        components:{
          CmsTemplateManagerRight,
          CmsManagerLeft,
          CmsInterphaseTop
          // CmsNewBuild
        }
    }
</script>

<style scoped>
  .page{
    border: 1px solid #d4dde2;
    box-sizing: border-box;
    margin-bottom: 30px;
    margin-left: 245px;
    margin-right: 20px;
    background: white;
    overflow: auto;
   }
  .left{
    float: left;
    width: 25%;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 15px;
  }
</style>
