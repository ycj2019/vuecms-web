<template>
  <div class="sectionThree5Bottom">
    <cms-dd1-children-information-bottom-header></cms-dd1-children-information-bottom-header>
    <cms-dd1-children-information-bottom-number-list></cms-dd1-children-information-bottom-number-list>
  </div>
</template>

<script>
    import CmsDd1ChildrenInformationBottomNumberList from"./CmsDd1ChildrenInformationBottomNumberList"
    import CmsDd1ChildrenInformationBottomHeader from"./CmsDd1ChildrenInformationBottomHeader"

    export default {
        name: "CmsDd1ChildrenInformationBottom",
        components:{
          CmsDd1ChildrenInformationBottomNumberList,
          CmsDd1ChildrenInformationBottomHeader
        }
    }
</script>

<style scoped>

  .sectionThree5Bottom{
    background: #fff;
  }

</style>
