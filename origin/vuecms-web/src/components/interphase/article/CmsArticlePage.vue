<template>
  <div class="article_box">
    <cms-interphase-top>分类列表</cms-interphase-top>
    <div class="contener">
      <cms-column-article-left class="upLeft"></cms-column-article-left>
      <cms-article-right v-if="list" :data="list"></cms-article-right>
    </div>
  </div>
    
</template>

<script>
    import CmsArticleRight from "./CmsArticleRight"
    import CmsColumnArticleLeft from "../interphaseCommon/CmsColumnArticleLeft"
    import CmsInterphaseTop from "../interphaseCommon/CmsInterphaseTop"
    export default {
        name: "CmsArticlePage",
        components:{
          // CmsArticleButtom,
          CmsColumnArticleLeft,
          CmsArticleRight,
          CmsInterphaseTop
        },
        data(){
          return{
            list:["添加单页面栏目","添加文章栏目","添加链接栏目"]
          }
        }
    }
</script>

<style scoped>
.article_box{
  /*width: 95%;*/
  border: 1px solid #ddd;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 700px;
  margin-bottom: 30px;
  margin-left: 245px;
  margin-right: 20px;
  background: white;
}
  .contener{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .upLeft{
    border-right: 1px solid #d4dde2;
    min-height: 700px;
  }
</style>
