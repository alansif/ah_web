<template>
    <el-checkbox-group v-model="cursel">
        <el-checkbox v-for="item in items" :key="item.Aid" :label="item.Aid" @change="change(item.Aid)">{{item.Answer}}</el-checkbox>
    </el-checkbox-group>
</template>

<script>
    export default {
        props: ['items','qid','curselext','qobj'],
        data() {
            return {
                cursel: this.curselext || []
            }
        },
        watch:{
            curselext(v) {
                this.cursel = v || []
            }
        },
        methods:{
            change(e) {
                this.$emit('change', this.qid, this.cursel, this.qobj, e);
            }
        }
    }
</script>