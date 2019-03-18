<template>
  <div class="center">
    <ul>
     <cms-dd3-children2-information></cms-dd3-children2-information>
    </ul>
  </div>
</template>

<script>
    import CmsDd3Children2Information from "./CmsDd3Children2Information"
    export default {
        name: "CmsDd3Children2InformationList",
        components:{
          CmsDd3Children2Information
        }
    }
</script>

<style scoped>
  .center{
    width: 100%;
    height: 323px;
    background: #fff;

  }
  .center ul{
    margin-left: 24px;
    list-style: none;
  }
</style>
