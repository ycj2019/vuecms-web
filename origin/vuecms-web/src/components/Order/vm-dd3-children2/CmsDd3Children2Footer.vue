<template>
  <div class="footer">
    <div class="footer2">
      <div class="footer2Top">

        <span>修改</span>
        <span>重置</span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsDd3Children2Footer"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 120px;
    background: #fff;

  }
  .footer2{
    width: 555px;
    height: 135px;
    margin-left: 180px;
  }
  .footer2Top{
    height: 88px;
    line-height: 88px;
  }
  .footer2Top span{
    margin-left: 14px;
    cursor: pointer;
  }
  .footer2Top span:nth-child(1){
    padding:10px 26px;
    background: #409eff;
    border-radius: 3px;
    color: #fff;
  }
  .footer2Top span:nth-child(2){
    padding:10px 26px;
    color: #fff;
    border-radius: 3px;
    background: #909399;
  }

</style>
