<template lang="html">
  <div class="content">
    <section class="pannel_content">
      <div class="close">
        <span class="close_btn" @click="closePannel">关闭</span>
      </div>
      <section class="create_content">
        <section>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="rulerName">规则名称:</label>
            <input type="text" id="rulerName" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="city">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:</label>
            <input type="text" id="city" name="" value="">
            <span class="red_start channelpannel">*</span>
            <label for="channel">频&nbsp;&nbsp;&nbsp;&nbsp;道:</label>
            <input type="text" id="channel" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="showType">显示类型:</label>
            <input type="text" id="showType" name="" value="">
          </div>
        </section>

        <section class="dark_background">
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="qrlink">二维码链接:</label>
            <input type="text" id="qrlink" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="qrSize">二维码尺寸:</label>
            <input type="text" id="qrSize" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start"></span>
            <label for="backgroundQrLink">背景链接:</label>
            <input type="text" id="backgroundQrLink" placeholder="输入相关链接" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="backgroundSize">背景尺寸:</label>
            <input type="text" id="backgroundSize" name="" value="">
          </div>
        </section>

        <section>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="showZindex">显示优先级:</label>
            <input type="text" id="showZindex" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="">坐标位置:</label>
            <div class="locationPannel">
              <span>二维码坐标</span>
              <label for="qrXlocation">x:</label>
              <input type="Number" id="qrXlocation" name="" value="">
              <label for="qrYlocation">y:</label>
              <input type="Number" id="qrYlocation" name="" value="">
              <span>背景坐标</span>
              <label for="backgroundXlocation">x:</label>
              <input type="Number" id="backgroundXlocation" name="" value="">
              <label for="backgroundYlocation">y:</label>
              <input type="Number" id="backgroundYlocation" name="" value="">
            </div>
          </div>
          <div class="item_wrap align_top">
            <span class="red_start"></span>
            <label for="beizhu">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</label>
            <textarea maxlength="200" class="beizhu" placeholder="写点什么吧"  id="beizhu" name="" value=""/>

          </div>
        </section>
        <div class="space_line"/>

        <section>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="startTime">开始日期:</label>
            <input type="date" id="startTime" name="" value="">
            <span class="red_start">*</span>
            <label for="endTime">截止日期:</label>
            <input type="date" id="endTime" name="" value="">
          </div>
          <div class="item_wrap">
            <div class="week">
              <span>周一</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>周二</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>周三</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>周四</span><div class="checked_pannel"><img v-if="false" src="../../static/img/week_checked.png" alt=""></div>
              <span>周五</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>周六</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>周天</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
            </div>
          </div>
          <div class="item_wrap">

            <span class="red_start">*</span>
            <label for="">推送规则:</label>
            <div class="week" style="display:inline-block; margin-left:0px;">
              <span>换台推送</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>推送时间</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
            </div>
          </div>
        </section>
        <section class="dark_background">
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="pushTime">推送时间:</label>
            <input type="date" id="pushTime" name="" value="">
          </div>
        </section>
        <section>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="showTime">显示时长:</label>
            <input type="text" id="showTime" name="" value="">
          </div>
        </section>
        <div class="space_line"/>
        <section>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="isdownTime">是否倒计时:</label>
            <div class="week" style="display:inline-block; margin-left:0px;">
              <span>是</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>否</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
            </div>
            <span class="red_start">*</span>
            <label for="downTime">倒计时时间:</label>
            <input type="text" id="downTime" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="isLooper">是否轮询:</label>
            <div class="week" style="display:inline-block; margin-left:0px;">
              <span>是</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
              <span>否</span><div class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
            </div>
          </div>
        </section>
        <section  class="dark_background">
          <div class="item_wrap">
            <span class="red_start">*</span>
            <label for="looperTime">轮询间隔:</label>
            <input type="text" id="looperTime" name="" value="">
          </div>
          <div class="item_wrap">
            <span class="red_start"></span>
            <label for="">限制类型:</label>
          </div>
        </section>
      </section>

    </section>
  </div>
</template>

<script>
export default {
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
    width: 650px;
    height: 75%;
    background-color: white;
    overflow:scroll;
    .close{
      cursor: pointer;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content:flex-end;
      background-color: white;
      width: 650px;
      .close_btn{

      }
    }
    .create_content{
      margin-top: 30px;
      .dark_background{
        background-color: #eef0f7;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .space_line{
        width: 100%;
        height: 1px;
        background-color: #d4d4d4;
        margin-bottom: 20px;
      }
      section{
        margin-bottom: 20px;
        .align_top{
          display: flex;
          align-items: flex-start;

        }
        .item_wrap{
          margin-bottom: 20px;
          margin-left: 20px;
          label{
            font-size: 16px;
            color: #666666;
            display: inline-block;
            width: 100px;
          }
          .channelpannel{
            margin-left: 10px;
          }
          .locationPannel{
            display: inline-block;
            margin-left: 0px;
            vertical-align:text-top;
            span{
              color: black;
              font-size: 14px;
              width: 100px;
              display: block;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            label{
              width: 10px;
              margin-right: 10px;
            }
            input{
              margin-right: 20px;
              width: 80px;
            }
          }
          .red_start{
            color: red;
            display: inline-block;
            width: 10px;
          }
          .week{
            margin-left: 122px;
            span{
              color: white;
              text-align: center;
              background-color: #3e4fb5;;
              padding:5px 10px;
              border-radius: 4px;
              margin-right: 5px;
              font-size: 16px;
            }
            .checked_pannel{
              position: relative;
              width: 0px;
              display: inline-block;
              margin-left: 0px;

              img{
                position: absolute;
                left: -15px;
                top: -27px;
              }
            }
          }
          input{
            border: 1px solid #d8dbe9;
            height: 35px;
            border-radius: 4px;
            padding-left: 5px;
          }
          .beizhu{
            width: 400px;
            height: 100px;
            padding-left: 10px;
            padding-top: 10px;
            padding-right: 10px;
            border: 1px solid #d8dbe9;
            display: inline-block;
          }
        }
        .item_wrap:last-child{
          margin-bottom: 0;
        }
      }
    }

  }
}

</style>
