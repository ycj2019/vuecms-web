<template>
  <li>
    <input type="checkbox">
    <span>2</span>
    <span>1492674091791</span>
    <span>861492587823613</span>
    <span>未打印</span>
    <span>admin</span>
    <span>
          <router-link to="/cmsdd2Children"><span class="iconfont icon-torder_light"></span></router-link>
          <span class="iconfont icon-del"></span>
        </span>
  </li>
</template>

<script>
    export default {
        name: "CmsDd2Information"
    }
</script>

<style scoped>

  .vm-dd2-bigBox4 ul li{
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .vm-dd2-bigBox4 ul li>span{
    width: 194px;
    text-align: center;
    color:#656565 ;
    font-size:14px ;
  }
  .vm-dd2-bigBox4 ul li:hover{
    background: darkseagreen;
  }
  .vm-dd2-bigBox4 ul li>span:nth-child(2),.vm-dd2-bigBox4 ul li input{
    width:68px ;
  }
  .vm-dd2-bigBox4 ul li>span:last-child{
    width: 200px;
  }
  li a{
    text-decoration: none;
  }
  .icon-torder_light,.icon-del{
    padding:3px 3px;
    border-radius: 3px;
    color:#fff;
    cursor: pointer;
  }
  .icon-torder_light{
    background: #ffbf35;
  }
  .icon-del{
    background:#ff8b53 ;
    margin-left: 6px;
  }
  ul li .iconfont{
    font-size:30px;
  }
</style>
