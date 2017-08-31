<template>
    <div>
        <div class="dcframe">
            <el-tabs>
                <el-tab-pane label="基础项目">
                    <el-table stripe :data="essential">
                        <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                        <el-table-column label="说明" prop="说明" :width="790"></el-table-column>
                        <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="可选项目">
                    <el-table stripe ref="opttable" :data="optionals" @select="handleSelect">
                        <el-table-column type="selection" :width="50"></el-table-column>
                        <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                        <el-table-column label="说明" prop="RcommandSource" :width="550"></el-table-column>
                        <el-table-column label="分类" prop="类型" :width="140"></el-table-column>
                        <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="cart">
            <div class="cartctnt">
                <span style="margin-right: 30px;">已选择{{itemcount}}定制</span>
                <span style="margin-right: 30px;">定制项金额：{{dzamount}}</span>
                <span style="margin-right: 30px;">早癌项金额：{{zaamount}}</span>
                <el-tooltip placement="top" effect="light">
                    <div slot="content">
                        <ul style="padding-left: 24px;padding-right: 14px;line-height: 20px;">
                            <li>定制项总金额≤500元，享受8折优惠</li>
                            <li>501元≤定制项总金额≤1000元，享受7.5折优惠</li>
                            <li>1001元≤定制项总金额≤1500元，享受7折优惠</li>
                            <li>定制项总金额＞1500元，享受6.5折优惠</li>
                            <li>早癌项固定享受8折优惠</li>
                        </ul>
                    </div>
                    <span style="margin-right: 30px;">会员折扣<img src="../assets/question.svg" width="16" height="16" style="vertical-align:text-top"/>：-{{discount}}</span>
                </el-tooltip>
                <span style="margin-right: 30px;">应付总金额：{{total}}</span>
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
                itemcount: '',
                dzamount: '',
                zaamount: '',
                discount: '',
                total: ''
            }
        },
        mounted() {
            this.$refs.opttable.data.forEach(row => {
                this.$refs.opttable.toggleRowSelection(row, row.IsAccept === 1);
            });
            this.fetchPrice(this.$root.ctminfo.id);
        },
        methods: {
            nextstep() {
                this.$http.post(restbase() + "customize/MyService.asmx/SelfAccept", {SFZH: this.$root.ctminfo.id})
                    .then((response) => {
                        this.$root.ctminfo.chklist = JSON.parse(response.body.d);
                        this.$router.push('doctmchk');
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
                        var d = JSON.parse(response.body.d);
                        var dd = d.data[0];
                        this.itemcount = dd.DingZhiProcount;
                        this.dzamount = dd.PriceCount;
                        this.zaamount = dd.ZaoAiItem;
                        this.discount = dd.SavePrice;
                        this.total = dd.TotalPrice;
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            handleSelect(selection, row) {
                var f = selection.indexOf(row) !== -1;
                this.$http.post(restbase() + "customize/MyService.asmx/SetItemCheckedChangedInfo",
                    {
                        SFZH: row.SFZH,
                        GID: row.GID,
                        flag: f
                    }).then((response) => {
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