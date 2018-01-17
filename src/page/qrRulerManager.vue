<style lang="scss" scoped>

.createQrRuler {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 23, 42, .5);
    z-index: 10000;
}

.reject_section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    .pass_pannel {
        width: 400px;
        height: 200px;
        background-color: white;
        position: relative;
        .title {
            font-size: 20px;
            align-self: center;
            width: 100%;
            display: block;
            text-align: center;
            margin-top: 55px;
        }
        .btn_content {
            position: absolute;
            width: 100%;
            bottom: 10px;
            display: flex;
            button {
                cursor: pointer;
                height: 40px;
                width: 100%;
                margin-left: 10px;
                margin-right: 10px;
                background-color: #eeeeee;
                color: #999999;
                font-size: 20px;
            }
            button:last-child {
                margin-left: 0;
                background-color: #4a5cc8;
                color: white;
            }
        }
    }
    .reject_pannel {
        width: 400px;
        height: 300px;
        background-color: white;
        .delete_relative {
            height: 1px;
            width: 100%;
            position: relative;
            img {
                width: 30px;
                height: 30px;
                position: absolute;
                right: 0px;
                cursor: pointer;
            }
        }
        textarea {
            background: #efeff7;
            width: 360px;
            height: 200px;
            margin-top: 40px;
            margin-left: 20px;
            padding: 10px;
            border: 1px solid #d4d4d4;
        }
        button {
            width: 80px;
            height: 30px;
            position: absolute;
            right: 20px;
            margin-top: 10px;
            background-color: #4a5cc8;
            color: white;
            cursor: pointer;
        }
    }
}

.add_project {
    height: 45px;
    .add_project_content {
        display: inline-block;
        padding-right: 30px;
        padding-top: 15px;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        span {
            cursor: pointer;
            font-size: 16px;
            display: inline-block;
            padding-left: 10px;
        }
        img {
            cursor: pointer;
        }
    }
}

.search_pannel {
    background-color: #eef1f8;
    margin: 14px 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    text-align: center;
    border: 1px solid #d4d4d4;
    button {
        cursor: pointer;
    }
    button:active {
        transform: translateY(4px);
    }
    .input_section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
            label {
                font-size: 16px;
            }
            input,
            select {
                height: 40px;
                font-weight: 600;
                padding-left: 10px;
                line-height: 40px;
                border: 1px solid #d4d4d4;
                border-radius: 5px;
                margin-left: 10px;
            }
        }
    }
    button {
        margin-top: 30px;
        width: 200px;
        height: 40px;
        background-image: url(../../static/svg/header_bar_background.svg);
        font-size: 16px;
        color: white;
        letter-spacing: 4px;
        margin-bottom: 30px;
    }
}

.all_content_wrap_underfocus {
    overflow: hidden
}

.all_content_wrap {
    .qr_manager_list_panel {
        margin-top: 10px;
        background-color: #eef1f8;
        margin-left: 20px;
        margin-right: 20px;
        border: 1px solid #d4d4d4;
        div:nth-child(even) {
            background-color: white;
        }
        .list-complete-enter,
        .list-complete-leave-to
        /* .list-complete-leave-active for below version 2.1.8 */
        {
            opacity: 0;
            transform: translateX(400px);
        }
        .list-complete-leave-active {
            position: absolute;
        }
        .list-complete-item {
            transition: all .5s;
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                div {
                    font-size: 14px;
                    width: 100px;
                    overflow: visible;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    background-color: transparent;
                    span {
                        color: #666666;
                        display: block;
                        align-self: center;
                    }
                    input {
                        align-self: center;
                    }
                }
                .opration_status {
                    .waiteCheck {
                        color: #e86e2c;
                    }
                    ,
                    .writting {
                        color: #000000;
                    }
                    ,
                    .reject {
                        color: #d93939;
                    }
                    .pass {
                        color: #51b333;
                    }
                    .unline {}
                    .publish {}
                }
                .useful_day {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 180px;
                    .week {
                        font-size: 10px;
                    }
                }
                .opration {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    span {
                        text-decoration: underline;
                    }
                    .can_opration {
                        color: blue;
                        cursor: pointer;
                    }
                    .red-color {
                        color: red;
                    }
                }
                div:last-child {
                    width: 180px;
                }
            }
            .lable_s {
                div {
                    span {
                        font-weight: 600;
                        color: #333333;
                    }
                }
            }
        }
    }
}

