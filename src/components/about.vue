<template>
    <section id="about" style="position:relative;margin-bottom:2px;">
        <el-row style="background-color:#f3f3f3;">
            <el-col :span="4" style="position:relative;">
                <div style="position:relative;margin-top:35px;margin-left:50px;">
                    <img src="../assets/logo2.png" style="width:100%;"/>
                </div>
            </el-col>
            <el-col :span="20" style="padding:10px 60px 5px 40px;">
                <p style="text-align:justify;font-size:1.2em;line-height:200%;color:#888;text-indent:2em;">
                    华兆益生是一家为企业和个人提供健康体检与健康管理服务的医疗机构，拥有两家体检中心和一个健康管理中心。我们集优质的医疗资源和人性化服务流程于一体，追求卓越的医疗质量和客户体验。我们致力于与客户建立终身服务关系，长期专注于客户的健康状况，以提高客户的生活质量为使命。</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" style="position:relative;">
                <div style="position:relative;margin:0 30px;">
                    <p style="position:relative;text-align:justify;line-height:200%;font-size:1.2em;color:#888;">
                        <span style="font-size:1.8em;font-weight:bold;color:#f00;z-index:3;vertical-align:middle;">华</span>&#12288;华兆益生立足中华，为健康中国而努力工作。
                    </p>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <div style="position:relative;margin:0 30px;">
                    <p style="position:relative;text-align:justify;line-height:200%;font-size:1.2em;color:#888;">
                        <span style="font-size:1.8em;font-weight:bold;color:#f00;z-index:3;vertical-align:middle;">兆</span>&#12288;预兆之意，华兆益生秉承预防为主的先进健康管理理念，对客户实施早预防、早治疗，成就客户健康丰富的人生。
                    </p>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <div style="position:relative;margin:0 30px;">
                    <p style="position:relative;text-align:justify;line-height:200%;font-size:1.2em;color:#888;">
                        <span style="font-size:1.8em;font-weight:bold;color:#f00;z-index:3;vertical-align:middle;">益生</span>&#12288;是医生和一生的谐音，健康管理非一时一事之功而需终生关怀、帮助和引导，因此益生更深层的含义是投资健康，受益终生！
                    </p>
                </div>
            </el-col>
        </el-row>
        <!--      <h1>欢迎来到{{msg}}</h1>
              <el-button @click.native="startHacking">Let's do it</el-button>  -->
    </section>
</template>

<script>
    export default {
        data() {
            return {
                msg: '华兆益生'
            }
        },
        methods: {
            startHacking () {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                });
            }
        }
    }
</script>