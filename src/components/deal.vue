<template>
    <section id="deal" style="color:#fff;height:auto;text-align: center;">
        <el-row>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b1.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">会员定制</p>
                    <div>
                        <el-input v-model="idnumber0" placeholder="证件号码" :maxlength="18" style="width:69%;margin:10px 0;"
                            onkeypress="return event.charCode!=32">
                        </el-input>
                    </div>
                    <div>
                        <el-input v-model="phonenumber0" placeholder="手机号"  :maxlength="11" style="width:69%;margin:10px 0;"
                            onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                    </div>
                    <div style="margin:10px 0;position: relative;padding:0;">
                        <el-input v-model="vcode0" placeholder="手机验证码" :maxlength="6" style="width:40%;margin:0;"
                            onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb0" type="primary" :loading="vc0loading" @run="sendvc0">发送验证码</timerbtn>
                    </div>
                    <div style="height:20px;text-align:left;padding-left:56px;font-size:14px;" :style="{color:tips0color}">{{tips0}}</div>
                    <div style="margin-top:0;">
                        <el-button type="primary" style="width:12em;margin:20px 0" :loading="ctmloading" @click="goctm" :disabled="true">敬请期待</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b2.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">网上预约</p>
                    <div>
                        <el-input v-model="idnumber1" placeholder="证件号码" :maxlength="18" style="width:69%;margin:10px 0;"
                                  onkeypress="return event.charCode!=32">
                        </el-input>
                    </div>
                    <div>
                        <el-input v-model="phonenumber1" placeholder="手机号"  :maxlength="11" style="width:69%;margin:10px 0;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                    </div>
                    <div style="margin:10px 0;position: relative;padding:0;">
                        <el-input v-model="vcode1" placeholder="手机验证码" :maxlength="6" style="width:40%;margin:0;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb1" type="primary" :loading="vc1loading" @run="sendvc1">发送验证码</timerbtn>
                    </div>
                    <div style="height:20px;text-align:left;padding-left:56px;font-size:14px;" :style="{color:tips1color}">{{tips1}}</div>
                    <div style="margin-top: 0px;">
                      <el-button type="primary" :loading="bkqloading" style="width:12em;margin:20px 0" @click="bookingquery()">开始预约</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b3.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">报告下载</p>
                    <div>
                        <el-input v-model="idnumber2" placeholder="证件号码" :maxlength="18" style="width:69%;margin:10px 0;"
                                  onkeypress="return event.charCode!=32">
                        </el-input>
                    </div>
                    <el-popover
                            ref="popover1"
                            placement="left"
                            width="200"
                            trigger="hover"
                            offset="2"
                            content="请输入您在华兆益生预留的手机号码">
                    </el-popover>
                    <div style="margin-bottom: 20px;">
                            <div v-popover:popover1 style="width: 69%;margin: 10px auto;">
                                <el-input v-model="phonenumber2" placeholder="手机号" :maxlength="11"
                                          onkeypress="return event.charCode>=48 && event.charCode <=57">
                                </el-input>
                            </div>
                    </div>
                    <div style="margin:10px 0;position: relative;padding:0;">
                        <el-input v-model="vcode2" placeholder="手机验证码" :maxlength="6" style="width:40%;margin:0;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb2" type="primary" :loading="vc2loading" @run="sendverify()">发送验证码</timerbtn>
                    </div>
                    <div style="height:20px;text-align:left;padding-left:56px;font-size:14px;" :style="{color:tips2color}">{{tips2}}</div>
                    <div style="margin-top: 0px;">
                        <el-button type="primary" style="width:12em;margin:20px 0" @click="download()"><i :class="{'el-icon-loading':rptloading}"></i>下载</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-collapse style="text-align: left;">
            <el-collapse-item title="更多业务">
                <el-row style="color:#fff;text-align: center;">
                    <el-col :span="8"><a href="/home">查看已定制的产品</a></el-col>
                    <el-col :span="8"><a href="/bkview">管理您的预约</a></el-col>
                    <el-col :span="8"><a href="http://115.28.130.223/YuYue/YuYue/wenjuan.asp" target="_blank">填写健康问卷</a></el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </section>
</template>

