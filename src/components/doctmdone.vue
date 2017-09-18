<template>
    <div>
        <div class="ctmdoneframe">
            <div class="ctmdonehead">
                <div style="margin-left:32px;font-size:20px;">
                    定制完成
                </div>
            </div>
            <div style="text-align:center;color:#00df00;font-size:1.5em;margin-top:50px;">
                <i class="el-icon-check"></i>{{this.$root.ctmdonetext}}
            </div>
            <div style="position:absolute;top:200px;left:0;text-align:center;width:100%;">
                <a href="/home"><el-button type="primary">返回首页</el-button></a>
            </div>
        </div>
    </div>
</template>

<style>
    .ctmdoneframe {
        position: relative;
        height: 280px;
        margin:0 auto;
        border-radius: 4px;
        border-left: 1px solid #ddd;
        box-shadow: 3px 3px 3px #aaa;
        background-color: white;
    }
    .ctmdonehead {
        width:100%;
        height:48px;
        line-height:48px;
        padding:0;
        color:white;
        background-color:#80A0D0;
        border-radius:4px 4px 0 0;
    }
</style>