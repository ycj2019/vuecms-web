<template>
  <div class="sectionTwo">
    <section>
      <cms-dd4-children-header></cms-dd4-children-header>
      <cms-dd4-children-nav></cms-dd4-children-nav>
      <cms-dd4-children-banner-list></cms-dd4-children-banner-list>
      <cms-dd4-children-information-all></cms-dd4-children-information-all>

    </section>
  </div>
</template>

<script>
    import CmsDd4ChildrenHeader from "../vm-dd4-children/CmsDd4ChildrenHeader"
    import CmsDd4ChildrenNav from "../vm-dd4-children/CmsDd4ChildrenNav"
    import CmsDd4ChildrenBannerList from "../vm-dd4-children/CmsDd4ChildrenBannerList"
    import CmsDd4ChildrenInformationAll from "../vm-dd4-children/CmsDd4ChildrenInformationAll"
    export default {
        name: "CmsDd4Children",
        components:{
          CmsDd4ChildrenHeader,
          CmsDd4ChildrenNav,
          CmsDd4ChildrenBannerList,
          CmsDd4ChildrenInformationAll
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
