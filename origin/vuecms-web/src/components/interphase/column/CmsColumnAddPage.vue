<template>
  <div class="boxs">
    <cms-new-build-top></cms-new-build-top>
    <cms-input></cms-input>
    <cms-ueditor></cms-ueditor>
    <cms-column-add-page-foot></cms-column-add-page-foot>
  </div>
</template>

<script>
  import CmsNewBuildTop from "../interphaseCommon/CmsNewBuildTop"
  import CmsInput from "./CmsInput"
  import CmsColumnAddPageFoot from "./CmsColumnAddPageFoot"
  import CmsUeditor from "../interphaseCommon/CmsUeditor"
  export default {
    name: "CmsColumnAddPage",
    components: {
      CmsNewBuildTop,
      CmsColumnAddPageFoot,
      CmsInput,
      CmsUeditor
    },
    methods: {}

  }
</script>

<style scoped>
  .boxs {
    /*width: 95%;*/
    margin: 0 auto;
    border: 1px solid #d4dde2;
    padding-bottom: 30px;
    margin-bottom: 30px;
    margin-left: 245px;
    margin-right: 20px;
    background: white;
  }

</style>


