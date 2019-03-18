<template>
  <div class="work-footl">
      <a><span>生成索引</span></a>
      <p>系统初始时必须生成索引。生成后可加快商品的搜索速度，减小访问数据库的压力。 索引只需要生成一次即可。</p>
  </div>
</template>

<script>
    export default {
        name: "WorkConFootL"
    }
</script>

<style scoped>
.work-footl{
  width: 45%;
  height: 90px;
  background: white;
  padding: 24px;
  display: inline-block;
}
.work-footl a{
  padding: 8px 15px;
  min-width: 80px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 5px;
}
.work-footl p {
  margin-top: 20px;
  font-size: 14px;
}
</style>
