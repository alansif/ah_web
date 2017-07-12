<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/locations-banner.jpg" style="width:100%;display:block;">
            <div class="loctitle">
                华兆位置
            </div>
        </div>
        <div class="locframe">
            <div style="display: inline-block;">
                <bdmap ref="map"></bdmap>
            </div>
            <div>
                <div style="width:500px;text-align: justify;display: inline-block;vertical-align: middle;">
                    <dl>
                        <dt class="contactdt">地址</dt>
                        <dd style="margin-left:60px;">{{addr}}</dd>
                        <dt class="contactdt">公交</dt>
                        <dd style="margin-left:60px;">{{bus}}</dd>
                        <dt class="contactdt">驾车</dt>
                        <dd style="margin-left:60px;">{{drive}}</dd>
                    </dl>
                </div>
                <img src="../assets/qreast.png" width="140" height="140" style="display: inline-block;vertical-align: middle;margin-left: 70px;"/>
            </div>
        </div>
    </div>
</template>

<script>
    import bdmap from './bdmap.vue'
    const east = {dt:'东环分院', addr:'东城区东中街9号东环广场A座二层', bus:'地铁2号线东直门站C出口，东方银座南侧即到东环广场', drive:'二环东直门桥向东，第一个丁字路口向南拐，进入东中街100米即到东环广场'};
    const west = {dt:'西环分院', addr:'西城区北展北街11号华远企业中心9号一层', bus:'乘16、26、85、87、438、651快、运通105、地铁西直门站下车，往北（立交桥反方向）第一个红绿灯左转直行300米路北即到',
        drive:'A.自北三环方向至体检中心，蓟门桥向南走西土城路至西直门北大街，右转进入西直门外大街辅路，第一个路口右转进入高粱桥路， 沿高粱桥路直行300米第一个丁字路口左转进入北展北街，直行300米路北即到；B.自西二环方向至体检中心，过官园桥由高粱桥路出口出主路，左转进入西直门外大街西行，沿路标右转进入高粱桥路，自高粱桥路直行300米第一个红绿灯左转进入北展北街，直行300米路北即到'};
    export default {
        data() {
            return {
                addr:'',
                bus:'',
                drive:''
            }
        },
        components:{
            bdmap
        }
    }
</script>

<style>
    .loctitle {
        position: relative;
        height: 50px;
        top: -104px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
    .locframe {
        height: 700px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: white;
    }
</style>