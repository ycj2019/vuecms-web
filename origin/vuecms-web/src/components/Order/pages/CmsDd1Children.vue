<template>
  <div class="sectionTwo">
    <section>
      <cms-dd1-children-header></cms-dd1-children-header>
      <cms-dd1-children-nav></cms-dd1-children-nav>
      <cms-dd1-children-banner-list></cms-dd1-children-banner-list>
      <cms-dd1-children-information-all></cms-dd1-children-information-all>

    </section>
  </div>
</template>

<script>
    import CmsDd1ChildrenHeader from "../vm-dd-children/CmsDd1ChildrenHeader"
    import CmsDd1ChildrenNav from "../vm-dd-children/CmsDd1ChildrenNav"
    import CmsDd1ChildrenBannerList from "../vm-dd-children/CmsDd1ChildrenBannerList"
    import CmsDd1ChildrenInformationAll from "../vm-dd-children/CmsDd1ChildrenInformationAll"
    export default {
        name: "CmsDd1Children",
        components:{
          CmsDd1ChildrenHeader,
          CmsDd1ChildrenNav,
          CmsDd1ChildrenBannerList,
          CmsDd1ChildrenInformationAll
        }
    }
</script>

<style scoped>
  .sectionTwo{
    top: 64px;
    bottom: 24px;
    width: 100%;
    padding: 0 24px;
    margin-bottom: 24px;

  }
section{
  width: 100%;
  height: 100%;
  border:1px solid #d4dde2;
}
</style>
