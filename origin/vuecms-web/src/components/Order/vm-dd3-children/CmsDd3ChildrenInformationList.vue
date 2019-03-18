<template>
  <div class="center">
    <ul>
      <cms-dd3-children-information></cms-dd3-children-information>
    </ul>
  </div>
</template>

<script>
    import CmsDd3ChildrenInformation from "./CmsDd3ChildrenInformation"
    export default {
        name: "CmsDd3ChildrenInformationList",
        components:{
          CmsDd3ChildrenInformation
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
