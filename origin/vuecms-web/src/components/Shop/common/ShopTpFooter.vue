<template>
  <div class="sm-footer">
    <div class="sm-footer-left">
      <button class="jinyong"><span>批量删除</span></button>
      <span class="sm-foot-1">
									每页显示
									<input type="text"/>
									条，输入后按回车
								</span>
    </div>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-tp-footer"
    }
</script>

<style scoped>

</style>
