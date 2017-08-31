<template>
    <div class="dccframe">
        <el-table stripe ref="opttable" :data="optionals">
            <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
            <el-table-column label="说明" prop="RcommandSource" :width="618"></el-table-column>
            <el-table-column label="分类" prop="Type" :width="140"></el-table-column>
            <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {restbase} from '../config'
    export default {
        data() {
            return {
                optionals: this.$root.ctminfo.chklist
            }
        }
    }
</script>

<style>
    .dccframe {
        margin:0 auto;
        width:100%;
        padding-bottom:4px;
        border-radius: 4px;
        box-shadow: 2px 2px 2px #888;
        background-color: white;
        margin-bottom: 40px;
    }
</style>