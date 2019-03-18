<template>
    <div class="work-foots">
        <work-con-foot-l></work-con-foot-l>
        <work-con-foot-r></work-con-foot-r>
    </div>
</template>

<script>

    import WorkConFootL from "./WorkConFootL";
    import WorkConFootR from "./WorkConFootR";
    export default {
        name: "WorkConFoot",
        components: {WorkConFootR, WorkConFootL}
    }
</script>

<style scoped>
.work-foots{
  /*display: flex;
  justify-content: space-between;
  flex-direction: column;*/
}
</style>
