<template>
    <div class="work-con-l">
      <div class="work-deal">
          <h3 class="work-h3">热销商品</h3>
          <work-con-radio></work-con-radio>
          <div class="work-shoph">
              <span class="work-shopl">商品名称</span>
              <span class="work-shopr">分类</span>
              <span class="work-shopr">销量</span>
          </div>
          <work-con-shop :data="data"></work-con-shop>
      </div>
    </div>
</template>

<script>
    import WorkConRadio from "./WorkConRadio"
    import WorkConShop from "./WorkConShop"

    export default {
        name: "WorkConR",
        components: {WorkConShop, WorkConRadio},
      props:["data"]
    }
</script>

<style scoped>
.work-deal{
  position: relative;
  height: 100%;
}
.work-deal .work-radio{
  position: absolute;
  right: 40px;
  top: 10px;
}
.work-shoph{
  height: 45px;
  background: #f6f9fb;
  color: #89a8c0;
  font-weight: 400;
  font-size: 14px;
  line-height: 45px;
}
.work-shopl{
  text-align: left;
  padding-left: 24px;
  width: 60%;
  display: inline-block;
}
.work-shopr{
  width: 15%;
  display: inline-block;
  text-align: center;
}
</style>
