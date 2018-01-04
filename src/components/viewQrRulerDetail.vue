<template lang="html">
  <div class="content">
    <section class="pannel_content">
      <div class="close">
        <img class="close_btn" src="../../static/img/close.png"  @click="closePannel" />
      </div>
      <section class="create_content">
        <section>
          <div class="" v-if="qrRulerDetail.status == '3'">
            <span class="lable_name">驳回原因:</span>
            <span class="lable_value" style="color:red;">{{qrRulerDetail.auditmemo}}</span>
          </div>
        </section>
        <div class="depart_line" v-if="qrRulerDetail.status == '3'"></div>
        <section>
          <div class="">
            <span class="lable_name">规则ID:</span>
            <span class="lable_value">{{rulerId}}</span>
          </div>
          <div class="">
            <span class="lable_name">规则名称:</span>
            <span class="lable_value">{{qrRulerDetail.rulename}}</span>
          </div>
          <div class="">
            <span class="lable_name">地区:</span>
            <span class="lable_value">{{qrRulerDetail.city != null && qrRulerDetail.city.split('~')[1]}}</span>
            <span class="lable_name channelpanel">频道:</span>
            <span class="lable_value">{{(qrRulerDetail.channelname == '*')?'所有频道':qrRulerDetail.channelname}}</span>
          </div>
          <div class="">
            <span class="lable_name">显示类型:</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 0 ">基本订购包</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 1 ">基本包续费</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 2 ">付费包订购</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 3 ">付费包续费</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 4 ">无智能卡号订购</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 5 ">广告</span>
            <span class="lable_value" v-if="qrRulerDetail.qrtype == 6 ">其他</span>

          </div>
        </section>

        <section class="dard_section">
          <div class="">
            <span class="lable_name">二维码链接:</span>
            <span class="lable_value">{{qrRulerDetail.qrurl}}</span>
          </div>
          <div class="">
            <span class="lable_name">二维码尺寸:</span>
            <span class="lable_value">{{qrRulerDetail.qrsize+"x"+qrRulerDetail.qrsize}}px</span>
          </div>
          <div class="">
            <span class="lable_name">背景链接:</span>
            <span class="lable_value">{{qrRulerDetail.backurl}}</span>
          </div>
          <div class="">
            <span class="lable_name">背景尺寸:</span>
            <span class="lable_value">{{qrRulerDetail.backsize+'x'+qrRulerDetail.backsize}}px</span>
          </div>
        </section>
        <section>
          <div class="">
            <span class="lable_name">显示优先级:</span>
            <span class="lable_value">{{qrRulerDetail.priority}}</span>
          </div>
          <div class="location_pannel">
            <span class="lable_name">坐标位置:</span>
            <div class="qr_location">
              <div>
                <span class="lable_name">二维码坐标</span>
                <span>X:{{qrRulerDetail.qrwp}}  Y:{{qrRulerDetail.qrhp}}</span>
              </div>
              <div>
                <span class="lable_name">背景坐标</span>
                <span>X:{{qrRulerDetail.backwp}} Y:{{qrRulerDetail.backhp}}</span>
              </div>
            </div>

          </div>

        </section>

        <section  class="dard_section">
          <div class="">
            <span class="lable_name">备注:</span>
            <span class="lable_value">{{qrRulerDetail.memo}}</span>
          </div>
        </section>

        <div class="depart_line"></div>
        <section>
          <div class="">
            <span class="lable_name">开始日期:</span>
            <span class="lable_value">{{qrRulerDetail.stime?qrRulerDetail.stime.split('T')[0]:''}}</span>
            <span class="lable_name  datepanel">截止日期:</span>
            <span class="lable_value">{{qrRulerDetail.etime?qrRulerDetail.etime.split('T')[0]:''}}</span>
          </div>
          <div class="">
            <span class="lable_name"></span>
            <span class="lable_value">周{{qrRulerDetail.qrday?qrRulerDetail.qrday.replace(new RegExp(",","gm") , '、周'):''}}</span>
          </div>
          <div class="">
            <span class="lable_name">推送规则:</span>
            <span v-if="qrRulerDetail.touchtype == '1'" class="lable_value">换台推送</span>
            <span v-if="qrRulerDetail.touchtype == '2'" class="lable_value">时间推送</span>
          </div>
        </section>
        <section v-if="qrRulerDetail.touchtype != '换台'" style="background-color:#edf0f7">
          <div class="">
            <span class="lable_name">推送时间:</span>
            <span class="lable_value">{{qrRulerDetail.pushtime}}</span>
          </div>
        </section>
        <section>
          <div class="">
            <span class="lable_name">显示时长:</span>
            <span class="lable_value">{{(qrRulerDetail.workhours == -1)? '一直':(qrRulerDetail.workhours+'秒')}}</span>
          </div>
        </section>
        <div class="depart_line"></div>
        <section>
          <div class="">
            <span class="lable_name">是否倒计时:</span>
            <span class="lable_value">{{qrRulerDetail.countdown?'是':'否'}}</span>
            <span  class="lable_name down_time" v-if="qrRulerDetail.countdown">倒计时时间:</span>
            <span class="lable_value" v-if="qrRulerDetail.countdown">{{qrRulerDetail.aftertime}}秒</span>
          </div>
        </section>
        <section>
          <div class="">
            <span class="lable_name">是否轮询:</span>
            <span class="lable_value">{{qrRulerDetail.poll?'是':'否'}}</span>
          </div>
        </section>
        <section v-if="qrRulerDetail.poll"  class="dard_section">
          <div class="">
            <span class="lable_name">轮询间隔:</span>
            <span class="lable_value">{{qrRulerDetail.pollinterval}}秒</span>
          </div>
          <div class="">
            <span class="lable_name">限制类型:</span>
            <span class="lable_value">{{qrRulerDetail.limttype =='CARD'?'智能卡号:':''}}{{qrRulerDetail.limtvalue}}</span>
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
      margin-top: 40px;
      font-size: 16px;
      .dard_section{
        background-color:#edf0f7;
        padding-top:15px;
        padding-bottom:1px;
        margin-bottom: 10px;
      }
      .depart_line{
         width:100%;height:1px;background-color:#d4d4d4;margin-top:12px; margin-bottom:20px;
      }
      section {
        padding-left: 20px;
        .location_pannel{
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        div{
          margin-bottom: 20px;
          .lable_name{
            color:#666666;
            display: inline-block;
            width: 100px;
          }
          .down_time{
            margin-left: 60px;
          }
          .qr_location{
            display: inline-block;
            margin-bottom:0;
            div:last-child{
              margin-bottom: 0;
            }
          }
          .channelpanel{
            margin-left: 130px;
          }
          .datepanel{
            margin-left:60px;
          }
          .lable_value{
            font-weight: 500;
          }

        }
      }
    }

  }
}

</style>
