<template>
    <div id="mapp">
		<div style="width:100%;">
			<img src="../assets/logo1.png" style="width:25%;display:inline-block;vertical-align:middle;">
			<span style="margin-left:2rem;">欢迎来到华兆益生</span>
		</div>
		<div style="margin-top:0.2rem;text-align:center;background-color:#eee;height:0.2rem;">
		</div>
		<div style="text-align:center;">
			<div class="rptframe">
				<p style="font-size:1.2rem;">报告查阅</p>
				<div style="margin:0 15%;">
                    <div style="margin:12px 0;">
                        <el-input v-model="idnumber2" placeholder="证件号码" :maxlength="18" style="width:100%;"
                                  onkeypress="return event.charCode!=32">
                        </el-input>
                    </div>
                    <div style="margin:12px 0;">
                        <el-input v-model="phonenumber2" placeholder="手机号" :maxlength="11" style="width:100%;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
                        </el-input>
                    </div>
					<el-row>
						<el-col :span="12" style="text-align:left;">
							<el-input v-model="vcode2" placeholder="手机验证码" :maxlength="6" style="width:100%;"
                                  onkeypress="return event.charCode>=48 && event.charCode <=57">
							</el-input>
						</el-col>
						<el-col :span="11" :offset="1">
							<timerbtn ref="tb2" type="primary" :loading="vcloading" @run="sendverify" style="width:100%;height:36px;margin:0;font-size:13px;">发送</timerbtn>
						</el-col>
					</el-row>
                    <div style="height:20px;text-align:left;font-size:14px;" :style="{color:tips2color}">{{tips2}}</div>
				</div>
                <div style="margin-bottom:0.6rem;">
                    <el-button type="primary" style="width:40%;margin:20px 0" :loading="rptloading" @click="download">查询报告</el-button>
				</div>
			</div>
		</div>
		<div v-show="showtable">
			<el-table :data="rptList" stripe :height="300" class="tbl">
			  <el-table-column prop="date" label="体检日期" width="120">
			  </el-table-column>
			  <el-table-column prop="subject" label="文件类别">
				<template scope="scope">{{scope.row.subject === "YG" ? "乙肝报告" : "体检报告"}}</template>
			  </el-table-column>
			  <el-table-column>
				<template scope="scope">
				  <div style="text-align: center;">
					<a :href="scope.row.url"><el-button type="primary" size="small">获取</el-button></a>
				  </div>
				</template>
			  </el-table-column>
			</el-table>
		</div>
		<div style="text-align:center;">
			<a href="/home" style="text-decoration: none;">
				<el-button type="text">访问华兆益生电脑版主页</el-button>
			</a>
		</div>
    </div>
</template>

<script>
    import {restbase} from '../config'
    import timerbtn from '../components/timerbtn.vue'
    export default{
		data() {
			return {
                idnumber2: "",
                phonenumber2: "",
                vcode2:"",
                tips2:"",
                tips2color:"#f55",
				vcloading:false,
                rptloading:false,
				showtable:false,
				rptList: []
			}
		},
        methods: {
            sendverify() {
                this.idnumber2 = this.idnumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber2.length === 0) {
                    this.tips2color = '#f55';
                    this.tips2 = "请填写证件号码";
                    return;
                }
                this.phonenumber2 = this.phonenumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.phonenumber2.length !== 11) {
                    this.tips2color = '#f55';
                    this.tips2 = "手机号码格式不正确";
                    return;
                }
                this.tips2 = "";
                this.vcloading=true;
                this.$http.post(restbase() + "api/v1/verifycode",{id:this.idnumber2,phone:this.phonenumber2},{emulateJSON:true})
                    .then((response)=>{
                    	this.vcloading=false;
                        let st = response.body.status;
                        this.tips2 = st.description;
                        if (st.code == 0) {
                          this.tips2color = '#0A0';
                          this.$refs.tb2.start();
                        } else {
                            this.tips2color = '#f55';
                        }
                    }, (response)=>{
                        this.vcloading=false;
                        this.tips2color = '#f55';
                        this.tips2='出错了';
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.vcloading=false;
                        this.tips2color = '#f55';
                        this.tips2='出错了';
                        console.log(response);
                    });
            },
            download() {
                this.idnumber2 = this.idnumber2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.idnumber2.length === 0) {
                    this.tips2color = '#f55';
                    this.tips2 = "请填写证件号码";
                    return;
                }
                this.vcode2 = this.vcode2.replace(/^\s+/, "").replace(/\s+$/, "");
                if (this.vcode2.length !== 6) {
                    this.tips2color = '#f55';
                    this.tips2 = "请正确填写验证码";
                    return;
                }
                this.tips2 = "";
                this.rptloading=true;
				this.showtable=false;
                this.$http.get(restbase() + `api/v1/user/${this.idnumber2}/report`, {params:{vcode:this.vcode2}})
                    .then((response)=>{
                        this.rptloading=false;
                        let st = response.body.status;
                        if (st.code == 0) {
                            this.rptList = response.body.data;
                            this.showtable = true;
                        } else {
                            this.tips2 = st.description;
                            this.tips2color = '#f55';
                        }
                    }, (response)=>{
                        this.rptloading=false;
                        console.log(response);
                    })
                    .catch((response)=>{
                        this.rptloading=false;
                        console.log(response);
                    });
            }
		},
        components:{
          timerbtn
        }
   }
</script>

<style>
    .rptframe {
		position:relative;
		width:90%;
		border:1px solid #ddd;
		border-radius:8px;
        box-shadow: 1px 1px 1px #888;
		text-align:center;
		margin:4px auto;
		background-color:white;
	}
    .tbl {
		width:90%;
		border:1px solid #ddd;
		border-radius:8px;
        box-shadow: 1px 1px 1px #888;
		margin:6px auto;
	}
</style>