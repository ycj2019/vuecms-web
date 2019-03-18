<template>
  <div data-v-179defde="" data-v-22a28710="" class="el-col-lg-24"><div data-v-179defde="" class="el-form-item">
    <label data-v-179defde="" class="el-form-item__label">设置</label>
    <div data-v-179defde="" class="el-form-item__content">
  <el-checkbox-group
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>

    </div>
  </div>
  </div>
</template>
<script>
  const cityOptions = ['推荐', '特价', '热卖', '新品'];
  export default {
    data() {
      return {
        checkedCities1: ['推荐', '特价', '热卖'],
        cities: cityOptions
      };
    }
  };
</script>
<style scoped>

  .form-group .el-col-lg-24 {
    margin-top: 22px;
    border-bottom: 1px dashed #eee;
  }
  .el-col-lg-24 {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-form-item__label {
    width: 160px;
    text-align: right;
    float: left;
    padding-right: 30px;
    line-height: 36px;
    font-size: 14px;
    color: #606266;
    box-sizing: border-box;
  }
  .el-form-item__content {
    line-height:36px;
    position: relative;
    font-size: 14px;
    margin-left: 160px;
  }
  </style>
