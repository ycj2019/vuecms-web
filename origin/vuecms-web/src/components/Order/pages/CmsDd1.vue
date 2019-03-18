<template>
  <div style="background: #f0f4f6;">
    <header>
        <cms-dd1-header></cms-dd1-header>
    </header>
    <section>
        <cms-dd1-header2></cms-dd1-header2>
        <cms-dd1-choose></cms-dd1-choose>
        <cms-dd1-information-list></cms-dd1-information-list>
        <cms-dd1-footer></cms-dd1-footer>
    </section>
  </div>

</template>

<script>
    import CmsDd1Header from "../vm-dd/commons/CmsDd1Header"
    import CmsDd1Header2 from "../vm-dd/CmsDd1Header2"

    import CmsDd1Choose from "../vm-dd/CmsDd1Choose"

    import CmsDd1InformationList from "../vm-dd/CmsDd1InformationList"
    import CmsDd1Footer from "../vm-dd/CmsDd1Footer"



    export default {
        name: "CmsDd1",
        components:{
          CmsDd1Header,
          CmsDd1Header2,
          CmsDd1Choose,
          CmsDd1InformationList,
          CmsDd1Footer
        }
    }
</script>

<style scoped>

  section{
    width:1100px;
    height:770px;
    background: #fff;
    margin:0 auto;
    border:1px solid #d4dde2;
  }
</style>
