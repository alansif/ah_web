﻿<template>
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
                <el-select id="inputpd" v-model="timeseg" value-key="PeriodID" placeholder="请选择体检时段" style="width:100%;">
                    <el-option-group v-for="(period,moon) in periods" :key="moon" :label="moon" :disabled="pd[moon]">
                        <el-option v-for="item in period" :key="item.PeriodID" :label="item.PeriodName"
                                   :value="item"></el-option>
                    </el-option-group>
                </el-select>
            </div>
            <div class="bs1input">
                <el-input id="inputid" v-model="idnumber" placeholder="请填写本人身份证号码" :maxlength="18"
                          onkeypress="return event.charCode!=32"></el-input>
            </div>
            <div style="height:20px;text-align:left;margin-top:2px;padding-left:10px;font-size:14px;color:#f55;">{{tips}}</div>
            <div style="text-align: center;margin-top: 18px;">
                <el-button type="primary" @click="nextstep()">下一步</el-button>
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
                tips: '',
                pd: {'上午': false, '下午': false}
            }
        },
        mounted() {
            this.$http.post(restbase() + "booking/WSOnline.asmx/GetBranchPeriodData2", {
                BranchID: this.$root.schbranch
            }).then((response) => {
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
                if (this.idnumber.length === 0) {
                    this.tips = "请填写身份证号码";
                    blinkBorder('inputid');
                    return;
                }
                if (this.idnumber.length !== 18) {
                    this.tips = "身份证号码格式不正确";
                    blinkBorder('inputid');
                    return;
                }
                this.tips = "";
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetGuestForAppointment", {
                    paperValue: this.idnumber
                }).then((response) => {
                    var d = JSON.parse(response.body.d);
                    if (d.status.code == 0) {
                        this.$root.bkguest = d.data;
                        this.$root.bktimeseg = this.timeseg;
                        this.$router.push('bkstep2');
                    } else {
                        this.tips = d.status.description;
                    }
                }, (response) => {
                    this.tips = "出错了，请检查网络连接";
                }).catch((response) => {
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
        height: 255px;
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
        width: 300px;
    }
</style>