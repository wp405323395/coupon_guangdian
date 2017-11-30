<style  lang="scss" scoped>

.container {
    background-color: #1d1c27;
    height: 100%;
    .dark_background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
    }
    .help_mengceng {
        width: 100%;
        height: 100%;
        background-image: url('../../static/img/need_help.png');
        background-size: 100% 100%;
        position: absolute;
        z-index: 1000;
    }
    .final_success {
        position: relative;
        height: 1px;
        .success_wrap {
            position: absolute;
            width: 7rem;
            height: 9rem;
            top: .3rem;
            right: .25rem;
            background-image: url('../../static/img/success_promp.png');
            background-size: 7rem 9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
                margin-top: 4.5rem;
                font-size: .32rem;
                color: #666666;
                display: inline-block;
                padding-top: .2rem;
            }
            .next_game {
                margin-top: .25rem;
                font-size: .32rem;
                text-decoration: underline;
            }
            .next_game:active {
                transform: translateY(.1rem);
            }
            img {
                margin-top: .16rem;
                width: 2.8rem;
                height: 1.2rem;
                padding-bottom: .3rem;
            }
            button {
                width: 5.8rem;
                height: .8rem;
                background-image: url("../../static/img/button_blue.png");
                color: white;
                background-size: 5.8rem .8rem;
                font-size: .36rem;
            }
            button:active {
                transform: translateY(.1rem);
            }
        }
    }
    .answer_faild {
        position: relative;
        height: 1px;
        .faild_wrap {
            position: absolute;
            width: 6.1rem;
            height: 6.4rem;
            top: 1.5rem;
            right: .7rem;
            background-image: url('../../static/img/answer_faild.png');
            background-size: contain;
            background-size: 6.1rem 6.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
                font-size: .18rem;
                color: black;
                text-align: center;
                display: inline-block;
            }
            .title {
                margin-top: 2.2rem;
                font-size: .5rem;
                font-weight: 700;
            }
            .note {
                margin-top: .07rem;
                font-size: .3rem;
            }
            button {
                margin-top: .6rem;
                height: .8rem;
                background-image: url('../../static/img/button_blue.png');
                color: white;
                background-size: 4.2rem .8rem;
                width: 4.2rem;
                font-size: .36rem;
            }
            .back_index {
                margin-top: .3rem;
                background-image: url('../../static/img/back_index.png');
                color: blue;
            }
            button:active {
                transform: translateY(.05rem);
            }
        }
    }
    .content {
        progress {
            width: 100%;
            height: .1rem;
            display: block;
        }
        .qr_img {
            width: 1.8rem;
            height: 1.8rem;
            float: right;
            margin-right: .3rem;
            margin-top: .5rem;
        }
        .item {
            padding-left: .5rem;
            padding-top: .1rem;
            span {
                color: #3b3a4c;
                font-size: 1.2rem;
                font-weight: 600;
                font-family: sans-serif;
            }
            .page_num {
                letter-spacing: .1rem;
                text-indent: .2rem;
                display: block;
            }
            .title {
                color: white;
                font-size: .44rem;
                font-weight: 600;
                margin-top: .4rem;
                margin-bottom: .5rem;
                text-indent: .2rem;
                display: block;
            }
            ul {
                li {
                    a {
                        background-image: url('../../static/img/game_item.png');
                        background-repeat: no-repeat;
                        margin-top: .4rem;
                        background-size: cover;
                        display: block;
                    }
                    a:active {
                        background-image: url('../../static/img/game_item_select.png');
                    }
                    .option_text {
                        display: inline-block;
                        text-indent: .4rem;
                        height: .7rem;
                        line-height: .7rem;
                        font-size: .36rem;
                        color: white;
                        font-weight: 300;
                    }
                    .option_style {
                        display: inline-block;
                        height: .7rem;
                        line-height: .7rem;
                        font-size: .42rem;
                        color: white;
                        text-indent: .22rem;
                    }
                }
                li:first-child {
                    margin-top: .4rem;
                }
            }
            .help {
                font-size: .3rem;
                margin-top: .6rem;
                display: inline-block;
                color: #9e99c9;
                text-indent: .2rem;
                font-weight: 300;
                text-decoration: underline;
            }
            .help:active {
                transform: translateY(.1rem);
            }
        }
    }
}

</style>

<template lang="html">

