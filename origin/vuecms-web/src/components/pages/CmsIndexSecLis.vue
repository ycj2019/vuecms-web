<template>
    <div>
      <li class="index-sec-li1" v-for="item in breadcrumb"> > {{item.name}} </li>
    </div>
</template>

<script>
    export default {
        name: "CmsIndexSecLis",
        computed :{
          breadcrumb () {
            console.log(this.$route)
            return this.$route.meta.breadcrumb
          }
        }
    }
</script>

<style scoped>

</style>
