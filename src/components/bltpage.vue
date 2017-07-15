<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/physician.jpg" style="width:100%;display:block;">
            <div class="blttitle">
                新闻&公告
            </div>
        </div>
        <el-tabs v-model="activeName2" class="blttab">
            <el-tab-pane label="新闻公告" name="news">
                <el-table :data="newsData" :height="600" :show-header="false" class="blttable" @row-click="handlerow">
                    <el-table-column
                            prop="title"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="issuedate"
                            width="200">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="勘误声明" name="errata">
                <el-table :data="errataData" :height="600" :show-header="false" class="blttable" @row-click="handlerow">
                    <el-table-column
                            prop="title"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="issuedate"
                            width="200">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :visible.sync="dialogVisible">
            <p style="text-align: center;font-weight: bold;font-size:18px;">{{btitle}}</p>
            <p style="text-align: center">{{bdate}}</p>
            <p v-html="bcontent" style="line-height: 24px;text-align: justify;padding: 8px 32px 0 32px;"></p>
            <div slot="footer" style="text-align: center">
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {restbase} from '../config'
    export default {
        data() {
            return {
                activeName2: 'news',
                newsData: [],
                errataData: [],
                dialogVisible: false,
                btitle: '',
                bdate:'',
                bcontent: ''
            }
        },
        mounted() {
            this.$http.get(restbase() + "api/v1/bulletin/summary", {
            }).then((response) => {
                if (response.body.status.code == 0) {
                    response.body.data.forEach(v=>{
                        v.issuedate = moment(v.issuedate).format('YYYY-MM-DD');
                        if (v.category === '勘误') {
                            this.errataData.push(v);
                        } else {
                            this.newsData.push(v);
                        }
                    });
                } else {
                    console.log(response);
                }
            }, (response) => {
                console.log(response);
            }).catch((response) => {
                console.log(response);
            });
        },
        methods: {
            handlerow(row) {
                this.$http.get(restbase() + `api/v1/bulletin/${row.uid}/detail`, {
                }).then((response) => {
                    if (response.body.status.code == 0) {
                        if (response.body.data.length === 1) {
                            var v = response.body.data[0];
                            this.btitle = v.title;
                            this.bdate = moment(v.issuedate).format('YYYY-MM-DD');
                            this.bcontent = v.body;
                            this.dialogVisible = true;
                        }
                    } else {
                        console.log(response);
                    }
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
    .blttab {
        border: 1px solid cornflowerblue;
        border-radius: 2px;
    }

    .blttable {
        width: 100%;
        color: #777;
    }

    .el-tabs__header {
        margin-bottom: 1px;
        background-color: #f7f7f7;
    }

    .blttitle {
        position: relative;
        height: 50px;
        top: -116px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
</style>