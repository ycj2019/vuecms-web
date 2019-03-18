<template>
  <div class="sectionThree5Top3">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="退货物流信息" name="1">
        <div>
          <ul>
            <li>
              <div><span>物流单号</span></div>
              <div><span>所选物流</span></div>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
    export default {
        name: "CmsDd4ChildrenInformationBottom2",
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
  .sectionThree5Top{

    background: #fff;
  }
  .sectionThree5Top2{
    height: 23px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    cursor: pointer;
    padding-top:20px;
  }
  .sectionThree5Top2 span{
    color:#00aeff;
  }
  .sectionThree5Top2 img{
    margin-left: 5px;
  }
  .sectionThree5Top2 #img02{
    display: none;
  }
  .sectionThree5Top2 #img04{
    display: none;
  }
  .sectionThree5Top2 #img06{
    display: none;
  }

  .sectionThree5Bottom{
    background: #fff;
  }
</style>
