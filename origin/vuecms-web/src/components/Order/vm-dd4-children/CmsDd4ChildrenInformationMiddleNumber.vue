<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="退款详情" name="1">
      <div>
        <ul>
          <li>
            <div><span>退款编号</span><span class="spa5">1522657851033</span></div>
            <div><span>申请时间</span><span class="spa5">2019-03-15 21:50:51</span></div>
          </li>
          <li>
            <div><span>退款类型</span><span class="spa5">未发货,申请退货</span></div>
            <div><span>退款状态</span><span class="spa5">已完成</span></div>
          </li>
          <li>
            <div><span>退款金额</span><span class="spa5">0.1</span></div>
            <div><span>退款支付类型</span><span class="spa5">买家个人账户</span></div>
          </li>
          <li>
            <div><span>退款原因</span><span class="spa5">协商一致退款</span></div>
            <div></div>
          </li>
          <li>
            <div><span>退款说明</span></div>
            <div></div>
          </li>
        </ul>
      </div>

    </el-collapse-item>
  </el-collapse>

</template>

<script>
    export default {
        name: "CmsDd4ChildrenInformationMiddleNumber",
      data() {
        return {
          activeNames: ['1']
        };
      },
      methods: {
        handleChange(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>
  .sectionThree5Top3 ul li{
    height: 80px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-around;

  }
  .sectionThree5Top3 ul li div{
    margin-left: 70px;
  }
  .sectionThree5Top3 .spa5{
    margin-left: 30px;
    color:#000;
    font-size: 14px;
  }
  .sectionThree5Top3 span{
    color:#606266;
    font-size: 14px;
  }
  .sectionThree5Top3 ul li>div{
    width: 500px;

  }
</style>
