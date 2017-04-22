<template>
    <div id="app" style="width:1100px;margin:0 auto;">
        <header>
            <img src="./assets/logo1.png" style="width:200px;"/>
            <el-menu mode="horizontal" default-active="1">
                <el-menu-item index="1"><a href="#about">关于我们</a></el-menu-item>
                <el-menu-item index="2"><a href="#deal">业务办理</a></el-menu-item>
                <el-menu-item index="3"><a href="#knowledge">体检知识</a></el-menu-item>
                <el-menu-item index="4"><a href="#contact">联系我们</a></el-menu-item>
            </el-menu>
        </header>

        <home></home>
        <about></about>
        <deal></deal>
        <products></products>
        <why></why>
        <knowledge></knowledge>
        <process></process>
        <contact></contact>

        <div style="text-align:center;color:#888;">
            <p>京ICP备05027604号</p>
        </div>
    </div>
</template>

<script>
    import home from './components/home.vue';
    import about from './components/about.vue';
    import deal from './components/deal.vue';
    import products from './components/products.vue';
    import why from './components/why.vue';
    import knowledge from './components/knowledge.vue';
    import process from './components/process.vue';
    import contact from './components/contact.vue';

    export default {
        data () {
            return {
            }
        },

        components: {
            home,
            about,
            deal,
            products,
            why,
            knowledge,
            process,
            contact
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
</style>
