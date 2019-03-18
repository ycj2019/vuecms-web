<template>
    <div class="s-g-f-t">
                <div class="s-g-f-b">
                    <span class="s-g-f-sone">
                        部署路径
                    </span>
                    <div class="s-g-f-word">
                        <div class="s-g-f-input">
                            <input type="radio" class="s-g-f-r" name="name" value="true"/><span class="s-g-f-r-w">是</span>
                            <input type="radio" class="s-g-f-r" name="name" value="false"/><span class="s-g-f-r-w">否</span>
                        </div>
                        <span class="s-g-f-stwo">如：域名为sfffffffffffffffffffffffffffffffffffff</span>
                    </div>
                </div>
        </div>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsRadio',
        components: {

        }
   }
</script>

<style scoped>
    .s-g-f-b{
        margin-bottom: 22px;
        float: left;
    }
    .s-g-f-r{
        width: 16px;
        height:16px;
        vertical-align: middle;
        outline: none;
        cursor:pointer;
    }
    .s-g-f-r-w{
        font-size: 14px;
        color: #999;
        line-height: 36px;
        padding-left: 10px;
        margin-right: 30px;
        cursor:pointer;
    }
    .s-g-f-input{
        font-size: 14px;
        display: inline-block;
    }
</style>
