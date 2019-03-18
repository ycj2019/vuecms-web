<template>
    <div>
      <header>
          <cms-index-hea></cms-index-hea>
      </header>
      <div class="aside">
        <cms-index-aside v-if="cartInfo" :data="cartInfo.index"></cms-index-aside>
      </div>
      <section>
        <cms-index-sec></cms-index-sec>
        <router-view></router-view>
      </section>
    </div>
</template>

<script>
    import CmsIndexHea from "./CmsIndexHea"
    import CmsIndexAside from "./CmsIndexAside"
    import CmsIndexSec from "./CmsIndexSec"
    import cartApi from "../../Apis/cartApi"

    export default {
        name: "CmsIndex",
        components: {CmsIndexSec, CmsIndexAside, CmsIndexHea},
        data() {
          return {
            cartInfo: {}
          }
        },
        created() {
          this._initData()
        },
        methods: {
         /* _initData() {
            cartApi.getCartsInfo(data => {
              console.log(data)
              this.cartInfo = data;
            })*/
          _initData(){
            this.$axios.get('http://localhost:3000/')
              .then((res) => {
                console.log(res.data)
                this.cartInfo = res.data
              }).catch((err)=>{
              console.log(err)
            })
          },
          /*haha(){
            $.ajax({
              type:'POST',
              url:'http://localhost:3000/first',
              headers:{
                "Conten-Type":"http://localhost:3000/first"
              },
              success:function (backDate) {
                // body...
                console.log(backDate);
              }
            })
          }*/
        },
    }
</script>

<style>
@import "../../../static/run/css/operat.css";
</style>
