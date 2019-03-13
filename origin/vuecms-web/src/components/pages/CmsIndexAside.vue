<template>
    <div>
      <aside>
        <span class="ind-menu-t">系统主菜单</span>
        <ul class="ind-menu-uls1">
          <li>
            <span class="iconfont icon-iconfontdesktop"></span>
            <span class="ind-menu-span">工作台</span>
          </li>
          <!--<li>-->
            <cms-index-aside-li  v-for="(u,idx) in data" :key="idx" :data="u"></cms-index-aside-li>
          <!--</li>-->
        </ul>
      </aside>
    </div>
</template>

<script>
  import CmsIndexAsideLi from "./CmsIndexAsideLi"

  export default {
        name: "CmsIndexAside",
        components: {CmsIndexAsideLi},
        props:["data"]
  }
</script>

<style scoped>

</style>
