<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bftitle">
                预约
            </div>
        </div>
        <div class="bfframe">
            <div style="text-align:center;color:#00df00;font-size:1.5em;margin-top:20px;">
              <i class="el-icon-check"></i>{{this.$root.bkfinaltext}}
            </div>
            <div style="position:absolute;top:210px;left:0;text-align:center;width:100%;">
              <a href="/home><el-button type="primary">返回首页</el-button></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
    .bftitle {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bfframe {
        position: relative;
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }
</style>