<template>
  <div class="work-sales">
    <work-sales v-for="(da,idx) in data" :key="idx" :data="da"></work-sales>
  </div>
</template>

<script>
    import WorkSales from "./WorkSales";
    export default {
        name: "WorkSale",
      components: {WorkSales},
      props:["data"]
    }
</script>

<style scoped>

</style>
