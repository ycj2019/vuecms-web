<template>
  <div class="vm-dd3-bigBox3">
    <div class="vm-dd3-bigBox3Left">
      <router-link to="/cmsdd3Children"><span>添加发货信息</span></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsDd3Choose"
    }
</script>

<style scoped>
  .vm-dd3-bigBox3Left a{
      text-decoration: none;
  }
  .vm-dd3-bigBox3{
    height: 52px;
    border-bottom: 1px solid #d4dde2;
    padding-top: 20px;
  }
  .vm-dd3-bigBox3Left{
    width: 116px;
    height:32px;
    border-radius: 4px;
    border:1px solid #d8dce5;
    line-height: 30px;
    margin-left: 24px;
    float:left;
    cursor: pointer;
    background: #409eff;
  }
  .vm-dd3-bigBox3Left span{
    color:#fff;
    font-size:14px;
    margin-left: 15px;
  }
</style>
