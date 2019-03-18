<template>
  <ul class="ul_box">
    <li>
      <img src="/static/img/icon--02.png" alt="">
      刷新
    </li>
    <li>
      <em @click="clickInfo()" class="tag">-</em>
      {{list.title}}
      <ul class="seconds">
        <li v-if="list"  v-for="item in list.content">
          <span class="iconfont icon-torder_light"></span>
          {{item}}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CmsColumnArticleLeft",
    components: {},

    methods:{
      clickInfo(){

        $(".seconds").slideToggle();
        if($(".tag").html()=="-"){
          $(".tag").html("+");
        }else{
          $(".tag").html("-");
        }
      }
    },
    data() {
      return {
        list: {
          title: "顶级分类",
          content: [
            "新手入门",
            "网站公告",
            "新闻中心",
            "热门促销",
            "配送范围及时间",
            "支付方式",
            "公司简介",
            "jspgou保障",
            "底栏"
          ]
        }
      }
    }
  }
</script>

<style scoped>
.ul_box{
  width: 21%;
  height: 100%;
  box-sizing: border-box;

}
.ul_box>li:first-child{
  height: 50px;
  font-size: 16px;
  color: #999;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.ul_box>li:first-child img{
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.ul_box>li:last-child {
  line-height: 32px;
  position: relative;
  /*width: 100%;*/
  padding-left: 20px;
  background:#f5f7fa;
  box-sizing: border-box;
}
.ul_box li em{
  width: 14px;
  height: 14px;
  border: 1px solid #ddd;
  display: inline-block;
  border-radius: 2px;
  text-align: center;
  line-height: 10px;
  padding: 0;
  color: #ddd;
}
.seconds{

  position: absolute;
  width: 100%;
  left: 0;
  top: 32px;
}
.seconds li{
  line-height: 32px;
  /*width: 100%;*/
  padding-left: 30px;
  box-sizing: border-box;
}
.seconds li:hover{
  background: #f5f7fa;
}
.seconds>li .iconfont{
  font-size: 26px;
  color: #ddd;
}
</style>
