<template>
    <div class="ColumnBox">
      <cms-interphase-top>分类列表</cms-interphase-top>
      <div class="Column_content">
        <cms-column-article-left class="left"></cms-column-article-left>
        <div class="right">
          <cms-column-pag-list v-if="data" :data="data"></cms-column-pag-list>
          <cms-article-buttom></cms-article-buttom>
        </div>

      </div>

    </div>
</template>

<script>
  import CmsInterphaseTop from "../interphaseCommon/CmsInterphaseTop"
  import CmsColumnArticleLeft from "../interphaseCommon/CmsColumnArticleLeft"
  import CmsColumnPagList from "./CmsColumnPagList"
  import CmsArticleButtom from "../article/CmsArticleButtom"
    export default {
        name: "CmsColumnPage",
        components:{
          CmsInterphaseTop,
          CmsColumnArticleLeft,
          CmsColumnPagList,
          CmsArticleButtom
        },
        data(){
          return{
            data:["添加文章"]
          }
        }
    }
</script>

<style scoped>
.ColumnBox{
  /*width: 95%;*/
  margin: 0 auto;
  height: 100%;
  min-height: 700px;
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 245px;
  background: white;
}
.Column_content {
  display: flex;
  width: 100%;
}
  .left{
    border-right: 1px solid #eee;
    height: 100%;
    width: 23%;
  }
  .right{
    width: 80%;
  }
</style>
