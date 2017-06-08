<template>
	<div>
      <div style="width:100%;height:260px;overflow:hidden;">
        <img src="../assets/sch.jpg" style="width:100%;display:block;">
        <div class="bs1title">
          预约
        </div>
      </div>
      <div class="bs1frame">
          <div class="bs1input">
            <el-row>
                <el-col :span="8">体检地点</el-col>
                <el-col :span="16">东环分院</el-col>
            </el-row>
            <el-row>
                <el-col :span="8">体检日期</el-col>
                <el-col :span="16">2017-6-12</el-col>
            </el-row>
              <el-row>
                  <el-col :span="8">体检时段</el-col>
                  <el-col :span="16">
                      <el-select v-model="timeseg" placeholder="请选择">
                          <el-option-group v-for="group in ampm" :key="group.label" :label="group.label" :disabled="group.disabled">
                              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                          </el-option-group>
                      </el-select>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="8">身份证</el-col>
                  <el-col :span="16">
                      <el-input placeholder="请填写本人身份证号码"></el-input>
                  </el-col>
              </el-row>
              <div style="text-align: right;margin-top: 40px;">
                  <el-button type="primary">下一步</el-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
            ampm:[{
                label:'上午时段',
                options:[{value:'a1',label:'8:00-9:00'}]
            },{
                label:'下午时段',
                options:[{value:'p1',label:'18:00-19:00'},{value:'p2',label:'19:00-20:00'}],
                disabled:true
            }],
            timeseg:''
        }
      },
      methods: {
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
        height:360px;
        border: 1px solid cornflowerblue;
        border-radius: 2px;
        padding:24px;
    }
    .bs1input {
        line-height: 48px;
        height:280px;
        margin: 10px auto;
        width: 300px;
        padding: 28px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f7f7f7;
        color:#666;
    }
</style>