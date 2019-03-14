import Vue from 'vue'
import Router from 'vue-router'
import CmsIndex from "../components/pages/CmsIndex";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect : "/index"
    },
    {
      path: '/index',
      name: 'CmsIndex',
      component: CmsIndex,
      meta:{
        title:"工作台",
        breadcrumb:[
          {
            name:'工作台',
            path:'/index'
          }
        ]
      },
      children:[]
    }
  ]
})
