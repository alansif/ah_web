<template>
    <section id="process" style="position: relative;">
        <img src="../assets/process-bg2.jpg" style="width: 100%;"/>
        <span style="position: absolute;background-color: rgba(73,155,202,0.9);width: 100%;height:100%;top:0;left:0;"></span>
        <img src="../assets/process-mask.png" style="position:absolute;top:180px;left:90px;width:85%;"/>
        <div style="position:absolute;top:30px;left:0;width:100%;color:#fff;">
            <p style="font-size: 2em;text-align:center;">体检流程</p>
            <div style="position: absolute;left:538px;top:130px;width:100px;height:50px;">
                <el-tooltip effect="light">
                    <div slot="content">请致电010-83033939，我们的<br>客服专员将为您提供帮助。</div>
                    <div class="circle2">
                        <span class="proctxt">1</span>
                    </div>
                </el-tooltip>
                <span style="position: absolute;left:-70px;top:3px;color:#fff;">电话咨询</span>
            </div>
            <div style="position: absolute;left:505px;top:205px;width:100px;height:50px;">
                <el-tooltip effect="light">
                    <div slot="content">华兆会员可以在网上自助<br>定制体检方案</div>
                    <div class="circle2">
                        <span class="proctxt">2</span>
                    </div>
                </el-tooltip>
                <span style="position: absolute;left:-102px;top:3px;color:#fff;">会员在线定制</span>
            </div>
            <div style="position: absolute;left:240px;top:240px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">3</span>
                </div>
                <span style="position: absolute;left:-40px;top:-25px;color:#fff;">电话或网上预约</span>
            </div>
            <div style="position: absolute;left:140px;top:350px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">4</span>
                </div>
                <span style="position: absolute;left:-35px;top:35px;color:#fff;">准时赴约体检</span>
            </div>
            <div style="position: absolute;left:370px;top:350px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">5</span>
                </div>
                <span style="position: absolute;left:-18px;top:-30px;color:#fff;">前台登记</span>
            </div>
            <div style="position: absolute;left:600px;top:330px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">6</span>
                </div>
                <span style="position: absolute;left:-35px;top:35px;color:#fff;">完成健康调查</span>
            </div>
            <div style="position: absolute;left:820px;top:327px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">7</span>
                </div>
                <span style="position: absolute;left:-1px;top:-28px;color:#fff;">更衣</span>
            </div>
            <div style="position: absolute;left:995px;top:400px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">8</span>
                </div>
                <span style="position: absolute;left:-85px;top:3px;color:#fff;">体检和就餐</span>
            </div>
            <div style="position: absolute;left:740px;top:460px;width:100px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">9</span>
                </div>
                <span style="position: absolute;left:-41px;top:35px;color:#fff;">完成体检并更衣</span>
            </div>
            <div style="position: absolute;left:540px;top:580px;width:150px;height:50px;">
                <div class="circle2">
                    <span class="proctxt">10</span>
                </div>
                <span style="position: absolute;left:-75px;top:35px;color:#fff;">7个工作日后下载体检报告</span>
            </div>
        </div>
    </section>
</template>

<style>
    .circle2 {
        position:absolute;
        top:0;
        left:0;
        background: #fff;
        color: rgba(73,155,202,0.9);
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
    .proctxt {
        position:absolute;
        top:0;
        left:0;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        vertical-align:middle;
    }
</style>