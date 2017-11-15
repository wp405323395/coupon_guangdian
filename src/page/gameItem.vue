<template lang="html">
<div class="container">
  </section>
  <section class="content">
    <div class="item">
      <span>{{pageNo}}/15</span><br>
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
      params:{}
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
      }, failValue => {

      }, completeValue => {})
  },
  methods: {
    itemClick(sub){
      new Promise((resolve, reject) => {
        new RequestEngine().request(urls.doGameAnswer, {"subjectId" : this.subjectId, answer:sub.option},
          successValue => {
            if(successValue) {
              resolve(successValue);
            } else {
              reject();
              window.alertDialog('答题错误');
            }
          }, failValue => {
            reject(failValue);
          }, completeValue => {})
      }).then(value=>{
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
            height: 1rem;
            line-height: 1rem;
            font-size: .42rem;
            color: white;
          }
          .option_style{
            display: inline-block;
            height: 1rem;
            line-height: 1rem;
            font-size: .42rem;
            color: white;
            text-indent: .35rem;
          }
        }
        li:first-child{
          margin-top: .6rem;
        }
      }
      .help{
        font-size: .3rem;
        margin-top: .8rem;
        display: inline-block;
        color:#9e99c9;
      }
    }
  }
  footer{
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
