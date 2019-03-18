<template>

  <div>
    <cms-new-build-top></cms-new-build-top>
    <div class="file">
      <span>
        文件名:
        <input type="text">
      </span>
        <textarea class="content">

      </textarea>
      
    </div>
    <p class="btn">
      <span>添加</span>
      <span>重置</span>
    </p>
  </div>



</template>

<script>
    import CmsNewBuildTop from "../interphaseCommon/CmsNewBuildTop"
    export default {
        name: "CmsNewBuild",
        components:{
          CmsNewBuildTop
        }
    }
</script>

<style scoped>

  .file{
    /*margin: 20px ;*/
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    border-bottom: 1px dashed #d4dde2;
    margin: 0 auto;
    width: 70%;

  }
  .file span{
    height: 34px;
    display: block;
    color: #565656;
    font-size: 14px;
    margin-bottom: 50px;
    margin-top: 20px;
  }
  .file span input{
    display: inline-block;
    height: 34px;
    width: 174px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d4dde2;
    margin-left: 10px;
  }
  .file .content{
    display: block;
    height: 380px;
    width: 100%;
    margin: 0 auto;
    resize: none;
  }
  .btn{
    margin-top: 30px;
    display: flex;
  }
  .btn span{
    width: 80px;
    height: 30px;
    border-radius: 4px;
    line-height: 30px;
    text-align: center;

  }
  .btn span:first-child{
    color: #fff;
    background:#409eff ;
    border: 1px solid #409eff;
    margin-left: 150px;
    margin-right: 16px;
  }
  .btn span:last-child{
    border: 1px solid #d4dde2;
  }
</style>
