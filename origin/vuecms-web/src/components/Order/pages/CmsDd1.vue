<template>
  <div class="content">
    <section>
        <cms-dd1-header2></cms-dd1-header2>
        <cms-dd1-choose></cms-dd1-choose>
        <cms-dd1-information-list></cms-dd1-information-list>
        <cms-dd1-footer></cms-dd1-footer>
    </section>
  </div>

</template>

<script>
    import CmsDd1Header2 from "../vm-dd/CmsDd1Header2"

    import CmsDd1Choose from "../vm-dd/CmsDd1Choose"

    import CmsDd1InformationList from "../vm-dd/CmsDd1InformationList"
    import CmsDd1Footer from "../vm-dd/CmsDd1Footer"



    export default {
        name: "CmsDd1",
        components:{

          CmsDd1Header2,
          CmsDd1Choose,
          CmsDd1InformationList,
          CmsDd1Footer
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
    width:100%;
    height:100%;
    background: #fff;
    margin:0 auto;
    border:1px solid #d4dde2;
  }
</style>
