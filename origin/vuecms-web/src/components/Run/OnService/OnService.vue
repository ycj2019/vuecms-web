<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>在线客服列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"><router-link to="">添加客服</router-link></button>
            <!-- <select name="alltype" id="">
                <option value="">所有分类</option>
            </select> -->
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th>类型</th>
                <th>客服名称</th>
                <th>客服账号</th>
                <th>排列顺序</th>
                <th>是否禁用</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>QQ</td>
                <td>Mr.谢</td>
                <td>762122032</td>
                <td><input type="text" value="10"></td>
                <td>否</td>
                <td class="cz">
                    <a href="#" class="iconfont icon-del sc"></a>
                </td>
            </tr>
        </table>
        <div class="sm-footer">   <div class="sm-footer-left">     <button class="cf-sec-four"><span>保存排序</span></button>     <button class="jinyong"><span>批量删除</span></button>     <span class="sm-foot-1"> 							每页显示 							<input type="text"/> 							条，输入后按回车 						</span>   </div>   <div class="sm-footer-right">     <span>共50条</span>     <button class="sm-foot-2">       <span class="iconfont icon-el-icon-arrow-left"></span>     </button>     <ul>       <li class="sm-right-1">1</li>       <li  class="sm-right-1">2</li>       <li  class="sm-right-1">3</li>       <li  class="sm-right-1">4</li>     </ul>     <button class="sm-foot-3">       <span class="iconfont icon-el-icon-arrow-right"></span>     </button>   </div> </div>

    </div>
</template>

<script>
    export default {
        name: "on-service"
    }
</script>

<style scoped>

</style>