.page_footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-right: 30px;
    padding-bottom: 30px;
    .check_status {
        padding-left: 55px;
        transform: translateY(5px);
        display: flex;
        flex-direction: row;
        align-items: center;
        .opration_section {
            display: flex;
            flex-direction: row;
            align-items: center;
            span {
                margin-right: 10px;
            }
        }
        label {
            font-size: 16px;
            margin-left: 10px;
            margin-right: 10px;
        }
        span {
            font-size: 16px;
            color: #666666;
            cursor: pointer;
            text-decoration: underline;
        }
        .pass {
            color: #4a5cc8;
        }
        .reject {
            color: #d93939;
        }
    }
}

</style>

<template lang="html">

<section>
    <section class="add_project">
        <div class="add_project_content">
            <img @click="createNewQrRuler" src="../../static/img/add_project.png" alt="">
            <span @click="createNewQrRuler">新增规则</span>
        </div>
    </section>
    <section class="search_pannel">
        <section class="input_section">
            <div class="">
                <label for="">频道</label>
                <select class="" v-model="channelSelect">
                    <option value="" selected>无频道约束</option>
                    <option value="*">所有频道</option>
                    <option v-for="channel of channelsSelectes" :value="channel.mcode">{{channel.mname}}</option>
                </select>

            </div>
            <div class="">
                <label for="">规则有效日期</label>
                <input type="date" name="" v-model="date">
            </div>
            <div class="">
                <label for="">规则状态</label>
                <select :disabled="unAbleRulerSearch" v-model="ruleSelected">
                    <option v-for="item in ruleSelectes" v-bind:value="item.mcode">{{item.mname}}</option>
                </select>
            </div>
        </section>
        <button type="button" name="button" @click="search()">查询</button>
    </section>
    <section class="all_content_wrap">
        <section class="qr_manager_list_panel">
            <transition-group name="list-complete" tag="p">
                <div v-for="(qrRuler, index) of qrRulers" :key="qrRuler.id" class="list-complete-item">
                    <div class="lable_s" v-if="index == 0">
                        <div v-if="subMenusDir=='/rulerReset'||subMenusDir=='/rulerCheck'||subMenusDir=='/rulerCheck'||subMenusDir=='/rulerPublish'" style="width:80px;">
                            <span>选择规则</span>
                        </div>
                        <div><span>规则名称</span></div>
                        <div class="useful_day"><span>规则有效日期</span></div>
                        <div><span>地区</span></div>
                        <div><span>频道</span></div>
                        <div><span>显示类型</span></div>
                        <div><span>状态</span></div>
                        <div><span>操作</span></div>
                    </div>
                    <div v-else>
                        <div v-if="subMenusDir=='/rulerReset'||subMenusDir=='/rulerCheck'||subMenusDir=='/rulerCheck'||subMenusDir=='/rulerPublish'" style="width:80px;">
                            <input v-model="qrRuler.isSelect" type="checkbox" name="" value="">
                        </div>
                        <div><span>{{qrRuler.rulename}}</span></div>
                        <div class="useful_day">
                            <span>{{qrRuler.stime.split('T')[0]}}--{{qrRuler.etime.split('T')[0]}}</span>
                            <span v-if="qrRuler.qrday == '1,2,3,4,5,6,7'">全 天</span>
                            <span v-else class="week">周{{qrRuler.qrday.replace(new RegExp(",","gm") , '、周')}}</span>
                        </div>
                        <div><span>{{qrRuler.city}}</span></div>
                        <div>
                            <span v-if="qrRuler.channelname == '*'">所有频道</span>
                            <span v-else>{{qrRuler.channelname}}</span>
                        </div>
                        <div><span>{{qrRuler.qrtype}}</span></div>
                        <div class="opration_status">
                            <span :class="{'waiteCheck':qrRuler.status == '待审核',
                                'writting':qrRuler.status == '编辑中',
                                'reject':qrRuler.status == '审核驳回',
                                'pass':qrRuler.status == '已审核',
                                'unline':qrRuler.status == '已下线',
                                'publish':qrRuler.status == '已发布'}">{{qrRuler.status}}</span>
                        </div>
                        <div class="opration">
                            <span :class="{'can_opration':true}" @click="gotoQrRulerDetail(qrRuler.id)">详情</span>
                            <span @click="gotoModify(qrRuler,index)" v-if="subMenusDir=='/rulerManager'" :class="{'can_opration':isCanModify(qrRuler)}">修改</span>
                            <span @click="deleteQrRuler(qrRuler,index)" v-if="subMenusDir=='/rulerManager'" :class="{'can_opration':isCanDelete(qrRuler)}">删除</span>
                            <span @click="passQrRuler(qrRuler,index)" v-if="subMenusDir=='/rulerCheck'" class="can_opration">通过</span>
                            <span @click="rejectQrRuler(qrRuler,index)" v-if="subMenusDir=='/rulerCheck'" class="can_opration red-color">驳回</span>
                            <span @click="publishQrRuler(qrRuler,index)" v-if="subMenusDir=='/rulerPublish'" class="can_opration">发布</span>
                            <span @click="underlineQrRuler(qrRuler,index)" v-if="subMenusDir=='/rulerReset'" class="can_opration">下线</span>
                        </div>

                    </div>
                </div>
            </transition-group>
        </section>
        <section class="page_footer">
            <div class="check_status" v-if="subMenusDir=='/rulerManager'" />
            <div class="check_status" v-else>
                <input v-model="selectAll" id="checkall" type="checkbox" name="" value="">
                <label for="checkall">全选</label>
                <div class="opration_section" v-if="subMenusDir=='/rulerCheck'">
                    <span @click="passAllQrRuler()" class="pass">通过</span>
                    <span @click="rejectAllQrRuler()" class="reject">驳回</span>
                </div>
                <div class="opration_section" v-else-if="subMenusDir=='/rulerPublish'">
                    <span @click="publishAllQrRuler()" class="pass">发布</span>
                </div>
                <div class="opration_section" v-else-if="subMenusDir=='/rulerReset'">
                    <span @click="underAllQrRuler()" class="pass">下线</span>
                </div>

            </div>
            <pagination :display="display" :total="total" :current="current" @setCurrent="setCurrent"></pagination>
        </section>
    </section>
    <qr-ruler-manager :rulerId="clickedQrRulerId" @closePannel="closePannel" v-if="isShowViewQrRulerPannel" class="createQrRuler"></qr-ruler-manager>
    <create-qr-ruler :rulerId="clickedQrRulerId" @closePannel="closePannel" v-if="isShowCreateQrRulerPannel" class="createQrRuler"></create-qr-ruler>
    <section class="reject_section" v-show="isShowRejectPannel">
        <div class="reject_pannel">
            <div class="delete_relative">
                <img @click="isShowRejectPannel = false;" src="../../static/img/close.png" alt="">
            </div>
            <textarea v-model="rejectText" name="name" rows="8" cols="80">
            </textarea>
            <div class="delete_relative">
                <button @click="submitReject" type="button" name="button">提交</button>
            </div>
        </div>
    </section>
    <section class="reject_section" v-show="isShowPassPannel">
        <div class="pass_pannel">
            <span class="title">{{toastText}}</span></br>
            <div class="btn_content">
                <button @click="isShowPassPannel=false;" type="button" name="button">取消</button>
                <button @click="sureButton" type="button" name="button">确认</button>
            </div>
        </div>
    </section>
