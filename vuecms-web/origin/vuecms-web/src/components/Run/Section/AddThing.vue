<template>
  <div  class="Admin-list">
    <div class="tit-header">
      <p>管理员添加</p>
    </div>
    <div class="box">
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>用户名</label>
          <input type="text" class="input">
        </div>
        <div class="err"><span style="display: none;">请输入用户名</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>邮箱</label>
          <input type="text" class="input">
        </div>
        <div class="err"><span style="display: none;">请输入邮箱地址</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>密码</label>
          <input type="text" class="input">
        </div>
        <div class="err"><span style="display: none;">请输入密码</span></div>
      </div>
      <div class="reg-info">
        <div class="info">
          <label for="username" class="item""><i>*</i>确认密码</label>
          <input type="text" class="input">
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
      <button style="background-color: #e6a23c;">提交并继续添加</button>
      <button style="background-color: #409eff;">添加</button>
      <button style="background-color: #909399;">重置</button>
      <p>选择“提交并继续添加”按钮会停留在添加页面；选择“添加”按钮后将跳转到对应的列表页。</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "add-thing"
    }
</script>

<style>

</style>
