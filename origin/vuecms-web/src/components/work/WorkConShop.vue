<template>
    <ul>
      <li class="work-shop">
        <span class="work-shopl">快乐学习</span>
        <span class="work-shopr">日用百货</span>
        <span class="work-shopr">13</span>
      </li>
      <li class="work-shop">
        <span class="work-shopl">北欧实木餐桌椅小户型现代简约饭桌子组合长方形橡木餐台6人家用</span>
        <span class="work-shopr">卧室家具</span>
        <span class="work-shopr">3</span>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "WorkConShop"
    }
</script>

<style scoped>
.work-shop{
  height: 45px;
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  line-height: 45px;
}
.work-shopl{
  text-align: left;
  padding-left: 24px;
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.work-shopr{
  width: 17%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
