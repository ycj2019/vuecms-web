<template>
    <div>
      <header>
          <cms-index-hea></cms-index-hea>
      </header>
      <div class="xxx">
      <div class="aside">
        <cms-index-aside v-if="cartInfo" :data="cartInfo.index"></cms-index-aside>
      </div>
      </div>
      <section>
        <cms-index-sec></cms-index-sec>
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
          _initData() {
            cartApi.getCartsInfo(data => {
              console.log(data)
              this.cartInfo = data;
            })
          }
        }
    }
</script>

<style scoped>

</style>
