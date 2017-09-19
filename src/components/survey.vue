<template>
        <div class="card">
            <div class="cardhead">
                <div style="margin-left:32px;font-size:20px;">
                    调查问卷
                </div>
            </div>
            <div class="cardbody">
                <template v-for="(question,idx) in questions">
                    <p class="ques" :class="hint && noe(ans[question.QID]) ? 'errcls': 'okcls'" :id="question.QID">{{question.QID}}.{{question.Question}}</p>
                    <checkboxs v-if="question.Multiple" :items="question.Alts" :qid="question.QID" :curselext="ans[question.QID]" :qobj="question" @change="changed"></checkboxs>
                    <radios v-else :items="question.Alts" :qid="question.QID" :curselext="ans[question.QID]" @change="changed"></radios>
                </template>
                <hr style="margin-top:32px;height:1px;border:none;border-top:1px solid #ccc;" />
                <div style="width:100%;margin-top:24px;text-align:center;">
                    <el-button type="primary" :loading="nsloading" @click="nextstep">下一步</el-button>
                </div>
            </div>
        </div>
</template>

<script>
    import {restbase} from '../config'
    import {scrollElement} from '../util'
    import radios from './radios.vue'
    import checkboxs from './checkboxs.vue'

    export default {
        data () {
            return {
                questions: this.$root.ctminfo.questions || [],
                ans: this.$root.ctminfo.answers || {},
                hint: false,
                nsloading: false
            }
        },
        mounted() {
            this.$root.$emit('ctmstep', 1);
        },
        methods: {
            noe(a) {
                return !a || (a.length === 0);
            },
            changed(qid, answer, qobj, e) {
                if (qobj) {
                    let z = qobj.Alts[qobj.Alts.length - 1];
                    let zidx = answer.indexOf(z.Aid);
                    if (zidx !== -1) {
                        if (e === z.Aid) {          //选中的为最后一个元素
                            answer = [z.Aid];
                        } else {                    //选中的为除最后一个元素以外的其他任何元素
                            answer.splice(zidx, 1);
                        }
                    }
                }
                this.ans[qid] = answer;
                this.$http.post(restbase() + "customize/Survey.asmx/SetQAinfo", {
                    SFZH:this.$root.ctminfo.id,
                    QuestionNum:qid,
                    AnswerNum:answer
                }).then((response) => {
                    let d = JSON.parse(response.body.d);
                    if (d.data.question) {
                        this.ans[d.data.question] = ['A'];  //关联的选项暂时都设置为第一项
                    }
                    this.$forceUpdate();
                }, (response) => {
                    console.log(response);
                }).catch((response) => {
                    console.log(response);
                });
            },
            getFirstNoe() {
                for (var i in this.questions) {
                    var q = this.questions[i];
                    if (this.noe(this.ans[q.QID]))
                        return q.QID;
                }
                return null;
            },
            nextstep() {
                var qid = this.getFirstNoe();
                if (qid === null) {
                    this.nsloading = true;
                    this.$http.post(restbase() + "customize/MyService.asmx/GetYskInfo", {sex:this.$root.ctminfo.gender}).then((response) => {
                        var d = JSON.parse(response.body.d);
                        this.$root.ctminfo.essential = d;
                        this.$http.post(restbase() + "customize/MyService.asmx/GeSelfChoiceAInfo", {
                            SFZH:this.$root.ctminfo.id,
                            Type:'3',
                            GroupClassify:'',
                            PageSize:100,
                            PageIndex:1
                        }).then((response) => {
                            this.nsloading = false;
                            let d1 = JSON.parse(response.body.d);
                            console.log(d1);
                            this.$root.ctminfo.optionals = d1.data;
                            this.$root.ctminfo.forbidden = d1.forbidden;
                            this.$router.push('/ctm/doctm');
                        }, (response) => {
                            this.nsloading = false;
                            console.log(response);
                        }).catch((response) => {
                            this.nsloading = false;
                            console.log(response);
                        });
                    }, (response) => {
                        this.nsloading = false;
                        console.log(response);
                    }).catch((response) => {
                        this.nsloading = false;
                        console.log(response);
                    });
                } else {
                    var elmnt = document.getElementById(qid);
                    scrollElement(elmnt, 300);
                    this.hint = true;
                    this.$notify({
                        title: '提示',
                        message: '您有问题尚未回答，请完成红色标题的问题',
                        duration: 3000,
                        type: 'error'
                    })
                }
            }
        },
        components:{
            radios,
            checkboxs
        }
    }
</script>

<style>
    .el-checkbox{
        width:22%;
        margin-left:15px;
        display:inline-block;
        line-height:24px;
        color:#555;
    }
    .el-radio{
        margin-left:15px;
        color:#555;
    }
    .card {
        margin:0 auto;
        width:980px;
        padding-bottom:4px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px #888;
        background-color: white;
    }
    .cardhead {
        width:100%;
        height:48px;
        line-height:48px;
        padding:0;
        color:white;
        background-color:rgb(75, 112, 178);
        border-radius:10px 10px 0 0;
    }
    .cardbody {
        padding: 16px 60px;
        margin-bottom: 16px;
        color: #555;
    }
    .ques {
        font-size: 1.2em;
        margin-top: 24px;
        margin-bottom: 6px;
    }
    .okcls {
        color:deepskyblue;
    }
    .errcls {
        color:red;
    }
    body {
        background-color: #f3f3f3;
    }
</style>