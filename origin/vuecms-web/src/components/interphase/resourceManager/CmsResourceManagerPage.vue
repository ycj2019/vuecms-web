<template>
    <div class="Resource_Manager_box">
      <cms-interphase-top>资源列表</cms-interphase-top>
      <div class="resourse_content">
        <cms-manager-left class="tree"></cms-manager-left>
        <cms-template-manager-right></cms-template-manager-right>
        <!--<cms-resource-manager-build-right></cms-resource-manager-build-right>-->
      </div>
    </div>
</template>

<script>
    import CmsManagerLeft from "../interphaseCommon/CmsManagerLeft"
    import CmsInterphaseTop from "../interphaseCommon/CmsInterphaseTop"
    import CmsTemplateManagerRight from "../templateManager/CmsTemplateManagerRight"
    import CmsResourceManagerBuildRight from "./CmsResourceManagerBuildRight"
    export default {
        name: "CmsResourceManagerPage",
        components:{
          CmsManagerLeft,
          CmsInterphaseTop,
          CmsTemplateManagerRight,
          // CmsResourceManagerBuildRight
        }
    }
</script>

<style scoped>
  .Resource_Manager_box{
    /*width:95%;*/
    margin: 0 auto;
    border: 1px solid #dddddd;
    margin-bottom: 30px;
    margin-left: 245px;
    margin-right: 20px;
    background: white;
  }
  .resourse_content{
      display: flex;
  }
  .tree{
    margin-left: 20px;
    border-right: 1px solid #eee;
  }
</style>
