<template>
  <div class="vm-dd4-bigBox3">
    <el-select v-model="value" style="float: left;margin-left: 20px;" placeholder="全部">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
    export default {
        name: "CmsDd4Choose",
      data() {
        return {
          options: [{
            value: '选项1',
            label: '全部'
          }, {
            value: '选项2',
            label: '待审核'
          }, {
            value: '选项3',
            label: '已审核'
          }, {
            value: '选项4',
            label: '已退回'
          }, {
            value: '选项5',
            label: '待收货'
          },{
            value: '选项6',
            label: '已收货'
          },{
            value: '选项7',
            label: '已退款'
          },{
            value: '选项8',
            label: '已完成'
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
  .vm-dd4-bigBox3{
    height: 52px;
    border-bottom: 1px solid #d4dde2;
    padding-top: 20px;
  }

  .vm-dd4-bigBox3Left span{
    color:#606266;
    font-size:14px;
    margin-left: 15px;
  }
  .vm-dd4-bigBox3Left img{
    margin-left: 145px;
  }
</style>
