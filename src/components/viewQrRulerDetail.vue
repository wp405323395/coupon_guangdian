<template lang="html">
  <div class="content">
    <section class="pannel_content">
      <div class="close">
        <span class="close_btn" @click="closePannel">关闭</span>
      </div>
      <section class="create_content">
        <section>
          <div class="">
            <span>规则ID:</span>
            <span>{{rulerId}}</span>
          </div>
          <div class="">
            <span>规则名称:</span>
            <span>{{qrRulerDetail.rulename}}</span>
          </div>
          <div class="">
            <span>地区:</span>
            <span>{{qrRulerDetail.city}}</span>
            <span>频道:</span>
            <span>{{(qrRulerDetail.channelname == '*')?'所有频道':qrRulerDetail.channelname}}</span>
          </div>
          <div class="">
            <span>显示类型:</span>
            <span>{{qrRulerDetail.qrtype}}</span>
          </div>
        </section>

        <section style="background-color:#edf0f7">
          <div class="">
            <span>二维码链接:</span>
            <span>{{qrRulerDetail.qrurl}}</span>
          </div>
          <div class="">
            <span>二维码尺寸:</span>
            <span>{{qrRulerDetail.qrsize+"x"+qrRulerDetail.qrsize}}px</span>
          </div>
          <div class="">
            <span>背景链接:</span>
            <span>{{qrRulerDetail.backurl}}</span>
          </div>
          <div class="">
            <span>背景尺寸:</span>
            <span>{{qrRulerDetail.backsize+'x'+qrRulerDetail.backsize}}px</span>
          </div>
        </section>
        <section>
          <div class="">
            <span>显示优先级:</span>
            <span>{{qrRulerDetail.priority}}</span>
          </div>
          <div class="">
            <span>坐标位置:</span>
            <div class="">
              <div class="qrlocation">
                <span>二维码坐标</span>
                <span>X:{{qrRulerDetail.qrwp}}  Y:{{qrRulerDetail.qrhp}}</span>
              </div>
              <div class="qrbackgroundlocation">
                <span>背景坐标</span>
                <span>X:{{qrRulerDetail.backwp}} Y:{{qrRulerDetail.backhp}}</span>
              </div>
            </div>

          </div>

        </section>

        <section style="background-color:#edf0f7">
          <div class="">
            <span>备注:</span>
            <span>{{qrRulerDetail.memo}}</span>
          </div>
        </section>

        <div style="width:100%;height:1px;background-color:#807f82;margin-top:12px;"></div>
        <section>
          <div class="">
            <span>开始日期:</span>
            <span>{{qrRulerDetail.stime.split('T')[0]}}</span>
            <span>截止日期:</span>
            <span>{{qrRulerDetail.etime.split('T')[0]}}</span>
          </div>
          <div class="">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>周{{qrRulerDetail.qrday.replace(new RegExp(",","gm") , '、周')}}</span>
          </div>
          <div class="">
            <span>推送规则:</span>
            <span>{{qrRulerDetail.touchtype}}</span>
          </div>
        </section>
        <section v-if="qrRulerDetail.touchtype != '换台'" style="background-color:#edf0f7">
          <div class="">
            <span>推送时间:</span>
            <span>{{qrRulerDetail.pushtime}}</span>
          </div>
        </section>
        <section>
          <div class="">
            <span>显示时长:</span>
            <span>{{(qrRulerDetail.workhours == -1)? '一直':(qrRulerDetail.workhours+'秒')}}</span>
          </div>
        </section>
<div style="width:100%;height:1px;background-color:#807f82;margin-top:12px;"></div>
        <section>
          <span>是否倒计时:</span>
          <span>{{qrRulerDetail.countdown?'是':'否'}}</span>
          <span v-if="qrRulerDetail.countdown">倒计时时间:</span>
          <span v-if="qrRulerDetail.countdown">{{qrRulerDetail.aftertime}}秒</span>
        </section>
        <section>
          <span>是否轮询:</span>
          <span>{{qrRulerDetail.poll?'是':'否'}}</span>
        </section>
        <section v-if="qrRulerDetail.poll" style="background-color:#edf0f7">
          <div class="">
            <span>轮询间隔:</span>
            <span>{{qrRulerDetail.pollinterval}}秒</span>
          </div>
          <div class="">
            <span>限制类型:</span>
            <span>{{qrRulerDetail.limttype =='CARD'?'智能卡号:':''}}{{qrRulerDetail.limtvalue}}</span>
          </div>
        </section>
      </section>

    </section>
  </div>
</template>

<script>
import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
export default {
  data(){
    return {
      qrRulerDetail:{}
    }
  },
  mounted:function(){
    new requestEngine().request(urls.queQRcodeRuleDetail,{ruleid:this.rulerId},
      successValue=>{
        this.qrRulerDetail = successValue;
      }, failValue=>{

      }, completeValue=>{
      })
  },
  props: ['rulerId'],
  methods:{
    closePannel(){
      console.log('fffffff',this.rulerId);
      this.$emit('closePannel', [])
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: center;
  .pannel_content{
    margin-top: 160px;
    width: 600px;
    height: 70%;
    background-color: white;
    overflow:scroll;
    .close{
      cursor: pointer;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content:flex-end;
      background-color: white;
      width: 600px;
      .close_btn{

      }
    }
    .create_content{
      margin-top: 30px;
    }

  }
}

</style>
