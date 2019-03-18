<template>
  <div class="vm-dd2-bigBox3">
    <el-select v-model="value" style="float: left;margin-left: 20px;" placeholder="选择快递单模板">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value" style="float:right;margin-right: 20px" placeholder="全部订单">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
    export default {
        name: "CmsDd2Choose",
      data() {
        return {
          options: [{
            value: '选项1',
            label: '选择快递单模板'
          }, {
            value: '选项2',
            label: '测试'
          }, {
            value: '选项3',
            label: '圆通速递'
          }, {
            value: '选项4',
            label: '顺丰速递'
          }, {
            value: '选项5',
            label: '测试物流'
          }],
          options2: [{
            value: '选项1',
            label: '全部订单'
          }, {
            value: '选项2',
            label: '已打印'
          }, {
            value: '选项3',
            label: '未打印'
          }],
          value: ''
        }
      }
    }
</script>

<style scoped>
  .el-select-dropdown__item:hover{
    color:skyblue;
  }
  .vm-dd2-bigBox3{
    height: 52px;
    border-bottom: 1px solid #d4dde2;
    padding-top: 20px;

  }

  .vm-dd2-bigBox3Left span{
    color:#606266;
    font-size:14px;
    margin-left: 15px;
  }
  .vm-dd2-bigBox3Left img{
    margin-left: 80px;
  }


</style>
