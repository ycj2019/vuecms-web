<template>
  <div class="Admin-list">
    <div class="tit-header">
      <p>管理员修改</p>
    </div>
    <div class="box">
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>用户名</label>
          <span style="color: #000">admin</span>
        </div>
        <div class="err"><span style="display: none;">请输入用户名</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>邮箱</label>
          <input type="text" class="input" placeholder="123@qq.com">
        </div>
        <div class="err"><span style="display: none;">请输入邮箱地址</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>密码</label>
          <input type="text" class="input">	&nbsp;<b>不修改请留空</b>
        </div>
        <div class="err"><span style="display: none;">请输入密码</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>确认密码</label>
          <input type="text" class="input">	&nbsp;<b>不修改请留空</b>
        </div>
        <div class="err"><span style="display: none;">请再次输入密码</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i></i>是否禁用</label>
          <input name="if" type="radio" checked/> &nbsp;否 &nbsp;<input name="if" type="radio"/> &nbsp;是
        </div>
        <div class="err"><span style="display: none;">请再次输入密码</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>只读管理员</label>
          <input name="ii" type="radio" checked/> &nbsp;否 &nbsp;<input name="ii" type="radio"/> &nbsp;是
        </div>
        <div class="err"><span style="display: none;">请再次输入密码</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i></i>角色</label>
          <input type="checkbox" checked/>&nbsp;管理员 &nbsp;<input type="checkbox">&nbsp;test
        </div>
        <div class="err"><span style="display: none;">请再次输入密码</span></div>
      </div>
    </div>
    <div class="box-bottom">
      <button style="background-color: #409eff;">提交</button>
      <button style="background-color: #909399;">重置</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "alter"
    }
</script>

<style>

</style>
