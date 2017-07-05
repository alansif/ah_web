<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bvtitle">
                预约管理
            </div>
        </div>
        <div class="bvframe">
            <div class="bvstatic">
                <el-row style="font-size:12px;">
                    <el-col :span="4">姓名</el-col>
                    <el-col :span="20">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">
                        <el-input id="inputname" v-model="name" placeholder="请输入姓名" style="width:140px;"></el-input>
                    </el-col>
                    <el-col :span="20">
                        <el-input id="inputid" v-model="idnumber" placeholder="请输入身份证号码" :maxlength="18" style="width:180px;"></el-input>
                        <el-button type="primary" size="small" icon="search" :loading="bvloading" @click="search()">查询</el-button>
                        <span style="color:#d63;font-size:14px;margin-left:16px;">{{tips}}</span>
                    </el-col>
                </el-row>
            </div>
            <transition name="el-zoom-in-top">
                <div v-show="show1" class="transition-box">
            <div class="bvstatic">
                <el-row style="font-size:12px;">
                    <el-col :span="4">体检地点</el-col>
                    <el-col :span="4">预约日期</el-col>
                    <el-col :span="4">签证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;position: relative;">
                    <el-col :span="4">{{branch}}</el-col>
                    <el-col :span="4">{{date}}</el-col>
                    <el-col :span="4">{{visa}}</el-col>
                    <el-col :span="4" :offset="8" style="text-align: right;">
                        <el-button size="small" :loading="bcloading" style="top:-10px;position:relative;" @click="gocancel()">取消预约</el-button>
                    </el-col>
                </el-row>
            </div>
                </div>
            </transition>
            <div style="text-align: center;left:0;bottom: 24px;position: absolute;width: 100%;">
                <a href="/home"><el-button type="primary">返回首页</el-button></a>
            </div>
        </div>
    </div>
</template>

<script>
    import {restbase} from '../config'
    import {blinkBorder} from '../util'
    import timerbtn from './timerbtn.vue'
    export default {
        data() {
            return {
                name:'',
                idnumber:'',
                show1:false,
                vcode: '',
                tips: '',
                bvloading:false,
                branch:'',
                date:'',
                visa:'',
                bcloading:false
            }
        },
        methods: {
            search() {
                this.name = this.name.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.name.length === 0) {
                    blinkBorder('inputname');
                    return;
                }
                this.idnumber = this.idnumber.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber.length === 0) {
                    blinkBorder('inputid');
                    return;
                }
                if (this.idnumber.length !== 18) {
                    this.tips = "身份证号码格式不正确";
                    blinkBorder('inputid');
                    return;
                }
                this.tips = "";
                this.show1 = false;
                this.bvloading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetAppointment", {
                    name: this.name,
                    ID:this.idnumber
                }).then((response) => {
                    this.bvloading = false;
                    var d = JSON.parse(response.body.d);
                    if (d.status.code == 0) {
                        this.show1 = true;
                        this.branch = d.data[0]['BranchName'];
                        this.date = moment(d.data[0]['YuYueRiQi']).format('YYYY-MM-DD');
                        this.visa = d.data[0]['HuZhaoHao'];
                        console.log(d.data);
                    } else {
                        this.tips = d.status.description;
                    }
                }, (response) => {
                    this.bvloading = false;
                    console.log(response);
                }).catch((response) => {
                    this.bvloading = false;
                    console.log(response);
                });
            },
            gocancel() {
                this.bcloading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetGuestByVisa", {
                    visaNo:this.visa
                }).then((response) => {
                    this.bcloading = false;
                    var d = JSON.parse(response.body.d);
                    console.log(d);
                    if (d.status.code == 0) {
                        this.$root.bcid = d.data["PaperValue"];
                        this.$root.bcphone = d.data["Mobile"];
                        this.$root.bcvisa = this.visa;
                        this.$router.push('bkcancel');
                    }
                }, (response) => {
                    this.bcloading = false;
                    console.log(response);
                }).catch((response) => {
                    this.bcloading = false;
                    console.log(response);
                });
            }
        },
        components: {
            timerbtn
        }
    }
</script>

<style>
    .bvtitle {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bvframe {
        position: relative;
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bvstatic {
        height: 62px;
        padding-top: 12px;
        padding-left: 24px;
        padding-right: 24px;
        margin-bottom: 16px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #555;
        background-color: white;
        box-shadow: 1px 1px 1px #888;
    }

    .el-input__inner {
        height: 30px;
    }
</style>