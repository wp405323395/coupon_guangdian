<template lang="html">
<div class="container">
<div class="dark_background" v-show="show_dark"/>

<section class="answer_faild" v-if="answer_faild">
  <div class="faild_wrap">
    <span class="title">答错啦</span>
    <span class="note">快去饿补一下再来挑战吧</span>
    <button @click="game_again" type="button" name="button">重新挑战</button>
    <button @click="back_index" class="back_index" type="button" name="button">回到首页</button>
  </div>

</section>
<section class="final_success" v-if="answerFinishSuccess">
  <div class="success_wrap">
    <span>恭喜获得称号</span>
    <img src="../../static/img/title_get.png" alt="">
    <button type="button" name="button">分享战果</button>
  </div>
</section>
<section class="help_section">

</section>
  </section>
  <section class="content">
    <div class="item">
      <span>{{pageNo}}/{{pageCount}}</span><br>
      <span class="title">{{subjectTitle}}</span>
      <ul>
        <li @click="itemClick(sub)" v-for="sub in subjectOptions">
          <span class="option_style">{{sub.option}}</span>
          <span class="option_text">{{sub.optionDetail}}</span>
        </li>
      </ul>
      <span class="help">求助好友&nbsp;》</span>
    </div>
    <footer>
        <div class="text">
          <span>长按二维码，关注公众号</span><br>
          <span>精彩游戏走不丢</span>
        </div>
        <img src="../../static/img/qr.png" alt="">
    </footer>
  </section>
</div>


</template>

<script>
import RequestEngine from 'netenginwang'
import urls from '../config.js'
export default {
  name: 'gameItem',
  data () {
    return {
      pageNo:1,
      subjectTitle:'',
      subjectOptions:[],
      subjectId:'',
      params:{},
      show_dark:false,
      answer_faild:false,
      pageCount:10,
      answerFinishSuccess:false
    }
  },
  mounted: function() {
    this.params = this.$route.params;
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
  },
  methods: {
    itemClick(sub){
      let that = this;
      new Promise((resolve, reject) => {
        new RequestEngine().request(urls.doGameAnswer, {"subjectId" : this.subjectId, answer:sub.option},
          successValue => {
            if(successValue) {
              resolve(successValue);

            } else {
              reject();
              that.show_dark = true;
              that.answer_faild = true
            }
          }, failValue => {
            reject(failValue);
          }, completeValue => {})
      }).then(value=>{
        if(this.pageNo == this.pageCount) {
          this.answerFinishSuccess = true;
          this.show_dark = true;
          return ;
        }
        let that = this;
        this.params.pageNo = this.params.pageNo++;
        this.pageNo = this.pageNo +1;
        new RequestEngine().request(urls.queSubjectList, this.params,
          successValue => {
            that.subjectTitle = successValue.subjectTitle;
            that.subjectOptions = successValue.subjectOptions;
            that.subjectId = successValue.subjectId;
          }, failValue => {

          }, completeValue => {})
      }).catch(err=>{

      })

    },
    game_again(){
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
    back_index(){
     this.$router.go(-1);
    }
  }
}
</script>

<style  lang="scss" scoped>
.container{
  background-color: black;
  height: 100%;
  .progress{

  }
  .dark_background{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }
  .final_success{
    position: relative;
    height: 1px;
    .success_wrap{
      position: absolute;
      width: 7rem;
      height: 9rem;
      top: .3rem;
      right: .25rem;
      background-image: url('../../static/img/success_promp.png');
      background-size: 7rem 9rem;
      display: flex;
      flex-direction: column;
      align-items:center;
      span{
        margin-top: 4.5rem;
        font-size: .18rem;
      }
      img{
        margin-top: .16rem;
        width: 2.36rem;
        height: .94rem;
      }
      button{
        width: 5.8rem;
        height: .8rem;
        background-image: url("../../static/img/button_blue.png");
        color: white;
        background-size: 5.8rem .8rem;
        font-size: .36rem;
      }
      button:active{
        transform: translateY(.1rem);
      }
    }
  }
  .answer_faild{
    position: relative;
    height: 1px;
    .faild_wrap{
      position: absolute;
      width: 5rem;
      height: 5rem;
      top: 2rem;
      right: 1.25rem;
      background-image: url('../../static/img/answer_faild.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items:center;
      span{
        font-size: .18rem;
        color: black;
        text-align: center;
        display: inline-block;
      }
      .title{
        margin-top: 1.7rem;
        font-size: .5rem;
        font-weight: 700;
      }
      .note{
        margin-top: .2rem;
        font-size: .23rem;
      }
      button{
        margin-top: .4rem;
        height: .6rem;
        background-image: url('../../static/img/button_blue.png');
        color: white;
        background-size: 3rem .6rem;
        width: 3rem;
      }
      .back_index{
        margin-top: .2rem;
        background-image: url('../../static/img/back_index.png');
        color: blue;
      }
      button:active{
        transform: translateY(.05rem);
      }

    }

  }
  .content{
    .item{
      padding-left: .5rem;
      padding-top: .3rem;
      span{
        color: #3b3a4c;
        font-size: 1.2rem;
        font-weight: 700;
      }
      .title{
        color: white;
        font-size: .38rem;
        font-weight: 600;
        margin-top: .6rem;
        display: block;
      }
      ul{
        li{
          background-image: url('../../static/img/game_item.png');
          background-repeat: no-repeat;
          margin-top: .4rem;
          background-size: cover;

          .option_text{
            display: inline-block;
            text-indent: .6rem;
            height: .7rem;
            line-height: .7rem;
            font-size: .42rem;
            color: white;
          }
          .option_style{
            display: inline-block;
            height: .7rem;
            line-height: .7rem;
            font-size: .42rem;
            color: white;
            text-indent: .22rem;
          }
        }
        li:first-child{
          margin-top: .4rem;
        }
      }
      .help{
        font-size: .3rem;
        margin-top: .6rem;
        display: inline-block;
        color:#9e99c9;
      }
    }
  }
  footer{
    margin-top: 2.5rem;
    .text{
      display: inline-block;
      span{
        color: #9e99c9;
        width: 100%;
        display: inline-block;
        font-size: .26rem;
        text-align: right;
      }
      margin-left: 1.8rem;
      transform: translateY(-.2rem);
    }
    img{
      margin-left: .3rem;
    }
  }

}
</style>
