<template>
  <div>
  <li class="lis2">
    <input type="checkbox" name="choose">
    <span>1971</span>
    <span>1552383750253</span>
    <span>test1</span>
    <span>3100(含运费0)</span>
    <span>2019-03-12 17:42:30</span>
    <span>未确认</span>
    <span>未支付</span>
    <span>网上支付</span>
    <span>未发货</span>
    <span>普通快递</span>
    <span>
          <router-link to="/cmsdd1Children"><span class="iconfont icon-torder_light"></span></router-link>
           <span class="iconfont icon-edit_small"></span>
          <el-button type="text" @click="dialogVisible = true">
            <span class="iconfont icon-del"></span>
          </el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>订单删除，会导致商城用户无法查看且数据无法恢复，请谨慎操作，是否确定要删除?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false" style="padding: 8px 15px">确 定</el-button>
            </span>
          </el-dialog>


    </span>
  </li>


  </div>
</template>

<script>
    export default {
        name: "CmsDd1Information",
      //   data() {
      //     return {
      //     visible2: false,
      //   };
      // }
      data() {
        return {
          dialogVisible: false
        };
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    }
</script>

<style scoped>

  .lis2 a{
    text-decoration: none;
  }
 .lis2 .icon-torder_light,.lis2 .icon-edit_small,.lis2 .icon-del{
   color: #fff;
 }
  .vm-dd-bigBox4 ul li{
    width:100%;
    height:47px ;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -40px;
  }

  .vm-dd-bigBox4 ul li>span{
    width: 86px;
    text-align: center;
  }
  .vm-dd-bigBox4 ul li:hover{
    background: darkseagreen;
  }
  .vm-dd-bigBox4 ul li>span:nth-child(2),.vm-dd-bigBox4 ul li input{
    width: 68px;
  }
  .vm-dd-bigBox4 ul li>span:nth-child(3){
    width: 90px;
  }
  .vm-dd-bigBox4 ul li>span:last-child{
    flex: 1;
    /*width: 200px;*/
  }
  .vm-dd-bigBox4 ul li span{
    color:#656565 ;
    font-size: 12px;
  }
  .lis2 .iconfont{
    font-size:30px;
  }
  .icon-torder_light{
    padding: 3px 3px;
    background: #ffbf35;
    border-radius: 2px;
  }
  .icon-edit_small{
    padding: 3px 3px;
    background: #17d57e;
    margin-left: 6px;
    border-radius: 2px;
  }
  .icon-del{
    padding: 3px 3px;
    background: #ff8b53;
    margin-left: 6px;
    border-radius: 3px;
  }

</style>
