<template>
    <section id="why" style="color:#fff;position:relative;">
        <div style="overflow:hidden;width:100%;position:absolute;">
            <img src="../assets/bg.jpg" style="height:760px;"/>
        </div>
        <el-row>
            <el-col :span="10">
                <img src="../assets/doctor-b.png" style="height:100%;padding-left:10px;padding-top:60px;"/>
            </el-col>
            <el-col :span="14">
                <div style="padding:40px 40px 0 10px;">
                    <p style="font-size:2em;text-align:left;">为什么选择我们？</p>
                    <p style="text-align:justify;line-height:150%;text-indent:2em;">
                        华兆益生定位于“顾问式健康体检”，我们除了一流检验设备，超大面积外，更重视在检前、检中、检后为客户提供全面的咨询服务。华兆提倡三讲：讲观念、讲知识、讲解决方案。即讲健康观念，讲医学知识，并针对客户的具体健康问题讲解决方案。我们拒绝流水线式的自动化体检，我们反对“以机代医”，我们努力为客户提供专业的健康顾问服务。</p>
                    <div style="position:relative;margin-top:30px;">
                        <div class="circle" style="position:absolute;top:15px;"></div>
                        <img src="../assets/nurse-head.png" height="40" align="left"
                             style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                        <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检前咨询</p>
                        <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                            在客户体检前，华兆的健康顾问会根据客户的年龄、性别、工作特点、以往健康状况等资料为其提供建议，做到科学、合理、全面的选择健康体检项目。同时根据客户的实际健康问题安排检查重点。</p>
                    </div>
                    <div style="position:relative;margin-top:30px;">
                        <div class="circle" style="position:absolute;top:15px;"></div>
                        <img src="../assets/doctor-stethoscope.png" height="40" align="left"
                             style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                        <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检中咨询</p>
                        <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                            客户在体检的过程中，在每个科室都可得到专业医师耐心、详尽的咨询和健康指导。客户还可以在体检中就自己关心的问题与值班医师单独沟通。</p>
                    </div>
                    <div style="position:relative;margin-top:30px;">
                        <div class="circle" style="position:absolute;top:15px;"></div>
                        <img src="../assets/doctor.png" height="40" align="left"
                             style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                        <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检后咨询</p>
                        <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                            人称体检后无人问津的客户为“体检孤儿”，所以对体检结果的详细解读和健康咨询是高品质体检服务的重要表现。华兆的咨询专家全部来自各三甲医院，为客户提供一对一的专业、权威的健康评估和指导。</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style>
    .circle {
        background: #7370b5;
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }
</style>