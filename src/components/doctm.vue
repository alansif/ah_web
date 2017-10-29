<template>
    <div>
        <div class="dcframe">
            <el-tabs>
                <el-tab-pane label="可选项目">
                    <el-row type="flex" align="middle" style="margin-left: 24px;">
                        <el-col :span="3">
                            <span>疾病筛选</span>
                        </el-col>
                        <el-col :span="21">
                        <el-checkbox-group v-model="dssel" @change="dschange">
                            <el-checkbox v-for="(value, key) in dss" :key="key" :label="key">{{key}}</el-checkbox>
                        </el-checkbox-group>
                        </el-col>
                    </el-row>
                    <el-table stripe ref="opttable" :data="filteredopt" @select="handleSelect">
                        <el-table-column type="selection" :width="50" :selectable="cbselectable"></el-table-column>
                        <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                        <el-table-column label="说明" prop="RcommandSource" :width="550"></el-table-column>
                        <el-table-column label="分类" prop="类型" :width="140"></el-table-column>
                        <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="基础项目">
                    <el-table stripe :data="essential">
                        <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                        <el-table-column label="说明" prop="说明" :width="790"></el-table-column>
                        <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="历史异常对比">
                    <el-table stripe border :data="abnormals">
                        <el-table-column label="序号" prop="序号" :width="66"></el-table-column>
                        <el-table-column label="科室" prop="Room" :width="120"></el-table-column>
                        <el-table-column label="项目" prop="Item" :width="120"></el-table-column>
                        <el-table-column :label="abtitle1">
                            <el-table-column label="检查提示" prop="Concl1" :width="140"></el-table-column>
                            <el-table-column label="检查所见" prop="Desc1" :width="248"></el-table-column>
                        </el-table-column>
                        <el-table-column :label="abtitle2">
                            <el-table-column label="检查提示" prop="Concl2" :width="140"></el-table-column>
                            <el-table-column label="检查所见" prop="Desc2" :width="248"></el-table-column>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="cart">
            <div class="cartctnt">
                <span style="margin-right: 30px;">已选择{{itemcount}}定制</span>
                <span style="margin-right: 30px;">定制项金额：￥{{dzamount}}.00</span>
                <el-tooltip placement="top" effect="light">
                    <div slot="content">
                        <ul style="padding-left: 24px;padding-right: 14px;line-height: 20px;">
                            <li>定制项总金额≤500元，享受8折优惠</li>
                            <li>501元≤定制项总金额≤1000元，享受7.5折优惠</li>
                            <li>1001元≤定制项总金额≤1500元，享受7折优惠</li>
                            <li>定制项总金额＞1500元，享受6.5折优惠</li>
                        </ul>
                    </div>
                    <span style="margin-right: 30px;">会员折扣<img src="../assets/question.svg" width="16" height="16" style="vertical-align:text-top"/>：-￥{{discount}}.00</span>
                </el-tooltip>
                <span style="margin-right: 30px;">应付总金额：￥{{total}}.00</span>
                <el-button type="primary" @click="nextstep">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {restbase} from '../config'
    export default {
        data() {
            return {
                essential: this.$root.ctminfo.essential,
                optionals: this.$root.ctminfo.optionals,
                forbidden: this.$root.ctminfo.forbidden,
                abnormals: [],
                abtitle1:'a',
                abtitle2:'b',
                itemcount: '',
                dzamount: '',
                discount: '',
                total: '',
                dssel:[],
                dss:{}
            }
        },
        mounted() {
            this.$root.$emit('ctmstep', 2);
            this.$refs.opttable.data.forEach(row => {
                this.$refs.opttable.toggleRowSelection(row, row.IsAccept === '1');
            });
            this.fetchPrice(this.$root.ctminfo.id);
            this.fetchAbnormals(this.$root.ctminfo.id);
            this.fetchDiseaseGname();
        },
        computed: {
            filteredopt() {
                if (this.dssel.length === 0)
                    return this.optionals;
                return this.optionals.filter(val => {
                    return this.dssel.some(v => {
                        return this.dss[v].some(v1 => {
                            return v1 === val.GID;
                        });
                    });
                });
            }
        },
        methods: {
            dschange() {
            },
            fetchDiseaseGname() {
                this.$http.post(restbase() + "customize/MyService.asmx/GetDiseaseGname")
                    .then((response) => {
                        const d = JSON.parse(response.body.d);
                        this.dss = d.data;
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            cbselectable(row, index) {
                let idx = this.forbidden.indexOf(row.GID);
                return idx === -1;
            },
            nextstep() {
                this.$http.post(restbase() + "customize/MyService.asmx/SetNextClick", {SFZH: this.$root.ctminfo.id})
                    .then((response) => {
                        this.$http.post(restbase() + "customize/MyService.asmx/SelfAccept", {SFZH: this.$root.ctminfo.id})
                            .then((response) => {
                                const d = JSON.parse(response.body.d);
                                this.$root.ctminfo.chklist = d.data;
                                this.$root.ctminfo.IsAudit = d.IsAduit;
                                this.$router.push('doctmchk');
                            }, (response) => {
                                console.log(response);
                            })
                            .catch((response) => {
                                console.log(response);
                            });
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            fetchPrice(SFZH) {
                this.$http.post(restbase() + "customize/MyService.asmx/GetPriceCount", {SFZH: SFZH})
                    .then((response) => {
                        const d = JSON.parse(response.body.d);
                        const dd = d.data[0];
                        this.$root.ctminfo.ordersummary = dd;
                        this.itemcount = dd.DingZhiProcount;
                        this.dzamount = dd.PriceCount;
                        this.discount = dd.SavePrice;
                        this.total = dd.MemberPrice;
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            fetchAbnormals(SFZH) {
                this.$http.post(restbase() + "customize/MyService.asmx/GetHistoryHeader", {SFZH: SFZH})
                    .then((response) => {
                        const d = JSON.parse(response.body.d);
                        this.abtitle1 = d[0].TijianCishu + "于" + d[0].TijianJigou;
                        this.abtitle2 = d[1].TijianCishu + "于" + d[1].TijianJigou;
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
                this.$http.post(restbase() + "customize/MyService.asmx/GetHistory", {SFZH: SFZH})
                    .then((response) => {
                        this.abnormals = JSON.parse(response.body.d);
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            handleSelect(selection, row) {
                let f = selection.indexOf(row) !== -1;
                this.$http.post(restbase() + "customize/MyService.asmx/SetItemCheckedChangedInfo",
                    {
                        SFZH: row.SFZH,
                        GID: row.GID,
                        flag: f
                    }).then((response) => {
                        const d = JSON.parse(response.body.d);
                        //处理关联互斥
                        console.log(d);
                        d.data.forEach(function(e){
                            let q = e.question || '';
                            if (q) {
                                for(let a in this.optionals) {
                                    let row = this.optionals[a];
                                    if (q === row.GID) {
                                        let v = e.result === 'true';
                                        this.$refs.opttable.toggleRowSelection(row, v);
                                        break;
                                    }
                                }
                            }
                        }, this);
                        this.fetchPrice(row.SFZH);
                    }, (response) => {
                        console.log(response);
                    }).catch((response) => {
                        console.log(response);
                    });
            }
        }
    }
</script>

<style>
    .el-tabs__header {
        margin-bottom: 2px;
    }
    .dcframe {
        margin:0 auto;
        width:100%;
        padding-bottom:4px;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 2px 2px 2px #888;
        background-color: white;
        margin-bottom: 40px;
    }
    .cart {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1000;
        height: 56px;
        box-shadow: 0px -1px 2px #ccc;
        background-color: white;
        text-align: center;
        color:#777;
    }
    .cartctnt {
        margin:10px 40px;
    }
</style>