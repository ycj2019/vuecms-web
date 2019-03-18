<template>
    <div class="top">
      <cms-new-build-top></cms-new-build-top>
      <cms-resourse-build-con></cms-resourse-build-con>
    </div>
</template>

<script>
    import CmsNewBuildTop from "../interphaseCommon/CmsNewBuildTop"
    import CmsResourseBuildCon from "./CmsResourseBuildCon"
    export default {
        name: "CmsResourceManagerBuildRight",
        components:{
          CmsNewBuildTop,
          CmsResourseBuildCon
        }
    }
</script>

<style scoped>
.top{
  width: 100%;
}
</style>
