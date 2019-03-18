<template>
    <div class="title">
      <a href="javaScript:;">
        <img src="/static/Inter/img/icon--02.png" alt=""> 刷新
      </a>
      <a href="javaScript:;">
        <img src="/static/Inter/img/icon-03.png" alt="">
        <img src="/static/Inter/img/icon-04.png" alt="">
      </a>
    </div>
</template>

<script>
    export default {
        name: "CmsManagerLeftTop"
    }
</script>

<style scoped>
.title{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-right: 25px;
}
.title a{
  display: flex;
  font-size: 14px;
  color: #4c5f70;
}
.title a:first-child img{
  margin-right: 10px;
  height:14px;
}
.title a:last-child img{
  margin-left: 15px;
}
.title a img{
  height: 20px;
}
</style>
