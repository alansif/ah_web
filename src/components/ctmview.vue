<template>
    <div>
        <div style="width:100%;height:200px;overflow:hidden;">
            <img src="../assets/ctm.jpg" style="width:100%;display:block;">
            <div class="ctmvtitle">
                查看已定制产品
            </div>
        </div>
        <div class="ctmvframe">
            <div class="ctmvstatic">
                <el-row style="font-size:12px;">
                    <el-col :span="24">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="24">
                        <el-input id="inputid" v-model="idnumber" placeholder="请输入身份证号码" :maxlength="18" style="width:180px;"></el-input>
                        <el-button type="primary" icon="search" :loading="loading" @click="search()">查询</el-button>
                    </el-col>
                </el-row>
            </div>
            <transition name="el-zoom-in-top">
                <div v-show="show1" class="transition-box">
                    <div class="ctmvstatic" style="height:520px">
                        <el-row style="font-size:12px;">
                            <el-col :span="4">签证号</el-col>
                            <el-col :span="4">有效期起</el-col>
                            <el-col :span="4">有效期止</el-col>
                        </el-row>
                        <el-row style="font-size:20px;line-height:36px;position: relative;">
                            <el-col :span="4">{{visa}}</el-col>
                            <el-col :span="4">{{xqbegin}}</el-col>
                            <el-col :span="4">{{xqend}}</el-col>
                            <el-col :span="4" :offset="8" style="text-align: right;">
                                <el-button size="small" style="top:-10px;position:relative;" @click="gocancel" type="primary" icon="delete" :disabled="cantcancel">取消签证</el-button>
                            </el-col>
                        </el-row>
                        <el-tabs>
                            <el-tab-pane label="基础项目">
                                <el-table stripe :data="essential" :height="400">
                                    <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                                    <el-table-column label="说明" prop="说明" :width="692"></el-table-column>
                                    <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                                </el-table>
                            </el-tab-pane>
                            <el-tab-pane label="可选项目">
                                <el-table stripe :data="optionals" :height="400">
                                    <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                                    <el-table-column label="说明" prop="RcommandSource" :width="518"></el-table-column>
                                    <el-table-column label="分类" prop="Type" :width="140"></el-table-column>
                                    <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                                </el-table>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {restbase} from '../config'
    import {blinkBorder} from '../util'
    export default {
        data() {
            return {
                idnumber: '',
                loading: false,
                show1:false,
                visa:'',
                xqbegin:'',
                xqend:'',
                cantcancel:false,
                essential: [],
                optionals: []
            }
        },
        methods: {
            search() {
                this.idnumber = this.idnumber.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber.length === 0) {
                    blinkBorder('inputid');
                    return;
                }
                if (this.idnumber.length !== 18) {
                    this.$message.error('身份证号码格式不正确');
                    blinkBorder('inputid');
                    return;
                }
                this.show1 = false;
                this.loading = true;
                this.$http.post(restbase() + "customize/MyService.asmx/GetQZinfo", {
                    SFZH:this.idnumber
                }).then((response) => {
                    this.loading = false;
                    let d = JSON.parse(response.body.d);
                    let d0 = d[0];
                    if (!d0.QZNumber) {
                        this.$message.error('未查询到签证信息');
                        return;
                    }
                    this.show1 = true;
                    this.visa = d0.QZNumber;
                    this.xqbegin = d0.YouXiaoQiQi;
                    this.xqend = d0.YouXiaoQiZi;
                    this.cantcancel = d0.IsShow == '0';
                    console.log(d0.IsShow);
//                    console.log(d);
                        this.$http.post(restbase() + "customize/MyService.asmx/GetYskInfo", {sex:'男'}).then((response) => {
                            this.essential = JSON.parse(response.body.d);
                        }, (response) => {
                            console.log(response);
                        }).catch((response) => {
                            console.log(response);
                        });
                        this.$http.post(restbase() + "customize/MyService.asmx/SelfAccept", {
                            SFZH:this.idnumber,
                            Type:'3',
                            GroupClassify:'',
                            PageSize:100,
                            PageIndex:1
                        }).then((response) => {
                            const d = JSON.parse(response.body.d);
                            this.optionals = d.data;
                        }, (response) => {
                            console.log(response);
                        }).catch((response) => {
                            console.log(response);
                        });
                }, (response) => {
                    this.loading = false;
                    console.log(response);
                }).catch((response) => {
                    this.loading = false;
                    console.log(response);
                });
            },
            gocancel() {
                this.$confirm('确定要取消这个签证吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post(restbase() + "customize/MyService.asmx/SetGiveUpQZInfo", {
                        SFZH:this.idnumber
                    }).then((response) => {
                        this.show1 = false;
                    }, (response) => {
                        console.log(response);
                    }).catch((response) => {
                        console.log(response);
                    });
                }).catch(() => {
                });
            }
        }
    }
</script>

<style>
    .ctmvtitle {
        position: relative;
        height: 50px;
        top: -80px;
        background-color: rgba(100, 149, 237, 0.7);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
    .ctmvframe {
        position: relative;
        height: 640px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }
    .ctmvstatic {
        height: 68px;
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
    .el-tabs__header {
        margin-bottom: 1px;
    }
</style>