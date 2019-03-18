<template>
  <div class="work-radio">
    <el-radio-group v-model="radio" size="mini">
      <el-radio-button label="月" ></el-radio-button>
      <el-radio-button label="年"></el-radio-button>
      <el-radio-button label="总"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
    export default {
        name: "WorkConRadio",
        data () {
          return {
            radio: '月',
          };
        }
    }
</script>

<style scoped>

</style>
