<template>
  <div class="sm-footer">
    <div class="sm-footer-left">
      <button class="cf-sec-four"><span>保存排序</span></button>
      <button class="jinyong"><span>批量删除</span></button>
      <span class="sm-foot-1">
									每页显示
									<input type="text"/>
									条，输入后按回车
								</span>
    </div>
    <div class="sm-footer-right">
      <span>共50条</span>
      <button class="sm-foot-2">
        <span class="iconfont icon-el-icon-arrow-left"></span>
      </button>
      <ul>
        <li class="sm-right-1">1</li>
        <li  class="sm-right-1">2</li>
        <li  class="sm-right-1">3</li>
        <li  class="sm-right-1">4</li>
      </ul>
      <button class="sm-foot-3">
        <span class="iconfont icon-el-icon-arrow-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-tm-footer"
    }
</script>

<style scoped>

</style>
