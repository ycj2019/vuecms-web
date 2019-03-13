import Vue from 'vue'
import Router from 'vue-router'
import CmsIndex from "../components/pages/CmsIndex";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CmsIndex',
      component: CmsIndex,

    }
  ]
})
