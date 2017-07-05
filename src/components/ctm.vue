<template>
    <div>
        <div style="width:100%;height:200px;overflow:hidden;">
            <img src="../assets/ctm.jpg" style="width:100%;display:block;">
            <div class="ctmtitle">
                会员定制
            </div>
        </div>
        <div style="width:100%;margin: 16px;text-align: center;">
            <el-steps :space="200" :align-center="true" :active="1">
                <el-step title="填写调查问卷"></el-step>
                <el-step title="定制项目"></el-step>
                <el-step title="完成定制"></el-step>
            </el-steps>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    .ctmtitle {
        position: relative;
        height: 50px;
        top: -80px;
        background-color: rgba(100, 149, 237, 0.7);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
</style>