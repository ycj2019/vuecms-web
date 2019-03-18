<template>
  <li>
    <input type="checkbox">
    <span>1</span>
    <span>1488333077758</span>
    <span style="margin-left: 5px;">1488333005894</span>
    <span style="margin-left: 20px;">test1</span>
    <span>2017-03-01 09:50:05</span>
    <span>未发货，申请退货</span>
    <span>2017-03-01 09:51:20</span>
    <span>已完成</span>
    <span>
          <router-link to="/cmsdd4Children"><span class="iconfont icon-edit_small"></span></router-link>
          <span class="iconfont icon-del"></span>
        </span>
  </li>
</template>

<script>
    export default {
        name: "CmsDd4Information"
    }
</script>

<style scoped>
li a{
    text-decoration: none;
}
  .vm-dd4-bigBox4 ul li{
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .vm-dd4-bigBox4 ul li>span{
    width: 108px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd4-bigBox4 ul li:hover{
    background: darkseagreen;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(3){
    width: 112px;
  }
  .vm-dd4-bigBox4 ul .lis>span:nth-child(5){
    margin-left:30px;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(6),.vm-dd4-bigBox4 ul li>span:nth-child(7),.vm-dd4-bigBox4 ul li>span:nth-child(8){
    line-height: 20px;
  }
  .vm-dd4-bigBox4 ul li>span:nth-child(2),.vm-dd4-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd4-bigBox4 ul li>span:last-child{
    width: 200px;
  }
  .icon-edit_small,.icon-del{
    padding:3px 3px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
  }
  .icon-edit_small{
    background: #17d57e;
  }
  .icon-del{
    background:#ff8b53 ;
    margin-left: 6px;
  }
  ul li .iconfont{
    font-size:30px;
  }
</style>
