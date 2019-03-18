<template>
    <div class="article_bottom">
      <div class="article_bottom_left">
        <span>批量删除</span>
        <span>
        每页显示
        <input type="text"/>
        条，输入后按回车
        </span>
      </div>
      <div class="article_bottom_right">
        <span>共<em>25</em>条</span>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>

    </div>
</template>

<script>
    export default {
        name: "CmsArticleButtom"
    }
</script>

<style scoped>
.article_bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
}
  .article_bottom_left{
    display: flex;
  }
.article_bottom_left span:first-child{
  width: 86px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-right: 30px;
  color: #ccc;
  line-height: 30px;
  text-align: center;
}
.article_bottom_left span:last-child{
  display: flex;
  align-items: center;
  color: #999;
}
.article_bottom_left span:last-child input{
  outline: none;
  width: 48px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin: 0 10px;
  padding-left: 10px;
}
  .article_bottom_right{
    display: flex;
    align-items: center;
  }
</style>
