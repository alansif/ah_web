<template>
	<div>
      <div style="width:100%;height:260px;overflow:hidden;">
        <img src="../assets/sch.jpg" style="width:100%;display:block;">
        <div class="bs1title">
          预约
        </div>
      </div>
      <div class="bs1frame">
          <div class="bs1static">
            <el-row style="font-size:12px;">
                <el-col :span="4">体检地点</el-col>
                <el-col :span="20">体检日期</el-col>
            </el-row>
            <el-row style="font-size:20px;line-height:36px;">
                <el-col :span="4">东环分院</el-col>
                <el-col :span="20">2017-6-12</el-col>
            </el-row>
          </div>
          <div class="bs1input">
                      <el-select v-model="timeseg" placeholder="请选择体检时段" style="width:100%;">
                          <el-option-group v-for="(period,moon) in periods" :key="moon" :label="moon" :disabled="moon.disabled">
                              <el-option v-for="item in period" :key="item.PeriodID" :label="item.PeriodName" :value="item.PeriodID"></el-option>
                          </el-option-group>
                      </el-select>
          </div>
          <div class="bs1input">
                      <el-input placeholder="请填写本人身份证号码"></el-input>
          </div>
          <div style="text-align: center;margin-top: 40px;">
              <el-button type="primary" @click="nextstep()">下一步</el-button>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
            timeseg:'',
            periods:{}
        }
      },
      mounted() {
          this.$http.post("http://111.198.146.40:8082/booking/WSOnline.asmx/GetBranchPeriodData2", {
              BranchID: '1'
          }).then((response)=>{
              this.periods = JSON.parse(response.body.d);
          },(response)=>{
              console.log(response);
          }).catch((response)=>{
              console.log(response);
          });
      },
      methods: {
          nextstep() {
              this.$router.push('bkstep2');
          }
      }
  }
</script>

<style>
  .bs1title {
    position:relative;
    height:50px;
    top:-118px;
    background-color:rgba(100,149,237,0.5);
    font-size:1.3em;
    color:white;
      padding-left: 20px;
      padding-top: 10px;
  }
    .bs1frame {
        height:255px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding:24px;
        background-color: #f7f7f7;
    }
    .bs1static {
        height: 62px;
        padding-top: 12px;
        padding-left: 24px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color:#555;
        background-color:white;
        box-shadow:1px 1px 1px #888;
    }
    .bs1input {
        padding-top:16px;
        padding-left:0px;
        width:300px;
    }
</style>