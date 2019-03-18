<template>
  <div class="sectionThree5">
      <cms-dd1-children-information-top></cms-dd1-children-information-top>
      <cms-dd1-children-information-bottom></cms-dd1-children-information-bottom>
  </div>
</template>

<script>
    import CmsDd1ChildrenInformationTop from "./CmsDd1ChildrenInformationTop"
    import CmsDd1ChildrenInformationBottom from "./CmsDd1ChildrenInformationBottom"

    export default {
        name: "CmsDd1ChildrenInformationAll",
        components:{
          CmsDd1ChildrenInformationTop,
          CmsDd1ChildrenInformationBottom
        }
    }
</script>

<style scoped>



</style>
