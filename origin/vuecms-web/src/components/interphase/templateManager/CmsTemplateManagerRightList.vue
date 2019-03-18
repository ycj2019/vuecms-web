<template>
  <div>
    <ul>
      <li>
        <span></span>
        <span>文件名</span>
        <span>大小</span>
        <span>最后修改时间</span>
        <span>操作</span>
      </li>
      <li>
      <span>
      </span>
        <span>内容.html</span>
        <span>1kb</span>
        <span>2019-03-13 10:47:21</span>
        <span>
            <a href="javaScript:;"  title="重命名"><span class="iconfont icon-zhongmingming"></span></a>
            <a href="javaScript:;"  title="编辑"><span class="iconfont icon-edit_small"></span></a>
            <a href="javaScript:;"  title="编辑">
              <el-button @click="open2">
                <span class="iconfont icon-del"></span>
              </el-button>
            </a>
        </span>
      </li>
    </ul>
    <span class="del">批量删除</span>
  </div>

</template>

<script>
    export default {
        name: "CmsTemplateManagerRightList",
        methods:{
          open2() {
            this.$confirm('您确定要删除模板吗?', '警告', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'error',
                message: '没有权限删除!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
        }
    }
</script>

<style scoped>
 /* ul{
    width: 100%;
    height: 100%;
  }*/
  ul li{
    /*width: 100%;*/
    border-bottom:  1px solid #eee;
    display: flex;
    align-items: center;
    height:50px;
    justify-content: space-around;
}
  ul li>span{
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    width: 128px;
  }
ul li>span:first-child{
  width: 14px ;
  height: 14px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  margin: 0 26px;
}
ul li span:last-child{
  width: 300px;
}
ul li span:last-child a{
  height: 32px;
  width: 32px;
  color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  border-radius: 4px;
}
 .el-button{
  color: #fff;
  font-weight: normal;
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
}
  ul li span:last-child a:first-child{
  background: #d573ea;
}
ul li span:last-child a:nth-child(2){
  background: #17d57e;
}

ul li span:last-child a:nth-child(3){
  background: #ff8b53;
}

ul li span:last-child a:hover{
  opacity: .6;
  transition: all 1s;

}
  .del{
    width: 80px;
    height: 30px;
    border-radius: 4px;
    font-size: 14px;
    color: #c3c3c3;
    border: 1px solid #eee;
    display: block;
    text-align: center;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 33px;
  }
</style>
