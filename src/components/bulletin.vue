<template>
        <div class="gonggao-big-box">
            <div style="position: absolute;width: 100%;height:40px;background-color: rgba(100, 149, 237, 0.5);"></div>
            <div class="swiper-container gonggao-box" id="gg">
                <div class="swiper-wrapper">
                    <template v-for="item in rows">
                        <div class="swiper-slide">
                            <a href="/blt">
                                <img src="../assets/megaphone.svg" class="gonggao-pic" />
                                <div class="gonggao-text">{{item.title}}</div>
                            </a>
                        </div>
                    </template>
                </div>
            </div>
            <div class="ggbtn">
                <a href="/blt">
                    <el-button size="small" class="gonggao-lookallbutton">更多公告</el-button>
                </a>
            </div>
        </div>
</template>

<script>
    import {restbase} from '../config'

    function initSwiper() {
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

    export default {
        data() {
            return {
                rows:[]
            }
        },
        mounted() {
            this.$http.get(restbase() + "api/v1/bulletin/carousel", {
            }).then((response) => {
                if (response.body.status.code == 0) {
                    this.rows = response.body.data;
                    this.$nextTick(initSwiper);
                } else {
                    console.log(response);
                }
            }, (response) => {
                console.log(response);
            }).catch((response) => {
                console.log(response);
            });
        }
    }
</script>

<style>
    .gonggao-big-box {
        position: relative;
        text-align: right;
        width: 100%;
        height: 6px;
        top:-40px;
        left:0px;
        margin: 0px;
        font-size: 14px;
    }

    .gonggao-box {
        display:inline-block;
        vertical-align: middle;
        width: 310px;
        height: 40px;
        text-align: left;
        margin: 0;
    }

    .gonggao-pic {
        float: left;
        width: 24px;
        height: 24px;
        margin-top: 8px;
        margin-right: 16px;
    }

    .gonggao-text {
        display: inline-block;
        position: relative;
        top:10px;
        width: 260px;
        color: #eee;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .gonggao-text:hover {
        color:cornflowerblue;
    }

    .ggbtn {
        position: relative;
        margin-right: 20px;
        display: inline-block;
        vertical-align: middle;
    }
    .gonggao-lookallbutton {
        margin: 0;
        color: white;
        background-color:transparent;
        border-color:white;
    }
</style>