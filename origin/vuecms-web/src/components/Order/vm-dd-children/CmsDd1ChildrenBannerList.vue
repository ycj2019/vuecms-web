<template>
  <div class="sectionThree4">
    <ul>
      <li>
        <span>商品编号</span>
        <span>商品名称</span>
        <span>成交价</span>
        <span>单重</span>
        <span>购买数量</span>
        <span>小记</span>
      </li>
      <cms-dd1-children-banner></cms-dd1-children-banner>
    </ul>
  </div>
</template>

<script>
    import CmsDd1ChildrenBanner from "./CmsDd1ChildrenBanner"
    export default {
        name: "CmsDd1ChildrenBannerList",
        components:{
          CmsDd1ChildrenBanner
        }
    }
</script>

<style scoped>
  .sectionThree4{
    height: 114px;
    background: #fff;
  }
  .sectionThree4 ul li{
    height: 55px;
    border-bottom: 1px solid #eeeeee;
    line-height: 55px;
    list-style: none;
  }
  .sectionThree4 ul li>span{
    width: 75px;
    display: inline-block;
    text-align: center;
    color:#8a8e98 ;
    font-size: 14px;
  }
  .sectionThree4 ul li span:nth-child(1){
    width: 225px;
  }
  .sectionThree4 ul li span:nth-child(2){
    width: 440px;
  }
  .sectionThree4 img{
    display: inline-block;

  }
</style>
