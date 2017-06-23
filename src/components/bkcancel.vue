<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bctitle">
                取消预约
            </div>
        </div>
        <div class="bcframe">
            <div class="bcstatic">
                <el-row style="font-size:12px;">
                    <el-col :span="4">手机号码</el-col>
                    <el-col :span="20">验证码</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;position: relative;">
                    <el-col :span="4">{{phone}}</el-col>
                    <el-col :span="20">
                        <el-input id="inputvc" v-model="vcode" placeholder="手机验证码" :maxlength="6"
                                  style="width:120px;top:-4px;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb" type="primary" :loading="vcloading"
                                  style="height:30px;font-size:12px;padding-top:8px;top:-4px;position:relative;"
                                  @run="sendverify()">发送验证码
                        </timerbtn>
                    </el-col>
                </el-row>
            </div>
            <div style="height:20px;text-align:left;margin-top:2px;padding-left:10px;font-size:14px;"
                 :style="{color:tipscolor}">{{tips}}
            </div>
            <div style="text-align: center;left:0;bottom: 24px;position: absolute;width: 100%;">
                <el-button type="warning" :loading="submitloading" @click="submit()">取消预约</el-button>
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
                phone:this.$root.bcphone || '',
                visa:this.$root.bcvisa || '',
                idnumber:this.$root.bcid || '',
                vcode: '',
                tips: '',
                tipscolor: "#f55",
                vcloading:false,
                submitloading:false
            }
        },
        methods: {
            sendverify() {
                this.tips = "";
                this.vcloading = true;
                this.$http.post("http://111.198.146.40:8082/booking/WSOnline.asmx/GetMobileCodeForCancel", {
                    paperValue: this.idnumber
                }).then((response) => {
                    this.vcloading = false;
                    var d = JSON.parse(response.body.d);
                    this.tips = d.status.description;
                    if (d.status.code == 0) {
                        this.tipscolor = '#00df00';
                        this.$refs.tb.start();
                    } else {
                        this.tipscolor = '#f55';
                    }
                }, (response) => {
                    this.vcloading = false;
                    console.log(response);
                }).catch((response) => {
                    this.vcloading = false;
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
                this.submitloading = true;
                this.$http.post("http://111.198.146.40:8082/booking/WSOnline.asmx/CancelAppointment", {
                    visaNo:this.visa,
                    verifyCode: this.vcode
                }).then((response) => {
                    this.submitloading = false;
                    var d = JSON.parse(response.body.d);
                    this.tips = d.status.description;
                    if (d.status.code == 0) {
                        this.tipscolor = '#00df00';
                        this.$root.bkfinaltext = '预约已取消';
                        this.$router.push('bkfinal');
                    } else {
                        this.tipscolor = '#f55';
                    }
                    console.log(d);
                }, (response) => {
                    this.submitloading = false;
                    console.log(response);
                }).catch((response) => {
                    this.submitloading = false;
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
    .bctitle {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bcframe {
        position: relative;
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bcstatic {
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