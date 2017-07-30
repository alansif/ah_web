<template>
    <section id="why" style="color:#fff;position:relative;margin-top: 40px;margin-bottom: 40px;">
        <div style="overflow:hidden;width:100%;position:absolute;">
            <img src="../assets/bg.jpg" style="height:760px;"/>
        </div>
        <el-row>
            <el-col :span="10">
                <img src="../assets/doctor-b1.png" style="width:100%;padding-left:10px;padding-top:90px;"/>
            </el-col>
            <el-col :span="14">
                <div style="padding:36px 50px 0 30px;">
                    <p style="font-size:2em;text-align:left;">为什么选择我们？</p>
                    <p style="text-align:justify;line-height:150%;text-indent:2em;">
                        华兆益生定位于“顾问式健康体检”，我们除了一流检验设备，超大面积外，更重视在检前、检中、检后为客户提供全面的咨询服务。华兆提倡三讲：讲观念、讲知识、讲解决方案。即讲健康观念，讲医学知识，并针对客户的具体健康问题讲解决方案。我们拒绝流水线式的自动化体检，我们反对“以机代医”，我们努力为客户提供专业的健康顾问服务。</p>
                    <div class="why1">
                        <div class="circle whycp""></div>
                        <img src="../assets/doctor.png" height="40" align="left" class="whyimg"/>
                        <p class="whyt">医疗质量</p>
                        <p class="whyp">
                            从2005年至今，华兆每年服务5万多名客户。我们的第一目标是医疗质量而非业务规模。我们深知控制医疗质量如履薄冰，鉴于有限的能力和资源，以高品质的医疗服务专注于长期客户是我们定位和发展策略。
                        </p>
                    </div>
                    <div class="why1">
                        <div class="circle whycp""></div>
                        <img src="../assets/list-6.png" height="40" align="left" class="whyimg"/>
                        <p class="whyt">个性定制</p>
                        <p class="whyp">
                            华兆为会员客户提供个性化定制体检产品服务。会员服务部根据客户的年龄、生活习惯、家族病史、个人关注及健康状况等信息为客户提供个性化体检方案，合理、全面的设计健康体检项目，让体检物有所值。
                        </p>
                    </div>
                    <div class="why1">
                        <div class="circle whycp""></div>
                        <img src="../assets/calendar-36.png" height="40" align="left" class="whyimg"/>
                        <p class="whyt">全周期复检</p>
                        <p class="whyp">
                            例行体检结束后，对异常数据的关注与监测至关重要。华兆在体检后3-9个月对异常数据进行免费复查。华兆倡导的体检理念是“例行”加“监测”，为客户提供更高的安全价值。
                        </p>
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

    .whycp {
        position:absolute;
        top:25px;
    }

    .why1 {
        position:relative;
        margin-top:24px;
    }

    .whyimg {
        margin:40px 30px 40px 15px;
        position:relative;
        z-index:3;
    }

    .whyt {
        text-align:left;
        font-size:1.2em;
        margin-bottom:8px;
    }

    .whyp {
        text-align:justify;
        line-height:150%;
        margin-top:8px;
        text-indent:2em;
    }
</style>