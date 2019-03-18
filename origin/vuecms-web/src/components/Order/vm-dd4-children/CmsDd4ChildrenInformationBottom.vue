<template>
  <div class="sectionThree5Bottom">
    <cms-dd4-children-information-bottom-header></cms-dd4-children-information-bottom-header>
    <cms-dd4-children-information-bottom-number-list></cms-dd4-children-information-bottom-number-list>
  </div>
</template>

<script>
    import CmsDd4ChildrenInformationBottomNumberList from"./CmsDd4ChildrenInformationBottomNumberList"
    import CmsDd4ChildrenInformationBottomHeader from"./CmsDd4ChildrenInformationBottomHeader"

    export default {
        name: "CmsDd4ChildrenInformationBottom",
        components:{
          CmsDd4ChildrenInformationBottomNumberList,
          CmsDd4ChildrenInformationBottomHeader
        }
    }
</script>

<style scoped>

  .sectionThree5Bottom{
    background: #fff;
  }

</style>
