<template>
    <section id="deal" style="color:#fff;height:auto;text-align: center;">
        <el-row>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b1.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">会员定制</p>
                    <div>
                        <el-input v-model="idnumber" placeholder="证件号码" style="width:69%;margin:10px 0;"></el-input>
                    </div>
                    <div>
                        <el-input v-model="phonenumber" placeholder="手机号" style="width:69%;margin:10px 0;"></el-input>
                    </div>
                    <div style="margin:10px 0;position: relative;padding:0;">
                        <el-input v-model="vcode" placeholder="手机验证码" style="width:40%;margin:0;"></el-input>
                        <el-button type="primary">发送验证码</el-button>
                    </div>
                    <div style="margin-top: 24px;">
                        <el-button type="primary" style="width:12em;margin:20px 0" @click="jumpto('http://111.198.146.33:8084/PDBC/Logon.aspx')">开始定制</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b2.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">查询预约</p>
                    <div>
                        <el-select v-model="institution" placeholder="地点" style="width:70%;margin:10px 0;">
                            <el-option
                                    v-for="item in instopts"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-date-picker
                                v-model="datebegin"
                                type="date"
                                placeholder="起始日期"
                                :picker-options="pickerOptions0"
                                style="width:70%;margin:10px 0;">
                        </el-date-picker>
                    </div>
                    <div>
                        <el-date-picker
                                v-model="dateend"
                                type="date"
                                placeholder="结束日期"
                                :picker-options="pickerOptions0"
                                style="width:70%;margin:10px 0;">
                        </el-date-picker>
                    </div>
                    <div><p></p></div>
                    <el-button type="primary" icon="search" style="width:12em;margin:20px 0" @click="jumpto('http://www.advahealth.com/YuYue/YuYue/index.asp')">查询</el-button>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <img src=../assets/b3.jpg  style="width:100%;z-index:1;">
                <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                    <p style="text-align:center;font-size:2em;">报告下载</p>
                    <div>
                        <el-input v-model="idnumber2" placeholder="证件号码" style="width:69%;margin:10px 0;"
                                  onkeypress="return event.charCode!=32">
                        </el-input>
                    </div>
                    <div>
                        <el-input v-model="phonenumber2" placeholder="手机号" :maxlength="11" style="width:69%;margin:10px 0;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                    </div>
                    <div style="margin:10px 0;position: relative;padding:0;">
                        <el-input v-model="vcode2" placeholder="手机验证码" :maxlength="6" style="width:40%;margin:0;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb2" type="primary" @run="sendverify()">发送验证码</timerbtn>
                    </div>
                    <div style="height:20px;text-align:left;padding-left:56px;font-size:14px;" :style="{color:tips2color}">{{tips2}}</div>
                    <div style="margin-top: 0px;">
                        <el-button type="primary" style="width:12em;margin:20px 0" @click="jumpto('http://111.198.146.35:8083/')">下载</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-collapse style="text-align: left;">
            <el-collapse-item title="更多业务">
                <el-row style="color:#fff;text-align: center;">
                    <el-col :span="8"><a href="/">查看已定制的产品</a></el-col>
                    <el-col :span="8"><a href="/">查看已提交的预约</a></el-col>
                    <el-col :span="8"><a href="/">填写健康问卷</a></el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </section>
</template>

<script>
  import timerbtn from './timerbtn.vue';
    export default {
        data() {
            return {
                institution: "",
                instopts: [{value: 'east', label: '东环分院'}, {value: 'west', label: '西环分院'}],
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                datebegin: "",
                dateend: "",
                idnumber: "",
                phonenumber: "",
                vcode:"",
                idnumber2: "",
                phonenumber2: "",
                vcode2:"",
                tips2:"",
                tips2color:"red"
            }
        },
        methods: {
            jumpto(addr) {
                window.open(addr);
            },
            sendverify() {
                this.idnumber2 = this.idnumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber2.length === 0) {
                    this.tips2color = 'red';
                    this.tips2 = "请填写证件号码";
                    return;
                }
                this.phonenumber2 = this.phonenumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber2.length !== 11) {
                    this.tips2color = 'red';
                    this.tips2 = "手机号码格式不正确";
                    return;
                }
                this.tips2 = "";
                this.$http.post("http://111.198.146.40:8083/api/v1/verifycode",{id:this.idnumber2,phone:this.phonenumber2},{emulateJSON:true})
                    .then((response)=>{
                        let st = response.body.status;
                        this.tips2 = st.description;
                        if (st.code == 0) {
                          this.tips2color = 'palegreen';
                          this.$refs.tb2.start();
                        } else {
                            this.tips2color = 'red';
                        }
                    }, (response)=>{
                        console.log(response);
                    })
                    .catch((response)=>{
                        console.log(response);
                    });
                this.$notify({
                    title: this.idnumber2,
                    message: this.phonenumber2,
                    duration: 6000
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
        background-color: #7080B0;
    }

    a:link {color:#fff;}
    a:visited {color:#fff;}
    a:hover {color:#9dd;}
    a:active {color:#fff;}
</style>