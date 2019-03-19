<template>
    <ul>
        <work-shops-li v-for="(da,idx) in data" :key="idx" :data="da"></work-shops-li>
    </ul>
</template>

<script>
    import WorkShopsLi from "./WorkShopsLi";
    export default {
        name: "WorkConShop",
      components: {WorkShopsLi},
      props:["data"]
    }
</script>

<style scoped>

</style>
