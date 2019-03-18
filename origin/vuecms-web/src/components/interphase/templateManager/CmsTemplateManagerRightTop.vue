<template>
    <div class="right-top">
        <span><img src="/static/Inter/img/icon-01.png"></span>
        <span>当前目录：</span>
        <span>/web/cms/hhhhh/ddv/ddd/vvv/vvcc/sssd</span>
        <span>新建文件</span>
        <span>上传文件</span>
        <span class="title">新建目录：<input type="text"></span>
        <span>新建</span>
    </div>
</template>

<script>
    export default {
        name: "CmsTemplateManagerRightTop"
    }
</script>

<style scoped>
.right-top{
  /*width: 100%;*/
  height: 76px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
}

.right-top span:first-child{
  width: 22px;
  height: 26px;
}
.right-top span:first-child img{
  height: 100%;
  width: 100%;
}
.right-top span:nth-child(2){
  font-size: 14px;
  color: #c3c3c3;
}
.right-top span:nth-child(3){
  width: 160px;
  font-size: 12px;
  word-wrap: break-word;
}
.right-top span:nth-child(4){
  width: 88px;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  background: #409eff;
  height: 32px;
  color: #fff;
  border-radius: 4px;
}
.right-top span:nth-child(5){
  width: 88px;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  height: 32px;
}
.right-top span:nth-child(6){
  display: flex;
  font-size: 14px;
  align-items: center;

}
.right-top input{
  width: 97px;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  height: 32px;

}
.right-top span:last-child{
  width: 80px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  height: 32px;
}
</style>
