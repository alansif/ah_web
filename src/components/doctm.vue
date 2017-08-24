<template>
    <div>
        <div class="dcframe">
            <div style="">
            <el-tabs>
                <el-tab-pane label="基础项目">
                    <el-table stripe :data="essential">
                        <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                        <el-table-column label="说明" prop="说明" :width="790"></el-table-column>
                        <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="可选项目">
                    <el-table stripe :data="optionals" @select="handleSelect">
                        <el-table-column type="selection" :width="50"></el-table-column>
                        <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                        <el-table-column label="说明" prop="RcommandSource" :width="550"></el-table-column>
                        <el-table-column label="分类" prop="类型" :width="140"></el-table-column>
                        <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
            </div>
        </div>
        <div class="cart">
            <div class="cartctnt">
                <span style="margin-right: 30px;">已选择{{itemcount}}项定制</span>
                <span style="margin-right: 30px;">定制项总金额：{{amount}}</span>
                <span style="margin-right: 30px;">会员折扣率：{{discountrate}}%</span>
                <span style="margin-right: 30px;">会员优惠：-{{discount}}</span>
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
                itemcount: 3,
                amount: 100,
                discountrate: 80
            }
        },
        methods: {
            nextstep() {

            },
            handleSelect(selection, row) {
                var f = selection.indexOf(row) !== -1;
                console.log(f, row.GID, row.SFZH);
                this.$http.post(restbase() + "customize/MyService.asmx/SetItemCheckedChangedInfo",
                    {
                        SFZH: row.SFZH,
                        GID: row.GID,
                        flag: f
                    }).then((response) => {
                        var d = JSON.parse(response.body.d);
                        console.log(d);
                    }, (response) => {
                        console.log(response);
                    }).catch((response) => {
                        console.log(response);
                    });
            }
        },
        computed: {
            discount() {
                return this.amount * (100 - this.discountrate) * 0.01;
            },
            total(){
                return this.amount - this.discount;
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