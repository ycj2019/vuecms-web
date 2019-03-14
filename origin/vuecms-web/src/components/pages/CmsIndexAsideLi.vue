<template>
    <div>
      <li>
      <div class="ind-menu-lis" @click="big($event)">
        <span class="iconfont" :class='data.imgs' ></span>
        <span class="ind-menu-span">{{data.title}}</span>
        <span class="iconfont icon-el-icon-arrow-down icojt"></span>
      </div>
      <ul class="ind-menu-uls2">
        <cms-index-aside-lis v-for="(d,ids) in data.children" :key="ids" :data="d"></cms-index-aside-lis>
      </ul>
      </li>
    </div>
</template>

<script>
  import CmsIndexAsideLis from "./CmsIndexAsideLis"
    export default {
        name: "CmsIndexAsideLi",
        components: {CmsIndexAsideLis},
        mounted() {
          $(".ind-menu-lis").click(function(){

          });
        },
      methods:{
          big(ev){
            /*console.log(this);
            $(this).slideToggle();
            $(this).siblings().children("ul").slideUp();*/
            $(ev.target).parent().next().slideToggle();
          }
          /*big(){
            // document.querySelector(".ind-menu-lis").nextSibling.style.display="none"

          }*/
      },
        props:["data","idx"]
    }
</script>

<style scoped>

</style>
