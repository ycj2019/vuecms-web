<template>
  <div class="sectionThree5Top">
    <cms-dd4-children-information-top-header></cms-dd4-children-information-top-header>
    <cms-dd4-children-information-top-number-list></cms-dd4-children-information-top-number-list>
  </div>
</template>

<script>
    import CmsDd4ChildrenInformationTopHeader from "./CmsDd4ChildrenInformationTopHeader"
    import CmsDd4ChildrenInformationTopNumberList from "./CmsDd4ChildrenInformationTopNumberList"

    export default {
        name: "CmsDd4ChildrenInformationTop",
        components:{
          CmsDd4ChildrenInformationTopHeader,
          CmsDd4ChildrenInformationTopNumberList
        }
    }
</script>

<style scoped>
  .sectionThree5Top{

    background: #fff;
  }



</style>
