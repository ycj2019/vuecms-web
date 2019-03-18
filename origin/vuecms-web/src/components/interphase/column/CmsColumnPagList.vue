<template>
  <div class="c_l">
    <cms-article-right-top v-if="data" :data="data"></cms-article-right-top>
    <ul class="list_title">
      <li>
        <span class="checked check">√</span>
      </li>
      <li>id</li>
      <li>标题</li>
      <li>是否禁用</li>
      <li>操作</li>
    </ul>
    <ul class="content">
      <li>
        <span class="checked check">√</span>
      </li>
      <li>1</li>
      <li>联系我们</li>
      <li>是</li>
      <li>
        <span class="iconfont icon-edit_small"></span>
        <span class="iconfont icon-del"></span>
      </li>
    </ul>
  </div>
</template>

<script>
    import CmsArticleRightTop from "../article/CmsArticleRightTop"
    export default {
        name: "CmsColumnPagList",
        components:{
          CmsArticleRightTop
        },
        props:["data"]
    }
</script>

<style scoped>
  .c_l{
    width: 100%;
  }
  .list_title,.content{
    display: flex;
    align-items: center;
    height: 49px;
    border-bottom: 1px solid #eee;
  }
  .list_title li,.content li{
    width: 234px;
    text-align: center;
  }
  .list_title li:first-child span,.content li:first-child span{
    height: 12px;
    width: 12px;
    border: 1px solid #eee;
    font-size: 10px;
    display: inline-block;
    color: #fff;
    cursor: pointer;
  }
  .list_title li:first-child .checked,.content li:first-child .checked{
    background: #409eff;
    border: 1px solid #409eff;
  }
  .list_title li:first-child,.content li:first-child,.list_title li:nth-child(2),.content li:nth-child(2){
    width: 68px;
  }
  .content li:last-child span{
    height: 32px;
    width: 32px;
    color: #fff;
    display: inline-block;
    text-align: center;
    line-height: 32px;
    font-size: 20px;
    border-radius: 4px;
  }
  .content li:last-child span:first-child{
    background: #17d57e;
  }
  .content li:last-child span:last-child{
    background: #ff8b53;
  }
</style>
