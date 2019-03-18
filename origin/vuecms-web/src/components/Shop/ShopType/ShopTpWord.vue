<template>
  <div class="sm-sec-right-two">
    <div class="aa">
										<span>
										</span>
    </div>
    <div class="bb">
      27
    </div>
    <div class="sm-sec-right-two-1">生活电器
    </div>
    <div class="sm-sec-right-two-1">分类
    </div>
    <div class="sm-sec-right-two-1">
      商品
    </div>
    <div class="sm-sec-right-two-1">
      <a href="#">[分类字段]</a>
      <router-link to="/shop/ShopFields">[商品字段]</router-link>
    </div>
    <div class="sm-sec-right-two-1">
      <router-link to="/shop/ShopAddType">
      <div class="bianji">
          <span class="iconfont icon-edit_small"></span>
      </div>
      </router-link>
      <div class="shanchu">
        <span class="iconfont icon-del"></span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "shop-tp-word"
    }
</script>

<style scoped>
.sm-sec-right-two-1 a{
  color: #1276c3;
  font-size:14px;
}

.bianji:hover{
  opacity: .5;
  transition: .5s;
}
.shanchu:hover{
  opacity: .5;
  transition: .5s;
}
.sm-sec-right-two:nth-child(2n){
  background-color:#FAFAFA;
}
.sm-sec-right-two:hover{
  background-color:#F5F7FA;
}
</style>
