<template>
	<div>
      <div style="width:100%;height:260px;overflow:hidden;">
        <img src="../assets/sch.jpg" style="width:100%;display:block;">
        <div class="bookingtitle">
          查询预约 - {{this.$root.schbranch==='1'?'东环分院':'西环分院'}}
        </div>
      </div>
        <el-table :data="schList" stripe border :height="600" class="blttable">
          <el-table-column prop="date" label="日期">
          </el-table-column>
          <el-table-column label="上午">
            <el-table-column prop="mAM" label="男士额度余量">
            </el-table-column>
            <el-table-column prop="wAM" label="女士额度余量">
            </el-table-column>
          </el-table-column>
          <el-table-column label="下午">
            <el-table-column prop="mPM" label="男士额度余量">
            </el-table-column>
            <el-table-column prop="wPM" label="女士额度余量">
            </el-table-column>
          </el-table-column>
          <el-table-column width="200">
            <template scope="scope">
              <div style="text-align: center;">
                <el-button type="primary" size="small" :disabled="scope.row.available==='false'">预约</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
  export default {
      data() {
      return {
          schList: this.$root.schdata
      }
    },
    methods: {
    }
  }
</script>

<style>
  .blttable {
    border: 1px solid cornflowerblue;
    border-radius: 2px;
    width: 100%;
    color: #777;
  }

  .el-tabs__header {
    margin-bottom: 1px;
    background-color: #f7f7f7;
  }

  .bookingtitle {
    position:relative;
    height:50px;
    top:-118px;
    background-color:rgba(100,149,237,0.5);
    font-size:1.3em;
    color:white;
    padding-left: 20px;
    padding-top: 10px;
  }
</style>