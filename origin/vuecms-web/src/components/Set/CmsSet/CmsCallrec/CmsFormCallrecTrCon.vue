<template>
    <tr class="s-f-t-table-tr bb">
        <td class="s-f-t-table-a"><input type="checkbox"></td>
        <td class="s-f-t-table-a">1</td>
        <td class="aa"></td>
        <td class="aa">222222222222222222</td>
        <td class="aa">10.35.170.7</td>
        <td class="aa">32A5A40F4B1A7240237FF97462DDB909</td>
        <td class="aa">2017-11-27 18:39:50</td>
        <td class="s-f-t-table-d">
            <a href="##" class="s-f-t-edits"><span class="iconfont icon-del"></span></a>
        </td>
    </tr>
</template>

<script>

    export default {
        data () {
            return {

            }
        },
        name:'CmsFormCallrecTrCon',
        components: {

        }
   }
</script>

<style scoped>
    .iconfont{
        font-size: 26px;
    }
    .bb:hover{
        background: #eee;
        transition: .5s;
    }
    .s-f-t-table-tr td{
        font-weight: 500;
        height: 48px;
        vertical-align: middle;
        text-align: center;
        border-bottom: 1px solid #d4dde2;
        word-wrap: break-word;
        font-size: 14px;
    }
    .s-f-t-edit{
        background: #17d57e;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 3px;
        width: 32px;
        height: 32px;
        line-height: 32px;
        margin: 0 1px;
        display: inline-block;
        cursor: pointer;
        transition: .3s;
        text-align: center;
    }
    .s-f-t-edits{
        background: #ff8b53;;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 3px;
        width: 32px;
        height: 32px;
        line-height: 32px;
        margin: 0 1px;
        display: inline-block;
        cursor: pointer;
        transition: .3s;
        text-align: center;
    }
    .s-f-t-edit:hover{
        background: #29f7ab;
    }
    .s-f-t-edits:hover{
        opacity: .5;
    }
    .s-f-t-input{
        width: 80px;
        display: inline-block;
    }
    .s-f-t-input input{
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        height: 32px;
        border: 1px solid #d8dce5;
        padding: 0 15px;
        border-radius: 4px;
        outline: none;
    } 
    .s-f-t-table-a{
        width: 68px;
    }
    .s-f-t-table-d{
        width: 200px;
    }
    .aa{
        max-width: 75px;
    }
</style>
