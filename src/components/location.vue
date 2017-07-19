<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/locations-banner.jpg" style="width:100%;display:block;">
            <div class="loctitle">
                华兆位置
            </div>
        </div>
        <div class="locframe">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="东环分院" name="east"></el-tab-pane>
                <el-tab-pane label="西环分院" name="west"></el-tab-pane>
            </el-tabs>
            <div>
                <div style="display: inline-block;">
                    <bdmap ref="baidumap"></bdmap>
                </div>
                <div style="display: inline-block;width: 400px;">
                    <div style="width:380px;text-align: justify;margin-left: 20px;">
                        <dl>
                            <dt class="contactdt">地址</dt>
                            <dd style="margin-left:60px;"><p style="margin-top: 0;margin-bottom: 8px;">{{branch.addr}}</p></dd>
                            <dt class="contactdt">公交</dt>
                            <dd style="margin-left:60px;"><p style="margin-top: 0;margin-bottom: 8px;">{{branch.bus}}</p></dd>
                            <dt class="contactdt">驾车</dt>
                            <dd style="margin-left:60px;" v-html="branch.drive"></dd>
                        </dl>
                    </div>
                    <img v-if="branch.qr === 0" src="../assets/qreast.png" width="140" height="140" style="margin-left: 146px;"/>
                    <img v-else src="../assets/qrwest.png" width="140" height="140" style="margin-left: 146px;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import bdmap from './bdmap.vue'
    const east = {qr:0, addr:'东城区东中街9号东环广场A座二层', bus:'地铁2号线东直门站C出口，东方银座南侧即到东环广场', drive:'二环东直门桥向东，第一个丁字路口向南拐，进入东中街100米即到东环广场'};
    const west = {qr:1, addr:'西城区北展北街11号华远企业中心9号一层', bus:'乘16、26、85、87、438、651快、运通105、地铁西直门站下车，往北（立交桥反方向）第一个红绿灯左转直行300米路北即到',
        drive:'A.自北三环方向至体检中心，蓟门桥向南走西土城路至西直门北大街，右转进入西直门外大街辅路，第一个路口右转进入高粱桥路， 沿高粱桥路直行300米第一个丁字路口左转进入北展北街，直行300米路北即到；<br>B.自西二环方向至体检中心，过官园桥由高粱桥路出口出主路，左转进入西直门外大街西行，沿路标右转进入高粱桥路，自高粱桥路直行300米第一个红绿灯左转进入北展北街，直行300米路北即到'};
    export default {
        data() {
            return {
                activeName: 'east',
                branch: east
            }
        },
        methods: {
            handleClick() {
                if (this.activeName === 'east') {
                    this.branch = east;
                    this.$refs.baidumap.goeast();
                } else {
                    this.branch = west;
                    this.$refs.baidumap.gowest();
                }
            }
        },
        components:{
            bdmap
        }
    }
</script>

<style>
    .el-tabs__header {
        margin-bottom: 2px;
    }
    .loctitle {
        position: relative;
        height: 50px;
        top: -105px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
    .locframe {
        height: 540px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: white;
    }
    .contactdt {
        width:40px;
        font-weight:bold;
        float:left;
    }
</style>