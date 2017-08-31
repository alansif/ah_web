<template>
    <div class="dccframe">
        <el-collapse value="2">
            <el-collapse-item title="基础项目" name="1">
                <el-table stripe :data="essential">
                    <el-table-column label="项目" prop="项目" :width="170"></el-table-column>
                    <el-table-column label="说明" prop="说明" :width="770"></el-table-column>
                    <el-table-column label="分类" prop="分类" :width="120"></el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="定制项目" name="2">
                <el-table stripe ref="opttable" :data="optionals">
                    <el-table-column label="项目" prop="GNAME" :width="230"></el-table-column>
                    <el-table-column label="说明" prop="RcommandSource" :width="580"></el-table-column>
                    <el-table-column label="分类" prop="Type" :width="140"></el-table-column>
                    <el-table-column label="价格" prop="Price" :width="110" align="right"></el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import {restbase} from '../config'
    export default {
        data() {
            return {
                essential: this.$root.ctminfo.essential,
                optionals: this.$root.ctminfo.chklist
            }
        }
    }
</script>

<style>
    .dccframe {
        margin:0 auto;
        width:100%;
        box-shadow: 5px 5px 5px #888;
    }
</style>