</section>

</template>

<script>

import pagination from '../components/pagination'
import router from '../router'
import createQrRuler from '../components/createQrRuler'
import qrRulerManager from '../components/viewQrRulerDetail'
import {
    mapState
}
from 'vuex';
export default {
    data() {
            return {
                toastText: '确认要删除已选中规则?',
                isShowPassPannel: false,
                rejectText: '',
                isShowRejectPannel: false,
                ruleSelectes: [],
                ruleSelected: '',
                qrRulers: [],
                channelsSelectes: [],
                total: 0,
                display: 10,
                current: 1,
                date: '',
                channelSelect: '',
                selectAll: false,
                unAbleRulerSearch: false,
                isShowCreateQrRulerPannel: false,
                isShowViewQrRulerPannel: false,
                clickedQrRulerId: ''

            }
        },
        computed: {
            ...mapState(['subMenusDir'])
        },
        components: {
            pagination,
            createQrRuler,
            qrRulerManager
        },
        watch: {
            selectAll(curVal, oldVal) {
                    if (this.qrRulers != null) {
                        for (var i = 0; i < this.qrRulers.length; i++) {
                            this.qrRulers[i].isSelect = curVal;
                        }
                    }
                },
                isShowCreateQrRulerPannel(curVal, oldVal) {
                    if (curVal) {
                        window.document.body.style.overflow = "hidden";
                    } else {
                        window.document.body.style.overflow = "scroll";
                    }
                },
                isShowViewQrRulerPannel(curVal, oldVal) {
                    if (curVal) {
                        window.document.body.style.overflow = "hidden";
                    } else {
                        window.document.body.style.overflow = "scroll";
                    }
                }
        },
        beforeDestroy(){
          document.bus.$off('switchQrRulers');
        },
        mounted: function() {
            let that = this;
            document.bus.$on('switchQrRulers', function(status) {
                switch (status) {
                    case '/rulerManager':
                        that.unAbleRulerSearch = false;
                        if(that.ruleSelected == ''){
                          return;
                        }
                        that.ruleSelected = '';
                        break;
                    case '/rulerCheck':
                        that.unAbleRulerSearch = true;
                        if(that.ruleSelected == '1'){
                          return;
                        }
                        that.ruleSelected = '1';
                        break;
                    case '/rulerPublish':
                        that.unAbleRulerSearch = true;
                        if(that.ruleSelected == '2'){
                          return;
                        }
                        that.ruleSelected = '2';
                        break;
                    case '/rulerReset':
                        that.unAbleRulerSearch = true;
                        if(that.ruleSelected == '4'){
                          return;
                        }
                        that.ruleSelected = '4';
                        break;

                    default:
                }
                that.selectAll = false;
                that.qrRulers = [];
                that.current = 1;
                that.setCurrent(that.current);
            });
            this.loadFirstData().then(value=>{
              this.qrRulers = value.result;
              if (this.qrRulers) {
                  this.qrRulers.unshift({
                      id: 0
                  });
              }
              this.total = value.totalCount;
              return this.loadQR_RULE_STATUS();
            }).catch(err=>{})
            .then(value => {
                if (value) {
                    value.unshift({
                        mcode: '',
                        mname: '全部'
                    });
                }
                this.ruleSelectes = value;
                return this.loadTV_CHANNEL();
            }).catch(err => {

            }).then(value => {
                return this.channelsSelectes = value;
            }).catch(err => {

            });

        },

        methods: {
            loadFirstData(){
              this.current = 1;
              return getPromise(urls.queQruleList, {
                  channelName: this.channelSelect,
                  date: this.date,
                  status: this.ruleSelected,
                  pageSize: 10,
                  pageNo: 1
              });
            },
            setCurrent(idx) {
                    this.current = idx;
                    getPromise(urls.queQruleList, {
                        channelName: this.channelSelect,
                        date: this.date,
                        status: this.ruleSelected,
                        pageSize: 10,
                        pageNo: idx
                    }).then(value => {
                        this.qrRulers = value.result;
                        if (this.qrRulers) {
                            this.qrRulers.unshift({
                                id: 0
                            });
                        }
                        this.total = value.totalCount;
                    }).catch(err => {});
                },
                loadQR_RULE_STATUS() {
                    return getPromise(urls.queData, {
                        gcode: 'QR_RULE_STATUS'
                    });
                },
                loadTV_CHANNEL() {
                    return getPromise(urls.queData, {
                        gcode: 'TV_CHANNEL'
                    });
                },
                sureButton() {
                    this.isShowPassPannel = false;
                    if (this.opAllType == '' || this.opAllType == undefined) {
                        this.opraQrRuler(this.optQrRuler.qrRuler, this.optQrRuler.index, this.optQrRuler.status);
                    } else {
                        this.opraAllQrRuler(this.opAllType);
                        this.opAllType = "";
                    }
                },
                submitReject() {
                    this.isShowRejectPannel = false;
                    if (this.isBatch) {
                        this.opraAllQrRuler('3');
                        this.isBatch = false;
                    } else {
                        this.opraQrRuler(this.optQrRuler.qrRuler, this.optQrRuler.index, this.optQrRuler.status);
                    }
                },
                isCanModify: function(qrRuler) {
                    return (qrRuler.status == '编辑中' || qrRuler.status == '审核驳回' || qrRuler.status == '已下线');
                },
                isCanDelete: function(qrRuler) {
                    return (qrRuler.status == '编辑中' || qrRuler.status == '审核驳回' || qrRuler.status == '已下线');
                },
                gotoModify(qrRuler, index) {
                    this.modifyIndex = index;
                    if (this.isCanModify(qrRuler)) {
                        this.clickedQrRulerId = qrRuler.id;
                        this.isShowCreateQrRulerPannel = true;
                    }

                },
                opraQrRuler(qrRuler, index, status) {
                    let rejectT = '';
                    if (status == '3') {
                        rejectT = this.rejectText;
                    }
                    getPromise(urls.updateQRrulesStatus, {
                        ruleids: qrRuler.id,
                        status: status,
                        rejectText: rejectT
                    }).then(value => {
                        this.qrRulers.splice(index, 1);
                    });
                },
                opraAllQrRuler(status) {
                    this.isShowPassPannel = false;
                    this.isShowRejectPannel = false;
                    let proQrRulers = [];
                    let selectedQrRulerids = '';
                    for (var i = 0; i < this.qrRulers.length; i++) {
                        if (i == 0) {
                            proQrRulers.push({
                                id: '0'
                            });
                            continue;
                        }
                        let ruler = this.qrRulers[i];
                        if (ruler.isSelect) {
                            selectedQrRulerids = selectedQrRulerids + ruler.id + ',';
                        } else {
                            proQrRulers.push(this.qrRulers[i]);
                        }
                    }
                    let rejectT = "";
                    if (status == '3') {
                        rejectT = this.rejectText;
                    }
                    if (selectedQrRulerids.length == 0) {
                        return;
                    }
                    getPromise(urls.updateQRrulesStatus, {
                        ruleids: selectedQrRulerids,
                        status: status,
                        rejectText: rejectT
                    }).then(value => {
                        this.qrRulers = proQrRulers;
                    });
                },
                passQrRuler(qrRuler, index) {
                    //状态,0:未提交审核, 1:待审核 2:审核通过，3:审核不通过 ，4:发布，5:下线, 6:删除
                    this.isShowPassPannel = true;
                    this.toastText = "确认审核通过已选中规则?"
                    this.optQrRuler = {
                        qrRuler: qrRuler,
                        index: index,
                        status: '2'
                    }
                },
                rejectQrRuler(qrRuler, index) {
                    this.isShowRejectPannel = true;
                    this.optQrRuler = {
                        qrRuler: qrRuler,
                        index: index,
                        status: '3'
                    }
                },
                publishQrRuler(qrRuler, index) {
                    this.isShowPassPannel = true;
                    this.toastText = "确认发布已选中规则?"
                    this.optQrRuler = {
                        qrRuler: qrRuler,
                        index: index,
                        status: '4'
                    }
                },
                underlineQrRuler(qrRuler, index) {
                    this.isShowPassPannel = true;
                    this.toastText = "确认下线已选中规则?"
                    this.optQrRuler = {
                        qrRuler: qrRuler,
                        index: index,
                        status: '5'
                    }
                },
                deleteQrRuler(qrRuler, index) {
                    if (this.isCanDelete(qrRuler)) {
                        this.isShowPassPannel = true;
                        this.toastText = "确认删除已选中规则?"
                        this.optQrRuler = {
                            qrRuler: qrRuler,
                            index: index,
                            status: '6'
                        }
                    }
                },
                passAllQrRuler() {
                    this.opAllType = '2';
                    this.isShowPassPannel = true;
                    this.toastText = "确认审核通过已选中规则?"
                },
                rejectAllQrRuler() {
                    this.isBatch = true;
                    this.isShowRejectPannel = true;
                },
                publishAllQrRuler() {
                    this.opAllType = '4';
                    this.isShowPassPannel = true;
                    this.toastText = "确认发布已选中规则?"

                },
                underAllQrRuler() {
                    this.opAllType = '5';
                    this.isShowPassPannel = true;
                    this.toastText = "确认下线已选中规则?"
                },

                gotoQrRulerDetail(id) {
                    this.clickedQrRulerId = id;
                    this.isShowViewQrRulerPannel = true;
                },
                closePannel(data) {
                    if (data[0]) {
                        this.setCurrent(this.current);
                    }
                    this.isShowViewQrRulerPannel = false;
                    this.isShowCreateQrRulerPannel = false;
                },
                search() {
                    this.setCurrent(1);
                },
                createNewQrRuler() {
                    this.clickedQrRulerId = '';
                    this.isShowCreateQrRulerPannel = true;
                }
        }

}

</script>
