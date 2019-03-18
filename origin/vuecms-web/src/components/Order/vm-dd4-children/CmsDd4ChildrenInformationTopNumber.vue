<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="订单信息" name="1">
      <div>
        <ul>
          <li>
            <div><span>订单编号</span><span class="spa5">1522657851033</span></div>
            <div><span>下单日期</span><span class="spa5">2019-03-15 21:50:51</span></div>
          </li>
          <li>
            <div><span>订单状态</span><span class="spa5">未确认</span></div>
            <div><span>支付状态</span><span class="spa5">未支付</span></div>
          </li>
          <li>
            <div><span>配送状态</span><span class="spa5">未发货</span></div>
            <div><span>配送方式</span><span class="spa5">普通快递</span></div>
          </li>
          <li>
            <div><span>商品总金额</span><span class="spa5">0.1</span></div>
            <div><span>运费</span><span class="spa5">0</span></div>
          </li>
          <li>
            <div><span>订单总金额</span><span class="spa5">0.1</span></div>
            <div><span>支付方式</span><span class="spa5">货到付款</span></div>
          </li>
        </ul>
      </div>

    </el-collapse-item>
  </el-collapse>

</template>

<script>
    export default {
        name: "CmsDd4ChildrenInformationTopNumber",
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
