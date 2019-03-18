<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>广告版位列表</p>
        </div>
        <div class="add-thing">
            <button class="add-btn"><router-link to="">添加板块</router-link></button>
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th>id</th>
                <th>版位名称</th>
                <th>是否启用</th>
                <th>操作</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>1</td>
                <td>页头广告位</td>
                <td>是</td>
                <td class="cz">
                    <a href="#" class="iconfont icon-edit_small bj"></a>
                    <a href="#" class="iconfont icon-del sc"></a>
                </td>
            </tr>
        </table>
        <div class="sm-footer">   <div class="sm-footer-left">     <button class="cf-sec-four"><span>保存排序</span></button>     <button class="jinyong"><span>批量删除</span></button>     <span class="sm-foot-1"> 							每页显示 							<input type="text"/> 							条，输入后按回车 						</span>   </div>   <div class="sm-footer-right">     <span>共50条</span>     <button class="sm-foot-2">       <span class="iconfont icon-el-icon-arrow-left"></span>     </button>     <ul>       <li class="sm-right-1">1</li>       <li  class="sm-right-1">2</li>       <li  class="sm-right-1">3</li>       <li  class="sm-right-1">4</li>     </ul>     <button class="sm-foot-3">       <span class="iconfont icon-el-icon-arrow-right"></span>     </button>   </div> </div>

    </div>
</template>

<script>
    export default {
        name: "position-section"
    }
</script>

<style scoped>

</style>