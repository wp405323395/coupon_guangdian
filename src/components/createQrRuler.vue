<style lang="scss" scoped>

.content {
    display: flex;
    align-items: center;
    flex-direction: column;
    .btn_wrap {
        width: 650px;
        display: flex;
        flex-direction: row;
        button {
            cursor: pointer;
            width: 100%;
            height: 40px;
            color: #333333;
            font-size: 16px;
            background-color: #d4d4d4;
        }
        .submit {
            background-color: #313e90;
            color: white;
        }
    }
    .pannel_content {
        margin-top: 80px;
        width: 650px;
        height: 75%;
        background-color: white;
        overflow: scroll;
        .close {
            cursor: pointer;
            position: fixed;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            background-color: white;
            width: 650px;
            .close_btn {
                width: 30px;
                height: 30px;
            }
        }
        .create_content {
            margin-top: 30px;
            .dark_background {
                background-color: #eef0f7;
                padding-top: 20px;
                padding-bottom: 20px;
            }
            .space_line {
                width: 100%;
                height: 1px;
                background-color: #d4d4d4;
                margin-bottom: 20px;
            }
            section {
                margin-bottom: 20px;
                .align_top {
                    display: flex;
                    align-items: flex-start;
                }
                .item_wrap {
                    margin-bottom: 20px;
                    margin-left: 20px;
                    .short_input {
                        width: 80px;
                    }
                    label {
                        font-size: 16px;
                        color: #666666;
                        display: inline-block;
                        width: 100px;
                    }
                    .channelpannel {
                        margin-left: 10px;
                    }
                    .locationPannel {
                        display: inline-block;
                        margin-left: 0px;
                        vertical-align: text-top;
                        span {
                            color: black;
                            font-size: 14px;
                            width: 100px;
                            display: block;
                            margin-top: 10px;
                            margin-bottom: 10px;
                        }
                        label {
                            width: 10px;
                            margin-right: 10px;
                        }
                        input {
                            margin-right: 20px;
                            width: 80px;
                        }
                    }
                    .red_start {
                        color: red;
                        display: inline-block;
                        width: 10px;
                    }
                    .long_input {
                        width: 400px;
                    }
                    .min_length_input {
                        width: 250px;
                    }
                    .number_input {
                        width: 100px;
                    }
                    .company {
                        color: #666666;
                        font-size: 14px;
                        margin-left: 10px;
                        display: inline-block;
                        transform: translateY(-10px);
                    }
                    .week {
                        margin-left: 122px;
                        span {
                            color: white;
                            text-align: center;
                            background-color: #3e4fb5;
                            ;
                            padding: 5px 10px;
                            border-radius: 4px;
                            margin-right: 5px;
                            font-size: 16px;
                            cursor: pointer;
                        }
                        .checked_pannel {
                            position: relative;
                            width: 0px;
                            display: inline-block;
                            margin-left: 0px;
                            img {
                                position: absolute;
                                left: -15px;
                                top: -27px;
                            }
                        }
                    }
                    input,
                    select {
                        border: 1px solid #d8dbe9;
                        height: 35px;
                        border-radius: 4px;
                        padding-left: 5px;
                        font-size: 14px;
                    }
                    .beizhu {
                        width: 400px;
                        height: 100px;
                        padding-left: 10px;
                        padding-top: 10px;
                        padding-right: 10px;
                        border: 1px solid #d8dbe9;
                        display: inline-block;
                    }
                    .is-danger {
                        border-color: red;
                    }
                }
                .item_wrap:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}

</style>

<template lang="html">

<div class="content">
    <section class="pannel_content">
        <div class="close">
            <img class="close_btn" src="../../static/img/close.png" @click="closePannel" />
        </div>
        <section class="create_content">
            <section>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="rulerName">规则名称:</label>
                    <input type="text" id="rulerName" name="rulerName" v-validate="'required'" :class="{'is-danger': errors.has('rulerName')}" v-model="qrRulerDetail.rulename">
                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="city">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:</label>
                    <select name="directory_selected" v-model="qrRulerDetail.city" v-validate="'required'" :class="{'is-danger': errors.has('directory_selected')}">
                        <option v-for="city of citySelectes" :value="city.mcode">{{city.mname}}</option>

                    </select>
                    <span class="red_start channelpannel">*</span>
                    <label for="channel">频&nbsp;&nbsp;&nbsp;&nbsp;道:</label>
                    <select v-if="qrRulerDetail.channelname" name="selected" v-model="qrRulerDetail.channelname">
                        <option v-for="channel of channelsSelectes" :value="channel.mcode">{{channel.mname}}</option>
                    </select>
                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="showType">显示类型:</label>
                    <select name="showType_selected" v-model="qrRulerDetail.qrtype" v-validate="'required'" :class="{'is-danger': errors.has('showType_selected')}">
                        <option value="0">基本订购包</option>
                        <option value="1">基本包续费</option>
                        <option value="2">付费包订购</option>
                        <option value="3">付费包续费</option>
                        <option value="4">无智能卡号订购</option>
                        <option value="5">广告</option>
                        <option value="6">其他</option>

                    </select>
                </div>
            </section>

            <section class="dark_background">
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="qrlink">二维码链接:</label>
                    <input class="long_input" placeholder="输入相关链接" type="text" id="qrlink" name="qrlink" v-model="qrRulerDetail.qrurl" v-validate="'required|url'" :class="{'is-danger': errors.has('qrlink')}">
                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="qrSize">二维码尺寸:</label>
                    <input class="number_input" type="Number" id="qrSize" name="qrSize" v-model="qrRulerDetail.qrsize" v-validate="'required'" :class="{'is-danger': errors.has('qrSize')}"><span class="company">(px)</span>
                </div>
                <div class="item_wrap">
                    <span class="red_start"></span>
                    <label for="backgroundQrLink">背景链接:</label>
                    <input class="long_input" type="text" id="backgroundQrLink" placeholder="输入相关链接" name="backgroundQrLink" v-model="qrRulerDetail.backurl" v-validate="'url'" :class="{'is-danger': errors.has('backgroundQrLink')}">
                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="backgroundSize">背景尺寸:</label>
                    <input class="number_input" type="Number" id="backgroundSize" name="backgroundSize" v-model="qrRulerDetail.backsize" v-validate="'required'" :class="{'is-danger': errors.has('backgroundSize')}"><span class="company">(px)</span>
                </div>
            </section>

            <section>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="showZindex">显示优先级:</label>
                    <input type="Number" id="showZindex" name="showZindex" v-model="qrRulerDetail.priority" v-validate="'required'" :class="{'is-danger': errors.has('showZindex')}">
                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="">坐标位置:</label>
                    <div class="locationPannel">
                        <span>二维码坐标</span>
                        <label for="qrXlocation">x:</label>
                        <input type="Number" id="qrXlocation" name="qrXlocation" v-model="qrRulerDetail.qrwp" v-validate="'required'" :class="{'is-danger': errors.has('qrXlocation')}">
                        <label for="qrYlocation">y:</label>
                        <input type="Number" id="qrYlocation" name="qrYlocation" v-model="qrRulerDetail.qrhp" v-validate="'required'" :class="{'is-danger': errors.has('qrYlocation')}">
                        <span>背景坐标</span>
                        <label for="backgroundXlocation">x:</label>
                        <input type="Number" id="backgroundXlocation" name="backgroundXlocation" v-model="qrRulerDetail.backwp" v-validate="'required'" :class="{'is-danger': errors.has('backgroundXlocation')}">
                        <label for="backgroundYlocation">y:</label>
                        <input type="Number" id="backgroundYlocation" name="backgroundYlocation" v-model="qrRulerDetail.backhp" v-validate="'required'" :class="{'is-danger': errors.has('backgroundYlocation')}">
                    </div>
                </div>
                <div class="item_wrap align_top">
                    <span class="red_start"></span>
                    <label for="beizhu">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</label>
                    <textarea maxlength="200" class="beizhu" placeholder="写点什么吧" id="beizhu" name="" v-model="qrRulerDetail.memo" />

                </div>
            </section>
            <div class="space_line" />

            <section>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="startTime">开始日期:</label>
                    <input type="date" id="startTime" name="" v-if="qrRulerDetail.stime&&qrRulerDetail.stime.indexOf('T')>=0" v-model="qrRulerDetail.stime.split('T')[0]">
                    <input type="date" id="startTime" name="startTime" v-else v-model="qrRulerDetail.stime" v-validate="'required'" :class="{'is-danger': errors.has('startTime')}">
                    <span class="red_start">*</span>
                    <label for="endTime">截止日期:</label>
                    <input type="date" id="endTime" name="" v-if="qrRulerDetail.etime&&qrRulerDetail.etime.indexOf('T')>=0" v-model="qrRulerDetail.etime.split('T')[0]">
                    <input type="date" id="endTime" name="endTime" v-else v-model="qrRulerDetail.etime" v-validate="'required'" :class="{'is-danger': errors.has('endTime')}">
                </div>
                <div class="item_wrap">
                    <div class="week" @click="chooseWeek">
                        <span id="1">周一</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('1')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="2">周二</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('2')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="3">周三</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('3')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="4">周四</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('4')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="5">周五</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('5')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="6">周六</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('6')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="7">周天</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.qrday != undefined&& qrRulerDetail.qrday.indexOf('7')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                    </div>
                </div>
                <div class="item_wrap">

                    <span class="red_start">*</span>
                    <label for="">推送规则:</label>
                    <div class="week" style="display:inline-block; margin-left:0px;" @click="choosePushRuler">
                        <span id="1">换台推送</span>
                        <div v-if="qrRulerDetail.touchtype != undefined&& qrRulerDetail.touchtype.indexOf('1')>=0" class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="2">推送时间</span>
                        <div v-if="qrRulerDetail.touchtype != undefined&& qrRulerDetail.touchtype.indexOf('2')>=0" class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
                    </div>
                </div>
            </section>
            <section class="dark_background" v-if="qrRulerDetail.touchtype != undefined&& qrRulerDetail.touchtype.indexOf('2')>=0">
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="pushTime">推送时间:</label>
                    <input type="time" id="pushTime" name="pushTime" v-model="qrRulerDetail.pushtime" v-validate="'required'" :class="{'is-danger': errors.has('pushTime')}">
                </div>
            </section>
            <section>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="showTime">显示时长:</label>
                    <input class="short_input" type="Number" id="showTime" name="showTime" v-model="qrRulerDetail.workhours" v-validate="'required'" :class="{'is-danger': errors.has('showTime')}"> <span class="company">(秒/-1为一直显示)</span>
                </div>
            </section>
            <div class="space_line" />
            <section>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="isdownTime">是否倒计时:</label>
                    <div class="week" style="display:inline-block; margin-left:0px;" @click="chooseDownTime">
                        <span id="1">是</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.countdown != undefined&&qrRulerDetail.countdown.indexOf('true')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="2">否</span>
                        <div class="checked_pannel" v-if="qrRulerDetail.countdown != undefined&&qrRulerDetail.countdown.indexOf('false')>=0"><img src="../../static/img/week_checked.png" alt=""></div>
                    </div>
                    <span v-if="qrRulerDetail.countdown != undefined&&qrRulerDetail.countdown.indexOf('true')>=0" class="red_start">*</span>
                    <label v-if="qrRulerDetail.countdown != undefined&&qrRulerDetail.countdown.indexOf('true')>=0" for="downTime">倒计时时间:</label>

                    <input class="short_input" v-if="qrRulerDetail.countdown != undefined&&qrRulerDetail.countdown.indexOf('true')>=0" type="Number" id="downTime" name="downTime" v-model="qrRulerDetail.aftertime" v-validate="'required'" :class="{'is-danger': errors.has('downTime')}"> <span class="company">(秒)</span>

                </div>
                <div class="item_wrap">
                    <span class="red_start">*</span>
                    <label for="isLooper">是否轮询:</label>
                    <div class="week" style="display:inline-block; margin-left:0px;" @click="chooseLooper">
                        <span id="1">是</span>
                        <div v-if="qrRulerDetail.poll != undefined&& qrRulerDetail.poll.indexOf('true')>=0" class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
                        <span id="2">否</span>
                        <div v-if="qrRulerDetail.poll != undefined&& qrRulerDetail.poll.indexOf('false')>=0" class="checked_pannel"><img src="../../static/img/week_checked.png" alt=""></div>
                    </div>
                </div>
            </section>
            <section class="dark_background">
                <div class="item_wrap" v-if="qrRulerDetail.poll != undefined&& qrRulerDetail.poll.indexOf('true')>=0">
                    <span class="red_start">*</span>
                    <label for="looperTime">轮询间隔:</label>
                    <input class="short_input" type="Number" id="looperTime" name="looperTime" v-model="qrRulerDetail.pollinterval" v-validate="'required'" :class="{'is-danger': errors.has('looperTime')}"> <span class="company">(秒)</span>
                </div>
                <div class="item_wrap">
                    <span class="red_start"></span>
                    <label for="">限制类型:</label>
                    <select name="selected" v-model="qrRulerDetail.limttype">
                        <option value="CARD">智能卡号</option>
                    </select>
                    <input type="text" id="" name="" class="min_length_input" v-model="qrRulerDetail.limtvalue" value="^(8270104048478701)$">
                </div>
            </section>
        </section>
    </section>
    <section class="btn_wrap">
        <button type="button" name="button" @click="saveQrRuler">保存</button>
        <button class="submit" type="button" name="button" @click="submitCheck">提交审核</button>
    </section>
</div>

</template>

<script>

import requestEngine from '../netApi/requestEngine'
import router from '../router'
import urls from '../config.js'
export default {
    data() {
            return {
                citySelectes: [],
                channelsSelectes: [],
                qrRulerDetail: {
                    "aftertime": 30,
                    "auditmemo": null,
                    "backhp": null,
                    "backsize": null,
                    "backurl": "",
                    "backwp": null,
                    "channelname": "*",
                    "city": null,
                    "countdown": "true",
                    "etime": null,
                    "limttype": "CARD",
                    "limtvalue": "^(8270104048478701)$",
                    "memo": null,
                    "poll": "true",
                    "pollinterval": 30,
                    "pollparam": null,
                    "priority": null,
                    "pushtime": null,
                    "qrday": '1',
                    "qrhp": null,
                    "qrsize": null,
                    "qrtype": "0",
                    "qrurl": null,
                    "qrwp": '',
                    "rulename": null,
                    "status": "1",
                    "stime": null,
                    "touchtype": "2",
                    "workhours": 30
                }
            }
        },
        mounted: function() {
            this.loadTV_CHANNEL().then(value=>{
              value.unshift({
                  'mcode': '*',
                  'mname': '所有频道'
              });
              this.channelsSelectes = value;
              return this.loadTV_MANAGER_CITY();
            }).catch(err=>{}).then(value=>{
              this.citySelectes = value;
              return this.loadModify();
            }).catch(err=>{}).then(value=>{
              value.city = value.city.split('~')[0];
              this.qrRulerDetail = value;
            });



        },
        props: ['rulerId'],
        methods: {
          loadTV_CHANNEL(){
            return getPromise(urls.queData, {gcode: 'TV_CHANNEL'})
          },
          loadTV_MANAGER_CITY(){
            return getPromise(urls.queData, {gcode: 'TV_MANAGER_CITY'})
          },
          loadModify(){
            if (this.rulerId != '') {
              return getPromise(urls.queQRcodeRuleDetail, {ruleid: this.rulerId});
            } else {
              return new Promise((resolve,reject)=>{});
            }

          },
            insertDate() {
                    let that = this;
                    if(this.qrRulerDetail.stime > this.qrRulerDetail.etime) {
                      alert("起止时间有误！");
                      return;
                    }
                    if(!this.qrRulerDetail.qrday) {
                      alert('星期不能不填');
                      return;
                    }

                    this.$validator.validateAll().then((result) => {
                        if (result) {

                            // eslint-disable-next-line
                            getPromise(urls.saveQRRule, this.qrRulerDetail).then(value=>{
                              this.$emit('closePannel', [this.qrRulerDetail]);
                            }).catch(err=>{
                              alert(err);
                            });

                            return;
                        }

                    });
                },
                saveQrRuler() {
                    this.qrRulerDetail.status = '0';
                    this.insertDate();
                },
                submitCheck() {
                  this.qrRulerDetail.status = '1';
                    this.insertDate();
                },
                closePannel() {
                    this.$emit('closePannel', [this.qrRulerDetail])
                },
                chooseWeek(target) {
                    if (target.target.id) {
                        if (this.qrRulerDetail.qrday.indexOf(target.target.id) >= 0) {
                            let position = this.qrRulerDetail.qrday.indexOf(target.target.id);
                            if (this.qrRulerDetail.qrday.length == 1) {
                                this.qrRulerDetail.qrday = this.qrRulerDetail.qrday.replace(target.target.id, '');
                            } else if (position > 0) {
                                this.qrRulerDetail.qrday = this.qrRulerDetail.qrday.replace("," + target.target.id, '');
                            } else if (position == 0) {

                                this.qrRulerDetail.qrday = this.qrRulerDetail.qrday.replace((target.target.id + ','), '');
                            }
                        } else {
                            if (this.qrRulerDetail.qrday.length == 0) {
                                this.qrRulerDetail.qrday = this.qrRulerDetail.qrday.concat(target.target.id);
                            } else {
                                this.qrRulerDetail.qrday = this.qrRulerDetail.qrday.concat(',' + target.target.id);
                            }

                        }
                    }
                    let sortArray = this.qrRulerDetail.qrday.split(',');
                    this.qrRulerDetail.qrday = sortArray.sort().join(',');

                },
                choosePushRuler(target) {
                    if (target.target.id) {
                        if (this.qrRulerDetail.touchtype.indexOf('1') >= 0) {
                            this.qrRulerDetail.touchtype = '2';
                        } else {
                            this.qrRulerDetail.touchtype = '1';
                        }
                    }
                },
                chooseDownTime(target) {
                    if (target.target.id) {
                        if (this.qrRulerDetail.countdown.indexOf('true') >= 0) {
                            this.qrRulerDetail.countdown = 'false';
                        } else {
                            this.qrRulerDetail.countdown = 'true';
                        }
                    }
                },
                chooseLooper(target) {

                    if (target.target.id) {
                        if (this.qrRulerDetail.poll.indexOf('true') >= 0) {
                            this.qrRulerDetail.poll = 'false';
                        } else {
                            this.qrRulerDetail.poll = 'true';
                        }
                    }
                }
        }
}

</script>
