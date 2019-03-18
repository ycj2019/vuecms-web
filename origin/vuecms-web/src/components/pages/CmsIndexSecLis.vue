<template>
    <div>
      <li class="index-sec-li1" v-if="item.title" v-for="item in breadcrumb"> > {{item.title}} </li>
      <li class="index-sec-li1" v-if="items.name" v-for="items in breadcrumb"> > {{items.name}} </li>
    </div>
</template>

<script>
    export default {
        name: "CmsIndexSecLis",
        computed :{
          breadcrumb () {
            return this.$route.meta.breadcrumb
          }
        }
    }
</script>

<style scoped>

</style>
