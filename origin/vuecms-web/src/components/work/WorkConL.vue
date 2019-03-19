<template>
      <work-deal :data="data"></work-deal>
</template>

<script>
    import WorkDeal from "./WorkDeal";
    export default {
        name: "WorkConL",
        components: {WorkDeal},
        props:["data"]
    }
</script>

<style scoped>

</style>
