<template>
    <div>
      <ul class="index-sec">
        <li>
          <span class="iconfont icon-home-copy" style="color: #188ae2"></span>
        </li>
        <cms-index-sec-lis></cms-index-sec-lis>
      </ul>
    </div>
</template>

<script>
    import CmsIndexSecLis from "./CmsIndexSecLis"
    export default {
        name: "CmsIndexSec",
      components: {CmsIndexSecLis}
    }
</script>

<style scoped>

</style>
