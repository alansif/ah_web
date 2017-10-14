<template>
    <div>
        <div class="right_fbox">
            <el-tooltip placement="top" effect="light">
                <div slot="content" style="width:160px;text-align:justify;">如果您有任何问题，敬请留言，我们会尽快回复，谢谢！</div>
                <img src="../assets/notebook-1.svg" width="50" height="50" @click="dialogVisible=true" :class="{'shake-horizontal':shaking,'shake-constant':shaking}"/>
            </el-tooltip>
        </div>
        <el-dialog title="留言" :visible.sync="dialogVisible" size="tiny" :close-on-click-modal="false">
            <el-form :model="form" style="margin: 0 30px 0 30px;">
                <el-form-item label="姓名">
                    <el-input id="fname" v-model="form.username" placeholder="请填写您的姓名" style="max-width: 221px;"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input id="fphone" v-model="form.phone" placeholder="请填写您的电话" style="max-width: 221px;"></el-input>
                </el-form-item>
                <el-form-item label="类别">
                    <el-select id="fctg" v-model="form.category" placeholder="请选择问题类别">
                        <el-option label="会员定制" value="会员定制"></el-option>
                        <el-option label="网上预约" value="网上预约"></el-option>
                        <el-option label="报告下载" value="报告下载"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="留言内容">
                    <el-input type="textarea" id="fmsg" v-model="form.message" :rows="6"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" :loading="sending" @click="postmsg">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {restbase} from '../config'
    import {blinkBorder} from '../util'
    export default {
        data() {
            return {
                dialogVisible: false,
                form: {
                    username: '',
                    phone: '',
                    category: '',
                    message: ''
                },
                sending:false,
                shaking:false
            }
        },
        mounted() {
            let realroot = this;
            this.$root.$on('shakegb', function(){
                realroot.shaking = true;
                setTimeout(function(){
                    realroot.shaking = false;
                }, 1000);
            });
        },
        methods:{
            postmsg() {
                if (this.form.name === '') {
                    blinkBorder('fname');
                    return;
                }
                if (this.form.phone === '') {
                    blinkBorder('fphone');
                    return;
                }
                if (this.form.category === '') {
                    blinkBorder('fctg');
                    return;
                }
                if (this.form.message === '') {
                    blinkBorder('fmsg');
                    return;
                }
                this.sending = true;
                this.$http.post(restbase() + "api/v1/guestbook",{
                    username:this.form.username,
                    phone:this.form.phone,
                    category:this.form.category,
                    message:this.form.message
                },{emulateJSON:true})
                    .then((response)=>{
                        this.sending = false;
                        let st = response.body.status;
                        if (st.code == 0) {
                            this.dialogVisible = false;
                            this.form.category = '';
                            this.form.message = '';
                            this.$notify({
                                title: '发送成功',
                                message: '您的留言已发送到华兆益生，我们将尽快给您回复，谢谢！',
                                type: 'success',
                                duration:6000
                            });
                        } else {
                        }
                    }, (response)=>{
                        this.sending = false;
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.sending = false;
                        console.log(response);
                    });
            }
        }
    }
</script>

<style>
    .right_fbox {
        width:50px;
        height:50px;
        position: fixed;
        float: right;
        left:50%;
        top:75%;
        z-index: 999;
        margin-left:570px;
        cursor: pointer;
    }
</style>