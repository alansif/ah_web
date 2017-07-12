<template>
    <section id="contact" style="padding-bottom:2em;margin-top: 20px;">
        <el-row>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">联系方式</p>
                <div style="text-align:left;color:#888;">
                    <p>客服电话：010-83033939 </p>
                    <p>(周一至周五 8:30—17:30 节假日除外)</p>
                    <p>email：adva@advahealth.com</p>
                </div>
            </el-col>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">东环分院</p>
                <div style="text-align:left;color:#888;line-height:160%;">
                    <p>地址：北京市东城区东中街9号东环广场A座二层</p>
                </div>
                <el-button type="primary" @click="showEast">查看地图</el-button>
            </el-col>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">西环分院</p>
                <div style="text-align:left;color:#888;line-height:160%;">
                    <p>地址：北京市西城区北展北街11号华远企业中心9号楼一层</p>
                </div>
                <el-button type="primary" @click="showWest">查看地图</el-button>
            </el-col>
        </el-row>
        <el-dialog :title="dtitle" :visible.sync="dialogVisible" size="large">
            <div>
                <div style="display: inline-block;">
                    <bdmap ref="map" @aftermount="aftm"></bdmap>
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
        </el-dialog>
    </section>
</template>

<script>
    import bdmap from './bdmap.vue'
    const east = {dt:'东环分院', addr:'东城区东中街9号东环广场A座二层', bus:'地铁2号线东直门站C出口，东方银座南侧即到东环广场', drive:'二环东直门桥向东，第一个丁字路口向南拐，进入东中街100米即到东环广场'};
    const west = {dt:'西环分院', addr:'西城区北展北街11号华远企业中心9号一层', bus:'乘16、26、85、87、438、651快、运通105、地铁西直门站下车，往北（立交桥反方向）第一个红绿灯左转直行300米路北即到',
        drive:'A.自北三环方向至体检中心，蓟门桥向南走西土城路至西直门北大街，右转进入西直门外大街辅路，第一个路口右转进入高粱桥路， 沿高粱桥路直行300米第一个丁字路口左转进入北展北街，直行300米路北即到；B.自西二环方向至体检中心，过官园桥由高粱桥路出口出主路，左转进入西直门外大街西行，沿路标右转进入高粱桥路，自高粱桥路直行300米第一个红绿灯左转进入北展北街，直行300米路北即到'};

    export default {
        data () {
            return {
                dialogVisible: false,
                dtitle:'',
                addr:'',
                bus:'',
                drive:'',
                mapcenter:0
            }
        },
        methods:{
            showEast() {
                this.dtitle = east.dt;
                this.addr = east.addr;
                this.bus = east.bus;
                this.drive = east.drive;
                this.mapcenter = 0;
                this.$router.push('/location');
//                this.dialogVisible = true;
            },
            showWest() {
                this.dtitle = west.dt;
                this.addr = west.addr;
                this.bus = west.bus;
                this.drive = west.drive;
                this.mapcenter = 1;
                this.dialogVisible = true;
                this.$nextTick(function(){
                    this.$nextTick(function(){
                        if (this.$refs.map && this.$refs.map.k2) this.$refs.map.k2();
                    });
                });
            },
            aftm() {
                if (this.mapcenter === 0) {
                    this.$refs.map.k1();
                } else {
                    this.$refs.map.k2();
                }
            }
        },
        components:{
            bdmap
        }
    }
</script>

<style>
    .contactdt {
        width:40px;
        text-align:center;
        font-weight:bold;
        float:left;
    }
</style>