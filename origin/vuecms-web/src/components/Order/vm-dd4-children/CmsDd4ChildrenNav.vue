<template>
  <div class="sectionThree3">
    <ul>
      <li><span class="spa2">审核</span></li>
      <li><span class="spa2">退回</span></li>
      <li><span class="spa2">收货</span></li>
      <li><span class="spa2">退款</span></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "CmsDd4ChildrenNav"
    }
</script>

<style scoped>
  .sectionThree3{
    height: 80px;
    border-bottom: 1px solid #eeeeee;
    background: #fff;
    line-height: 80px;
  }
  .sectionThree3 ul{
    list-style: none;
  }
  .sectionThree3 ul li{
    float: left;
    margin-left: 20px;
  }
  .sectionThree3 ul li span{
    padding:10px 24px;
    border:1px solid #dcdfe6;
    border-radius: 3px;
    font-size: 14px;

  }
  .sectionThree3 .spa{
    color:#606266;
    cursor: pointer;
  }
  .sectionThree3 .spa:hover{
    color:#409eff;
    background: #ecf5ff;
    border-color: #c6e2ff;
  }
  .sectionThree3 .spa2{
    color:#c0c4cc;
    cursor: not-allowed;
  }
</style>
