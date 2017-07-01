<template>
    <section id="products" style="padding-bottom:50px;margin-bottom:2px;">
        <p style="padding-top:20px;font-size:1.8em;">个检套餐</p>
        <el-row>
            <el-col :span="6">
                <el-card class="pdcc" :body-style="{ padding: '0px' }">
                    <div class="pdcd" style="background-color:#fcc;">
                        <div class="pdct">
                            健康女人17版
                        </div>
                        <img src="../assets/femenine-sign.svg" width="40" height="40"/>
                    </div>
                    <div class="pdcm">
                        <p class="pdf1">标准价格 6800元</p>
                        <p class="pdf2">TC-JN2017-01</p>
                        <br><br>
                        <el-button type="primary" @click="showIdvpkg(0)">了解详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="pdcc" :body-style="{ padding: '0px' }">
                    <div class="pdcd" style="background-color:#9cf;">
                        <div class="pdct">
                            健康男人17版
                        </div>
                        <img src="../assets/masculine-gender.svg" width="40" height="40"/>
                    </div>
                    <div class="pdcm">
                        <p class="pdf1">标准价格 6800元</p>
                        <p class="pdf2">TC-JN2017-00</p>
                        <br>
                        <br>
                        <el-button type="primary" @click="showIdvpkg(1)">了解详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="pdcc" :body-style="{ padding: '0px' }">
                    <div class="pdcd" style="background-color:#fcc;">
                        <div class="pdct">
                            健康关怀17版（女）
                        </div>
                        <img src="../assets/femenine-sign.svg" width="40" height="40"/>
                    </div>
                    <div class="pdcm">
                        <p class="pdf1">标准价格 1980元</p>
                        <p class="pdf2">TC-JL2017-00</p>
                        <span class="pdf2">仅限2015年7月14日前入会会员购买</span>
                        <br>
                        <br>
                        <el-button type="primary" @click="showIdvpkg(2)">了解详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="pdcc" :body-style="{ padding: '0px' }">
                    <div class="pdcd" style="background-color:#9cf;">
                        <div class="pdct">
                            健康关怀17版（男）
                        </div>
                        <img src="../assets/masculine-gender.svg" width="40" height="40"/>
                    </div>
                    <div class="pdcm">
                        <p class="pdf1">标准价格 1980元</p>
                        <p class="pdf2">TC-JL2017-01</p>
                        <span class="pdf2">仅限2015年7月14日前入会会员购买</span>
                        <br>
                        <br>
                        <el-button type="primary" @click="showIdvpkg(3)">了解详情</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog :title="tableData.name" v-model="dialogVisibleProd" style="text-align: left;">
            <el-table :data="tableData.items" :row-class-name="tableRowClassName" style="width:100%" height="500">
                <el-table-column prop="name" label="项目" width="150"></el-table-column>
                <el-table-column prop="descr" label="说明"></el-table-column>
            </el-table>
        </el-dialog>
    </section>
</template>

<script>
    import jkgh17men   from "../assets/idvpackages/jkgh17men";
    import jkgh17women from "../assets/idvpackages/jkgh17women";
    import jknr17men   from "../assets/idvpackages/jknr17men";
    import jknr17women from "../assets/idvpackages/jknr17women";
    export default {
        data() {
            return {
                dialogVisibleProd: false,
                tableData: {},
                idvpkg:[jknr17women(),jknr17men(),jkgh17women(),jkgh17men()]
            }
        },
        methods: {
            showIdvpkg(i) {
                this.tableData = this.idvpkg[i];
                this.dialogVisibleProd = true;
            },
            tableRowClassName(row, index) {
                if (row.descr.length === 0) {
                    return 'sec-row';
                }
                return '';
            }
        }
    }
</script>

<style>
    .el-table .sec-row {
        background: #e2f0e4;
    }
    .pdcc {
        width:90%;
        margin:0 auto;
    }
    .pdcd {
        width:100%;
        height:140px;
        display:block;
        color:#fff;
    }
    .pdct {
        padding:30px 10px 20px;
        font-size:1.3em;
    }
    .pdcm {
        width:100%;
        margin-top:20px;
        margin-bottom:20px;
    }
    .pdf1 {
        font-size:1.2em;
    }
    .pdf2 {
        font-size:0.8em;
        color:#888;
    }
</style>