<template>
    <div>
      <li><router-link :to=data.to >{{data.title}}</router-link></li>
    </div>
</template>

<script>
    export default {
        name: "CmsIndexAsideLis",
        props:["data","ids"]
    }
</script>

<style scoped>

</style>
