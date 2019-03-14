<template>
    <div>
      <li><router-link to="runSection">{{data}}</router-link></li>
    </div>
</template>

<script>
    export default {
        name: "CmsIndexAsideLis",
        props:["data","ids"]
    }
</script>

<style>

</style>
