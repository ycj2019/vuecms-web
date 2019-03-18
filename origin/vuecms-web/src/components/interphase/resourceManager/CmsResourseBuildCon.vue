<template>
    <div class="substance">
      <p>文件名：<input type="text"/></p>
      <div class="box">
        <textarea>

      </textarea>
      </div>
      <p class="btn">
        <span>
            添加
        </span>
        <span>
          重置
        </span>
      </p>
    </div>
</template>

<script>
    export default {
        name: "CmsResourseBuildCon"
    }
</script>

<style scoped>

.substance{
  width: 92%;
  margin: 0 auto;
}
.substance p {
  line-height: 80px;
}
.substance p input{
  display: inline-block;
  outline: none;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 30px;
  padding: 0 10px;

}
.substance .box{
  width: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-bottom: 1px dashed #eee;
}
.substance .box textarea{
  width: 100%;
  height: 400px;
  overflow-y: auto;
  resize: none;
  border-radius: 2px;
  outline: none;
  border: 1px solid #eee;

}

  .btn span{
    height:30px;
    padding: 0 25px;
    text-align: center;
    display: inline-block;
    line-height: 30px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin-right: 10px;
    color: #fff;
  }
.btn span:first-child{
  background: #409eff;

  border: 1px solid #409eff;
  margin-left: 150px;
}
.btn span:last-child{
  border: 1px solid #909399;
  background: #909399;
}
</style>
