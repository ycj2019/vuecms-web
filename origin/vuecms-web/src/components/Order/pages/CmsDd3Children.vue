<template>
    <section>
      <cms-dd3-children-header></cms-dd3-children-header>
      <cms-dd3-children-information-list></cms-dd3-children-information-list>
      <cms-dd3-children-footer></cms-dd3-children-footer>
    </section>
</template>

<script>
  import CmsDd3ChildrenHeader from "../vm-dd3-children/CmsDd3ChildrenHeader"
  import CmsDd3ChildrenInformationList from "../vm-dd3-children/CmsDd3ChildrenInformationList"
  import CmsDd3ChildrenFooter from "../vm-dd3-children/CmsDd3ChildrenFooter"

  export default {
        name: "CmsDd3Children",
        components:{
          CmsDd3ChildrenHeader,
          CmsDd3ChildrenInformationList,
          CmsDd3ChildrenFooter
        }
    }
</script>

<style scoped>
  section{
    width: 1123px;
    height: 525px;
    border:1px solid #d4dde2;
    margin:0 auto;
  }
</style>
