<template>
  <div class="content">
    <section>
      <cms-dd3-header></cms-dd3-header>
      <cms-dd3-choose></cms-dd3-choose>
      <cms-dd3-information-list></cms-dd3-information-list>
      <cms-dd3-footer></cms-dd3-footer>
    </section>
  </div>
</template>

<script>
  import CmsDd3Header from "../vm-dd3/CmsDd3Header"
  import CmsDd3Choose from "../vm-dd3/CmsDd3Choose"
  import CmsDd3InformationList from "../vm-dd3/CmsDd3InformationList"
  import CmsDd3Footer from "../vm-dd3/CmsDd3Footer"
    export default {
        name: "CmsDd3",
        components:{
          CmsDd3Header,
          CmsDd3Choose,
          CmsDd3InformationList,
          CmsDd3Footer
        }
    }
</script>

<style scoped>
  .content{
    top: 64px;
    bottom: 24px;
    /*width: 100%;*/
    padding: 0 24px;
    background: #f0f4f6;
  }
  section{
    /*width: 100%;*/
    height:100%;
    border:1px solid #d4dde2;
    margin:0 auto;
    background: #fff;
    margin-left:220px;
  }
</style>
