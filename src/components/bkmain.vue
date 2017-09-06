<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bs0title">
                预约
            </div>
        </div>
        <div class="bs0frame">
            <div class="bs0static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">姓名</el-col>
                    <el-col :span="8">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">{{this.$root.bkguest.name}}</el-col>
                    <el-col :span="8">{{this.$root.bkguest.id}}</el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<style>
    .bs0title {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bs0frame {
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bs0static {
        height: 62px;
        padding-top: 12px;
        padding-left: 24px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #555;
        background-color: white;
        box-shadow: 1px 1px 1px #888;
    }

    .bs0input {
        padding-top: 16px;
        padding-left: 0px;
        width: 300px;
    }
</style>