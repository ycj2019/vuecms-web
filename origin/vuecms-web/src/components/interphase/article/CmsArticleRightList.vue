<template>
  <div class="l_b">
    <ul class="list_title">
      <li>
        <span class="checked check" @click="check">√</span>
      </li>
      <li>id</li>
      <li>栏目名称</li>
      <li>访问路径</li>
      <li>栏目页模板</li>
      <li>内容页模板</li>
      <li>是否显示</li>
      <li>排序</li>
      <li>操作</li>
    </ul>
    <ul class="content">
      <li>
        <span class="checked check" @click="check">√</span>
      </li>
      <li>1</li>
      <li>新手入门</li>
      <li>E/DD/DD</li>
      <li>DDVFV</li>
      <li>eegvfb</li>
      <li>是</li>
      <li><input type="text" value="10"></li>
      <li>
        <span class="iconfont icon-edit_small"></span>
        <span class="iconfont icon-del"></span>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "CmsArticleRightList",
        methods:{
          check(){
            // $(this).toggleClass("checked");
          }
        }
    }
</script>

<style scoped>
  .l_b{
    flex: 1;
  }
.list_title,.content{
  display: flex;
  align-items: center;
  height: 49px;
  border-bottom: 1px solid #eee;
}
.list_title li,.content li{
  width: 80px;
  text-align: center;
}
.list_title li:first-child span,.content li:first-child span{
  height: 12px;
  width: 12px;
  border: 1px solid #eee;
  font-size: 10px;
  display: inline-block;
  color: #fff;
  cursor: pointer;
}
.list_title li:first-child .checked,.content li:first-child .checked{
  background: #409eff;
  border: 1px solid #409eff;
}
.content li input{
  width: 100%;
  height: 32px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #eee;
  padding-left: 10px;
  box-sizing: border-box;
}
.list_title li:last-child,.content li:last-child{
  flex: 1;
}
.list_title li:first-child,.content li:first-child,.list_title li:nth-child(2),.content li:nth-child(2){
  width: 68px;
}
.content li:last-child span{
  height: 32px;
  width: 32px;
  color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  border-radius: 4px;
}
.content li:last-child span:first-child{
  background: #17d57e;
}
.content li:last-child span:last-child{
  background: #ff8b53;
}
</style>
