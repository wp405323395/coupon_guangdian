<style  lang="scss" scoped>

.container {
    width: 100%;
    background-color: black;
    .banner {
        .banner_img {
            width: 100%;
            padding: 0;
            margin: 0;
        }
        .title {
            position: absolute;
            top: .4rem;
            left: .3rem;
            width: 2.2rem;
        }
    }
    .content {
        width: 6.90rem;
        height: 8.89rem;
        background-image: url('../../static/img/content_background.png');
        background-size: cover;
        margin-left: .3rem;
        transform: translateY(-.72rem);
        .number_lable {
            display: inline-block;
            color: white;
            font-size: .2rem;
            transform: translateY(-.29rem);
            width: 2rem;
        }
        .number {
            display: inline-block;
            width: 3.67rem;
            height: .63rem;
            margin-top: .06rem;
            margin-left: .2rem;
            padding-left: .2rem;
            font-size: .45rem;
            color: white;
            letter-spacing: .355rem;
        }
        .test_content {
            width: 100%;
            height: 5rem;
            .test_option {
                display: inline-block;
                .haspass {
                    position: relative;
                    width: 100%;
                    height: 1px;
                    img {
                        position: absolute;
                        top: .06rem;
                        left: .04rem;
                        font-size: 10px;
                        color: white;
                        width: .7rem;
                        height: .24rem;
                        border: none;
                        border-radius: 0;
                    }
                }
                img {
                    width: 1.64rem;
                    margin: .33rem;
                    margin-bottom: 0rem;
                    display: block;
                    border: 1px solid #817dbd;
                    box-sizing: border-box;
                    border-radius: 5px;
                }
                .active {
                    border: 4px solid #f34066;
                }
                span {
                    font-size: .25rem;
                    color: #817dbd;
                    width: 1.6rem;
                    display: block;
                    margin: .33rem;
                    margin-bottom: 0rem;
                    margin-top: .1rem;
                }
                .item_lable {
                    width: 1.64rem;
                    height: 1px;
                    position: relative;
                    span {
                        width: 100%;
                        border: 1px solid transparent;
                        position: absolute;
                        top: -.6rem;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                        background-color: rgba(0, 0, 0, 0.5);
                        background-clip: padding-box;
                        color: white;
                        text-align: center;
                        display: block;
                        padding-top: .08rem;
                        padding-bottom: .08rem;
                        font-size: .28rem;
                    }
                }
            }
        }
        button {
            margin-left: .35rem;
            margin-top: .36rem;
            width: 6.2rem;
            height: .7rem;
            background-color: #f34066;
            color: white;
            letter-spacing: .1rem;
            font-size: .36rem;
        }
        button:active {
            transform: translateY(5px);
        }
        .game_introduce {
            padding-left: .3rem;
            width: 100%;
            height: 50px;
            margin-top: .6rem;
            label {
                font-size: .22rem;
                color: white;
            }
            ul {
                font-size: 10px;
                li {
                    color: white;
                }
            }
        }
    }
}

</style>

<template lang="html">

<div class="container">
    <section class="banner">
        <img class="title" src="../../static/img/game_title.png" alt="">
        <img class="banner_img" :src="tvProgramImg" alt="">
    </section>
    <section class="content">
        <span class="number_lable">当前参与游戏总人数</span>
        <span class="number">{{personCount}}</span>
        <section class="test_content">
            <div class="test_option" v-for="(level, index) of levelsDetal">
                <div class="haspass">
                    <img v-if="level.isSuccess == '1'" src="../../static/img/game_success.png"></img>
                </div>
                <img :class="{ active: (currentLevel == index)}" :src="level.imgurl" alt="">
                <div class="item_lable">
                    <span>{{level.levelname}}</span>
                </div>
                <span>{{level.abstarct}}</span>
            </div>
        </section>
        <button :disabled="currentLevel == 6" @click="beginGame" type="button" name="button">{{currentLevel == 6?'挑战完成啦':'开始挑战'}}</button>
        <section class="game_introduce">
            <label>游戏说明</label>
            <ul>
                <li>1.默认从第一关开始，不可跳跃或选择关卡</li>
                <li>2.游戏开始后中途答错则游戏结束，可分享求助或重新开始</li>
                <li>3.每个用户每天有三次挑战机会</li>
            </ul>
        </section>
    </section>

</div>

</template>

<script>
import RequestEngine from 'netenginwang'
import * as routeUtil from '../utils/routeUtil'
import urls from '../config.js'
import router from '../router'
export default {
    name: 'index',
    data() {
        return {
            levelsDetal: [],
            currentLevel: '0',
            personCount: '000000',
            gameId: '',
            tvId: '0',
            tvProgramImg: ''
        }
    },
    mounted: function() {
        document.title = this.$route.meta.title;
        let cashTvId = sessionStorage.getItem('gameIndex_tvId');
        if (cashTvId) {
            this.tvId = cashTvId;
        } else {
            this.tvId = this.$route.params.tvId;
            sessionStorage.setItem('gameIndex_tvId', this.tvId);
        }
        if (process.env.NODE_ENV === 'development') {
            this.tvId = 1;
        }


        let that = this;
        new RequestEngine().request(urls.listFansLevel, {
                tvId: this.tvId
            },
            successValue => {
                that.levelsDetal = successValue.levelsDetal;
                that.currentLevel = successValue.currentLevel;
                that.personCount = successValue.personCount;
                that.gameId = successValue.gameId;
                that.tvProgramImg = successValue.tvProgramImg;
            }, failValue => {

            }, completeValue => {})
        routeUtil.routeProcess(this,{
            jsonDate:{tvId:this.tvId},
            title : '剧情踩踩踩',
              desc : '这是一个神奇的游戏，快来玩吧',
              success: function(){
                console.log("成功啦");
              },
              cancel: function(){
                console.log("失败啦");
              }
          }
        );
    },
    methods: {

        beginGame() {
            let params = {
                pageNo: 1,
                tvId: this.tvId,
                gameId: this.gameId,
                levelnum: this.currentLevel
            };
            console.log(params);
            router.push({
                name: 'gameitem',
                params: params
            });
        }
    }
}

</script>
