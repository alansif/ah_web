<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bs0title">
                预约
            </div>
        </div>
        <div class="bs0frame">
            <div class="bs0static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">姓名</el-col>
                    <el-col :span="8">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">{{this.$root.bkguest.name}}</el-col>
                    <el-col :span="8">{{this.$root.bkguest.id}}</el-col>
                </el-row>
            </div>
            <div class="bs0static" style="height:72px;">
                <el-row style="font-size:12px;">
                    <el-col :span="6">体检地点</el-col>
                    <el-col :span="6">体检日期</el-col>
                    <el-col :span="6">体检时段</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="6">
                        <el-select id="inp0" v-model="institution" placeholder="请选择体检地点" @change="instchange">
                             <el-option
                                v-for="item in instopts"
                                :label="item.label"
                                :value="item.value"
                                :key="item.value">
                             </el-option>
                         </el-select>
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                                id="inp1"
                                v-model="bkdate"
                                type="date"
                                placeholder="请选择体检日期"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-select id="inputpd" v-model="timeseg" value-key="PeriodID" placeholder="请选择体检时段">
                            <el-option-group v-for="(period,moon) in periods" :key="moon" :label="moon">
                                <el-option v-for="item in period" :key="item.PeriodID" :label="item.PeriodName"
                                           :value="item"></el-option>
                            </el-option-group>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div style="height:20px;text-align:left;margin-top:2px;padding-left:10px;font-size:14px;"
                 :style="{color:tipscolor}">{{tips}}
            </div>
            <div style="text-align: center;margin-top: 4px;">
                <el-button type="primary" :loading="submitloading" @click="submit">提交预约</el-button>
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
                institution: "",
                instopts: [{value: '1', label: '东环分院'}, {value: '2', label: '西环分院'}],
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                bkdate:'',
                timeseg: {PeriodID:''},
                periods: {},
                tips: '',
                tipscolor: "#f55",
                submitloading:false
            }
        },
        mounted() {
            this.fetchBranchPeriod(1);
        },
        methods:{
            fetchBranchPeriod(v) {
                this.$http.post(restbase() + "booking/WSOnline.asmx/GetBranchPeriodData2", {
                    BranchID: v
                }).then((response) => {
                    this.periods = JSON.parse(response.body.d);
                    this.periods['上午'].forEach(function(item,index,input){input[index].MoonID=1});
                    this.periods['下午'].forEach(function(item,index,input){input[index].MoonID=2});
                }, (response) => {
                    console.log(response);
                }).catch((response) => {
                    console.log(response);
                });
            },
            instchange(v) {
                this.fetchBranchPeriod(v);
            },
            submit() {
                this.tips = "";
                if (!this.institution) {
                    blinkBorder('inp0');
                    return;
                }
                if (!this.bkdate) {
                    blinkBorder('inp1');
                    return;
                }
                if (!this.timeseg.PeriodID) {
                    blinkBorder('inputpd');
                    return;
                }
                this.submitloading = true;
                this.$http.post(restbase() + "booking/WSOnline.asmx/RequestAppointment", {
                    paperValue: this.$root.bkguest.id,
                    date: moment(this.bkdate).format('YYYY-MM-DD'),
                    BranchID: this.institution,
                    MoonID: this.timeseg.MoonID,
                    PeriodID: this.timeseg.PeriodID,
                    verifyCode:this.$root.bkguest.vcode
                }).then((response) => {
                    this.submitloading = false;
                    var d = JSON.parse(response.body.d);
                    if (d.status.code === 0) {
                        this.tipscolor = '#00df00';
                        this.$root.bkfinaltext = '您的预约已成功，谢谢！';
                        this.$router.push('bkfinal');
                    } else {
                        this.tipscolor = '#f55';
                        this.tips = '很抱歉，预约未成功。请点击右侧按钮留言或致电010-83033939咨询。';
                        this.$message.error(d.status.description + `(${d.status.code})`);
                        this.$root.$emit('shakegb');
                    }
                }, (response) => {
                    this.submitloading = false;
                    console.log(response);
                }).catch((response) => {
                    this.submitloading = false;
                    console.log(response);
                });
            }
        }
    }
</script>

<style>
    .bs0title {
        position: relative;
        height: 50px;
        top: -98px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }

    .bs0frame {
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }

    .bs0static {
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
</style>