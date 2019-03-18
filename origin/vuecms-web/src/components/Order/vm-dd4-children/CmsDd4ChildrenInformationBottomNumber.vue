<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="收货人信息" name="1">
      <div>
        <ul>
        <li>
          <div><span>收货人姓名</span><span class="spa5">1522657851033</span></div>
          <div><span>test</span><span class="spa5">18888888888</span></div>
        </li>
        <li>
          <div><span>收货人固定电话</span></div>
          <div><span>收货人邮编</span><span class="spa5">123456</span></div>
        </li>
        <li>
          <div><span>收货人地址</span><span class="spa5">江西省-南昌-西湖区</span></div>
          <div></div>
        </li>
        <li>
          <div><span>客户留言</span></div>
          <div></div>
        </li>
        </ul>
      </div>

    </el-collapse-item>
  </el-collapse>



</template>

<script>
    export default {
        name: "CmsDd4ChildrenInformationBottomNumber",
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
