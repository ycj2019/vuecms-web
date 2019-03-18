<template>
    <section>
      <cms-dd3-children2-header></cms-dd3-children2-header>
      <cms-dd3-children2-information-list></cms-dd3-children2-information-list>
      <cms-dd3-children2-footer></cms-dd3-children2-footer>
    </section>
</template>

<script>
  import CmsDd3Children2Header from "../vm-dd3-children2/CmsDd3Children2Header"
  import CmsDd3Children2InformationList from "../vm-dd3-children2/CmsDd3Children2InformationList"
  import CmsDd3Children2Footer from "../vm-dd3-children2/CmsDd3Children2Footer"
    export default {
        name: "CmsDd3Children2",
        components:{
          CmsDd3Children2Header,
          CmsDd3Children2InformationList,
          CmsDd3Children2Footer
        }
    }
</script>

<style scoped>
  section{
    width: 1123px;
    height: 509px;
    border:1px solid #d4dde2;
    margin:0 auto;
  }
</style>
