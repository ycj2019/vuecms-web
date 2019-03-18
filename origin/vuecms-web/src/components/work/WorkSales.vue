<template>
    <div class="work-sales-con" :style="{'backgroundColor' : (data.color)}">
        <div class="work-sales-hea">
          <span class="iconfont" :class="data.ico"></span>
          <span>{{data.num}}</span>
        </div>
        <div class="work-sales-name">{{data.title}}</div>
    </div>
</template>

<script>
    export default {
        name: "WorkSales",
        props:["data"]
    }
</script>

<style scoped>

</style>