<script>
    import {restbase} from '../config'
    import timerbtn from './timerbtn.vue'
    export default {
        data() {
            return {
                idnumber0: "",
                phonenumber0: "",
                vcode0:'',
                vc0loading:false,
                tips0:"",
                tips0color:"#f55",
                ctmloading:false,

                idnumber1: "",
                phonenumber1: "",
                vcode1:'',
                vc1loading:false,
                tips1:"",
                tips1color:"#f55",
                bkqloading:false,

                idnumber2: "",
                phonenumber2: "",
                vcode2:"",
                vc2loading:false,
                tips2:"",
                tips2color:"#f55",
                rptloading:false
            }
        },
        methods: {
            jumpto(addr) {
                window.open(addr);
            },
            sendvc0() {
                this.idnumber0 = this.idnumber0.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber0.length === 0) {
                    this.tips0color = '#f55';
                    this.tips0 = "请填写证件号码";
                    return;
                }
                this.phonenumber0 = this.phonenumber0.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber0.length !== 11) {
                    this.tips0color = '#f55';
                    this.tips0 = "手机号码格式不正确";
                    return;
                }
                this.tips0 = "";
                this.vc0loading = true;
                this.$http.post(restbase() + "customize/MyService.asmx/GetVerifyInfo",{SFZH:this.idnumber0,Phone:this.phonenumber0})
                    .then((response)=>{
                        this.vc0loading = false;
                        let d = response.body.d;
                        console.log(d);
                    }, (response)=>{
                        this.vc0loading = false;
                        this.tips0color = '#f55';
                        this.tips0 = "抱歉，出错了";
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.vc0loading = false;
                        this.tips0color = '#f55';
                        this.tips0 = "抱歉，出错了";
                        console.log(response);
                    });
            },
            goctm() {
                this.idnumber0 = this.idnumber0.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber0.length === 0) {
                    this.tips0color = '#f55';
                    this.tips0 = "请填写证件号码";
                    return;
                }
                this.vcode0 = this.vcode0.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.vcode0.length !== 6) {
                    this.tips0color = '#f55';
                    this.tips0 = "请正确填写验证码";
                    return;
                }
                this.tips0 = "";
                this.ctmloading = true;
                this.$http.post(restbase() + "customize/MyService.asmx/GetCustomerLoginInfo",{PaperValue:this.idnumber0,Mobile:this.phonenumber0,PWD:this.vcode0})
                    .then((response)=>{
                        let d = JSON.parse(response.body.d);
                        let s = d[0];
                        if (s.code == 0) {
                            this.$root.ctminfo = {
                                id: this.idnumber0,
                                phone: this.phonenumber0,
                                name: s.UserName,
                                gender: s.Sex
                            };
                            this.$http.post(restbase() + "customize/Survey.asmx/GetAllQuestion", {gender:s.Sex}).then((response) => {
                                let d1 = JSON.parse(response.body.d);
                                this.$root.ctminfo.questions = d1.data;
                                this.$root.ctminfo.answers = {};
                                this.$root.ctminfo.questions.forEach(q=>{this.$root.ctminfo.answers[q.QID]=[]});
                                this.$http.post(restbase() + "customize/Survey.asmx/GetPreviousAnswer", {id:this.idnumber0}).then((response) => {
                                    this.ctmloading = false;
                                    var d2 = JSON.parse(response.body.d);
                                    if (d2.status.code == 0) {
                                        this.$root.ctminfo.answers = d2.data;
                                        this.$router.push('ctm/survey');
                                    }
                                }, (response) => {
                                    this.ctmloading = false;
                                    this.tips0color = '#f55';
                                    this.tips0 = "抱歉，出错了";
                                }).catch((response) => {
                                    this.ctmloading = false;
                                    this.tips0color = '#f55';
                                    this.tips0 = "抱歉，出错了";
                                });
                            }, (response) => {
                                this.ctmloading = false;
                                this.tips0color = '#f55';
                                this.tips0 = "抱歉，出错了";
                            }).catch((response) => {
                                this.ctmloading = false;
                                this.tips0color = '#f55';
                                this.tips0 = "抱歉，出错了";
                            });
                        } else {
                            this.ctmloading = false;
                            this.tips0color = '#f55';
                            this.tips0 = "抱歉，出错了";
                        }
                    }, (response)=>{
                        this.ctmloading = false;
                        this.tips0color = '#f55';
                        this.tips0 = "抱歉，出错了";
                    })
                    .catch((response)=>{
                        this.ctmloading = false;
                        this.tips0color = '#f55';
                        this.tips0 = "抱歉，出错了";
                    });
            },
            sendvc1() {
                this.idnumber1 = this.idnumber1.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber1.length === 0) {
                    this.tips1color = '#f55';
                    this.tips1 = "请填写证件号码";
                    return;
                }
                this.phonenumber1 = this.phonenumber1.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber1.length !== 11) {
                    this.tips1color = '#f55';
                    this.tips1 = "手机号码格式不正确";
                    return;
                }
                this.tips1 = "";
                this.vc1loading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetMobileCode3", {paperValue: this.idnumber1, phone:this.phonenumber1})
                    .then((response)=>{
                        this.vc1loading = false;
                        let d = JSON.parse(response.body.d);
                        this.tips1 = d.status.description;
                        if (d.status.code === 0) {
                            this.tips1color = '#00df00';
                            this.$refs.tb1.start();
                        } else {
                            this.tips1color = '#f55';
                        }
                    }, (response)=>{
                        this.vc1loading = false;
                        this.tips1color = '#f55';
                        this.tips1 = "抱歉，出错了";
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.vc1loading = false;
                        this.tips1color = '#f55';
                        this.tips1 = "抱歉，出错了";
                        console.log(response);
                    });
            },
            bookingquery() {
                this.idnumber1 = this.idnumber1.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber1.length === 0) {
                    this.tips1color = '#f55';
                    this.tips1 = "请填写证件号码";
                    return;
                }
                this.phonenumber1 = this.phonenumber1.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber1.length !== 11) {
                    this.tips1color = '#f55';
                    this.tips1 = "手机号码格式不正确";
                    return;
                }
                this.tips1 = "";
                this.bkqloading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetGuestForAppointment2",{
                    paperValue: this.idnumber1,
                    verifyCode: this.vcode1
                }).then((response)=>{
                    this.bkqloading = false;
                    let d = JSON.parse(response.body.d);
                    if (d.status.code === 0) {
                        this.$root.bkguest = d.data;
                        this.$root.bkguest.vcode = this.vcode1;
                        this.$router.push('/bkmain');
                    } else {
                        this.tips1color = '#f55';
                        this.tips1 = d.status.description;
                    }
                },(response)=>{
                    console.log(response);
                    this.tips1 = "抱歉，出错了";
                    this.bkqloading = false;
                }).catch((response)=>{
                    console.log(response);
                    this.tips1 = "抱歉，出错了";
                    this.bkqloading = false;
                });
            },
            sendverify() {
                this.idnumber2 = this.idnumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber2.length === 0) {
                    this.tips2color = '#f55';
                    this.tips2 = "请填写证件号码";
                    return;
                }
                this.phonenumber2 = this.phonenumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber2.length !== 11) {
                    this.tips2color = '#f55';
                    this.tips2 = "手机号码格式不正确";
                    return;
                }
                this.tips2 = "";
                this.vc2loading = true;
                this.$http.post(restbase() + "api/v1/verifycode",{id:this.idnumber2,phone:this.phonenumber2},{emulateJSON:true})
                    .then((response)=>{
                        this.vc2loading = false;
                        let st = response.body.status;
                        this.tips2 = st.description;
                        if (st.code == 0) {
                          this.tips2color = 'palegreen';
                          this.$refs.tb2.start();
                        } else {
                            this.tips2color = '#f55';
                        }
                    }, (response)=>{
                        this.vc2loading = false;
                        this.tips2color = '#f55';
                        this.tips2 = "抱歉，出错了";
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.vc2loading = false;
                        this.tips2color = '#f55';
                        this.tips2 = "抱歉，出错了";
                        console.log(response);
                    });
            },
            download() {
                this.idnumber2 = this.idnumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber2.length === 0) {
                    this.tips2color = '#f55';
                    this.tips2 = "请填写证件号码";
                    return;
                }
                this.vcode2 = this.vcode2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.vcode2.length !== 6) {
                    this.tips2color = '#f55';
                    this.tips2 = "请正确填写验证码";
                    return;
                }
                this.tips2 = "";
                this.rptloading=true;
                this.$http.get(restbase() + `api/v1/user/${this.idnumber2}/report`, {params:{vcode:this.vcode2}})
                    .then((response)=>{
                        this.rptloading=false;
                        let st = response.body.status;
                        if (st.code == 0) {
                            this.$root.reportdata = response.body.data;
                            this.$router.push('report');
                        } else {
                            this.tips2 = st.description;
                            this.tips2color = '#f55';
                        }
                    }, (response)=>{
                        this.rptloading=false;
                        this.tips2color = '#f55';
                        this.tips2 = "抱歉，出错了";
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.rptloading=false;
                        this.tips2color = '#f55';
                        this.tips2 = "抱歉，出错了";
                        console.log(response);
                    });
            }
        },
        components:{
          timerbtn
        }
    }
</script>

<style>
    .el-collapse-item__header, .el-collapse-item__wrap {
        color:#fff;
        border: none;
        background-color: #80A0D0;
    }

    a:link {color:#fff;}
    a:visited {color:#fff;}
    a:hover {color:#9dd;}
    a:active {color:#fff;}
</style>