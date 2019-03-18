<template>
  <div class="sectionThree5">
      <cms-dd4-children-information-top></cms-dd4-children-information-top>
      <cms-dd4-children-information-middle></cms-dd4-children-information-middle>
      <cms-dd4-children-information-bottom></cms-dd4-children-information-bottom>
      <cms-dd4-children-information-bottom2></cms-dd4-children-information-bottom2>
    <cms-dd4-children-information-bottom2-number></cms-dd4-children-information-bottom2-number>

  </div>
</template>

<script>
    import CmsDd4ChildrenInformationTop from "./CmsDd4ChildrenInformationTop"
    import CmsDd4ChildrenInformationBottom from "./CmsDd4ChildrenInformationBottom"
    import CmsDd4ChildrenInformationMiddle from "./CmsDd4ChildrenInformationMiddle"
    import CmsDd4ChildrenInformationBottom2 from "./CmsDd4ChildrenInformationBottom2"
    import CmsDd4ChildrenInformationBottom2Number from "./CmsDd4ChildrenInformationBottom2Number"


    export default {
        name: "CmsDd4ChildrenInformationAll",
        components:{
          CmsDd4ChildrenInformationBottom2,
          CmsDd4ChildrenInformationTop,
          CmsDd4ChildrenInformationBottom,
          CmsDd4ChildrenInformationMiddle,
          CmsDd4ChildrenInformationBottom2Number
        }
    }
</script>

<style scoped>



</style>
