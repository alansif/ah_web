<template>
	<div>
      <div style="width:100%;height:260px;overflow:hidden;">
        <img src="../assets/report-banner.jpg" style="width:100%;display:block;">
        <div class="rpttitle">
          报告下载
        </div>
      </div>
        <el-table :data="rptList" stripe border :height="600" class="blttable">
          <el-table-column prop="date" label="体检日期">
          </el-table-column>
          <el-table-column prop="wsn" label="体检编号">
          </el-table-column>
          <el-table-column prop="subject" label="类别">
            <template scope="scope">{{scope.row.subject === "YG" ? "乙肝报告" : "体检报告"}}</template>
          </el-table-column>
          <el-table-column width="200">
            <template scope="scope">
              <div style="text-align: center;">
                <a :href="scope.row.url" download><el-button type="primary" size="small">下载</el-button></a>
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
          rptList: this.$root.reportdata
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

  .rpttitle {
    position:relative;
    height:50px;
    top:-95px;
    background-color:rgba(100,149,237,0.5);
    font-size:1.3em;
    color:white;
    padding-left: 20px;
    padding-top: 10px;
  }
</style>