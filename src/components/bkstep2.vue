<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bs2title">
                预约
            </div>
        </div>
        <div class="bs2frame">
            <div class="bs2static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">体检地点</el-col>
                    <el-col :span="4">体检日期</el-col>
                    <el-col :span="4">体检时段</el-col>
                    <el-col :span="4">姓名</el-col>
                    <el-col :span="8">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">{{this.$root.schbranch === '1' ? '东环分院' : '西环分院'}}</el-col>
                    <el-col :span="4">{{this.$root.bkdate.date}}</el-col>
                    <el-col :span="4">{{this.$root.bktimeseg.PeriodName}}</el-col>
                    <el-col :span="4">{{this.$root.bkguest.name}}</el-col>
                    <el-col :span="8">{{this.$root.bkguest.id}}</el-col>
                </el-row>
            </div>
            <div class="bs2static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">手机号码</el-col>
                    <el-col :span="20">验证码</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;position: relative;">
                    <el-col :span="4">{{this.$root.bkguest.phone}}</el-col>
                    <el-col :span="20">
                        <el-input id="inputvc" v-model="vcode" placeholder="手机验证码" :maxlength="6"
                                  style="width:120px;top:-4px;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb" type="primary"
                                  style="height:30px;font-size:12px;padding-top:8px;top:-4px;position:relative;"
                                  @run="sendverify()">发送验证码
                        </timerbtn>
                    </el-col>
                </el-row>
            </div>
            <div style="height:20px;text-align:left;margin-top:2px;padding-left:10px;font-size:14px;"
                 :style="{color:tipscolor}">{{tips}}
            </div>
            <div style="text-align: center;margin-top: 18px;">
                <el-button type="primary" @click="submit()">提交预约</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {blinkBorder} from '../util'
    import timerbtn from './timerbtn.vue'
    export default {
        data() {
            return {
                vcode: '',
                tips: '',
                tipscolor: "#f55",
            }
        },
        methods: {
            sendverify() {
                this.tips = "";
                this.$http.post("http://111.198.146.40:8082/booking/WSOnline.asmx/GetMobileCode2", {
                    paperValue: this.$root.bkguest.id
                }).then((response) => {
                    var d = JSON.parse(response.body.d);
                    this.tips = d.status.description;
                    if (d.status.code == 0) {
                        this.tipscolor = '#00df00';
                    } else {
                        this.tipscolor = '#f55';
                    }
                }, (response) => {
                    console.log(response);
                }).catch((response) => {
                    console.log(response);
                });
            },
            submit() {
                this.tips = "";
                this.vcode = this.vcode.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.vcode.length !== 6) {
                    blinkBorder('inputvc');
                    return;
                }
                this.$http.post("http://111.198.146.40:8082/booking/WSOnline.asmx/RequestAppointment", {
                    paperValue: this.$root.bkguest.id,
                    date: this.$root.bkdate.date,
                    BranchID: this.$root.schbranch,
                    MoonID: this.$root.bktimeseg.MoonID,
                    PeriodID: this.$root.bktimeseg.PeriodID,
                    verifyCode: this.vcode
                }).then((response) => {
                    var d = JSON.parse(response.body.d);
                    this.tips = d.status.description;
                    if (d.status.code == 0) {
                        this.tipscolor = '#00df00';
                    } else {
                        this.tipscolor = '#f55';
                    }
                }, (response) => {
                    console.log(response);
                }).catch((response) => {
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
    .bs2title {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bs2frame {
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bs2static {
        height: 62px;
        padding-top: 12px;
        padding-left: 24px;
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