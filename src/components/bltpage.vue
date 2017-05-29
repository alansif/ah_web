<template>
	<div>
      <div style="width:100%;height:260px;overflow:hidden;">
        <img src="../assets/physician.jpg" style="width:100%;display:block;">
        <div class="blttitle">
          新闻&公告
        </div>
      </div>
    <el-tabs v-model="activeName2" @tab-click="handleClick" class="blttab">
      <el-tab-pane label="新闻公告" name="news">
        <el-table :data="newsData" :height="600" :show-header="false" class="blttable">
          <el-table-column
            prop="title"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            width="200">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="勘误声明" name="errata">
        <el-table :data="errataData" :height="600" :show-header="false" class="blttable">
          <el-table-column
            prop="title"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            width="200">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       activeName2: 'news',
       newsData:[
         {title:"2017春节放假通知",date:"2016-12-10"},
         {title:"2017端午节放假通知",date:"2017-5-1"},
         {title:"2017国庆节放假通知",date:"2017-9-12"}
         ],
       errataData:[
         {title:"勘误声明A",date:"2016-2-10"},
         {title:"勘误声明B",date:"2017-5-11"}
         ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
  .blttab {
    border: 1px solid cornflowerblue;
    border-radius: 2px;
  }

  .blttable {
    width: 100%;
    color: #777;
  }

  .el-tabs__header {
    margin-bottom: 1px;
    background-color: #f7f7f7;
  }

  .blttitle {
    position:relative;
    height:50px;
    top:-116px;
    background-color:rgba(100,149,237,0.5);
    font-size:1.3em;
    color:white;
    padding-left: 20px;
    padding-top: 10px;
  }
</style>