<template>
  <div class="vm-dd-bigBox3">
    <div class="vm-dd-bigBox3_1">
      <div class="vm-dd-bigBox3_1_top">
        <el-select v-model="value" placeholder="订单状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="支付状态">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="配送状态">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="支付方式">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="配送方式">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="vm-dd-bigBox3_1_bottom">
        <span>订单编号</span>:
        <el-input v-model="input" style="margin-left: 6px"></el-input>
        <span class="spa">下单时间</span>:
        <div class="block">

          <el-date-picker
            v-model="value1"
            type="datetime"
            >
          </el-date-picker>
        </div>
        <img src="../../../../static/dd-1/img/5.png" alt="">
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="datetime"
            >
          </el-date-picker>
        </div>
        <span class="spa2">查询</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsDd1Choose",
        data() {
        return {
          options: [{
            value: '选项1',
            label: '订单状态'
          }, {
            value: '选项2',
            label: '未确认'
          }, {
            value: '选项3',
            label: '已确认'
          }, {
            value: '选项4',
            label: '已取消'
          }, {
            value: '选项5',
            label: '已完成'
          }],
          options2: [{
            value: '选项1',
            label: '支付状态'
          }, {
            value: '选项2',
            label: '未支付'
          }, {
            value: '选项3',
            label: '已支付'
          }, {
            value: '选项4',
            label: '已退款'
          }],
          options3: [{
            value: '选项1',
            label: '配送状态'
          }, {
            value: '选项2',
            label: '未发货'
          }, {
            value: '选项3',
            label: '已发货'
          }, {
            value: '选项4',
            label: '已退货'
          }],
          options4: [{
            value: '选项1',
            label: '支付方式'
          }, {
            value: '选项2',
            label: '网上支付'
          }, {
            value: '选项3',
            label: '银行汇款'
          }, {
            value: '选项4',
            label: '货到付款'
          }],
          options5: [{
            value: '选项1',
            label: '配送方式'
          }, {
            value: '选项2',
            label: '普通快递'
          }, {
            value: '选项3',
            label: '顺丰快递'
          }],
          value: '',
          pickerOptions1: {
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          value3: ''
        }
      }
    }
</script>

<style scoped>
  .el-input{
    width: 128px;
  }
  .el-select{
    width: 126px;
    height: 30px;
    margin-top: 20px;
    margin-left: 6px;
  }
 .el-date-editor.el-input, .el-date-editor.el-input__inner{
   margin-left: 10px;
   width: 220px;
 }
  .vm-dd-bigBox3{
    height: 120px;
    border-bottom: 1px solid #d4dde2;
  }
  .vm-dd-bigBox3_1{
    width:885px;
    height: 120px;
    margin-left:24px;

  }
  .vm-dd-bigBox3_1_top{
    height: 68px;

  }

  .vm-dd-bigBox3_1_topOne span{
    color:#606266 ;
    font-size: 14px;
  }
  .vm-dd-bigBox3_1_topOne img{
    margin-left: 30px;
    vertical-align: middle;
  }
  .vm-dd-bigBox3_1_bottom{
    height: 52px;
    display: flex;
    align-items: center;
  }
  .vm-dd-bigBox3_1_bottom span{
    color:#5a5e66;
    font-size:14px;
  }
  #inp{
    width: 126px;
    height: 30px;
    border-radius: 4px;
  }
  .vm-dd-bigBox3_1_bottom .inp{
    width: 218px;
    height: 30px;
    border-radius: 4px;
  }
  .vm-dd-bigBox3_1_bottom input{
    margin-left: 10px;
  }
  .vm-dd-bigBox3_1_bottom .spa{
    margin-left: 30px;
  }
  .vm-dd-bigBox3_1_bottom .spa2{
    margin-left: 20px;
    padding:7px 25px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
  }
  .vm-dd-bigBox3_1_bottom img{
    margin-left: 10px;
  }
</style>
