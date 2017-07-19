<template>
    <section id="contact" style="padding-bottom:2em;margin-top: 20px;">
        <el-row>
            <el-col :span="8" style="padding:0 2em;">
                <p style="text-align:left;font-size:1.2em;margin-bottom: 0;">联系方式</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="13" style="padding:0 2em;">
                <div style="text-align:left;color:#888;">
                    <p>客服电话：010-83033939 (周一至周五 8:30—17:30 节假日除外)</p>
                    <p>东环分院地址：北京市东城区东中街9号东环广场A座二层</p>
                    <p>西环分院地址：北京市西城区北展北街11号华远企业中心9号楼一层</p>
                    <el-button type="primary" @click="showmap">查看地图</el-button>
                </div>
            </el-col>
            <el-col :span="6" style="text-align:left;color:#888;">
                <p><img src="../assets/mail.png" class="jdico">email：adva@advahealth.com</p>
                <a href="https://mall.jd.com/index-143982.html" target="_blank" class="jdlink"><p><img src="../assets/jd.jpg" class="jdico">访问华兆益生京东旗舰店</p></a>
                <a href="http://weibo.com/huazhaoyisheng" target="_blank" class="jdlink"><p><img src="../assets/weibo.png" class="jdico">关注华兆益生官方微博</p></a>
            </el-col>
            <el-col :span="5" style="padding:0 10px;color:#888;">
                <img src="../assets/qrwx.jpg" width="140" height="140" style="display: block;margin:0 auto;"/>
                <img src="../assets/weixin.png" class="jdico" style="vertical-align: middle;"><span style="font-size: 12px;">华兆益生微信公众号</span>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods:{
            showmap() {
                this.$router.push('/location');
            }
        }
    }
</script>

<style>
    .jdlink:link {color:#888;}
    .jdlink:visited {color:#888;}
    .jdlink:hover {color:lightskyblue;}
    .jdlink:active {color:#888;}

    .jdico{
        vertical-align: text-bottom;
        margin-right: 4px;
    }
</style>