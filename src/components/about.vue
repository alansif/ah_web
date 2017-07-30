<template>
    <section id="about" style="position:relative;margin-bottom:2px;">
        <el-row style="background-color:white;">
            <el-col :span="3" style="position:relative;">
                <div style="position:relative;margin-top:25px;margin-left:32px;">
                    <img src="../assets/logo2.png" style="width:100%;"/>
                </div>
            </el-col>
            <el-col :span="21" style="padding:0 60px 5px 40px;">
                <p style="text-align:justify;font-size:1.2em;line-height:200%;color:#888;text-indent:2em;">
                    华兆益生是一家为个人客户和企业客户提供健康体检服务的医疗机构。我们集优质的医疗资源和人性化服务流程于一体，追求卓越的医疗质量和客户体验。我们致力于与客户建立终身服务关系，长期专注于客户的健康状况，以提高客户的生活质量为使命。</p>
            </el-col>
        </el-row>
        <el-row style="background-color: #f3f3f3;">
            <el-col :span="8" style="position:relative;">
                <div class="sy">
                    <p class="suyuan">
                        <span class="bigword">华</span>&#12288;华兆益生立足中华，为健康中国而努力工作。
                    </p>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <div class="sy">
                    <p class="suyuan">
                        <span class="bigword">兆</span>&#12288;预兆之意，华兆益生秉承预防为主的健康管理理念，对客户实施早预防、早治疗，成就客户健康丰富的人生。
                    </p>
                </div>
            </el-col>
            <el-col :span="8" style="position:relative;">
                <div class="sy">
                    <p class="suyuan">
                        <span class="bigword">益生</span>&#12288;是“一生”的谐音，健康管理非一时一事之功而需终身关怀、帮助和引导。益生更深层的含义是投资健康，受益终生。
                    </p>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<style>
    .sy {
        position:relative;
        margin:0 30px;
    }

    .suyuan {
        position:relative;
        text-align:justify;
        line-height:200%;
        font-size:1.2em;
        color:#888;
    }

    .bigword {
        font-size:1.8em;
        font-weight:bold;
        color:#f00;z-index:3;
        vertical-align:middle;
    }
</style>