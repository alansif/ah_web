<template>
    <div class="dccframe">
        <el-collapse value="2" style="border: none">
            <el-collapse-item :title="title1" name="1">
                <el-table stripe :data="essential">
                    <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                    <el-table-column label="说明" prop="说明" :width="778"></el-table-column>
                    <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item :title="title2" name="2">
                <el-table stripe ref="opttable" :data="optionals">
                    <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                    <el-table-column label="说明" prop="RcommandSource" :width="588"></el-table-column>
                    <el-table-column label="分类" prop="Type" :width="140"></el-table-column>
                    <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
        <div class="dccos">
            <div class="dccosrt">
                <div class="dccoslist">
                    <span class="dccoslt">定制项总金额：</span>
                    <span class="dccosld">￥100.00</span>
                </div>
                <div class="dccoslist">
                    <span class="dccoslt">定制项优惠：</span>
                    <span class="dccosld">-￥100.00</span>
                </div>
                <div class="dccoslist">
                    <span class="dccoslt">早癌项总金额：</span>
                    <span class="dccosld">￥100.00</span>
                </div>
                <div class="dccoslist">
                    <span class="dccoslt">早癌项项优惠：</span>
                    <span class="dccosld">-￥100.00</span>
                </div>
                <hr />
                <div class="dccoslist">
                    <span class="dccoslt">应付总金额：</span>
                    <span class="dccosld">￥100.00</span>
                </div>
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
                optionals: this.$root.ctminfo.chklist,
                title1:'套餐基础项目 （' + this.$root.ctminfo.ordersummary.YSKItemCount + '）',
                title2:'已选定制项目 （' + this.$root.ctminfo.ordersummary.DingZhiProcount + '）'
            }
        },
        mounted() {
            this.$root.$emit('ctmstep', 3);
        }
    }
</script>

<style>
    .dccframe {
        margin:0 auto;
        width:100%;
        box-shadow: 3px 3px 3px #aaa;
        border-radius: 4px;
        overflow: hidden;
        background-color: white;
    }
    .dccos {
        overflow:hidden;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .dccosrt {
        float:right;
        width:300px;
        margin: 10px 20px;
        font-size: 14px;
        color:#555;
    }
    .dccoslist {
        height:24px;
        line-height: 24px;
    }
    .dccoslt {
        width:180px;
        margin-right: 20px;
        float:left;
        text-align: right;
    }
    .dccosld {
        float:left;
        width:100px;
        text-align: right;
        font-family: verdana;
    }
</style>