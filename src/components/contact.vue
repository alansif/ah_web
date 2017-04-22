<template>
    <section id="contact" style="padding-bottom:2em;margin-top: 20px;">
        <el-row>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">联系方式</p>
                <div style="text-align:left;color:#888;">
                    <p>服务电话：010-83033939 </p>
                    <p>(周一至周五 8:30—17:30 节假日除外)</p>
                    <p>email：adva@advahealth.com</p>
                </div>
            </el-col>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">东环分院</p>
                <div style="text-align:left;color:#888;line-height:160%;">
                    <p>地址：北京市东城区东中街9号东环广场A座二层</p>
                </div>
                <el-button type="primary" @click="dialogVisibleEast = true">查看地图</el-button>
            </el-col>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:center;font-size:1.8em;">西环分院</p>
                <div style="text-align:left;color:#888;line-height:160%;">
                    <p>地址：北京市西城区北展北街11号华远企业中心9号楼一层</p>
                </div>
                <el-button type="primary" @click="dialogVisibleWest = true">查看地图</el-button>
            </el-col>
        </el-row>
        <el-dialog title="东环分院" v-model="dialogVisibleEast">
            <img src="../assets/east.jpg" style="width:100%;"/>
            <div style="padding:0px 40px;text-align: justify;">
                <dl>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">地址</dt>
                    <dd style="margin-left:60px;">东城区东中街9号东环广场A座二层</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">公交</dt>
                    <dd style="margin-left:60px;">地铁2号线东直门站C出口，东方银座南侧即到东环广场</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">驾车</dt>
                    <dd style="margin-left:60px;">二环东直门桥向东，第一个丁字路口向南拐，进入东中街100米即到东环广场</dd>
                </dl>
            </div>
        </el-dialog>
        <el-dialog title="西环分院" v-model="dialogVisibleWest">
            <img src="../assets/west.jpg" style="width:100%;"/>
            <div style="padding:0px 40px;text-align: justify;">
                <dl>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">地址</dt>
                    <dd style="margin-left:60px;">西城区北展北街11号华远企业中心9号一层</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">公交</dt>
                    <dd style="margin-left:60px;">乘16、26、85、87、438、651快、运通105城铁西直门站下车，往北（立交桥反方向）第一个红绿灯左转直行300米路北即到</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">驾车</dt>
                    <dd style="margin-left:60px;">
                        A.自北三环方向至体检中心，蓟门桥向南走西土城路至西直门北大街，右转进入西直门外大街辅路，第一个路口右转进入高粱桥路， 沿高粱桥路直行300米第一个丁字路口左转进入北展北街，直行300米路北即到；<br>
                        B.自西二环方向至体检中心，过官园桥由高粱桥路出口出主路，左转进入西直门外大街西行，沿路标右转进入高粱桥路，自高粱桥路直行300米第一个红绿灯左转进入北展北街，直行300米路北即到

                    </dd>
                </dl>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisibleEast: false,
                dialogVisibleWest: false
            }
        }
    }
</script>