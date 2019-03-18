<template>
  <div class="sm-sec-right-one">
    <div class="sm-sec-right-one-1">
     <span>当前类型：</span>
      <a href="javascript:;">
        生活电器<span class="red">(标红字段为必选字段,无法删除)</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-fl-header"
    }
</script>

<style scoped>
  @import "../../../../static/CmsShop/css/warning.css";
.sm-sec-right-one{
  display: flex;
}
.sm-sec-right-one-1 a{
  color: #1276c3;
  font-size: 14px;
}
  .red{
    color: red;
  }

</style>
