<template>
  <div class="sectionThree2">
    <h3>退回订单操作</h3>
    <router-link to="/cmsdd4"><span>返回列表</span></router-link>
  </div>
</template>

<script>
    export default {
        name: "CmsDd4ChildrenHeader"
    }
</script>

<style scoped>
  .sectionThree2{
    width:100% ;
    height:49px;
    border-bottom: 1px solid #d4dde2;
    background: #eceff1;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .sectionThree2 a{
    text-decoration: none;
  }
  .sectionThree2 h3{
    color: #565656;
    font-size:14px;
    margin-left: 24px;
    font-weight: normal;
  }
  .sectionThree2 span{
    padding:9px 15px;
    background: #fff;
    color:#606266;
    font-size:14px;
    margin-right: 24px;
    border-radius: 4px;
  }
  .sectionThree2 span:hover{
    color:#409eff;
    background: #ecf5ff;
    border-color: #c6e2ff;
  }
</style>
