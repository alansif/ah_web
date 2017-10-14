<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bs1title">
                预约
            </div>
        </div>
        <div class="bs1frame">
            <div class="bs1static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">体检地点</el-col>
                    <el-col :span="20">体检日期</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">{{this.$root.schbranch === '1' ? '东环分院' : '西环分院'}}</el-col>
                    <el-col :span="20">{{this.$root.bkdate.date}}</el-col>
                </el-row>
            </div>
            <div class="bs1input">
                <span class="bs1label">体检时段</span>
                <el-select id="inputpd" v-model="timeseg" value-key="PeriodID" placeholder="请选择体检时段">
                    <el-option-group v-for="(period,moon) in periods" :key="moon" :label="moon" :disabled="pd[moon]">
                        <el-option v-for="item in period" :key="item.PeriodID" :label="item.PeriodName"
                                   :value="item"></el-option>
                    </el-option-group>
                </el-select>
            </div>
            <div class="bs1input">
                <span class="bs1label">身份证号</span>
                <el-input id="inputid" v-model="idnumber" placeholder="请填写本人身份证号码" :maxlength="18" style="width: 222px"
                          onkeypress="return event.charCode!=32"></el-input>
            </div>
            <div class="bs1input">
                <span class="bs1label">手机号码</span>
                <el-input id="inputphone" v-model="phone" placeholder="您在华兆预留的手机号码" :maxlength="11" style="width: 222px"
                          onkeypress="return event.charCode!=32"></el-input>
            </div>
            <div style="height:20px;text-align:left;margin-top:12px;font-size:14px;color:#f55;">{{tips}}</div>
            <div style="text-align: center;margin-top: 18px;">
                <el-button type="primary" :loading="submitloading" @click="nextstep()">提交预约</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {restbase} from '../config'
    import {blinkBorder} from '../util'
    export default {
        data() {
            return {
                timeseg: {PeriodID:''},
                periods: {},
                idnumber: '',
                phone: '',
                tips: '',
                pd: {'上午': false, '下午': false},
                submitloading:false
            }
        },
        mounted() {
            this.$http.post(restbase() + "booking/WSOnline.asmx/GetBranchPeriodData2", {
                BranchID: this.$root.schbranch
            }).then((response) => {
                console.log(response.body.d);
                this.periods = JSON.parse(response.body.d);
                this.periods['上午'].forEach(function(item,index,input){input[index].MoonID=1});
                this.periods['下午'].forEach(function(item,index,input){input[index].MoonID=2});
                this.pd['上午'] = this.$root.bkdate.avaAM === 'False';
                this.pd['下午'] = this.$root.bkdate.avaPM === 'False';
            }, (response) => {
                console.log(response);
            }).catch((response) => {
                console.log(response);
            });
        },
        methods: {
            nextstep() {
                if (!this.timeseg.PeriodID) {
                    this.tips = "请选择体检时段";
                    blinkBorder('inputpd');
                    return;
                }
                this.idnumber = this.idnumber.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber.length !== 18) {
                    this.tips = "身份证号码格式不正确";
                    blinkBorder('inputid');
                    return;
                }
                this.phone = this.phone.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phone.length !== 11) {
                    this.tips = "手机号码格式不正确";
                    blinkBorder('inputphone');
                    return;
                }
                this.tips = "";
                this.submitloading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/RequestAppointment2", {
                    paperValue: this.idnumber,
                    phone: this.phone,
                    date: this.$root.bkdate.date,
                    BranchID: this.$root.schbranch,
                    MoonID: this.timeseg.MoonID,
                    PeriodID: this.timeseg.PeriodID
                }).then((response) => {
                    this.submitloading = false;
                    let d = JSON.parse(response.body.d);
                    if (d.status.code === 0) {
                        this.$root.bkfinaltext = '您的预约已成功，谢谢！';
                        this.$router.push('bkfinal');
                    } else if (d.status.code > 10000) {
                        this.tips = d.status.description;
                    } else {
                        this.$message.error(d.status.description);
                        this.tips = '很抱歉，预约未成功。请点击右侧按钮留言或致电010-83033939咨询。';
                        this.$root.$emit('shakegb');
                    }
                }, (response) => {
                    this.submitloading = false;
                    this.tips = "出错了，请检查网络连接";
                }).catch((response) => {
                    this.submitloading = false;
                    this.tips = "抱歉，出错了";
                });
            }
        }
    }
</script>

<style>
    .bs1title {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bs1frame {
        height: 315px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bs1static {
        height: 62px;
        padding-top: 12px;
        padding-left: 24px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #555;
        background-color: white;
        box-shadow: 1px 1px 1px #888;
    }

    .bs1input {
        padding-top: 16px;
        padding-left: 0px;
        width: 400px;
    }

    .bs1label {
        color: #666;
        margin-right:8px;
    }
</style>