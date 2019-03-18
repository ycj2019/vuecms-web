<template>
  <div class="header">
    <h3>查看发货信息</h3>
    <router-link to="/cmsdd2"><span>返回列表</span></router-link>
  </div>
</template>

<script>
    export default {
        name: "CmsDd2ChildrenHeader"
    }
</script>

<style scoped>
  .header{
    width:100% ;
    height:49px;
    border-bottom: 1px solid #d4dde2;
    background: #eceff1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header a{
    text-decoration: none;
  }
  .header h3{
    color: #565656;
    font-size:14px;
    margin-left: 24px;
    font-weight: normal;
  }
  .header span:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .header span{
    padding:9px 15px;
    background: #fff;
    color:#606266;
    font-size:14px;
    margin-right: 24px;
    border-radius: 4px;
  }
</style>
