<template>
  <div>
    <div class="tit-header">
      <p>管理员列表</p>
    </div>
    <div class="add-thing">
      <button class="add-btn"><router-link to="addThing">添加管理员</router-link></button>
    </div>
    <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
    <tr>
      <th style="width: 68px;">
        <input type="checkbox">
      </th>
      <th>id</th>
      <th>用户名</th>
      <th>姓名</th>
      <th>最后登录时间</th>
      <th>是否禁用</th>
      <th>操作</th>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td>1</td>
      <td>admin</td>
      <td>admin</td>
      <td>2019-3-12 11:00:00</td>
      <td>否</td>
      <td class="cz">
        <router-link to="alter" class="iconfont icon-edit_small bj" title="修改"></router-link>
        <router-link to="" class="iconfont icon-del sc" title="删除"></router-link>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
    export default {
        name: "table-content"
    }
</script>

<style>

</style>
