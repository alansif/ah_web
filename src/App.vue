<template>
    <div id="app" style="width:1100px;margin:0 auto;">
        <header>
            <img src="./assets/logo1.png" style="width:200px;"/>
            <el-menu mode="horizontal">
                <el-menu-item index="1"><a href="/home">首页</a></el-menu-item>
                <el-menu-item index="2"><a href="/home#about">关于我们</a></el-menu-item>
                <el-menu-item index="3"><a href="/home#deal">业务办理</a></el-menu-item>
                <el-menu-item index="4"><a href="/home#contact">联系我们</a></el-menu-item>
            </el-menu>
        </header>

        <router-view></router-view>

        <guestbook></guestbook>

        <div style="text-align:center;color:#888;font-size: 14px;">
            <p>
                <span>
                    <a class="appaddr" target="_blank" href="http://www.miitbeian.gov.cn">
                        京ICP备18015234号
                    </a>
                </span>
                <span style="margin-left: 48px">
                    <a class="appaddr" target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003222">
                        <img src="./assets/beian.png" width="16" height="16" style="vertical-align: text-bottom;margin-right: 2px"/>
                        京公网安备 11010102003222号
                    </a>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import guestbook from './components/guestbook.vue'
    export default {
        components: {
            guestbook
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
        position: relative;
        -webkit-text-size-adjust: 100%;
    }

    .el-menu {
        background: #fff;
        top: 5px;
        right: 0;
        z-index: 3;
        float: right;
    }

    header {
        background: #fff;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
    }

    section {
        border-bottom: 1px solid #999;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .circle3 {
        border-radius: 50%;
        border:5px solid #f00;
        width: 60px;
        height: 60px;
    }

    .appaddr:link {color:#999;}
    .appaddr:visited {color:#999;}
    .appaddr:hover {color:#999;cursor:pointer;}
    .appaddr:active {color:#999;}
</style>
