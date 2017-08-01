<template>
    <section id="why" style="color:#fff;position:relative;margin-top: 40px;margin-bottom: 40px;">
        <div style="overflow:hidden;width:100%;position:absolute;">
            <img src="../assets/bg.jpg" style="height:760px;"/>
        </div>
        <el-row>
            <el-col :span="10">
                <img src="../assets/doctor-b1.png" style="width:100%;padding-left:35px;padding-top:90px;"/>
            </el-col>
            <el-col :span="14">
                <div style="padding:50px 55px 0 50px;">
                    <p style="font-size:2em;text-align:left;">为什么选择我们？</p>
                    <div class="why1">
                        <div class="circle whycp"></div>
                        <img src="../assets/doctor.png" weight="40" height="40" align="left" class="whyimg"/>
                        <p class="whyt">医疗质量</p>
                        <p class="whyp">
                            从2005年至今，华兆每年服务5万多名客户。我们的第一目标是医疗质量而非业务规模。我们深知控制医疗质量如履薄冰，鉴于有限的能力和资源，以高品质的医疗服务专注于长期客户是我们定位和发展策略。
                        </p>
                    </div>
                    <div class="why1">
                        <div class="circle whycp"></div>
                        <img src="../assets/list-6.png" weight="40" height="40" align="left" class="whyimg"/>
                        <p class="whyt">个性定制</p>
                        <p class="whyp">
                            华兆为会员客户提供个性化定制体检产品服务。会员服务部根据客户的年龄、生活习惯、家族病史、个人关注及健康状况等信息为客户提供个性化体检方案，合理、全面的设计健康体检项目，让体检物有所值。
                        </p>
                    </div>
                    <div class="why1">
                        <div class="circle whycp"></div>
                        <img src="../assets/calendar-36.png" weight="40" height="40" align="left" class="whyimg"/>
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
        width: 72px;
        height: 72px;
    }

    .whycp {
        position:absolute;
        top:5px;
    }

    .why1 {
        position:relative;
        margin-top:30px;
    }

    .whyimg {
        margin:21px 30px 80px 16px;
        position:relative;
        z-index:3;
    }

    .whyt {
        text-align:left;
        font-size:1.4em;
        margin-bottom:8px;
    }

    .whyp {
        font-size:1.1em;
        text-align:justify;
        line-height:170%;
        margin-top:8px;
        text-indent:2em;
    }
</style>