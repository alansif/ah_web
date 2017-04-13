<template>
    <div id="app" style="width:1100px;margin:0 auto;">
        <header>
            <img src="./assets/logo1.png" style="width:200px;"/>
            <el-menu mode="horizontal" default-active="1">
                <el-menu-item index="1"><a href="#about">关于我们</a></el-menu-item>
                <el-menu-item index="2"><a href="#deal">业务办理</a></el-menu-item>
                <el-menu-item index="3"><a href="#knowledge">体检知识</a></el-menu-item>
                <el-menu-item index="4"><a href="#contact">联系我们</a></el-menu-item>
            </el-menu>
        </header>
      <section id="home" style="position:relative;width:100%;text-align:center;">
        <img src="./assets/home.jpg" style="width:100%">
          <div style="align:left;position:absolute;left:0;top:0;padding:5em 8em;">
            <p style="font-size:3em;color:#fff;line-height:20%;">欢迎来到华兆益生</p>
            <p style="font-size:2.5em;color:#fff;">健康管理机构</p>
          </div>
        </section>
      <section id="about" style="position:relative;margin-bottom:2px;">
            <el-row style="background-color:#f3f3f3;">
              <el-col :span="4" style="position:relative;">
                <div style="position:relative;margin-top:35px;margin-left:50px;">
                  <img src="./assets/logo2.png" style="width:100%;"/>
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
        <section id="deal" style="color:#fff;height:auto;text-align: center;">
            <el-row>
                <el-col :span="8" style="position:relative;">
                    <img src=./assets/b1.jpg  style="width:100%;z-index:1;">
                    <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                        <p style="text-align:center;font-size:2em;">会员定制</p>
                        <div>
                            <el-input v-model="idnumber" placeholder="证件号码" style="width:69%;margin:10px 0;"></el-input>
                        </div>
                        <div>
                            <el-input v-model="phonenumber" placeholder="手机号" style="width:69%;margin:10px 0;"></el-input>
                        </div>
                        <div style="margin:10px 0;position: relative;padding:0;">
                            <el-input v-model="vcode" placeholder="手机验证码" style="width:40%;margin:0;"></el-input>
                            <el-button type="primary">发送验证码</el-button>
                        </div>
                        <div style="margin-top: 24px;">
                            <el-button type="primary" style="width:12em;margin:20px 0" @click="jumpto('http://111.198.146.33:8084/PDBC/Logon.aspx')">开始定制</el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" style="position:relative;">
                    <img src=./assets/b2.jpg  style="width:100%;z-index:1;">
                    <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                        <p style="text-align:center;font-size:2em;">查询预约</p>
                        <div>
                            <el-select v-model="institution" placeholder="地点" style="width:70%;margin:10px 0;">
                                <el-option
                                        v-for="item in instopts"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div>
                            <el-date-picker
                                    v-model="datebegin"
                                    type="date"
                                    placeholder="起始日期"
                                    :picker-options="pickerOptions0"
                                    style="width:70%;margin:10px 0;">
                            </el-date-picker>
                        </div>
                        <div>
                            <el-date-picker
                                    v-model="dateend"
                                    type="date"
                                    placeholder="结束日期"
                                    :picker-options="pickerOptions0"
                                    style="width:70%;margin:10px 0;">
                            </el-date-picker>
                        </div>
                        <div><p></p></div>
                        <el-button type="primary" icon="search" style="width:12em;margin:20px 0" @click="jumpto('http://www.advahealth.com/YuYue/YuYue/index.asp')">查询</el-button>
                    </div>
                </el-col>
                <el-col :span="8" style="position:relative;">
                    <img src=./assets/b3.jpg  style="width:100%;z-index:1;">
                    <div style="position:absolute;z-index:2;left:0;top:0;width:100%;">
                        <p style="text-align:center;font-size:2em;">报告下载</p>
                        <div>
                            <el-input v-model="idnumber" placeholder="证件号码" style="width:69%;margin:10px 0;"></el-input>
                        </div>
                        <div>
                            <el-input v-model="phonenumber" placeholder="手机号" style="width:69%;margin:10px 0;"></el-input>
                        </div>
                        <div style="margin:10px 0;position: relative;padding:0;">
                            <el-input v-model="vcode" placeholder="手机验证码" style="width:40%;margin:0;"></el-input>
                            <el-button type="primary">发送验证码</el-button>
                        </div>
                        <div style="margin-top: 24px;">
                            <el-button type="primary" style="width:12em;margin:20px 0" @click="jumpto('http://111.198.146.35:8083/')">下载</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </section>
      <section id="products" style="padding-bottom:50px;margin-bottom:2px;">
        <p style="padding-top:20px;font-size:1.8em;">个检套餐</p>
        <el-row>
          <el-col :span="6">
            <el-card style="width:90%;margin:0 auto;" :body-style="{ padding: '0px' }">
              <div style="width:100%;height:140px;display:block;background-color:#fcc;color:#fff;">
                <div style="padding:30px 10px 20px;font-size:1.3em;">
                健康女人17版
                </div>
                <img src="./assets/femenine-sign.svg" width="40"/>
              </div>
              <div style="width:100%;margin-top:20px;margin-bottom:20px;">
                <p style="font-size:1.2em;">标准价格 6800元</p>
                <p style="font-size:0.8em;color:#888;">TC-JN2017-01</p>
                <br><br>
                  <el-button type="primary" @click="showIdvpkg(0)">了解详情</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card style="width:90%;margin:0 auto;" :body-style="{ padding: '0px' }">
              <div style="width:100%;height:140px;display:block;background-color:#9cf;color:#fff;">
                <div style="padding:30px 10px 20px;font-size:1.3em;">
                  健康男人17版
                </div>
                <img src="./assets/masculine-gender.svg" width="40"/>
              </div>
              <div style="width:100%;margin-top:20px;margin-bottom:20px;">
                <p style="font-size:1.2em;">标准价格 6800元</p>
                <p style="font-size:0.8em;color:#888;">TC-JN2017-00</p>
                <br>
                  <br>
                  <el-button type="primary" @click="showIdvpkg(1)">了解详情</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card style="width:90%;margin:0 auto;" :body-style="{ padding: '0px' }">
              <div style="width:100%;height:140px;display:block;background-color:#fcc;color:#fff;">
                <div style="padding:30px 10px 20px;font-size:1.3em;">
                  健康关怀17版（女）
                </div>
                <img src="./assets/femenine-sign.svg" width="40"/>
              </div>
              <div style="width:100%;margin-top:20px;margin-bottom:20px;">
                <p style="font-size:1.2em;">标准价格 1980元</p>
                <p style="font-size:0.8em;color:#888;">TC-JL2017-00</p>
                <span style="font-size:0.8em;color:#888;">仅限2015年7月14日前入会会员购买</span>
                <br>
                  <br>
                    <el-button type="primary" @click="showIdvpkg(2)">了解详情</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card style="width:90%;margin:0 auto;" :body-style="{ padding: '0px' }">
              <div style="width:100%;height:140px;display:block;background-color:#9cf;color:#fff;">
                <div style="padding:30px 10px 20px;font-size:1.3em;">
                  健康关怀17版（男）
                </div>
                <img src="./assets/masculine-gender.svg" width="40"/>
              </div>
              <div style="width:100%;margin-top:20px;margin-bottom:20px;">
                <p style="font-size:1.2em;">标准价格 1980元</p>
                <p style="font-size:0.8em;color:#888;">TC-JL2017-01</p>
                <span style="font-size:0.8em;color:#888;">仅限2015年7月14日前入会会员购买</span>
                  <br>
                    <br>
                  <el-button type="primary" @click="showIdvpkg(3)">了解详情</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </section>
        <section id="info" style="color:#fff;position:relative;">
            <div style="overflow:hidden;width:100%;position:absolute;">
                <img src="./assets/bg.jpg" style="height:760px;"/>
            </div>
            <el-row>
                <el-col :span="10">
                    <img src="./assets/doctor-b.png" style="height:100%;padding-left:10px;padding-top:60px;"/>
                </el-col>
                <el-col :span="14">
                    <div style="padding:40px 40px 0 10px;">
                        <p style="font-size:2em;text-align:left;">为什么选择我们？</p>
                        <p style="text-align:justify;line-height:150%;text-indent:2em;">
                            华兆益生定位于“顾问式健康体检”，我们除了一流检验设备，超大面积外，更重视在检前、检中、检后为客户提供全面的咨询服务。华兆提倡三讲：讲观念、讲知识、讲解决方案。即讲健康观念，讲医学知识，并针对客户的具体健康问题讲解决方案。我们拒绝流水线式的自动化体检，我们反对“以机代医”，我们努力为客户提供专业的健康顾问服务。</p>
                        <div style="position:relative;margin-top:30px;">
                            <div class="circle" style="position:absolute;top:15px;"></div>
                            <img src="./assets/nurse-head.png" height="40" align="left"
                                 style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                            <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检前咨询</p>
                            <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                                在客户体检前，华兆的健康顾问会根据客户的年龄、性别、工作特点、以往健康状况等资料为其提供建议，做到科学、合理、全面的选择健康体检项目。同时根据客户的实际健康问题安排检查重点。</p>
                        </div>
                        <div style="position:relative;margin-top:30px;">
                            <div class="circle" style="position:absolute;top:15px;"></div>
                            <img src="./assets/doctor-stethoscope.png" height="40" align="left"
                                 style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                            <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检中咨询</p>
                            <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                                客户在体检的过程中，在每个科室都可得到专业医师耐心、详尽的咨询和健康指导。客户还可以在体检中就自己关心的问题与值班医师单独沟通。</p>
                        </div>
                        <div style="position:relative;margin-top:30px;">
                            <div class="circle" style="position:absolute;top:15px;"></div>
                            <img src="./assets/doctor.png" height="40" align="left"
                                 style="margin:30px 30px 20px 15px;position:relative;z-index:3;"/>
                            <p style="text-align:left;font-size:1.2em;margin-bottom:8px;">检后咨询</p>
                            <p style="text-align:justify;line-height:150%;margin-top:8px;text-indent:2em;">
                                人称体检后无人问津的客户为“体检孤儿”，所以对体检结果的详细解读和健康咨询是高品质体检服务的重要表现。华兆的咨询专家全部来自各三甲医院，为客户提供一对一的专业、权威的健康评估和指导。</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </section>
      <section id="knowledge" style="padding:20px;">
        <el-row>
          <el-col :span="18" style="position:relative;">
            <p style="font-size:1.8em;text-align:center;">为什么定期健康体检很重要？</p>
            <div style="color:#888;margin:0 30px 0 30px;text-align:justify;line-height:150%;text-indent:2em;">
              <p>
                健康体检又称健康筛检。即当健康人或亚健康人群的身体还没有明显症状时，就为全身器官进行筛查，以了解身体各器官健康状况，鉴定排查是否有潜在疾病征兆，及时对受检者提出预防、治疗方案或健康建议。
              </p>
              <p>人的身体其实就是一部高速运转的机器，而身体的各器官就象机器零件，一天二十四小时不停运转，存在的隐患会逐渐增多，如果长年不检查，就会出现严重的故障。</p>
              <p>疾病早期没有症状，轻微症状又往往会被忽略，而科学、定期、有效的“健检”能做到早期发现疾病征兆，及早防治，及早消除隐患，使健康状态最大限度得以保持。</p>
              <p>每年一次定期健检，可以建立属于自己的健康“参考值”，作为自身健康状况的指标。若没有了这个参考值，只能采用普遍标准，其针对性较差。</p>
            </div>
          </el-col>
          <el-col :span="6" style="position:relative;">
            <img src="./assets/annual-check-up-img.png" style="height:100%;padding:45px 10px;"/>
          </el-col>
        </el-row>
      </section>
      <section id="process" style="position: relative;">
            <img src="./assets/process-bg2.jpg" style="width: 100%;"/>
            <span style="position: absolute;background-color: rgba(73,155,202,0.9);width: 100%;height:100%;top:0;left:0;"></span>
            <img src="./assets/process-mask.png" style="position:absolute;top:180px;left:90px;width:85%;"/>
            <div style="position:absolute;top:30px;left:0;width:100%;color:#fff;">
                <p style="font-size: 2em;text-align:center;">体检流程</p>
                <div style="position: absolute;left:538px;top:130px;width:100px;height:50px;">
                    <el-tooltip effect="light">
                        <div slot="content">请致电010-83033939，我们的<br>客服专员将为您提供帮助。</div>
                        <div class="circle2">
                            <span class="proctxt">1</span>
                        </div>
                    </el-tooltip>
                    <span style="position: absolute;left:-70px;top:3px;color:#fff;">电话咨询</span>
                </div>
                <div style="position: absolute;left:505px;top:205px;width:100px;height:50px;">
                    <el-tooltip effect="light">
                        <div slot="content">华兆会员可以在网上自助<br>定制体检方案</div>
                        <div class="circle2">
                            <span class="proctxt">2</span>
                        </div>
                    </el-tooltip>
                    <span style="position: absolute;left:-102px;top:3px;color:#fff;">会员在线定制</span>
                </div>
                <div style="position: absolute;left:240px;top:240px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">3</span>
                    </div>
                    <span style="position: absolute;left:-40px;top:-25px;color:#fff;">电话或网上预约</span>
                </div>
                <div style="position: absolute;left:140px;top:350px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">4</span>
                    </div>
                    <span style="position: absolute;left:-35px;top:35px;color:#fff;">准时赴约体检</span>
                </div>
                <div style="position: absolute;left:370px;top:350px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">5</span>
                    </div>
                    <span style="position: absolute;left:-18px;top:-30px;color:#fff;">前台登记</span>
                </div>
                <div style="position: absolute;left:600px;top:330px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">6</span>
                    </div>
                    <span style="position: absolute;left:-35px;top:35px;color:#fff;">完成健康调查</span>
                </div>
                <div style="position: absolute;left:820px;top:327px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">7</span>
                    </div>
                    <span style="position: absolute;left:-1px;top:-28px;color:#fff;">更衣</span>
                </div>
                <div style="position: absolute;left:995px;top:400px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">8</span>
                    </div>
                    <span style="position: absolute;left:-85px;top:3px;color:#fff;">体检和就餐</span>
                </div>
                <div style="position: absolute;left:740px;top:460px;width:100px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">9</span>
                    </div>
                    <span style="position: absolute;left:-41px;top:35px;color:#fff;">完成体检并更衣</span>
                </div>
                <div style="position: absolute;left:540px;top:580px;width:150px;height:50px;">
                    <div class="circle2">
                        <span class="proctxt">10</span>
                    </div>
                    <span style="position: absolute;left:-75px;top:35px;color:#fff;">7个工作日后下载体检报告</span>
                </div>
            </div>
        </section>
        <section id="contact" style="padding-bottom:2em;margin-top: 20px;">
            <el-row>
                <el-col :span="8" style="padding:0 2em;">
                    <p style="text-align:center;font-size:1.8em;">联系方式</p>
                    <div style="text-align:left;color:#888;">
                        <p>服务电话：010-83033939 </p>
                        <p>(周一至周五 8:30—17:30 节假日除外)</p>
                        <p>email：adva@advahealth.com</p>
                    </div>
                </el-col>
                <el-col :span="8" style="padding:0 2em;">
                    <p style="text-align:center;font-size:1.8em;">东环分院</p>
                    <div style="text-align:left;color:#888;line-height:160%;">
                        <p>地址：北京市东城区东中街9号东环广场A座二层</p>
                    </div>
                    <el-button type="primary" @click="dialogVisibleEast = true">查看地图</el-button>
                </el-col>
                <el-col :span="8" style="padding:0 2em;">
                    <p style="text-align:center;font-size:1.8em;">西环分院</p>
                    <div style="text-align:left;color:#888;line-height:160%;">
                        <p>地址：北京市西城区北展北街11号华远企业中心9号楼一层</p>
                    </div>
                    <el-button type="primary" @click="dialogVisibleWest = true">查看地图</el-button>
                </el-col>
            </el-row>
        </section>
        <div style="text-align:center;color:#888;">
            <p>京ICP备05027604号</p>
        </div>
      <el-dialog :title="tableData.name" v-model="dialogVisibleProd">
        <el-table :data="tableData.items" :row-class-name="tableRowClassName" style="width:100%" height="500">
          <el-table-column prop="name" label="项目" width="150"></el-table-column>
          <el-table-column prop="descr" label="说明"></el-table-column>
        </el-table>
      </el-dialog>
        <el-dialog title="东环分院" v-model="dialogVisibleEast">
            <img src="./assets/east.jpg" style="width:100%;"/>
            <div style="padding:0px 40px;">
                <dl>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">地址</dt>
                    <dd style="margin-left:60px;">东城区东中街9号东环广场A座二层</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">公交</dt>
                    <dd style="margin-left:60px;">地铁2号线东直门站C出口，东方银座南侧即到东环广场</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">驾车</dt>
                    <dd style="margin-left:60px;">二环东直门桥向东，第一个丁字路口向南拐，进入东中街100米即到东环广场</dd>
                </dl>
            </div>
        </el-dialog>
        <el-dialog title="西环分院" v-model="dialogVisibleWest">
            <img src="./assets/west.jpg" style="width:100%;"/>
            <div style="padding:0px 40px;">
                <dl>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">地址</dt>
                    <dd style="margin-left:60px;">西城区北展北街11号华远企业中心9号一层</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">公交</dt>
                    <dd style="margin-left:60px;">乘16、26、85、87、438、651快、运通105城铁西直门站下车，往北（立交桥反方向）第一个红绿灯左转直行300米路北即到</dd>
                    <dt style="width:40px;text-align:center;font-weight:bold;float:left;">驾车</dt>
                    <dd style="margin-left:60px;">
                        A.自北三环方向至体检中心，蓟门桥向南走西土城路至西直门北大街，右转进入西直门外大街辅路，第一个路口右转进入高粱桥路， 沿高粱桥路直行300米第一个丁字路口左转进入北展北街，直行300米路北即到；<br>
                        B.自西二环方向至体检中心，过官园桥由高粱桥路出口出主路，左转进入西直门外大街西行，沿路标右转进入高粱桥路，自高粱桥路直行300米第一个红绿灯左转进入北展北街，直行300米路北即到

                    </dd>
                </dl>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import jkgh17men   from "./assets/idvpackages/jkgh17men";
  import jkgh17women from "./assets/idvpackages/jkgh17women";
  import jknr17men   from "./assets/idvpackages/jknr17men";
  import jknr17women from "./assets/idvpackages/jknr17women";
    export default {
        data () {
            return {
                msg: '华兆益生',
                institution: "",
                instopts: [{value: 'east', label: '东环分院'}, {value: 'west', label: '西环分院'}],
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                datebegin: "",
                dateend: "",
                dialogVisibleEast: false,
                dialogVisibleWest: false,
                dialogVisibleProd: false,
                idnumber: "",
                phonenumber: "",
                vcode:"",
                tableData: {},
                idvpkg:[jknr17women(),jknr17men(),jkgh17women(),jkgh17men()]
            }
        },

        methods: {
            startHacking () {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                });
            },
            showIdvpkg(i) {
                this.tableData = this.idvpkg[i];
                this.dialogVisibleProd = true;
            },
            tableRowClassName(row, index) {
                if (row.descr.length === 0) {
                    return 'sec-row';
                }
                return '';
            },
            jumpto(addr) {
                window.open(addr);
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
        position: relative;
        -webkit-text-size-adjust: 100%;
    }

    .el-menu {
        background: #fff;
        top: 5px;
        right: 0;
        z-index: 3;
        float: right;
    }

    header {
        background: #fff;
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
    }

    section {
        border-bottom: 1px solid #999;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .circle {
        background: #7370b5;
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }

    .circle2 {
        position:absolute;
        top:0;
        left:0;
        background: #fff;
        color: rgba(73,155,202,0.9);
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    .circle3 {
        border-radius: 50%;
        border:5px solid #f00;
        width: 60px;
        height: 60px;
    }

    .proctxt {
        position:absolute;
        top:0;
        left:0;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        vertical-align:middle;
    }

    .el-table .sec-row {
        background: #e2f0e4;
    }
</style>
