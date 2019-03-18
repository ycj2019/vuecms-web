<template>
    <div class="article_right">
      <cms-article-right-top v-if="data" :data="data"></cms-article-right-top>
      <cms-article-right-list></cms-article-right-list>
      <cms-article-buttom></cms-article-buttom>
    </div>
</template>

<script>
    import CmsArticleButtom from "./CmsArticleButtom"
    import CmsArticleRightTop from "./CmsArticleRightTop"
    import CmsArticleRightList from "./CmsArticleRightList"
    export default {
        name: "CmsArticleRight",
        components:{
          CmsArticleButtom,
          CmsArticleRightTop,
          CmsArticleRightList
        },
        props:["data"]
    }
</script>

<style scoped>
  .article_right{
    flex: 1;

  }
</style>
