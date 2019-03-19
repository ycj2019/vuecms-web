<template>
  <div  class="work-con-l">
    <div class="work-deal" style="margin-bottom: 24px">
      <h3 class="work-h3">待处理</h3>
      <div class="work-menu">
        <work-con-menu v-for="(da,idx) in data" :key="idx" :data="da"></work-con-menu>
      </div>
    </div>
    <div class="work-deal">
      <h3 class="work-h3">常用菜单</h3>
      <div class="work-menu">
        <a href="#"><span class="iconfont icon-fabushangpin1 bl"></span><span>商品发布</span></a>
        <a href="#"><span class="iconfont icon-tupian bl"></span><span>首页轮播图</span></a>
        <a href="#"><span class="iconfont icon-ziyuan bl"></span><span>优惠卷</span></a>
        <a href="#"><span class="iconfont icon-kefu bl"></span><span>在线客服</span></a>
        <a href="#"><span class="iconfont icon-fabudewenzhang bl"></span><span>文章发布</span></a>
      </div>
    </div>
  </div>
</template>

<script>
    import WorkConMenu from "./WorkConMenu";
    export default {
        name: "WorkDeal",
      components: {WorkConMenu},
      props:["data"]
    }
</script>

<style scoped>
  .icon-fabushangpin1{
    background: #ffbe60;
  }
  .icon-tupian{
    background: #47d7e8;
  }
  .icon-ziyuan{
    background: #55de9f;
  }
  .icon-kefu{
    background: #fb99cc;
  }
  .icon-fabudewenzhang{
    background: #87c0ea;
  }
</style>
