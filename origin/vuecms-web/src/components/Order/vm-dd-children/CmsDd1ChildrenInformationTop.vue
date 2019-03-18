<template>
  <div class="sectionThree5Top">
    <cms-dd1-children-information-top-header></cms-dd1-children-information-top-header>
    <cms-dd1-children-information-top-number-list></cms-dd1-children-information-top-number-list>
  </div>
</template>

<script>
    import CmsDd1ChildrenInformationTopHeader from "./CmsDd1ChildrenInformationTopHeader"
    import CmsDd1ChildrenInformationTopNumberList from "./CmsDd1ChildrenInformationTopNumberList"

    export default {
        name: "CmsDd1ChildrenInformationTop",
        components:{
          CmsDd1ChildrenInformationTopHeader,
          CmsDd1ChildrenInformationTopNumberList
        }
    }
</script>

<style scoped>
  .sectionThree5Top{

    background: #fff;
  }



</style>
