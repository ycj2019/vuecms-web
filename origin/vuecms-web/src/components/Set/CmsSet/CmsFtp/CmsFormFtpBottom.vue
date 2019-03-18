<template>
    <div class="sm-footer">
        <div class="sm-footer-left">
            <button class="jinyong"><span>批量删除</span></button>
            <!-- <span class="sm-foot-1">每页显示<input type="text"/>条，输入后按回车</span> -->
        </div>
        <!-- <div class="sm-footer-right">
            <span>共<i style="font-style:normal;">X</i>条</span>
                <button class="sm-foot-2"><span class="iconfont icon-el-icon-arrow-left"></span>
                </button>
            <ul>
                <li class="sm-right-1">X</li>
            </ul>
            <button class="sm-foot-3"><span class="iconfont icon-el-icon-arrow-right"></span>
            </button>
        </div> -->
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormFtpBottom',
        components: {

        }
   }
</script>

<style scoped>
.sm-footer{
	display: flex;
	justify-content: space-between;
	padding: 0 24px;
    margin: 20px 0;
    overflow: hidden;
}
.sm-footer-left{
	display: flex;
}
.sm-foot-1 input{
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display: inline-block;
    height:32px;
    outline: none;
    width: 60px;
    box-sizing: border-box;
    margin: 0 10px 0 5px;
}
.jinyong{
	 cursor: not-allowed;
}
.sm-footer-left button{
	color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
    outline:none;
    line-height: 1;
    border: 1px solid #dcdfe6;
    text-align: center;
    box-sizing: border-box;
    text-align: center;
    padding: 8px 15px;
    font-size: 14px;
    white-space: nowrap;
    border-radius: 4px;
}
.sm-footer-right{
	display: flex;
	font-weight: 700;
	white-space: nowrap;
}
.sm-footer-right ul{
	display:inline-block;
	height:32px;
	line-height: 28px;
}
.sm-foot-1{
	margin-left: 35px;
    color: #999;
	font-size: 14px;
	white-space: nowrap;
}

.sm-right-1{
	display:inline-block;
}
.sm-footer-right .iconfont{
	font-size: 12px;
}
.sm-footer-right span{
	display: inline-block;
    font-size: 13px;
    height: 32px;
    line-height: 32px;
    font-weight: 400;
    vertical-align: top;
    box-sizing: border-box;
    margin-right: 10px;
}
.sm-footer-right button{
	border:none;
	background:#fff;
}
.sm-foot-3{
    padding-left:12px;
    outline: none;
}
.sm-foot-2{
    outline: none;
}
.sm-right-1{
	padding: 0 4px;
    background: #fff;
    font-size: 13px;
    box-sizing: border-box;
}
 .sm-footer .sm-footer-left .cf-sec-four{
	margin-right: 10px;
	color:#606266;
	cursor: pointer;
}
</style>
