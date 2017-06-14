<template>
    <div>
        <div style="width:100%;height:260px;overflow:hidden;">
            <img src="../assets/sch.jpg" style="width:100%;display:block;">
            <div class="bs2title">
                预约
            </div>
        </div>
        <div class="bs2frame">
            <div class="bs2static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">体检地点</el-col>
                    <el-col :span="4">体检日期</el-col>
                    <el-col :span="4">体检时段</el-col>
                    <el-col :span="4">姓名</el-col>
                    <el-col :span="8">身份证号</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;">
                    <el-col :span="4">东环分院</el-col>
                    <el-col :span="4">2017-6-12</el-col>
                    <el-col :span="4">8:00-9:00</el-col>
                    <el-col :span="4">猪八戒</el-col>
                    <el-col :span="8">110101111111111111</el-col>
                </el-row>
            </div>
            <div class="bs2static">
                <el-row style="font-size:12px;">
                    <el-col :span="4">手机号码</el-col>
                    <el-col :span="20">验证码</el-col>
                </el-row>
                <el-row style="font-size:20px;line-height:36px;position: relative;">
                    <el-col :span="4">{{bkphone}}</el-col>
                    <el-col :span="20">
                        <el-input v-model="vcode" placeholder="手机验证码" :maxlength="6" style="width:120px;top:-4px;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                        <timerbtn ref="tb" type="primary" style="height:30px;font-size:12px;padding-top:8px;top:-4px;position:relative;" @run="sendverify()">发送验证码</timerbtn>
                    </el-col>
                </el-row>
            </div>
            <div style="text-align: center;margin-top: 40px;">
                <el-button type="primary">提交预约</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import timerbtn from './timerbtn.vue'
    export default {
        data() {
            return {
                vcode:'',
                bkphone:this.$root.bkphone
            }
        },
        methods: {
            sendverify() {
            }
        },
        components: {
            timerbtn
        }
    }
</script>

<style>
    .bs2title {
        position: relative;
        height: 50px;
        top: -118px;
        background-color: rgba(100, 149, 237, 0.5);
        font-size: 1.3em;
        color: white;
        padding-left: 20px;
        padding-top: 10px;
    }
    .bs2frame {
        height: 255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding: 24px;
        background-color: #f7f7f7;
    }
    .bs2static {
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
    .el-input__inner {
        height:30px;
    }
</style>