<div class="container">
    <div class="dark_background" v-show="show_dark" />
    <section @click="hidden()" class="help_mengceng" v-if="isShowHelp">

    </section>
    <section class="answer_faild" v-if="answer_faild">
        <div class="faild_wrap">
            <span class="title">答错啦</span>
            <span class="note">快去恶补一下再来挑战吧</span>
            <button @click="game_again" type="button" name="button">重新挑战</button>
            <button @click="back_index" class="back_index" type="button" name="button">回到首页</button>
        </div>

    </section>
    <section class="final_success" v-if="answerFinishSuccess">
        <div class="success_wrap">
            <span>恭喜获得称号</span>
            <!-- <img src="../../static/img/title_get.png" alt=""> -->
            <img :src="levelImg" alt="">
            <button @click="share()" type="button" name="button">分享战果</button>
            <span @click="nextGame" class="next_game" style="color: #f34066">挑战下一关</span>
        </div>
    </section>
    <section class="help_section">

    </section>

    <section class="content">
        <progress :value="pageNo" :max="pageCount">0%</progress>
        <div class="item">
            <span class="page_num">{{pageNo}}/{{pageCount}}</span>
            <br>
            <span class="title">{{subjectTitle}}</span>
            <ul>
                <li @click="itemClick(sub)" v-for="sub in subjectOptions">
                    <a href="javascript:void(0);">
                        <span class="option_style">{{sub.option}}</span>
                        <span class="option_text">{{sub.optionDetail}}</span>
                    </a>
                </li>
            </ul>
            <span class="help" @click="needHelp">求助好友&nbsp;</span>
        </div>
        <img class="qr_img" src="../../static/img/qr_de.png" alt="">
    </section>
</div>

</template>

<script>
import * as routeUtil from '../utils/routeUtil'
import RequestEngine from 'netenginwang'
import urls from '../config.js'
export default {
    name: 'gameItem',
    data() {
        return {
            pageNo: 1,
            subjectTitle: '',
            subjectOptions: [],
            subjectId: '',
            params: {},
            show_dark: false,
            answer_faild: false,
            pageCount: 10,
            answerFinishSuccess: false,
            isShowHelp: false,
            levelnum: 0
        }
    },
    mounted: function() {
        this.params = this.$route.params;
        this.levelnum = this.params.levelnum;
        console.log(this.params);
        let that = this;
        new RequestEngine().request(urls.queSubjectList, this.params,
            successValue => {
                that.subjectTitle = successValue.subjectTitle;
                that.subjectOptions = successValue.subjectOptions;
                that.subjectId = successValue.subjectId;
                that.pageCount = successValue.pageCount;
            }, failValue => {

            }, completeValue => {})
        routeUtil.routeProcess(this, {
            jsonDate: this.params,
            title: '剧情踩踩踩',
            desc: '这是一个神奇的游戏，快来玩吧',
            success: function() {
                console.log("成功啦");
            },
            cancel: function() {
                console.log("失败啦");
            }
        });
    },
    computed: {
        levelImg() {
            let imgUrl = require("../../static/img/title_get.png")
            switch (this.levelnum) {
                case '0':
                    imgUrl = require("../../static/img/title_get.png")
                    break;
                case '1':
                    imgUrl = require("../../static/img/title_get2.png")
                    break;
                case '2':
                    imgUrl = require("../../static/img/title_get3.png")
                    break;
                case '3':
                    imgUrl = require("../../static/img/title_get4.png")
                    break;
                case '4':
                    imgUrl = require("../../static/img/title_get3.png")
                    break;
                case '5':
                    imgUrl = require("../../static/img/title_get2.png")
                    break;
                default:
                    imgUrl = require("../../static/img/title_get.png")
            }
            console.log(imgUrl);
            return imgUrl;
        }
    },
    methods: {
        needHelp() {
                this.isShowHelp = true;
            },
            hidden() {
                if (this.isShowHelp) {
                    this.isShowHelp = false;
                }
            },
            share() {
                this.isShowHelp = true
            },
            nextGame() {
                this.$router.go(-1);
            },
            itemClick(sub) {
                let that = this;
                new Promise((resolve, reject) => {
                    new RequestEngine().request(urls.doGameAnswer, {
                            "subjectId": this.subjectId,
                            answer: sub.option,
                            pageNum: that.pageNo
                        },
                        successValue => {
                            if (successValue) {
                                resolve(successValue);

                            } else {
                                reject();
                                that.show_dark = true;
                                that.answer_faild = true
                            }
                        }, failValue => {
                            reject(failValue);
                        }, completeValue => {})
                }).then(value => {
                    if (this.pageNo == this.pageCount) {
                        this.answerFinishSuccess = true;
                        this.show_dark = true;
                        return;
                    }
                    let that = this;
                    this.params.pageNo = this.params.pageNo++;
                    this.pageNo = this.pageNo + 1;
                    new RequestEngine().request(urls.queSubjectList, this.params,
                        successValue => {
                            that.subjectTitle = successValue.subjectTitle;
                            that.subjectOptions = successValue.subjectOptions;
                            that.subjectId = successValue.subjectId;
                        }, failValue => {

                        }, completeValue => {})
                }).catch(err => {

                })

            },
            game_again() {
                this.params.pageNo = 1;
                this.pageNo = 1;
                let that = this;
                this.show_dark = false;
                this.answer_faild = false;
                new RequestEngine().request(urls.queSubjectList, this.params,
                    successValue => {
                        that.subjectTitle = successValue.subjectTitle;
                        that.subjectOptions = successValue.subjectOptions;
                        that.subjectId = successValue.subjectId;
                    }, failValue => {

                    }, completeValue => {})
            },
            back_index() {
                this.$router.go(-1);
            }
    }
}

</script>
