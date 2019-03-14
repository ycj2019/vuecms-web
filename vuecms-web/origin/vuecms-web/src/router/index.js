import Vue from 'vue'
import Router from 'vue-router'
import CmsIndex from "../components/pages/CmsIndex";
import RunSection from "../components/Run/RunSection"
import AddThing from "../components/Run/Section/AddThing"
import Alter from "../components/Run/Section/Alter"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'CmsIndex',
      component: CmsIndex,
      children:[
        {
          path:"runSection",
          component:RunSection,
        },
        {
          path:"addThing",
          component:AddThing
        },
        {
          path:"alter",
          component:Alter
        }
      ]
    }
  ]
})
