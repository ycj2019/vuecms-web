import Vue from 'vue'
import Router from 'vue-router'
import CmsIndex from "@/components/pages/CmsIndex";
import WorkSec from "@/components/Work/WorkSec";

import CmsSetGlo from "@/components/Set/CmsSet/Page/CmsSetGlo"
import CmsSetBas from "@/components/Set/CmsSet/Page/CmsSetBas"
import CmsSetEma from "@/components/Set/CmsSet/Page/CmsSetEma"
import CmsSetLogin from "@/components/Set/CmsSet/Page/CmsSetLogin"
import CmsSetThird from "@/components/Set/CmsSet/Page/CmsSetThird"
import CmsSetPay from "@/components/Set/CmsSet/Page/CmsSetPay"
import CmsSetTen from "@/components/Set/CmsSet/Page/CmsSetTen"
import CmsSetDelMet from "@/components/Set/CmsSet/Page/CmsSetDelMet"
import CmsSetItunes from "@/components/Set/CmsSet/Page/CmsSetItunes"
import CmsSetProtmes from "@/components/Set/CmsSet/Page/CmsSetProtmes"
import CmsSetCallrec from "@/components/Set/CmsSet/Page/CmsSetCallrec"
import CmsSetFtp from "@/components/Set/CmsSet/Page/CmsSetFtp"
import CmsSetApll from "@/components/Set/CmsSet/Page/CmsSetApll"
import CmsSetDisman from "@/components/Set/CmsSet/Page/CmsSetDisman"
import CmsTitleEr from "@/components/Set/common/CmsTitleEr"
import CmsTitle from "@/components/Set/common/CmsTitle"

import ShopManage from "@/components/Shop/ShopManage/ShopManage"
import ShopWarning from "@/components/Shop/ShopWarning/ShopWarning"
import ShopClassify from "@/components/Shop/ShopClassify/ShopClassify"
import ShopTrademark from "@/components/Shop/ShopTrademark/ShopTrademark"
import ShopSpecification from "@/components/Shop/ShopSpecification/ShopSpecification"
import ShopType from "@/components/Shop/ShopType/ShopType"
import ShopConsult from "@/components/Shop/ShopConsult/ShopConsult"
import ShopEvaluate from "@/components/Shop/ShopEvaluate/ShopEvaluate"
import ShopSell from "@/components/Shop/ShopSell/ShopSell"
import ShopIssue from "@/components/Shop/ShopIssue/ShopIssue"
import ShopFields from "@/components/Shop/ShopFields/ShopFields"
import ShopReply from "@/components/Shop/ShopReply/ShopReply"
import ShopAddType from "@/components/Shop/ShopAddType/ShopAddType"
import ShopAmend from "@/components/Shop/ShopAmend/ShopAmend"
import AddSpecification from "@/components/Shop/AddSpecification/AddSpecification"
import ShopAddBrand from "@/components/Shop/ShopAddBrand/ShopAddBrand"


import CmsDd2 from "@/components/Order/pages/CmsDd2"

import RunSection from "@/components/Run/Section/RunSection"
import AddThing from "@/components/Run/Section/AddThing"
import Alter from "@/components/Run/Section/Alter"
import RoleSection from "@/components/Run/Role/RoleSection"
import PositionSection from "@/components/Run/GgPosition/PositionSection"
import ManageSection from "@/components/Run/GgManage/ManageSection"
import CouPonSection from "@/components/Run/CouPon/CouPonSection"
import OnService from "@/components/Run/OnService/OnService"
import HomePoster from "@/components/Run/HomePoster/HomePoster"
import XtCzLog from "@/components/Run/XtCzLog/XtCzLog"

import UserManage from "@/components/User/UserManage/UserManage"
import UserClass from "@/components/User/UserClass/UserClass"
import DdList from "@/components/User/DdList/DdList"
import DdTypeList from "@/components/User/DdTypeList/DdTypeList"
import Mail from "@/components/User/Mail/Mail"

