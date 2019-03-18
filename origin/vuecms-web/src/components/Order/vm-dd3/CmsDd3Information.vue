<template>
  <li>
    <input type="checkbox">
    <span>5</span>
    <span>黄强</span>
    <span>18710901940</span>
    <span>江西省南昌市南昌县</span>
    <span>否</span>
    <span>
          <router-link to="/cmsdd3Children2"><span class="iconfont icon-edit_small"></span></router-link>
          <span class="iconfont icon-del"></span>
        </span>
  </li>
</template>

<script>
    export default {
        name: "CmsDd3Information"
    }
</script>

<style scoped>
  li a{
    text-decoration: none;
  }
  .vm-dd3-bigBox4 ul li{
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .vm-dd3-bigBox4 ul li>span{
    width: 194px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd3-bigBox4 ul li:hover{
    background: darkseagreen;
  }
  .vm-dd3-bigBox4 ul li>span:nth-child(2),.vm-dd3-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd3-bigBox4 ul li>span:last-child{
    width: 200px;
  }
  .icon-edit_small,.icon-del{
    padding:3px 3px;
    border-radius: 3px;
    color:#fff;
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
