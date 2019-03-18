<template>
  <div class="content">
    <section>
      <cms-dd4-header></cms-dd4-header>
      <cms-dd4-choose></cms-dd4-choose>
      <cms-dd4-information-list></cms-dd4-information-list>
      <cms-dd4-footer></cms-dd4-footer>
    </section>
  </div>
</template>

<script>
  import CmsDd4Header from "../vm-dd4/CmsDd4Header"
  import CmsDd4Choose from "../vm-dd4/CmsDd4Choose"
  import CmsDd4InformationList from "../vm-dd4/CmsDd4InformationList"
  import CmsDd4Footer from "../vm-dd4/CmsDd4Footer"
    export default {
        name: "CmsDd4",
        components:{
          CmsDd4Header,
          CmsDd4Choose,
          CmsDd4InformationList,
          CmsDd4Footer
        }
    }
</script>

<style scoped>
  .content{
    top: 64px;
    bottom: 24px;
    width: 100%;
    padding: 0 24px;
    background: #f0f4f6;
  }
  section{
    width: 100%;
    height:100%;
    border:1px solid #d4dde2;
    margin:0 auto;
    background: #fff;
  }
</style>