import CmsTemplateManager from "@/components/interphase/templateManager/CmsTemplateManager"
import CmsColumnAddPage from "@/components/interphase/column/CmsColumnAddPage"
import CmsArticlePage from "@/components/interphase/article/CmsArticlePage"
import CmsColumnPage from "@/components/interphase/column/CmsColumnPage"
import CmsResourceManagerPage from "@/components/interphase/resourceManager/CmsResourceManagerPage"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect : "/index/work"
    },
    {
      path: '/index',
      name: 'CmsIndex',
      component: CmsIndex,
      children:[
        {
          path: 'work',
          name: 'WorkSec',
          component: WorkSec,
          meta:{
            breadcrumb:[
              {
                title:"工作台",
                path:'/index/work'
              }
            ]
          },
        }
      ]
    },
    {
        path: '/shop',
        component: CmsIndex,
        children:[
          {
            path: 'shopmanage',
            name: 'ShopManage',
            component: ShopManage,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'商品管理',
                  path:'/shop/shopmanage'
                }
              ]
            },
          },
          {
            path: 'shopwarning',
            name: 'ShopWarning',
            component: ShopWarning,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'库存预警',
                  path:'/shop/shopwarning'
                }
              ]
            },
          },
          {
            path: 'shopclassify',
            name: 'ShopClassify',
            component: ShopClassify,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'分类管理',
                  path:'/shop/shopclassify'
                }
              ]
            },
          },
          {
            path: 'shoptrademark',
            name: 'ShopTrademark',
            component: ShopTrademark,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'品牌管理',
                  path:'/shop/shoptrademark'
                }
              ]
            },
          },
          {
            path: 'shopspecification',
            name: 'ShopSpecification',
            component: ShopSpecification,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'规格管理',
                  path:'/shop/shopspecification'
                }
              ]
            },
          },
          {
            path: 'shoptype',
            name: 'ShopType',
            component: ShopType,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'类型管理',
                  path:'/shop/shoptype'
                }
              ]
            },
          },
          {
            path: 'shopcons',
            name: 'ShopConsult',
            component: ShopConsult,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'商品咨询',
                  path:'/shop/shopcons'
                }
              ]
            },
          },{
            path: 'shopeva',
            name: 'ShopEvaluate',
            component: ShopEvaluate,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'商品评价',
                  path:'/shop/shopeva'
                }
              ]
            },
          },{
            path: 'shopiss',
            name: 'ShopIssue',
            component: ShopIssue,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'发布商品',
                  path:'/shop/shopiss'
                }
              ]
            },
          },{
            path: 'shopsell',
            name: 'ShopSell',
            component: ShopSell,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'热销商品',
                  path:'/shop/shopsell'
                }
              ]
            }
          },
          {
            path: 'shopfields',
            name: 'ShopFields',
            component: ShopFields,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'商品字段',
                  path:'/shop/shopfields'
                }
              ]
            }
          },
          {
            path: 'shopreply',
            name: 'ShopReply',
            component: ShopReply,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'回复',
                  path:'/shop/shopreply'
                }
              ]
            }
          },
          {
            path: 'shopaddtype',
            name: 'ShopAddType',
            component: ShopAddType,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'添加类型',
                  path:'/shop/shopaddtype'
                }
              ]
            }
          },
          {
            path: 'shopaddbrand',
            name: 'ShopAddBrand',
            component: ShopAddBrand,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'添加品牌',
                  path:'/shop/shopaddbrand'
                }
              ]
            }
          },
          {
            path: 'shopamend',
            name: 'ShopAmend',
            component: ShopAmend,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'修改商品',
                  path:'/shop/shopamend'
                }
              ]
            }
          },
          {
            path: 'addspecification',
            name: 'AddSpecification',
            component: AddSpecification,
            meta:{
              breadcrumb:[
                {
                  title:"商品",
                  name:'添加规格',
                  path:'/shop/addspecification'
                }
              ]
            }
          }
        ]
    },
    {
      path: '/order',
      component: CmsIndex,
      children:[
        {
          path:'ddtwo',
          name:'CmsDd2',
          component:CmsDd2,
          meta:{
            breadcrumb:[
              {
                title:"订单",
                name:'打印快递单',
                path:'/order/ddtwo'
              }
            ]
          }
        },
        {
          path:'ddtwo',
          name:'CmsDd2',
          component:CmsDd2,
          meta:{
            breadcrumb:[
              {
                title:"订单",
                name:'打印快递单',
                path:'/order/ddtwo'
              }
            ]
          }
        }
      ]
    },
    {
      path: '/inter',
      component: CmsIndex,
      children:[
        {
          path:'tem',
          name:'CmsTemplateManager',
          component:CmsTemplateManager,
          meta:{
            breadcrumb:[
              {
                title:"界面",
                name:'模块管理',
                path:'/inter/tem'
              }
            ]
          }
        },
        {
          path:'res',
          name:'CmsResourceManagerPage',
          component:CmsResourceManagerPage,
          meta:{
            breadcrumb:[
              {
                title:"界面",
                name:'资源管理',
                path:'/inter/res'
              }
            ]
          }
        },
        {
          path:'col',
          name:'CmsColumnPage',
          component:CmsColumnPage,
          meta:{
            breadcrumb:[
              {
                title:"界面",
                name:'栏目',
                path:'/inter/col'
              }
            ]
          }
        },
        {
          path:'art',
          name:'CmsArticlePage',
          component:CmsArticlePage,
          meta:{
            breadcrumb:[
              {
                title:"界面",
                name:'文章',
                path:'/inter/art'
              }
            ]
          }
        },
        {
          path:'add',
          name:'CmsColumnAddPage',
          component:CmsColumnAddPage,
          meta:{
            breadcrumb:[
              {
                title:"界面",
                name:'添加栏目',
                path:'/inter/add'
              }
            ]
          }
        }
      ]
    },
    {
      path: '/run',
      component: CmsIndex,
      children:[
        {
          path:"admin",
          component:RunSection,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'管理员列表',
                path:'/run/admin'
              }
            ]
          },
        },
        {
          path:"addThing",
          component:AddThing,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'管理员添加',
                path:'/run/addThing'
              }
            ]
          }
        },
        {
          path:"alter",
          component:Alter,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'管理员修改',
                path:'/run/alter'
              }
            ]
          }
        },
        {
          path:"role",
          component:RoleSection,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'角色列表',
                path:'/run/role'
              }
            ]
          }
        },
        {
          path:"ggposition",
          component:PositionSection,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'广告版位列表',
                path:'/run/ggposition'
              }
            ]
          }
        },
        {
          path:"ggmanage",
          component:ManageSection,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'广告列表',
                path:'/run/ggmanage'
              }
            ]
          }
        },
        {
          path:"coupon",
          component:CouPonSection,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'优惠卷列表',
                path:'/run/coupon'
              }
            ]
          }
        },
        {
          path:"onservice",
          component:OnService,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'在线客服列表',
                path:'/run/onservice'
              }
            ]
          }
        },
        {
          path:"homeposter",
          component:HomePoster,
          meta:{
            breadcrumb:[
              {
                title:"运营",
                name:'首页海报',
                path:'/run/homeposter'
              }
            ]
          }
        },
        {
          path:"xtczlog",
          component:XtCzLog,
          meta:{
            title:"运营",
            breadcrumb:[
              {
                name:'操作日志列表',
                path:'/run/xtczlog'
              }
            ]
          }
        }
      ]
    },
    {
      path:'/user',
      component:CmsIndex,
      children:[
        {
          path:'man',
          name:'UserManage',
          component:UserManage,
          meta:{
            breadcrumb:[
              {
                title:'用户',
                name:'用户管理',
                path:'/user/man'
              }
            ]
          }
        },
        {
          path:'class',
          name:'UserClass',
          component:UserClass,
          meta:{
            breadcrumb:[
              {
                title:'用户',
                name:'用户等级',
                path:'/user/class'
              }
            ]
          }
        },
        {
          path:'list',
          name:'DdList',
          component:DdList,
          meta:{
            breadcrumb:[
              {
                title:'用户',
                name:'数据字典',
                path:'/user/list'
              }
            ]
          }
        },
        {
          path:'type',
          name:'DdTypeList',
          component:DdTypeList,
          meta:{
            breadcrumb:[
              {
                title:'用户',
                name:'字典类型',
                path:'/user/type'
              }
            ]
          }
        },
        {
          path:'mail',
          name:'Mail',
          component:Mail,
          meta:{
            breadcrumb:[
              {
                title:'用户',
                name:'站内信',
                path:'/user/mail'
              }
            ]
          }
        }
      ]
    },
    {
      path: '/set',
      component: CmsIndex,
      children:[
        {
          path: 'setglo',
          name: 'CmsSetGlo',
          component: CmsSetGlo,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'全局设置',
                path:'/set/setglo'
              }
            ]
          },
        },
        {
          path: 'setbas',
          name: 'CmsSetBas',
          component: CmsSetBas,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'基本设置',
                path:'/set/setbas'
              }
            ]
          },
        },
        {
          path: 'setema',
          name: 'CmsSetEma',
          component: CmsSetEma,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'邮箱设置',
                path:'/set/setema'
              }
            ]
          },
        },
        {
          path: 'setlogin',
          name: 'CmsSetLogin',
          component: CmsSetLogin,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'单点登录设置',
                path:'/set/setlogin'
              }
            ]
          },
        },
        {
          path: 'setthird',
          name: 'CmsSetThird',
          component: CmsSetThird,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'第三方设置',
                path:'/set/setthird'
              }
            ]
          },
        },
        {
          path: 'setpay',
          name: 'CmsSetPay',
          component: CmsSetPay,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'支付插件',
                path:'/set/setpay'
              }
            ]
          },
        },
        {
          path: 'setten',
          name: 'CmsSetTen',
          component: CmsSetTen,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'公众号设置',
                path:'/set/setten'
              }
            ]
          },
        },
        {
          path: 'delmet',
          name: 'CmsSetDelMet',
          component: CmsSetDelMet,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'配送方式',
                path:'/set/delmet'
              }
            ]
          },
        },
        {
          path: 'itunes',
          name: 'CmsSetItunes',
          component: CmsSetItunes,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'API接口账户管理',
                path:'/set/itunes'
              }
            ]
          },
        },
        {
          path: 'protmes',
          name: 'CmsSetProtmes',
          component: CmsSetProtmes,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'api接口信息',
                path:'/set/protmes'
              }
            ]
          },
        },
        {
          path: 'callrec',
          name: 'CmsSetCallrec',
          component: CmsSetCallrec,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'api接口调用记录',
                path:'/set/callrec'
              }
            ]
          },
        },
        {
          path: 'ftpman',
          name: 'CmsSetFtp',
          component: CmsSetFtp,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'FTP管理',
                path:'/set/ftpman'
              }
            ]
          },
        },
        {
          path: 'apll',
          name: 'CmsSetApll',
          component: CmsSetApll,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'物流公司',
                path:'/set/apll'
              }
            ]
          },
        },
        {
          path: 'disman',
          name: 'CmsSetDisman',
          component: CmsSetDisman,
          meta:{
            breadcrumb:[
              {
                title:"设置",
                name:'区域管理',
                path:'/set/disman'
              }
            ]
          },
        }
      ]
    }
   ]
})
