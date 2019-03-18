<template>
  <div class="content">
    <section>
      <cms-dd2-header></cms-dd2-header>
      <cms-dd2-choose></cms-dd2-choose>
      <cms-dd2-information-list></cms-dd2-information-list>
      <cms-dd2-footer></cms-dd2-footer>
    </section>
  </div>
</template>

<script>

  import CmsDd2Header from "../vm-dd2/CmsDd2Header"
  import CmsDd2Choose from "../vm-dd2/CmsDd2Choose"
  import CmsDd2InformationList from "../vm-dd2/CmsDd2InformationList"
  import CmsDd2Footer from "../vm-dd2/CmsDd2Footer"

  export default {
        name: "CmsDd2",
        components:{
          CmsDd2Header,
          CmsDd2Choose,
          CmsDd2InformationList,
          CmsDd2Footer
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
  margin-left: 220px;
  }
</style>
