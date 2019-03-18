<template>
    <div class="sm-footer">
        <div class="sm-footer-left">
            <button class="cf-sec-four"><span>保存排序</span></button>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormPayBottom',
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
.sm-footer-left .cf-sec-four{
	margin-right: 10px;
	color:#606266;
	cursor: pointer;
}
.cf-sec-four:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    transition: .1s;
}
</style>
