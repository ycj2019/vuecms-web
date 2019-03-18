<template>
  <div class="content">
  <section>
    <cms-dd2-children-header></cms-dd2-children-header>
    <cms-dd2-children-nav></cms-dd2-children-nav>
    <cms-dd2-children-information-list></cms-dd2-children-information-list>
  </section>
  </div>
</template>

<script>
  import CmsDd2ChildrenHeader from "../vm-dd2-children/CmsDd2ChildrenHeader"
  import CmsDd2ChildrenInformationList from "../vm-dd2-children/CmsDd2ChildrenInformationList"
  import CmsDd2ChildrenNav from "../vm-dd2-children/CmsDd2ChildrenNav"
    export default {
        name: "CmsDd2Children",
        components:{
          CmsDd2ChildrenHeader,
          CmsDd2ChildrenInformationList,
          CmsDd2ChildrenNav
        }
    }
</script>

<style scoped>
  .content{
    top: 64px;
    bottom: 24px;
    width: 100%;
    padding: 0 24px;
  }
  section{
    width: 100%;
    height: 100%;
    border:1px solid #d4dde2;
    margin:0 auto;
  }
</style>
