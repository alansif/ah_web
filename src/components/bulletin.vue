<template>
        <div class="gonggao-big-box">
            <div class="gonggao-lookall"><a href="/blt">
                <el-button size="small" class="gonggao-lookallbutton">更多公告</el-button>
            </a></div>
            <div class="swiper-container gonggao-box" id="gg">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <a href="/blt">
                            <img src="../assets/megaphone.svg" class="gonggao-pic" />
                            <div class="gonggao-text">2017年元旦放假通知</div>
                        </a>
                    </div>

                    <div class="swiper-slide">
                        <a href="/blt">
                            <img src="../assets/megaphone.svg" class="gonggao-pic" />
                            <div class="gonggao-text">2017年春节放假通知</div>
                        </a>
                    </div>

                    <div class="swiper-slide">
                        <a href="/blt">
                            <img src="../assets/megaphone.svg" class="gonggao-pic" />
                            <div class="gonggao-text">2017年中秋节放假通知</div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
    window.onload = function() {

        var mySwiper1 = new Swiper('.gonggao-box', {
            autoplayDisableOnInteraction: false,
            direction: 'vertical',
            loop: true,
            autoplay: 3000,//可选选项，自动滑动
            onlyExternal: true

        });

        var gg = document.getElementById("gg");

        gg.addEventListener("mouseenter", function () {
            mySwiper1.stopAutoplay();
        });

        gg.addEventListener("mouseleave", function () {
            mySwiper1.startAutoplay();
        });

    }
</script>

<style>
    .gonggao-big-box {
        width: 400px;
        height: 6px;
        position: relative;
        top:-50px;
        left:55px;
        margin: 0px;
        font-size: 14px;
    }

    .gonggao-box {
        width: 310px;
        height: 36px;
        text-align: left;
        margin: 0;
    }

    .gonggao-pic {
        display: inline-block;
        float: left;
        width: 24px;
        height: 24px;
        margin-top: 6px;
        margin-right: 16px;
    }

    .gonggao-text {
        width: 260px;
        line-height: 36px;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .gonggao-lookall {
        float: right;
        margin-top: 5px;
    }

    .gonggao-lookallbutton {
        color: cornflowerblue;
        background-color:transparent;
        border-color:cornflowerblue;
        position: absolute;
        left:390px;
    }
</style>