<template>
    <div class="coframe">
        <div class="cohead">
            <div style="margin-left:32px;font-size:20px;">
                填写并核对订单信息
            </div>
        </div>
        <div class="cobody">
            <div class="cosection">
                <p class="coitemtitle">发票信息</p>
                <el-form class="coform" :inline="true">
                    <el-form-item label="开具发票">
                        <el-switch v-model="fapiaoflag" on-text="" off-text="" :disabled="fapiaodis"></el-switch>
                    </el-form-item>
                    <el-form-item label="抬头" style="margin-left: 20px">
                        <el-input :disabled="!fapiaoflag" v-model="fapiaotitle" placeholder="请输入发票抬头"
                                  style="width: 240px"></el-input>
                    </el-form-item>
                    <el-form-item label="税号" style="margin-left: 20px">
                        <el-input :disabled="!fapiaoflag" v-model="fapiaoshuihao" placeholder="请输入发票税号"
                                  style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item label="内容" style="margin-left: 20px">
                        <el-select :disabled="!fapiaoflag" v-model="fapiaocontent" style="width: 100px">
                            <el-option label="体检费" value="1"></el-option>
                            <el-option label="检查费" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <hr style="height:1px;border:none;border-top:1px solid #ccc;"/>
            <div class="cosection2">
                <p class="coitemtitle">邮寄便管</p>
                <el-form class="coform">
                    <el-radio-group v-model="bianguan">
                        <el-radio :label="0">不需要</el-radio>
                        <el-radio :label="1">1个</el-radio>
                        <el-radio :label="2">2个</el-radio>
                    </el-radio-group>
                </el-form>
            </div>
            <hr style="height:1px;border:none;border-top:1px solid #ccc;"/>
            <div class="cosection2">
                <p class="coitemtitle">收件人信息</p>
                <el-form class="coform" :inline="true">
                    <el-form-item label="姓名">
                        <el-input v-model="cname" placeholder="请输入收件人姓名" style="width: 200px"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" style="margin-left: 40px">
                        <el-input v-model="cphone" placeholder="请输入收件人电话" style="width: 200px"></el-input>
                    </el-form-item>
                </el-form>
                <el-form class="coform">
                    <el-form-item label="地址">
                        <el-input v-model="caddress" placeholder="请输入寄送地址" style="width: 495px"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <hr style="height:1px;border:none;border-top:1px solid #ccc;"/>
            <div class="cosection2">
                <p class="coitemtitle">预约方式</p>
                <p class="coform">您可以在华兆官网线上预约，也可以致电华兆客服电话010-83033939进行预约。或者，我们也可以回电给您进行预约。</p>
                <el-form class="coform" :inline="true">
                    <el-form-item label="需要回电">
                        <el-switch v-model="needcallback" on-text="" off-text=""></el-switch>
                    </el-form-item>
                    <el-form-item label="回电号码" style="margin-left: 40px">
                        <el-input v-model="phonecallback" :readonly="true" style="width: 200px"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <hr style="height:1px;border:none;border-top:1px solid #ccc;"/>
            <div>
                <p class="coitemtitle">项目清单</p>
                <div style="margin:0 20px">
                    <el-collapse value="2">
                        <el-collapse-item :title="title1" name="1">
                            <el-table stripe :data="essential">
                                <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                                <el-table-column label="说明" prop="说明" :width="640"></el-table-column>
                                <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                            </el-table>
                        </el-collapse-item>
                        <el-collapse-item :title="title2" name="2">
                            <el-table stripe :data="optionals">
                                <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                                <el-table-column label="说明" prop="RcommandSource" :width="450"></el-table-column>
                                <el-table-column label="分类" prop="Type" :width="140"></el-table-column>
                                <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                            </el-table>
                        </el-collapse-item>
                    </el-collapse>
                    <div class="dccos">
                        <div class="dccosrt">
                            <div class="dccoslist">
                                <span class="dccoslt">定制项总金额：</span>
                                <span class="dccosld">￥{{ordersum.PriceCount}}.00</span>
                            </div>
                            <div class="dccoslist">
                                <span class="dccoslt">定制项优惠：</span>
                                <span class="dccosld">-￥{{(ordersum.PriceCount * (1 - ordersum.Discount)).toFixed(0)}}.00</span>
                            </div>
                            <hr/>
                            <div class="dccoslist">
                                <span class="dccoslt">应付总金额：</span>
                                <span class="dccosld">￥{{ordersum.MemberPrice}}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cosection2">
                <p class="coitemtitle">支付方式</p>
                <el-form class="coform">
                    <el-radio-group v-model="payment">
                        <el-radio :label="1">到店支付（请携带会员卡）</el-radio>
                    </el-radio-group>
                </el-form>
            </div>
            <hr style="height:1px;border:none;border-top:1px solid #ccc;"/>
            <div style="text-align: center;margin-top: 16px;">
                <el-button type="primary" :loading="payloading" @click="nextstep">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {restbase} from '../config'

    export default {
        data() {
            return {
                fapiaodis: this.$root.ctminfo.ordersummary.MemberPrice == 0,
                fapiaoflag: false,
                fapiaotitle: '',
                fapiaoshuihao: '',
                fapiaocontent: '1',
                bianguan: 0,
                cname: '',
                cphone: '',
                caddress: '',
                needcallback: false,
                phonecallback: '',
                essential: this.$root.ctminfo.essential,
                optionals: this.$root.ctminfo.chklist,
                title1: '套餐基础项目 （' + this.$root.ctminfo.ordersummary.YSKItemCount + '）',
                title2: '已选定制项目 （' + this.$root.ctminfo.ordersummary.DingZhiProcount + '）',
                ordersum: this.$root.ctminfo.ordersummary,
                payment: 1,
                payloading: false
            }
        },
        mounted() {
            this.fetchInfo(this.$root.ctminfo.id);
        },
        methods: {
            fetchInfo(SFZH) {
                this.$http.post(restbase() + "customize/MyService.asmx/GetCustomerHistoryInfo", {SFZH: SFZH})
                    .then((response) => {
                        let d = JSON.parse(response.body.d);
                        if (d.length > 0) {
                            let dd = d[0];
                            this.fapiaotitle = dd['FaPiaoTitle'];
                            this.fapiaoshuihao = dd['FaPiaoShuihao'];
                            this.caddress = dd['Adress'];
                            this.cname = dd['ShouJianRen'];
                            this.cphone = dd['MobileNum'];
                            this.phonecallback = dd["Mobile"];
                        }
                    }, (response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            nextstep() {
                this.payloading = true;
                this.$http.post(restbase() + "customize/MyService.asmx/SetToPayment", {SFZH: this.$root.ctminfo.id, PayWay:this.payment})
                    .then((response) => {
                        let d = JSON.parse(response.body.d);
                        this.$http.post(restbase() + "customize/MyService.asmx/SetYouJiInfo", {
                            QZNumber: d[0].QZCode,
                            isHuiDian:this.needcallback,
                            isFapiao:this.fapiaoflag,
                            FapiaoTitle:this.fapiaotitle,
                            FaPiaoContent:this.fapiaocontent,
                            FaPiaoShuihao:this.fapiaoshuihao,
                            BianNum:this.bianguan,
                            Adress:this.caddress,
                            Customer:this.cname,
                            PhoneNum:this.cphone
                        }).then((response) => {
                                this.payloading = false;
                                let d = JSON.parse(response.body.d);
                                this.$root.ctmdonetext = '您已定制成功，谢谢！';
                                this.$router.push('doctmdone');
                            }, (response) => {
                                console.log(response);
                                this.payloading = false;
                                this.$message.error('抱歉，出错了');
                            })
                            .catch((response) => {
                                console.log(response);
                                this.payloading = false;
                                this.$message.error('抱歉，出错了');
                            });
                    }, (response) => {
                        console.log(response);
                        this.payloading = false;
                        this.$message.error('抱歉，出错了');
                    })
                    .catch((response) => {
                        console.log(response);
                        this.payloading = false;
                        this.$message.error('抱歉，出错了');
                    });
            }
        }
    }
</script>

<style>
    .coframe {
        margin: 0 auto;
        width: 100%;
        padding-bottom: 4px;
        border-left: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 3px 3px 3px #aaa;
        background-color: white;
    }

    .cohead {
        width: 100%;
        height: 48px;
        line-height: 48px;
        padding: 0;
        color: white;
        background-color: #80A0D0;
        border-radius: 4px 4px 0 0;
    }

    .cobody {
        padding: 0 48px;
        margin-bottom: 16px;
        color: #555;
    }

    .cosection {
        margin-top: 24px;
        margin-bottom: 12px;
    }

    .cosection2 {
        margin-top: 24px;
        margin-bottom: 20px;
    }

    .coitemtitle {
        font-size: 18px;
        margin-bottom: 14px;
    }

    .coform {
        margin-left: 48px;
    }

    .el-form-item {
        margin: 8px auto;
    }
</style>
