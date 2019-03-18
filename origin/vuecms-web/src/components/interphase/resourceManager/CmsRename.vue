<template>
  <div class="reName_box">
    <p class="old_name">
      <span>原名称</span>
      <span>/ssdcd/xvfcfd/sdc</span>
    </p>
    <p class="new_name">
      <span><em>* </em> 新名称<input type="text" /><em> *</em></span>
    </p>
    <p class="btn_out_box">
      <span>提交</span>
      <span>重置</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "CmsRename",
    components:{

    }
  }
</script>

<style scoped>
  .reName_box{
    padding:30px  20px ;
  }
  .old_name span{
    margin-right: 20px;
  }
  .new_name span{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .new_name span input{
    height: 30px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-left: 20px;
    margin-right: 10px;
  }
  .new_name em{
    color: #f00;
    margin-right: 5px;
  }
  .btn_out_box{
    display: flex;
    align-items: center;
    padding-left: 100px;
    padding-top: 20px;
  }
  .btn_out_box span{
    height: 32px;
    width: 40px;
    padding-left: 40px;
    line-height: 32px;
    color: #fff;
    margin-right: 15px;
  }
  .btn_out_box span:first-child{
    background: url("/static/Inter/img/download.png");
  }
  .btn_out_box span:last-child{
    background: url("/static/Inter/img/reset.png");
  }
</style>
