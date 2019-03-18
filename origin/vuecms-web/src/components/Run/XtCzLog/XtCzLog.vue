<template>
    <div class="Admin-list">
        <div class="tit-header">
            <p>操作日志列表</p>
        </div>
        <table class="table" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <th style="width: 68px;">
                    <input type="checkbox">
                </th>
                <th>id</th>
                <th>标题</th>
                <th>内容</th>
                <th>操作时间</th>
            </tr>
            <tr>
                <td><input type="checkbox"></td>
                <td>1</td>
                <td>1.1</td>
                <td style="width: 32%;">
                    1.修复关联了商品的规格修改报错，修复规格字段名称重复引起的款式问题。 2.修复跨站脚本攻击漏洞。3.修复子分类子城市添加修改，保存成功后返回顶级界面问题。4.优惠劵
                </td>
                <td>20319-3-14 08:12:22</td>
            </tr>
        </table>
        <div class="sm-footer">   <div class="sm-footer-left">     <button class="cf-sec-four"><span>保存排序</span></button>     <button class="jinyong"><span>批量删除</span></button>     <span class="sm-foot-1"> 							每页显示 							<input type="text"/> 							条，输入后按回车 						</span>   </div>   <div class="sm-footer-right">     <span>共50条</span>     <button class="sm-foot-2">       <span class="iconfont icon-el-icon-arrow-left"></span>     </button>     <ul>       <li class="sm-right-1">1</li>       <li  class="sm-right-1">2</li>       <li  class="sm-right-1">3</li>       <li  class="sm-right-1">4</li>     </ul>     <button class="sm-foot-3">       <span class="iconfont icon-el-icon-arrow-right"></span>     </button>   </div> </div>

    </div>
</template>

<script>
    export default {
        name: "xt-cz-log"
    }
</script>

<style scoped>

</style>