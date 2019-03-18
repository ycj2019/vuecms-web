<template>
  <div class="add-thing">
    <button class="add-btn">
      <span>发布正式商品</span>
    </button>
  </div>
</template>

<script>
    export default {
        name: "shop-is-footer"
    }
</script>

<style scoped>
  .add-thing{
    text-align: center;
  }
  .add-btn{
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    background-color: #409eff;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
    border-radius: 4px;
    padding: 5px 15px;
  }
  .add-btn span{
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
  .add-btn:hover{
    opacity: .8;
    border: 1px solid #409eff;
  }
</style>
