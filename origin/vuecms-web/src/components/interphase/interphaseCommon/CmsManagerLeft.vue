<template>
  <div class="box">
    <cms-manager-left-top></cms-manager-left-top>
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
  </div>


</template>

<script>
  import CmsManagerLeftTop from "./CmsManagerLeftTop"
    export default {
        name: "CmsManagerLeft",
        components:{
          CmsManagerLeftTop
        },
        data() {
          return {
            data: [
              {
                label:'模板根目录',
                children:[
                  {
                    label: 'mobile',
                    children: [
                      {
                        label: 'article',
                        children: [{
                          label: '内容.html'
                        },
                          {
                            label: '帮助中心内容.html'
                          },
                          {
                            label: '新闻中心内容.html'
                          },
                          {
                            label: '网站公告内容.html'
                          }
                        ]
                      },
                      {
                        label: 'category',
                        children: [
                          {
                            label: 'tree.html'
                          },
                          {
                            label: '全部商品分类.html'
                          },
                          {
                            label: '分类.html'
                          },
                          {
                            label: '分类左侧.html'
                          },
                          {
                            label: '分类查询页.html'
                          },
                        ]
                      },
                      {
                        label: 'channel',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'common',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'coupon',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'gift',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'include',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'index',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'member',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'message',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'product',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'shop',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'static',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'tag',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      }
                    ]
                  },
                  {
                    label: 'tpl',
                    children: [
                      {
                        label: 'article',
                        children: [{
                          label: '内容.html'
                        },
                          {
                            label: '帮助中心内容.html'
                          },
                          {
                            label: '新闻中心内容.html'
                          },
                          {
                            label: '网站公告内容.html'
                          }
                        ]
                      },
                      {
                        label: 'category',
                        children: [
                          {
                            label: 'tree.html'
                          },
                          {
                            label: '全部商品分类.html'
                          },
                          {
                            label: '分类.html'
                          },
                          {
                            label: '分类左侧.html'
                          },
                          {
                            label: '分类查询页.html'
                          },
                        ]
                      },
                      {
                        label: 'channel',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'common',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'coupon',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'gift',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'include',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'index',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'member',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'message',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'product',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'shop',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'static',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      },
                      {
                        label: 'tag',
                        children: [
                          {
                            label: '单页.html'
                          },
                          {
                            label: '帮助中心栏目.html'
                          },
                          {
                            label: '新闻中心栏目.html'
                          },
                          {
                            label: '栏目.html'
                          },
                          {
                            label: '网站公告栏目.html'
                          },
                        ]
                      }
                    ]
                  },
                ]
              },

            ],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods:{
          handleNodeClick(data) {
            console.log(data);
          }
        }
    }

</script>

<style scoped>
  .box{
    width: 25%;
    /*background: #63a35c;*/
    /*margin-left: 10px;*/
    height: 100%;
    min-height: 700px;
    max-height: 700px;
  }

 </style>
