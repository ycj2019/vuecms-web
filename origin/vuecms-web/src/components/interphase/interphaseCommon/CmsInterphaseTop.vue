<template>
    <div class="title"><slot></slot></div>
</template>

<script>
    export default {
        name: "CmsInterphaseTop"
    }
</script>

<style scoped>
.title{
  width: 100%;
  background: #eceff1;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 50px;
  border-bottom: 1px solid #d4dde2;
  color: #565656;
  font-size: 14px;
}
</style>
