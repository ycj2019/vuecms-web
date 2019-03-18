<template>
  <div class="informationBottom">
    <cms-dd2-children-information></cms-dd2-children-information>
  </div>
</template>

<script>
    import CmsDd2ChildrenInformation from "./CmsDd2ChildrenInformation"
    export default {
        name: "CmsDd2ChildrenInformationList",
        components:{
          CmsDd2ChildrenInformation
        }
    }
</script>

<style scoped>
  .informationBottom{
    /*height:404px ;*/
    /*padding-left: 24px;*/
  }

</style>
