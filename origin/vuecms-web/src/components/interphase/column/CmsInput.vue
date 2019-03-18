<template>
  <div class="content">
    <div class="content_bar">
      <div class="content_bar_left">
          <span>
              <em>*</em>
              上级分类
          </span>
        <span>
                顶级分类
          </span>
      </div>
      <div class="content_bar_left">
          <span>
              <em>*</em>
              上级分类
          </span>
        <span>
                顶级分类
          </span>
      </div>
    </div>
    <div class="content_bar">
      <div class="content_bar_left">
          <span>
              <em>*</em>
              栏目名称
          </span>
        <span class="inputs">
            <input type="text" >
            <span>请输入分类名</span>
          </span>
      </div>
      <div class="content_bar_left">
          <span>
              <em>*</em>
              访问路径
          </span>
        <span class="inputs">
            <input type="text">
            <span>请输入路径</span>
          </span>
      </div>
    </div>
    <div class="content_bar">
      <div class="content_bar_left">
          <span>
              <em>*</em>
              栏目名称
          </span>
        <span class="inputs">
            <el-select v-model="value" placeholder="请选择" style="width: 300px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
          </span>
      </div>
      <div class="content_bar_left dx">
          <span>
              是否显示
          </span>
        <span class="selected">
            <input type="radio" name="is"/>是
            <input type="radio" name="is"/>否
          </span>
      </div>
    </div>
    <div class="content_bar">
      <div class="content_bar_left dx">
          <span>
              是否新窗口显示
          </span>
          <span class="selected">
            <input type="radio" name="is"/>是
            <input type="radio" name="is"/>否
          </span>
      </div>
    </div>
    <div class="content_bar">
      <div class="content_bar_left">
          <span>
              <em>*</em>
              排列顺序
          </span>
        <span class="inputs">
            <input type="text">
            <span>请输入排列顺序</span>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CmsInput",
        methods:{
        },
        data() {
          return {
          options: [{
            value: '选项1',
            label: '顶级分类'
          }, {
            value: '选项2',
            label: '新手入门'
          }, {
            value: '选项3',
            label: '网站公告'
          }, {
            value: '选项4',
            label: '新闻中心'
          }, {
            value: '选项5',
            label: '热门促销'
          }, {
            value: '选项6',
            label: '配送范围及时间'
          }, {
            value: '选项7',
            label: '支付方式'
          }, {
            value: '选项8',
            label: '底栏'
          }
          ],
          value: ''
        }
      }
    }
</script>

<style scoped>
  .content {
    width: 100%;
    /*height: 700px;*/
    box-sizing: border-box;
    padding: 0 20px;
  }

  .content_bar {
    height: 79px;
    border-bottom: 1px dashed #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content_bar div{
    flex: 1;
  }
  .content_bar div>span:first-child{
    margin-left: 50px;
  }
  .content_bar div>span:last-child{
    margin-left: 30px;
  }
  em{
    color: #ff0000;
  }
  .inputs{
    /*display: flex;*/
    position: relative;
  }
  .inputs input{
    display: inline-block;
    height: 34px;
    width: 298px;
    border: 1px solid #d4dde2;
    border-radius: 5px;
    outline: none;
  }
  .inputs input:hover{
    border: 1px solid #beb7b7;
    transition: all 1s;
  }
  .inputs span{
    position: absolute;
    left: 0;
    top: 32px;
    font-size: 12px;
    color: red;
    display: none;
  }
  .content_bar_left .selected{
    display: inline-block;
    margin-left: 0;
    vertical-align: middle;

  }
  .content_bar_left .selected input{
    display: inline-block;
    margin-right: 10px;
    height: 16px;
    width: 16px;
  }
  .content_bar_left .selected input:last-child{
    margin-left: 15px;
  }
  .content .dx span:first-child{
    margin-left: 62px;
  }
</style>
