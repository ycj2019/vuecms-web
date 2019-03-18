<template>
  <div class="sectionThree5">
    <cms-dd4-children-information-middle-header></cms-dd4-children-information-middle-header>
    <cms-dd4-children-information-middle-number-list></cms-dd4-children-information-middle-number-list>
  </div>
</template>

<script>
  import CmsDd4ChildrenInformationMiddleNumberList from"./CmsDd4ChildrenInformationMiddleNumberList"
  import CmsDd4ChildrenInformationMiddleHeader from"./CmsDd4ChildrenInformationMiddleHeader"
    export default {
        name: "CmsDd4ChildrenInformationMiddle",
        components:{
          CmsDd4ChildrenInformationMiddleNumberList,
          CmsDd4ChildrenInformationMiddleHeader
        }
    }
</script>

<style scoped>

</style>
